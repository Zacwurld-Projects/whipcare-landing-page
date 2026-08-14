import type { Metadata } from "next";
import {
  PROFILE_INVITE_DESCRIPTION,
  PROFILE_INVITE_TITLE,
  buildPageMetadata,
} from "@/lib/seo";
import { ProfileInviteView } from "@/screens/DeepLinkInviteScreen/ProfileInviteView";

type ProfileByIdPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ userId?: string; ref?: string }>;
};

export async function generateMetadata({
  params,
}: ProfileByIdPageProps): Promise<Metadata> {
  const { id } = await params;
  return buildPageMetadata({
    title: PROFILE_INVITE_TITLE,
    description: PROFILE_INVITE_DESCRIPTION,
    path: `/profile/${id}`,
    image: false,
    keywords: ["Whipcare profile", "Whipcare app", "view profile"],
  });
}

export default async function ProfileByIdPage({
  params,
  searchParams,
}: ProfileByIdPageProps) {
  const { id } = await params;
  const { userId, ref } = await searchParams;

  return <ProfileInviteView userId={userId || id} refCode={ref} />;
}
