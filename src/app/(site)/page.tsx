import type { Metadata } from "next";
import { HomePageJsonLd } from "@/components/HomePageJsonLd";
import { SplashGate } from "@/components/Global/SplashGate";
import { CONTACT_ADDRESS } from "@/constants/contact";
import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { HomeScreen } from "@/screens/HomeScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Book Trusted Car Services Near You",
  description: `${SITE_NAME} connects vehicle owners with verified mechanics, detailers, haulers, and fleet providers across ${CONTACT_ADDRESS.display}. Compare offers, book services, track vehicle health, and pay securely — ${SITE_TAGLINE.toLowerCase()}`,
  path: "/",
  keywords: [
    "book mechanic Nigeria",
    "car care app Lagos",
    "auto service marketplace",
    "vehicle maintenance app",
    "find detailer near me",
    "fleet management Nigeria",
    "Vehicle Health Pro",
    "Whipcare download",
  ],
});

export default function Home() {
  return (
    <SplashGate>
      <HomePageJsonLd />
      <HomeScreen />
    </SplashGate>
  );
}
