import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductImageCornerBadge } from "@/components/product/ProductImageCornerBadge";
import { variantCountLabel } from "@/lib/products";
import { productBadgeLabel } from "@/lib/productBadge";

type Props = {
  spotlight: Product;
  pair: [Product, Product];
};

export function ExploreMosaic({ spotlight, pair }: Props) {
  const [a, b] = pair;
  return (
    <section
      id="collections"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-1 md:aspect-auto md:min-h-[520px]">
            <Image
              src="/products/china-black.jpg"
              alt="Collection lifestyle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {[a, b].map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className={`flex flex-col bg-white md:col-span-1 md:row-span-2 ${
                index === 0
                  ? "md:col-start-3 md:row-start-1"
                  : "md:col-start-4 md:row-start-1"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-surface">
                <Image
                  src={product.images[0] ?? "/products/polene-biege.png"}
                  alt={product.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <ProductImageCornerBadge label={productBadgeLabel(product)} />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-semibold uppercase">
                  {product.name}
                </h3>
                <ProductPrice product={product} className="text-xs uppercase" />
                <p className="text-[10px] font-medium uppercase text-muted">
                  {variantCountLabel(product)}
                </p>
              </div>
            </Link>
          ))}

          <div className="relative aspect-[16/9] overflow-hidden bg-surface md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-3 md:aspect-auto md:min-h-[220px]">
            <Image
              src="/products/china-brown.jpg"
              alt="Model with small bag"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase underline underline-offset-8"
          >
            See all product
          </Link>
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Explore collections
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-3xl font-bold uppercase md:text-4xl">
              {spotlight.category} bags
            </p>
            <p className="mt-4 max-w-md text-xs uppercase leading-relaxed text-muted">
              Unveil a world of elegance with our curated collection of bags that
              suit every style and occasion.
            </p>
            <Link
              href={`/products/${spotlight.id}`}
              className="mt-6 inline-block text-xs font-semibold uppercase underline underline-offset-8"
            >
              See collections
            </Link>
          </div>
          <Link
            href={`/products/${spotlight.id}`}
            className="relative aspect-[4/3] w-full overflow-hidden bg-surface"
          >
            <Image
              src={spotlight.images[0] ?? "/products/polene-burgundy.png"}
              alt={spotlight.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <ProductImageCornerBadge label={productBadgeLabel(spotlight)} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/products/belt-blue.webp"
              alt="Handbag detail"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/products/belt-25.webp"
              alt="Quilted bag detail"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
