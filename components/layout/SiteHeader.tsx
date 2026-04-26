import Link from "next/link";
import { useId, useState } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/#collections", label: "Collections" },
  { href: "/#new-arrivals", label: "New arrivals" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-black"
        >
          Bagharmony
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-3 py-2 text-xs font-medium uppercase tracking-wide text-black md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-wide text-black md:flex">
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
      <div
        id={menuId}
        className={open ? "md:hidden" : "hidden md:hidden"}
      >
        <nav className="mx-auto max-w-6xl px-4 pb-4 md:px-6">
          <div className="grid gap-2 rounded-lg border border-black/10 bg-white p-2 text-xs font-medium uppercase tracking-wide text-black">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 underline-offset-4 hover:bg-black/5 hover:underline"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
