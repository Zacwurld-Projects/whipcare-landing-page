import Image from "next/image";
import Link from "next/link";
import whippLogo from "@/assets/WHIPP_logo.png";
import { GetAppLink } from "@/components/GetAppLink";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
} from "@/constants/contact";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "./FooterSocialIcons";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "FAQ`s", href: "/faq" },
  { label: "Contact us", href: "/contact" },
] as const;

export const FooterNavigationSection = () => {
  return (
    <footer className="w-full bg-[#ffffff] px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:px-10 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-14 lg:gap-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.55fr)_minmax(0,0.75fr)] md:items-start md:justify-between">
          <section className="flex max-w-[341px] flex-col items-start gap-5 sm:col-span-2 sm:gap-6 md:col-span-1">
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <Image
                className="h-auto w-32 sm:w-40"
                alt="Whipcare logo"
                src={whippLogo}
                width={160}
                height={40}
              />
              <p className="font-inter text-[14px] font-medium leading-[1.5] tracking-[0] text-gray-600 sm:text-[length:var(--inter-title-2-medium-font-size)] sm:leading-[var(--inter-title-2-medium-line-height)]">
                From mechanics to detailers, book top-rated professionals
                effortlessly. Your&nbsp;car&apos;s&nbsp;perfect partner is just
                a click away.
              </p>
            </div>
            <Button
              asChild
              className="h-auto rounded-lg bg-[#701e00] px-5 py-3 font-inter text-[14px] font-semibold text-[#ffffff] hover:bg-[#5a1800] sm:px-6 sm:py-3.5 sm:text-[length:var(--inter-body-semibold-font-size)]"
            >
              <GetAppLink>Get the App</GetAppLink>
            </Button>
          </section>

          <nav aria-label="Company" className="flex flex-col items-start gap-4 sm:gap-8">
            <h2 className="font-inter text-[18px] font-semibold leading-[1.3] text-black sm:text-[length:var(--inter-h5-semibold-font-size)] sm:leading-[var(--inter-h5-semibold-line-height)]">
              Company
            </h2>
            <ul className="flex flex-col items-start gap-1 font-inter sm:gap-0">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block h-auto p-0 py-1.5 text-left text-[15px] font-normal not-italic leading-[1.4] tracking-[0.025em] text-[#364153] sm:py-0 sm:text-[18px] sm:leading-[48px] lg:leading-[60px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="flex flex-col items-start gap-5 not-italic sm:gap-8">
            <h2 className="font-inter text-[18px] font-semibold leading-[1.3] text-black sm:text-[length:var(--inter-h5-semibold-font-size)] sm:leading-[var(--inter-h5-semibold-line-height)]">
              Address
            </h2>
            <div className="font-inter text-[15px] font-normal leading-[1.5] sm:text-lg sm:leading-[25px]">
              <p className="tracking-[0.08px] text-[#364153]">
                {CONTACT_ADDRESS.display}
              </p>
              <button
                type="button"
                className="mt-1 h-auto p-0 text-left tracking-[0] text-[#701e00]"
              >
                View on Maps
              </button>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-inter text-xl font-normal leading-8 tracking-[0] text-gray-700 sm:text-2xl sm:leading-9">
                Inquiries
              </h3>
              <p className="font-inter text-[15px] font-normal leading-[1.5] tracking-[0.45px] text-gray-700 sm:text-lg sm:leading-[25px]">
                {CONTACT_PHONES.map((phone) => (
                  <span key={phone.e164}>
                    <a href={phone.href} className="hover:text-[#701e00]">
                      {phone.display}
                    </a>{" "}
                    ({phone.label})
                    <br />
                  </span>
                ))}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#701e00]"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 pt-1 sm:w-auto sm:gap-3 sm:pt-0 md:gap-4 lg:gap-5">
              <a
                href="https://x.com/whipcareapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#701e00]/5 sm:h-11 sm:w-11"
              >
                <XIcon />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61562572721634"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#701e00]/5 sm:h-11 sm:w-11"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/whipcare.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#701e00]/5 sm:h-11 sm:w-11"
              >
                <InstagramIcon />
              </a>
            </div>
          </address>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-[18px]">
          <Separator className="h-px w-full bg-transparent p-0" />
          <svg
            className="h-auto w-full"
            width="1280"
            height="4"
            viewBox="0 0 1280 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 2H630" stroke="#D1D5DC" strokeWidth="2" />
            <rect x="638" width="4" height="4" rx="2" fill="#711E00" />
            <path d="M650 2H1280" stroke="#D1D5DC" strokeWidth="2" />
          </svg>
          <p className="max-w-[34rem] text-center font-inter text-[12px] font-normal leading-[1.5] text-black sm:max-w-none sm:text-[length:var(--inter-title-1-regular-font-size)] sm:leading-[var(--inter-title-1-regular-line-height)]">
            © {new Date().getFullYear()} Whipcare. All rights reserved
            <span className="mx-1.5 sm:mx-2">|</span>
            <Link href="/terms" className="hover:text-[#701e00] transition-colors">
              Terms and Conditions
            </Link>
            ,
            <Link href="/privacy" className="hover:text-[#701e00] transition-colors">
              {" "}Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
