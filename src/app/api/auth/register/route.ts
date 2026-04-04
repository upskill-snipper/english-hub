import { NextRequest, NextResponse } from "next/server";
import {
  registrationSchema,
  hashPassword,
  generateSessionToken,
  getSessionExpiry,
  calculateAge,
  buildConsentRecords,
  getDefaultPrivacySettings,
} from "@/lib/auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { ZodError } from "zod";

// Accepted role values. Defaults to "student" when omitted.
type UserRole = "student" | "teacher" | "school_admin";

// NOTE: Prisma client import — uncomment once Prisma is set up:
// import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 10 attempts per 15 minutes per IP ──────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`register:${ip}`, {
      limit: 10,
      windowSeconds: 900,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many registration attempts. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    const body = await request.json();

    // ── Extract and normalise role ────────────────────────────────────
    const rawRole: unknown = body.role;
    const role: UserRole =
      rawRole === "teacher" || rawRole === "school_admin"
        ? (rawRole as UserRole)
        : "student";

    const isTeacher = role === "teacher" || role === "school_admin";

    // ── Validate input ────────────────────────────────────────────────
    const data = registrationSchema.parse(body);

    // ── Age gate (students only — teachers are adults) ────────────────
    const age = isTeacher
      ? 18
      : calculateAge(data.dobYear, data.dobMonth, data.dobDay);

    if (!isTeacher && age < 13) {
      return NextResponse.json(
        { error: "You must be 13 or older to register." },
        { status: 403 }
      );
    }

    // ── Build user metadata ───────────────────────────────────────────
    const userMetadata =
      role === "teacher"
        ? { role: "teacher", is_teacher: true }
        : role === "school_admin"
        ? { role: "school_admin", is_teacher: true }
        : { role: "student", is_teacher: false };

    // ── Hash password ─────────────────────────────────────────────────
    const passwordHash = await hashPassword(data.password);

    // ── Build consent records ─────────────────────────────────────────
    const consentRecords = buildConsentRecords(data);
    const privacySettings = getDefaultPrivacySettings();

    // ── Generate session ──────────────────────────────────────────────
    const sessionToken = generateSessionToken();
    const sessionExpiry = getSessionExpiry();

    // ── Client IP for audit (reuse ip from rate limiter above) ────────

    // ── Database operations ───────────────────────────────────────────
    // TODO: Replace with actual Prisma transaction once schema is migrated.
    //
    // const user = await prisma.$transaction(async (tx) => {
    //   // Check for existing user
    //   const existing = await tx.user.findUnique({
    //     where: { email: data.email.toLowerCase() },
    //   });
    //   if (existing) {
    //     throw new Error("EMAIL_EXISTS");
    //   }
    //
    //   // Create user
    //   const newUser = await tx.user.create({
    //     data: {
    //       email: data.email.toLowerCase(),
    //       passwordHash,
    //       firstName: data.firstName,
    //       lastName: data.lastName,
    //       dateOfBirth: isTeacher ? null : new Date(data.dobYear, data.dobMonth - 1, data.dobDay),
    //       country: data.country,
    //       school: data.school ?? null,
    //       isMinor: !isTeacher && age < 18,
    //       ageAtRegistration: isTeacher ? null : age,
    //       role,            // profiles.role column (migration 20260327_add_profile_role)
    //       metadata: userMetadata,
    //     },
    //   });
    //
    //   // Create consent records
    //   await tx.consent.createMany({
    //     data: consentRecords.map((c) => ({
    //       userId: newUser.id,
    //       type: c.type,
    //       granted: c.granted,
    //       version: c.version,
    //       grantedAt: c.timestamp,
    //       ipAddress: ip,
    //     })),
    //   });
    //
    //   // Create default privacy settings
    //   await tx.privacySettings.create({
    //     data: {
    //       userId: newUser.id,
    //       ...privacySettings,
    //     },
    //   });
    //
    //   // Create session
    //   await tx.session.create({
    //     data: {
    //       userId: newUser.id,
    //       token: sessionToken,
    //       expiresAt: sessionExpiry,
    //     },
    //   });
    //
    //   // Audit log
    //   await tx.auditLog.create({
    //     data: {
    //       userId: newUser.id,
    //       action: "USER_REGISTERED",
    //       ipAddress: ip,
    //       metadata: {
    //         country: data.country,
    //         isMinor: age < 18,
    //         consents: consentRecords.map((c) => c.type),
    //       },
    //     },
    //   });
    //
    //   return newUser;
    // });

    // Temporary: simulate success response until DB is wired up
    const userStub = {
      id: "temp-" + Date.now(),
      email: data.email.toLowerCase(),
      firstName: data.firstName,
      lastName: data.lastName,
      isMinor: !isTeacher && age < 18,
      role,
      metadata: userMetadata,
    };

    // ── Response ──────────────────────────────────────────────────────
    const response = NextResponse.json(
      {
        message: "Registration successful",
        user: {
          id: userStub.id,
          email: userStub.email,
          firstName: userStub.firstName,
          lastName: userStub.lastName,
          role: userStub.role,
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
    console.error("[Register] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
