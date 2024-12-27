"use client";

import React from "react";
import backgroundImage from "@/assets/images/hero/statistics-bg.svg";
import Image from "next/image";
import { statistics } from "@/utils/data";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  return (
    <section
      className='w-full xl:h-[224px] bg-gray-100 flex justify-center items-center my-[5rem]'
      ref={ref}
    >
      <div className='w-full h-full relative bg-brand-500 py-12 xl:py-0'>
        <div className='absolute h-full w-full'>
          <Image
            src={backgroundImage}
            alt='background'
            className='opacity-20 h-full'
          />
        </div>
        <div className='relative z-10 w-full h-full flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 gap-x-16 items-center justify-center px-20'>
          <div className='text-center xl:text-start'>
            <h2 className='text-3xl lg:text-[45px] text-white'>
              What {"we're"} doing
            </h2>
            <p className='text-sm text-white lg:mt-2 lg:text-lg'>
              Providing access to premium car services{" "}
              <span className='font-semibold'>Globally</span>
            </p>
          </div>
          <div>
            <div className='flex flex-col xl:flex-row gap-x-10 gap-y-10 xl:gap-y-0'>
              {statistics.map((item, index) => (
                <div key={index} className='text-center xl:text-start'>
                  <h2 className='text-2xl lg:text-3xl text-white'>
                    {inView ? (
                      <CountUp start={0} end={item.title} duration={2.5} />
                    ) : (
                      0
                    )}
                    +
                  </h2>
                  <p className='text-sm lg:text-base text-white'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
