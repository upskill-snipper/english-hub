import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// POST /api/privacy/delete-account
// Soft-deletes the user account with a 30-day grace period
export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 3 attempts per 15 minutes per IP ───────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`privacy-delete-account:${ip}`, {
      limit: 3,
      windowSeconds: 900,
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

    const body = await request.json();

    // Require typed confirmation
    if (body.confirmation !== "DELETE MY ACCOUNT") {
      return NextResponse.json(
        { error: "Please type DELETE MY ACCOUNT exactly to confirm." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email! },
      select: { id: true, accountStatus: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.accountStatus === "DELETED") {
      return NextResponse.json(
        { error: "Account is already scheduled for deletion." },
        { status: 409 }
      );
    }

    const deletedAt = new Date();

    // Soft delete: set status to DELETED, record deletedAt timestamp
    // A background job should permanently erase data after 30 days
    await prisma.user.update({
      where: { id: user.id },
      data: {
        accountStatus: "DELETED",
        deletedAt,
      },
    });

    // Create an erasure data request for tracking
    const dar = await prisma.dataAccessRequest.create({
      data: {
        userId: user.id,
        type: "ERASURE",
        status: "PENDING",
        responseDetails: JSON.stringify({
          requestedAt: deletedAt.toISOString(),
          gracePeriodEnds: new Date(
            deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
        }),
      },
    });

    // Audit log (ip already declared above for rate limiting)
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "ACCOUNT_DELETION_REQUESTED",
        resource: "User",
        resourceId: user.id,
        details: {
          gracePeriodEnds: new Date(
            deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
          erasureRequestId: dar.id,
        },
        ipAddress: ip,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        "Your account has been scheduled for deletion. You have 30 days to log back in and cancel. After that, all data will be permanently erased.",
      gracePeriodEnds: new Date(
        deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
    });
  } catch (error) {
    console.error("POST /api/privacy/delete-account error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
