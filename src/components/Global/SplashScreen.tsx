"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "@/assets/prelaoder.json";

interface SplashScreenProps {
  onDone?: () => void;
}

const SplashScreen = ({ onDone }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onDone) onDone();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onDone]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white">
      <Lottie
        animationData={preloaderAnimation}
        loop={false}
        autoplay={true}
        onComplete={() => {
          setIsVisible(false);
          if (onDone) onDone();
        }}
        className="h-full w-full object-contain"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

export default SplashScreen;
