import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import blogHero from "@/assets/blog-hero.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import type { BlogPost } from "./blogData";
import { BlogPostsSection } from "./sections/BlogPostsSection";

type BlogScreenProps = {
  posts: BlogPost[];
};

export const BlogScreen = ({ posts }: BlogScreenProps) => {
  return (
    <main className="w-full bg-white">
      <section className="relative w-full overflow-hidden bg-white">
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pt-6 sm:px-6 lg:px-[52px]">
          <SiteHeader active="Resources" />

          <div className="relative mt-6 -mx-4 sm:-mx-6 lg:-mx-[52px]">
            <div className="relative z-10 h-1 w-full">
              <Image
                className="h-full w-full object-contain"
                alt=""
                src={frame1618873200}
                aria-hidden
              />
            </div>

            <div className="relative mt-16 flex flex-col items-start px-4 sm:mt-20 sm:px-6 lg:px-[52px]">
              <div className="relative pl-20 flex max-w-[640px] flex-col items-start gap-4 text-left">
                <div className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[10px] left-0 z-0 h-[18px] w-full rounded-[1px] bg-[#fca5a5]/60 sm:bottom-[14px] sm:h-5"
                  />
                  <h1 className="relative z-10 font-inter text-[58px] font-extrabold leading-[1.2] tracking-[0] text-[#111928] sm:text-[48px] lg:text-[56px] lg:leading-[72.8px]">
                    Blogs
                  </h1>
                </div>
                <p className="max-w-[520px] font-inter text-[24px] font-medium leading-[1.5] tracking-[0] text-[#475367]">
                  Tips, guides, and insights to help you get the most out of
                  your vehicle.
                </p>
              </div>

              <div className="relative mx-auto mt-10 w-full max-w-[1200px] sm:mt-14">
                <Image
                  className="mx-auto aspect-[21/9] h-auto w-full rounded-t-[16px] object-cover object-center"
                  alt="Happy woman celebrating beside a red car"
                  src={blogHero}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogPostsSection posts={posts} />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
