import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CONTACT_EMAIL } from "@/constants/contact";
import { SITE_NAME } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { TermsScreen } from "@/screens/TermsScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description: `Read the Whipcare Terms and Conditions for car owners, fleet operators, and service providers using the ${SITE_NAME} platform in Nigeria. Learn about payments, escrow, dispute resolution, and platform policies.`,
  path: "/terms",
  keywords: [
    "Whipcare terms and conditions",
    "service provider terms",
    "car owner terms",
    "fleet operator terms",
    "escrow protection",
    "warranty policy",
    "dispute resolution",
    "Whipcare policies",
  ],
});

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms" },
        ]}
      />
      <TermsScreen />
    </>
  );
}
