// ─── POST /api/training/prepare/[submissionId] ───────────────────────────────
//
// Platform-admin-only. Promotes ONE teacher-approved marking submission into
// the anonymised, consent-gated training_data corpus via prepareTrainingRecord.
//
// Auth: must be a SITE admin (isSiteAdmin on the Supabase session email) - this
// is the platform-wide training pipeline, not a school-scoped action, so the
// school-member roles do NOT grant access. All anonymisation, consent gating
// and audit logging happen inside prepareTrainingRecord; this handler only
// authenticates, rate-limits, and relays the structured result.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { isSiteAdmin } from '@/lib/site-admin'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { prepareTrainingRecord } from '@/lib/training/prepare'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> },
) {
  try {
    // 1. Auth - Supabase session.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse()
    }

    // 2. Platform-admin gate (site admin only).
    if (!isSiteAdmin(user.email)) {
      return forbiddenResponse('Platform admin access required.')
    }

    // 3. Rate limit per admin.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`training-prepare:${user.id}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 4. Resolve the dynamic param (Next 15 - params is a Promise).
    const { submissionId } = await params
    if (!submissionId || submissionId.trim().length === 0) {
      return NextResponse.json({ error: 'submissionId is required' }, { status: 400 })
    }

    // 5. Run the gated, anonymising, audited preparation.
    const result = await prepareTrainingRecord(submissionId.trim())

    if (!result.ok) {
      // 422 - the submission is real but fails a gate (not approved /
      // consent / eligibility). The reason is non-PII (see prepare.ts).
      return NextResponse.json({ ok: false, reason: result.reason }, { status: 422 })
    }

    return NextResponse.json({ ok: true, trainingId: result.trainingId })
  } catch (error) {
    console.error('[api/training/prepare] unexpected error', error)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
