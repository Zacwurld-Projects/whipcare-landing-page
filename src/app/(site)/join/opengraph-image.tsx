import {
  JOIN_INVITE_DESCRIPTION,
  JOIN_INVITE_TITLE,
} from "@/lib/seo";
import {
  INVITE_OG_CONTENT_TYPE,
  INVITE_OG_SIZE,
  inviteOgImage,
} from "@/lib/inviteOgImage";

export const alt = JOIN_INVITE_TITLE;
export const size = INVITE_OG_SIZE;
export const contentType = INVITE_OG_CONTENT_TYPE;

export default function JoinOpenGraphImage() {
  return inviteOgImage(JOIN_INVITE_TITLE, JOIN_INVITE_DESCRIPTION);
}
