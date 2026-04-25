import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/#collections", label: "Collections" },
  { href: "/#new-arrivals", label: "New arrivals" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-black"
        >
          Bagharmony
        </Link>
        <nav className="flex items-center gap-6 text-xs font-medium uppercase tracking-wide text-black">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
