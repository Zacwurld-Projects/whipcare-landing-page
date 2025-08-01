import React from "react";
import Hero from "@/components/FAQ/Hero";
import CTA from "@/components/Hero/CTA";
import Faq from "@/components/FAQ/Faq";
import { faq } from "@/utils/faq.data";
import FaqJsonLd from "@/components/SEO/FaqJsonLd";

export const metadata = {
  title: "Whipcare FAQ | Booking, Payments, Services & More",
  description:
    "Find answers to common questions about booking mechanics, car wash, towing, and detailing services with Whipcare. Learn how to use our app and get support.",
};

const page = () => {
  return (
    <>
      <FaqJsonLd faq={faq} />
      <div>
        <Hero />
        <Faq />
        <div className="2xl:px-[7rem]">
          <CTA />
        </div>
      </div>
    </>
  );
};

export default page;
