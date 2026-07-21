import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/FaqPageJsonLd";
import { CONTACT_EMAIL } from "@/constants/contact";
import { SITE_NAME } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import { FaqScreen } from "@/screens/FaqScreen";
import { generalFaqs } from "@/screens/FaqScreen/faqData";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions",
  description: `Find answers about booking vehicle services, payments, escrow protection, Vehicle Health Pro, and using ${SITE_NAME} as a driver or service provider in Nigeria. Contact ${CONTACT_EMAIL} for more help.`,
  path: "/faq",
  keywords: [
    "Whipcare FAQ",
    "how to book car service",
    "Whipcare payments",
    "vehicle service escrow Nigeria",
    "Whipcare support",
    "car maintenance app FAQ",
    "service provider Whipcare",
  ],
});

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqPageJsonLd faqs={generalFaqs} />
      <FaqScreen faqs={generalFaqs} />
    </>
  );
}
