"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const SplashScreen = dynamic(() => import("@/components/Global/SplashScreen"), {
  ssr: false,
});

const SPLASH_KEY = "whipcare-splash-shown";

export function SplashGate({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY)) return;
    setShowSplash(true);
  }, []);

  const handleDone = () => {
    sessionStorage.setItem(SPLASH_KEY, "1");
    setShowSplash(false);
  };

  return (
    <>
      {children}
      {showSplash ? <SplashScreen onDone={handleDone} /> : null}
    </>
  );
}
