import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DeliveryMarquee } from "@/components/layout/DeliveryMarquee";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { PageView } from "@/components/analytics/PageView";
import { getStoreConfig } from "@/lib/store-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const store = getStoreConfig();

export const metadata: Metadata = {
  title: `${store.brandName} — ${store.tagline}`,
  description: store.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans" suppressHydrationWarning>
        <PageView />
        <SiteHeader />
        <DeliveryMarquee />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
