import Image from "next/image";
import serviceProviderMockup from "@/assets/service-provider-mockup.png";
import { serviceProviderSteps } from "../exploreGuideData";

export const ServiceProviderGuideSection = () => {
  return (
    <section
      aria-labelledby="service-provider-guide-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <header
          className="mb-8 opacity-0 animate-fade-up sm:mb-10 lg:ml-auto lg:max-w-[720px] lg:text-right"
          style={{ animationDelay: "0.08s" }}
        >
          <h2
            id="service-provider-guide-heading"
            className="font-inter text-[26px] font-bold leading-[1.25] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[40px]"
          >
            Use Whipcare as a Vehicle service provider
          </h2>
          <p className="mt-3 font-inter text-[15px] font-medium leading-[1.5] text-[#6b7280] sm:text-[18px] lg:text-[20px]">
            Here is a guide on how to manage bookings and earn as a service
            provider.
          </p>
        </header>

        <div
          className="rounded-2xl bg-[#0b1220] p-5 opacity-0 animate-fade-up sm:rounded-[32px] sm:p-8 lg:p-10"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <ol className="relative order-2 flex flex-col gap-8 sm:gap-10 lg:order-1">
              {serviceProviderSteps.map((step, index) => {
                const isLast = index === serviceProviderSteps.length - 1;

                return (
                  <li
                    key={step.title}
                    className="relative flex gap-4 opacity-0 animate-fade-up sm:gap-5"
                    style={{ animationDelay: `${0.22 + index * 0.08}s` }}
                  >
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[-2rem] left-[11px] top-7 w-px bg-white/40 sm:bottom-[-2.5rem]"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white"
                    >
                      <span className="h-3 w-3 rounded-full bg-[#701e00]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-inter text-[18px] font-bold leading-[1.3] text-white sm:text-[20px]">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-inter text-[14px] font-medium leading-[1.5] text-[#cbd5e1] sm:text-[16px]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="order-1 overflow-hidden rounded-[20px] bg-white lg:order-2">
              <Image
                className="mx-auto block h-auto w-full object-contain"
                alt="Whipcare provider dashboard showing bookings and earnings on a smartphone"
                src={serviceProviderMockup}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
