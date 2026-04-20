// ─── School Analytics: Hardest Questions ────────────────────────────────────
//
// GET /api/school/analytics/hardest-questions?limit=10
//
// Returns the top-N hardest questions (lowest correct-rate) across the
// platform, powered by `getHardestQuestions` / `getQuestionDifficulty` in
// `@/lib/analytics/aggregate`.
//
// Auth: school admin, head_of_department, or teacher.
// Rate-limited per IP (20 req/min).
//
// TODO(school-scope): filter to questions attempted by students of the
// caller's school. Needs a join through `school_members.user_id` →
// `quiz_responses.user_id`. For now this returns platform-wide data —
// honest and useful while we grow.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { getHardestQuestions } from '@/lib/analytics/aggregate'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ──
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-hardest-questions:${ip}`, {
      limit: 20,
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

    // ── Auth ──
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: school admin or teacher access required' },
        { status: 403 },
      )
    }

    // ── Fetch ──
    const { searchParams } = new URL(request.url)
    const rawLimit = Number(searchParams.get('limit') ?? 10)
    const limit = Number.isFinite(rawLimit) ? Math.min(Math.max(Math.trunc(rawLimit), 1), 50) : 10

    const admin = createServiceRoleClient()
    const hardestQuestions = await getHardestQuestions(admin, limit)

    return NextResponse.json({ hardestQuestions })
  } catch (error) {
    console.error('[school/analytics/hardest-questions] GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
