import { NextRequest, NextResponse } from "next/server";
import { getConsentHistory } from "@/lib/consent";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// ─── GET /api/consent/history ───────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit: 30 requests per minute per IP ──────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`consent-history:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = user.id;

    const history = await getConsentHistory(userId);

    return NextResponse.json({
      history: history.map((record) => ({
        id: record.id,
        consentType: record.consentType,
        version: record.version,
        granted: record.granted,
        grantedAt: record.grantedAt,
        withdrawnAt: record.withdrawnAt,
        method: record.method,
      })),
      totalRecords: history.length,
    });
  } catch (error) {
    console.error("GET /api/consent/history error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve consent history" },
      { status: 500 }
    );
  }
}
