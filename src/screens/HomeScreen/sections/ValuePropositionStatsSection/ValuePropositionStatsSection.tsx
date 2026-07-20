import Image from "next/image";
import checkAssets from "@/assets/check-assets.png";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "../../../../components/ui/card";

const stats = [
  {
    value: "5k+",
    label: "Customers around the world.",
  },
  {
    value: "3+",
    label: "Countries across the globe.",
  },
  {
    value: "100+",
    label: "Real time active service providers",
  },
  {
    value: "80+",
    label: "Real time active service bookings",
  },
] as const;

export const ValuePropositionStatsSection = () => {
  return (
    <section
      aria-labelledby="value-proposition-heading"
      className="relative w-full overflow-hidden bg-[#701e00]"
    >
      <Image
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        alt=""
        src={checkAssets}
        aria-hidden
        fill
        sizes="100vw"
      />
      <div className="relative mx-auto flex min-h-[320px] w-full max-w-[1440px] items-center px-4 py-12 sm:min-h-[400px] sm:px-6 sm:py-14 md:px-10 lg:px-20 lg:py-16">
        <Card className="h-auto w-full border-0 bg-transparent shadow-none">
          <CardContent className="flex h-full flex-col items-start justify-center p-0">
            <Reveal as="header" className="flex max-w-[760px] flex-col items-start gap-1 sm:gap-2">
              <h2
                id="value-proposition-heading"
                className="font-inter text-[26px] font-medium leading-[1.25] text-white sm:text-[36px] lg:text-[length:var(--inter-h2-medium-font-size)] lg:leading-[var(--inter-h2-medium-line-height)]"
              >
                What we&apos;re doing
              </h2>
              <p className="flex flex-col gap-0.5 text-white sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-2">
                <span className="font-inter text-[15px] font-normal leading-[1.5] sm:text-[18px] lg:text-[length:var(--inter-h5-regular-font-size)]">
                  Providing access to premium car services
                </span>
                <strong className="font-inter text-[15px] font-bold leading-[1.5] sm:text-[18px] lg:text-[length:var(--inter-h5-bold-font-size)]">
                  at the best prices!
                </strong>
              </p>
            </Reveal>

            <div className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 lg:mt-[100px]">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.value}
                  delay={0.08 + index * 0.08}
                  className="flex items-start"
                >
                  <div className="flex flex-col items-start gap-0.5">
                    <div className="font-inter text-[28px] font-semibold leading-[1.2] text-white sm:text-[36px] lg:text-[length:var(--inter-h2-semibold-font-size)] lg:leading-[var(--inter-h2-semibold-line-height)]">
                      {stat.value}
                    </div>
                    <p className="font-inter text-[13px] font-normal leading-[1.4] text-white/90 sm:text-[15px] lg:text-[length:var(--inter-title-2-regular-font-size)]">
                      {stat.label}
                    </p>
                  </div>
                  {index < stats.length - 1 && (
                    <svg
                      className="ml-4 hidden h-[75px] w-[3px] shrink-0 md:ml-8 md:block"
                      viewBox="0 0 3 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M1.5 0V32" stroke="#AA5A3E" />
                      <rect
                        x="3"
                        y="36"
                        width="3"
                        height="3"
                        rx="1.5"
                        transform="rotate(90 3 36)"
                        fill="white"
                      />
                      <path d="M1.5 43V75" stroke="#AA5A3E" />
                    </svg>
                  )}
                </Reveal>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
