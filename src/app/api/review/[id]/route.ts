import { NextRequest, NextResponse } from "next/server";
import { reviews } from "../store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// ---------------------------------------------------------------------------
// GET /api/review/[id] — get a specific review request by reference number
// ---------------------------------------------------------------------------

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // ── Auth: require authenticated user ──────────────────────────────────
  const supabase = createServerSupabaseClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Rate limit: 30 requests per minute per IP ─────────────────────────
  const ip = getClientIp(request.headers);
  const rl = await rateLimit(`review-detail:${ip}`, {
    limit: 30,
    windowSeconds: 60,
  });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
    );
  }

  const { id } = await params;

  // Only return the review if it belongs to the authenticated user
  const review = reviews.find(
    (r) => r.referenceNumber === id && r.userId === user.id
  );

  if (!review) {
    return NextResponse.json(
      { error: "Review request not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(review);
}
