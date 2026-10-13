import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { readRounds } from '@/lib/game-results/store'
import { analyseRounds } from '@/lib/game-results/analytics'
import { nextSteps } from '@/lib/game-results/next-steps'
import { activityNames } from '@/lib/game-results/names'
import { hasActiveSubscription } from '@/lib/course-access'
import { COACH_COOLDOWN_HOURS, COACH_MIN_ANSWERS, type CoachReport } from '@/lib/game-results/coach'

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

  // The coach card: the latest report the student asked for, and whether
  // they could ask for one. Reads only: the consent gate, which can email a
  // guardian, runs when the student actually asks (POST /api/games/coach).
  let latest: { report: CoachReport; createdAt: string; answersUsed: number } | null = null
  let planned = false
  if (allowed) {
    try {
      const { data } = await createServiceRoleClient()
        .from('coach_reports')
        .select('report, created_at, answers_used')
        .eq('user_id', user.id)
        .eq('audience', 'student')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle<{ report: CoachReport; created_at: string; answers_used: number }>()
      if (data)
        latest = { report: data.report, createdAt: data.created_at, answersUsed: data.answers_used }
    } catch {
      latest = null
    }
    try {
      planned = await hasActiveSubscription(supabase, user.id)
    } catch {
      planned = false
    }
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
      coach: allowed
        ? { latest, planned, minAnswers: COACH_MIN_ANSWERS, cooldownHours: COACH_COOLDOWN_HOURS }
        : null,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
