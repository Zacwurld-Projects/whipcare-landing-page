"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL } from "@/constants/appLinks";

type Billing = "monthly" | "yearly";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for businesses with 1 –10 vehicles",
    monthly: 30000,
    features: [
      "Fleet dashboard",
      "Maintenance alerts",
      "Workshop booking",
      "Service history log",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Perfect for businesses with 11 –30 vehicles",
    monthly: 70000,
    features: [
      "All Starter features",
      "Predictive maintenance",
      "Downtime analytics",
      "Fleet health score",
      "Workshop performance",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Perfect for businesses with 31 –100 vehicles",
    monthly: 150000,
    features: [
      "All Pro features",
      "MTTR / MTBF analytics",
      "Cost analytics + P&L",
      "Automated scheduling",
      "Priority support",
      "API integrations",
    ],
  },
] as const;

const customFeatures = [
  "Full enterprise package",
  "Dedicated account manager",
  "Custom integrations",
  "Net-30 invoicing",
] as const;

const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;

const Divider = () => (
  <svg
    className="my-4 h-auto w-full sm:my-5"
    width="368"
    height="4"
    viewBox="0 0 368 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M0 2H176" stroke="#F3F4F6" strokeWidth="1.5" />
    <rect x="182" width="4" height="4" rx="2" fill="#711E00" />
    <path d="M192 2H368" stroke="#F3F4F6" strokeWidth="1.5" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="mt-0.5 shrink-0"
  >
    <path
      d="M13.333 4L6 11.333 2.667 8"
      stroke="#701e00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BillingToggle = ({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (next: Billing) => void;
}) => (
  <div
    className="relative inline-grid grid-cols-2 rounded-lg bg-[#f3f4f6] p-1"
    role="group"
    aria-label="Billing period"
  >
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-md bg-[linear-gradient(180deg,#711E00_0%,#441200_100%)] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        value === "yearly" ? "translate-x-full" : "translate-x-0"
      }`}
    />
    {(["monthly", "yearly"] as const).map((option) => {
      const active = value === option;
      return (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={active}
          className={`relative z-10 rounded-md px-3 py-1.5 font-inter text-[14px] font-medium leading-none transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            active
              ? "text-white"
              : "bg-transparent text-[#767676] hover:text-[#111928]"
          }`}
        >
          {option === "monthly" ? "Monthly" : "Yearly"}
        </button>
      );
    })}
  </div>
);

export const FleetsPricingSection = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [selectedTier, setSelectedTier] = useState<string>("pro");
  const billedLabel = billing === "monthly" ? "Billed Monthly" : "Billed Yearly";

  return (
    <section className="w-full bg-[#f3f4f5] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-8 text-center sm:mb-12">
          <h2 className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#101828] sm:text-[36px] lg:text-[40px]">
            Pricing
          </h2>
          <p className="mt-2 font-inter text-[16px] font-medium leading-[1.5] text-[#4A5565] sm:text-[20px] lg:text-[24px]">
            Flat Monthly SaaS by Fleet Size
          </p>
        </header>

        <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-3">
          {tiers.map((tier) => {
            const price =
              billing === "monthly" ? tier.monthly : tier.monthly * 12;
            const isActive = selectedTier === tier.id;

            return (
              <article
                key={tier.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedTier(tier.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedTier(tier.id);
                  }
                }}
                className={`flex h-full cursor-pointer flex-col rounded-[16px] bg-white p-5 shadow-[0_1px_3px_rgba(17,25,40,0.06)] transition-colors sm:rounded-[20px] sm:p-6 ${
                  isActive
                    ? "border-2 border-[#701e00]"
                    : "border-2 border-transparent"
                }`}
              >
                <div>
                  <h3 className="font-inter text-[17px] font-bold leading-[1.3] text-[#364153] sm:text-[18px]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 font-inter text-[14px] font-normal leading-[1.45] text-[#364153] sm:text-[16px]">
                    {tier.description}
                  </p>
                </div>

                <Divider />

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="font-inter text-[24px] font-bold leading-none tracking-[0] text-[#711E00] sm:text-[28px]">
                      {formatNaira(price)}
                    </p>
                    <p className="font-inter text-[14px] font-medium text-[#4A5565] sm:text-[16px]">
                      {billedLabel}
                    </p>
                  </div>
                  <div
                    className="mt-3 sm:mt-4"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <BillingToggle value={billing} onChange={setBilling} />
                  </div>
                </div>

                <Divider />

                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 font-inter text-[14px] font-medium leading-[1.4] text-[#374151] sm:text-[15px]"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5.6px] bg-[#F3F4F6]">
                        <CheckIcon />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 sm:pt-8">
                  <Button
                    asChild
                    className={`h-auto w-full rounded-[8px] px-5 py-3 sm:py-3.5 font-inter text-[14px] font-medium sm:text-[15px] ${
                      isActive
                        ? "bg-[#701e00] text-white hover:bg-[#5a1800]"
                        : "bg-[#F3F4F6] text-[#737373] hover:bg-[#d1d5db]"
                    }`}
                  >
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedTier(tier.id);
                      }}
                    >
                      Get started
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <article
          role="button"
          tabIndex={0}
          onClick={() => setSelectedTier("custom")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setSelectedTier("custom");
            }
          }}
          className={`mt-4 cursor-pointer rounded-[16px] bg-white p-5 shadow-[0_1px_3px_rgba(17,25,40,0.06)] transition-colors sm:mt-5 sm:rounded-[20px] sm:p-6 lg:p-8 ${
            selectedTier === "custom"
              ? "border-2 border-[#701e00]"
              : "border-2 border-transparent"
          }`}
        >
          <div>
            <h3 className="font-inter text-[17px] font-bold leading-[1.3] text-[#364153] sm:text-[18px]">
              Custom
            </h3>
            <p className="mt-1 font-inter text-[14px] font-normal leading-[1.45] text-[#364153] sm:text-[16px]">
              Perfect for businesses with 100+ vehicles
            </p>
          </div>

          <Divider />

          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="shrink-0">
              <p className="font-inter text-[24px] font-bold leading-none tracking-[0] text-[#701e00] sm:text-[28px]">
                Negotiated
              </p>
              <p className="mt-2 font-inter text-[14px] font-medium text-[#4A5565] sm:text-[16px]">
                {billedLabel}
              </p>
              <div
                className="mt-3 sm:mt-4"
                onClick={(event) => event.stopPropagation()}
              >
                <BillingToggle value={billing} onChange={setBilling} />
              </div>
            </div>

            <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3">
              {customFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 font-inter text-[14px] font-medium leading-[1.4] text-[#374151] sm:text-[15px]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5.6px] bg-[#F3F4F6]">
                    <CheckIcon />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            className={`mt-6 h-auto w-full rounded-[8px] px-5 py-3 font-inter text-[14px] font-medium sm:mt-8 sm:py-3.5 sm:text-[15px] ${
              selectedTier === "custom"
                ? "bg-[#701e00] text-white hover:bg-[#5a1800]"
                : "bg-[#F3F4F6] text-[#737373] hover:bg-[#d1d5db]"
            }`}
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedTier("custom");
              }}
            >
              Get started
            </a>
          </Button>
        </article>
      </div>
    </section>
  );
};
