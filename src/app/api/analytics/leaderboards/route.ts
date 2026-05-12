/**
 * GET /api/analytics/leaderboards
 *
 * Public, unauthenticated endpoint that returns the public-stats
 * aggregations used both inside the app and on marketing pages
 * (most-read poems, hardest questions, board averages, game
 * engagement). Cached at the edge for 5 minutes with a 60-second
 * stale-while-revalidate window — these numbers are aesthetic, never
 * load-bearing for billing or grades.
 *
 * Privacy posture:
 *   1. Uses the SSR Supabase client (anon role + RLS), never the
 *      service-role bypass.
 *   2. The aggregations themselves only `select(...)` non-PII columns.
 *   3. `redactPII` runs over the JSON response as defence-in-depth so
 *      a column rename or future schema drift can't leak identifiers.
 */

import { NextResponse } from 'next/server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { buildLeaderboardAggregations, redactPII } from '@/lib/analytics/aggregate-progress'

// Force runtime evaluation per request — `s-maxage` handles caching.
// The default static-render heuristic would otherwise try to evaluate
// the route at build time, where there is no Supabase session.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const aggregations = await buildLeaderboardAggregations(supabase)
    const safe = redactPII(aggregations)

    return NextResponse.json(safe, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    })
  } catch (err) {
    // Never leak the underlying error to a public endpoint — log via
    // the platform's stderr capture (Vercel/observability) and return
    // an opaque 500. This route is best-effort marketing data; callers
    // already gracefully degrade when it fails.
    console.error('[api/analytics/leaderboards] aggregation failed:', err)
    return NextResponse.json({ error: 'Failed to compute leaderboards' }, { status: 500 })
  }
}
