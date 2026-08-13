import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
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
    title: "View Profile",
    description:
      "Open this Whipcare profile in the app. Download Whipcare to view profiles and connect with trusted vehicle service providers.",
    path: `/profile/${id}`,
    noIndex: true,
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
