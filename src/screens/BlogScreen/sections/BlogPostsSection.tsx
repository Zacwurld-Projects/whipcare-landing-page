"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogAuthorLink } from "@/components/BlogAuthorLink";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { BlogShareButton } from "@/components/BlogShareButton";
import {
  getBlogCategories,
  type BlogCategoryId,
  type BlogPost,
} from "../blogData";

type CategoryId = "all" | BlogCategoryId;

type BlogPostsSectionProps = {
  posts: BlogPost[];
};

export const BlogPostsSection = ({ posts }: BlogPostsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");

  const blogCategories = useMemo(() => getBlogCategories(posts), [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.categoryId === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.categoryLabel.toLowerCase().includes(normalizedQuery) ||
        (post.authorName?.toLowerCase().includes(normalizedQuery) ?? false);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, posts, query]);

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-[52px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1 overflow-x-auto">
            <div
              role="tablist"
              aria-label="Blog categories"
              className="flex min-w-max items-end gap-6 border-b border-[#e5e7eb] sm:gap-8"
            >
              {blogCategories.map((category) => {
                const isActive = category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative -mb-px whitespace-nowrap pb-3 font-inter text-[14px] leading-[1.4] tracking-[0] transition-colors sm:text-[15px] ${isActive
                      ? "font-semibold text-[#111928]"
                      : "font-medium text-[#6b7280] hover:text-[#111928]"
                      }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span>{category.label}</span>
                      {"count" in category ? (
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f3e8e4] px-1.5 font-inter text-[11px] font-semibold leading-none text-[#8b4513]">
                          {category.count}
                        </span>
                      ) : null}
                    </span>
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#8b4513]"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="relative w-full shrink-0 lg:w-[280px]">
            <span className="sr-only">Search blogs</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className="h-11 w-full rounded-lg border border-[#d1d5db] bg-white py-2.5 pl-4 pr-11 font-inter text-[14px] leading-[1.4] text-[#111928] outline-none placeholder:text-[#9ca3af] focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513]"
            />
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 2.25 14.25 8.25 14.25Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 15.75L12.4875 12.4875"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="flex flex-col gap-3 text-left">
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <BlogCoverImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-inter text-[13px] font-medium leading-[1.4] tracking-[0] text-[#8b4513]"
                  >
                    {post.categoryLabel}
                  </Link>
                  <BlogShareButton
                    slug={post.slug}
                    title={post.title}
                    description={post.excerpt || post.description}
                  />
                </div>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-1.5">
                  <h2 className="font-inter text-[20px] font-bold leading-[1.3] tracking-[0] text-[#111928] group-hover:text-[#701e00]">
                    {post.title}
                  </h2>
                  <p className="line-clamp-2 font-inter text-[14px] font-normal leading-[1.5] tracking-[0] text-[#6b7280]">
                    {post.excerpt}
                  </p>
                </Link>
              </div>

              <div className="flex items-center justify-between gap-2">
                {post.authorName ? (
                  <p className="min-w-0 truncate font-inter text-[13px] leading-[1.4] text-[#6b7280]">
                    By{" "}
                    <BlogAuthorLink
                      name={post.authorName}
                      href={post.authorLink}
                      className="text-[13px]"
                    />
                  </p>
                ) : (
                  <span />
                )}

              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <p className="py-8 text-center font-inter text-[15px] text-[#6b7280]">
            {posts.length === 0
              ? "No blog posts yet. Check back soon."
              : "No posts match your search."}
          </p>
        ) : null}
      </div>
    </section>
  );
};
