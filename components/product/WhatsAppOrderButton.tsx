"use client";

import type { Product } from "@/lib/types";
import type { SelectedVariants } from "@/lib/whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getWhatsAppNumber } from "@/lib/env";
import { track } from "@/lib/analytics";
import { usePathname } from "next/navigation";

type Props = {
  product: Product;
  selected: SelectedVariants;
  source?: string;
  className?: string;
};

export function WhatsAppOrderButton({
  product,
  selected,
  source,
  className,
}: Props) {
  const pathname = usePathname();
  const phone = getWhatsAppNumber();

  return (
    <button
      type="button"
      disabled={!product.inStock || !phone}
      title={
        !phone
          ? "Set NEXT_PUBLIC_WHATSAPP_NUMBER in your environment"
          : undefined
      }
      className={
        className ??
        "w-full bg-[#25D366] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#1ebe57] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600"
      }
      onClick={() => {
        if (!phone || !product.inStock) return;
        void track({
          type: "whatsapp_click",
          productId: product.id,
          path: pathname,
          source,
        });
        const url = buildWhatsAppUrl(phone, product, selected);
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      Order on WhatsApp
    </button>
  );
}
