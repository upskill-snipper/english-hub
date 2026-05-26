import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// ─── GET /api/review/[id] - get a review request by reference number ─────
//
// Cycle 5 (P1 fix): migrated from the in-memory store (see
// src/app/api/review/store.ts) to Supabase
// public.human_review_requests. RLS restricts reads to the owning user,
// so a misauthenticated request returns 404 as before.
// ──────────────────────────────────────────────────────────────────────────

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // Auth
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit: 30 requests per minute per IP
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`review-detail:${ip}`, {
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

  const { id } = await params

  // RLS restricts this select to rows where user_id = auth.uid(), so
  // a request for someone else's reference_number returns no rows and
  // we respond with 404 as before.
  const { data, error } = await supabase
    .from('human_review_requests')
    .select(
      'reference_number, user_id, essay_id, essay_title, reason, detail, self_assessment, status, reviewer_response, timeline, created_at',
    )
    .eq('reference_number', id)
    .eq('user_id', user.id)
    .maybeSingle()

  if (error) {
    console.error('[api/review/[id]] query failed:', error)
    return NextResponse.json({ error: 'Could not load your review request.' }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: 'Review request not found.' }, { status: 404 })
  }

  // Match the client-facing shape the previous route returned.
  return NextResponse.json({
    referenceNumber: data.reference_number,
    userId: data.user_id,
    essayId: data.essay_id,
    essayTitle: data.essay_title,
    reason: data.reason,
    detail: data.detail,
    selfAssessment: data.self_assessment ?? undefined,
    status: data.status,
    reviewerResponse: data.reviewer_response ?? undefined,
    timeline: data.timeline,
    createdAt: data.created_at,
  })
}
