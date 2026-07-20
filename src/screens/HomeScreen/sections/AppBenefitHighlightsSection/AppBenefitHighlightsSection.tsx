import Image from "next/image";
import liveEasy from "@/assets/live-easy.png";
import { Reveal } from "@/components/Reveal";
import { GetAppLink } from "../../../../components/GetAppLink";
import { Button } from "../../../../components/ui/button";

export const AppBenefitHighlightsSection = () => {
  return (
    <section
      aria-labelledby="app-benefits-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 sm:gap-12 lg:gap-[57px]">
        <Reveal as="header" className="flex flex-col items-center justify-center gap-2 text-center">
          <h2
            id="app-benefits-heading"
            className="font-inter text-[28px] font-bold leading-[1.2] text-[#101828] sm:text-[36px] lg:text-[length:var(--inter-h2-bold-font-size)] lg:leading-[var(--inter-h2-bold-line-height)]"
          >
            Live Easier With Whipcare
          </h2>
          <p className="max-w-[640px] font-inter text-[15px] font-medium leading-[1.5] text-gray-600 sm:text-[18px] lg:text-[length:var(--inter-h5-medium-font-size)]">
            How do we serve you and your car?
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <figure className="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]">
            <Image
              className="h-auto w-full"
              alt="Whipcare app benefits — vehicle health, service listings, booking, payments, and ratings"
              src={liveEasy}
              width={liveEasy.width}
              height={liveEasy.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1440px"
              quality={90}
            />
          </figure>
        </Reveal>

        <Reveal delay={0.2} className="flex justify-center">
          <Button
            asChild
            variant="secondary"
            className="h-auto w-full max-w-xs overflow-hidden rounded-lg bg-gray-100 px-6 py-3.5 font-inter text-[14px] font-semibold text-[#701e00] hover:bg-gray-100 sm:w-auto sm:text-[length:var(--inter-body-semibold-font-size)]"
          >
            <GetAppLink>Get the App Now</GetAppLink>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
