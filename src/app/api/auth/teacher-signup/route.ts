import { NextRequest, NextResponse } from "next/server";
import {
  teacherRegistrationSchema,
  hashPassword,
  generateSessionToken,
  getSessionExpiry,
} from "@/lib/auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { ZodError } from "zod";

// NOTE: Supabase service-role client — uncomment once wired up:
// import { createServiceRoleClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 5 teacher registrations per IP per hour ───────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`teacher-register:${ip}`, {
      limit: 5,
      windowSeconds: 3600,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many registration attempts. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    // ── Validate input ────────────────────────────────────────────────
    // teacherRegistrationSchema enforces role === "teacher", email,
    // password strength, name, country, optional schoolName, and consents.
    const data = teacherRegistrationSchema.parse({ ...body, role: "teacher" });

    // ── Hash password ─────────────────────────────────────────────────
    const passwordHash = await hashPassword(data.password);

    // ── Build teacher user metadata ───────────────────────────────────
    const userMetadata = {
      role: "teacher",
      is_teacher: true,
    };

    // ── Generate session ──────────────────────────────────────────────
    const sessionToken = generateSessionToken();
    const sessionExpiry = getSessionExpiry();

    // ── Database operations ───────────────────────────────────────────
    // TODO: Replace with actual DB transaction once schema is migrated.
    //
    // const supabaseAdmin = createServiceRoleClient();
    //
    // // 1. Create auth user with teacher metadata
    // const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
    //   email: data.email.toLowerCase(),
    //   password: data.password,
    //   email_confirm: false,
    //   user_metadata: userMetadata,
    // });
    // if (authError) {
    //   if (authError.message.includes("already registered")) {
    //     throw new Error("EMAIL_EXISTS");
    //   }
    //   throw authError;
    // }
    //
    // // 2. Upsert profile row with role and school_name
    // //    (profiles.role and profiles.school_name added in 20260327_add_profile_role.sql)
    // const { error: profileError } = await supabaseAdmin
    //   .from("profiles")
    //   .upsert({
    //     id: authUser.user.id,
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     email: data.email.toLowerCase(),
    //     country: data.country,
    //     role: "teacher",                          // profiles.role column
    //     school_name: data.schoolName ?? null,     // profiles.school_name column
    //     is_teacher: true,
    //   });
    // if (profileError) throw profileError;
    //
    // // 3. Optionally link to school record if schoolName matches an existing school
    // if (data.schoolName) {
    //   const { data: school } = await supabaseAdmin
    //     .from("schools")
    //     .select("id")
    //     .ilike("name", data.schoolName.trim())
    //     .single();
    //   if (school) {
    //     await supabaseAdmin
    //       .from("school_teachers")
    //       .insert({ teacher_id: authUser.user.id, school_id: school.id });
    //   }
    // }

    // Temporary: simulate success until DB is wired up
    const userStub = {
      id: "temp-teacher-" + Date.now(),
      email: data.email.toLowerCase(),
      firstName: data.firstName,
      lastName: data.lastName,
      role: "teacher",
      schoolName: data.schoolName ?? null,
      metadata: userMetadata,
    };

    // ── Response ──────────────────────────────────────────────────────
    const response = NextResponse.json(
      {
        message: "Teacher registration successful",
        user: {
          id: userStub.id,
          email: userStub.email,
          firstName: userStub.firstName,
          lastName: userStub.lastName,
          role: userStub.role,
          schoolName: userStub.schoolName,
        },
      },
      { status: 201 }
    );

    // Set session cookie
    response.cookies.set("session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: sessionExpiry,
    });

    return response;
  } catch (error) {
    // ── Zod validation errors ─────────────────────────────────────────
    if (error instanceof ZodError) {
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

    // ── Known errors ──────────────────────────────────────────────────
    if (error instanceof Error && error.message === "EMAIL_EXISTS") {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // ── Unknown errors ────────────────────────────────────────────────
    console.error("[TeacherSignup] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
