import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// POST /api/school/promo/validate
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── Rate limit: 20 checks per IP per minute ──────────────────────────────
  const ip = getClientIp(request.headers);
  const rl = await rateLimit(`promo-validate:${ip}`, {
    limit: 20,
    windowSeconds: 60,
  });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      }
    );
  }

  let body: { promoCode?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { promoCode } = body;

  if (!promoCode || typeof promoCode !== "string" || !promoCode.trim()) {
    return NextResponse.json(
      { error: "promoCode is required." },
      { status: 422 }
    );
  }

  const normalized = promoCode.trim().toUpperCase();

  // ── FOUNDER code — hardcoded special case ────────────────────────────────
  if (normalized === "FOUNDER") {
    return NextResponse.json({
      valid: true,
      discount: "100%",
      description: "Free access until August 2026",
      accessUntil: "2026-08-31",
    });
  }

  // ── Look up promo_codes table ────────────────────────────────────────────
  const admin = createServiceRoleClient();

  const { data: promo, error } = await admin
    .from("promo_codes")
    .select(
      "id, code, discount_percent, description, access_until, is_active, max_uses, uses"
    )
    .eq("code", normalized)
    .maybeSingle();

  if (error) {
    console.error("[promo/validate] DB error:", error);
    return NextResponse.json(
      { error: "Failed to validate promo code. Please try again." },
      { status: 500 }
    );
  }

  if (!promo || !promo.is_active) {
    return NextResponse.json({ valid: false, discount: "", description: "" });
  }

  if (promo.max_uses !== null && promo.uses >= promo.max_uses) {
    return NextResponse.json({
      valid: false,
      discount: "",
      description: "This promo code has reached its usage limit.",
    });
  }

  const discountLabel =
    promo.discount_percent != null
      ? `${promo.discount_percent}%`
      : "Discount applied";

  const response: {
    valid: boolean;
    discount: string;
    description: string;
    accessUntil?: string;
  } = {
    valid: true,
    discount: discountLabel,
    description: promo.description ?? "Promotional discount",
  };

  if (promo.access_until) {
    response.accessUntil = promo.access_until;
  }

  return NextResponse.json(response);
}
