import Image from "next/image";
import frame1618873200 from "@/assets/Frame 1618873200.png";
import frame1618873202 from "@/assets/Frame 1618873202.png";
import { BlogAuthorLink } from "@/components/BlogAuthorLink";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { BlogShareButton } from "@/components/BlogShareButton";
import { BlogViewTracker } from "@/components/BlogViewTracker";
import { SiteHeader } from "@/components/SiteHeader";
import { AdvertisementSpotlightSection } from "../HomeScreen/sections/AdvertisementSpotlightSection";
import { FooterNavigationSection } from "../HomeScreen/sections/FooterNavigationSection";
import type { BlogPost } from "./blogData";
import { BlogPostContentSection } from "./sections/BlogPostContentSection";
import { BlogPostFollowUpSection } from "./sections/BlogPostFollowUpSection";

type BlogPostScreenProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-NG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

export const BlogPostScreen = ({ post, relatedPosts }: BlogPostScreenProps) => {
  return (
    <main className="w-full bg-white">
      <BlogViewTracker blogId={post.id} />
      <section
        aria-labelledby="blog-post-title"
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

        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pt-5 sm:px-6 sm:pt-6 lg:px-[52px]">
          <SiteHeader active="Blog" />

          <div className="relative mt-5 -mx-4 sm:mt-6 sm:-mx-6 lg:-mx-[52px]">
            <div className="relative z-10 h-1 w-full">
              <Image
                className="h-full w-full object-contain"
                alt=""
                src={frame1618873200}
                aria-hidden
              />
            </div>

            <header className="relative mt-10 flex flex-col items-center px-4 pb-10 text-center sm:mt-14 sm:px-6 sm:pb-12 lg:mt-16 lg:px-[52px] lg:pb-16">
              <div className="flex max-w-[760px] flex-col items-center gap-3 sm:gap-4">
                <p className="font-inter text-[13px] font-medium uppercase tracking-[0.06em] text-[#711E00] sm:text-[15px] lg:text-[18px]">
                  {post.categoryLabel}
                </p>
                <h1
                  id="blog-post-title"
                  className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[48px] lg:leading-[1.2] xl:leading-[1.15]"
                >
                  {post.title}
                </h1>
                <p className="max-w-[680px] font-inter text-[15px] font-medium leading-[1.6] tracking-[0] text-[#475367] sm:text-[18px] lg:text-[22px] xl:text-[24px]">
                  {post.description}
                </p>

                <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-inter text-[12px] text-[#6b7280] sm:text-[13px]">
                  {post.authorName ? (
                    <>
                      <span>
                        By{" "}
                        <BlogAuthorLink
                          name={post.authorName}
                          href={post.authorLink}
                          className="text-[12px] sm:text-[13px]"
                        />
                      </span>
                      <span aria-hidden="true">•</span>
                    </>
                  ) : null}
                  <time dateTime={post.publishedAt}>
                    Published {formatDate(post.publishedAt)}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTimeMinutes} min read</span>
                  <span aria-hidden="true">•</span>
                  <BlogShareButton
                    slug={post.slug}
                    title={post.title}
                    description={post.description || post.excerpt}
                  />
                </div>
              </div>

              <div className="relative mx-auto mt-8 aspect-[16/10] w-full max-w-[1200px] sm:mt-10 sm:aspect-[21/9] lg:mt-14">
                <BlogCoverImage
                  className="rounded-2xl object-contain object-center sm:rounded-[20px]"
                  alt={`${post.title} — ${post.categoryLabel} article hero image`}
                  src={post.heroImage}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </header>
          </div>
        </div>
      </section>

      <BlogPostContentSection post={post} />
      <BlogPostFollowUpSection post={post} relatedPosts={relatedPosts} />
      <AdvertisementSpotlightSection />
      <FooterNavigationSection />
    </main>
  );
};
