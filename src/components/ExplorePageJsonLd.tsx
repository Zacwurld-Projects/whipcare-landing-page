import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import {
  serviceProviderSteps,
  vehicleOwnerSteps,
} from "@/screens/ExploreScreen/exploreGuideData";

export function ExplorePageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/explore#webpage`,
        name: `Explore ${SITE_NAME}`,
        url: `${SITE_URL}/explore`,
        description: SITE_DESCRIPTION,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "AutomotiveApplication",
          operatingSystem: "iOS, Android",
        },
      },
      {
        "@type": "HowTo",
        name: `How to use ${SITE_NAME} as a vehicle owner`,
        description:
          "Step-by-step guide to booking and completing vehicle services on Whipcare.",
        step: vehicleOwnerSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.description,
        })),
      },
      {
        "@type": "HowTo",
        name: `How to use ${SITE_NAME} as a service provider`,
        description:
          "Guide for mechanics, detailers, and fleet providers to manage bookings and get paid on Whipcare.",
        step: serviceProviderSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.description,
        })),
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
