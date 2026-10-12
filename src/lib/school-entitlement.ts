// ─── A pupil's school, and whether it is live ───────────────────────────────
//
// WHY THIS EXISTS (12 October 2026)
//
// Being added to a school gave a pupil no AI access that lasted. Every GCSE AI
// route asked one question, `profiles.subscription_status === 'pro'`, so the
// school paths tried to answer it by writing 'pro' onto the pupil's profile:
// the join-code route and class enrolment did, and an uploaded pupil got only
// the 7-day no-card trial (40 AI calls, then refused). The trial-expiry cron
// then wiped the enrolment 'pro' after seven days, because it has no school
// exception, and a grant made before the pupil's first sign-in never expired
// at all. Neither outcome was the school's pilot.
//
// Calum decided on 12 October 2026 that a school pupil's AI access comes from
// the school's live pilot, checked at the moment of use, and that nothing is
// written to `profiles.subscription_status` for them. That field is one per
// PERSON (CLAUDE.md, structural fact 2); a school's access is a fact about the
// school. This module answers the question the routes actually need: is this
// person a pupil of a school whose access is live, and has that school
// recorded its authorisation for AI marking?
//
// WHAT MAKES SOMEONE A PUPIL OF A SCHOOL. Any one of:
//   - an accepted `school_members` row with role 'student' (bulk upload and
//     /api/school/students write these);
//   - an active `school_students` row (the join-code flow writes these);
//   - an active `class_students` row in an active class (class enrolment).
// The school must then pass `isSchoolAccessActive` from src/lib/school-access.ts,
// THE rule for a live school. Do not write a second copy of it here.
//
// KEYED ON THE SUPABASE AUTH UUID. Every school table references
// `auth.users(id)`. A Prisma cuid passed here would match nothing, and
// Postgres rejects it as an invalid uuid, so it is refused up front and
// logged: it means the caller has the two identities crossed (CLAUDE.md,
// structural fact 1). Use the uuid the session gives you.
//
// FAILS CLOSED. Any query error means "not a school pupil", and is logged
// under the greppable marker SCHOOL_ENTITLEMENT_READ_FAILED. The function
// never throws. A pupil refused for one request is recoverable; a pupil
// admitted, or a child's parental-consent step waived, on a read that failed
// is not.
//
// MORE THAN ONE LIVE SCHOOL. Rare, but nothing prevents it. The answer names
// the school whose authorisation is weakest, so `aiAuthorised` is true only
// when every live school the pupil belongs to has recorded it: one school's
// authorisation must never stand in for another school that has not given
// one. Ties go to the lower school id, so the answer is stable.
// ────────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import { isSchoolAccessActive, type SchoolAccessRow } from '@/lib/school-access'

/** A pupil's live school, as the entitlement and consent gates need it. */
export interface PupilSchoolAccess {
  /** The school whose live access covers this pupil. */
  schoolId: string
  /**
   * True only when that school has recorded `schools.ai_authorised_at`: its
   * confirmation, as data controller, that its privacy notice covers AI
   * marking and that parents have been told.
   */
  aiAuthorised: boolean
}

const UUID_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

interface SchoolRow extends SchoolAccessRow {
  id: string
  ai_authorised_at: string | null
}

/** Log a failed read under the marker a log drain can match, and answer "not a pupil". */
function readFailed(source: string, userId: string, detail: unknown): null {
  const error = detail as { code?: string; message?: string } | null
  console.error('[school-entitlement] SCHOOL_ENTITLEMENT_READ_FAILED', {
    source,
    userId,
    code: error?.code ?? null,
    message: error?.message ?? String(detail),
  })
  return null
}

function rowsOf(data: unknown): Record<string, unknown>[] {
  return Array.isArray(data) ? (data as Record<string, unknown>[]) : []
}

/**
 * A recorded authorisation is a real timestamp. A NULL is "not authorised",
 * and so is anything that does not parse as a date: fail closed.
 */
function isRecorded(value: unknown): boolean {
  if (typeof value !== 'string' || value.trim() === '') return false
  return !Number.isNaN(new Date(value).getTime())
}

/**
 * The live school a pupil belongs to, or null when they are not a pupil of
 * any school whose access is live.
 *
 * @param userId The Supabase auth uuid. Never the Prisma cuid.
 */
export async function getPupilSchoolAccess(userId: string): Promise<PupilSchoolAccess | null> {
  if (typeof userId !== 'string' || !UUID_SHAPE.test(userId)) {
    return readFailed('argument', String(userId), {
      code: 'not_a_uuid',
      message: 'getPupilSchoolAccess takes the Supabase auth uuid, not a Prisma id',
    })
  }

  try {
    const admin = createServiceRoleClient()

    const [members, joined, enrolled] = await Promise.all([
      admin
        .from('school_members')
        .select('school_id')
        .eq('user_id', userId)
        .eq('role', 'student')
        .eq('invite_status', 'accepted'),
      admin
        .from('school_students')
        .select('school_id')
        .eq('user_id', userId)
        .eq('status', 'active'),
      admin
        .from('class_students')
        .select('class_id, classes!inner(school_id, is_active)')
        .eq('student_id', userId)
        .eq('is_active', true)
        .eq('classes.is_active', true),
    ])

    if (members.error) return readFailed('school_members', userId, members.error)
    if (joined.error) return readFailed('school_students', userId, joined.error)
    if (enrolled.error) return readFailed('class_students', userId, enrolled.error)

    const schoolIds = new Set<string>()
    const add = (value: unknown) => {
      if (typeof value === 'string' && value.length > 0) schoolIds.add(value)
    }
    for (const row of rowsOf(members.data)) add(row.school_id)
    for (const row of rowsOf(joined.data)) add(row.school_id)
    for (const row of rowsOf(enrolled.data)) {
      const cls = Array.isArray(row.classes) ? row.classes[0] : row.classes
      add((cls as { school_id?: unknown } | null | undefined)?.school_id)
    }
    if (schoolIds.size === 0) return null

    const { data: schoolData, error: schoolError } = await admin
      .from('schools')
      .select('id, access_type, access_until, subscription_status, ai_authorised_at')
      .in('id', [...schoolIds])
    if (schoolError) return readFailed('schools', userId, schoolError)

    const now = new Date()
    const live = (rowsOf(schoolData) as unknown as SchoolRow[]).filter(
      (school) =>
        typeof school.id === 'string' &&
        schoolIds.has(school.id) &&
        isSchoolAccessActive(school, now),
    )
    if (live.length === 0) return null

    // Weakest authorisation first, then the lower id: see the header.
    live.sort((a, b) => {
      const authorisedA = isRecorded(a.ai_authorised_at) ? 1 : 0
      const authorisedB = isRecorded(b.ai_authorised_at) ? 1 : 0
      if (authorisedA !== authorisedB) return authorisedA - authorisedB
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
    })
    if (live.length > 1) {
      console.warn('[school-entitlement] pupil belongs to more than one live school', {
        userId,
        schools: live.length,
      })
    }

    const chosen = live[0]
    return { schoolId: chosen.id, aiAuthorised: isRecorded(chosen.ai_authorised_at) }
  } catch (err) {
    return readFailed('unexpected', userId, err)
  }
}
