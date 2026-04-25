import Image from "next/image";
import Link from "next/link";

export function DualBanners() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2 md:px-6">
        <Link
          href="/shop?category=hand"
          className="group relative aspect-[4/3] overflow-hidden bg-surface"
        >
          <Image
            src="/products/china-black.jpg"
            alt="Handbags collection"
            fill
            loading="lazy"
            className="object-cover transition duration-200 group-hover:opacity-95"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 text-white">
            <div>
              <p className="font-sans text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                Handbags
              </p>
              <p className="mt-1 max-w-xs text-[10px] uppercase text-white/80">
                Unveil a world of elegance — structured silhouettes for every day.
              </p>
            </div>
            <span className="text-[10px] font-semibold uppercase underline underline-offset-4">
              See collections
            </span>
          </div>
        </Link>
        <Link
          href="/shop?category=crossbody"
          className="group relative aspect-[4/3] overflow-hidden bg-surface"
        >
          <Image
            src="/products/athena-5600.jpg"
            alt="Crossbody collection"
            fill
            loading="lazy"
            className="object-cover transition duration-200 group-hover:opacity-95"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 text-white">
            <div>
              <p className="font-sans text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                Crossbody
              </p>
              <p className="mt-1 max-w-xs text-[10px] uppercase text-white/80">
                Hands-free movement with refined hardware and soft leathers.
              </p>
            </div>
            <span className="text-[10px] font-semibold uppercase underline underline-offset-4">
              See collections
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
