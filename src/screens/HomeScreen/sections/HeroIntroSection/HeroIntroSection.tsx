import Image from "next/image";
import frame96 from "@/assets/frame-96.svg";
import homeHeroPhones from "@/assets/home-hero-phones.png";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import { SiteHeader } from "../../../../components/SiteHeader";
import { Button } from "../../../../components/ui/button";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
} from "../../../../constants/appLinks";

const heroCtas = [
  {
    label: "Get it on Playstore",
    href: PLAY_STORE_URL,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2.25 2.78873V21.2106C2.25012 21.2506 2.26204 21.2896 2.28427 21.3228C2.30649 21.3561 2.33803 21.382 2.37492 21.3973C2.41182 21.4127 2.45243 21.4168 2.49166 21.4092C2.5309 21.4016 2.56701 21.3826 2.59547 21.3545L12.1875 12.0001L2.59547 2.64483C2.56701 2.61677 2.5309 2.59773 2.49166 2.59011C2.45243 2.58249 2.41182 2.58663 2.37492 2.602C2.33803 2.61737 2.30649 2.64329 2.28427 2.6765C2.26204 2.70972 2.25012 2.74877 2.25 2.78873ZM16.2094 8.15639L4.18219 1.53014L4.17469 1.52592C3.9675 1.41342 3.77062 1.69373 3.94031 1.85686L13.3683 10.8719L16.2094 8.15639ZM3.94125 22.1434C3.77062 22.3065 3.9675 22.5869 4.17562 22.4744L4.18312 22.4701L16.2094 15.8439L13.3683 13.1275L3.94125 22.1434ZM21.0647 10.8283L17.7061 8.97858L14.5481 12.0001L17.7061 15.0203L21.0647 13.172C21.9783 12.6672 21.9783 11.3331 21.0647 10.8283Z" fill="white" />
      </svg>
    ),
  },
  {
    label: "Get it on Appstore",
    href: APP_STORE_URL,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M17.0502 20.28C16.0702 21.23 15.0002 21.08 13.9702 20.63C12.8802 20.17 11.8802 20.15 10.7302 20.63C9.29016 21.25 8.53016 21.07 7.67016 20.28C2.79016 15.25 3.51016 7.59 9.05016 7.31C10.4002 7.38 11.3402 8.05 12.1302 8.11C13.3102 7.87 14.4402 7.18 15.7002 7.27C17.2102 7.39 18.3502 7.99 19.1002 9.07C15.9802 10.94 16.7202 15.05 19.5802 16.2C19.0102 17.7 18.2702 19.19 17.0402 20.29L17.0502 20.28ZM12.0302 7.25C11.8802 5.02 13.6902 3.18 15.7702 3C16.0602 5.58 13.4302 7.5 12.0302 7.25Z" fill="white" />
      </svg>
    ),
  },
];

export const HeroIntroSection = () => {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative w-full overflow-hidden bg-white"
    >
      <Image
        className="pointer-events-none absolute left-10 top-[-68px] hidden h-[912px] w-1 xl:block"
        alt=""
        src={frame1618873202}
        aria-hidden
      />
      <Image
        className="pointer-events-none absolute right-8 top-[-68px] hidden h-[912px] w-1 xl:block"
        alt=""
        src={frame1618873202}
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 lg:px-[52px]">
        <SiteHeader active="Home" />
        <div className="relative -mx-4 mt-5 sm:mt-6 sm:-mx-6 lg:-mx-[52px]">
          <div className="relative z-10 h-1 w-full">
            <Image
              className="h-full w-full object-contain"
              alt=""
              src={frame1618873200}
              aria-hidden
            />
          </div>
          <header className="relative mt-10 flex flex-col items-center px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:px-[52px]">
            <div className="relative flex max-w-[820px] flex-col items-center gap-6 text-center sm:gap-8">
              <div className="relative flex flex-col items-center gap-4">
                <div
                  className="opacity-0 animate-fade-up relative z-10 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-[#f3f4f6] px-2 py-1"
                >
                  <Image
                    alt=""
                    className="h-8 w-auto sm:h-9 sm:w-[118px]"
                    height={36}
                    src={frame96}
                    width={118}
                  />
                  <span className="font-inter text-[13px] font-medium leading-[1.4] text-[#5a1800] sm:text-[length:var(--inter-title-1-medium-font-size)] sm:leading-[var(--inter-title-1-medium-line-height)]">
                    Join 2.5k+ Satisfied User
                  </span>
                </div>
                <div
                  className="opacity-0 animate-fade-up relative z-10 flex flex-col items-center gap-2 sm:gap-3"
                  style={{ animationDelay: "0.1s" }}
                >
                  <h1
                    id="home-hero-title"
                    className="max-w-[794px] font-inter text-[32px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[44px] lg:text-[56px] lg:leading-[1.2]"
                  >
                    Where Vehicle Owners Meet Top Service Providers
                  </h1>
                  <p className="max-w-[670px] font-inter text-[15px] font-medium leading-[1.5] text-grey-600 sm:text-[18px] lg:text-[22px] xl:text-[length:var(--inter-h5-medium-font-size)]">
                    Car owners find trusted mechanics at the best price. Service
                    providers find steady work. Everyone wins on Whipcare.
                  </p>
                </div>
              </div>
              <div
                className="opacity-0 animate-fade-up flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                style={{ animationDelay: "0.2s" }}
              >
                {heroCtas.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    className="h-auto w-full rounded-lg bg-[#701e00] px-5 py-3 hover:bg-[#5a1800] sm:w-auto"
                  >
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-flex items-center justify-center gap-1">
                        {cta.icon}
                        <span className="font-inter text-[14px] font-semibold text-white sm:text-[length:var(--inter-title-1-semibold-font-size)]">
                          {cta.label}
                        </span>
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            <div
              className="opacity-0 animate-fade-up relative mx-auto mt-10 w-full max-w-[1040px] sm:mt-14 lg:mt-20"
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                className="mx-auto h-auto w-full object-contain"
                alt="Whipcare mobile apps for vehicle owners and service providers"
                src={homeHeroPhones}
                priority
                sizes="(max-width: 1040px) 100vw, 1040px"
              />
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
