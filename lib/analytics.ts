export type AnalyticsEvent =
  | { type: "page_view"; path: string }
  | { type: "product_click"; productId: string; source: string }
  | { type: "whatsapp_click"; productId: string; path: string; source?: string }
  | { type: "whatsapp_floating_click"; path: string };

const endpoint = "/api/analytics";

export async function track(event: AnalyticsEvent): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...event,
        ts: Date.now(),
        href: window.location.href,
        referrer: document.referrer || undefined,
      }),
      keepalive: true,
    });
  } catch {
    /* non-blocking */
  }
}
