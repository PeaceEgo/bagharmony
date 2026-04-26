import { NextResponse } from "next/server";

const MAX_BODY_BYTES = 48 * 1024;

export async function POST(req: Request) {
  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "payload_too_large" },
        { status: 413 },
      );
    }
    body = raw ? JSON.parse(raw) : null;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (
    !body ||
    typeof body !== "object" ||
    typeof (body as { type?: unknown }).type !== "string"
  ) {
    return NextResponse.json({ ok: false, error: "invalid_event" }, { status: 400 });
  }

  const payload = {
    ...(body as Record<string, unknown>),
    receivedAt: new Date().toISOString(),
  };

  console.info("[analytics]", JSON.stringify(payload));

  const webhook = process.env.ANALYTICS_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8_000),
      });
      if (!res.ok) {
        console.warn("[analytics] webhook non-OK", res.status, await res.text());
      }
    } catch (e) {
      console.warn("[analytics] webhook failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
