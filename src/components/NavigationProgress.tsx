"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const isInternalLink = (anchor: HTMLAnchorElement) => {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || anchor.target === "_blank") return false;

  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
};

export const NavigationProgress = () => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor || !isInternalLink(anchor)) return;

      const url = new URL(anchor.getAttribute("href")!, window.location.href);
      if (url.pathname === pathname && !url.search) return;

      setVisible(true);
      setProgress(15);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;

    const interval = window.setInterval(() => {
      setProgress((current) => (current >= 90 ? current : current + Math.random() * 12));
    }, 250);

    return () => window.clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;

    if (!visible) return;

    setProgress(100);
    const timeout = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 200);

    return () => window.clearTimeout(timeout);
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Page loading"
    >
      <div
        className="h-full bg-[#701e00] shadow-[0_0_8px_rgba(112,30,0,0.45)] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
