type Props = { label: string };

export function ProductImageCornerBadge({ label }: Props) {
  return (
    <span className="pointer-events-none absolute right-2 top-2 z-10 max-w-[calc(100%-1rem)] truncate rounded bg-black px-2 py-0.5 text-[9px] font-bold uppercase leading-tight tracking-wide text-white shadow-sm ring-1 ring-white/25">
      {label}
    </span>
  );
}
