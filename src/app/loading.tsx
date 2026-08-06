"use client";

import Lottie from "lottie-react";
import preloaderAnimation from "@/assets/prelaoder.json";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white">
      <Lottie
        animationData={preloaderAnimation}
        loop
        autoplay
        className="h-full w-full object-contain"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
