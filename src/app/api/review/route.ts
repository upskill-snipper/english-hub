import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ─── Helpers ───────────────────────────────────────────────────────────────

function generateReferenceNumber(): string {
  const now = new Date()
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, '')
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `HR-${datePart}-${randomPart}`
}

const VALID_REASONS = ['inaccurate', 'unclear', 'unfair-score', 'missed-points', 'other'] as const

// ─── POST /api/review — create a new review request ───────────────────────
//
// P1 (Cycle 2 regression sweep → Cycle 5 fix): previously appended to an
// in-memory array at src/app/api/review/store.ts:21. Vercel lambda
// restarts / redeploys silently lost every queued review request. Now
// persisted in public.human_review_requests (see
// supabase/migrations/20260420_human_review_requests.sql).
// ──────────────────────────────────────────────────────────────────────────

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

    // Rate limit: 10 review requests per hour per user
    const rl = await rateLimit(`review:${user.id}`, {
      limit: 10,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many review requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const body = await request.json()
    const { essayId, reason, detail, selfAssessment } = body

    // ── Validation ──────────────────────────────────────────────────────
    if (!essayId || typeof essayId !== 'string') {
      return NextResponse.json({ error: 'essayId is required.' }, { status: 400 })
    }
    if (!reason || !VALID_REASONS.includes(reason)) {
      return NextResponse.json({ error: 'A valid reason is required.' }, { status: 400 })
    }
    if (!detail || typeof detail !== 'string' || detail.trim().length === 0) {
      return NextResponse.json({ error: 'Detail is required.' }, { status: 400 })
    }
    if (detail.length > 2000) {
      return NextResponse.json(
        { error: 'Detail must be 2000 characters or fewer.' },
        { status: 400 },
      )
    }
    if (selfAssessment && typeof selfAssessment === 'string' && selfAssessment.length > 1500) {
      return NextResponse.json(
        { error: 'Self-assessment must be 1500 characters or fewer.' },
        { status: 400 },
      )
    }

    // ── Build and persist ──────────────────────────────────────────────
    const referenceNumber = generateReferenceNumber()
    const now = new Date().toISOString()

    const timeline = [
      {
        stage: 'submitted',
        label: 'Review request submitted',
        timestamp: now,
        description: 'Your request has been received and queued for review.',
      },
      {
        stage: 'under-review',
        label: 'Under review',
        timestamp: null,
      },
      {
        stage: 'completed',
        label: 'Review completed',
        timestamp: null,
      },
    ]

    // Service role bypass so RLS policies stay restrictive (only allow
    // auth.uid() = user_id for anon/authenticated SELECT). The insert
    // still respects FK constraints — user_id must exist in auth.users.
    const admin = createServiceRoleClient()
    const { error: insertErr } = await admin.from('human_review_requests').insert({
      reference_number: referenceNumber,
      user_id: user.id,
      essay_id: essayId,
      // TODO(Phase-7): Query essay title from a Supabase essay table by
      // essayId. The in-memory predecessor used the same placeholder.
      essay_title: `Essay ${essayId}`,
      reason,
      detail: detail.trim(),
      self_assessment:
        selfAssessment && typeof selfAssessment === 'string' ? selfAssessment.trim() : null,
      status: 'submitted',
      timeline,
    })

    if (insertErr) {
      console.error('[api/review] insert failed:', insertErr)
      return NextResponse.json(
        { error: 'Could not submit your review request. Please try again.' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        referenceNumber,
        estimatedResponse: '3 school days',
      },
      { status: 201 },
    )
  } catch (err) {
    console.error('[api/review] unexpected error:', err)
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }
}

// ─── GET /api/review — list current user's review requests ──────────────

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // RLS policy scopes this to the authenticated user's own rows, so
  // the anon/authenticated client is enough — no service-role needed.
  const { data, error } = await supabase
    .from('human_review_requests')
    .select('reference_number, essay_title, reason, status, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[api/review GET] query failed:', error)
    return NextResponse.json({ error: 'Could not load your review requests.' }, { status: 500 })
  }

  const reviews = (data ?? []).map((r) => ({
    referenceNumber: r.reference_number,
    essayTitle: r.essay_title,
    reason: r.reason,
    status: r.status,
    createdAt: r.created_at,
  }))

  return NextResponse.json({ reviews })
}
