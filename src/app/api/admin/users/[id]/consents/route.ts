import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin, AdminAuthError } from "@/lib/admin";

// ─── GET /api/admin/users/[id]/consents ─────────────────────────────────
// Returns the full consent history for a user. Requires ADMIN role.

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();

    const { id } = await params;

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Get full consent history (append-only, ordered chronologically)
    const consents = await prisma.consent.findMany({
      where: { userId: id },
      orderBy: { grantedAt: "desc" },
    });

    const formattedConsents = consents.map((c) => ({
      id: c.id,
      consentType: c.consentType,
      version: c.version,
      granted: c.granted,
      grantedAt: c.grantedAt.toISOString(),
      withdrawnAt: c.withdrawnAt?.toISOString() ?? null,
      method: c.method,
      ipAddress: c.ipAddress,
    }));

    return NextResponse.json({
      userId: user.id,
      userName: `${user.firstName} ${user.lastName}`,
      userEmail: user.email,
      consents: formattedConsents,
      total: formattedConsents.length,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    console.error("GET /api/admin/users/[id]/consents error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
