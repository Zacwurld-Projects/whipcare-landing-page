import type { BlogPost } from "../blogData";
import { BlogPostTableOfContents } from "./BlogPostTableOfContents";

type BlogPostContentSectionProps = {
  post: BlogPost;
};

export const BlogPostContentSection = ({ post }: BlogPostContentSectionProps) => {
  const hasHtml = Boolean(post.htmlContent?.trim());
  const tocSections =
    post.content.length > 0
      ? post.content
      : [{ id: "article-body", title: post.title, paragraphs: [] as string[] }];

  return (
    <section
      aria-labelledby="blog-article-heading"
      className="w-full bg-white px-4 pb-12 sm:px-6 sm:pb-16 lg:px-[52px] lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-24">
        <BlogPostTableOfContents sections={tocSections} />

        <article
          id="article-body"
          className="flex min-w-0 w-full flex-col gap-10 lg:col-start-2 lg:gap-14"
        >
          <h2 id="blog-article-heading" className="sr-only">
            {post.title} article content
          </h2>

          {hasHtml ? (
            <div
              className="blog-html-content w-full max-w-none font-inter text-[15px] font-medium leading-[1.7] tracking-[0] text-[#4A5565] sm:text-[16px] lg:text-[18px] [&_a]:text-[#8b4513] [&_a]:underline [&_h1]:scroll-mt-24 sm:[&_h1]:scroll-mt-28 [&_h2]:scroll-mt-24 sm:[&_h2]:scroll-mt-28 [&_h3]:scroll-mt-24 sm:[&_h3]:scroll-mt-28 [&_h4]:scroll-mt-24 sm:[&_h4]:scroll-mt-28 [&_li]:my-1 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_p[id^='section-']]:scroll-mt-24 sm:[&_p[id^='section-']]:scroll-mt-28 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          ) : (
            post.content.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="mb-4 font-inter text-[20px] font-medium leading-[1.3] tracking-[0] text-[#000000] sm:mb-5 sm:text-[22px] lg:text-[24px]">
                  {section.title}
                </h3>

                <div className="flex flex-col gap-3 sm:gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-[15px] font-medium leading-[1.7] tracking-[0] text-[#4A5565] sm:text-[16px] lg:text-[18px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="my-1 list-disc space-y-2 pl-5 marker:text-[#4b5563] sm:space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="pl-1 font-inter text-[15px] font-normal leading-[1.7] tracking-[0] text-[#4b5563] sm:text-[16px] lg:text-[17px]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.afterBullets?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-[15px] font-normal leading-[1.7] tracking-[0] text-[#4b5563] sm:text-[16px] lg:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))
          )}
        </article>
      </div>
    </section>
  );
};
