import Link from "next/link";
import { ShopProductGrid } from "@/components/shop/ShopProductGrid";
import { getProducts } from "@/lib/products";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category?.toLowerCase();
  const all = getProducts();
  const products = category
    ? all.filter((p) => p.category.toLowerCase() === category)
    : all;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-bold uppercase md:text-4xl">
            Shop products
          </h1>
          {category ? (
            <p className="text-xs uppercase text-muted">
              Filtering by{" "}
              <span className="font-semibold text-black">{category}</span> ·{" "}
              <Link href="/shop" className="underline underline-offset-4">
                Clear filter
              </Link>
            </p>
          ) : null}
        </div>
        <div className="mt-12">
          {products.length ? (
            <ShopProductGrid products={products} />
          ) : (
            <p className="text-center text-sm uppercase text-muted">
              No products in this category yet.
            </p>
          )}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/#new-arrivals"
            className="text-xs font-semibold uppercase underline underline-offset-8"
          >
            See all product
          </Link>
        </div>
      </div>
    </div>
  );
}
