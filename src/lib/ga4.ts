type Ga4Params = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Ga4Params,
) => void;

export const trackGa4Event = (
  eventName: string,
  params?: Ga4Params,
): void => {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", eventName, params);
};
