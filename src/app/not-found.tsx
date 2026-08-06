import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white px-4">
      <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 text-center">
        <p className="font-inter text-sm font-semibold uppercase tracking-[0.12em] text-[#701e00]">
          404
        </p>
        <h1 className="font-inter text-[32px] font-extrabold leading-[1.2] text-[#111928] sm:text-[44px]">
          Page Not Found
        </h1>
        <p className="max-w-lg font-inter text-[15px] font-medium leading-[1.5] text-[#667185] sm:text-[18px]">
          Page you requested no dey here. Check URL or go back home.
        </p>
        <Link
          href="/"
          className="inline-flex h-auto rounded-lg bg-[#701e00] px-6 py-3.5 font-inter text-[14px] font-semibold text-white transition-colors hover:bg-[#5a1800]"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
}
