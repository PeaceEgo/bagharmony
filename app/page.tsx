import { Hero } from "@/components/home/Hero";
import { ExploreMosaic } from "@/components/home/ExploreMosaic";
import { DualBanners } from "@/components/home/DualBanners";
import { NewArrivals } from "@/components/home/NewArrivals";
import { getProducts } from "@/lib/products";
import { getStoreConfig } from "@/lib/store-config";

export default function Home() {
  const store = getStoreConfig();
  const products = getProducts();
  const [p0, p1, p2, ...rest] = products;
  const mosaicPair: [typeof p0, typeof p1] = [p0, p1];
  const spotlight =
    products.find((p) => p.id === store.spotlightProductId) ?? p2;

  return (
    <>
      <Hero />
      <ExploreMosaic spotlight={spotlight} pair={mosaicPair} />
      <DualBanners />
      <NewArrivals products={rest.length ? rest : products} />
    </>
  );
}
