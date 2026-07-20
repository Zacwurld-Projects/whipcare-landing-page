"use client";

import { useEffect, useState } from "react";
import type { BlogArticleSection } from "../blogData";

type BlogPostTableOfContentsProps = {
  sections: BlogArticleSection[];
};

export const BlogPostTableOfContents = ({
  sections,
}: BlogPostTableOfContentsProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextId = visible[0]?.target.id;
        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside className="hidden lg:block">
      <nav
        aria-label="Article sections"
        className="sticky top-28 border-l border-[#e5e7eb]"
      >
        <ul className="flex flex-col">
          {sections.map((section) => {
            const isActive = section.id === activeId;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setActiveId(section.id)}
                  className={`relative block border-l-2 py-3 pl-4 font-inter text-[16px] leading-[1.45] tracking-[0] transition-colors xl:text-[18px] ${
                    isActive
                      ? "-ml-px border-[#a16207] font-medium text-[#101828]"
                      : "border-transparent font-normal text-[#4A5565] hover:text-[#101828]"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
