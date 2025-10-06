import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { CountryProvider } from "@/components/Global/CountryContext";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import the MetaPixel component with SSR disabled
const MetaPixel = dynamic(() => import("@/components/MetaPixel"), {
  ssr: false, // Disable server-side rendering
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whipcare.app"),
  title: "Whipcare – Quality Car Repairs & Services Near You",
  description:
    "Book affordable car repairs, car wash, detailing, and towing services near you with Whipcare. Reliable, fast, and stress-free car care.",
  openGraph: {
    title: "Whipcare – Quality Car Repairs & Services Near You",
    description:
      "Book car repairs, car wash, detailing & towing near you. Affordable, reliable & stress-free car care with Whipcare.",
    url: "https://whipcare.app",
    siteName: "Whipcare",
    type: "website",
    images: [
      {
        url: "/images/social-media-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Whipcare – Quality Car Repairs & Services Near You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whipcare – Quality Car Repairs & Services Near You",
    description:
      "Affordable car repairs, washes & towing near you with Whipcare.",
    images: ["/images/social-media-1200x630.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              name: "Whipcare",
              url: "https://whipcare.app",
              logo: "https://whipcare.app/logo.png",
              telephone: "+2348012345678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Lagos Island Rd",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              sameAs: [
                "https://www.facebook.com/whipcareapp",
                "https://www.instagram.com/whipcareapp",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <CountryProvider>
          {children}
          <Toaster />
          <MetaPixel />
        </CountryProvider>
      </body>
    </html>
  );
}