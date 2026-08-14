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
  /** Set `false` when a route file (`opengraph-image`) supplies the image. */
  image?: string | false;
  noIndex?: boolean;
  authors?: { name: string; url?: string }[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export const JOIN_INVITE_TITLE = "Join Whipcare";
export const JOIN_INVITE_DESCRIPTION =
  "You've been invited to Whipcare. Download the app to join and connect with trusted mechanics, detailers, and vehicle service providers.";

export const PROFILE_INVITE_TITLE = "View this profile on Whipcare";
export const PROFILE_INVITE_DESCRIPTION =
  "Open this Whipcare profile in the app. See services, reviews, and book trusted vehicle care in one place.";

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
  const imageUrl =
    image === false
      ? undefined
      : image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`;
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

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
      title: ogTitle,
      description,
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: ogTitle,
              },
            ],
          }
        : {}),
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
      title: ogTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
