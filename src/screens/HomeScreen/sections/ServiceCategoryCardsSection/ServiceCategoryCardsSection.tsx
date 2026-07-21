import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  DetailersIcon,
  HaulersIcon,
  MechanicsIcon,
  VehicleWashIcon,
} from "./ServiceCategoryIcons";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;

const serviceCategories: {
  title: string;
  description: string;
  iconBackground: string;
  Icon: ServiceIcon;
}[] = [
  {
    title: "Mechanics",
    description:
      "Our network of certified mechanics offer a range of expertise to keep your Whip running smoothly.",
    iconBackground: "bg-[#feedec]",
    Icon: MechanicsIcon,
  },
  {
    title: "Detailers",
    description:
      "Enhance your Whip's appearance and protect its value with the best rated detailing services close to you.",
    iconBackground: "bg-[#f5ebf2]",
    Icon: DetailersIcon,
  },
  {
    title: "Haulers",
    description:
      "Safe transportation for your Vehicle. Inter-state or intra-state, by top rated professional car haulers.",
    iconBackground: "bg-[#ebfcff]",
    Icon: HaulersIcon,
  },
  {
    title: "Vehicle wash",
    description:
      "Professional Vehicle wash services, delivered by top rated providers near you.",
    iconBackground: "bg-[#f3ebff]",
    Icon: VehicleWashIcon,
  },
];

export const ServiceCategoryCardsSection = () => {
  return (
    <section
      aria-labelledby="service-categories-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1048px] flex-col items-center gap-12 sm:gap-16 lg:gap-20">
        <Reveal as="header" className="flex max-w-[550px] flex-col items-center justify-center gap-2 text-center">
          <h2
            id="service-categories-heading"
            className="font-inter text-[28px] font-bold leading-[1.2] text-[#101828] sm:text-[36px] lg:text-[length:var(--inter-h2-bold-font-size)] lg:leading-[var(--inter-h2-bold-line-height)]"
          >
            Explore Our Services
          </h2>
          <p className="max-w-[550px] font-inter text-[15px] font-medium leading-[1.5] text-gray-600 sm:text-[16px] lg:text-[24px]">
            Discover how Whipcare connects you to a variety of car service
            providers
          </p>
        </Reveal>

        <div className="grid w-full max-w-[1048px] grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.title} delay={0.08 + index * 0.08}>
              <Card className="min-h-[260px] rounded-2xl border-0 bg-gray-50 shadow-none transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(17,25,40,0.06)] sm:min-h-[300px]">
                <CardContent className="flex h-full flex-col items-start justify-between gap-6 p-6 sm:p-8">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl sm:h-16 sm:w-16 ${service.iconBackground}`}
                  >
                    <service.Icon className="h-7 w-7 shrink-0 sm:h-[33px] sm:w-[33px]" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-inter text-[22px] font-semibold leading-[1.3] text-[#12141d] sm:text-[length:var(--inter-h3-semibold-font-size)] sm:leading-[var(--inter-h3-semibold-line-height)]">
                      {service.title}
                    </h3>
                    <p className="max-w-[436px] font-inter text-[14px] font-medium leading-[1.5] text-grey-600 sm:text-[length:var(--inter-title-2-medium-font-size)] sm:leading-[var(--inter-title-2-medium-line-height)]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
