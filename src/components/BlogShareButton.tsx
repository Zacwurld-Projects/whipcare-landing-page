"use client";

import { useState, type MouseEvent } from "react";
import { SITE_URL } from "@/constants/site";

type BlogShareButtonProps = {
  slug: string;
  title: string;
  description?: string;
  className?: string;
};

export function BlogShareButton({
  slug,
  title,
  className = "",
}: BlogShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/blog/${slug}`;

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await copyUrl();
    } catch {
      try {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      } catch {
        // ignore clipboard failures
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      aria-label={copied ? "Link copied" : `Copy link to ${title}`}
      title={copied ? "Copied!" : "Copy link"}
      className={`relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f3f4f6] hover:text-[#701e00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b4513] ${className}`}
    >
      {copied ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M8.6 10.5l6.8-3.5M8.6 13.5l6.8 3.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
