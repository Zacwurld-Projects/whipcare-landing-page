"use client";

import Hero from "@/components/Explore/Hero";
import HowItWorks from "@/components/Explore/HowItWorks";
// import { CarouselPlugin } from '@/components/Explore/Test'
import CTA from "@/components/Hero/CTA";
import React from "react";

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
