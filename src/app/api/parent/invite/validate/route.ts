import { NextRequest, NextResponse } from "next/server";
import { validateInviteCode } from "@/lib/parent-linking";
import { rateLimit } from "@/lib/rate-limit";

// ─── GET: Validate an invite code (public endpoint) ─────────────────────

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code");

    if (!code || code.length < 1 || code.length > 20) {
      return NextResponse.json(
        { error: "Invalid invite code." },
        { status: 400 }
      );
    }

    // ── Rate limit by IP to prevent enumeration ────────────────────────
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const rl = await rateLimit(`invite-validate:${ip}`, { limit: 5, windowSeconds: 3600 }); // 5 per hour per IP
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    // ── Validate the code ──────────────────────────────────────────────
    const result = await validateInviteCode(code);

    if (!result) {
      // Check if the code exists but is expired or used
      // We intentionally don't distinguish between invalid and expired
      // for the general case, but the invite page needs to know
      return NextResponse.json(
        { error: "This invite code is invalid or has expired." },
        { status: 410 }
      );
    }

    // Return limited info only (first initial only, school, no sensitive data)
    const studentDisplayName = `${result.student.firstName.charAt(0)}.`;
    return NextResponse.json({
      studentName: studentDisplayName,
      school: result.student.school,
      expiresAt: result.invite.expiresAt.toISOString(),
    });
  } catch (err) {
    console.error("[parent/invite/validate] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
