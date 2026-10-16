import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import {
  canViewPupil,
  chunks,
  IN_CHUNK,
  pupilsOfSchool,
  resolveStaffScope,
  scopedClassIds,
  type StaffScope,
} from '../../../_lib/staff-scope'
import { pupilGameAnalytics, teacherWindowStart } from '../../../_lib/pupil-games'
import { activityNames } from '@/lib/game-results/names'
import type { GameAnalytics } from '@/lib/game-results/analytics'
import type { SupabaseClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

/**
 * GET /api/school/students/[studentId]/games: one pupil's game results, for
 * the staff who may see that pupil (16 October 2026). The figures are the
 * pupil's own hub's (analyseRounds), so the two never disagree; the page shows
 * them with GameAnalyticsBody in its teacher form, without the pupil's next
 * steps, suggestions switch or AI coach.
 *
 * WHO. Staff who may see the pupil (canViewPupil: a teacher a pupil in one of
 * their classes, admins and heads of department any pupil of the school), and
 * the pupil must be a pupil of the school (pupilsOfSchool): until document
 * 21's database rules are approved, an enrolment can still be written around
 * the API, and it must not open another child's games. Otherwise 404.
 *
 * WHICH ROUNDS. Only those finished since the pupil joined a class the viewer
 * can see; for admins and heads of department, failing that, since they
 * joined the school. Nothing when no date is known
 * (../../../_lib/pupil-games.ts).
 */

export interface PupilGamesResponse {
  analytics: GameAnalytics
  names: Record<string, string>
  /** The start of what is shown, or null when nothing can be. */
  since: string | null
}

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ studentId: string }> },
) {
  const { studentId } = await props.params
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rl = await rateLimit(`school-pupil-games:${user.id}`, { limit: 120, windowSeconds: 3600 })
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

  try {
    const visible =
      (await canViewPupil(svc, scope, studentId)) &&
      (await pupilsOfSchool(svc, scope.schoolId, [studentId])).has(studentId)
    if (!visible) return NextResponse.json({ error: 'Pupil not found' }, { status: 404 })

    const since = teacherWindowStart(await joinedFor(svc, scope, studentId))
    const analytics = await pupilGameAnalytics(studentId, since)
    const body: PupilGamesResponse = {
      analytics,
      names: activityNames(analytics),
      since: since ? since.toISOString() : null,
    }
    return NextResponse.json(body, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    console.error(
      '[school-pupil-games] read failed',
      err instanceof Error ? err.message : String(err),
    )
    return NextResponse.json(
      { error: 'The game results could not be loaded. Please try again.' },
      { status: 503 },
    )
  }
}

/** The earliest date the pupil joined something the viewer can see, or null. */
async function joinedFor(
  svc: SupabaseClient,
  scope: StaffScope,
  pupilId: string,
): Promise<string | null> {
  const dates: string[] = []
  for (const chunk of chunks(scopedClassIds(scope), IN_CHUNK)) {
    const { data, error } = await svc
      .from('class_students')
      .select('joined_at')
      .eq('student_id', pupilId)
      .eq('is_active', true)
      .in('class_id', chunk)
    if (error) throw new Error(`class_students read failed: ${error.message}`)
    for (const r of (data ?? []) as { joined_at: string | null }[]) {
      if (r.joined_at) dates.push(r.joined_at)
    }
  }
  if (dates.length === 0 && scope.wholeSchool) {
    const [members, joined] = await Promise.all([
      svc
        .from('school_members')
        .select('accepted_at, created_at')
        .eq('school_id', scope.schoolId)
        .eq('role', 'student')
        .eq('user_id', pupilId),
      svc
        .from('school_students')
        .select('joined_at')
        .eq('school_id', scope.schoolId)
        .eq('user_id', pupilId)
        .neq('status', 'removed'),
    ])
    if (members.error) throw new Error(`school_members read failed: ${members.error.message}`)
    if (joined.error) throw new Error(`school_students read failed: ${joined.error.message}`)
    for (const r of (members.data ?? []) as {
      accepted_at: string | null
      created_at: string | null
    }[]) {
      const d = r.accepted_at ?? r.created_at
      if (d) dates.push(d)
    }
    for (const r of (joined.data ?? []) as { joined_at: string | null }[]) {
      if (r.joined_at) dates.push(r.joined_at)
    }
  }
  const times = dates.map((d) => Date.parse(d)).filter((t) => Number.isFinite(t))
  return times.length ? new Date(Math.min(...times)).toISOString() : null
}
