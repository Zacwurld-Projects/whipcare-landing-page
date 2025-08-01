import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Hero/Footer";

import { Toaster } from "@/components/ui/toaster"
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1410731186844834');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1410731186844834&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}