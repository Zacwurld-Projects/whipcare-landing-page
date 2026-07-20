"use client";

import { useState } from "react";
import type { FaqItem } from "../faqData";

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

type FaqAccordionSectionProps = {
  faqs: readonly FaqItem[];
};

export const FaqAccordionSection = ({ faqs }: FaqAccordionSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section
      aria-labelledby="faq-accordion-heading"
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <h2 id="faq-accordion-heading" className="sr-only">
        Frequently asked questions
      </h2>

      <div className="mx-auto flex w-full max-w-[920px] flex-col gap-3 sm:gap-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <article
              key={faq.question}
              className={`opacity-0 animate-fade-up rounded-xl bg-[#f3f4f5] transition-[box-shadow,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-2xl ${
                isOpen
                  ? "border-2 border-[#711E00] shadow-[4px_4px_0_0_#711E00]"
                  : "border border-[#e5e7eb] hover:border-[#d1d5db]"
              }`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-6"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              >
                <span
                  className={`min-w-0 font-inter text-[16px] leading-[1.4] text-[#000000] transition-[font-weight,color] duration-300 sm:text-[20px] lg:text-[24px] ${
                    isOpen ? "font-semibold text-[#111928]" : "font-medium"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-[border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-8 sm:w-8 ${
                    isOpen
                      ? "rotate-180 border-[#711E00] text-[#711E00]"
                      : "rotate-0 border-[#9ca3af] text-[#6b7280]"
                  }`}
                >
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[720px] px-4 pb-4 font-inter text-[14px] font-medium leading-[1.55] text-[#4A5565] sm:px-6 sm:pb-6 sm:text-[18px] lg:text-[20px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
