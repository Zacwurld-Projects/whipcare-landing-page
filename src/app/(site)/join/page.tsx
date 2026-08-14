import type { Metadata } from "next";
import {
  JOIN_INVITE_DESCRIPTION,
  JOIN_INVITE_TITLE,
  buildPageMetadata,
} from "@/lib/seo";
import { JoinInviteView } from "@/screens/DeepLinkInviteScreen/JoinInviteView";

export const metadata: Metadata = buildPageMetadata({
  title: JOIN_INVITE_TITLE,
  description: JOIN_INVITE_DESCRIPTION,
  path: "/join",
  image: false,
  keywords: ["Whipcare invite", "join Whipcare", "Whipcare referral"],
});

type JoinPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function JoinPage({ searchParams }: JoinPageProps) {
  const { ref } = await searchParams;

  return <JoinInviteView refCode={ref} />;
}
