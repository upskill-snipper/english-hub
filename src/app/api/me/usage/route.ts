/**
 * GET /api/me/usage
 *
 * READ-ONLY. Returns every free-allowance meter's used / limit / remaining /
 * resetsAt for the signed-in user. It NEVER increments - `peekAllowance()` does
 * not write, and no code path in this file consumes. If this endpoint ever
 * starts consuming, the remaining-uses display would silently burn the very
 * allowance it is reporting.
 *
 * It exists so the UI can show "N of M free AI checks remaining" without
 * making a metered call first, and so server components such as
 * `TrialCountdownBannerServer` can render the AI-check count beside the
 * days-remaining countdown.
 *
 * A signed-out caller gets 401 rather than an IP-keyed answer: this endpoint is
 * about the account, and the signed-out diagnostic already learns its remaining
 * count from the `X-Free-Allowance-*` headers on the assess response.
 *
 * Response envelope mirrors /api/me/entitlements: { ok: true, data: … }.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { peekAllowance, resolveUsageSubject, type Meter } from '@/lib/usage/free-allowance'
import { resolveNoCardTrial } from '@/lib/usage/trial-allowance'

// Reads cookies and must never be cached across users.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

interface MeterReport {
  meter: Meter
  used: number
  limit: number
  remaining: number
  resetsAt: string
}

function ok<T>(data: T): NextResponse {
  const res = NextResponse.json({ ok: true, data })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

function fail(code: string, message: string, status: number): NextResponse {
  const res = NextResponse.json({ ok: false, error: { code, message } }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`me-usage:${ip}`, { limit: 120, windowSeconds: 60 })
    if (!rl.success) {
      return fail('RATE_LIMITED', 'Too many requests. Please try again shortly.', 429)
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return fail('AUTH_EXPIRED', 'Your session has expired. Please sign in again.', 401)
    }

    const subject = resolveUsageSubject(request, user.id)

    const meters: MeterReport[] = []

    // The free diagnostic is metered for everyone, signed in or out.
    const diagnostic = await peekAllowance(subject, 'ielts_diagnostic')
    meters.push({
      meter: diagnostic.meter,
      used: diagnostic.used,
      limit: diagnostic.limit,
      remaining: diagnostic.remaining,
      resetsAt: diagnostic.resetsAt.toISOString(),
    })

    // The trial meters only exist for a NO-CARD trial. A paying subscriber and
    // a card-on-file trial are not metered, and must not be shown a ceiling
    // they did not agree to.
    let trial: Awaited<ReturnType<typeof resolveNoCardTrial>> = null
    try {
      trial = await resolveNoCardTrial({ id: user.id, email: user.email })
    } catch (err) {
      console.error('[me/usage] trial lookup failed', err)
    }

    if (trial) {
      const options = {
        trialSubscriptionId: trial.subscriptionId,
        trialEndsAt: trial.trialEndsAt,
      }
      for (const meter of ['trial_ai', 'trial_ai_daily'] as const) {
        const state = await peekAllowance(subject, meter, options)
        meters.push({
          meter: state.meter,
          used: state.used,
          limit: state.limit,
          remaining: state.remaining,
          resetsAt: state.resetsAt.toISOString(),
        })
      }
    }

    return ok({
      meters,
      isNoCardTrial: trial !== null,
      trialEndsAt: trial ? trial.trialEndsAt.toISOString() : null,
    })
  } catch (err) {
    console.error('[me/usage] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end.', 500)
  }
}

async function methodNotAllowed(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'GET only' } },
    { status: 405, headers: { Allow: 'GET', 'Cache-Control': 'private, no-store' } },
  )
}

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
