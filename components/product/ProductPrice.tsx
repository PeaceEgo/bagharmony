import type { Product } from "@/lib/types";
import { discountPercent } from "@/lib/products";
import { formatUsd } from "@/lib/format";

type Props = { product: Product; className?: string };

export function ProductPrice({ product, className }: Props) {
  const pct = discountPercent(product);
  return (
    <p className={className}>
      <span className="font-semibold text-black">{formatUsd(product.price)}</span>
      {product.compareAtPrice && pct ? (
        <>
          <span className="ml-2 text-muted line-through">
            {formatUsd(product.compareAtPrice)}
          </span>
          <span className="ml-2 text-xs font-semibold text-muted">
            {pct}% off
          </span>
        </>
      ) : null}
    </p>
  );
}
