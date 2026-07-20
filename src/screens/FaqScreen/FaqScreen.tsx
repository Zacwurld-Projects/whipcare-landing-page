import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import faqHero from "@/assets/faq-hero.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import type { FaqItem } from "./faqData";
import { FaqAccordionSection } from "./sections/FaqAccordionSection";

type FaqScreenProps = {
  faqs: readonly FaqItem[];
};

export const FaqScreen = ({ faqs }: FaqScreenProps) => {
  return (
    <main className="w-full bg-white">
      <section
        aria-labelledby="faq-page-title"
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 lg:px-[52px] lg:pb-16">
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
              <div className="flex max-w-[900px] flex-col items-center gap-3 text-center sm:gap-4">
                <div className="relative inline-block text-center opacity-0 animate-fade-up">
                  <h1
                    id="faq-page-title"
                    className="font-inter text-[32px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[44px] lg:text-[56px] lg:leading-[1.2]"
                  >
                    <span className="relative inline-block">
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[6px] left-0 z-0 h-[14px] w-full rounded-[1px] bg-[#fca5a5]/60 sm:bottom-[10px] sm:h-[18px] lg:bottom-[14px] lg:h-5"
                      />
                      <span className="relative z-10">Frequently Asked</span>
                    </span>
                    <br />
                    <span className="relative inline-block">
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[6px] left-0 z-0 h-[14px] w-full rounded-[1px] bg-[#fca5a5]/60 sm:bottom-[10px] sm:h-[18px] lg:bottom-[14px] lg:h-5"
                      />
                      <span className="relative z-10">Questions</span>
                    </span>
                  </h1>
                </div>
                <p
                  className="max-w-[640px] opacity-0 animate-fade-up font-inter text-[15px] font-medium leading-[1.5] tracking-[0] text-[#6b7280] sm:text-[18px] lg:text-[22px] xl:text-[24px]"
                  style={{ animationDelay: "0.12s" }}
                >
                  Got questions? We&apos;ve got answers. Everything you need to
                  know about using Whipcare.
                </p>
              </div>

              <div
                className="relative mx-auto mt-8 w-full max-w-[900px] opacity-0 animate-fade-up sm:mt-10 lg:mt-14"
                style={{ animationDelay: "0.22s" }}
              >
                <Image
                  className="mx-auto h-auto w-full object-contain"
                  alt="Illustration of people using Whipcare to find vehicle service answers"
                  src={faqHero}
                  priority
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </header>
          </div>
        </div>
      </section>

      <FaqAccordionSection faqs={faqs} />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
