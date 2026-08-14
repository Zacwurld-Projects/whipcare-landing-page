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
        title="Open this invite in Whipcare"
        description="If you have the app, this opens Whipcare. If not, you'll go to the store to download it."
        ctaLabel="Open Whipcare"
        deepLink={{ type: "join", ref: refCode }}
      />
    </>
  );
}
