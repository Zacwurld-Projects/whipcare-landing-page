import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { DeepLinkInviteScreen } from "@/screens/DeepLinkInviteScreen";

type JoinInviteViewProps = {
  refCode?: string;
};

export function JoinInviteView({ refCode }: JoinInviteViewProps) {
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
        deepLink={{ type: "join", ref: refCode }}
      />
    </>
  );
}
