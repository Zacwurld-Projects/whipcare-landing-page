"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import whippLogo from "@/assets/WHIPP_logo.png";
import { GetAppLink } from "./GetAppLink";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  {
    label: "Resources",
    href: "/about",
    hasDropdown: true,
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Faq's", href: "/faq" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Fleets", href: "/fleets" },
] as const;

type SiteHeaderProps = {
  active?: "Home" | "Explore" | "Resources" | "Contact Us" | "Fleets";
};

const navLinkClass = (isActive: boolean) =>
  `inline-flex items-center gap-[7px] whitespace-nowrap ${isActive
    ? "font-inter text-[15px] font-medium leading-[1.4] text-[#701e00] sm:text-[length:var(--inter-title-1-medium-font-size)] sm:leading-[var(--inter-title-1-medium-line-height)]"
    : "font-inter text-[15px] font-normal leading-[1.4] text-[#111928] sm:text-[length:var(--inter-title-1-regular-font-size)] sm:leading-[var(--inter-title-1-regular-line-height)]"
  }`;

const ctaClass =
  "h-auto rounded-lg px-3 py-2 text-[13px] font-semibold leading-[1.4] sm:px-4 sm:py-2.5 sm:text-sm lg:px-5 lg:py-3 lg:text-[length:var(--inter-body-semibold-font-size)]";

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M8.10025 10.8563L5.54143 8.1375C5.50614 8.1 5.47978 8.0595 5.46237 8.016C5.44496 7.9725 5.43602 7.9255 5.43555 7.875C5.43555 7.775 5.46802 7.6875 5.53296 7.6125C5.5979 7.5375 5.68308 7.5 5.78849 7.5H11.1532C11.2591 7.5 11.3445 7.5375 11.4094 7.6125C11.4744 7.6875 11.5066 7.775 11.5061 7.875C11.5061 7.9 11.4708 7.9875 11.4003 8.1375L8.84143 10.8563C8.78261 10.9188 8.72378 10.9625 8.66496 10.9875C8.60613 11.0125 8.54143 11.025 8.47084 11.025C8.40025 11.025 8.33555 11.0125 8.27672 10.9875C8.2179 10.9625 8.15908 10.9188 8.10025 10.8563Z"
      fill="currentColor"
    />
  </svg>
);

const LangButton = ({ className = "" }: { className?: string }) => (
  <button
    type="button"
    className={`inline-flex items-center gap-[7px] whitespace-nowrap font-inter text-[15px] font-normal leading-[1.4] text-[#111928] ${className}`}
  >
    <span className="inline-flex items-center gap-[7px]">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g clipPath="url(#clip0_site_header_lang)">
          <path
            d="M0.5625 9.64289C0.5625 13.5904 2.925 16.9353 6.1875 18.1708V1.11499C2.925 2.35048 0.5625 5.69535 0.5625 9.64289ZM17.4375 9.64289C17.4375 5.69535 15.1031 2.35048 11.8125 1.11499V18.1708C15.1031 16.9353 17.4375 13.5904 17.4375 9.64289Z"
            fill="#83BF4F"
          />
          <path
            d="M6.1875 18.1709C7.05937 18.5023 8.01562 18.6831 9 18.6831C9.98438 18.6831 10.9406 18.5023 11.8125 18.1709V1.11506C10.9406 0.783587 9.98438 0.602783 9 0.602783C8.01562 0.602783 7.05937 0.783587 6.1875 1.11506V18.1709Z"
            fill="#F9F9F9"
          />
        </g>
        <defs>
          <clipPath id="clip0_site_header_lang">
            <rect width="18" height="19.2857" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span>EN</span>
    </span>
    <ChevronDown />
  </button>
);

export const SiteHeader = ({ active = "Home" }: SiteHeaderProps) => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();
  const isFleets = active === "Fleets" || pathname === "/fleets";

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, closeMobile]);

  const renderCtas = (options?: { fullWidth?: boolean; className?: string }) => {
    const widthClass = options?.fullWidth ? "w-full" : "";

    if (isFleets) {
      return (
        <>
          <Button
            asChild
            variant="ghost"
            className={`${ctaClass} ${widthClass} bg-[#f3f4f6] text-[#701e00] hover:bg-[#e5e7eb] hover:text-[#5a1800] ${options?.className ?? ""}`}
          >
            <Link href="/coming-soon" onClick={closeMobile}>
              Login
            </Link>
          </Button>
          <Button
            asChild
            className={`${ctaClass} ${widthClass} bg-[#701e00] text-white hover:bg-[#5a1800] ${options?.className ?? ""}`}
          >
            <Link href="/coming-soon" onClick={closeMobile}>
              Sign Up
            </Link>
          </Button>
        </>
      );
    }

    return (
      <Button
        asChild
        className={`${ctaClass} ${widthClass} bg-[#701e00] text-white hover:bg-[#5a1800] ${options?.className ?? ""}`}
      >
        <GetAppLink onClick={closeMobile}>Get the App</GetAppLink>
      </Button>
    );
  };

  return (
    <>
      <header className="relative z-50 flex w-full min-h-[56px] items-center justify-between gap-2 sm:min-h-[64px] sm:gap-4">
        <Link href="/" className="shrink-0" onClick={closeMobile}>
          <Image
            className="h-auto w-[104px] sm:w-32 md:w-36 lg:w-40"
            alt="Whipcare logo"
            src={whippLogo}
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-5 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = item.label === active;
            const hasDropdown = "hasDropdown" in item && item.hasDropdown;

            if (hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button
                    type="button"
                    className={navLinkClass(isActive)}
                    aria-expanded={resourcesOpen}
                    aria-haspopup="menu"
                    onClick={() => setResourcesOpen((open) => !open)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown />
                  </button>

                  {resourcesOpen ? (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 min-w-[160px] pt-2"
                    >
                      <div className="rounded-lg bg-white py-2 shadow-[0_8px_24px_rgba(17,25,40,0.12)]">
                        {item.dropdown.map((option) => {
                          const optionActive = pathname === option.href;

                          return (
                            <Link
                              key={option.label}
                              href={option.href}
                              role="menuitem"
                              className={`block px-4 py-2 font-inter text-[15px] leading-[1.4] ${optionActive
                                  ? "font-medium text-[#701e00]"
                                  : "font-normal text-[#111928] hover:text-[#701e00]"
                                }`}
                              onClick={() => setResourcesOpen(false)}
                            >
                              {option.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={navLinkClass(isActive)}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}

          <LangButton />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="hidden items-center gap-2 sm:flex lg:gap-3">
            {renderCtas()}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#111928] hover:bg-[#f3f4f6] lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
            aria-label="Close menu overlay"
            onClick={closeMobile}
          />
          <nav
            id="mobile-nav"
            className="fixed inset-x-0 top-0 z-[70] flex max-h-[100dvh] flex-col bg-white shadow-[0_12px_40px_rgba(17,25,40,0.14)] lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#e5e7eb] px-4 py-3 sm:px-6">
              <Link href="/" className="shrink-0" onClick={closeMobile}>
                <Image
                  className="h-auto w-[104px] sm:w-32"
                  alt="Whipcare logo"
                  src={whippLogo}
                  width={160}
                  height={40}
                />
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#111928] hover:bg-[#f3f4f6]"
                aria-label="Close menu"
                onClick={closeMobile}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = item.label === active;
                  const hasDropdown = "hasDropdown" in item && item.hasDropdown;

                  if (hasDropdown) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <button
                          type="button"
                          className={`${navLinkClass(isActive)} w-full justify-between rounded-lg px-3 py-3.5 text-[16px]`}
                          aria-expanded={mobileResourcesOpen}
                          onClick={() =>
                            setMobileResourcesOpen((open) => !open)
                          }
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {mobileResourcesOpen ? (
                          <div className="mb-1 ml-3 flex flex-col border-l border-[#e5e7eb] pl-3">
                            {item.dropdown.map((option) => {
                              const optionActive = pathname === option.href;
                              return (
                                <Link
                                  key={option.label}
                                  href={option.href}
                                  className={`rounded-lg px-3 py-3 font-inter text-[15px] leading-[1.4] ${optionActive
                                      ? "font-medium text-[#701e00]"
                                      : "font-normal text-[#111928]"
                                    }`}
                                  onClick={closeMobile}
                                >
                                  {option.label}
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${navLinkClass(isActive)} rounded-lg px-3 py-3.5 text-[16px]`}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-[#e5e7eb] pt-4">
                <LangButton className="rounded-lg px-3 py-3" />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#e5e7eb] px-4 py-4 sm:px-6">
              {renderCtas({ fullWidth: true })}
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
};
