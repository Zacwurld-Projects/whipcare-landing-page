import Link from "next/link";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { BlogShareButton } from "@/components/BlogShareButton";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/screens/BlogScreen/blogData";
import { formatBlogViewCount } from "@/screens/BlogScreen/blogData";

type HomeBlogSectionProps = {
  posts: BlogPost[];
};

export const HomeBlogSection = ({ posts }: HomeBlogSectionProps) => {
  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="home-blog-heading"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <header className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <h2
            id="home-blog-heading"
            className="font-inter text-[28px] font-bold leading-[1.2] text-[#101828] sm:text-[36px] lg:text-[length:var(--inter-h2-bold-font-size)] lg:leading-[var(--inter-h2-bold-line-height)]"
          >
            Vehicle care tips
          </h2>
          <p className="max-w-[640px] font-inter text-[15px] font-medium leading-[1.5] text-gray-600 sm:text-[18px] lg:text-[length:var(--inter-h5-medium-font-size)]">
            Guides from the Whipcare blog to keep your car, truck, or motorcycle
            road-ready.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="flex flex-col gap-3 text-left">
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-xl"
              >
                <BlogCoverImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </Link>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-inter text-[13px] font-medium leading-[1.4] text-[#8b4513]"
                  >
                    {post.categoryLabel}
                  </Link>
                  <BlogShareButton slug={post.slug} title={post.title} />
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1.5"
                >
                  <h3 className="font-inter text-[20px] font-bold leading-[1.3] text-[#111928] group-hover:text-[#701e00]">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 font-inter text-[14px] font-normal leading-[1.5] text-[#6b7280]">
                    {post.excerpt}
                  </p>
                </Link>
                {/* <p
                  className="font-inter text-[13px] leading-[1.4] text-[#6b7280]"
                  aria-label={`${formatBlogViewCount(post.viewCount)} views`}
                >
                  {formatBlogViewCount(post.viewCount)}{" "}
                  {post.viewCount === 1 ? "view" : "views"}
                </p> */}
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            variant="secondary"
            className="h-auto rounded-lg bg-gray-100 px-6 py-3.5 font-inter text-[14px] font-semibold text-[#701e00] hover:bg-gray-100 sm:text-[length:var(--inter-body-semibold-font-size)]"
          >
            <Link href="/blog">Read the blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
