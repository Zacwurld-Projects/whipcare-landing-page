import Image from "next/image";
import ourStoryChecklist from "@/assets/our-story-checklist.png";
import missionVision from "@/assets/mission-vision.png";

const storyBlocks = [
  {
    title: "Introduction",
    body: "WhipCare was born from the frustration of our founders, who struggled to find reliable car care services. Inspired to make car maintenance effortless, they created a platform connecting car owners with certified professionals within their location. Today, WhipCare revolutionizes car care globally, ensuring top-notch convenience and quality for every vehicle.",
  },
  {
    title: "Founding",
    body: '"Our journey began when our founder, Isaac experienced the frustration of finding a reliable mechanic during a road trip. This inspired the idea of creating a platform that makes it easy for car owners to find trusted service providers anytime, anywhere."',
  },
] as const;

const missionBlocks = [
  {
    title: "Mission",
    body: "Our mission is to provide car owners with easy access to high-quality, trusted car services, ensuring their vehicles are always in top condition.",
  },
  {
    title: "Vision",
    body: "Our vision is to become the leading car service platform globally, known for our reliability, quality, and customer-centric approach.",
  },
] as const;

const CheckIcon = () => (
  <svg
    width="17"
    height="14"
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M15.4 1L5.11428 13L1 8.2"
      stroke="#83B71B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StoryWaveDecor = () => (
  <svg
    className="pointer-events-none absolute right-[-80px] top-[-40px] h-[320px] w-[480px] sm:right-[-40px] sm:top-[-20px] sm:h-[380px] sm:w-[560px] lg:right-0 lg:top-0 lg:h-[493px] lg:w-[724px]"
    width="724"
    height="493"
    viewBox="0 0 724 493"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g filter="url(#filter0_f_our_story)">
      <path
        d="M806.419 305.98C806.419 305.98 613.078 277.56 580.325 254.338C547.572 231.115 496.366 105.002 451.491 73.1844C406.615 41.3667 272.789 36.2879 218.13 -2.46632C163.471 -41.2206 111.834 -134.721 111.834 -134.721"
        stroke="#D1D5DC"
        strokeWidth="5.21429"
      />
    </g>
    <g filter="url(#filter1_f_our_story)">
      <path
        d="M819.452 368.839C819.452 368.839 634.585 305.495 606.639 276.668C578.692 247.841 551.446 114.483 513.155 74.9859C474.865 35.4886 344.232 5.9896 297.594 -42.1185C250.956 -90.2265 217.314 -191.602 217.314 -191.602"
        stroke="#D1D5DC"
        strokeWidth="5.21429"
      />
    </g>
    <g filter="url(#filter2_f_our_story)">
      <path
        d="M147.046 -81.0001C147.046 -81.0001 270.093 70.8154 306.772 87.1459C343.45 103.476 478.045 83.2079 528.3 105.583C578.555 127.958 651.172 240.483 712.383 267.736C773.594 294.989 880.356 291.723 880.356 291.723"
        stroke="#711E00"
        strokeWidth="5.21429"
      />
    </g>
    <g filter="url(#filter3_f_our_story)">
      <path
        d="M238.393 -54.2335C238.393 -54.2335 361.439 97.582 398.118 113.913C434.797 130.243 569.391 109.975 619.646 132.349C669.901 154.724 742.518 267.249 803.729 294.502C864.94 321.755 971.702 318.49 971.702 318.49"
        stroke="#711E00"
        strokeWidth="5.21429"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_our_story"
        x="105.381"
        y="-140.152"
        width="705.586"
        height="452.883"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.08572" result="effect1_foregroundBlur_our_story" />
      </filter>
      <filter
        id="filter1_f_our_story"
        x="210.668"
        y="-196.594"
        width="613.799"
        height="572.07"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.08572" result="effect1_foregroundBlur_our_story" />
      </filter>
      <filter
        id="filter2_f_our_story"
        x="140.851"
        y="-86.8116"
        width="743.754"
        height="385.435"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.08572" result="effect1_foregroundBlur_our_story" />
      </filter>
      <filter
        id="filter3_f_our_story"
        x="232.197"
        y="-60.045"
        width="743.754"
        height="385.435"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.08572" result="effect1_foregroundBlur_our_story" />
      </filter>
    </defs>
  </svg>
);

type ContentBlock = {
  title: string;
  body: string;
};

const ContentBlocks = ({
  blocks,
  startDelay = 0,
}: {
  blocks: readonly ContentBlock[];
  startDelay?: number;
}) => (
  <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
    {blocks.map((block, index) => (
      <article
        key={block.title}
        className="opacity-0 animate-fade-up"
        style={{ animationDelay: `${startDelay + index * 0.1}s` }}
      >
        <div className="flex items-start gap-2.5">
          <CheckIcon />
          <h3 className="font-inter text-[22px] font-bold leading-[1.3] text-[#101928] sm:text-[28px] lg:text-[36px] xl:text-[40px]">
            {block.title}
          </h3>
        </div>
        <p className="mt-3 pl-[27px] font-inter text-[14px] font-medium leading-[1.55] text-[#667185] sm:text-[15px] lg:text-[16px]">
          {block.body}
        </p>
      </article>
    ))}
  </div>
);

export const OurStorySection = () => {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative w-full overflow-hidden bg-[#f3f4f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <StoryWaveDecor />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 sm:gap-16 lg:gap-24">
        <div>
          <header
            className="mb-8 max-w-[640px] opacity-0 animate-fade-up sm:mb-10"
            style={{ animationDelay: "0.08s" }}
          >
            <h2
              id="our-story-heading"
              className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[48px]"
            >
              Our Story
            </h2>
            <p className="mt-3 font-inter text-[15px] font-medium leading-[1.5] text-[#4A5565] sm:mt-4 sm:text-[18px] lg:text-[22px] xl:text-[24px]">
              WhipCare was created to solve the hassle of finding reliable car
              care services. By bringing top-notch car maintenance directly to
              your doorstep, we make car care effortless and accessible
              globally.
            </p>
          </header>

          <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div
              className="relative isolate min-h-[220px] overflow-hidden rounded-2xl opacity-0 animate-fade-up sm:min-h-[280px] sm:rounded-[24px] md:min-h-[360px] lg:min-h-[420px] lg:rounded-[32px]"
              style={{ animationDelay: "0.16s" }}
            >
              <Image
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                alt="Handwritten Whipcare business plan checklist"
                src={ourStoryChecklist}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            <div
              className="flex flex-col opacity-0 animate-fade-up"
              style={{ animationDelay: "0.24s" }}
            >
              <p className="mb-4 font-inter text-[18px] font-medium tracking-[0.02em] text-[#701e00] sm:mb-5 sm:text-[20px] lg:text-[24px]">
                Whipcare
              </p>
              <ContentBlocks blocks={storyBlocks} startDelay={0.3} />
            </div>
          </div>
        </div>

        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className="flex flex-col opacity-0 animate-fade-up lg:order-1"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-[#111928] sm:text-[36px] lg:text-[48px]">
              Mission and Vision
            </h2>
            <p className="mb-4 mt-4 font-inter text-[18px] font-semibold tracking-[0.02em] text-[#701e00] sm:mb-5 sm:mt-6 sm:text-[20px] lg:text-[24px]">
              Whipcare
            </p>
            <ContentBlocks blocks={missionBlocks} startDelay={0.18} />
          </div>

          <div
            className="relative min-h-[220px] overflow-hidden rounded-2xl opacity-0 animate-fade-up sm:min-h-[280px] sm:rounded-[24px] md:min-h-[360px] lg:order-2 lg:min-h-[420px] lg:rounded-[32px]"
            style={{ animationDelay: "0.18s" }}
          >
            <Image
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              alt="Whipcare team stacking hands over a desk"
              src={missionVision}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
