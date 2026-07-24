"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import checkAssets from "@/assets/check-assets.png";
import { Card, CardContent } from "../../../../components/ui/card";

const stats = [
  {
    target: 2.5,
    suffix: "k+",
    label: "Customers around the world.",
  },
  {
    target: 3,
    suffix: "+",
    label: "Countries across the globe.",
  },
  {
    target: 100,
    suffix: "+",
    label: "Real time active service providers",
  },
  {
    target: 80,
    suffix: "+",
    label: "Real time active service bookings",
  },
] as const;

const DURATION_MS = 1400;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const CountUpStat = ({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) => {
  const decimals = Number.isInteger(target) ? 0 : 1;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let raf = 0;
    const startedAt = performance.now();
    const factor = 10 ** decimals;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / DURATION_MS);
      setValue(
        Math.round(easeOutCubic(progress) * target * factor) / factor,
      );
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [decimals, start, target]);

  return (
    <>
      {decimals > 0 ? value.toFixed(decimals) : value}
      {suffix}
    </>
  );
};

export const ValuePropositionStatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="value-proposition-heading"
      className="relative w-full overflow-hidden bg-[#701e00]"
    >
      <Image
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        alt=""
        src={checkAssets}
        aria-hidden
        fill
        sizes="100vw"
      />
      <div className="relative mx-auto flex min-h-[320px] w-full max-w-[1440px] items-center px-4 py-12 sm:min-h-[400px] sm:px-6 sm:py-14 md:px-10 lg:px-20 lg:py-16">
        <Card className="h-auto w-full border-0 bg-transparent shadow-none">
          <CardContent className="flex h-full flex-col items-start justify-center p-0">
            <header className="flex max-w-[760px] flex-col items-start gap-1 sm:gap-2">
              <h2
                id="value-proposition-heading"
                className="font-inter text-[26px] font-medium leading-[1.25] text-white sm:text-[36px] lg:text-[length:var(--inter-h2-medium-font-size)] lg:leading-[var(--inter-h2-medium-line-height)]"
              >
                What we&apos;re doing
              </h2>
              <p className="flex flex-col gap-0.5 text-white sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-2">
                <span className="font-inter text-[15px] font-normal leading-[1.5] sm:text-[18px] lg:text-[length:var(--inter-h5-regular-font-size)]">
                  Providing access to premium car services
                </span>
                <strong className="font-inter text-[15px] font-bold leading-[1.5] sm:text-[18px] lg:text-[length:var(--inter-h5-bold-font-size)]">
                  at the best prices!
                </strong>
              </p>
            </header>

            <div
              ref={statsRef}
              className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 lg:mt-[100px]"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-start">
                  <div className="flex flex-col items-start gap-0.5">
                    <div
                      className="font-inter text-[28px] font-semibold leading-[1.2] text-white sm:text-[36px] lg:text-[length:var(--inter-h2-semibold-font-size)] lg:leading-[var(--inter-h2-semibold-line-height)]"
                      aria-label={`${stat.target}${stat.suffix}`}
                    >
                      <CountUpStat
                        target={stat.target}
                        suffix={stat.suffix}
                        start={started}
                      />
                    </div>
                    <p className="font-inter text-[13px] font-normal leading-[1.4] text-white sm:text-[15px] lg:text-[length:var(--inter-title-2-regular-font-size)]">
                      {stat.label}
                    </p>
                  </div>
                  {index < stats.length - 1 && (
                    <svg
                      className="ml-4 hidden h-[75px] w-[3px] shrink-0 md:ml-8 md:block"
                      viewBox="0 0 3 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M1.5 0V32" stroke="#AA5A3E" />
                      <rect
                        x="3"
                        y="36"
                        width="3"
                        height="3"
                        rx="1.5"
                        transform="rotate(90 3 36)"
                        fill="white"
                      />
                      <path d="M1.5 43V75" stroke="#AA5A3E" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
