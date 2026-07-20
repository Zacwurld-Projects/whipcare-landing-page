import { AdvertisementSpotlightSection } from "./sections/AdvertisementSpotlightSection";
import { AppBenefitHighlightsSection } from "./sections/AppBenefitHighlightsSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { ServiceCategoryCardsSection } from "./sections/ServiceCategoryCardsSection";
import { ServiceExplorerSection } from "./sections/ServiceExplorerSection";
import { ValuePropositionStatsSection } from "./sections/ValuePropositionStatsSection";

export const HomeScreen = () => {
  return (
    <main id="main-content" className="w-full bg-white">
      <HeroIntroSection />
      <ServiceExplorerSection />
      <AppBenefitHighlightsSection />
      <ValuePropositionStatsSection />
      <ServiceCategoryCardsSection />
      <CustomerTestimonialsSection />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
