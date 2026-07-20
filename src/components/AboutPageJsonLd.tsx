import { CONTACT_ADDRESS, CONTACT_EMAIL } from "@/constants/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";

export function AboutPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    description: SITE_DESCRIPTION,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT_ADDRESS.locality,
        addressCountry: CONTACT_ADDRESS.countryCode,
      },
      areaServed: {
        "@type": "Country",
        name: CONTACT_ADDRESS.country,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
