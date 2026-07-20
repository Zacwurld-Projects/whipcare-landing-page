import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { GetAppLink } from "../../../../components/GetAppLink";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { testimonialAvatarMap } from "./TestimonialAvatars";

const testimonials = [
  {
    quote:
      '"Thanks to Whipcare, I found a fantastic mechanic right in my neighborhood. The booking process was seamless, and the service was top-notch."',
    name: "Adeola Olanrewaju",
    role: "Vehicle Owner",
    rating: "/favourite-31-2.svg",
    shadow: "",
  },
  {
    quote:
      '"Whipcare gave my workshop visibility I couldn\'t get on my own. The customers come to me now, and payments are always on time."',
    name: "Moses Adeoye",
    role: "Service Provider",
    rating: "/favourite-31.png",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      '"I\'ve used Whipcare for both detailing and car wash services, and every experience has been excellent. The providers are professional, punctual, and very thorough"',
    name: "Tosin Olawale",
    role: "Vehicle Owner",
    rating: "/favourite-31-1.png",
    shadow: "shadow-shadow-2",
  },
] as const;

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => {
  const Avatar = testimonialAvatarMap[testimonial.name];

  return (
    <Card
      className={`h-full w-[min(380px,85vw)] shrink-0 rounded-lg border-0 bg-white ${testimonial.shadow}`}
    >
      <CardContent className="flex h-full min-h-[280px] flex-col px-6 pb-6 pt-6 sm:min-h-[300px] sm:px-[29px] sm:pb-[29px] sm:pt-7">
        <img
          className="h-4 w-24"
          alt="Five star rating"
          src={testimonial.rating}
        />
        <p className="mt-5 flex-1 font-inter text-[15px] font-medium leading-[1.5] text-gray-700 sm:mt-[25px] sm:text-[length:var(--heading-h6-medium-font-size)] sm:leading-[var(--heading-h6-medium-line-height)]">
          {testimonial.quote}
        </p>
        <div className="mt-5 flex items-center gap-2 sm:mt-6">
          <Avatar />
          <div className="flex flex-col items-start gap-0.5">
            <p className="font-inter text-[14px] font-semibold leading-[1.4] text-gray-700 sm:text-[length:var(--paragraph-medium-semibold-font-size)]">
              {testimonial.name}
            </p>
            <p className="font-inter text-sm font-medium leading-[19.6px] text-gray-700">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CustomerTestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full overflow-hidden bg-[#f3f4f6] py-12 sm:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:px-8">
        <Reveal as="header" className="flex max-w-[771px] flex-col items-center gap-4 text-center sm:gap-[19px]">
          <p className="w-full max-w-[569px] font-inter text-[15px] font-normal leading-[1.5] text-gray-600 sm:text-xl sm:leading-6">
            <span className="tracking-[-0.08px] text-[#701e00]">2,157</span>
            <span className="font-medium tracking-[-0.08px] text-[#4a5565]">
              {" "}
              people have experienced quality service with Whipcare
            </span>
          </p>
          <h2
            id="testimonials-heading"
            className="font-inter text-[28px] font-semibold leading-[1.2] text-[#101828] sm:text-[36px] lg:text-[length:var(--display-large-semibold-font-size)] lg:leading-[var(--display-large-semibold-line-height)]"
          >
            Don&apos;t Just Take Our Word For it
          </h2>
          <p className="w-full max-w-[569px] font-inter text-[15px] font-medium leading-[1.5] text-gray-500 sm:text-[length:var(--heading-h6-medium-font-size)] sm:leading-[var(--heading-h6-medium-line-height)]">
            Here&apos;s what other users say about us
          </p>
        </Reveal>
      </div>

      <div className="relative w-full pt-2 sm:pt-4 lg:pt-10">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[389px] w-full max-w-[762px] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(68,255,154,1)_0%,rgba(68,176,255,1)_23%,rgba(139,68,255,1)_49%,rgba(255,102,68,1)_74%,rgba(235,255,112,1)_100%)] opacity-30 lg:block" />
        <div
          className="group relative z-10 flex overflow-hidden"
          style={
            {
              "--gap": "1.5rem",
              "--duration": "40s",
            } as CSSProperties
          }
        >
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="animate-marquee flex shrink-0 items-stretch gap-[var(--gap)] pr-[var(--gap)] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
              aria-hidden={setIndex === 1}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`${setIndex}-${testimonial.name}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#f3f4f6] to-transparent sm:w-16 md:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#f3f4f6] to-transparent sm:w-16 md:w-24 lg:w-32" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 sm:px-6 lg:px-8">
        <Reveal
          delay={0.1}
          className="mt-8 flex w-full max-w-[807px] flex-col items-center gap-5 text-center sm:mt-10 sm:gap-6"
        >
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="font-inter text-[15px] font-medium leading-[1.5] text-gray-600 sm:text-[length:var(--heading-h6-medium-font-size)] sm:leading-[var(--heading-h6-medium-line-height)]">
              What are you waiting for?
            </p>
            <p className="font-inter text-[15px] font-medium leading-[1.5] text-gray-600 sm:text-[length:var(--heading-h6-medium-font-size)] sm:leading-[var(--heading-h6-medium-line-height)]">
              Plug in to our trusted network of reliable car servicemen and
              experience the ease today!
            </p>
          </div>
          <Button
            asChild
            className="h-auto w-full max-w-xs rounded-lg bg-[#701e00] px-6 py-3.5 font-inter text-[14px] font-semibold text-white hover:bg-[#5a1800] sm:w-auto sm:text-[length:var(--inter-body-semibold-font-size)]"
          >
            <GetAppLink>Get the App</GetAppLink>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
