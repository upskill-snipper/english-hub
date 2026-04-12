import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";

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

    const body = await request.json();
    const data = changePasswordSchema.parse(body);

    // Verify current password by attempting a sign-in with Supabase
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email!,
      password: data.currentPassword,
    });

    if (signInError) {
      return NextResponse.json(
        { error: "Current password is incorrect." },
        { status: 403 }
      );
    }

    // Update password via Supabase Auth
    const { error: updateError } = await supabase.auth.updateUser({
      password: data.newPassword,
    });

    if (updateError) {
      console.error("[Password POST] Supabase updateUser error:", updateError);
      return NextResponse.json(
        { error: "Failed to update password. Please try again." },
        { status: 500 }
      );
    }

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
