import type { Metadata } from "next";
import { BlogPageJsonLd } from "@/components/BlogPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { fetchBlogs } from "@/lib/blogs";
import { buildPageMetadata } from "@/lib/seo";
import { BlogScreen } from "@/screens/BlogScreen";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "Blog & Vehicle Care Tips",
  description:
    "Guides and tips on car, truck, and motorcycle maintenance from Whipcare — help your vehicle stay road-ready.",
  path: "/blog",
  keywords: ["car maintenance tips", "vehicle care blog"],
});

export default async function BlogPage() {
  const posts = await fetchBlogs(1, 20, "newest");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <BlogPageJsonLd posts={posts} />
      <BlogScreen posts={posts} />
    </>
  );
}
