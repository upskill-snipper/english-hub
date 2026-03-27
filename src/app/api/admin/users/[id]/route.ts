import { NextRequest, NextResponse } from "next/server";
import {
  requireAdmin,
  getUserDetails,
  suspendUser,
  unsuspendUser,
  processAccountDeletion,
  AdminAuthError,
} from "@/lib/admin";

// ─── GET /api/admin/users/[id] ──────────────────────────────────────────
// Returns full user details for admin viewing.

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();

    const { id } = await params;
    const user = await getUserDetails(id);

    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    console.error("GET /api/admin/users/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ─── PATCH /api/admin/users/[id] ────────────────────────────────────────
// Updates user status (suspend / unsuspend).

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const { action, reason } = body as { action?: string; reason?: string };

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (action === "suspend") {
      if (!reason || typeof reason !== "string" || reason.trim().length === 0) {
        return NextResponse.json(
          { error: "A reason is required for suspension" },
          { status: 400 }
        );
      }
      if (reason.length > 2000) {
        return NextResponse.json(
          { error: "Reason must be 2000 characters or fewer" },
          { status: 400 }
        );
      }
      await suspendUser(id, reason.trim(), admin.id, ip);
      return NextResponse.json({
        success: true,
        message: "User has been suspended",
      });
    }

    if (action === "unsuspend") {
      await unsuspendUser(id, admin.id, ip);
      return NextResponse.json({
        success: true,
        message: "User has been unsuspended",
      });
    }

    return NextResponse.json(
      { error: "Invalid action. Use 'suspend' or 'unsuspend'." },
      { status: 400 }
    );
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    console.error("PATCH /api/admin/users/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ─── DELETE /api/admin/users/[id] ───────────────────────────────────────
// Triggers soft deletion (anonymisation) of a user account.

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    await processAccountDeletion(id, admin.id, ip);

    return NextResponse.json({
      success: true,
      message: "Account has been deleted and personal data anonymised",
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    console.error("DELETE /api/admin/users/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
