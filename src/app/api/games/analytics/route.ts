import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { readRounds } from '@/lib/game-results/store'
import { analyseRounds } from '@/lib/game-results/analytics'
import { nextSteps } from '@/lib/game-results/next-steps'
import { activityNames } from '@/lib/game-results/names'

export const dynamic = 'force-dynamic'

/**
 * GET /api/games/analytics: the signed-in student's own game analytics, for
 * their hub (/dashboard/learning).
 *
 * Always: the figures from src/lib/game-results/analytics.ts, which describe
 * what the student did, and the names of what they played.
 *
 * Only when the account's `personalised_recommendations` setting is on: the
 * rule-based next steps. The founder decided on 13 October 2026 that
 * suggestions follow that setting, which the Children's Code defaults switch
 * off for under-18s; `suggestions.allowed` tells the hub which to show, and a
 * student can switch it on from there (PUT /api/games/suggestions). Unsure
 * (the profile cannot be read) means off.
 *
 * A read failure is a 503 with a message, never an empty record: a student
 * shown "nothing played yet" after a week of games would be told something
 * false.
 */
export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rl = await rateLimit(`game-analytics:${user.id}`, { limit: 120, windowSeconds: 3600 })
  if (!rl.success) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  let rounds
  try {
    rounds = await readRounds(user.id)
  } catch (err) {
    console.error('[game-analytics] read failed', err instanceof Error ? err.message : String(err))
    return NextResponse.json({ error: 'Your results could not be loaded' }, { status: 503 })
  }
  const analytics = analyseRounds(rounds)

  let allowed = false
  try {
    const { data } = await createServiceRoleClient()
      .from('profiles')
      .select('personalised_recommendations')
      .eq('id', user.id)
      .maybeSingle<{ personalised_recommendations: boolean | null }>()
    allowed = data?.personalised_recommendations === true
  } catch {
    allowed = false
  }

  const steps = allowed ? nextSteps(analytics) : null
  const stepGames = (steps ?? []).flatMap((s) =>
    typeof s.params.game === 'string' ? [s.params.game] : [],
  )

  return NextResponse.json(
    {
      analytics,
      names: activityNames(analytics, stepGames),
      suggestions: { allowed },
      nextSteps: steps,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
