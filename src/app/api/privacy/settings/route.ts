import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// GET /api/privacy/settings
// Returns privacy settings, data summary, and essay list for the current user
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email! },
      include: {
        privacySettings: true,
        essays: {
          where: { deletedAt: null },
          select: { id: true, title: true, subject: true, createdAt: true },
          orderBy: { createdAt: "desc" },
        },
        _count: {
          select: {
            essays: { where: { deletedAt: null } },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Count feedback separately
    const feedbackCount = await prisma.aIFeedback.count({
      where: {
        essay: { userId: user.id, deletedAt: null },
      },
    });

    // Calculate days active
    const daysActive = Math.max(
      1,
      Math.ceil(
        (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      )
    );

    // Build settings (create defaults if none exist)
    let settings = user.privacySettings;
    if (!settings) {
      settings = await prisma.privacySettings.create({
        data: {
          userId: user.id,
          analyticsEnabled: false,
          marketingEnabled: false,
          aiTrainingOptIn: false,
          schoolSharingEnabled: false,
          researchDataEnabled: false,
          profileVisibility: "PRIVATE",
        },
      });
    }

    return NextResponse.json({
      settings: {
        analyticsEnabled: settings.analyticsEnabled,
        marketingEnabled: settings.marketingEnabled,
        aiTrainingOptIn: settings.aiTrainingOptIn,
        schoolSharingEnabled: settings.schoolSharingEnabled,
        researchDataEnabled: settings.researchDataEnabled,
        profileVisibility: settings.profileVisibility,
      },
      summary: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        school: user.school,
        essayCount: user._count.essays,
        feedbackCount,
        daysActive,
        createdAt: user.createdAt.toISOString(),
      },
      essays: user.essays.map((e) => ({
        id: e.id,
        title: e.title,
        subject: e.subject,
        createdAt: e.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error("GET /api/privacy/settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT /api/privacy/settings
// Updates privacy settings for the current user and logs to audit trail
export async function PUT(request: NextRequest) {
  try {
    // ── Rate limit: 30 updates per minute per IP ───────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`privacy-settings:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email! },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();

    const validVisibility = ["PRIVATE", "SCHOOL_ONLY", "PUBLIC"];
    const profileVisibility = validVisibility.includes(body.profileVisibility)
      ? body.profileVisibility
      : "PRIVATE";

    const data = {
      analyticsEnabled: Boolean(body.analyticsEnabled),
      marketingEnabled: Boolean(body.marketingEnabled),
      aiTrainingOptIn: Boolean(body.aiTrainingOptIn),
      schoolSharingEnabled: Boolean(body.schoolSharingEnabled),
      researchDataEnabled: Boolean(body.researchDataEnabled),
      profileVisibility,
    };

    const settings = await prisma.privacySettings.upsert({
      where: { userId: user.id },
      create: { userId: user.id, ...data },
      update: data,
    });

    // Audit log (ip already declared above for rate limiting)
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "PRIVACY_SETTINGS_UPDATED",
        resource: "PrivacySettings",
        resourceId: settings.id,
        details: data,
        ipAddress: ip,
      },
    });

    return NextResponse.json({ success: true, settings: data });
  } catch (error) {
    console.error("PUT /api/privacy/settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
