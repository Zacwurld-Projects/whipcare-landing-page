import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { DeepLinkInviteScreen } from "@/screens/DeepLinkInviteScreen";

export const metadata: Metadata = buildPageMetadata({
  title: "View Profile",
  description:
    "Open this Whipcare profile in the app. Download Whipcare to view profiles and connect with trusted vehicle service providers.",
  path: "/profile",
  noIndex: true,
  keywords: ["Whipcare profile", "Whipcare app", "view profile"],
});

type ProfilePageProps = {
  searchParams: Promise<{ userId?: string; ref?: string }>;
};

export default async function ProfilePage({ searchParams }: ProfilePageProps) {
  const { userId, ref } = await searchParams;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Profile", path: "/profile" },
        ]}
      />
      <DeepLinkInviteScreen
        headingId="profile-invite-heading"
        eyebrow="Whipcare"
        title="View this profile in the Whipcare app"
        description="This link opens a profile in Whipcare. Download the app to continue."
        ctaLabel="Get the App"
        deepLink={{ type: "profile", userId, ref }}
      />
    </>
  );
}
