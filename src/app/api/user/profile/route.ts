import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";

// ─── Validation ────────────────────────────────────────────────────────

const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long")
    .optional(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long")
    .optional(),
  full_name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .optional(),
  school_name: z.string().max(200, "School name is too long").nullable().optional(),
  year_group: z.string().max(20).nullable().optional(),
});

// ─── GET /api/user/profile ─────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit: 60 requests per minute per IP ──────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`profile:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
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

    // Fetch profile from Supabase profiles table
    const admin = createServiceRoleClient();
    const { data: profile, error: profileError } = await admin
      .from("profiles")
      .select("id, email, full_name, role, year_group, exam_board, school_name, subscription_status, subscription_end_date, date_of_birth, created_at, updated_at")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      // If no profile row exists, return basic info from auth
      return NextResponse.json({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name ?? null,
        role: "student",
        year_group: null,
        exam_board: null,
        school_name: null,
        subscription_status: "free",
        created_at: user.created_at,
      });
    }

    return NextResponse.json({
      id: profile.id,
      email: profile.email,
      full_name: profile.full_name,
      role: profile.role,
      year_group: profile.year_group,
      exam_board: profile.exam_board,
      school_name: profile.school_name,
      subscription_status: profile.subscription_status,
      subscription_end_date: profile.subscription_end_date,
      created_at: profile.created_at,
    });
  } catch (error) {
    console.error("[Profile GET] Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// ─── PATCH /api/user/profile ───────────────────────────────────────────

export async function PATCH(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`profile-update:${ip}`, {
      limit: 20,
      windowSeconds: 60,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
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
    const data = updateProfileSchema.parse(body);

    // Must provide at least one field to update
    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { error: "No fields provided to update." },
        { status: 400 }
      );
    }

    // Build update object — only include fields that were provided
    const updateData: Record<string, unknown> = {};
    if (data.full_name !== undefined) updateData.full_name = data.full_name;
    if (data.firstName !== undefined && data.lastName !== undefined) {
      updateData.full_name = `${data.firstName} ${data.lastName}`;
    }
    if (data.school_name !== undefined) updateData.school_name = data.school_name;
    if (data.year_group !== undefined) updateData.year_group = data.year_group;

    const admin = createServiceRoleClient();
    const { data: updatedProfile, error: updateError } = await admin
      .from("profiles")
      .update(updateData)
      .eq("id", user.id)
      .select("id, email, full_name, role, year_group, exam_board, school_name, subscription_status")
      .single();

    if (updateError) {
      console.error("[Profile PATCH] Supabase update error:", updateError);
      return NextResponse.json(
        { error: "Failed to update profile." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updatedProfile,
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

    console.error("[Profile PATCH] Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
