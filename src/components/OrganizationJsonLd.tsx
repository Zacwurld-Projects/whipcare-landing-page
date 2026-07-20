import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
} from "@/constants/contact";

export function OrganizationJsonLd() {
  const telephones = CONTACT_PHONES.map((phone) => phone.e164);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        email: CONTACT_EMAIL,
        telephone: telephones,
        address: {
          "@type": "PostalAddress",
          addressLocality: CONTACT_ADDRESS.locality,
          addressCountry: CONTACT_ADDRESS.countryCode,
        },
        sameAs: [PLAY_STORE_URL, APP_STORE_URL],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        image: `${SITE_URL}/og-image.jpg`,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        telephone: telephones,
        priceRange: "₦₦",
        address: {
          "@type": "PostalAddress",
          addressLocality: CONTACT_ADDRESS.locality,
          addressCountry: CONTACT_ADDRESS.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          // Lagos city center approximation — refine if you have exact office coords
          latitude: 6.5244,
          longitude: 3.3792,
        },
        areaServed: {
          "@type": "Country",
          name: CONTACT_ADDRESS.country,
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-NG",
      },
      {
        "@type": "MobileApplication",
        name: SITE_NAME,
        operatingSystem: "Android, iOS",
        applicationCategory: "LifestyleApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
        },
        downloadUrl: [PLAY_STORE_URL, APP_STORE_URL],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
