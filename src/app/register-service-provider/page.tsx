import CTA from "@/components/Hero/CTA";
import Navbar from "@/components/Hero/Navbar";
import ServiceProviderForm from "@/components/RegisterServiceProvider/Form";
import React from "react";

export const metadata = {
  title: "Register as a Service Provider | Whipcare Nigeria",
  description:
    "Join Whipcare as a certified mechanic, car wash, towing, or detailing provider. Register today and connect with car owners across Nigeria.",
};

const page = () => {
  return (
    <div className="2xl:px-[7rem] bg-gray-100">
      <Navbar textColor="text-gray-900" hamburgerColor="text-black" />
      <ServiceProviderForm />
      <CTA />
    </div>
  );
};

export default page;
