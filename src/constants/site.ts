import { APP_STORE_URL, PLAY_STORE_URL } from "./appLinks";

const DEFAULT_SITE_URL = "https://www.whipcare.app";

function canonicalSiteUrl(raw?: string): string {
  const value = raw?.replace(/\/$/, "") || DEFAULT_SITE_URL;
  try {
    const url = new URL(value);
    if (url.hostname === "whipcare.app") {
      url.hostname = "www.whipcare.app";
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = canonicalSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE_NAME = "Whipcare";

export const SITE_TAGLINE =
  "Where vehicle owners meet top service providers";

export const SITE_DESCRIPTION =
  "Whipcare connects car owners with trusted mechanics, detailers, and fleet service providers. Book, manage, and maintain vehicles across Nigeria — all in one place.";

export const SITE_KEYWORDS = [
  "Whipcare",
  "car service Nigeria",
  "mechanic near me",
  "vehicle maintenance",
  "fleet management",
  "book auto service",
  "car repair Lagos",
  "Vehicle Health Pro",
] as const;

export { APP_STORE_URL, PLAY_STORE_URL };
