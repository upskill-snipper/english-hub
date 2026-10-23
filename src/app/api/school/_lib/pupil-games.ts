import type { SupabaseClient } from '@supabase/supabase-js'
import { ANALYTICS_WINDOW_DAYS, readRounds } from '@/lib/game-results/store'
import { analyseRounds, type GameAnalytics } from '@/lib/game-results/analytics'
import { chunks, IN_CHUNK, pupilsOfSchool } from './staff-scope'

/**
 * What a teacher may see of a pupil's games (16 October 2026).
 *
 * ONLY ROUNDS SINCE THE PUPIL JOINED. A pupil's game rounds are theirs from
 * the day they open an account; a school sees them because the pupil is now
 * its pupil. So a teacher sees rounds finished since the pupil joined the
 * class (the class view) or since they joined a class the teacher can see
 * (the pupil page), never what the child played before, at home or at
 * another school. Where the enrolment gives no date, nothing is shown: an
 * unknown start must not become "everything". Whether teachers should see
 * earlier activity is the founder's question (document 21, 16 October).
 *
 * The window is also never longer than the analytics window
 * (ANALYTICS_WINDOW_DAYS), as for the pupil's own hub.
 */

const DAY_MS = 86_400_000

/** The earliest moment a teacher may see from, or null for "nothing". */
export function teacherWindowStart(joinedAt: string | null, now = Date.now()): Date | null {
  if (!joinedAt) return null
  const t = Date.parse(joinedAt)
  if (!Number.isFinite(t)) return null
  return new Date(Math.max(t, now - ANALYTICS_WINDOW_DAYS * DAY_MS))
}

/**
 * The pupils of a class a teacher may see: those actively enrolled in it AND
 * pupils of the school (pupilsOfSchool), each with the date they joined.
 *
 * The second check matters: until the database rules of 16 October (document
 * 21) are applied, a teacher can still write an enrolment straight to the
 * database, around the API, and a row that puts someone else's child into a
 * class must not show that child's games. Throws on a read error.
 */
export async function classPupils(
  svc: SupabaseClient,
  schoolId: string,
  classId: string,
): Promise<{ id: string; joinedAt: string | null }[]> {
  const { data: enrolled, error } = await svc
    .from('class_students')
    .select('student_id, joined_at')
    .eq('class_id', classId)
    .eq('is_active', true)
  if (error) throw new Error(`class_students read failed: ${error.message}`)

  const joinedAt = new Map<string, string | null>()
  for (const r of (enrolled ?? []) as { student_id: string; joined_at: string | null }[]) {
    if (!joinedAt.has(r.student_id)) joinedAt.set(r.student_id, r.joined_at)
  }
  const ours = await pupilsOfSchool(svc, schoolId, [...joinedAt.keys()])
  return [...joinedAt.entries()]
    .filter(([id]) => ours.has(id))
    .map(([id, joined]) => ({ id, joinedAt: joined }))
}

/**
 * A pupil's analytics from `since`, or an empty record when there is no
 * start. Throws on a read error: a teacher must be told the results could not
 * be loaded, never shown an empty record as if the pupil had not played.
 */
export async function pupilGameAnalytics(
  pupilId: string,
  since: Date | null,
  now = new Date(),
): Promise<GameAnalytics> {
  const rounds = since ? await readRounds(pupilId, { since }) : []
  return analyseRounds(rounds, now)
}

/**
 * Pupils' names as the school knows them (their school_members row), falling
 * back to their profile's name. Never an email: the game views show names.
 * Throws on a read error.
 */
export async function pupilNames(
  svc: SupabaseClient,
  schoolId: string,
  pupilIds: readonly string[],
): Promise<Map<string, string | null>> {
  const names = new Map<string, string | null>()
  for (const chunk of chunks(pupilIds, IN_CHUNK)) {
    const { data, error } = await svc
      .from('school_members')
      .select('user_id, full_name')
      .eq('school_id', schoolId)
      .eq('role', 'student')
      .in('user_id', chunk)
    if (error) throw new Error(`school_members read failed: ${error.message}`)
    for (const r of (data ?? []) as { user_id: string; full_name: string | null }[]) {
      if (r.full_name?.trim()) names.set(r.user_id, r.full_name.trim())
    }
  }
  const missing = pupilIds.filter((id) => !names.has(id))
  for (const chunk of chunks(missing, IN_CHUNK)) {
    const { data, error } = await svc.from('profiles').select('id, full_name').in('id', chunk)
    if (error) throw new Error(`profiles read failed: ${error.message}`)
    for (const r of (data ?? []) as { id: string; full_name: string | null }[]) {
      names.set(r.id, r.full_name?.trim() || null)
    }
  }
  for (const id of pupilIds) if (!names.has(id)) names.set(id, null)
  return names
}

/** Runs `fn` over `items`, `width` at a time, keeping their order. Rejects on the first failure. */
export async function inBatches<T, R>(
  items: readonly T[],
  width: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out: R[] = []
  for (let i = 0; i < items.length; i += width) {
    out.push(...(await Promise.all(items.slice(i, i + width).map(fn))))
  }
  return out
}
