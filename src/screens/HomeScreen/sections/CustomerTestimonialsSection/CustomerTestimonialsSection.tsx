import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { GetAppLink } from "../../../../components/GetAppLink";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    quote:
      "Before now, I found it hard to actually know what to check on my car to prevent serious breakdowns on my Range Rover. Now with Vehicle Health Pro, I just scan my car and schedule preventive services.",
    name: "Ebuka",
    role: "Vehicle Owner",
    location: "Lagos Nigeria",
    shadow: "",
  },
  {
    quote:
      "Managing 35 vehicles was stressful with spreadsheets till Whipcare came along. Now I can manage and schedule maintenance quickly without stress.",
    name: "Joseph",
    role: "Fleet Manager",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I drive Bolt around Lekki and Chevron. Last month at 11pm my car died at Chevron roundabout. I opened Whipcare, three providers bid in two minutes. One came in 18 minutes. Escrow made sure I did not pay until fix was complete.",
    name: "Hassan",
    role: "Ride-hailing Driver",
    location: "Lekki Phase 1",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      'I use my car to run meetings all over Ikoyi. Vehicle Health Pro AI chatbot texts me "your oil is due". I replied "book it" and it scheduled it. NGN 51k yearly saved me from a NGN 600k engine problem.',
    name: "Ngozi",
    role: "Business Owner",
    location: "Ikoyi",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am a Tier 2 mechanic in Ikotun. Before Whipcare I waited for roadside customers. Now I get job requests with car history already there. Clients pay into escrow first so no stories. Dashboard shows I made NGN 780k this month.",
    name: "Musa",
    role: "Provider Mechanic",
    location: "Ikotun",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I sell cars at CMS. Biggest problem was buyers asking for service history. Now I transfer full Service Passport to buyers on Whipcare. Sold a Camry last week NGN 900k higher because records were complete.",
    name: "Linda",
    role: "Car Dealer",
    location: "CMS / Marina",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "We manage three buses for church in Ikeja. Spreadsheets were a mess. Fleet Dashboard lets me schedule all maintenance and I get reminders. We also use Whipcare ads to reach other church groups who need buses.",
    name: "Pastor Tobi",
    role: "Church Driver",
    location: "Ikeja",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I did not know anything about cars. Whipcare blog taught me coolant vs water. When my AC failed in Surulere traffic, I used the app. Closest provider came in 22 minutes, I saw rating and reviews first.",
    name: "Amina",
    role: "Working Mum",
    location: "Surulere",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "We run delivery vans from Oshodi to mainland. Downtime was costing us. Whipcare live tracking plus fast arrival means if a van breaks down, help is already coming. We even book car wash and detailing in app.",
    name: "Femi",
    role: "Logistics Manager",
    location: "Oshodi",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am serving in Enugu and knew no mechanic here. My car started making noise. I opened Whipcare, set my price like inDrive, and chose from four verified providers. Fixed same day. Dispute team replied in 10 minutes.",
    name: "Sandra",
    role: "NYSC Member",
    location: "Enugu",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I registered my workshop as Tier 3 on Whipcare. Now I get fleet bookings from companies in VI. Provider analytics helps me see what is working. Former clients onboarded with me and boosted my rating.",
    name: "Chief",
    role: "Fleet Owner",
    location: "Victoria Island",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Broke student here. Vehicle Health Pro warns me early so small problems do not become NGN 200k. I earned whippoints for signup and referral, used them to pay for car wash. I also towed on Whipcare at Yaba market.",
    name: "Bola",
    role: "Student",
    location: "Yaba",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am a mechanic in Enugu. Whipcare verified me with KYC and client vouches. Now people trust me faster. I see bid requests, quote my price, and client chooses me. No more begging for jobs.",
    name: "Mr. Okoro",
    role: "Provider",
    location: "Enugu",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Traffic in Gbagada is bad but breakdown is worse. App showed me three closest providers at 2am when my car refused to start. Chose one, he arrived in 25 minutes. I can favorite mechanics for next request.",
    name: "Grace",
    role: "Uber Driver",
    location: "Gbagada",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "We have 25 trucks in Apapa port. Managing maintenance was chaos. Tier 3 workshop registration plus Fleet Dashboard changed everything. We schedule, track ETA of repairs, and transfer records when we sell trucks.",
    name: "Mr. Bello",
    role: "Company Director",
    location: "Apapa",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am always driving clients around Ajah and Epe. The AI chatbot in Vehicle Health Pro knows my car history. I text 'when is next service' and it books it. I referred friends and used whippoints for detailing.",
    name: "Chiamaka",
    role: "Real Estate Agent",
    location: "Ajah",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I joined Whipcare as a towing provider. Because we are KYC verified and closest, I get calls even at 1am. Clients pay into escrow so I am sure of my money. Ratings give me more visibility.",
    name: "Yusuf",
    role: "Tow Truck Provider",
    location: "Maryland",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I live in Ogba and drive to school daily. I used to get overcharged. Now I see price range first, choose provider with rating, and all service records are saved. Blog taught me what to check monthly.",
    name: "Mrs. Adesuwa",
    role: "Teacher",
    location: "Ogba",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am particular about my car in Magodo. Whipcare does not replace my mechanic. I added him to verified network and can favorite him. If he is busy, another Tier 2 provider helps. I am never stranded.",
    name: "Tayo",
    role: "Car Enthusiast",
    location: "Magodo",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Running a workshop in Enugu was hard for visibility. Since joining Whipcare as Tier 3, we get fleet jobs and regular bookings. Clients see ratings and reviews. Escrow means no unpaid jobs. Business doubled in four months.",
    name: "Ifeanyi",
    role: "Workshop Owner",
    location: "Enugu",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I am always filming in Lekki and cannot be late. Whipcare sends service reminders and I book car wash and detailing from app. I learned from their socials too. Feels like having a car big brother.",
    name: "Wura",
    role: "Content Creator",
    location: "Lekki",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "We move goods from Oyingbo to everywhere. Vehicle Health Pro at NGN 51k per vehicle yearly is small compared to engine damage. We get ETA for repairs and transfer full history when we sell vehicles.",
    name: "Alhaji",
    role: "Transport Company",
    location: "Oyingbo",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Before now I barely made enough to feed my family because I had no visibility beyond clients who knew me. Now I get requests from clients and make at least NGN 200k monthly from Whipcare.",
    name: "John",
    role: "Service Provider",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "As a lawyer, I do not have time to argue with mechanics. Before Whipcare, I was always overcharged. With Service Passport, I now see exactly what was done last time and cost. No one can scam me.",
    name: "Aisha",
    role: "Busy Professional",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Car breakdown is my biggest fear. Vehicle Health Pro warns me before anything spoils. It told me to change brake pads two weeks ago. I did it and avoided a NGN 150k repair.",
    name: "Tunde",
    role: "Uber/Bolt Driver",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I run 12 school buses. Tracking service for each one with paper was madness. With Fleet Dashboard, I schedule maintenance for all vehicles in five minutes and get reminders. Parents trust us more with service records.",
    name: "Mrs. Ireti",
    role: "Fleet Owner",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Before Whipcare, I was waiting by roadside for customers. Now I get requests directly from car owners. App shows car history so I do not waste time diagnosing. I made over NGN 400k this month from Whipcare jobs.",
    name: "Chinedu",
    role: "Verified Mechanic",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "I bought my first car and I knew nothing. Oil change, coolant, I was lost. Whipcare Vehicle Health Pro scans my car and tells me exactly what to do and when. Feels like a mechanic in my pocket.",
    name: "Bimbo",
    role: "First-time Car Owner",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "Selling cars without service history is hard, buyers lowball you. Now I use Whipcare Service Passport for all my cars. When buyer asks for history, I show app. Sold a 2020 Corolla NGN 1.2M higher with full records.",
    name: "Emeka",
    role: "Car Dealer",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
  {
    quote:
      "We manage delivery vans across Lagos. Downtime was killing us. With Whipcare on-demand mechanic plus live tracking, if a van breaks down help arrives in under 45 minutes and I track them live.",
    name: "Fatima",
    role: "Logistics Company Manager",
    location: "Lagos Nigeria",
    shadow: "shadow-shadow-2",
  },
] as const;

const ratingByName = {
  Ebuka: 4.5,
  Joseph: 4,
  Hassan: 5,
  Ngozi: 4.5,
  Musa: 4,
  Linda: 5,
  "Pastor Tobi": 4.5,
  Amina: 4,
  Femi: 5,
  Sandra: 4.5,
  Chief: 4,
  Bola: 5,
  "Mr. Okoro": 4.5,
  Grace: 4,
  "Mr. Bello": 5,
  Chiamaka: 4.5,
  Yusuf: 4,
  "Mrs. Adesuwa": 5,
  Tayo: 4.5,
  Ifeanyi: 4,
  Wura: 5,
  Alhaji: 4.5,
  John: 4,
  Aisha: 5,
  Tunde: 4.5,
  "Mrs. Ireti": 4,
  Chinedu: 5,
  Bimbo: 4.5,
  Emeka: 4,
  Fatima: 5,
} as const;

const StarRating = ({
  rating,
  idPrefix,
  total = 5,
}: {
  rating: number;
  idPrefix: string;
  total?: number;
}) => {
  const safePrefix = idPrefix.replace(/[^a-zA-Z0-9_-]/g, "_");

  return (
    <div
      className="flex items-center gap-0.5 sm:gap-1"
      aria-label={`${rating} out of ${total} stars`}
    >
      {Array.from({ length: total }).map((_, index) => {
        const fillLevel = Math.max(0, Math.min(1, rating - index));
        return (
          <svg
            key={`star-${index}`}
            viewBox="0 0 24 24"
            className="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          >
            <path
              d="M12 3.5l2.75 5.58 6.16.9-4.46 4.35 1.05 6.14L12 17.58l-5.5 2.89 1.05-6.14-4.46-4.35 6.16-.9L12 3.5z"
              fill="none"
              stroke="#f4b400"
              strokeWidth="1.8"
            />
            {fillLevel > 0 && (
              <>
                <defs>
                  <clipPath id={`star-fill-${safePrefix}-${index}`}>
                    <rect x="0" y="0" width={24 * fillLevel} height="24" />
                  </clipPath>
                </defs>
                <path
                  d="M12 3.5l2.75 5.58 6.16.9-4.46 4.35 1.05 6.14L12 17.58l-5.5 2.89 1.05-6.14-4.46-4.35 6.16-.9L12 3.5z"
                  fill="#f4b400"
                  clipPath={`url(#star-fill-${safePrefix}-${index})`}
                />
              </>
            )}
          </svg>
        );
      })}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  idPrefix,
}: {
  testimonial: (typeof testimonials)[number];
  idPrefix: string;
}) => {
  const rating = ratingByName[testimonial.name as keyof typeof ratingByName] ?? 4;

  return (
    <Card
      className={`h-full w-[min(300px,88vw)] shrink-0 rounded-lg border-0 bg-white sm:w-[min(340px,85vw)] lg:w-[min(380px,85vw)] ${testimonial.shadow}`}
    >
      <CardContent className="flex h-full min-h-[240px] flex-col px-4 pb-5 pt-5 sm:min-h-[280px] sm:px-6 sm:pb-6 sm:pt-6 md:min-h-[300px] md:px-[29px] md:pb-[29px] md:pt-7">
        <StarRating rating={rating} idPrefix={idPrefix} />
        <p className="mt-4 flex-1 font-inter text-[14px] font-medium leading-[1.55] text-[#364153] sm:mt-5 sm:text-[15px] sm:leading-[1.5] md:mt-[25px] md:text-[16px] md:leading-[var(--heading-h6-medium-line-height)]">
          {testimonial.quote}
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4 md:mt-6">
          <div className="flex flex-col items-start gap-0.5">
            <p className="font-inter text-[13px] font-semibold leading-[1.4] text-[#364153] sm:text-[14px] md:text-[length:var(--paragraph-medium-semibold-font-size)]">
              {testimonial.name}
            </p>
            <p className="font-inter text-[11px] font-medium leading-[1.4] text-[#701e00] sm:text-[12px] sm:leading-[19.6px]">
              {testimonial.role}
            </p>
          </div>
          <p className="font-inter text-[13px] font-medium leading-[1.3] text-gray-700 sm:text-right sm:text-[15px] md:text-[18px] md:leading-[1.2]">
            {testimonial.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const CustomerTestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full overflow-hidden bg-[#f3f4f6] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:gap-12 lg:px-8">
        <Reveal as="header" className="flex w-full max-w-[771px] flex-col items-center gap-3 text-center sm:gap-4 md:gap-[19px]">
          <p className="w-full font-inter text-[14px] font-normal leading-[1.5] text-gray-600 sm:text-[15px] md:text-xl md:leading-6">
            <span className="tracking-[-0.08px] text-[#701e00]">2,157</span>
            <span className="font-medium tracking-[-0.08px] text-[#4a5565]">
              {" "}
              people have experienced quality service with Whipcare
            </span>
          </p>
          <h2
            id="testimonials-heading"
            className="w-full font-inter text-[24px] font-semibold leading-[1.25] text-[#101828] sm:text-[28px] md:text-[36px] lg:text-[length:var(--display-large-semibold-font-size)] lg:leading-[var(--display-large-semibold-line-height)]"
          >
            Don&apos;t Just Take Our Word For it
          </h2>
          <p className="mb-2 w-full max-w-[569px] font-inter text-[14px] font-medium leading-[1.5] text-gray-500 sm:mb-3.5 sm:text-[15px] md:text-[length:var(--heading-h6-medium-font-size)] md:leading-[var(--heading-h6-medium-line-height)]">
            Here&apos;s what other users say about us
          </p>
        </Reveal>
      </div>

      <div className="relative w-full pt-1 sm:pt-3 md:pt-4 lg:pt-10">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[389px] w-full max-w-[762px] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(68,255,154,1)_0%,rgba(68,176,255,1)_23%,rgba(139,68,255,1)_49%,rgba(255,102,68,1)_74%,rgba(235,255,112,1)_100%)] opacity-30 lg:block" />
        <div
          className="group relative z-10 flex overflow-hidden"
          style={
            {
              "--gap": "1rem",
              "--duration": "120s",
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
                  idPrefix={`${setIndex}-${testimonial.name}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-gradient-to-r from-[#f3f4f6] to-transparent sm:w-10 md:w-16 lg:w-24 xl:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-gradient-to-l from-[#f3f4f6] to-transparent sm:w-10 md:w-16 lg:w-24 xl:w-32" />
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[1280px] flex-col items-center px-4 sm:mt-10 sm:px-6 lg:px-8">
        <Reveal
          delay={0.1}
          className="flex w-full max-w-[807px] flex-col items-center gap-4 text-center sm:gap-5 md:gap-6"
        >
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="font-inter text-[14px] font-medium leading-[1.5] text-gray-600 sm:text-[15px] md:text-[length:var(--heading-h6-medium-font-size)] md:leading-[var(--heading-h6-medium-line-height)]">
              What are you waiting for?
            </p>
            <p className="max-w-[640px] font-inter text-[14px] font-medium leading-[1.5] text-gray-600 sm:text-[15px] md:text-[length:var(--heading-h6-medium-font-size)] md:leading-[var(--heading-h6-medium-line-height)]">
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
