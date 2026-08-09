import { cache } from "react";
import { API_BASE_URL } from "@/lib/api";
import type {
  BlogArticleSection,
  BlogCategoryId,
  BlogPost,
} from "@/screens/BlogScreen/blogData";

type ApiBlogListItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  authorName?: string | null;
  authorLink?: string | null;
  categories: string[];
  status: string;
  createdAt: string;
  publishedAt?: string;
};

type ApiBlogDetail = ApiBlogListItem & {
  content: string;
  pageTitle?: string;
  pageDescription?: string;
  updatedAt?: string;
  createdBy?: string;
};

type ApiListResponse = {
  status: boolean;
  statusCode?: number;
  message?: string;
  data: ApiBlogListItem[];
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

type ApiDetailResponse = {
  status: boolean;
  statusCode?: number;
  message?: string;
  data: ApiBlogDetail;
};

const CATEGORY_MAP: Record<
  string,
  { id: BlogCategoryId; label: string }
> = {
  general: { id: "general", label: "General Vehicle Maintenance" },
  car: { id: "car", label: "Car Tips" },
  car_tips: { id: "car", label: "Car Tips" },
  truck: { id: "truck", label: "Truck Tips" },
  truck_tips: { id: "truck", label: "Truck Tips" },
  motorcycle: { id: "motorcycle", label: "Motorcycle Tips" },
  motorcycle_tips: { id: "motorcycle", label: "Motorcycle Tips" },
};

function resolveCategory(categories: string[] = []) {
  for (const raw of categories) {
    const mapped = CATEGORY_MAP[raw.toLowerCase()];
    if (mapped) return mapped;
  }
  return CATEGORY_MAP.general;
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingMinutes(html: string) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function enrichHtmlContent(html: string): {
  htmlContent: string;
  content: BlogArticleSection[];
} {
  const sections: BlogArticleSection[] = [];
  let index = 0;

  const nextSectionId = (title: string) => {
    index += 1;
    const id = `section-${index}`;
    sections.push({
      id,
      title: title || `Section ${index}`,
      paragraphs: [],
    });
    return id;
  };

  // CMS often uses <p><strong>Section title:</strong></p> instead of real headings.
  // Keep markup/fonts as authored — only add ids for TOC anchors.
  const withSectionAnchors = html.replace(
    /<p(\s[^>]*)?>\s*<(strong|b)(\s[^>]*)?>([^<]*)<\/\2>\s*(?:&nbsp;|\s)*<\/p>/gi,
    (
      match,
      pAttrs = "",
      tag: string,
      sAttrs = "",
      inner: string,
      offset: number,
      full: string
    ) => {
      const before = full.slice(0, offset).toLowerCase();
      const lastLiOpen = Math.max(
        before.lastIndexOf("<li>"),
        before.lastIndexOf("<li ")
      );
      const lastLiClose = before.lastIndexOf("</li");
      if (lastLiOpen > lastLiClose) return match;

      const title = stripHtml(inner).replace(/\s+/g, " ").trim();
      if (title.length < 12) return match;
      if (/^step\s*\d+/i.test(title)) return match;

      const isSectionHeading =
        title.endsWith(":") ||
        /^why\b/i.test(title) ||
        /^\d+\.\s+\S+/i.test(title);
      if (!isSectionHeading) return match;

      const id = nextSectionId(title);
      const attrsWithoutId = String(pAttrs).replace(
        /\sid=(["'])[\s\S]*?\1/i,
        ""
      );
      return `<p${attrsWithoutId} id="${id}"><${tag}${sAttrs}>${inner}</${tag}></p>`;
    }
  );

  const htmlContent = withSectionAnchors.replace(
    /<h([1-3])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, attrs = "", inner: string) => {
      const title =
        stripHtml(inner).replace(/\s+/g, " ").trim() || `Section ${index + 1}`;
      const id = nextSectionId(title);
      const withoutId = attrs.replace(/\sid=(["'])[\s\S]*?\1/i, "");
      return `<h${level}${withoutId} id="${id}">${inner}</h${level}>`;
    }
  );

  return { htmlContent, content: sections };
}

function resolveCoverImage(coverImage?: string | null) {
  const trimmed = coverImage?.trim();
  return trimmed || null;
}

function resolveAuthorName(authorName?: string | null) {
  const trimmed = authorName?.trim();
  return trimmed || null;
}

function resolveAuthorLink(authorLink?: string | null) {
  const trimmed = authorLink?.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

function mapListItemToPost(item: ApiBlogListItem): BlogPost {
  const category = resolveCategory(item.categories);
  const publishedAt = item.publishedAt || item.createdAt;
  const cover = resolveCoverImage(item.coverImage);

  return {
    id: item.id,
    slug: item.slug,
    categoryId: category.id,
    categoryLabel: category.label,
    title: item.title,
    excerpt: item.excerpt,
    description: item.excerpt,
    authorName: resolveAuthorName(item.authorName),
    authorLink: resolveAuthorLink(item.authorLink),
    image: cover,
    heroImage: cover,
    publishedAt,
    updatedAt: publishedAt,
    readingTimeMinutes: 1,
    htmlContent: "",
    content: [],
  };
}

async function mapDetailToPost(item: ApiBlogDetail): Promise<BlogPost> {
  const base = mapListItemToPost(item);

  let cleanHtml = "";
  try {
    const { sanitizeBlogHtml } = await import("@/lib/sanitizeHtml");
    cleanHtml = sanitizeBlogHtml(item.content || "");
  } catch {
    // DOMPurify/jsdom can fail in some serverless runtimes — serve stripped text fallback
    cleanHtml = (item.content || "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "");
  }

  const { htmlContent, content } = enrichHtmlContent(cleanHtml);

  return {
    ...base,
    title: item.pageTitle || item.title,
    description: item.pageDescription || item.excerpt,
    updatedAt: item.updatedAt || item.publishedAt || item.createdAt,
    readingTimeMinutes: estimateReadingMinutes(cleanHtml || item.excerpt),
    htmlContent,
    content,
  };
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export const fetchBlogs = cache(
  async (
    page = 1,
    limit = 20,
    sort: "newest" | "oldest" = "newest"
  ): Promise<BlogPost[]> => {
    const payload = await fetchJson<ApiListResponse>(
      `/api/v1/admin/blogs?page=${page}&limit=${limit}&sort=${sort}`
    );

    if (!payload?.status || !Array.isArray(payload.data)) return [];

    return payload.data
      .filter((item) => item.status === "published")
      .map(mapListItemToPost);
  }
);

/** GET /api/v1/admin/blogs/{{BLOG_ID}} */
export const fetchBlogById = cache(
  async (id: string): Promise<BlogPost | null> => {
    const payload = await fetchJson<ApiDetailResponse>(
      `/api/v1/admin/blogs/${encodeURIComponent(id)}`
    );

    if (!payload?.status || !payload.data) return null;
    if (payload.data.status !== "published") return null;

    return mapDetailToPost(payload.data);
  }
);

/** Resolve slug from list, then load full post by ID. */
export const fetchBlogBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const posts = await fetchBlogs(1, 100, "newest");
    const match = posts.find((post) => post.slug === slug);
    if (!match) return null;
    return fetchBlogById(match.id);
  }
);

export async function fetchRelatedPosts(
  slug: string,
  limit = 3
): Promise<BlogPost[]> {
  const posts = await fetchBlogs(1, 100, "newest");
  const current = posts.find((post) => post.slug === slug);
  if (!current) return posts.slice(0, limit);

  const sameCategory = posts.filter(
    (post) => post.slug !== slug && post.categoryId === current.categoryId
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.categoryId !== current.categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
}
