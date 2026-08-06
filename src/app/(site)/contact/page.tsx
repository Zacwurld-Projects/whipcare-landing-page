import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ContactPageJsonLd } from "@/components/ContactPageJsonLd";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONES } from "@/constants/contact";
import { buildPageMetadata } from "@/lib/seo";
import { ContactScreen } from "@/screens/ContactScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description: `Get in touch with Whipcare support in ${CONTACT_ADDRESS.display} Call ${CONTACT_PHONES.map((p) => `${p.display} (${p.label})`).join(" or ")}, or email ${CONTACT_EMAIL}.`,
  path: "/contact",
  keywords: [
    "contact Whipcare",
    "Whipcare support",
    "Whipcare customer service",
    "vehicle service support Nigeria",
    "Whipcare Lagos",
  ],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
      <ContactPageJsonLd />
      <ContactScreen />
    </>
  );
}
