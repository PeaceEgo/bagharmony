"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { variantCountLabel } from "@/lib/products";
import { defaultSelection } from "@/lib/whatsapp";
import { ProductPrice } from "./ProductPrice";
import { ProductImageCornerBadge } from "./ProductImageCornerBadge";
import { WhatsAppOrderButton } from "./WhatsAppOrderButton";
import { productBadgeLabel } from "@/lib/productBadge";
import { track } from "@/lib/analytics";
import { useMemo } from "react";

type Props = {
  product: Product;
  source: string;
  priority?: boolean;
};

export function ProductCard({ product, source, priority }: Props) {
  const selected = useMemo(() => defaultSelection(product), [product]);
  const mainImage = product.images[0] ?? "/products/polene-burgundy.png";

  return (
    <article className="flex flex-col gap-3">
      <Link
        href={`/products/${product.id}`}
        className="group block"
        onClick={() =>
          void track({
            type: "product_click",
            productId: product.id,
            source,
          })
        }
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            priority={Boolean(priority)}
            loading={priority ? undefined : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition duration-200 group-hover:opacity-95"
          />
          <ProductImageCornerBadge label={productBadgeLabel(product)} />
        </div>
        <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide">
          {product.name}
        </h3>
        <ProductPrice
          product={product}
          className="mt-1 text-xs uppercase text-black"
        />
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted">
          {variantCountLabel(product)}
        </p>
      </Link>
      <WhatsAppOrderButton
        product={product}
        selected={selected}
        source={`card:${source}`}
        className="mt-1 w-full bg-[#25D366] px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-white hover:bg-[#1ebe57] disabled:bg-neutral-300"
      />
      {process.env.NODE_ENV === "development" && !process.env.WHATSAPP_NUMBER ? (
        <p className="text-[10px] text-red-600">
          Add WHATSAPP_NUMBER to enable WhatsApp.
        </p>
      ) : null}
    </article>
  );
}
