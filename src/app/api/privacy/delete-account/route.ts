import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// POST /api/privacy/delete-account
// Soft-deletes the user account with a 30-day grace period
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
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
      where: { email: session.user.email },
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

    // Audit log
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

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
