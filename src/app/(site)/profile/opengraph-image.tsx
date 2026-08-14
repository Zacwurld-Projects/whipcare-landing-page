import {
  PROFILE_INVITE_DESCRIPTION,
  PROFILE_INVITE_TITLE,
} from "@/lib/seo";
import {
  INVITE_OG_CONTENT_TYPE,
  INVITE_OG_SIZE,
  inviteOgImage,
} from "@/lib/inviteOgImage";

export const alt = PROFILE_INVITE_TITLE;
export const size = INVITE_OG_SIZE;
export const contentType = INVITE_OG_CONTENT_TYPE;

export default function ProfileOpenGraphImage() {
  return inviteOgImage(PROFILE_INVITE_TITLE, PROFILE_INVITE_DESCRIPTION);
}
