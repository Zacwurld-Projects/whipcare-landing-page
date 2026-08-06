"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_COOKIE_KEY = "whipcare_cookie_consent";
const CONSENT_GRANTED = "granted";
const CONSENT_DENIED = "denied";

type ConsentState = "unknown" | "granted" | "denied";

const readConsentCookie = (): ConsentState => {
  if (typeof document === "undefined") return "unknown";
  const cookiePart = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${CONSENT_COOKIE_KEY}=`));
  const value = cookiePart?.split("=")[1];

  if (value === CONSENT_GRANTED) return "granted";
  if (value === CONSENT_DENIED) return "denied";
  return "unknown";
};

const writeConsentCookie = (value: "granted" | "denied") => {
  document.cookie = `${CONSENT_COOKIE_KEY}=${value}; path=/; max-age=15552000; samesite=lax`;
};

export function CookieConsentGate({
  measurementId,
}: {
  measurementId: string;
}) {
  const [consent, setConsent] = useState<ConsentState>("unknown");

  useEffect(() => {
    setConsent(readConsentCookie());
  }, []);

  const handleConsent = (value: "granted" | "denied") => {
    writeConsentCookie(value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `}
          </Script>
        </>
      ) : null}

      {consent === "unknown" ? (
        <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[#e5e7eb] bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-inter text-[13px] font-medium leading-[1.5] text-[#364153] sm:text-[14px]">
              We use analytics cookies to improve Whipcare experience.{" "}
              <Link href="/privacy" className="text-[#701e00] underline">
                Learn more
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleConsent("denied")}
                className="inline-flex rounded-lg border border-[#d1d5db] px-3 py-2 font-inter text-[13px] font-semibold text-[#4b5563] hover:bg-[#f9fafb]"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => handleConsent("granted")}
                className="inline-flex rounded-lg bg-[#701e00] px-3 py-2 font-inter text-[13px] font-semibold text-white hover:bg-[#5a1800]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
