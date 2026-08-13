import type { Metadata } from "next";
import {
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  authors?: { name: string; url?: string }[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
  noIndex = false,
  authors,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildPageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords: [...SITE_KEYWORDS, ...keywords],
    ...(authors?.length
      ? {
          authors: authors.map((author) => ({
            name: author.name,
            ...(author.url ? { url: author.url } : {}),
          })),
        }
      : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_NG",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
      ...(type === "article"
        ? {
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(authors?.length
              ? { authors: authors.map((author) => author.name) }
              : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
