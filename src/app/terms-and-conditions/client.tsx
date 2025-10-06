"use client";

import React from "react";
import Navbar from "@/components/Hero/Navbar";
import CTA from "@/components/Hero/CTA";
import TermsAndConditions from "@/components/Global/TermsAndConditions";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const TermsAndConditionsClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <>
      <div className="2xl:px-[7rem] relative">
        <Navbar
          key={`navbar-${selectedCountry?.name || 'default'}`}
          textColor="text-gray-900"
          hamburgerColor="text-black"
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
        />
        <TermsAndConditions />
        <CTA />
      </div>
      <Footer selectedCountry={selectedCountry} />
    </>
  );
};

export default TermsAndConditionsClient;
