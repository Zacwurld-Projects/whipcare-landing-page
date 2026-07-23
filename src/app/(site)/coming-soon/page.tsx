import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { ComingSoonScreen } from "@/screens/ComingSoonScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Coming Soon",
  description:
    "Whipcare Fleets login and sign up are coming soon. Stay tuned for fleet management access.",
  path: "/coming-soon",
  noIndex: true,
  keywords: ["Whipcare coming soon", "Whipcare fleets login", "fleet sign up"],
});

export default function ComingSoonPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Fleets", path: "/fleets" },
          { name: "Coming Soon", path: "/coming-soon" },
        ]}
      />
      <ComingSoonScreen />
    </>
  );
}
