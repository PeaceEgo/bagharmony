import Image from "next/image";
import Link from "next/link";

const copy =
  "Unveil a world of elegance with our curated collection of bags that suit every style and occasion.";

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14">
        <h1 className="text-center text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Bagharmony
        </h1>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-6">
            <p className="max-w-sm text-xs uppercase leading-relaxed text-white/80 md:text-[11px]">
              {copy}
            </p>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#f2f2f2] md:mx-0">
              <Image
                src="/products/belt-black.webp"
                alt="Model with black belt bag"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-end md:pt-16">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#f2f2f2] md:mx-0">
              <Image
                src="/products/belt-25.webp"
                alt="Model with green belt bag"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-wide underline underline-offset-8"
            >
              Shop now
            </Link>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#f2f2f2] md:mx-0">
              <Image
                src="/products/belt-blue.webp"
                alt="Model with blue belt bag"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <a
          href="#collections"
          className="mt-12 flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-16"
        >
          <span
            aria-hidden
            className="block h-9 w-6 rounded-full border border-white/60"
          />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll down
          </span>
          <span className="sr-only">Jump to collections section</span>
        </a>
      </div>
    </section>
  );
}
