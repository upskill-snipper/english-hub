import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// POST /api/privacy/export
// Creates a data access / portability request and logs to audit trail
export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 5 exports per hour per IP ──────────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`privacy-export:${ip}`, {
      limit: 5,
      windowSeconds: 3600,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email! },
      select: { id: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();
    const format = body.format === "PDF" ? "PDF" : "JSON";

    // Check for an existing pending/processing request to avoid spam
    const existing = await prisma.dataAccessRequest.findFirst({
      where: {
        userId: user.id,
        type: "PORTABILITY",
        status: { in: ["PENDING", "PROCESSING"] },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "You already have a pending export request. Please wait for it to complete." },
        { status: 409 }
      );
    }

    // Create the data access request
    const dar = await prisma.dataAccessRequest.create({
      data: {
        userId: user.id,
        type: "PORTABILITY",
        status: "PENDING",
        responseDetails: JSON.stringify({ format, requestedAt: new Date().toISOString() }),
      },
    });

    // Audit log (ip already declared above for rate limiting)
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "DATA_EXPORT_REQUESTED",
        resource: "DataAccessRequest",
        resourceId: dar.id,
        details: { format, email: user.email },
        ipAddress: ip,
      },
    });

    return NextResponse.json({
      success: true,
      requestId: dar.id,
      message: `Your ${format} export has been requested. You'll receive a download link at ${user.email} within 48 hours.`,
    });
  } catch (error) {
    console.error("POST /api/privacy/export error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
