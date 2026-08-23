import type { StaticImageData } from "next/image";

export type BlogCategoryId =
  | "general"
  | "car"
  | "truck"
  | "motorcycle";

export type BlogImage = StaticImageData | string;

export type BlogArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  afterBullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  categoryId: BlogCategoryId;
  categoryLabel: string;
  title: string;
  excerpt: string;
  description: string;
  authorName: string | null;
  authorLink: string | null;
  image: BlogImage | null;
  heroImage: BlogImage | null;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  viewCount: number;
  /** CMS SEO keywords; empty → page uses defaults. */
  seoKeywords: string[];
  htmlContent: string;
  content: BlogArticleSection[];
};

export const DEFAULT_BLOG_SEO_KEYWORDS = [
  "vehicle maintenance",
  "car care tips Nigeria",
  "Whipcare blog",
] as const;

export function resolveBlogSeoKeywords(post: BlogPost): string[] {
  if (post.seoKeywords.length > 0) return post.seoKeywords;
  return [
    post.categoryLabel,
    ...DEFAULT_BLOG_SEO_KEYWORDS,
    ...(post.authorName ? [post.authorName] : []),
  ];
}

export function formatBlogViewCount(count: number): string {
  const safe = Math.max(0, Math.floor(count));
  return new Intl.NumberFormat("en", {
    notation: safe >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(safe);
}

export function getBlogImageUrl(image: BlogImage | null): string | null {
  if (!image) return null;
  return typeof image === "string" ? image : image.src;
}

export function getBlogImageAbsoluteUrl(
  image: BlogImage | null,
  siteUrl: string
): string | null {
  const url = getBlogImageUrl(image);
  if (!url) return null;
  return url.startsWith("http") ? url : `${siteUrl}${url}`;
}

export const blogCategoryOptions = [
  { id: "all", label: "All" },
  { id: "general", label: "General Vehicle Maintenance" },
  { id: "car", label: "Car Tips" },
  { id: "truck", label: "Truck Tips" },
  { id: "motorcycle", label: "Motorcycle Tips" },
] as const;

export const getBlogCategories = (posts: BlogPost[]) =>
  blogCategoryOptions.map((category) =>
    category.id === "all"
      ? { ...category, count: posts.length }
      : category
  );

export const getBlogWordCount = (post: BlogPost) => {
  if (post.htmlContent) {
    return post.htmlContent
      .replace(/<[^>]+>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
  }

  return post.content.reduce((count, section) => {
    const text = [
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.afterBullets ?? []),
    ].join(" ");

    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);
};
