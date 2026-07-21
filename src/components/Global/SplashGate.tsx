"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";

const SplashScreen = dynamic(() => import("@/components/Global/SplashScreen"), {
  ssr: false,
});

export function SplashGate({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />;
  }

  return <>{children}</>;
}
