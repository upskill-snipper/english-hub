// ─── Examiner Marking Tool - the shared route gate ──────────────────────────
//
// Every examiner route that reaches a model runs this, in this order, and
// returns on the first failure:
//
//   1. signed in (Supabase cookie session)
//   2. premium entitlement (`profiles.subscription_status === 'pro'`, which the
//      no-card trial also grants for its seven days)
//   3. AI consent and the AI opt-out, propagating the machine-readable consent
//      code so the browser can offer the inline consent panel
//   4. an hourly per-user rate limit for the route
//   5. optionally, the per-teacher monthly script ceiling (mark route only),
//      whose number is resolved live from AppConfigSetting > env > default
//   6. the no-card trial AI allowance (metered), which a paying subscriber
//      passes through untouched
//
// The order matches src/app/api/mark/route.ts so a reviewer auditing "what
// gates an AI call" finds the same nine steps in the same order everywhere.
// The gate never calls the model and never logs; the route does both.
// ────────────────────────────────────────────────────────────────────────────

import type { NextRequest, NextResponse } from 'next/server'
import { NextResponse as Res } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { rateLimit } from '@/lib/rate-limit'
import { rateLimitResponse } from '@/lib/api-response'
import { getLimit } from '@/lib/usage/limits'
import {
  enforceTrialAllowance,
  EMPTY_TRIAL_GATE,
  type TrialAllowanceGate,
} from '@/lib/usage/trial-allowance'

export interface ExaminerGateOk {
  ok: true
  user: { id: string; email: string | null }
  trialGate: TrialAllowanceGate
}

export interface ExaminerGateFail {
  ok: false
  response: NextResponse
}

export interface ExaminerGateOptions {
  /** Route slug for the hourly bucket, e.g. 'examiner-mark'. */
  slug: string
  hourlyLimit: number
  /** When true the call also spends one unit of the monthly script ceiling. */
  countsAsScript?: boolean
  /** When false the trial allowance is not metered (cheap classifier calls). */
  meterTrial?: boolean
}

const THIRTY_DAYS = 30 * 24 * 60 * 60

export async function examinerGate(
  request: NextRequest,
  opts: ExaminerGateOptions,
): Promise<ExaminerGateOk | ExaminerGateFail> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return {
      ok: false,
      response: Res.json({ error: 'Sign in to use the examiner marking tool.' }, { status: 401 }),
    }
  }

  const isPremium = await hasActiveSubscription(supabase, user.id)
  if (!isPremium) {
    return {
      ok: false,
      response: Res.json(
        {
          error:
            'The examiner marking tool is part of the Teacher plan. Start the free trial or upgrade to mark scripts.',
          code: 'subscription_required',
        },
        { status: 403 },
      ),
    }
  }

  const consent = await checkMinorAIConsent(user.id)
  if (!consent.allowed) {
    return {
      ok: false,
      response: Res.json(
        {
          error: consent.reason ?? 'Consent is required to use AI marking.',
          ...(consent.code ? { code: consent.code } : {}),
        },
        { status: 403 },
      ),
    }
  }
  if (await isAiOptedOutServer(user.id)) {
    return {
      ok: false,
      response: Res.json(
        {
          error:
            'AI features are switched off for this account. Turn them back on in your privacy settings to use the examiner marking tool.',
        },
        { status: 403 },
      ),
    }
  }

  const hourly = await rateLimit(`${opts.slug}:${user.id}`, {
    limit: opts.hourlyLimit,
    windowSeconds: 3600,
  })
  if (!hourly.success) {
    return { ok: false, response: rateLimitResponse(hourly.resetAt) }
  }

  if (opts.countsAsScript) {
    const monthly = await getLimit('examinerScriptsMonthly')
    const ceiling = await rateLimit(`examiner-scripts:${user.id}`, {
      limit: monthly,
      windowSeconds: THIRTY_DAYS,
    })
    if (!ceiling.success) {
      return {
        ok: false,
        response: Res.json(
          {
            error: `You have reached this month's ceiling of ${monthly} marked scripts. It resets on ${new Date(ceiling.resetAt).toLocaleDateString('en-GB')}. Contact us if you need more.`,
            code: 'monthly_ceiling',
            resetAt: ceiling.resetAt,
            limit: monthly,
          },
          { status: 429 },
        ),
      }
    }
  }

  let trialGate: TrialAllowanceGate = EMPTY_TRIAL_GATE
  if (opts.meterTrial !== false) {
    trialGate = await enforceTrialAllowance(request, { id: user.id, email: user.email })
    if (trialGate.response) return { ok: false, response: trialGate.response }
  }

  return { ok: true, user: { id: user.id, email: user.email ?? null }, trialGate }
}
