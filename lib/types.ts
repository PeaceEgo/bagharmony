export type VariantOption = {
  id: string;
  label: string;
};

export type ProductVariantGroup = {
  type: "color" | "size" | string;
  label: string;
  options: VariantOption[];
};

export type ProductBadge = "trending" | "new" | "popular";

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  variants: ProductVariantGroup[];
  inStock: boolean;
  /** Corner badge on product imagery. Defaults to "new" when omitted. */
  badge?: ProductBadge;
};
