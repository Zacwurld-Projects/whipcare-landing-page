import React from "react";
import Form from "@/components/Contact/Form";
import CTA from "@/components/Hero/CTA";
import Navbar from "@/components/Hero/Navbar";

export const metadata = {
  title: "Contact Whipcare | Customer Support & Inquiries",
  description:
    "Need help or have questions? Contact Whipcare’s customer support team for assistance with bookings, payments, or service provider registration.",
};

const page = () => {
  return (
    <div className="2xl:px-[7rem] bg-gray-100">
      <Navbar textColor="text-gray-900" hamburgerColor="text-black" />
      <Form />
      <CTA />
    </div>
  );
};

export default page;
