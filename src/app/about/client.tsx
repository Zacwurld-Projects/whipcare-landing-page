"use client";

import React from "react";
import Hero from "@/components/About/Hero";
import CTA from "@/components/Hero/CTA";
import OurStory from "@/components/About/OurStory";
import OurValues from "@/components/About/OurValues";
import Team from "@/components/About/Team";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const AboutClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <section>
      <Hero />
      <OurStory />
      <OurValues />
      {/* <Team /> */}
      <div className=" 2xl:px-[7rem]">
        <CTA />
      </div>
      <Footer selectedCountry={selectedCountry} />
    </section>
  );
};

export default AboutClient;
