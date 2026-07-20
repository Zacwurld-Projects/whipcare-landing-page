import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ExplorePageJsonLd } from "@/components/ExplorePageJsonLd";
import { SITE_NAME } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { ExploreScreen } from "@/screens/ExploreScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Explore Vehicle Services",
  description: `Discover how ${SITE_NAME} works for vehicle owners and service providers. Compare mechanics, detailers, and haulers, learn how to book services, manage bookings, and get paid — all in one platform across Nigeria.`,
  path: "/explore",
  keywords: [
    "explore Whipcare",
    "vehicle service listings Nigeria",
    "book mechanic online",
    "car detailing app",
    "service provider marketplace",
    "how to use Whipcare",
    "vehicle maintenance platform",
    "fleet service booking",
  ],
});

export default function ExplorePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Explore", path: "/explore" },
        ]}
      />
      <ExplorePageJsonLd />
      <ExploreScreen />
    </>
  );
}
