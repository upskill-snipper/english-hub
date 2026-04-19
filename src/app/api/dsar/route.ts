// Cycle 8 / Identity PR-3 follow-up: session.id is Supabase UUID, not Prisma cuid.
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import {
  generateDSARReference,
  calculateDeadline,
  buildAcknowledgementEmail,
  type DSARType,
} from '@/lib/dsar'
import { sendEmail } from '@/lib/email'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// ─── Validation ────────────────────────────────────────────────────────

const createDSARSchema = z.object({
  type: z.enum(['ACCESS', 'PORTABILITY', 'ERASURE', 'RECTIFICATION']),
  details: z.string().max(2000).optional(),
})

// ─── POST /api/dsar — Create a new DSAR ────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 10 DSAR submissions per hour per IP ────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`dsar-create:${ip}`, {
      limit: 10,
      windowSeconds: 3600,
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
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !sessionUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const parsed = createDSARSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { type, details } = parsed.data

    // Cycle 8 / Identity PR-3 follow-up: session.id is a Supabase UUID,
    // but User.id is a cuid. Look up by supabaseUserId, fall back to
    // email for rows not yet backfilled (PR-2).
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: sessionUser.id },
      select: { id: true, email: true, firstName: true, accountStatus: true },
    })
    const profile =
      prismaUser ??
      (await prisma.user.findUnique({
        where: { email: sessionUser.email!.toLowerCase() },
        select: { id: true, email: true, firstName: true, accountStatus: true },
      }))
    if (profile && !prismaUser) {
      console.warn('[identity] DSAR lookup fell back to email', {
        supabaseUserId: sessionUser.id,
        prismaUserId: profile.id,
      })
    }

    if (!profile) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Prevent duplicate pending requests of the same type
    const existingPending = await prisma.dataAccessRequest.findFirst({
      where: {
        userId: profile.id,
        type: type,
        status: { in: ['PENDING', 'PROCESSING'] },
      },
    })

    if (existingPending) {
      return NextResponse.json(
        {
          error: `You already have a pending ${type} request (submitted ${existingPending.requestedAt.toLocaleDateString('en-GB')}). Please wait for it to be processed.`,
        },
        { status: 409 },
      )
    }

    // Generate reference and calculate deadline
    const referenceNumber = generateDSARReference()
    const now = new Date()
    const deadline = calculateDeadline(now)

    // Create the DSAR record
    const dsar = await prisma.dataAccessRequest.create({
      data: {
        userId: profile.id,
        type: type,
        status: 'PENDING',
        responseDetails: details ?? null,
      },
    })

    // Create audit log entry
    await prisma.auditLog.create({
      data: {
        userId: profile.id,
        action: 'DSAR_CREATED',
        resource: 'DataAccessRequest',
        resourceId: dsar.id,
        details: {
          type,
          referenceNumber,
          deadline: deadline.toISOString(),
        },
        ipAddress:
          request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown',
      },
    })

    // Send acknowledgement email
    const emailContent = buildAcknowledgementEmail(
      profile.firstName,
      referenceNumber,
      type as DSARType,
      deadline,
    )

    await sendEmail(profile.email, emailContent.subject, emailContent.html)

    return NextResponse.json(
      {
        id: dsar.id,
        referenceNumber,
        type: dsar.type,
        status: dsar.status,
        requestedAt: dsar.requestedAt.toISOString(),
        deadline: deadline.toISOString(),
        deadlineFormatted: deadline.toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
      { status: 201 },
    )
  } catch (err) {
    console.error('[DSAR] Failed to create request:', err)
    return NextResponse.json(
      { error: 'Failed to create data request. Please try again.' },
      { status: 500 },
    )
  }
}

// ─── GET /api/dsar — List user's DSARs ─────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !sessionUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Cycle 8 / Identity PR-3 follow-up: session.id is a Supabase UUID,
    // but User.id is a cuid. Look up by supabaseUserId, fall back to
    // email for rows not yet backfilled (PR-2).
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: sessionUser.id },
      select: { id: true },
    })
    const user =
      prismaUser ??
      (await prisma.user.findUnique({
        where: { email: sessionUser.email!.toLowerCase() },
        select: { id: true },
      }))
    if (user && !prismaUser) {
      console.warn('[identity] DSAR lookup fell back to email', {
        supabaseUserId: sessionUser.id,
        prismaUserId: user.id,
      })
    }

    if (!user) {
      return NextResponse.json({ requests: [] })
    }

    const dsars = await prisma.dataAccessRequest.findMany({
      where: { userId: user.id },
      orderBy: { requestedAt: 'desc' },
    })

    const results = dsars.map((d) => {
      const deadline = calculateDeadline(d.requestedAt)
      const now = new Date()
      const daysRemaining = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

      return {
        id: d.id,
        type: d.type,
        status: d.status,
        requestedAt: d.requestedAt.toISOString(),
        completedAt: d.completedAt?.toISOString() ?? null,
        deadline: deadline.toISOString(),
        daysRemaining: d.status === 'COMPLETED' || d.status === 'REFUSED' ? null : daysRemaining,
      }
    })

    return NextResponse.json({ requests: results })
  } catch (err) {
    console.error('[DSAR] Failed to list requests:', err)
    return NextResponse.json({ error: 'Failed to load data requests.' }, { status: 500 })
  }
}
