import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import {
  generateDSARReference,
  calculateDeadline,
  buildAcknowledgementEmail,
  type DSARType,
} from "@/lib/dsar";
import { sendEmail } from "@/lib/email";

const prisma = new PrismaClient();

// ─── Validation ────────────────────────────────────────────────────────

const createDSARSchema = z.object({
  type: z.enum(["ACCESS", "PORTABILITY", "ERASURE", "RECTIFICATION"]),
  details: z.string().max(2000).optional(),
});

// ─── POST /api/dsar — Create a new DSAR ────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // TODO: Replace with actual session/auth check
    const sessionUserId = request.headers.get("x-user-id");
    if (!sessionUserId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const parsed = createDSARSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { type, details } = parsed.data;

    // Look up user
    const user = await prisma.user.findUnique({
      where: { id: sessionUserId },
      select: { id: true, email: true, firstName: true, accountStatus: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Prevent duplicate pending requests of the same type
    const existingPending = await prisma.dataAccessRequest.findFirst({
      where: {
        userId: sessionUserId,
        type: type,
        status: { in: ["PENDING", "PROCESSING"] },
      },
    });

    if (existingPending) {
      return NextResponse.json(
        {
          error: `You already have a pending ${type} request (submitted ${existingPending.requestedAt.toLocaleDateString("en-GB")}). Please wait for it to be processed.`,
        },
        { status: 409 }
      );
    }

    // Generate reference and calculate deadline
    const referenceNumber = generateDSARReference();
    const now = new Date();
    const deadline = calculateDeadline(now);

    // Create the DSAR record
    const dsar = await prisma.dataAccessRequest.create({
      data: {
        userId: sessionUserId,
        type: type,
        status: "PENDING",
        responseDetails: details ?? null,
      },
    });

    // Create audit log entry
    await prisma.auditLog.create({
      data: {
        userId: sessionUserId,
        action: "DSAR_CREATED",
        resource: "DataAccessRequest",
        resourceId: dsar.id,
        details: {
          type,
          referenceNumber,
          deadline: deadline.toISOString(),
        },
        ipAddress:
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          "unknown",
      },
    });

    // Send acknowledgement email
    const emailContent = buildAcknowledgementEmail(
      user.firstName,
      referenceNumber,
      type as DSARType,
      deadline
    );

    await sendEmail(user.email, emailContent.subject, emailContent.html);

    return NextResponse.json(
      {
        id: dsar.id,
        referenceNumber,
        type: dsar.type,
        status: dsar.status,
        requestedAt: dsar.requestedAt.toISOString(),
        deadline: deadline.toISOString(),
        deadlineFormatted: deadline.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[DSAR] Failed to create request:", err);
    return NextResponse.json(
      { error: "Failed to create data request. Please try again." },
      { status: 500 }
    );
  }
}

// ─── GET /api/dsar — List user's DSARs ─────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // TODO: Replace with actual session/auth check
    const sessionUserId = request.headers.get("x-user-id");
    if (!sessionUserId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const dsars = await prisma.dataAccessRequest.findMany({
      where: { userId: sessionUserId },
      orderBy: { requestedAt: "desc" },
    });

    const results = dsars.map((d) => {
      const deadline = calculateDeadline(d.requestedAt);
      const now = new Date();
      const daysRemaining = Math.ceil(
        (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      return {
        id: d.id,
        type: d.type,
        status: d.status,
        requestedAt: d.requestedAt.toISOString(),
        completedAt: d.completedAt?.toISOString() ?? null,
        deadline: deadline.toISOString(),
        daysRemaining: d.status === "COMPLETED" || d.status === "REFUSED" ? null : daysRemaining,
      };
    });

    return NextResponse.json({ requests: results });
  } catch (err) {
    console.error("[DSAR] Failed to list requests:", err);
    return NextResponse.json(
      { error: "Failed to load data requests." },
      { status: 500 }
    );
  }
}
