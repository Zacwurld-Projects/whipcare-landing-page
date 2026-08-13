import type { Metadata } from "next";
import {
  PROFILE_INVITE_DESCRIPTION,
  PROFILE_INVITE_TITLE,
  buildPageMetadata,
} from "@/lib/seo";
import { ProfileInviteView } from "@/screens/DeepLinkInviteScreen/ProfileInviteView";

export const metadata: Metadata = buildPageMetadata({
  title: PROFILE_INVITE_TITLE,
  description: PROFILE_INVITE_DESCRIPTION,
  path: "/profile",
  image: false,
  keywords: ["Whipcare profile", "Whipcare app", "view profile"],
});

type ProfilePageProps = {
  searchParams: Promise<{ userId?: string; ref?: string }>;
};

export default async function ProfilePage({ searchParams }: ProfilePageProps) {
  const { userId, ref } = await searchParams;

  return <ProfileInviteView userId={userId} refCode={ref} />;
}
