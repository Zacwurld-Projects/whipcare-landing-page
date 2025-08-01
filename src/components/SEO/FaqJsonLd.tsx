"use client";
import React from "react";

interface FaqJsonLdProps {
  faq: { question: string; answer: string }[];
}

const FaqJsonLd: React.FC<FaqJsonLdProps> = ({ faq }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default FaqJsonLd;
