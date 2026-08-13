import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import type { BlogPost } from "@/screens/BlogScreen/blogData";

export function BlogPageJsonLd({ posts }: { posts: BlogPost[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: `${SITE_NAME} Blog`,
    description:
      "Guides and tips on car, truck, and motorcycle maintenance from Whipcare.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-NG",
    blogPost: posts.slice(0, 20).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      description: post.excerpt || SITE_DESCRIPTION,
      ...(post.authorName
        ? {
            author: {
              "@type": "Person",
              name: post.authorName,
              ...(post.authorLink ? { url: post.authorLink } : {}),
            },
          }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
