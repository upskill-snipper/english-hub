// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { getChildDefaults } from '@/lib/privacy/child-defaults'

// GET /api/privacy/settings
// Returns privacy settings, data summary, and essay list for the current user
export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    // Resolve the Prisma user by supabaseUserId; fall back to email for
    // rows that have not yet been backfilled (PR-2 of this identity plan).
    const prismaUserLookup = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true },
    })
    const emailFallback =
      prismaUserLookup ??
      (await prisma.user.findUnique({
        where: { email: authUser.email!.toLowerCase() },
        select: { id: true },
      }))
    if (emailFallback && !prismaUserLookup) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUser.id,
        prismaUserId: emailFallback.id,
      })
    }

    const user = emailFallback
      ? await prisma.user.findUnique({
          where: { id: emailFallback.id },
          include: {
            privacySettings: true,
            essays: {
              where: { deletedAt: null },
              select: { id: true, title: true, subject: true, createdAt: true },
              orderBy: { createdAt: 'desc' },
            },
            _count: {
              select: {
                essays: { where: { deletedAt: null } },
              },
            },
          },
        })
      : null

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Count feedback separately
    const feedbackCount = await prisma.aIFeedback.count({
      where: {
        essay: { userId: user.id, deletedAt: null },
      },
    })

    // Calculate days active
    const daysActive = Math.max(
      1,
      Math.ceil((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24)),
    )

    // Build settings (create defaults if none exist)
    // ICO Children's Code: under-16 users get high-privacy defaults
    let settings = user.privacySettings
    if (!settings) {
      // Calculate current age from dateOfBirth to determine child status
      let isChildUser = false
      if (user.isMinor && user.dateOfBirth) {
        const dob = new Date(user.dateOfBirth)
        const now = new Date()
        let age = now.getFullYear() - dob.getFullYear()
        const monthDiff = now.getMonth() - dob.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
          age--
        }
        isChildUser = age < 16
      }
      const childDefaults = isChildUser ? getChildDefaults() : null

      settings = await prisma.privacySettings.create({
        data: {
          userId: user.id,
          analyticsEnabled: childDefaults ? childDefaults.analyticsOptIn : false,
          marketingEnabled: childDefaults ? childDefaults.marketingOptIn : false,
          aiTrainingOptIn: false,
          schoolSharingEnabled: false,
          researchDataEnabled: false,
          profileVisibility: 'PRIVATE',
        },
      })
    }

    return NextResponse.json({
      settings: {
        analyticsEnabled: settings.analyticsEnabled,
        marketingEnabled: settings.marketingEnabled,
        aiTrainingOptIn: settings.aiTrainingOptIn,
        aiOptOut: settings.aiOptOut,
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
    })
  } catch (error) {
    console.error('GET /api/privacy/settings error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/privacy/settings
// Updates privacy settings for the current user and logs to audit trail
export async function PUT(request: NextRequest) {
  try {
    // ── Rate limit: 30 updates per minute per IP ───────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`privacy-settings:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true },
    })
    // Fallback for pre-backfill or mismatched rows — logged as a warning.
    const user =
      prismaUser ??
      (await prisma.user.findUnique({
        where: { email: authUser.email!.toLowerCase() },
        select: { id: true },
      }))
    if (user && !prismaUser) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUser.id,
        prismaUserId: user.id,
      })
    }

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const body = await request.json()

    // Build update data — only include fields present in the request body
    // so callers can send partial updates (e.g. toggling only aiOptOut).
    const data: Record<string, unknown> = {}

    if ('analyticsEnabled' in body) data.analyticsEnabled = Boolean(body.analyticsEnabled)
    if ('marketingEnabled' in body) data.marketingEnabled = Boolean(body.marketingEnabled)
    if ('aiTrainingOptIn' in body) data.aiTrainingOptIn = Boolean(body.aiTrainingOptIn)
    if ('aiOptOut' in body) data.aiOptOut = Boolean(body.aiOptOut)
    if ('schoolSharingEnabled' in body)
      data.schoolSharingEnabled = Boolean(body.schoolSharingEnabled)
    if ('researchDataEnabled' in body) data.researchDataEnabled = Boolean(body.researchDataEnabled)
    if ('profileVisibility' in body) {
      const validVisibility = ['PRIVATE', 'SCHOOL_ONLY', 'PUBLIC']
      data.profileVisibility = validVisibility.includes(body.profileVisibility)
        ? body.profileVisibility
        : 'PRIVATE'
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update.' }, { status: 400 })
    }

    const settings = await prisma.privacySettings.upsert({
      where: { userId: user.id },
      create: { userId: user.id, ...data },
      update: data,
    })

    // Audit log (ip already declared above for rate limiting)
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'PRIVACY_SETTINGS_UPDATED',
        resource: 'PrivacySettings',
        resourceId: settings.id,
        details: data as Record<string, boolean | string>,
        ipAddress: ip,
      },
    })

    return NextResponse.json({ success: true, settings: data })
  } catch (error) {
    console.error('PUT /api/privacy/settings error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
