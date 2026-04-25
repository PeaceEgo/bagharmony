import { Hero } from "@/components/home/Hero";
import { ExploreMosaic } from "@/components/home/ExploreMosaic";
import { DualBanners } from "@/components/home/DualBanners";
import { NewArrivals } from "@/components/home/NewArrivals";
import { getProducts } from "@/lib/products";

export default function Home() {
  const products = getProducts();
  const [p0, p1, p2, ...rest] = products;
  const mosaicPair: [typeof p0, typeof p1] = [p0, p1];
  const spotlight = products.find((p) => p.id === "travel-utility") ?? p2;

  return (
    <>
      <Hero />
      <ExploreMosaic spotlight={spotlight} pair={mosaicPair} />
      <DualBanners />
      <NewArrivals products={rest.length ? rest : products} />
    </>
  );
}
