import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export const ContactScreen = () => {
  return (
    <main className="w-full bg-[#f3f4f6]">
      <section
        aria-labelledby="contact-heading"
        className="relative w-full overflow-hidden bg-[#f3f4f6]"
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pt-5 sm:px-6 sm:pt-6 lg:px-[52px]">
          <SiteHeader active="Contact Us" />

          <div className="relative mt-5 -mx-4 sm:mt-6 sm:-mx-6 lg:-mx-[52px]">
            <div className="relative z-10 h-1 w-full">
              <Image
                className="h-full w-full object-contain"
                alt=""
                src={frame1618873200}
                aria-hidden
              />
            </div>

            <ContactFormSection />
          </div>
        </div>
      </section>

      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
