import { SITE_NAME, SITE_URL } from "@/constants/site";
import type { BlogPost } from "@/screens/BlogScreen/blogData";
import {
  getBlogImageAbsoluteUrl,
  getBlogWordCount,
  resolveBlogSeoKeywords,
} from "@/screens/BlogScreen/blogData";

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const image = getBlogImageAbsoluteUrl(post.heroImage, SITE_URL);
  const author = post.authorName
    ? {
        "@type": "Person" as const,
        name: post.authorName,
        ...(post.authorLink ? { url: post.authorLink } : {}),
      }
    : {
        "@type": "Organization" as const,
        name: SITE_NAME,
        url: SITE_URL,
      };

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    ...(image ? { image } : {}),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
    articleSection: post.categoryLabel,
    keywords: resolveBlogSeoKeywords(post).join(", "),
    wordCount: getBlogWordCount(post),
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/ViewAction",
      userInteractionCount: post.viewCount,
    },
    inLanguage: "en-NG",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
