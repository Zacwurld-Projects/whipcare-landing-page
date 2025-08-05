// "use client";
import React from "react";

import Navbar from "@/components/Hero/Navbar";
import CTA from "@/components/Hero/CTA";
import PrivacyPolicy from "@/components/Global/PrivacyPolicy";
import Footer from "@/components/Hero/Footer";

export const metadata = {
  title: "Whipcare Privacy Policy | Data Protection & Security",
  description:
    "Read Whipcare’s privacy policy to learn how we protect your data and ensure your information is secure when booking car services in Nigeria.",
};

const page = () => {
  return (
    <div className="2xl:px-[7rem]">
      <Navbar textColor="text-gray-900" hamburgerColor="text-black" />
      <PrivacyPolicy />
      <CTA />
      <Footer/>

    </div>
  );
};

export default page;
