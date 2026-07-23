"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { cn } from "../../../../lib/utils";
import { ServiceProviderIcon } from "./icons/ServiceProviderIcon";
import { VehicleOwnerIcon } from "./icons/VehicleOwnerIcon";

const vehicleOwnerSteps = [
  {
    title: "Create a profile",
    description:
      "Set up your profile and add your vehicle details to get personalized service recommendations during bookings.",
  },
  {
    title: "Book a Service",
    description:
      "Choose your service and pick a time that works for you. Add any details the mechanic should know before arriving.",
  },
  {
    title: "Get your Service",
    description:
      "Track your provider as they head to you or know exactly where to go. Message them directly for real-time updates.",
  },
  {
    title: "Rate and Review",
    description:
      "After the service is completed, rate the provider and leave a review to help other users.",
  },
] as const;

const serviceProviderSteps = [
  {
    title: "Create a profile",
    description:
      "Set up your profile and let us know your area of expertise to get personalized service bookings.",
  },
  {
    title: "List Service(s)",
    description:
      "List your services, set your prices, and start receiving bookings from vehicle owners near you.",
  },
  {
    title: "Render Service(s)",
    description:
      "See the full breakdown of requested services, update progress, and confirm delivery once each job is done.",
  },
  {
    title: "Get Reviewed and Paid",
    description:
      "Complete the job, get reviewed by the customer, and receive your payment instantly, all within the app.",
  },
] as const;

const audienceOptions = [
  {
    value: "vehicle-owner",
    label: "I'm a Vehicle Owner",
    Icon: VehicleOwnerIcon,
  },
  {
    value: "service-provider",
    label: "I'm a Service Provider",
    Icon: ServiceProviderIcon,
  },
] as const;

export const ServiceExplorerSection = () => {
  const [selectedAudience, setSelectedAudience] = useState("vehicle-owner");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps =
    selectedAudience === "vehicle-owner"
      ? vehicleOwnerSteps
      : serviceProviderSteps;

  useEffect(() => {
    setActiveStepIndex(0);
  }, [selectedAudience]);


  return (
    <section
      aria-labelledby="service-explorer-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px]">
                  <Card className="rounded-2xl border-0 bg-black text-white shadow-none sm:rounded-[32px]">
            <CardContent className="p-5 sm:p-8 lg:p-16">
              <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,231px)_minmax(0,1fr)] lg:items-stretch lg:gap-12">
                <div className="order-last flex w-full max-w-none flex-col justify-between gap-8 lg:order-none lg:max-w-[231px">
                  <header>
                    <h2
                      id="service-explorer-heading"
                      className="font-inter text-[28px] font-bold leading-[1.3] tracking-[0] text-white sm:text-[36px] lg:text-[48px]"
                    >
                      Explore Whipcare
                    </h2>
                  </header>
                  <ToggleGroup
                    type="single"
                    value={selectedAudience}
                    onValueChange={(value) => {
                      if (value) setSelectedAudience(value);
                    }}
                    className="inline-grid w-full grid-cols-1 gap-4 sm:w-max sm:gap-6"
                  >
                    {audienceOptions.map((option) => {
                      const isSelected = selectedAudience === option.value;

                      return (
                        <ToggleGroupItem
                          key={option.value}
                          value={option.value}
                          aria-label={option.label}
                          className={cn(
                            "h-auto w-full justify-start rounded-lg border-[0.5px] border-primary-500 px-4 py-3",
                            isSelected
                              ? "bg-primary-500 hover:bg-primary-500 data-[state=on]:bg-primary-500"
                              : "bg-[#f3f4f6] hover:bg-[#f3f4f6] data-[state=on]:bg-[#f3f4f6]",
                          )}
                        >
                          <span className="inline-flex items-center gap-2">
                            <option.Icon
                              className="h-5 w-5 shrink-0"
                              isSelected={isSelected}
                            />
                            <span
                              className={cn(
                                "font-inter text-[13px] font-medium leading-[1.4] sm:text-[14px] sm:whitespace-nowrap",
                                isSelected
                                  ? "text-white"
                                  : "text-primary-500",
                              )}
                            >
                              {option.label}
                            </span>
                          </span>
                        </ToggleGroupItem>
                      );
                    })}
                  </ToggleGroup>
                </div>

                <div
                  className="order-first flex flex-col items-center gap-6 lg:order-none lg:gap-8"
                >
                  <p className="text-center font-inter text-[16px] font-normal leading-[1.4] text-white sm:text-[16px] lg:text-[18px]">
                    {selectedAudience === "vehicle-owner"
                      ? "Here is a step-by-step guide on how to use Whipcare as a Vehicle Owner:"
                      : "Here is a step-by-step guide on how to use Whipcare as a Service Provider:"}
                  </p>

                  <ol className="flex w-full max-w-[802px] flex-col items-start gap-4 sm:gap-6">
                    {steps.map((step, index) => {
                      const isActive = activeStepIndex === index;

                      return (
                        <li key={step.title} className="w-full">
                          <button
                            type="button"
                            onClick={() => setActiveStepIndex(index)}
                            aria-expanded={isActive}
                            className={cn(
                              "w-full rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                              isActive
                                ? "border border-white bg-[#ffffff1f] opacity-100 shadow-[8px_8px_0px_#d1d5dc]"
                                : "border border-transparent bg-[#ffffff14] opacity-60 shadow-[0px_4px_4px_#00000040] hover:opacity-80",
                            )}
                            style={{
                              animationDelay: `${index * 0.08}s`,
                            }}
                          >
                            <div className="flex w-full items-start justify-between gap-4 p-4 sm:p-6">
                              <div className="flex min-w-0 flex-col items-start gap-2 sm:gap-3">
                                <span className="font-inter text-[18px] font-semibold leading-[1.2] text-white sm:text-[22px] lg:text-[24px]">
                                  {step.title}
                                </span>
                                {isActive && (
                                  <p className="max-w-[531px] font-inter text-[14px] font-medium leading-[1.5] text-gray-200 sm:text-[16px] lg:text-[18px]">
                                    {step.description}
                                  </p>
                                )}
                              </div>
                              <span
                                aria-hidden="true"
                                className={cn(
                                  "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/80 text-[11px] font-semibold",
                                  isActive && "bg-white text-black",
                                )}
                              >
                                {index + 1}
                              </span>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
};
