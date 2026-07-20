import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import { FleetManagerGuideSection } from "./sections/FleetManagerGuideSection";
import { FleetsFaqSection } from "./sections/FleetsFaqSection";
import { FleetsHeroSection } from "./sections/FleetsHeroSection";
import { FleetsPricingSection } from "./sections/FleetsPricingSection";
import { FleetsWorksSection } from "./sections/FleetsWorksSection";

export const FleetsScreen = () => {
  return (
    <main className="w-full bg-white">
      <FleetsHeroSection />
      <FleetManagerGuideSection />
      <FleetsWorksSection />
      <FleetsPricingSection />
      <FleetsFaqSection />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
