"use client";

import { services } from "@/utils/data";
import React from "react";
import ServicesCard from "../cards/Services";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <section className="w-full h-full lg:px-[5rem]">
      <div className="w-full h-full flex flex-col gap-y-20">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-y-2 xl:gap-y-0 text-center px-7 xl:px-0"
        >
          <h2 className="text-3xl text-black font-semibold">
            Car Wash, Towing & Detailing in Nigeria
          </h2>
          <p className="text-sm text-black tracking-wider">
            Book a mobile mechanic in Lagos, or schedule car wash, towing, and
            detailing services anywhere in Nigeria with Whipcare.
          </p>
        </motion.div>
        <div>
          <div className="w-full flex flex-col md:justify-center xl:justify-start md:flex-wrap xl:flex-nowrap md:flex-row md:gap-x-10 xl:gap-x-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", service.delay)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="md:w-1/3 xl:w-full"
              >
                <ServicesCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  backgroundColor={service.backgroundColor}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
