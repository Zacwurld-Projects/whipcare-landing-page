import Image from "next/image";
import phoneMockup from "@/assets/phone-mockup.png";
import { vehicleOwnerSteps } from "../exploreGuideData";

export const VehicleOwnerGuideSection = () => {
  return (
    <section
      aria-labelledby="vehicle-owner-guide-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <header
          className="mb-8 max-w-[720px] opacity-0 animate-fade-up sm:mb-10"
          style={{ animationDelay: "0.08s" }}
        >
          <h2
            id="vehicle-owner-guide-heading"
            className="font-inter text-[28px] font-bold leading-[1.25] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[40px]"
          >
            Use Whipcare as a Vehicle owner
          </h2>
          <p className="mt-3 font-inter text-[15px] font-medium leading-[1.5] text-[#6b7280] sm:text-[18px] lg:text-[20px]">
            Here&apos;s a step-by-step guide on how to book and complete your
            selected service.
          </p>
        </header>

        <div
          className="rounded-2xl bg-[#f3f4f5] p-5 opacity-0 animate-fade-up sm:rounded-[32px] sm:p-8 lg:p-10"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-[20px] bg-white">
              <Image
                className="mx-auto block h-auto w-full object-contain"
                alt="Whipcare mobile app booking flow on a smartphone"
                src={phoneMockup}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            <ol className="relative flex flex-col gap-8 sm:gap-10">
              {vehicleOwnerSteps.map((step, index) => {
                const isLast = index === vehicleOwnerSteps.length - 1;

                return (
                  <li
                    key={step.title}
                    className="relative flex gap-4 opacity-0 animate-fade-up sm:gap-5"
                    style={{ animationDelay: `${0.22 + index * 0.08}s` }}
                  >
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[-2rem] left-[11px] top-7 w-px bg-[#d1d5db] sm:bottom-[-2.5rem]"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white"
                    >
                      <span className="h-3 w-3 rounded-full bg-[#701e00]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-inter text-[18px] font-bold leading-[1.3] text-[#111928] sm:text-[20px] lg:text-[24px]">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-inter text-[14px] font-medium leading-[1.5] text-[#6b7280] sm:text-[16px]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
