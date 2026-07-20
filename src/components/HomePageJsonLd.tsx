import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/constants/site";

const serviceCategories = [
  "Mechanics",
  "Detailers",
  "Haulers",
  "Vehicle wash",
] as const;

export function HomePageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} | ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-NG",
      },
      {
        "@type": "ItemList",
        name: "Whipcare vehicle services",
        itemListElement: serviceCategories.map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "AutomotiveApplication",
        operatingSystem: "Android, iOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
        },
        downloadUrl: [PLAY_STORE_URL, APP_STORE_URL],
        description: SITE_DESCRIPTION,
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
