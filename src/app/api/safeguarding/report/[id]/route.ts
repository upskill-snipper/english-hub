import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";

// ─── Request validation ─────────────────────────────────────────────────

const updateSchema = z.object({
  assignedTo: z.string().nullable().optional(),
  status: z.enum(["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"]).optional(),
  notes: z.string().max(5000).optional(),
});

// ─── PATCH /api/safeguarding/report/[id] ────────────────────────────────

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Auth check: must be ADMIN
    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── Rate limit: 30 per minute per user ────────────────────────────
    const rl = await rateLimit(`safeguarding-report:${authUser.id}`, { limit: 30, windowSeconds: 60 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }
    const sessionUserId = authUser.id;

    const user = await prisma.user.findUnique({
      where: { id: sessionUserId },
      select: { role: true },
    });

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden: Admin access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const parsed = updateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { assignedTo, status, notes } = parsed.data;

    // Check report exists
    const existing = await prisma.safeguardingReport.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Report not found" },
        { status: 404 }
      );
    }

    // Build update data
    const updateData: Record<string, unknown> = {};
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
    if (status) {
      updateData.status = status;
      if (status === "RESOLVED" || status === "CLOSED") {
        updateData.resolvedAt = new Date();
      }
    }

    // If notes provided, append to description with timestamp
    if (notes) {
      const timestamp = new Date().toISOString();
      const noteEntry = `\n\n--- Admin Note (${timestamp}) ---\n${notes}`;
      updateData.description = existing.description + noteEntry;
    }

    // Update the report
    const updated = await prisma.safeguardingReport.update({
      where: { id },
      data: updateData,
    });

    // Audit log
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    await prisma.auditLog.create({
      data: {
        userId: sessionUserId,
        action: "SAFEGUARDING_REPORT_UPDATED",
        resource: "safeguarding_report",
        resourceId: id,
        details: {
          changes: {
            ...(assignedTo !== undefined && { assignedTo }),
            ...(status && { status }),
            ...(notes && { notesAdded: true }),
          },
          previousStatus: existing.status,
        },
        ipAddress,
      },
    });

    return NextResponse.json({ success: true, report: updated });
  } catch (error) {
    console.error("[safeguarding] Update report error:", error);
    return NextResponse.json(
      { error: "Failed to update report" },
      { status: 500 }
    );
  }
}
