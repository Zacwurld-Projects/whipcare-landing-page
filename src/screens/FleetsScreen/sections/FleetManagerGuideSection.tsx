"use client";

import Image from "next/image";
import { useState } from "react";
import fleetsManager from "@/assets/fleets-manager.png";

const fleetSteps = [
  {
    title: "Create Account",
    description:
      "Get your business set up on Whipcare. Fill in your details and we'll have your account up and running in minutes.",
  },
  {
    title: "Onboard Your Fleets",
    description:
      "Get your entire fleet on Whipcare in minutes, you can schedule services, track maintenance, and monitor every vehicle",
  },
  {
    title: "Book a Service",
    description:
      "Choose your service and pick a time that works for you. Add any details the mechanic should know before arriving.",
  },
  {
    title: "Receive Confirmation",
    description:
      "Instant booking confirmation sent to your mail and in-app. Get reminders as your appointment approaches.",
  },
  {
    title: "Get the Service",
    description:
      "Know exactly where to go or track your provider as they head to you. Message your provider directly for real-time updates.",
  },
  {
    title: "Make a Payment",
    description:
      "Pay your way. Card, bank transfer, or Whip Point. All transactions are secure.",
  },
] as const;

export const FleetManagerGuideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="mb-6 max-w-[720px] sm:mb-10">
          <h2 className="font-inter text-[28px] font-bold leading-[1.25] tracking-[0] text-[#101828] sm:text-[36px] lg:text-[40px]">
            Use Whipcare as a Fleet Manager
          </h2>
          <p className="mt-2 font-inter text-[16px] font-medium leading-[1.5] text-[#4A5565] sm:mt-3 sm:text-[20px] lg:text-[24px]">
            Here&apos;s a step-by-step guide on how to onboard Fleets and
            complete your selected service.
          </p>
        </header>

        <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] sm:aspect-auto sm:min-h-[360px] sm:rounded-[20px] lg:min-h-[560px]">
            <Image
              className="object-cover"
              alt="Fleet manager using Whipcare on a tablet"
              src={fleetsManager}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>

          <ol className="flex h-full min-h-0 flex-col gap-2.5 sm:gap-4">
            {fleetSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={step.title} className="flex min-h-0 lg:flex-1">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`flex h-full w-full items-start gap-2.5 rounded-[12px] px-3 py-3 text-left transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-4 sm:rounded-[16px] sm:px-5 sm:py-5 ${isActive
                        ? "bg-[#101828] shadow-[0_8px_24px_rgba(16,24,40,0.18)]"
                        : "bg-[#F3F4F6] hover:bg-[#e5e7eb]"
                      }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-6 sm:w-6 ${isActive
                          ? "border-white bg-white"
                          : "border-[#d1d5db] bg-transparent"
                        }`}
                    >
                      <span
                        className={`rounded-full transition-[background-color,transform,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                            ? "h-2 w-2 scale-100 bg-[#0b1220] sm:h-2.5 sm:w-2.5"
                            : "h-1.5 w-1.5 scale-90 bg-[#701e00] sm:h-2 sm:w-2"
                          }`}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-inter text-[16px] font-semibold leading-[1.3] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[20px] lg:text-[24px] ${isActive ? "text-white" : "text-[#000000]"
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`overflow-hidden font-inter text-[13px] font-medium leading-[1.5] transition-[color,margin,max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-1.5 sm:text-[15px] sm:max-h-none sm:opacity-100 lg:text-[16px] ${isActive
                            ? "mt-1 max-h-40 text-[#D1D5DC] opacity-100"
                            : "mt-0 max-h-0 text-[#6A7282] opacity-0 sm:mt-1.5 sm:max-h-none sm:opacity-100"
                          }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
