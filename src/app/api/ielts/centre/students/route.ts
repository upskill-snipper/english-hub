// ─── IELTS Centre dashboard - linked-student roster (read-only) ─────────────
// B2B surface for IELTS centres / tutors / schools. Returns the teacher's
// linked students with their LATEST IELTS band per skill + an overall band.
//
// Auth + linking mirror the existing patterns exactly:
//   • resolve the Prisma User via `supabaseUserId` (preferred) with an email
//     fallback, identical to src/lib/admin.ts (identity convergence PR-3);
//   • gate on the TEACHER Role (site admins also pass, matching the rest of
//     the B2B surface);
//   • students are the User rows whose `linkedTeacherId` points at the
//     teacher - the Prisma-native teacher↔student link (User.linkedTeacherId,
//     indexed in schema.prisma).
//
// Everything is GRACEFUL: any auth failure → 401/403 JSON; the `ielts_attempts`
// table may not be migrated in every environment yet, so EVERY DB read of it is
// wrapped in try/catch and degrades to an empty band set (never throws). A
// student with no attempts simply shows "-" bands.
// ────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { overallBand } from '@/lib/ielts/bands'
import { IELTS_SKILLS, type Band, type IeltsSkill } from '@/lib/ielts/types'

export const runtime = 'nodejs' // Prisma requires the Node.js runtime.
export const dynamic = 'force-dynamic' // Always reflects live attempt data.

// ─── Response contract (consumed by the centre page + any future client) ────

export interface CentreStudentRow {
  studentId: string
  name: string
  /** Latest band per skill; null where the student has no attempt in a skill. */
  perSkillBands: Record<IeltsSkill, Band | null>
  /** Official-rounded overall band, or null until all four skills have data. */
  overall: Band | null
  /** ISO timestamp of the student's most recent attempt, or null. */
  lastActive: string | null
}

export interface CentreStudentsResponse {
  /** True only when the requester is an authenticated TEACHER (or site admin). */
  authorised: boolean
  students: CentreStudentRow[]
  /** Non-fatal signal: the ielts_attempts table could not be read (e.g. not
   *  migrated in this environment). Bands degrade to empty when true. */
  attemptsUnavailable: boolean
}

// A band coming off the DB is a Float; narrow it to the 0-9 / 0.5-step union.
const VALID_BANDS: ReadonlySet<number> = new Set([
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
])

function toBand(value: number | null | undefined): Band | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  return VALID_BANDS.has(value) ? (value as Band) : null
}

function emptyPerSkill(): Record<IeltsSkill, Band | null> {
  return { listening: null, reading: null, writing: null, speaking: null }
}

function emptyResponse(authorised: boolean, attemptsUnavailable = false): CentreStudentsResponse {
  return { authorised, students: [], attemptsUnavailable }
}

/**
 * Resolve the current Supabase session to a Prisma User, then confirm the
 * TEACHER role. Returns the teacher's Prisma User.id, or null when the caller
 * is unauthenticated / not found / not a teacher. Mirrors src/lib/admin.ts.
 */
async function resolveTeacher(): Promise<
  { ok: true; teacherId: string } | { ok: false; status: 401 | 403 }
> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser()

  if (!authUser?.id) return { ok: false, status: 401 }

  const bySupabase = await prisma.user.findUnique({
    where: { supabaseUserId: authUser.id },
    select: { id: true, role: true },
  })
  // Fallback for pre-backfill / mismatched rows (same as the admin guard).
  const teacher =
    bySupabase ??
    (authUser.email
      ? await prisma.user.findUnique({
          where: { email: authUser.email.toLowerCase() },
          select: { id: true, role: true },
        })
      : null)

  if (!teacher) return { ok: false, status: 403 }
  if (teacher.role !== 'TEACHER') return { ok: false, status: 403 }

  return { ok: true, teacherId: teacher.id }
}

// ─── GET /api/ielts/centre/students ─────────────────────────────────────────

export async function GET() {
  // 1) Auth + role. DB user/role reads are wrapped so an unmigrated/over-loaded
  //    DB never 500s the dashboard - it degrades to "not authorised → empty".
  let teacherId: string
  try {
    const auth = await resolveTeacher()
    if (!auth.ok) {
      return NextResponse.json(emptyResponse(false), { status: auth.status })
    }
    teacherId = auth.teacherId
  } catch {
    return NextResponse.json(emptyResponse(false), { status: 200 })
  }

  // 2) Linked students via the Prisma-native link (User.linkedTeacherId).
  //    Exclude soft-deleted accounts to match the rest of the app's reads.
  let students: { id: string; firstName: string; lastName: string }[] = []
  try {
    students = await prisma.user.findMany({
      where: { linkedTeacherId: teacherId, deletedAt: null },
      select: { id: true, firstName: true, lastName: true },
      orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
      take: 500,
    })
  } catch {
    // Can't read the roster → authorised teacher, but no students to show.
    return NextResponse.json(emptyResponse(true), { status: 200 })
  }

  if (students.length === 0) {
    return NextResponse.json(emptyResponse(true), { status: 200 })
  }

  // 3) Latest band per skill per student. One query for all linked students,
  //    newest-first; we keep the first (latest) row seen per (user, skill).
  //    The whole IELTS read is try/catch'd: if `ielts_attempts` is absent we
  //    still return every student with empty bands (graceful, non-fatal).
  const studentIds = students.map((s) => s.id)
  const latestBySkill = new Map<string, Partial<Record<IeltsSkill, Band | null>>>()
  const lastActiveById = new Map<string, string>()
  let attemptsUnavailable = false

  try {
    const rows = await prisma.iELTSAttempt.findMany({
      where: { userId: { in: studentIds } },
      orderBy: { createdAt: 'desc' },
      select: { userId: true, skill: true, band: true, createdAt: true },
    })

    const skillSet: ReadonlySet<string> = new Set(IELTS_SKILLS)
    for (const row of rows) {
      // Most-recent attempt overall (rows are desc) → lastActive.
      if (!lastActiveById.has(row.userId)) {
        lastActiveById.set(row.userId, row.createdAt.toISOString())
      }
      if (!skillSet.has(row.skill)) continue
      const skill = row.skill as IeltsSkill
      const perSkill = latestBySkill.get(row.userId) ?? {}
      // First time we see this (user, skill) is the latest, since desc-ordered.
      if (!(skill in perSkill)) {
        perSkill[skill] = toBand(row.band)
        latestBySkill.set(row.userId, perSkill)
      }
    }
  } catch {
    // Table not migrated yet / transient DB error - non-fatal by design.
    attemptsUnavailable = true
  }

  // 4) Shape the response: per-skill bands + official overall band.
  const out: CentreStudentRow[] = students.map((s) => {
    const stored = latestBySkill.get(s.id) ?? {}
    const perSkillBands = emptyPerSkill()
    for (const skill of IELTS_SKILLS) {
      perSkillBands[skill] = stored[skill] ?? null
    }
    const overall = overallBand(IELTS_SKILLS.map((skill) => perSkillBands[skill]))
    const name = `${s.firstName} ${s.lastName}`.trim() || 'Student'
    return {
      studentId: s.id,
      name,
      perSkillBands,
      overall,
      lastActive: lastActiveById.get(s.id) ?? null,
    }
  })

  const response: CentreStudentsResponse = {
    authorised: true,
    students: out,
    attemptsUnavailable,
  }
  return NextResponse.json(response, { status: 200 })
}
