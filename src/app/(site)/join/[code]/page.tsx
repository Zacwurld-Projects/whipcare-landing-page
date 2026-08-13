import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
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
    title: "Join Whipcare",
    description:
      "Accept your Whipcare invite. Download the app to join and start connecting with trusted vehicle service providers.",
    path: `/join/${code}`,
    noIndex: true,
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
