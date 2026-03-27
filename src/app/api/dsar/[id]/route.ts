import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { calculateDeadline, daysUntilDeadline } from "@/lib/dsar";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const prisma = new PrismaClient();

// ─── Validation ────────────────────────────────────────────────────────

const updateStatusSchema = z.object({
  status: z.enum(["PENDING", "PROCESSING", "COMPLETED", "REFUSED"]),
  responseDetails: z.string().max(5000).optional(),
});

// ─── GET /api/dsar/[id] — Get DSAR details ─────────────────────────────

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ── Rate limit: 30 requests per minute per IP ──────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`dsar-detail:${ip}`, {
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

    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const sessionUserId = authUser.id;

    const dsar = await prisma.dataAccessRequest.findUnique({
      where: { id },
    });

    if (!dsar) {
      return NextResponse.json(
        { error: "Data request not found" },
        { status: 404 }
      );
    }

    // Users can only view their own DSARs; admins can view any
    const user = await prisma.user.findUnique({
      where: { id: sessionUserId },
      select: { role: true },
    });

    if (dsar.userId !== sessionUserId && user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Not authorised to view this request" },
        { status: 403 }
      );
    }

    const deadline = calculateDeadline(dsar.requestedAt);
    const remaining = daysUntilDeadline(dsar.requestedAt);

    return NextResponse.json({
      id: dsar.id,
      userId: dsar.userId,
      type: dsar.type,
      status: dsar.status,
      requestedAt: dsar.requestedAt.toISOString(),
      completedAt: dsar.completedAt?.toISOString() ?? null,
      responseDetails: dsar.responseDetails,
      deadline: deadline.toISOString(),
      daysRemaining:
        dsar.status === "COMPLETED" || dsar.status === "REFUSED"
          ? null
          : remaining,
    });
  } catch (err) {
    console.error("[DSAR] Failed to get request:", err);
    return NextResponse.json(
      { error: "Failed to load data request." },
      { status: 500 }
    );
  }
}

// ─── PATCH /api/dsar/[id] — Update status (admin only) ─────────────────

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const sessionUserId = authUser.id;

    // Admin-only check
    const user = await prisma.user.findUnique({
      where: { id: sessionUserId },
      select: { role: true },
    });

    if (user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const parsed = updateStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { status, responseDetails } = parsed.data;

    const dsar = await prisma.dataAccessRequest.findUnique({
      where: { id },
    });

    if (!dsar) {
      return NextResponse.json(
        { error: "Data request not found" },
        { status: 404 }
      );
    }

    // Update the DSAR
    const updated = await prisma.dataAccessRequest.update({
      where: { id },
      data: {
        status,
        responseDetails: responseDetails ?? dsar.responseDetails,
        completedAt:
          status === "COMPLETED" || status === "REFUSED" ? new Date() : null,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        userId: sessionUserId,
        action: "DSAR_STATUS_UPDATED",
        resource: "DataAccessRequest",
        resourceId: id,
        details: {
          previousStatus: dsar.status,
          newStatus: status,
          targetUserId: dsar.userId,
        },
        ipAddress:
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          "unknown",
      },
    });

    return NextResponse.json({
      id: updated.id,
      status: updated.status,
      completedAt: updated.completedAt?.toISOString() ?? null,
      responseDetails: updated.responseDetails,
    });
  } catch (err) {
    console.error("[DSAR] Failed to update request:", err);
    return NextResponse.json(
      { error: "Failed to update data request." },
      { status: 500 }
    );
  }
}
