import Image from "next/image";
import Link from "next/link";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import { SiteHeader } from "@/components/SiteHeader";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";

export const ComingSoonScreen = () => {
  return (
    <main className="w-full bg-white">
      <section
        aria-labelledby="coming-soon-heading"
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-6 lg:px-[52px] lg:pb-24">
          <SiteHeader active="Fleets" />

          <div className="relative mt-5 -mx-4 sm:mt-6 sm:-mx-6 lg:-mx-[52px]">
            <div className="relative z-10 h-1 w-full">
              <Image
                className="h-full w-full object-contain"
                alt=""
                src={frame1618873200}
                aria-hidden
              />
            </div>
          </div>

          <div className="mx-auto flex min-h-[50vh] w-full max-w-[640px] flex-col items-center justify-center px-4 py-16 text-center sm:py-24">
            <p className="font-inter text-sm font-medium uppercase tracking-[0.12em] text-[#701e00]">
              Whipcare Fleets
            </p>
            <h1
              id="coming-soon-heading"
              className="mt-4 font-inter text-3xl font-semibold leading-tight text-[#111928] sm:text-4xl lg:text-5xl"
            >
              Coming Soon
            </h1>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#6b7280] sm:text-lg">
              Fleet login and sign up are on the way. Check back soon.
            </p>
            <Link
              href="/fleets"
              className="mt-8 inline-flex h-auto items-center justify-center rounded-lg bg-[#701e00] px-5 py-3 font-inter text-sm font-semibold text-white hover:bg-[#5a1800] sm:text-[length:var(--inter-body-semibold-font-size)]"
            >
              Back to Fleets
            </Link>
          </div>
        </div>
      </section>

      <FooterNavigationSection />
    </main>
  );
};
