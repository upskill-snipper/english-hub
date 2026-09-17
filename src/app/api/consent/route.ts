import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { ConsentType, ConsentMethod } from '@prisma/client'
import {
  recordConsent,
  withdrawConsent,
  getConsents,
  CONSENT_TYPES,
  ESSENTIAL_CONSENT_TYPES,
  GRANTABLE_CONSENT_TYPES,
} from '@/lib/consent'
import { rateLimit } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// ─── Validation schemas ─────────────────────────────────────────────────

const consentTypeValues = Object.values(CONSENT_TYPES) as [string, ...string[]]

const recordConsentSchema = z.object({
  consentType: z.enum(consentTypeValues as [ConsentType, ...ConsentType[]]),
  version: z.string().min(1, 'Version is required'),
  granted: z.boolean(),
  method: z.enum(['ACTIVE_CHECKBOX', 'EXPLICIT'] as [ConsentMethod, ...ConsentMethod[]]),
})

const withdrawConsentSchema = z.object({
  consentType: z.enum(consentTypeValues as [ConsentType, ...ConsentType[]]),
})

// ─── Helpers ────────────────────────────────────────────────────────────

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

// ─── GET /api/consent ───────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id

    const consents = await getConsents(userId)
    const activeTypes = new Set(consents.map((c) => c.consentType))

    return NextResponse.json({
      consents: consents.map((c) => ({
        id: c.id,
        consentType: c.consentType,
        version: c.version,
        granted: c.granted,
        grantedAt: c.grantedAt,
        withdrawnAt: c.withdrawnAt,
        method: c.method,
        isEssential: ESSENTIAL_CONSENT_TYPES.includes(c.consentType),
      })),
      // The consents this person can switch on for themselves, with the
      // policy version each grant is recorded against. The page renders a
      // "Give consent" control from this list, so the version is never
      // hard-coded in the browser and a policy bump reaches the UI by
      // changing POLICY_VERSIONS alone.
      grantable: GRANTABLE_CONSENT_TYPES.map((g) => ({
        consentType: g.consentType,
        version: g.version,
        granted: activeTypes.has(g.consentType),
      })),
    })
  } catch (error) {
    console.error('GET /api/consent error:', error)
    return NextResponse.json({ error: 'Failed to retrieve consents' }, { status: 500 })
  }
}

// ─── POST /api/consent ──────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id

    // ── Rate limit: 30 consent operations per minute per user ──────────
    const rl = await rateLimit(`consent:${userId}`, {
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

    const body = await request.json()
    const parsed = recordConsentSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { consentType, version, granted, method } = parsed.data

    // POST is the GRANT path. Refusing an essential consent through it would
    // route around withdrawConsent's guard and leave the account without the
    // terms or privacy record the service depends on.
    if (!granted && ESSENTIAL_CONSENT_TYPES.includes(consentType)) {
      return NextResponse.json(
        {
          error:
            'Cannot record a refusal of an essential consent. To withdraw it, delete your account.',
        },
        { status: 403 },
      )
    }

    const ipAddress = getClientIp(request)

    const record = await recordConsent(userId, consentType, version, granted, method, ipAddress)

    return NextResponse.json({ consent: record }, { status: 201 })
  } catch (error) {
    // The one failure worth naming: we could not resolve this account to a
    // ledger row, so nothing was written. Saying "recorded" here would be a
    // lie the learner would only discover at the next AI refusal.
    if (error instanceof Error && error.message.includes('no user matches id')) {
      console.error('POST /api/consent identity error:', error)
      return NextResponse.json(
        {
          error:
            'We could not record your consent against your account, so nothing has been saved. Please try again, and contact dpo@theenglishhub.app if it keeps happening.',
        },
        { status: 503 },
      )
    }

    console.error('POST /api/consent error:', error)
    return NextResponse.json({ error: 'Failed to record consent' }, { status: 500 })
  }
}

// ─── DELETE /api/consent ────────────────────────────────────────────────

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id

    // ── Rate limit: 30 consent operations per minute per user ──────────
    // Shares the same key as POST to prevent combined abuse
    const rl = await rateLimit(`consent:${userId}`, {
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

    const body = await request.json()
    const parsed = withdrawConsentSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { consentType } = parsed.data
    const ipAddress = getClientIp(request)

    const record = await withdrawConsent(userId, consentType, ipAddress)

    return NextResponse.json({
      message: `Consent "${consentType}" has been withdrawn`,
      consent: record,
    })
  } catch (error) {
    if (error instanceof Error && error.message.includes('Cannot withdraw essential consent')) {
      return NextResponse.json(
        {
          error:
            'Cannot withdraw essential consent. This consent is required for the service to function.',
        },
        { status: 403 },
      )
    }

    if (error instanceof Error && error.message.includes('no user matches id')) {
      console.error('DELETE /api/consent identity error:', error)
      return NextResponse.json(
        {
          error:
            'We could not record your withdrawal against your account, so nothing has changed. Please try again, and contact dpo@theenglishhub.app if it keeps happening.',
        },
        { status: 503 },
      )
    }

    console.error('DELETE /api/consent error:', error)
    return NextResponse.json({ error: 'Failed to withdraw consent' }, { status: 500 })
  }
}
