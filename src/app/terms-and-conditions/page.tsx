import React from "react";

import Navbar from "@/components/Hero/Navbar";
import CTA from "@/components/Hero/CTA";
import TermsAndConditions from "@/components/Global/TermsAndConditions";

export const metadata = {
  title: "Whipcare Terms & Conditions | User Agreement",
  description:
    "Review the terms and conditions for using Whipcare’s platform to book or provide car services in Nigeria. Stay informed about your rights and responsibilities.",
};

const page = () => {
  return (
    <div className="2xl:px-[7rem] ">
      <Navbar textColor="text-gray-900" hamburgerColor="text-black" />
      <TermsAndConditions />
      <CTA />
    </div>
  );
};

export default page;
