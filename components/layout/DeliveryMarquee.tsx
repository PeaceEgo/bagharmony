const SEGMENTS = 10;

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
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
          Fast delivery in Lagos
        </span>
      ))}
    </div>
  );
}

export function DeliveryMarquee() {
  return (
    <div className="border-b border-white/10 bg-neutral-900 py-2">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <MarqueeTrack />
          <MarqueeTrack ariaHidden />
        </div>
      </div>
    </div>
  );
}
