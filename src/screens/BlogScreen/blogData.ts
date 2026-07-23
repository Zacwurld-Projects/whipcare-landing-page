import type { StaticImageData } from "next/image";
import blogPostThumb from "@/assets/blog-detail-hero.png";
import blogDetailHero from "@/assets/blog-post-thumb.png";

export type BlogCategoryId =
  | "general"
  | "car"
  | "truck"
  | "motorcycle";

export type BlogArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  afterBullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  categoryId: BlogCategoryId;
  categoryLabel: string;
  title: string;
  excerpt: string;
  description: string;
  image: StaticImageData;
  heroImage: StaticImageData;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  content: BlogArticleSection[];
};

export const blogCategories = [
  { id: "all", label: "All", count: 90 },
  { id: "general", label: "General Vehicle Maintenance" },
  { id: "car", label: "Car Tips" },
  { id: "truck", label: "Truck Tips" },
  { id: "motorcycle", label: "Motorcycle Tips" },
] as const;

const waterDamageArticle: BlogArticleSection[] = [
  {
    id: "what-every-car-owner-needs-to-know",
    title: "What Every Car Owner Needs to Know About Water Damage",
    paragraphs: [
      "Water damage is one of the most silent and expensive threats your vehicle will ever face. Unlike a dent or a scratch, water damage doesn't always show up immediately; it hides inside your engine, creeps through your wiring, and quietly ruins parts you can't see until it's too late.",
      "Whether it's a flooded road, a heavy rainstorm, or a leaking sunroof, here's everything you need to know about how water affects your car and what to do about it.",
    ],
  },
  {
    id: "how-does-water-damage-happen",
    title: "How Does Water Damage Happen?",
    paragraphs: [
      "Water damage doesn't only happen during major floods. It can occur in ways most car owners never expect:",
    ],
    bullets: [
      "Driving through flooded roads or waterlogged streets",
      "Heavy and prolonged rainfall seeping through door seals or sunroofs",
      "Leaving windows down during a rainstorm",
      "A cracked windscreen or damaged weather stripping",
      "Parking in low-lying areas prone to flooding",
      "Car wash water finding its way into electrical components",
    ],
    afterBullets: [
      "The risk is greater than most people realise. Even a small amount of water in the wrong place can trigger a chain of damage that costs hundreds of thousands of naira to fix.",
    ],
  },
  {
    id: "how-to-protect-your-car",
    title: "How to Protect Your Car From Water Damage",
    paragraphs: [
      "Prevention is always cheaper than repair. Here's how to stay ahead of it:",
    ],
    bullets: [
      "Avoid flooded roads entirely — if you can't see the road surface, don't drive through it",
      "Check your door and window seals regularly - replace cracked or worn weather stripping",
      "Park on elevated ground during heavy rainfall warnings",
      "Service your sunroof drainage channels - they clog easily and redirect water into the cabin",
      "Get regular undercarriage inspections - a mechanic can spot early corrosion before it spreads",
      "Use Whipcare's predictive maintenance tool to stay on top of your vehicle's health before small issues become big ones",
    ],
  },
];

const createPost = (
  post: Omit<BlogPost, "content" | "readingTimeMinutes"> & {
    content?: BlogArticleSection[];
    readingTimeMinutes?: number;
  }
): BlogPost => ({
  ...post,
  content: post.content ?? waterDamageArticle,
  readingTimeMinutes:
    post.readingTimeMinutes ??
    Math.max(
      3,
      Math.ceil(
        waterDamageArticle.reduce(
          (count, section) =>
            count +
            section.paragraphs.join(" ").split(/\s+/).length +
            (section.bullets?.join(" ").split(/\s+/).length ?? 0) +
            (section.afterBullets?.join(" ").split(/\s+/).length ?? 0),
          0
        ) / 200
      )
    ),
});

export const blogPosts: BlogPost[] = [
  createPost({
    id: "1",
    slug: "water-vehicle-damages",
    categoryId: "general",
    categoryLabel: "General Vehicle Maintenance",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-11-12T09:00:00.000Z",
    updatedAt: "2025-11-12T09:00:00.000Z",
  }),
  createPost({
    id: "2",
    slug: "water-vehicle-damages-2",
    categoryId: "car",
    categoryLabel: "Car Tips",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-10-28T09:00:00.000Z",
    updatedAt: "2025-10-28T09:00:00.000Z",
  }),
  createPost({
    id: "3",
    slug: "water-vehicle-damages-3",
    categoryId: "car",
    categoryLabel: "Car Tips",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-10-15T09:00:00.000Z",
    updatedAt: "2025-10-15T09:00:00.000Z",
  }),
  createPost({
    id: "4",
    slug: "water-vehicle-damages-4",
    categoryId: "general",
    categoryLabel: "General Vehicle Maintenance",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-09-30T09:00:00.000Z",
    updatedAt: "2025-09-30T09:00:00.000Z",
  }),
  createPost({
    id: "5",
    slug: "water-vehicle-damages-5",
    categoryId: "car",
    categoryLabel: "Car Tips",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-09-18T09:00:00.000Z",
    updatedAt: "2025-09-18T09:00:00.000Z",
  }),
  createPost({
    id: "6",
    slug: "water-vehicle-damages-6",
    categoryId: "general",
    categoryLabel: "General Vehicle Maintenance",
    title: "Water Vehicle Damages",
    excerpt:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider a...",
    description:
      "Water and cars don't mix. Discover the hidden ways water damage silently destroys your vehicle and what steps to take the moment you suspect it.",
    image: blogPostThumb,
    heroImage: blogDetailHero,
    publishedAt: "2025-09-05T09:00:00.000Z",
    updatedAt: "2025-09-05T09:00:00.000Z",
  }),
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const current = getBlogPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.categoryId === current.categoryId
  );
  const others = blogPosts.filter(
    (post) =>
      post.slug !== slug && post.categoryId !== current.categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
};

export const getBlogWordCount = (post: BlogPost) =>
  post.content.reduce((count, section) => {
    const text = [
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.afterBullets ?? []),
    ].join(" ");

    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);
