"use client";

import React from "react";
import Hero from "@/components/FAQ/Hero";
import CTA from "@/components/Hero/CTA";
import Faq from "@/components/FAQ/Faq";
import { faq } from "@/utils/faq.data";
import FaqJsonLd from "@/components/SEO/FaqJsonLd";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const FaqClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <>
      <FaqJsonLd faq={faq} />
      <div>
        <Hero />
        <Faq />
        <div className="2xl:px-[7rem]">
          <CTA />
        </div>
        <Footer selectedCountry={selectedCountry} />
      </div>
    </>
  );
};

export default FaqClient;
