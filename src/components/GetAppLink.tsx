"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from "react";
import {
  APP_STORE_URL,
  getPreferredStoreUrl,
  PLAY_STORE_URL,
} from "@/constants/appLinks";
import { trackGa4Event } from "@/lib/ga4";

export type DeepLinkInvite =
  | { type: "join"; ref?: string }
  | { type: "profile"; userId?: string; ref?: string };

type GetAppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  deepLink?: DeepLinkInvite;
};

function isIosClient(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /iPad|iPhone|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) &&
      typeof document !== "undefined" &&
      "ontouchend" in document)
  );
}

function buildPlayReferrer(deepLink: DeepLinkInvite): string {
  const parts: string[] = [];
  if (deepLink.type === "profile" && deepLink.userId) {
    parts.push(`userId=${deepLink.userId}`);
  }
  if (deepLink.ref) {
    parts.push(`ref=${deepLink.ref}`);
  }
  return parts.join("&");
}

function buildClipboardPayload(deepLink: DeepLinkInvite): string {
  if (deepLink.type === "join") {
    return JSON.stringify({ type: "join", ref: deepLink.ref });
  }
  return JSON.stringify({
    type: "profile",
    userId: deepLink.userId,
    ref: deepLink.ref,
  });
}

function withPlayStoreReferrer(deepLink: DeepLinkInvite): string {
  const referrer = buildPlayReferrer(deepLink);
  if (!referrer) return PLAY_STORE_URL;
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`;
}

export const GetAppLink = forwardRef<HTMLAnchorElement, GetAppLinkProps>(
  function GetAppLink({ children, onClick, deepLink, ...props }, ref) {
    const [href, setHref] = useState(PLAY_STORE_URL);
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
      const ios = isIosClient();
      setIsIos(ios);

      if (!deepLink) {
        setHref(getPreferredStoreUrl());
        return;
      }

      if (ios) {
        setHref(APP_STORE_URL);
        return;
      }

      setHref(withPlayStoreReferrer(deepLink));
    }, [deepLink?.type, deepLink?.ref, deepLink && "userId" in deepLink ? deepLink.userId : undefined]);

    const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
      trackGa4Event("download_app_click");
      onClick?.(event);
      if (event.defaultPrevented) return;

      if (!deepLink || !isIos) return;

      event.preventDefault();
      try {
        await navigator.clipboard.writeText(buildClipboardPayload(deepLink));
      } catch {
        // ignore clipboard failures — still send user to the store
      }
      window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
    };

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  },
);
