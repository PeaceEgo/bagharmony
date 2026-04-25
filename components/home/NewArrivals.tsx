import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

type Props = { products: Product[] };

export function NewArrivals({ products }: Props) {
  return (
    <section id="new-arrivals" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase underline underline-offset-8"
          >
            See all collection
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold uppercase tracking-[0.35em] md:text-4xl">
          New arrivals
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              source="new_arrivals"
              priority={i < 4}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase underline underline-offset-8"
          >
            See all product
          </Link>
        </div>
      </div>
    </section>
  );
}
