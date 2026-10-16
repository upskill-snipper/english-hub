import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { classInScope, pupilsOfSchool, resolveStaffScope } from '../../../_lib/staff-scope'
import {
  inBatches,
  pupilGameAnalytics,
  pupilNames,
  teacherWindowStart,
} from '../../../_lib/pupil-games'
import { summariseClass, type ClassGamesSummary } from '@/lib/game-results/class-view'
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
 * (pupilsOfSchool). The second check matters: until the database rules
 * prepared on 16 October are approved (document 21), a teacher can still
 * write an enrolment straight to the database, around the API. A row that
 * puts someone else's child into a class must not show that child's games.
 *
 * WHICH ROUNDS. Only those finished since the pupil joined this class
 * (../../../_lib/pupil-games.ts). An enrolment with no date shows nothing.
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
    const { data: enrolled, error: enrolError } = await svc
      .from('class_students')
      .select('student_id, joined_at')
      .eq('class_id', classId)
      .eq('is_active', true)
    if (enrolError) throw new Error(`class_students read failed: ${enrolError.message}`)

    const joinedAt = new Map<string, string | null>()
    for (const r of (enrolled ?? []) as { student_id: string; joined_at: string | null }[]) {
      if (!joinedAt.has(r.student_id)) joinedAt.set(r.student_id, r.joined_at)
    }
    const ours = await pupilsOfSchool(svc, scope.schoolId, [...joinedAt.keys()])
    const pupilIds = [...joinedAt.keys()].filter((id) => ours.has(id))

    const [names, analytics] = await Promise.all([
      pupilNames(svc, scope.schoolId, pupilIds),
      inBatches(pupilIds, 5, (id) =>
        pupilGameAnalytics(id, teacherWindowStart(joinedAt.get(id) ?? null)),
      ),
    ])

    const summary = summariseClass(
      pupilIds.map((id, n) => ({
        id,
        name: names.get(id) ?? null,
        joinedAt: joinedAt.get(id) ?? null,
        analytics: analytics[n],
      })),
    )

    const body: ClassGamesResponse = {
      class: { id: cls.id, name: cls.name ?? null },
      summary,
      names: namesFor(analytics),
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
