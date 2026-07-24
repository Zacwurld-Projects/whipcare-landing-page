import type { StaticImageData } from "next/image";

export type BlogCategoryId =
  | "general"
  | "car"
  | "truck"
  | "motorcycle";

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
  image: StaticImageData;
  heroImage: StaticImageData;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  content: BlogArticleSection[];
};

export const blogPosts: BlogPost[] = [];

export const blogCategories = [
  { id: "all", label: "All", count: blogPosts.length },
  { id: "general", label: "General Vehicle Maintenance" },
  { id: "car", label: "Car Tips" },
  { id: "truck", label: "Truck Tips" },
  { id: "motorcycle", label: "Motorcycle Tips" },
] as const;

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const current = getBlogPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.categoryId === current.categoryId
  );
  const others = blogPosts.filter(
    (post) =>
      post.slug !== slug && post.categoryId !== current.categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
};

export const getBlogWordCount = (post: BlogPost) =>
  post.content.reduce((count, section) => {
    const text = [
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.afterBullets ?? []),
    ].join(" ");

    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);
