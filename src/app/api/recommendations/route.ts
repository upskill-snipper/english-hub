// ─── GET /api/recommendations ───────────────────────────────────────────────
// Returns 3-5 prioritised "focus on" recommendations for the
// authenticated student. Responses are intentionally short-lived because
// they reflect the user's most recent progress.
//
// Auth required - anonymous callers receive 401. The Children's Code
// gate (see `getFocusRecommendations`) further restricts output: when
// `profiles.personalised_recommendations` is not explicitly true, an
// empty array is returned.
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { getFocusRecommendations } from '@/lib/recommendations/focus-on'

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ─────────────────────────────────────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`recommendations-get:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // ── Auth check ─────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ── Build recommendations ──────────────────────────────────────────
    const recommendations = await getFocusRecommendations(user.id, supabase)

    return NextResponse.json(
      { recommendations },
      {
        // Each user's recs depend on their progress; never share between
        // users and never let a CDN cache the personalised payload.
        headers: { 'Cache-Control': 'private, no-store' },
      },
    )
  } catch (err) {
    console.error('[recommendations] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
