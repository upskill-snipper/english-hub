import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

// NOTE: Uncomment once Prisma is wired up:
// import { prisma } from "@/lib/prisma";

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
  school: z.string().max(200, "School name is too long").nullable().optional(),
});

// ─── Stub helpers (replace with real session lookup) ───────────────────

async function getSessionUserId(
  _cookieStore: Awaited<ReturnType<typeof cookies>>
): Promise<string | null> {
  // TODO: Replace with real session validation
  // const token = cookieStore.get("session_token")?.value;
  // if (!token) return null;
  // const session = await prisma.session.findUnique({ where: { token } });
  // if (!session || session.expiresAt < new Date()) return null;
  // return session.userId;
  return "stub-user-id";
}

// ─── Stub user data (replace with DB queries) ─────────────────────────

const STUB_USER = {
  id: "stub-user-id",
  email: "alex@example.com",
  firstName: "Alex",
  lastName: "Smith",
  dateOfBirth: new Date(2009, 4, 15), // 15 May 2009
  school: "Westfield Academy",
  country: "UK",
  isMinor: true,
  createdAt: new Date("2026-01-10"),
};

// ─── GET /api/user/profile ─────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = await getSessionUserId(cookieStore);

    if (!userId) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // TODO: Replace with real DB query:
    // const user = await prisma.user.findUnique({
    //   where: { id: userId, accountStatus: "ACTIVE" },
    //   select: {
    //     id: true,
    //     email: true,
    //     firstName: true,
    //     lastName: true,
    //     dateOfBirth: true,
    //     school: true,
    //     country: true,
    //     isMinor: true,
    //     createdAt: true,
    //   },
    // });
    // if (!user) {
    //   return NextResponse.json({ message: "User not found" }, { status: 404 });
    // }

    const user = STUB_USER;

    const today = new Date();
    const birthDate = new Date(user.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return NextResponse.json({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      age,
      isMinor: user.isMinor,
      school: user.school,
      country: user.country,
      createdAt: user.createdAt.toISOString(),
    });
  } catch (error) {
    console.error("[Profile GET] Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// ─── PATCH /api/user/profile ───────────────────────────────────────────

export async function PATCH(request: NextRequest) {
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
    const data = updateProfileSchema.parse(body);

    // Must provide at least one field to update
    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { message: "No fields provided to update." },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    // TODO: Replace with real DB transaction:
    // const updatedUser = await prisma.$transaction(async (tx) => {
    //   const user = await tx.user.update({
    //     where: { id: userId },
    //     data: {
    //       ...(data.firstName !== undefined && { firstName: data.firstName }),
    //       ...(data.lastName !== undefined && { lastName: data.lastName }),
    //       ...(data.school !== undefined && { school: data.school }),
    //     },
    //     select: {
    //       id: true,
    //       email: true,
    //       firstName: true,
    //       lastName: true,
    //       school: true,
    //       country: true,
    //       isMinor: true,
    //     },
    //   });
    //
    //   // Audit log
    //   await tx.auditLog.create({
    //     data: {
    //       userId,
    //       action: "PROFILE_UPDATED",
    //       resource: "user",
    //       resourceId: userId,
    //       details: { fieldsUpdated: Object.keys(data) },
    //       ipAddress: ip,
    //     },
    //   });
    //
    //   return user;
    // });

    // Temporary stub: merge changes into mock data
    const updatedUser = {
      ...STUB_USER,
      ...(data.firstName !== undefined && { firstName: data.firstName }),
      ...(data.lastName !== undefined && { lastName: data.lastName }),
      ...(data.school !== undefined && { school: data.school }),
    };

    console.log("[Profile PATCH] Updated (stub):", {
      userId,
      fieldsUpdated: Object.keys(data),
      ip,
    });

    return NextResponse.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        school: updatedUser.school,
        country: updatedUser.country,
        isMinor: updatedUser.isMinor,
      },
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

    console.error("[Profile PATCH] Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
