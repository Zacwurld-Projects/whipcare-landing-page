"use client";

import { useState } from "react";
import { fleetsFaqs } from "../fleetsFaqData";

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M10 4.5V15.5M4.5 10H15.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M4.5 10H15.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const FleetsFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center">
        <header className="mb-6 max-w-[720px] text-center sm:mb-10">
          <h2 className="font-inter text-[28px] font-bold leading-[1.25] tracking-[0] text-[#101828] sm:text-[36px] lg:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 font-inter text-[16px] font-medium leading-[1.5] text-[#4A5565] sm:mt-3 sm:text-[20px] lg:text-[24px]">
            Everything you need to know about using Whipcare for your business.
          </p>
        </header>

        <div className="flex w-full flex-col gap-3 sm:gap-5">
          {fleetsFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`rounded-xl bg-[#f3f4f5] transition-[box-shadow,border-color] duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-2 border-[#711E00] shadow-[4px_4px_0_0_#711E00]"
                    : "border border-[#e5e7eb]"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-6"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                >
                  <span
                    className={`min-w-0 font-inter text-[16px] leading-[1.4] text-[#000000] sm:text-[20px] lg:text-[24px] ${
                      isOpen ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-8 sm:w-8 ${
                      isOpen
                        ? "border-[#711E00] text-[#711E00]"
                        : "border-[#9ca3af] text-[#6b7280]"
                    }`}
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[720px] px-4 pb-4 font-inter text-[14px] font-medium leading-[1.55] text-[#6b7280] sm:px-6 sm:pb-6 sm:text-[18px] lg:text-[20px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
