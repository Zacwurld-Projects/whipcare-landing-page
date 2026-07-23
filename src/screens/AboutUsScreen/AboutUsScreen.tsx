import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import aboutHero from "@/assets/about-hero.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import { OurStorySection } from "./sections/OurStorySection";
import { OurValuesSection } from "./sections/OurValuesSection";

export const AboutUsScreen = () => {
  return (
    <main className="w-full bg-white">
      <section
        aria-labelledby="about-page-title"
        className="relative w-full overflow-hidden bg-white"
      >
        <Image
          className="pointer-events-none absolute left-10 top-[-68px] hidden h-[912px] w-1 xl:block"
          alt=""
          src={frame1618873202}
          aria-hidden
        />
        <Image
          className="pointer-events-none absolute right-8 top-[-68px] hidden h-[912px] w-1 xl:block"
          alt=""
          src={frame1618873202}
          aria-hidden
        />

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pt-5 sm:px-6 sm:pt-6 lg:px-[52px]">
          <SiteHeader active="Resources" />

          <div className="relative mt-5 -mx-4 sm:mt-6 sm:-mx-6 lg:-mx-[52px]">
            <div className="relative z-10 h-1 w-full">
              <Image
                className="h-full w-full object-contain"
                alt=""
                src={frame1618873200}
                aria-hidden
              />
            </div>

            <header className="relative mt-10 flex flex-col items-center px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:px-[52px]">
              <div className="flex max-w-[820px] flex-col items-center gap-3 text-center sm:gap-4">
                <div className="relative inline-block opacity-0 animate-fade-up">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[6px] left-1/2 z-0 h-[14px] w-[min(100%,220px)] -translate-x-1/2 rounded-[1px] bg-[#fca5a5]/60 sm:bottom-[10px] sm:h-[18px] sm:w-[280px] lg:bottom-[14px] lg:h-5 lg:w-[320px]"
                  />
                  <h1
                    id="about-page-title"
                    className="relative z-10 font-inter text-[32px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[44px] lg:text-[56px] lg:leading-[1.2]"
                  >
                    About Us
                  </h1>
                </div>

                <div
                  className="flex max-w-[640px] flex-col items-center gap-1.5 opacity-0 animate-fade-up sm:gap-2"
                  style={{ animationDelay: "0.12s" }}
                >
                  <p className="font-inter text-[15px] font-medium leading-[1.5] tracking-[0] text-[#6b7280] sm:text-[18px] lg:text-[22px] xl:text-[24px]">
                    We built Whipcare because finding trusted vehicle service
                    providers shouldn&apos;t be hard.
                  </p>
                  <p className="font-inter text-[15px] font-medium leading-[1.5] tracking-[0] text-[#701e00] sm:text-[16px] lg:text-[18px]">
                    Now it isn&apos;t.
                  </p>
                </div>
              </div>

              <div
                className="relative mx-auto mt-8 w-full max-w-[1200px] opacity-0 animate-fade-up sm:mt-10 lg:mt-14"
                style={{ animationDelay: "0.22s" }}
              >
                <Image
                  className="mx-auto aspect-[16/10] h-auto w-full rounded-2xl object-cover sm:aspect-[21/9] sm:rounded-t-[16px]"
                  alt="Whipcare team collaborating over a desk in Nigeria"
                  src={aboutHero}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </header>
          </div>
        </div>
      </section>

      <OurStorySection />
      <OurValuesSection />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
