"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from "react";
import {
  ANDROID_PACKAGE_NAME,
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

const APP_OPEN_TIMEOUT_MS = 1600;

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

function isAndroidClient(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

function isMobileClient(): boolean {
  return isIosClient() || isAndroidClient();
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

function buildAppSchemeUrl(deepLink: DeepLinkInvite): string {
  if (deepLink.type === "join") {
    return deepLink.ref
      ? `whipcare://join/${encodeURIComponent(deepLink.ref)}`
      : "whipcare://join";
  }

  const path = deepLink.userId
    ? `whipcare://profile/${encodeURIComponent(deepLink.userId)}`
    : "whipcare://profile";
  return deepLink.ref
    ? `${path}?ref=${encodeURIComponent(deepLink.ref)}`
    : path;
}

function buildAndroidIntentUrl(deepLink: DeepLinkInvite, storeUrl: string): string {
  const schemeUrl = buildAppSchemeUrl(deepLink);
  const path = schemeUrl.replace(/^whipcare:\/\//i, "");
  return `intent://${path}#Intent;scheme=whipcare;package=${ANDROID_PACKAGE_NAME};S.browser_fallback_url=${encodeURIComponent(storeUrl)};end`;
}

function tryOpenApp(appUrl: string) {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = appUrl;
  document.body.appendChild(iframe);
  window.setTimeout(() => iframe.remove(), APP_OPEN_TIMEOUT_MS);
}

function openAppOrStore(appUrl: string, storeUrl: string, onStoreFallback?: () => void) {
  let didLeave = document.hidden;

  const markLeft = () => {
    didLeave = true;
  };

  document.addEventListener("visibilitychange", markLeft);
  window.addEventListener("pagehide", markLeft);

  tryOpenApp(appUrl);
  window.location.href = appUrl;

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", markLeft);
    window.removeEventListener("pagehide", markLeft);
    if (didLeave || document.hidden) return;
    onStoreFallback?.();
    window.location.href = storeUrl;
  }, APP_OPEN_TIMEOUT_MS);
}

export const GetAppLink = forwardRef<HTMLAnchorElement, GetAppLinkProps>(
  function GetAppLink({ children, onClick, deepLink, ...props }, ref) {
    const [href, setHref] = useState(PLAY_STORE_URL);
    const [isIos, setIsIos] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);
    const autoTried = useRef(false);

    useEffect(() => {
      const ios = isIosClient();
      const android = isAndroidClient();
      setIsIos(ios);
      setIsAndroid(android);

      if (!deepLink) {
        setHref(getPreferredStoreUrl());
        return;
      }

      const storeUrl = ios
        ? APP_STORE_URL
        : android
          ? withPlayStoreReferrer(deepLink)
          : getPreferredStoreUrl();

      if (android) {
        setHref(buildAndroidIntentUrl(deepLink, storeUrl));
        return;
      }

      setHref(ios ? buildAppSchemeUrl(deepLink) : storeUrl);
    }, [
      deepLink?.type,
      deepLink?.ref,
      deepLink && "userId" in deepLink ? deepLink.userId : undefined,
    ]);

    useEffect(() => {
      if (!deepLink || autoTried.current || !isMobileClient()) return;
      autoTried.current = true;
      tryOpenApp(buildAppSchemeUrl(deepLink));
    }, [
      deepLink?.type,
      deepLink?.ref,
      deepLink && "userId" in deepLink ? deepLink.userId : undefined,
    ]);

    const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
      trackGa4Event("download_app_click");
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (!deepLink) return;

      const storeUrl = isIos
        ? APP_STORE_URL
        : isAndroid
          ? withPlayStoreReferrer(deepLink)
          : getPreferredStoreUrl();

      if (!isIos && !isAndroid) return;

      event.preventDefault();
      openAppOrStore(buildAppSchemeUrl(deepLink), storeUrl, () => {
        if (!isIos) return;
        void navigator.clipboard.writeText(buildClipboardPayload(deepLink)).catch(() => {
          // ignore clipboard failures — still send user to the store
        });
      });
    };

    return (
      <a
        ref={ref}
        href={href}
        target={deepLink ? undefined : "_blank"}
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  },
);
