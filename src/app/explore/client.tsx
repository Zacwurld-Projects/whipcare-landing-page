"use client";

import Hero from "@/components/Explore/Hero";
import HowItWorks from "@/components/Explore/HowItWorks";
// import { CarouselPlugin } from '@/components/Explore/Test'
import CTA from "@/components/Hero/CTA";
import Footer from "@/components/Hero/Footer";
import { useCountry } from "@/components/Global/CountryContext";

const ExploreClient = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <div>
      <Hero />
      <HowItWorks />
      <div className='lg:px-[4rem]'>
        <CTA />
      </div>
      {/* <CarouselPlugin /> */}
      <Footer selectedCountry={selectedCountry} />
    </div>
  );
};

export default ExploreClient;
