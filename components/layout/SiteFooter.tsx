import Link from "next/link";
import { getStoreConfig } from "@/lib/store-config";

const company = ["Contact us", "FAQ's", "Order lookup", "Returns"];
const about = ["Careers", "News & blog", "Press center", "Suppliers"];
const social = ["Facebook", "Instagram", "(X) Twitter", "LinkedIn"];

export function SiteFooter() {
  const store = getStoreConfig();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-center text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
          {store.brandName}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wide">
              Newsletter
            </p>
            <div className="mt-4 flex border border-white">
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs uppercase outline-none placeholder:text-white/50"
              />
              <button
                type="button"
                className="border-l border-white px-3 text-xs font-semibold uppercase"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-xs uppercase text-white/80">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide">
              About us
            </p>
            <ul className="mt-4 space-y-2 text-xs uppercase text-white/80">
              {about.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide">
              Follow us
            </p>
            <ul className="mt-4 space-y-2 text-xs uppercase text-white/80">
              {social.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-[10px] uppercase tracking-wide text-white/60">
          © {new Date().getFullYear()} {store.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
