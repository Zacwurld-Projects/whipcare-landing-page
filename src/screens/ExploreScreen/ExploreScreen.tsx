import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import exploreHeroCar from "@/assets/explore-hero-car.png";
import exploreSection from "@/assets/explore-section.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import { VehicleOwnerGuideSection } from "./sections/VehicleOwnerGuideSection";
import { ServiceProviderGuideSection } from "./sections/ServiceProviderGuideSection";

export const ExploreScreen = () => {
  return (
    <main className="w-full bg-[#f3f4f5]">
      <section
        aria-labelledby="explore-page-title"
        className="relative w-full overflow-hidden bg-[#f3f4f5]"
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-6 lg:px-[52px] lg:pb-24">
          <SiteHeader active="Explore" />

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
              <div className="flex max-w-[720px] flex-col items-center gap-3 text-center sm:gap-4">
                <div className="relative inline-block opacity-0 animate-fade-up">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[6px] left-1/2 z-0 h-[14px] w-[min(100%,280px)] -translate-x-1/2 rounded-[1px] bg-[#fca5a5]/60 sm:bottom-[10px] sm:h-[18px] sm:w-[360px] lg:bottom-[14px] lg:h-5 lg:w-[460px]"
                  />
                  <h1
                    id="explore-page-title"
                    className="relative z-10 font-inter text-[32px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[44px] lg:text-[56px] lg:leading-[1.2]"
                  >
                    Explore Whipcare
                  </h1>
                </div>
                <p
                  className="max-w-[640px] opacity-0 animate-fade-up font-inter text-[15px] font-medium leading-[1.5] tracking-[0] text-[#475367] sm:text-[18px] lg:text-[22px] xl:text-[24px]"
                  style={{ animationDelay: "0.12s" }}
                >
                  Discover everything Whipcare has to offer — book services,
                  manage your fleet, or grow your provider business.
                </p>
              </div>

              <div
                className="relative mx-auto mt-8 w-full max-w-[980px] opacity-0 animate-fade-up sm:mt-10 lg:mt-14"
                style={{ animationDelay: "0.22s" }}
              >
                <Image
                  className="mx-auto h-auto w-full object-contain"
                  alt="Black sports car representing vehicle services available on Whipcare"
                  src={exploreHeroCar}
                  priority
                  sizes="(max-width: 980px) 100vw, 980px"
                />
              </div>
            </header>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="explore-preview-heading"
        className="relative w-full bg-[#f3f4f5] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      >
        <h2 id="explore-preview-heading" className="sr-only">
          Whipcare app preview
        </h2>
        <div
          className="mx-auto w-full max-w-[1280px] opacity-0 animate-fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          <Image
            className="mx-auto block h-auto w-full object-contain"
            alt="Whipcare mobile app showing service categories, provider ratings, and quick booking"
            src={exploreSection}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </section>

      <VehicleOwnerGuideSection />
      <ServiceProviderGuideSection />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
