import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostingJsonLd } from "@/components/BlogPostingJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { BlogPostScreen } from "@/screens/BlogScreen/BlogPostScreen";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/screens/BlogScreen/blogData";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

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
