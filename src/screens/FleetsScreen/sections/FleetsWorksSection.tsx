"use client";

import Image from "next/image";
import strings from "@/assets/strings.png";

export const FleetsWorksSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 sm:gap-10 lg:gap-12">
        <h2 className="max-w-[820px] px-1 text-center font-inter text-[28px] font-bold leading-[1.25] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[40px]">
          See How Whipcare Works For You.
        </h2>

        <div className="relative w-full">
          <Image
            src={strings}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[130%] lg:w-[120%]"
            sizes="(max-width: 1280px) 140vw, 1500px"
          />

          <div className="relative z-10 mx-auto w-full overflow-hidden rounded-[18px] sm:rounded-[26px] lg:rounded-[32px]">
            <video
              className="pointer-events-none block h-auto w-full"
              src="https://res.cloudinary.com/vlsxeibo/video/upload/v1784794841/Compressed_Whipcare_AI_Demo_vbjdgj.mp4"
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(e) => e.preventDefault()}
              aria-label="Whipcare fleet manager dashboard walkthrough"
            />
            <div
              className="absolute inset-0 z-10"
              aria-hidden
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
