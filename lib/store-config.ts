import storeJson from "@/data/store.json";

/**
 * Vendor branding and landing-page media live in `data/store.json`.
 * Product catalog: `data/products.json` (add images under `public/`, e.g. `public/products/...`).
 */
export type DualBannerConfig = {
  href: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export type StoreConfig = {
  brandName: string;
  tagline: string;
  description: string;
  /** Path under `public/`, e.g. `/brand/logo.png`. Leave empty to show the brand name as text. */
  logoPath: string;
  logoAlt: string;
  hero: {
    /** If empty, the hero uses `brandName`. */
    headline: string;
    intro: string;
    images: [string, string, string];
    imageAlts: [string, string, string];
  };
  marquee: string;
  dualBanners: [DualBannerConfig, DualBannerConfig];
  exploreMosaic: {
    largeImage: string;
    largeImageAlt: string;
    /** Wide image in the mosaic grid (between product tiles and spotlight). */
    middleImage: string;
    middleImageAlt: string;
    detailImages: [string, string];
    detailAlts: [string, string];
    spotlightIntro: string;
    /** Shown after the spotlight category, e.g. "travel bags" → suffix `bags`. */
    spotlightHeadingSuffix: string;
  };
  /** Featured product for the explore section; must match an `id` in `data/products.json`. */
  spotlightProductId: string;
};

const store = storeJson as StoreConfig;

export function getStoreConfig(): StoreConfig {
  return store;
}
