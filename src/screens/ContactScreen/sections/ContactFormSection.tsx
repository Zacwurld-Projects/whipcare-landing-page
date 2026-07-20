"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import contactHero from "@/assets/contact-hero.png";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
} from "@/constants/contact";

const fieldClassName =
  "h-12 w-full rounded-md border border-[#d1d5db] bg-white px-4 font-inter text-[15px] leading-[1.4] text-[#111928] outline-none placeholder:text-[#9ca3af] focus:border-[#701e00] focus:ring-1 focus:ring-[#701e00] sm:h-[52px]";

const textareaClassName =
  "min-h-[112px] max-h-[240px] w-full resize-y rounded-md border border-[#d1d5db] bg-white px-4 py-3 font-inter text-[15px] leading-[1.4] text-[#111928] outline-none placeholder:text-[#9ca3af] focus:border-[#701e00] focus:ring-1 focus:ring-[#701e00] sm:min-h-[120px]";

const followUpSuggestions = [
  { label: "Browse FAQs", href: "/faq" },
  { label: "Explore Services", href: "/explore" },
  { label: "Fleet Solutions", href: "/fleets" },
] as const;

export const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:px-[52px] lg:pb-16 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-[1120px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(17,25,40,0.08)] sm:rounded-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9 lg:order-1 lg:px-12 lg:py-14">
            <header>
              <h1
                id="contact-heading"
                className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#111928] sm:text-[32px] lg:text-[36px]"
              >
                Contact Us
              </h1>
              <p className="mt-3 max-w-[460px] font-inter text-[14px] font-normal leading-[1.6] tracking-[0] text-[#667185] sm:text-[15px]">
                Have questions or need assistance? Our customer support team in{" "}
                {CONTACT_ADDRESS.display} is here to help — reach out by form,
                phone, or email.
              </p>
            </header>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-7 max-w-[460px] rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-5 sm:p-6"
              >
                <p className="font-inter text-[16px] font-semibold text-[#166534] sm:text-[17px]">
                  Message sent successfully
                </p>
                <p className="mt-2 font-inter text-[14px] leading-[1.6] text-[#15803d] sm:text-[15px]">
                  Thanks for contacting Whipcare. Our team will get back to you
                  shortly.
                </p>
                <div className="mt-4">
                  <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-[#111928]">
                    Suggested next steps
                  </p>
                  <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {followUpSuggestions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-flex rounded-md bg-white px-3 py-2 font-inter text-[14px] font-medium text-[#701e00] underline-offset-2 hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <form
                className="mt-7 flex w-full max-w-[460px] flex-col gap-3.5"
                aria-describedby="contact-form-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <p id="contact-form-note" className="sr-only">
                  Required fields are marked with an asterisk.
                </p>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-inter text-[13px] font-medium text-[#374151] sm:text-[14px]"
                  >
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-inter text-[13px] font-medium text-[#374151] sm:text-[14px]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-inter text-[13px] font-medium text-[#374151] sm:text-[14px]"
                  >
                    Phone number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    className={fieldClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="font-inter text-[13px] font-medium text-[#374151] sm:text-[14px]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className={textareaClassName}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 h-12 w-full rounded-md bg-[#701e00] font-inter text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#5a1800] sm:h-[52px] sm:text-[15px]"
                >
                  Send message
                </button>
              </form>
            )}

            <address className="mt-8 grid grid-cols-1 gap-5 not-italic sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-5">
              <div className="flex items-start gap-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M6.62871 2.1875V3.8302L1.45825 7.19638V21.1458H22.1401V7.19638L16.9696 3.8302V2.1875H6.62871ZM8.35219 3.91098H15.2461V10.5356L11.7992 12.7708L8.35219 10.5356V3.91098ZM9.21393 5.63447V7.35795H14.3844V5.63447H9.21393ZM6.62871 5.87683V9.40459L3.90883 7.65418L6.62871 5.87683ZM16.9696 5.87683L19.6895 7.65418L16.9696 9.40459V5.87683ZM9.21393 8.2197V9.94318H14.3844V8.2197H9.21393ZM3.18174 9.24302L11.7992 14.8174L20.4166 9.24302V19.4223H3.18174V9.24302Z"
                    fill="black"
                  />
                </svg>
                <div className="min-w-0 flex flex-col gap-0.5">
                  <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-[#111928]">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all font-inter text-[14px] font-medium text-[#d97706] underline underline-offset-2 hover:text-[#b45309]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
                    fill="black"
                  />
                </svg>
                <div className="min-w-0 flex flex-col gap-1">
                  <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-[#111928]">
                    Phone
                  </span>
                  {CONTACT_PHONES.map((phone) => (
                    <a
                      key={phone.e164}
                      href={phone.href}
                      className="font-inter text-[14px] font-medium text-[#d97706] underline underline-offset-2 hover:text-[#b45309]"
                    >
                      {phone.display} ({phone.label})
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:col-span-2 lg:col-span-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="black"
                  />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-[#111928]">
                    Location
                  </span>
                  <span className="font-inter text-[14px] font-medium text-[#111928]">
                    {CONTACT_ADDRESS.display}
                  </span>
                </div>
              </div>
            </address>
          </div>

          <div className="order-1 relative min-h-[220px] sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[640px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#E5E7EB] lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[88%]"
            />
            <div className="absolute inset-0 overflow-hidden p-4 sm:p-6 lg:inset-y-8 lg:left-0 lg:right-10 lg:p-0 xl:inset-y-10 xl:right-12">
              <div className="relative h-full min-h-[200px] overflow-hidden rounded-[14px] sm:rounded-[16px] lg:rounded-[18px]">
                <Image
                  className="object-cover object-center"
                  alt="Whipcare customer support representative ready to help drivers in Nigeria"
                  src={contactHero}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
