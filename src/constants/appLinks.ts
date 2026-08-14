export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jozy.whipcareapp2";

export const APP_STORE_URL =
  "https://apps.apple.com/ng/app/whipcare-car-care-near-you/id6670729882";

export const ANDROID_PACKAGE_NAME = "com.jozy.whipcareapp2";

/** iOS → App Store, Android → Play Store, desktop/unknown → Play Store */
export function getPreferredStoreUrl(userAgent?: string): string {
  const ua =
    userAgent ??
    (typeof navigator !== "undefined" ? navigator.userAgent : "");

  const isIos =
    /iPad|iPhone|iPod/i.test(ua) ||
    (typeof document !== "undefined" &&
      /Macintosh/i.test(ua) &&
      "ontouchend" in document);

  if (isIos) return APP_STORE_URL;
  if (/Android/i.test(ua)) return PLAY_STORE_URL;
  return PLAY_STORE_URL;
}
