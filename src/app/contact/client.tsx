"use client";

import React from "react";
import Form from "@/components/Contact/Form";
import CTA from "@/components/Hero/CTA";
import Navbar from "@/components/Hero/Navbar";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const ContactClient = () => {
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
        <Form />
        <CTA />
      </div>
      <Footer selectedCountry={selectedCountry} />
    </>
  );
};

export default ContactClient;
