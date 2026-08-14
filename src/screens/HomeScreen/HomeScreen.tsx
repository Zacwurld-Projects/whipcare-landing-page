import type { BlogPost } from "@/screens/BlogScreen/blogData";
import { AdvertisementSpotlightSection } from "./sections/AdvertisementSpotlightSection";
import { AppBenefitHighlightsSection } from "./sections/AppBenefitHighlightsSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { HomeBlogSection } from "./sections/HomeBlogSection";
import { ServiceCategoryCardsSection } from "./sections/ServiceCategoryCardsSection";
import { ServiceExplorerSection } from "./sections/ServiceExplorerSection";
import { ValuePropositionStatsSection } from "./sections/ValuePropositionStatsSection";

type HomeScreenProps = {
  posts?: BlogPost[];
};

export const HomeScreen = ({ posts = [] }: HomeScreenProps) => {
  return (
    <main id="main-content" className="w-full bg-white">
      <HeroIntroSection />
      <ServiceExplorerSection />
      <AppBenefitHighlightsSection />
      <ValuePropositionStatsSection />
      <ServiceCategoryCardsSection />
      <CustomerTestimonialsSection />
      <HomeBlogSection posts={posts} />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
