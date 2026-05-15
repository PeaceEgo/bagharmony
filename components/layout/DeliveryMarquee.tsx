import { getStoreConfig } from "@/lib/store-config";

const SEGMENTS = 10;

function MarqueeTrack({
  ariaHidden,
  text,
}: {
  ariaHidden?: boolean;
  text: string;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 px-6"
      aria-hidden={ariaHidden ? true : undefined}
    >
      {Array.from({ length: SEGMENTS }, (_, i) => (
        <span
          key={i}
          className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] text-white/95"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export function DeliveryMarquee() {
  const { marquee } = getStoreConfig();
  return (
    <div className="border-b border-white/10 bg-neutral-900 py-2">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <MarqueeTrack text={marquee} />
          <MarqueeTrack ariaHidden text={marquee} />
        </div>
      </div>
    </div>
  );
}
