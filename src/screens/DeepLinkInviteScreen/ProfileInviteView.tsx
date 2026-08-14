import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { DeepLinkInviteScreen } from "@/screens/DeepLinkInviteScreen";

type ProfileInviteViewProps = {
  userId?: string;
  refCode?: string;
};

export function ProfileInviteView({ userId, refCode }: ProfileInviteViewProps) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Profile", path: "/profile" },
        ]}
      />
      <DeepLinkInviteScreen
        headingId="profile-invite-heading"
        eyebrow="Whipcare"
        title="View this profile in Whipcare"
        description="If you have the app, this opens the profile. If not, you'll go to the store to download it."
        ctaLabel="Open Whipcare"
        deepLink={{ type: "profile", userId, ref: refCode }}
      />
    </>
  );
}
