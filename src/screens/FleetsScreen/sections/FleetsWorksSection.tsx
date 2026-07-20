import Image from "next/image";
import fleetsWorksDashboard from "@/assets/fleets-works-dashboard.png";

export const FleetsWorksSection = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 sm:gap-10 lg:gap-12">
        <h2 className="max-w-[820px] px-1 text-center font-inter text-[28px] font-bold leading-[1.25] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[40px]">
          See How Whipcare Works For You.
        </h2>
        <div className="w-full">
          <Image
            className="mx-auto block h-auto w-full max-w-full object-contain"
            alt="Whipcare fleet manager dashboard overview"
            src={fleetsWorksDashboard}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
};
