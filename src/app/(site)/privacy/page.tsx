import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SITE_NAME } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { PrivacyPolicyScreen } from "@/screens/PrivacyPolicyScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Read the Whipcare Privacy Policy to understand how we collect, use, and protect your personal data on the ${SITE_NAME} platform. Governed by the Nigeria Data Protection Act 2023 (NDPA 2023).`,
  path: "/privacy",
  keywords: [
    "Whipcare privacy policy",
    "data protection",
    "personal data",
    "privacy",
    "NDPA 2023",
    "data security",
    "user rights",
    "data collection",
  ],
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PrivacyPolicyScreen />
    </>
  );
}
