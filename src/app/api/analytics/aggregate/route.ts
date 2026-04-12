// ─── Aggregate Analytics API ────────────────────────────────────────────────
//
// GET /api/analytics/aggregate
//
// Returns platform-wide aggregate stats (not per-user).
// No auth required — this is public aggregate data.
// Cached for 1 hour via Next.js revalidation.
//
// TODO(Phase-7): replace mock Supabase client with real one once
// aggregate queries are wired to live data.
// ────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { getAggregateSnapshot } from '@/lib/analytics/aggregate'
import type { SupabaseClient } from '@supabase/supabase-js'

// Cache for 1 hour
export const revalidate = 3600

export async function GET() {
  try {
    // TODO(Phase-7): replace with real Supabase client
    // import { createServiceRoleClient } from '@/lib/supabase/server'
    // const supabase = createServiceRoleClient()
    const supabase = {} as SupabaseClient

    const snapshot = await getAggregateSnapshot(supabase)

    return NextResponse.json(snapshot, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('[Aggregate Analytics] Failed to generate snapshot:', error)
    return NextResponse.json(
      { error: 'Failed to load aggregate analytics' },
      { status: 500 }
    )
  }
}
