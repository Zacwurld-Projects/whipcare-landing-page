import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/FaqPageJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { FleetsScreen } from "@/screens/FleetsScreen";
import { fleetsFaqs } from "@/screens/FleetsScreen/fleetsFaqData";

export const metadata: Metadata = buildPageMetadata({
  title: "Fleet Management Software",
  description:
    "Manage fleet servicing, maintenance, and bookings in one Whipcare dashboard. Plans for 1–100+ vehicles with predictive maintenance and cost analytics.",
  path: "/fleets",
  keywords: [
    "fleet management Nigeria",
    "fleet maintenance software",
    "vehicle fleet dashboard",
  ],
  image: "/og-fleets.jpg",
});

export default function FleetsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Fleets", path: "/fleets" },
        ]}
      />
      <FaqPageJsonLd faqs={fleetsFaqs} />
      <FleetsScreen />
    </>
  );
}
