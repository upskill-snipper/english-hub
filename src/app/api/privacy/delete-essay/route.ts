import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// DELETE /api/privacy/delete-essay
// Soft-deletes a specific essay belonging to the current user
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const body = await request.json();
    const essayId = body.essayId;

    if (!essayId || typeof essayId !== "string") {
      return NextResponse.json({ error: "essayId is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Find the essay and verify ownership
    const essay = await prisma.essay.findUnique({
      where: { id: essayId },
      select: { id: true, userId: true, deletedAt: true, title: true },
    });

    if (!essay) {
      return NextResponse.json({ error: "Essay not found" }, { status: 404 });
    }

    if (essay.userId !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (essay.deletedAt) {
      return NextResponse.json(
        { error: "This essay has already been deleted." },
        { status: 409 }
      );
    }

    // Soft delete the essay
    await prisma.essay.update({
      where: { id: essayId },
      data: { deletedAt: new Date() },
    });

    // Audit log
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "ESSAY_DELETED",
        resource: "Essay",
        resourceId: essayId,
        details: { title: essay.title },
        ipAddress: ip,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/privacy/delete-essay error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
