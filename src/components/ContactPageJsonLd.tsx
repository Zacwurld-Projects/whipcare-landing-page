import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
} from "@/constants/contact";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description: `Contact ${SITE_NAME} customer support in ${CONTACT_ADDRESS.display} by phone or email.`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONES.map((phone) => phone.e164),
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT_ADDRESS.locality,
        addressCountry: CONTACT_ADDRESS.countryCode,
      },
      contactPoint: CONTACT_PHONES.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.e164,
        contactType: "customer support",
        email: CONTACT_EMAIL,
        areaServed: CONTACT_ADDRESS.countryCode,
        availableLanguage: ["English"],
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
