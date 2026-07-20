import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { BlogScreen } from "@/screens/BlogScreen";
import { blogPosts } from "@/screens/BlogScreen/blogData";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog & Vehicle Care Tips",
  description:
    "Guides and tips on car, truck, and motorcycle maintenance from Whipcare — help your vehicle stay road-ready.",
  path: "/blog",
  keywords: ["car maintenance tips", "vehicle care blog"],
});

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <BlogScreen posts={blogPosts} />
    </>
  );
}
