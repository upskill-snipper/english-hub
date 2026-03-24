import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { hashPassword, verifyPassword } from "@/lib/auth";

// NOTE: Uncomment once Prisma is wired up:
// import { prisma } from "@/lib/prisma";

// ─── Validation ────────────────────────────────────────────────────────

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  });

// ─── Stub helpers (replace with real session lookup) ───────────────────

async function getSessionUserId(
  _cookieStore: Awaited<ReturnType<typeof cookies>>
): Promise<string | null> {
  // TODO: Replace with real session validation
  return "stub-user-id";
}

// Stub password hash for "Password1" — replace with DB lookup
const STUB_PASSWORD_HASH =
  "$2a$12$LJ3m4ys.USx/lQr5YP4Yz.vGxGHhPjKMKs8GHm9jGlR1FD7rXTi6";

// ─── POST /api/user/password ───────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = await getSessionUserId(cookieStore);

    if (!userId) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const data = changePasswordSchema.parse(body);

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    // TODO: Replace with real DB query:
    // const user = await prisma.user.findUnique({
    //   where: { id: userId, accountStatus: "ACTIVE" },
    //   select: { id: true, passwordHash: true },
    // });
    // if (!user) {
    //   return NextResponse.json({ message: "User not found" }, { status: 404 });
    // }
    // const currentHash = user.passwordHash;
    const currentHash = STUB_PASSWORD_HASH;

    // Verify current password
    const isCurrentValid = await verifyPassword(
      data.currentPassword,
      currentHash
    );
    if (!isCurrentValid) {
      return NextResponse.json(
        { message: "Current password is incorrect." },
        { status: 403 }
      );
    }

    // Hash new password
    const newHash = await hashPassword(data.newPassword);

    // TODO: Replace with real DB transaction:
    // await prisma.$transaction(async (tx) => {
    //   await tx.user.update({
    //     where: { id: userId },
    //     data: { passwordHash: newHash },
    //   });
    //
    //   // Audit log
    //   await tx.auditLog.create({
    //     data: {
    //       userId,
    //       action: "PASSWORD_CHANGED",
    //       resource: "user",
    //       resourceId: userId,
    //       details: { method: "self_service" },
    //       ipAddress: ip,
    //     },
    //   });
    //
    //   // Optionally invalidate other sessions:
    //   // await tx.session.deleteMany({
    //   //   where: { userId, token: { not: currentSessionToken } },
    //   // });
    // });

    return NextResponse.json({
      message: "Password changed successfully.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of error.issues) {
        const key = issue.path.join(".");
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(issue.message);
      }
      return NextResponse.json(
        { message: "Validation failed", errors: fieldErrors },
        { status: 400 }
      );
    }

    console.error("[Password POST] Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
