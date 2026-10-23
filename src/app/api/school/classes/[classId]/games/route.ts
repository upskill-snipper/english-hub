import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { classInScope, resolveStaffScope } from '../../../_lib/staff-scope'
import {
  classPupils,
  inBatches,
  pupilGameAnalytics,
  pupilNames,
  teacherWindowStart,
} from '../../../_lib/pupil-games'
import {
  latestClassReport,
  schoolAiStatus,
  type StoredClassReport,
} from '../../../_lib/class-report'
import { summariseClass, type ClassGamesSummary } from '@/lib/game-results/class-view'
import { CLASS_COACH_MIN_ANSWERS, CLASS_COACH_MIN_PUPILS } from '@/lib/game-results/class-coach'
import { activityNames } from '@/lib/game-results/names'
import type { GameAnalytics } from '@/lib/game-results/analytics'

export const dynamic = 'force-dynamic'

/**
 * GET /api/school/classes/[classId]/games: the class's game results, for its
 * teacher (16 October 2026; src/lib/game-results/class-view.ts).
 *
 * The founder asked on 13 October for game results to be tracked as detailed
 * analytics "in your hub and for schools". The pupil sees their own in their
 * hub; this is the school's side.
 *
 * WHO. Staff with the class in scope (resolveStaffScope, classInScope): a
 * teacher their own classes, admins and heads of department any class in the
 * school. Anyone else gets 404, so a class's existence is not confirmed.
 *
 * WHICH PUPILS. Those actively enrolled in the class AND pupils of the school
 * (classPupils in ../../../_lib/pupil-games.ts). The second check matters:
 * until the database rules of 16 October (document 21) are applied, a teacher
 * can still write an enrolment straight to the database, around the API. A
 * row that puts someone else's child into a class must not show that child's
 * games.
 *
 * WHICH ROUNDS. Only those finished since the pupil joined this class
 * (../../../_lib/pupil-games.ts). An enrolment with no date shows nothing.
 *
 * THE AI CLASS REPORT (23 October 2026). The response also carries the latest
 * AI report written about the class, and whether the school may ask for one
 * (POST ../coach; src/lib/game-results/class-coach.ts says what it is and why
 * it waited for the founder). The figures above are shown whatever the answer:
 * the founder decided on 13 October that analytics always show.
 *
 * A read failure is a 503 with a message, never an empty class: a teacher
 * shown "nobody has played" after a week of homework would be told something
 * false.
 */

export interface ClassGamesResponse {
  class: { id: string; name: string | null }
  summary: ClassGamesSummary
  /** Display names of the games and texts the summary mentions, as in the pupil's hub. */
  names: Record<string, string>
  report: {
    latest: StoredClassReport | null
    /** The school's access is live and it has recorded its authorisation for AI processing. */
    schoolAiAuthorised: boolean
    minPupils: number
    minAnswers: number
  }
}

export async function GET(_request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const { classId } = await props.params
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rl = await rateLimit(`school-class-games:${user.id}`, { limit: 60, windowSeconds: 3600 })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  const svc = createServiceRoleClient()
  const resolved = await resolveStaffScope(svc, user.id)
  if (!resolved.ok) {
    return NextResponse.json({ error: resolved.error }, { status: resolved.status })
  }
  const { scope } = resolved
  const cls = classInScope(scope, classId)
  if (!cls) return NextResponse.json({ error: 'Class not found' }, { status: 404 })

  try {
    const pupils = await classPupils(svc, scope.schoolId, classId)
    const pupilIds = pupils.map((p) => p.id)

    const [names, analytics, aiStatus, latest] = await Promise.all([
      pupilNames(svc, scope.schoolId, pupilIds),
      inBatches(pupils, 5, (p) => pupilGameAnalytics(p.id, teacherWindowStart(p.joinedAt))),
      schoolAiStatus(svc, scope.schoolId),
      latestClassReport(svc, classId),
    ])

    const summary = summariseClass(
      pupils.map((p, n) => ({
        id: p.id,
        name: names.get(p.id) ?? null,
        joinedAt: p.joinedAt,
        analytics: analytics[n],
      })),
    )

    const body: ClassGamesResponse = {
      class: { id: cls.id, name: cls.name ?? null },
      summary,
      names: namesFor(analytics),
      report: {
        latest,
        schoolAiAuthorised: aiStatus === 'ok',
        minPupils: CLASS_COACH_MIN_PUPILS,
        minAnswers: CLASS_COACH_MIN_ANSWERS,
      },
    }
    return NextResponse.json(body, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    console.error(
      '[school-class-games] read failed',
      err instanceof Error ? err.message : String(err),
    )
    return NextResponse.json(
      { error: 'The game results could not be loaded. Please try again.' },
      { status: 503 },
    )
  }
}

/** One map of display names covering every pupil's games and texts. */
function namesFor(all: readonly GameAnalytics[]): Record<string, string> {
  const out: Record<string, string> = {}
  for (const a of all) Object.assign(out, activityNames(a))
  return out
}
