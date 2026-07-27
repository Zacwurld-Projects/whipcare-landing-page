"use client";

import Image from "next/image";
import Link from "next/link";
import frame96 from "@/assets/frame-96.svg";
import fleetsHeroLaptop from "@/assets/fleets-hero-laptop.png";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { trackGa4Event } from "@/lib/ga4";

const LeftCircles = () => (
  <svg
    className="pointer-events-none absolute left-0 top-1/2 hidden h-[600px] w-[133px] -translate-y-1/2 lg:block"
    width="133"
    height="600"
    viewBox="0 0 133 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="132"
      y="1"
      width="598"
      height="598"
      rx="299"
      transform="rotate(90 132 1)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="100"
      y="51"
      width="498"
      height="498"
      rx="249"
      transform="rotate(90 100 51)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
    <rect
      x="68"
      y="101"
      width="398"
      height="398"
      rx="199"
      transform="rotate(90 68 101)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="36"
      y="125.738"
      width="348"
      height="348"
      rx="174"
      transform="rotate(90 36 125.738)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
  </svg>
);

const RightCircles = () => (
  <svg
    className="pointer-events-none absolute right-0 top-1/2 hidden h-[600px] w-[131px] -translate-y-1/2 lg:block"
    width="131"
    height="600"
    viewBox="0 0 131 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="1"
      y="599"
      width="598"
      height="598"
      rx="299"
      transform="rotate(-90 1 599)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="33"
      y="549"
      width="498"
      height="498"
      rx="249"
      transform="rotate(-90 33 549)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
    <rect
      x="65"
      y="499"
      width="398"
      height="398"
      rx="199"
      transform="rotate(-90 65 499)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="97"
      y="474.262"
      width="348"
      height="348"
      rx="174"
      transform="rotate(-90 97 474.262)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
  </svg>
);

export const FleetsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9fafb]">
      <LeftCircles />
      <RightCircles />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-[52px]">
        <SiteHeader active="Fleets" />

        <div className="relative mt-10 flex flex-col items-center sm:mt-16 lg:mt-20">
          <div className="relative flex w-full max-w-[820px] flex-col items-center gap-6 text-center sm:gap-8">
            <div className="relative flex w-full flex-col items-center gap-4">
              <div className="absolute left-1/2 top-[84px] z-0 hidden h-4 w-[min(100%,320px)] -translate-x-1/2 rounded-[1px] bg-primary-50 opacity-[0.48] sm:block sm:top-[96px] sm:h-5 sm:w-[min(100%,400px)] lg:top-[108px] lg:w-[min(100%,440px)]" />
              <div className="absolute left-1/2 top-[132px] z-0 hidden h-3.5 w-[min(100%,200px)] -translate-x-1/2 rounded-[1px] bg-primary-50 opacity-[0.48] sm:block sm:top-[152px] sm:h-[18px] sm:w-[min(100%,260px)] lg:top-[178px] lg:w-[320px]" />

              <div className="relative z-10 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-[#f3f4f6] px-2 py-1">
                <Image
                  alt=""
                  className="h-7 w-[92px] shrink-0 sm:h-9 sm:w-[118px]"
                  height={36}
                  src={frame96}
                  width={118}
                />
                <span className="font-inter-title-1-medium font-[number:var(--inter-title-1-medium-font-weight)] text-sm leading-[var(--inter-title-1-medium-line-height)] tracking-[var(--inter-title-1-medium-letter-spacing)] text-[#5a1800] [font-style:var(--inter-title-1-medium-font-style)] sm:text-[length:var(--inter-title-1-medium-font-size)]">
                  Join 100+ Businesses
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2 px-1">
                <h1 className="max-w-[794px] font-inter text-[32px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[48px] lg:text-[56px] lg:leading-[72.8px]">
                  Take Control of Your Fleets{" "}
                  <br className="hidden sm:block" />
                  with Whipcare
                </h1>
                <p className="max-w-[670px] font-inter text-[16px] font-medium leading-[1.5] tracking-[0] text-[#6b7280] sm:text-[20px] lg:text-[24px]">
                  Stop juggling spreadsheets and phone calls. Whipcare brings
                  all your fleet&apos;s servicing and maintenance into one
                  simple dashboard.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="h-auto w-full max-w-[320px] rounded-lg bg-[#701e00] px-6 py-3.5 hover:bg-[#5a1800] sm:w-auto"
            >
              <Link
                href="/coming-soon"
                onClick={() => trackGa4Event("create_account")}
              >
                <span className="font-inter-title-1-semibold font-[number:var(--inter-title-1-semibold-font-weight)] text-[length:var(--inter-title-1-semibold-font-size)] leading-[var(--inter-title-1-semibold-line-height)] tracking-[var(--inter-title-1-semibold-letter-spacing)] text-white [font-style:var(--inter-title-1-semibold-font-style)]">
                  Get Started - Today
                </span>
              </Link>
            </Button>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-[1040px] sm:mt-14 lg:mt-20">
            <Image
              className="mx-auto h-auto w-full object-contain"
              alt="Whipcare fleet management dashboard on a laptop"
              src={fleetsHeroLaptop}
              priority
              sizes="(max-width: 1040px) 100vw, 1040px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
