"use client"

import HomePage from "@/components/Hero/HomePage";
// import SplashScreen from "@/components/Global/SplashScreen";
import { useState } from "react";
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("@/components/Global/SplashScreen"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />;
  }

  return (
    <main className='flex flex-col *:w-full *:flex-1 justify-center items-center'>
      <div className='w-full'>
        <HomePage />
      </div>
    </main>
  );
}
