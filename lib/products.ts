import type { Product } from "./types";
import productsJson from "@/data/products.json";

const products = productsJson as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export function variantCountLabel(product: Product): string {
  const colorGroup = product.variants.find((v) => v.type === "color");
  const n = colorGroup?.options.length ?? 0;
  return `${n} COLOR${n === 1 ? "" : "S"}`;
}

export function discountPercent(product: Product): number | null {
  if (!product.compareAtPrice || product.compareAtPrice <= product.price) {
    return null;
  }
  return Math.round(
    (1 - product.price / product.compareAtPrice) * 100,
  );
}
