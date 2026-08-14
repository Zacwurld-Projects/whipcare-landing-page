import Link from "next/link";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { BlogShareButton } from "@/components/BlogShareButton";
import type { BlogPost } from "../blogData";

const helpfulLinks = [
  {
    title: "Explore Services",
    description: "Find trusted vehicle care providers near you.",
    href: "/explore",
  },
  {
    title: "Contact Support",
    description: "Speak with the Whipcare team for personalised help.",
    href: "/contact",
  },
  {
    title: "Browse FAQs",
    description: "Quick answers about bookings, payments, and maintenance.",
    href: "/faq",
  },
] as const;

type BlogPostFollowUpSectionProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-NG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

export const BlogPostFollowUpSection = ({
  post,
  relatedPosts,
}: BlogPostFollowUpSectionProps) => {
  return (
    <section
      aria-labelledby="blog-follow-up-heading"
      className="w-full border-t border-[#e5e7eb] bg-[#f9fafb] px-4 py-12 sm:px-6 sm:py-16 lg:px-[52px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {relatedPosts.length > 0 ? (
          <div>
            <h2
              id="blog-follow-up-heading"
              className="font-inter text-[22px] font-bold leading-[1.3] text-[#111928] sm:text-[26px]"
            >
              Related articles
            </h2>
            <p className="mt-2 max-w-[640px] font-inter text-[14px] leading-[1.6] text-[#667185] sm:text-[15px]">
              More from {post.categoryLabel} and other vehicle care topics.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <li key={related.id}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-[0_4px_16px_rgba(17,25,40,0.04)]">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="group relative block aspect-[16/10] overflow-hidden"
                    >
                      <BlogCoverImage
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={`/blog/${related.slug}`}
                          className="font-inter text-[12px] font-medium uppercase tracking-[0.04em] text-[#8b4513] sm:text-[13px]"
                        >
                          {related.categoryLabel}
                        </Link>
                        <BlogShareButton
                          slug={related.slug}
                          title={related.title}
                        />
                      </div>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="group flex flex-1 flex-col gap-2"
                      >
                        <h3 className="font-inter text-[16px] font-bold leading-[1.35] text-[#111928] group-hover:text-[#701e00] sm:text-[18px]">
                          {related.title}
                        </h3>
                        <p className="line-clamp-2 font-inter text-[13px] leading-[1.5] text-[#6b7280] sm:text-[14px]">
                          {related.excerpt}
                        </p>
                        <time
                          dateTime={related.publishedAt}
                          className="mt-auto pt-2 font-inter text-[12px] text-[#9ca3af] sm:text-[13px]"
                        >
                          {formatDate(related.publishedAt)}
                        </time>
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

      
      </div>
    </section>
  );
};
