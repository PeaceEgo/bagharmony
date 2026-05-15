import Image from "next/image";
import Link from "next/link";
import { getStoreConfig } from "@/lib/store-config";

export function DualBanners() {
  const [left, right] = getStoreConfig().dualBanners;

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2 md:px-6">
        {[left, right].map((banner) => (
          <Link
            key={banner.href}
            href={banner.href}
            className="group relative aspect-[4/3] overflow-hidden bg-surface"
          >
            <Image
              src={banner.image}
              alt={banner.imageAlt}
              fill
              loading="lazy"
              className="object-cover transition duration-200 group-hover:opacity-95"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 text-white">
              <div>
                <p className="font-sans text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                  {banner.title}
                </p>
                <p className="mt-1 max-w-xs text-[10px] uppercase text-white/80">
                  {banner.subtitle}
                </p>
              </div>
              <span className="text-[10px] font-semibold uppercase underline underline-offset-4">
                See collections
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
