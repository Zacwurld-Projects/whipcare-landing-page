import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JoinInviteView } from "@/screens/DeepLinkInviteScreen/JoinInviteView";

export const metadata: Metadata = buildPageMetadata({
  title: "Join Whipcare",
  description:
    "Accept your Whipcare invite. Download the app to join and start connecting with trusted vehicle service providers.",
  path: "/join",
  noIndex: true,
  keywords: ["Whipcare invite", "join Whipcare", "Whipcare referral"],
});

type JoinPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function JoinPage({ searchParams }: JoinPageProps) {
  const { ref } = await searchParams;

  return <JoinInviteView refCode={ref} />;
}
