import type { Metadata } from "next";
import { AboutPageJsonLd } from "@/components/AboutPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CONTACT_ADDRESS } from "@/constants/contact";
import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { AboutUsScreen } from "@/screens/AboutUsScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description: `Learn about ${SITE_NAME}'s mission to connect vehicle owners with trusted mechanics, detailers, and fleet providers across ${CONTACT_ADDRESS.display} ${SITE_TAGLINE}.`,
  path: "/about",
  keywords: [
    "about Whipcare",
    "car care platform Nigeria",
    "trusted vehicle service providers",
    "Whipcare mission",
    "vehicle maintenance Lagos",
    "auto service marketplace Nigeria",
  ],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <AboutPageJsonLd />
      <AboutUsScreen />
    </>
  );
}
