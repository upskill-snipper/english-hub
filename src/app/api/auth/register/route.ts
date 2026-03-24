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
import { ZodError } from "zod";

// NOTE: Prisma client import — uncomment once Prisma is set up:
// import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Validate input ────────────────────────────────────────────────
    const data = registrationSchema.parse(body);

    // ── Age gate ──────────────────────────────────────────────────────
    const age = calculateAge(data.dobYear, data.dobMonth, data.dobDay);
    if (age < 14) {
      return NextResponse.json(
        { message: "You must be 14 or older to register." },
        { status: 403 }
      );
    }

    // ── Hash password ─────────────────────────────────────────────────
    const passwordHash = await hashPassword(data.password);

    // ── Build consent records ─────────────────────────────────────────
    const consentRecords = buildConsentRecords(data);
    const privacySettings = getDefaultPrivacySettings();

    // ── Generate session ──────────────────────────────────────────────
    const sessionToken = generateSessionToken();
    const sessionExpiry = getSessionExpiry();

    // ── Client IP for audit ───────────────────────────────────────────
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

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
    //       dateOfBirth: new Date(data.dobYear, data.dobMonth - 1, data.dobDay),
    //       country: data.country,
    //       school: data.school ?? null,
    //       isMinor: age < 18,
    //       ageAtRegistration: age,
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
      isMinor: age < 18,
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
        { message: "Validation failed", errors: fieldErrors },
        { status: 400 }
      );
    }

    // ── Known errors ──────────────────────────────────────────────────
    if (error instanceof Error && error.message === "EMAIL_EXISTS") {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // ── Unknown errors ────────────────────────────────────────────────
    console.error("[Register] Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
