"use client";

import React from "react";
import Navbar from "@/components/Hero/Navbar";
import CTA from "@/components/Hero/CTA";
import PrivacyPolicy from "@/components/Global/PrivacyPolicy";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const PrivacyPolicyClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <div className="2xl:px-[7rem] relative">
      <Navbar
        key={`navbar-${selectedCountry?.name || 'default'}`}
        textColor="text-gray-900"
        hamburgerColor="text-black"
        selectedCountry={selectedCountry}
        onCountrySelect={setSelectedCountry}
      />
      <PrivacyPolicy />
      <CTA />
      <Footer selectedCountry={selectedCountry} />
    </div>
  );
};

export default PrivacyPolicyClient;
