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
        title="View this profile in the Whipcare app"
        description="This link opens a profile in Whipcare. Download the app to continue."
        ctaLabel="Get the App"
        deepLink={{ type: "profile", userId, ref: refCode }}
      />
    </>
  );
}
