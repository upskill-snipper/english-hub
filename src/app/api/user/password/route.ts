import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";

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

// Stub password hash for "Password1" — replace with DB lookup
const STUB_PASSWORD_HASH =
  "$2a$12$LJ3m4ys.USx/lQr5YP4Yz.vGxGHhPjKMKs8GHm9jGlR1FD7rXTi6";

// ─── POST /api/user/password ───────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 5 attempts per 15 minutes per IP ───────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`password-change:${ip}`, {
      limit: 5,
      windowSeconds: 900,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many password change attempts. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const userId = user.id;

    const body = await request.json();
    const data = changePasswordSchema.parse(body);

    // ip already declared above for rate limiting

    // TODO(Phase-7): Replace STUB_PASSWORD_HASH with Supabase auth password verification
    // const user = await prisma.user.findUnique({
    //   where: { id: userId, accountStatus: "ACTIVE" },
    //   select: { id: true, passwordHash: true },
    // });
    // if (!user) {
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
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
        { error: "Current password is incorrect." },
        { status: 403 }
      );
    }

    // Hash new password
    const newHash = await hashPassword(data.newPassword);

    // TODO(Phase-7): Replace stub with supabase.auth.admin.updateUserById for password update + audit log insert
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
        { error: "Validation failed", errors: fieldErrors },
        { status: 400 }
      );
    }

    console.error("[Password POST] Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
