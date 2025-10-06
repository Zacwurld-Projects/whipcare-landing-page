import React from "react";
import Image from "next/image";
import backgroundImage from "@/assets/images/explore/background-image1.png";
import Navbar from "../Hero/Navbar";
import { useCountry } from "@/components/Global/CountryContext";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <section className="h-[40dvh] xl:h-[100dvh] mb-5 xl:mb-0">
      <div className="w-full h-full relative">
        <div className="w-full h-full absolute">
          <Image
            src={backgroundImage}
            alt="Whipcare explore page background image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full z-20 xl:px-[5rem]">
          <Navbar
            key={`navbar-${selectedCountry?.name || 'default'}`}
            textColor="text-white"
            hamburgerColor="text-white"
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
          />
          <div className="h-1/4 w-full flex items-center justify-center">
            <h2 className="text-white text-xl xl:text-4xl font-semibold text-center">
              Explore <br className="xl:hidden" /> Whipcare
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
