import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { DeepLinkInviteScreen } from "@/screens/DeepLinkInviteScreen";

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
  // ref reserved for deferred deep-linking in a later step.
  const { ref: _ref } = await searchParams;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Join", path: "/join" },
        ]}
      />
      <DeepLinkInviteScreen
        headingId="join-invite-heading"
        eyebrow="Whipcare"
        title="Download Whipcare to accept this invite"
        description="This invite opens in the Whipcare app. Download the app to continue."
        ctaLabel="Get the App"
      />
    </>
  );
}
