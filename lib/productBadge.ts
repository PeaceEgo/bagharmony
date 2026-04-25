import type { Product, ProductBadge } from "./types";

const LABELS: Record<ProductBadge, string> = {
  trending: "🔥 Trending",
  new: "New",
  popular: "Popular",
};

/** Default badge when `product.badge` is omitted: "New". */
export function productBadgeLabel(product: Product): string {
  const key: ProductBadge = product.badge ?? "new";
  return LABELS[key];
}
