// "use client";

import Hero from "@/components/Explore/Hero";
import HowItWorks from "@/components/Explore/HowItWorks";
// import { CarouselPlugin } from '@/components/Explore/Test'
import CTA from "@/components/Hero/CTA";
import React from "react";

export const metadata = {
  title: "Explore Car Services in Nigeria | Whipcare",
  description: "Find and book mobile mechanics, car wash, towing, and detailing services in Lagos, Abuja, and across Nigeria. Trusted, verified professionals at your fingertips.",
};

const page = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <div className='lg:px-[4rem]'>
        <CTA />
      </div>
      {/* <CarouselPlugin /> */}
    </div>
  );
};

export default page;
