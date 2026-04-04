import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";
import { requireAdmin, AdminAuthError } from "@/lib/admin";

// ─── GET /api/admin/users ───────────────────────────────────────────────
// Lists users with filtering, search, and pagination.
// Requires ADMIN role.

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit: 30 per IP per minute ───────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`admin-users:${ip}`, { limit: 30, windowSeconds: 60 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    await requireAdmin();

    const { searchParams } = new URL(request.url);

    // Pagination
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("pageSize") ?? "25", 10))
    );
    const skip = (page - 1) * pageSize;

    // Search
    const search = searchParams.get("search")?.trim() ?? "";

    // Filters
    const role = searchParams.get("role") ?? "";
    const status = searchParams.get("status") ?? "";
    const isMinor = searchParams.get("isMinor") ?? "";

    // Build where clause
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    if (role && ["STUDENT", "ADMIN", "REVIEWER"].includes(role)) {
      where.role = role;
    }

    if (status && ["ACTIVE", "SUSPENDED", "DELETED"].includes(status)) {
      where.accountStatus = status;
    }

    if (isMinor === "true") {
      where.isMinor = true;
    } else if (isMinor === "false") {
      where.isMinor = false;
    }

    // Query
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          dateOfBirth: true,
          country: true,
          role: true,
          isMinor: true,
          accountStatus: true,
          school: true,
          createdAt: true,
          subscription: {
            select: { status: true },
          },
          _count: {
            select: { essays: { where: { deletedAt: null } } },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),
      prisma.user.count({ where }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    const formattedUsers = users.map((u) => ({
      id: u.id,
      email: u.email,
      firstName: u.firstName,
      lastName: u.lastName,
      dateOfBirth: u.dateOfBirth.toISOString(),
      country: u.country,
      role: u.role,
      isMinor: u.isMinor,
      accountStatus: u.accountStatus,
      school: u.school,
      createdAt: u.createdAt.toISOString(),
      subscriptionStatus: u.subscription?.status ?? null,
      essayCount: u._count.essays,
    }));

    return NextResponse.json({
      users: formattedUsers,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    console.error("GET /api/admin/users error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
