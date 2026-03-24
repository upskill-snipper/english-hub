import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { createInvite, getActiveInvite } from "@/lib/parent-linking";
import { rateLimit } from "@/lib/rate-limit";

// ─── POST: Student generates an invite code/link for their parent ───────

export async function POST(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Authentication required." },
        { status: 401 }
      );
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        role: true,
        accountStatus: true,
        firstName: true,
      },
    });

    if (!dbUser || dbUser.accountStatus !== "ACTIVE") {
      return NextResponse.json(
        { message: "Session expired. Please log in again." },
        { status: 401 }
      );
    }

    const user = dbUser;

    // Only students can create parent invites
    if (user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Only students can generate parent invite codes." },
        { status: 403 }
      );
    }

    // ── Rate limit ─────────────────────────────────────────────────────
    const rl = await rateLimit(`parent-invite:${user.id}`, { limit: 5, windowSeconds: 3600 }); // 5 per hour
    if (!rl.success) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    // ── Create invite ──────────────────────────────────────────────────
    const invite = await createInvite(user.id);

    const baseUrl = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
    const inviteUrl = `${baseUrl}/invite/${invite.code}`;

    return NextResponse.json(
      {
        code: invite.code,
        inviteUrl,
        expiresAt: invite.expiresAt.toISOString(),
        message: "Invite code generated successfully. Share this with your parent.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[parent/invite] Error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ─── GET: Student retrieves their current active invite ─────────────────

export async function GET(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Authentication required." },
        { status: 401 }
      );
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        role: true,
        accountStatus: true,
      },
    });

    if (!dbUser || dbUser.accountStatus !== "ACTIVE") {
      return NextResponse.json(
        { message: "Session expired. Please log in again." },
        { status: 401 }
      );
    }

    const user = dbUser;

    if (user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Only students can view their parent invite codes." },
        { status: 403 }
      );
    }

    const invite = await getActiveInvite(user.id);

    if (!invite) {
      return NextResponse.json({ invite: null });
    }

    const baseUrl = process.env.NEXTAUTH_URL || "https://theenglishhub.app";

    return NextResponse.json({
      invite: {
        code: invite.code,
        inviteUrl: `${baseUrl}/invite/${invite.code}`,
        expiresAt: invite.expiresAt.toISOString(),
        createdAt: invite.createdAt.toISOString(),
      },
    });
  } catch (err) {
    console.error("[parent/invite] GET Error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
