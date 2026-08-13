import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ProfileInviteView } from "@/screens/DeepLinkInviteScreen/ProfileInviteView";

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

  return <ProfileInviteView userId={userId} refCode={ref} />;
}
