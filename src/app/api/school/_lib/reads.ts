// ─── Scoped reads of the marking spine, for the school portal ──────────────
//
// Every function here reads with the client it is given (the routes pass the
// service-role client) and narrows by the viewer's StaffScope itself. None of
// them turns a failed read into an empty one: a Supabase error is thrown,
// and the route answers with an error status. "This teacher has no work yet"
// and "the read failed" must never look the same (docs/system/08 section 8).
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { IN_CHUNK, chunks, scopedClassIds, type StaffScope } from './staff-scope'

export class ScopedReadError extends Error {
  constructor(table: string, message: string) {
    super(`${table} read failed: ${message}`)
    this.name = 'ScopedReadError'
  }
}

// ─── Reading every row ──────────────────────────────────────────────────────

/** Rows asked for per request. */
export const PAGE_SIZE = 1000

/**
 * Read every row a query matches, a page at a time.
 *
 * WHY. PostgREST answers at most its db-max-rows setting (1,000 by default on
 * Supabase) and says nothing about the rows it left out, so an unpaged read
 * of a whole school's quiz history looks complete when it is not. Each page
 * asks for an exact count, and the loop stops only when it holds that many
 * rows. A page that comes back empty while rows are still owed is an error,
 * not the end.
 *
 * The caller's query must select with `{ count: 'exact' }` and order by
 * something stable, so pages do not overlap or skip.
 */
export async function readAllPages<T>(
  table: string,
  page: (
    from: number,
    to: number,
  ) => PromiseLike<{ data: unknown; error: { message: string } | null; count?: number | null }>,
): Promise<T[]> {
  const out: T[] = []
  for (let from = 0; ; ) {
    const { data, error, count } = await page(from, from + PAGE_SIZE - 1)
    if (error) throw new ScopedReadError(table, error.message)
    if (typeof count !== 'number') throw new ScopedReadError(table, 'no row count returned')
    const rows = (data ?? []) as T[]
    out.push(...rows)
    if (out.length >= count) return out
    if (rows.length === 0) {
      throw new ScopedReadError(table, `read ${out.length} of ${count} rows and then got none`)
    }
    from += rows.length
  }
}

// ─── Submissions ────────────────────────────────────────────────────────────

export interface SubmissionFilter {
  studentId?: string
  classId?: string
  /** ISO timestamp; only essays submitted at or after it. */
  since?: string
  statuses?: readonly string[]
  /** Leave essays at these statuses out. */
  excludeStatuses?: readonly string[]
  /** At most this many rows, newest first. */
  limit: number
}

export interface ScopedRows<T> {
  rows: T[]
  /** How many rows matched, which is more than rows.length when the limit cut it short. */
  total: number
}

/**
 * marking_submissions rows the viewer may see, newest first, up to
 * filter.limit, with the true number that matched.
 *
 * The school filter applies to everyone. A teacher is further limited to the
 * classes they teach; a teacher who teaches none gets nothing without a
 * query, because `in ()` is not a filter worth trusting to mean "none".
 *
 * Read a page at a time, like readAllPages: one request for 5,000 rows comes
 * back with PostgREST's cap of 1,000 and no sign that it stopped. The total
 * lets a caller say so when its own limit is what stopped it.
 */
export async function readScopedSubmissions<T>(
  svc: SupabaseClient,
  scope: StaffScope,
  columns: string,
  filter: SubmissionFilter,
): Promise<ScopedRows<T>> {
  if (!scope.wholeSchool && scope.classes.length === 0) return { rows: [], total: 0 }

  const page = (from: number, to: number) => {
    let query = svc
      .from('marking_submissions')
      .select(columns, { count: 'exact' })
      .eq('school_id', scope.schoolId)
    if (!scope.wholeSchool) query = query.in('class_id', scopedClassIds(scope))
    if (filter.classId) query = query.eq('class_id', filter.classId)
    if (filter.studentId) query = query.eq('student_id', filter.studentId)
    if (filter.since) query = query.gte('submitted_at', filter.since)
    if (filter.statuses) query = query.in('status', [...filter.statuses])
    if (filter.excludeStatuses?.length) {
      query = query.not(
        'status',
        'in',
        `(${filter.excludeStatuses.map((s) => `"${s}"`).join(',')})`,
      )
    }
    // `id` last, so essays submitted in the same instant keep their order
    // from one page to the next.
    return query.order('submitted_at', { ascending: false }).order('id').range(from, to)
  }

  const rows: T[] = []
  let total = 0
  for (let from = 0; ; ) {
    const { data, error, count } = await page(from, Math.min(from + PAGE_SIZE, filter.limit) - 1)
    if (error) throw new ScopedReadError('marking_submissions', error.message)
    if (typeof count !== 'number') {
      throw new ScopedReadError('marking_submissions', 'no row count returned')
    }
    total = count
    const got = (data ?? []) as T[]
    rows.push(...got)
    const wanted = Math.min(count, filter.limit)
    if (rows.length >= wanted) return { rows: rows.slice(0, filter.limit), total }
    if (got.length === 0) {
      throw new ScopedReadError(
        'marking_submissions',
        `read ${rows.length} of ${wanted} rows and then got none`,
      )
    }
    from += got.length
  }
}

/**
 * How many essays in scope match, without reading them. Same scope rule as
 * readScopedSubmissions. A missing count is an error, never a zero.
 */
export async function countScopedSubmissions(
  svc: SupabaseClient,
  scope: StaffScope,
  filter: { statuses?: readonly string[]; since?: string; reviewedSince?: string },
): Promise<number> {
  if (!scope.wholeSchool && scope.classes.length === 0) return 0

  let query = svc
    .from('marking_submissions')
    .select('id', { count: 'exact', head: true })
    .eq('school_id', scope.schoolId)
  if (!scope.wholeSchool) query = query.in('class_id', scopedClassIds(scope))
  if (filter.statuses) query = query.in('status', [...filter.statuses])
  if (filter.since) query = query.gte('submitted_at', filter.since)
  if (filter.reviewedSince) query = query.gte('teacher_reviewed_at', filter.reviewedSince)

  const { count, error } = await query
  if (error) throw new ScopedReadError('marking_submissions', error.message)
  if (typeof count !== 'number')
    throw new ScopedReadError('marking_submissions', 'no count returned')
  return count
}

// ─── Moderations ────────────────────────────────────────────────────────────

export interface ModerationRow {
  id: string
  submission_id: string
  decision: string
  teacher_grade: string | null
  ao_corrections: unknown
  created_at: string | null
}

/**
 * Teacher decisions for these submissions, newest first. The ids must
 * already be ones the viewer may see; this read adds no scope of its own.
 */
export async function readModerations(
  svc: SupabaseClient,
  submissionIds: readonly string[],
): Promise<ModerationRow[]> {
  const out: ModerationRow[] = []
  for (const chunk of chunks(submissionIds, IN_CHUNK)) {
    const { data, error } = await svc
      .from('teacher_moderations')
      .select('id, submission_id, decision, teacher_grade, ao_corrections, created_at')
      .in('submission_id', chunk)
      .order('created_at', { ascending: false })
    if (error) throw new ScopedReadError('teacher_moderations', error.message)
    out.push(...((data ?? []) as ModerationRow[]))
  }
  return out.sort((a, b) => Date.parse(b.created_at ?? '') - Date.parse(a.created_at ?? ''))
}

// ─── Pupils ─────────────────────────────────────────────────────────────────

export interface PupilIdentity {
  id: string
  /** Null when neither the school's record nor the profile has a name. */
  name: string | null
  email: string | null
  yearGroup: string | null
  /** From the pupil's profile; the school's record does not hold one. */
  examBoard: string | null
}

function clean(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

/**
 * Names for pupils whose work the viewer can already see.
 *
 * WHY HERE (12 October 2026). The queue used to look names up through the
 * teacher's own session, where RLS on profiles lets a user read only their
 * own row, so every pupil came back as "Student". The school's own record
 * (school_members, written by the bulk upload) is preferred; the pupil's
 * profile fills any gap. A failed read is an error, not a page of unnamed
 * pupils: a teacher cannot mark work without knowing whose it is.
 */
export async function readPupilIdentities(
  svc: SupabaseClient,
  schoolId: string,
  pupilIds: readonly string[],
): Promise<Map<string, PupilIdentity>> {
  const ids = Array.from(new Set(pupilIds))
  const school = new Map<string, { full_name: unknown; email: unknown; year_group: unknown }>()
  const profile = new Map<
    string,
    { full_name: unknown; email: unknown; year_group: unknown; exam_board: unknown }
  >()

  for (const chunk of chunks(ids, IN_CHUNK)) {
    const [members, profiles] = await Promise.all([
      svc
        .from('school_members')
        .select('user_id, full_name, email, year_group')
        .eq('school_id', schoolId)
        .in('user_id', chunk),
      svc.from('profiles').select('id, full_name, email, year_group, exam_board').in('id', chunk),
    ])
    if (members.error) throw new ScopedReadError('school_members', members.error.message)
    if (profiles.error) throw new ScopedReadError('profiles', profiles.error.message)
    for (const m of (members.data ?? []) as Array<{ user_id: string } & Record<string, unknown>>) {
      if (!school.has(m.user_id)) {
        school.set(m.user_id, { full_name: m.full_name, email: m.email, year_group: m.year_group })
      }
    }
    for (const p of (profiles.data ?? []) as Array<{ id: string } & Record<string, unknown>>) {
      profile.set(p.id, {
        full_name: p.full_name,
        email: p.email,
        year_group: p.year_group,
        exam_board: p.exam_board,
      })
    }
  }

  const out = new Map<string, PupilIdentity>()
  for (const id of ids) {
    const s = school.get(id)
    const p = profile.get(id)
    out.set(id, {
      id,
      name: clean(s?.full_name) ?? clean(p?.full_name),
      email: clean(s?.email) ?? clean(p?.email),
      yearGroup: clean(s?.year_group) ?? clean(p?.year_group),
      examBoard: clean(p?.exam_board),
    })
  }
  return out
}

// ─── Subjects ───────────────────────────────────────────────────────────────

/**
 * The board and subject an essay was marked against, which every objective
 * is keyed by (see objectives.ts). The mark scheme is authoritative; a row
 * whose scheme is not in the registry falls back to its own board and
 * qualification columns.
 */
export function subjectOf(row: {
  mark_scheme_id: string | null
  exam_board: string | null
  qualification: string | null
}): { key: string; label: string | null } {
  const scheme = row.mark_scheme_id ? getMarkScheme(row.mark_scheme_id) : null
  if (scheme) {
    return { key: `${scheme.board}|${scheme.subject}`, label: `${scheme.board} ${scheme.subject}` }
  }
  const board = clean(row.exam_board)
  const qualification = clean(row.qualification)
  return {
    key: `${board ?? ''}|${qualification ?? ''}`,
    label: [board, qualification].filter(Boolean).join(' ') || null,
  }
}

/** Words in an essay, for display; the text itself stays on the server. */
export function wordCount(essay: unknown): number {
  if (typeof essay !== 'string') return 0
  const trimmed = essay.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}
