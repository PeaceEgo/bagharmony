"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { variantCountLabel } from "@/lib/products";
import { ProductPrice } from "./ProductPrice";
import { ProductImageCornerBadge } from "./ProductImageCornerBadge";
import { WhatsAppOrderButton } from "./WhatsAppOrderButton";
import { productBadgeLabel } from "@/lib/productBadge";
import type { SelectedVariants } from "@/lib/whatsapp";
import { defaultSelection } from "@/lib/whatsapp";
import { buildWhatsAppMessage } from "@/lib/whatsapp";

type Props = { product: Product };

export function ProductDetail({ product }: Props) {
  const baseline = useMemo(() => defaultSelection(product), [product]);
  const [selected, setSelected] = useState<SelectedVariants>(baseline);
  const [activeImage, setActiveImage] = useState(0);

  if (!product.inStock) {
    return (
      <p className="text-sm uppercase text-muted">
        This style is currently unavailable.
      </p>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
          <Image
            src={
              product.images[activeImage] ??
              product.images[0] ??
              "/products/polene-burgundy.png"
            }
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <ProductImageCornerBadge label={productBadgeLabel(product)} />
        </div>
        {product.images.length > 1 ? (
          <div className="flex gap-2">
            {product.images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`relative h-16 w-16 overflow-hidden bg-surface ${
                  index === activeImage ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
          {product.category}
        </p>
        <h1 className="mt-2 text-3xl font-bold uppercase">{product.name}</h1>
        <ProductPrice product={product} className="mt-4 text-sm uppercase" />
        <p className="mt-2 text-[10px] font-medium uppercase text-muted">
          {variantCountLabel(product)}
        </p>

        <div className="mt-8 space-y-6">
          {product.variants.map((group) => (
            <div key={group.type}>
              <p className="text-xs font-semibold uppercase">{group.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const isActive = selected[group.type] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setSelected((prev) => ({
                          ...prev,
                          [group.type]: option.id,
                        }))
                      }
                      className={`border px-3 py-1 text-xs uppercase ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-black/15 text-black hover:border-black"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <WhatsAppOrderButton
            product={product}
            selected={selected}
            source="product_detail"
          />
          <div className="rounded border border-black/10 bg-surface/60 p-4 text-xs uppercase leading-relaxed text-muted">
            <p className="text-[10px] font-semibold text-black">Message preview</p>
            <pre className="mt-2 whitespace-pre-wrap font-sans text-[11px] normal-case text-black">
              {buildWhatsAppMessage(product, selected)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
