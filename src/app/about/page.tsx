import React from "react";
import Hero from "@/components/About/Hero";
import CTA from "@/components/Hero/CTA";
import OurStory from "@/components/About/OurStory";
import OurValues from "@/components/About/OurValues";
import Team from "@/components/About/Team";
import Footer from "@/components/Hero/Footer";

export const metadata = {
  title: "About Whipcare | Our Story, Mission & Team",
  description:
    "Learn about Whipcare’s mission to connect car owners with certified mechanics and car care professionals across Nigeria. Meet our team and discover our values.",
};

const page = () => {
  return (
    <section>
      <Hero />
      <OurStory />
      <OurValues />
      {/* <Team /> */}
      <div className=" 2xl:px-[7rem]">
        <CTA />
      </div>
      <Footer />
    </section>
  );
};

export default page;
