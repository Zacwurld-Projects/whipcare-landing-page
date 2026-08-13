import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import {
  GetAppLink,
  type DeepLinkInvite,
} from "@/components/GetAppLink";
import { SiteHeader } from "@/components/SiteHeader";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";

type DeepLinkInviteScreenProps = {
  headingId: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  deepLink: DeepLinkInvite;
};

export const DeepLinkInviteScreen = ({
  headingId,
  eyebrow,
  title,
  description,
  ctaLabel,
  deepLink,
}: DeepLinkInviteScreenProps) => {
  return (
    <main className="w-full bg-white">
      <section
        aria-labelledby={headingId}
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
          <SiteHeader />

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
              {eyebrow}
            </p>
            <h1
              id={headingId}
              className="mt-4 font-inter text-3xl font-semibold leading-tight text-[#111928] sm:text-4xl lg:text-5xl"
            >
              {title}
            </h1>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#6b7280] sm:text-lg">
              {description}
            </p>
            <GetAppLink
              deepLink={deepLink}
              className="mt-8 inline-flex h-auto items-center justify-center rounded-lg bg-[#701e00] px-5 py-3 font-inter text-sm font-semibold text-white hover:bg-[#5a1800] sm:text-[length:var(--inter-body-semibold-font-size)]"
            >
              {ctaLabel}
            </GetAppLink>
          </div>
        </div>
      </section>

      <FooterNavigationSection />
    </main>
  );
};
