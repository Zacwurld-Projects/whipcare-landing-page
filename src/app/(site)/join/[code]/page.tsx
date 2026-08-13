import type { Metadata } from "next";
import {
  JOIN_INVITE_DESCRIPTION,
  JOIN_INVITE_TITLE,
  buildPageMetadata,
} from "@/lib/seo";
import { JoinInviteView } from "@/screens/DeepLinkInviteScreen/JoinInviteView";

type JoinByCodePageProps = {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ ref?: string }>;
};

export async function generateMetadata({
  params,
}: JoinByCodePageProps): Promise<Metadata> {
  const { code } = await params;
  return buildPageMetadata({
    title: JOIN_INVITE_TITLE,
    description: JOIN_INVITE_DESCRIPTION,
    path: `/join/${code}`,
    image: false,
    keywords: ["Whipcare invite", "join Whipcare", "Whipcare referral"],
  });
}

export default async function JoinByCodePage({
  params,
  searchParams,
}: JoinByCodePageProps) {
  const { code } = await params;
  const { ref } = await searchParams;

  return <JoinInviteView refCode={ref || code} />;
}
