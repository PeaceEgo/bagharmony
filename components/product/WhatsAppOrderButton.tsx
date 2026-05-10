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
  const disabled = !product.inStock || !phone;

  const baseClass =
    className ??
    "block w-full bg-[#25D366] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#1ebe57] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600";

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        title={
          !phone
            ? "Set WHATSAPP_NUMBER in international format (e.g. 2349131399569)"
            : undefined
        }
        className={baseClass}
      >
        Order on WhatsApp
      </button>
    );
  }

  const href = buildWhatsAppUrl(phone, product, selected);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      onClick={() =>
        void track({
          type: "whatsapp_click",
          productId: product.id,
          path: pathname,
          source,
        })
      }
    >
      Order on WhatsApp
    </a>
  );
}
