import { APP_STORE_URL, PLAY_STORE_URL } from "./appLinks";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://whipcare.app";

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
