import type { Product } from "./types";

export type SelectedVariants = Record<string, string>;

function formatMoney(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);
}

function variantSummary(
  product: Product,
  selected: SelectedVariants,
): string {
  const parts: string[] = [];
  for (const group of product.variants) {
    const value = selected[group.type];
    if (value) {
      const opt = group.options.find((o) => o.id === value);
      parts.push(`${group.label}: ${opt?.label ?? value}`);
    }
  }
  return parts.length ? parts.join(" | ") : "Variant: not specified";
}

export function buildWhatsAppMessage(
  product: Product,
  selected: SelectedVariants,
): string {
  const priceLine = formatMoney(product.price);
  const variantsLine = variantSummary(product, selected);
  return [
    `Hi! I'd like to order:`,
    ``,
    `Product: ${product.name}`,
    `Price: ${priceLine}`,
    `${variantsLine}`,
    ``,
    `Please confirm availability. Thank you!`,
  ].join("\n");
}

function buildWaMeUrl(phoneE164: string, text: string): string {
  const digits = phoneE164.replace(/\D/g, "");
  // api.whatsapp.com matches Meta's click-to-chat docs and tends to open more
  // reliably in WhatsApp Desktop than wa.me + popup-style window.open().
  return `https://api.whatsapp.com/send?${new URLSearchParams({
    phone: digits,
    text,
  }).toString()}`;
}

export function buildWhatsAppUrl(
  phoneE164: string,
  product: Product,
  selected: SelectedVariants,
): string {
  return buildWaMeUrl(phoneE164, buildWhatsAppMessage(product, selected));
}

/** General inquiry when no product is selected (e.g. floating contact button). */
export function buildWhatsAppInquiryUrl(phoneE164: string): string {
  return buildWaMeUrl(
    phoneE164,
    "Hi! I'm browsing Bagharmony and would like more information.",
  );
}

export function defaultSelection(product: Product): SelectedVariants {
  const out: SelectedVariants = {};
  for (const group of product.variants) {
    const first = group.options[0];
    if (first) out[group.type] = first.id;
  }
  return out;
}
