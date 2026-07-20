import type { ComponentType, SVGProps } from "react";
import {
  DetailersIcon,
  HaulersIcon,
  MechanicsIcon,
  VehicleWashIcon,
} from "../../HomeScreen/sections/ServiceCategoryCardsSection/ServiceCategoryIcons";

type ValueIcon = ComponentType<SVGProps<SVGSVGElement>>;

const values: {
  title: string;
  description: string;
  iconBackground: string;
  Icon: ValueIcon;
}[] = [
  {
    title: "Customer Focus",
    description:
      "We prioritize our customers' needs and strive to provide an exceptional service experience from start to finish.",
    iconBackground: "bg-[#feedec]",
    Icon: MechanicsIcon,
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure that all our service providers are vetted and meet our stringent quality standards to guarantee the best care for your Vehicle.",
    iconBackground: "bg-[#f5ebf2]",
    Icon: DetailersIcon,
  },
  {
    title: "Innovation",
    description:
      "We are constantly innovating and improving our platform to provide the best possible experience for our users.",
    iconBackground: "bg-[#ebfcff]",
    Icon: HaulersIcon,
  },
  {
    title: "Trust and Transparency",
    description:
      "At Whipcare, we prioritize trust and transparency by connecting you with certified professionals and ensuring clear, upfront communication for every service.",
    iconBackground: "bg-[#f3ebff]",
    Icon: VehicleWashIcon,
  },
];

const LeftCircles = () => (
  <svg
    className="pointer-events-none absolute left-0 top-1/2 hidden h-[600px] w-[133px] -translate-y-1/2 lg:block"
    width="133"
    height="600"
    viewBox="0 0 133 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="132"
      y="1"
      width="598"
      height="598"
      rx="299"
      transform="rotate(90 132 1)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="100"
      y="51"
      width="498"
      height="498"
      rx="249"
      transform="rotate(90 100 51)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
    <rect
      x="68"
      y="101"
      width="398"
      height="398"
      rx="199"
      transform="rotate(90 68 101)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="36"
      y="125.738"
      width="348"
      height="348"
      rx="174"
      transform="rotate(90 36 125.738)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
  </svg>
);

const RightCircles = () => (
  <svg
    className="pointer-events-none absolute right-0 top-1/2 hidden h-[600px] w-[131px] -translate-y-1/2 lg:block"
    width="131"
    height="600"
    viewBox="0 0 131 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="1"
      y="599"
      width="598"
      height="598"
      rx="299"
      transform="rotate(-90 1 599)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="33"
      y="549"
      width="498"
      height="498"
      rx="249"
      transform="rotate(-90 33 549)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
    <rect
      x="65"
      y="499"
      width="398"
      height="398"
      rx="199"
      transform="rotate(-90 65 499)"
      stroke="#711E00"
      strokeWidth="2"
    />
    <rect
      x="97"
      y="474.262"
      width="348"
      height="348"
      rx="174"
      transform="rotate(-90 97 474.262)"
      stroke="#D1D5DC"
      strokeWidth="2"
    />
  </svg>
);

export const OurValuesSection = () => {
  return (
    <section
      aria-labelledby="our-values-heading"
      className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <LeftCircles />
      <RightCircles />

      <div className="relative z-10 mx-auto flex w-full max-w-[1048px] flex-col items-center gap-10 sm:gap-14 lg:gap-20">
        <h2
          id="our-values-heading"
          className="text-center font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#111928] opacity-0 animate-fade-up sm:text-[36px] lg:text-[48px]"
        >
          Our Values
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-[#f3f4f5] p-5 opacity-0 animate-fade-up transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(17,25,40,0.06)] sm:min-h-[260px] sm:rounded-[20px] sm:p-6 lg:min-h-[300px] lg:p-8"
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 sm:h-14 sm:w-14 lg:h-16 lg:w-16 ${value.iconBackground}`}
              >
                <value.Icon className="h-[28px] w-[28px] shrink-0 sm:h-[33px] sm:w-[33px]" />
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:mt-8">
                <h3 className="font-inter text-[22px] font-semibold leading-[1.3] text-[#12141d] sm:text-[26px] lg:text-[32px]">
                  {value.title}
                </h3>
                <p className="max-w-[436px] font-inter text-[14px] font-medium leading-[1.5] text-[#6b7280] sm:text-[15px] lg:text-[16px]">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
