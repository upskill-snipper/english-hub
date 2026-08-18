// ─── Canonical school student membership ────────────────────────────────────
//
// The portal historically held FOUR competing definitions of "a student":
// school_members role='student', school_students, class_students and the
// Prisma User row. The two membership-level sources are unified here so
// every API answers "who are this school's students?" identically:
//
//   • school_members role='student'  - written by /api/school/students POST
//     and the bulk import (valid once the 20260818 migration widens the
//     role CHECK to include 'student').
//   • school_students                - written by the join-code flow
//     (/api/school/join). Uses user_id + status, NOT student_id/is_active.
//
// The two sets are UNIONED (deduplicated by user_id, school_members row
// preferred because it carries name/email/invite metadata) so historic rows
// from either write path survive. class_students stays a class-level
// roster, not a school membership source.
//
// All queries run through a passed-in Supabase client (normally the
// service-role client) so the caller keeps control of privilege.
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'

export interface SchoolStudentRecord {
  /** The membership row's own id (school_members.id or school_students.id). */
  id: string
  /** Auth user id. Null only for pending school_members invites. */
  user_id: string | null
  full_name: string | null
  email: string | null
  year_group: string | null
  /** school_students rows joined via code, so they always read 'accepted'. */
  invite_status: string
  last_active_at: string | null
  created_at: string | null
  /** Which canonical table the row came from. */
  source_table: 'school_members' | 'school_students'
}

export interface GetSchoolStudentsOptions {
  /**
   * When true, only memberships that are live: school_members rows with
   * invite_status='accepted' and school_students rows with status='active'.
   * When false (default), pending invites and suspended pupils are included
   * (rows with school_students.status='removed' are never returned).
   */
  acceptedOnly?: boolean
}

/**
 * Returns the union of a school's student memberships across both canonical
 * tables, deduplicated by user_id and sorted by display name.
 */
export async function getSchoolStudents(
  client: SupabaseClient,
  schoolId: string,
  options: GetSchoolStudentsOptions = {},
): Promise<SchoolStudentRecord[]> {
  const acceptedOnly = options.acceptedOnly ?? false

  // ── 1. school_members role='student' ──────────────────────────────────
  let membersQuery = client
    .from('school_members')
    .select('id, user_id, full_name, email, year_group, invite_status, last_active_at, created_at')
    .eq('school_id', schoolId)
    .eq('role', 'student')

  if (acceptedOnly) {
    membersQuery = membersQuery.eq('invite_status', 'accepted')
  }

  // ── 2. school_students (join-code flow) ───────────────────────────────
  // Schema: user_id + status ('active'|'suspended'|'removed') per
  // 20260404_school_promo_and_access.sql. 'removed' rows are always
  // excluded - removal is the soft delete for this table.
  let joinQuery = client
    .from('school_students')
    .select('id, user_id, year_group, status, joined_at')
    .eq('school_id', schoolId)

  joinQuery = acceptedOnly
    ? joinQuery.eq('status', 'active')
    : joinQuery.in('status', ['active', 'suspended'])

  const [membersResult, joinResult] = await Promise.all([membersQuery, joinQuery])

  if (membersResult.error) {
    throw new Error(`school_members student read failed: ${membersResult.error.message}`)
  }
  if (joinResult.error) {
    throw new Error(`school_students read failed: ${joinResult.error.message}`)
  }

  type MemberRow = {
    id: string
    user_id: string | null
    full_name: string | null
    email: string | null
    year_group: string | null
    invite_status: string | null
    last_active_at: string | null
    created_at: string | null
  }
  type JoinRow = {
    id: string
    user_id: string
    year_group: string | null
    status: string
    joined_at: string | null
  }

  const memberRows = (membersResult.data ?? []) as MemberRow[]
  const joinRows = (joinResult.data ?? []) as JoinRow[]

  const records: SchoolStudentRecord[] = memberRows.map((m) => ({
    id: m.id,
    user_id: m.user_id,
    full_name: m.full_name,
    email: m.email,
    year_group: m.year_group,
    invite_status: m.invite_status ?? 'pending',
    last_active_at: m.last_active_at,
    created_at: m.created_at,
    source_table: 'school_members',
  }))

  // Deduplicate by user_id: the school_members row wins because it carries
  // name/email/invite metadata the school_students row lacks.
  const knownUserIds = new Set(records.map((r) => r.user_id).filter(Boolean) as string[])
  const joinOnly = joinRows.filter((r) => r.user_id && !knownUserIds.has(r.user_id))

  // ── 3. Resolve names/emails for join-only rows from profiles ──────────
  // school_students stores no name or email; without this the students
  // page would render blank rows for every code-joined pupil.
  const profileMap = new Map<string, { full_name: string | null; email: string | null }>()
  if (joinOnly.length > 0) {
    const { data: profileRows } = await client
      .from('profiles')
      .select('id, full_name, email')
      .in(
        'id',
        joinOnly.map((r) => r.user_id),
      )
    for (const p of (profileRows ?? []) as {
      id: string
      full_name: string | null
      email: string | null
    }[]) {
      profileMap.set(p.id, { full_name: p.full_name, email: p.email })
    }
  }

  for (const r of joinOnly) {
    const profile = profileMap.get(r.user_id)
    records.push({
      id: r.id,
      user_id: r.user_id,
      full_name: profile?.full_name ?? null,
      email: profile?.email ?? null,
      year_group: r.year_group,
      // A join-code pupil accepted membership by joining; there is no
      // pending state in this flow.
      invite_status: 'accepted',
      last_active_at: null,
      created_at: r.joined_at,
      source_table: 'school_students',
    })
  }

  records.sort((a, b) => (a.full_name ?? '').localeCompare(b.full_name ?? ''))
  return records
}

/**
 * Distinct auth user ids of a school's live students (accepted/active only,
 * null user_ids from pending invites excluded). The scoping primitive for
 * analytics and CEFR aggregation.
 */
export async function getSchoolStudentUserIds(
  client: SupabaseClient,
  schoolId: string,
): Promise<string[]> {
  const students = await getSchoolStudents(client, schoolId, { acceptedOnly: true })
  return Array.from(new Set(students.map((s) => s.user_id).filter(Boolean) as string[]))
}

/**
 * Fallback display name for membership rows created from an email address
 * alone (invites): the email local-part with separators spaced and words
 * capitalised, e.g. 'j.smith' becomes 'J Smith'. Kept here so the invite
 * and join flows derive names identically.
 */
export function displayNameFromEmail(email: string): string {
  const localPart = email.split('@')[0] ?? ''
  const cleaned = localPart.replace(/[._\-+]+/g, ' ').trim()
  if (!cleaned) return email
  return cleaned
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
