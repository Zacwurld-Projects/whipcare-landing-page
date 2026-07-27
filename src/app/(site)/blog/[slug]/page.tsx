import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostingJsonLd } from "@/components/BlogPostingJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import {
  fetchBlogBySlug,
  fetchBlogs,
  fetchRelatedPosts,
} from "@/lib/blogs";
import { buildPageMetadata } from "@/lib/seo";
import { BlogPostScreen } from "@/screens/BlogScreen/BlogPostScreen";

export const revalidate = 60;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await fetchBlogs(1, 100, "newest");
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Post Not Found",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [
      post.categoryLabel,
      "vehicle maintenance",
      "car care tips Nigeria",
      "Whipcare blog",
    ],
    image: post.heroImage.src,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await fetchRelatedPosts(slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <BlogPostingJsonLd post={post} />
      <BlogPostScreen post={post} relatedPosts={relatedPosts} />
    </>
  );
}
