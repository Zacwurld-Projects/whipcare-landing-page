import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Hero/Footer";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import the MetaPixel component with SSR disabled
const MetaPixel = dynamic(() => import("@/components/MetaPixel"), {
  ssr: false, // Disable server-side rendering
});

export const metadata: Metadata = {
  title: "Whipcare – Book Certified Mechanics & Car Services in Nigeria",
  description:
    "Get reliable mobile mechanic, car wash, towing & detailing—anywhere in Lagos, Abuja & beyond. Pay only when satisfied.",
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
        {children}
        <Footer />
        <Toaster />
        <MetaPixel />
      </body>
    </html>
  );
}