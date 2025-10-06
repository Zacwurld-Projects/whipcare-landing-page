"use client";

import CTA from "@/components/Hero/CTA";
import Footer from "@/components/Hero/Footer";
import Navbar from "@/components/Hero/Navbar";
import ServiceProviderForm from "@/components/RegisterServiceProvider/Form";
import React from "react";
import { useCountry } from "@/components/Global/CountryContext";

const RegisterServiceProviderClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <>
    <div className="2xl:px-[7rem] bg-gray-100 relative">
      <Navbar
        key={`navbar-${selectedCountry?.name || 'default'}`}
        textColor="text-gray-900"
        hamburgerColor="text-black"
        selectedCountry={selectedCountry}
        onCountrySelect={setSelectedCountry}
      />
      <ServiceProviderForm />
      <CTA />
    </div>
    <Footer selectedCountry={selectedCountry} />
    </>
  );
};

export default RegisterServiceProviderClient;
