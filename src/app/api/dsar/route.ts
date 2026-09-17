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
import { DPO_EMAIL } from '@/lib/data-retention'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// ─── Validation ────────────────────────────────────────────────────────

const createDSARSchema = z.object({
  type: z.enum(['ACCESS', 'PORTABILITY', 'ERASURE', 'RECTIFICATION']),
  details: z.string().max(2000).optional(),
})

// ─── Supabase-native subjects ──────────────────────────────────────────

/**
 * Record a rights request from an account that has no Prisma `User` row.
 *
 * Roughly 96% of accounts are in this state. The route used to answer
 * them with 404 "User not found", which is both wrong and, for an Art.17
 * or Art.15 request, a refusal of a statutory right.
 *
 * We cannot create a `DataAccessRequest`: its `userId` is a required
 * foreign key to `User.id`. What we can do is record the request in a
 * place that is durable and auditable, put it in front of a human, and
 * tell the subject precisely which of those two things succeeded. No
 * claim is made that either happened unless it did.
 */
async function recordUnlinkedRequest(
  request: NextRequest,
  input: {
    supabaseUserId: string
    email: string | null
    type: DSARType
    details: string | null
  },
): Promise<NextResponse> {
  const referenceNumber = generateDSARReference()
  const now = new Date()
  const deadline = calculateDeadline(now)
  const ipAddress =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  let loggedReference: string | null = null
  try {
    const row = await prisma.auditLog.create({
      data: {
        userId: null,
        action: 'DSAR_CREATED_UNLINKED',
        resource: 'DataAccessRequest',
        resourceId: referenceNumber,
        details: {
          referenceNumber,
          type: input.type,
          requestDetails: input.details,
          supabaseUserId: input.supabaseUserId,
          email: input.email,
          deadline: deadline.toISOString(),
          reason: 'No Prisma User row exists for this Supabase account',
        },
        ipAddress,
      },
      select: { id: true },
    })
    loggedReference = row.id
  } catch (err) {
    console.error('[DSAR] Failed to log unlinked request:', err)
  }

  const dpoBody = [
    `<p>A rights request was submitted by an account with no application-side user row.</p>`,
    `<ul>`,
    `<li>Reference: ${referenceNumber}</li>`,
    `<li>Type: ${input.type}</li>`,
    `<li>Supabase user id: ${input.supabaseUserId}</li>`,
    `<li>Email: ${input.email ?? 'not held on the session'}</li>`,
    `<li>Deadline: ${deadline.toISOString()}</li>`,
    `<li>Details: ${input.details ?? 'none supplied'}</li>`,
    `</ul>`,
    `<p>This request could not be written to the DataAccessRequest table and must be actioned by hand.</p>`,
  ].join('')

  let dpoNotified = false
  try {
    const sent = await sendEmail(
      DPO_EMAIL,
      `[Action required] ${input.type} request ${referenceNumber}`,
      dpoBody,
    )
    dpoNotified = sent.success
  } catch (err) {
    console.error('[DSAR] Failed to notify the DPO of an unlinked request:', err)
  }

  if (!loggedReference && !dpoNotified) {
    // Neither durable record nor human hand-off. Saying anything other
    // than "this did not work" would be a fabrication.
    return NextResponse.json(
      {
        error:
          `We could not record your request, so we are not going to tell you that we have. ` +
          `Please email ${DPO_EMAIL} directly and we will handle it from there.`,
        dpoEmail: DPO_EMAIL,
      },
      { status: 503 },
    )
  }

  return NextResponse.json(
    {
      referenceNumber,
      type: input.type,
      status: 'RECEIVED',
      requestedAt: now.toISOString(),
      deadline: deadline.toISOString(),
      deadlineFormatted: deadline.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      recordedInAuditLog: loggedReference !== null,
      dpoNotified,
      loggedReference,
      dpoEmail: DPO_EMAIL,
      message: dpoNotified
        ? `Your request has been recorded and sent to our data protection officer, who will ` +
          `reply by ${deadline.toLocaleDateString('en-GB')}. Quote ${referenceNumber} if you contact us.`
        : `Your request has been recorded, but we could not send it on to our data protection ` +
          `officer automatically. Please email ${DPO_EMAIL} quoting ${referenceNumber} so we ` +
          `can be certain it reaches a person.`,
    },
    { status: 202 },
  )
}

// ─── POST /api/dsar - Create a new DSAR ────────────────────────────────

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
      (sessionUser.email
        ? await prisma.user.findUnique({
            where: { email: sessionUser.email.toLowerCase() },
            select: { id: true, email: true, firstName: true, accountStatus: true },
          })
        : null)
    if (profile && !prismaUser) {
      console.warn('[identity] DSAR lookup fell back to email', {
        supabaseUserId: sessionUser.id,
        prismaUserId: profile.id,
      })
    }

    if (!profile) {
      // The account exists - it just lives only in Supabase. Answering
      // "User not found" refused rights requests from people whose data
      // we hold. `DataAccessRequest.userId` is a required foreign key to
      // `User.id`, so there is no row we can honestly create here.
      // Record the request where it can be recorded (AuditLog.userId is
      // nullable), hand it to the DPO, and say exactly what happened.
      return recordUnlinkedRequest(request, {
        supabaseUserId: sessionUser.id,
        email: sessionUser.email ?? null,
        type,
        details: details ?? null,
      })
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

// ─── GET /api/dsar - List user's DSARs ─────────────────────────────────

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
      (sessionUser.email
        ? await prisma.user.findUnique({
            where: { email: sessionUser.email.toLowerCase() },
            select: { id: true },
          })
        : null)
    if (user && !prismaUser) {
      console.warn('[identity] DSAR lookup fell back to email', {
        supabaseUserId: sessionUser.id,
        prismaUserId: user.id,
      })
    }

    if (!user) {
      // Supabase-native account. Its requests live in the audit log
      // (see recordUnlinkedRequest), not in DataAccessRequest. Returning
      // a bare empty list would make a submitted request look as though
      // it had vanished.
      const logged = await prisma.auditLog.findMany({
        where: {
          action: 'DSAR_CREATED_UNLINKED',
          details: { path: ['supabaseUserId'], equals: sessionUser.id },
        },
        orderBy: { timestamp: 'desc' },
        select: { id: true, resourceId: true, details: true, timestamp: true },
      })

      return NextResponse.json({
        requests: logged.map((entry) => {
          const detail = (entry.details ?? {}) as Record<string, unknown>
          const deadline = calculateDeadline(entry.timestamp)
          return {
            id: entry.id,
            referenceNumber: entry.resourceId,
            type: typeof detail.type === 'string' ? detail.type : 'UNKNOWN',
            status: 'RECEIVED',
            requestedAt: entry.timestamp.toISOString(),
            completedAt: null,
            deadline: deadline.toISOString(),
            daysRemaining: Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
            handledBy: DPO_EMAIL,
          }
        }),
      })
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
