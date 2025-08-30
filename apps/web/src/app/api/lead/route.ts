import { NextResponse, type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
import { z } from "zod";

// Simple in-memory rate limiter (per runtime instance)
const windowMs = 10 * 60 * 1000; // 10 minutes
const maxHits = 8;
const hits = new Map<string, number[]>();

function rateLimit(key: string): boolean {
  const now = Date.now();
  const arr = hits.get(key) ?? [];
  const recent = arr.filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length <= maxHits;
}

const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  message: z.string().max(2000).optional(),
  // hCaptcha field if present
  "h-captcha-response": z.string().optional(),
});

export async function GET() {
  // Issue a CSRF token cookie for double-submit pattern
  const token = crypto.randomUUID();
  cookies().set("csrfToken", token, { httpOnly: false, sameSite: "lax", secure: true, path: "/" });
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  if (!rateLimit(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  // Basic CSRF and origin checks
  const hdrs = headers();
  const origin = hdrs.get("origin");
  const host = hdrs.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ error: "Bad origin" }, { status: 400 });
  }
  const headerToken = hdrs.get("x-csrf-token");
  const cookieToken = cookies().get("csrfToken")?.value;
  if (!headerToken || !cookieToken || headerToken !== cookieToken) {
    return NextResponse.json({ error: "CSRF" }, { status: 400 });
  }

  // Parse body as FormData for hCaptcha compatibility
  const form = await req.formData();
  const data = Object.fromEntries(form) as Record<string, string>;
  const parse = LeadSchema.safeParse(data);
  if (!parse.success) {
    return NextResponse.json({ error: "Validation", details: parse.error.flatten() }, { status: 400 });
  }
  const lead = parse.data;

  // Optional: hCaptcha verification if secret provided
  const secret = process.env.HCAPTCHA_SECRET;
  if (secret) {
    const resp = lead["h-captcha-response"];
    if (!resp) return NextResponse.json({ error: "captcha" }, { status: 400 });
    const ver = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: resp }),
      cache: "no-store",
    }).then((r) => r.json() as Promise<{ success: boolean }>);
    if (!ver.success) return NextResponse.json({ error: "captcha" }, { status: 400 });
  }

  // TODO: persist lead safely (e.g., queue or email)

  return NextResponse.json({ ok: true });
}

