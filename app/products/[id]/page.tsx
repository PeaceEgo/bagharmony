import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";
import { getProductById, getProducts } from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getProducts().map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-xs uppercase text-muted">
          <Link href="/shop" className="underline underline-offset-4">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
