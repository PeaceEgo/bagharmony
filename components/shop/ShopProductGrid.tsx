import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductImageCornerBadge } from "@/components/product/ProductImageCornerBadge";
import { productBadgeLabel } from "@/lib/productBadge";

type Props = { products: Product[] };

export function ShopProductGrid({ products }: Props) {
  if (!products.length) return null;

  const [hero, ...rest] = products;
  const row1 = rest.slice(0, 4);
  const row2 = rest.slice(4, 6);

  return (
    <div className="space-y-10">
      {row1.length ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              source="shop_row1"
              priority={i < 2}
            />
          ))}
        </div>
      ) : null}

      {hero || row2.length ? (
        <div className="grid gap-8 lg:grid-cols-2">
          {hero ? (
            <Link
              href={`/products/${hero.id}`}
              className="relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[360px]"
            >
              <Image
                src={
                  hero.images[1] ?? hero.images[0] ?? "/products/china-black.jpg"
                }
                alt={hero.name}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <ProductImageCornerBadge label={productBadgeLabel(hero)} />
            </Link>
          ) : null}
          <div className="grid gap-8 sm:grid-cols-2">
            {row2.map((p) => (
              <ProductCard key={p.id} product={p} source="shop_row2" />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
