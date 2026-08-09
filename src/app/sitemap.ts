import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { fetchBlogs } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = await fetchBlogs(1, 100, "newest");

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/explore",
    "/about",
    "/faq",
    "/contact",
    "/fleets",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/blog"
          ? 0.9
          : path === "/fleets" || path === "/explore"
            ? 0.9
            : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
