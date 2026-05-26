/**
 * POST /api/auth/teacher-signup
 *
 * Cycle 6 fix (Agent-SIGNUP): teacher-specific counterpart to
 * `/api/auth/register`. Same design and invariants - creates the Prisma
 * `User` projection row for a freshly-created Supabase Auth teacher, so
 * dormancy, retention, DSAR, and class-linkage features can find the row.
 *
 * Differences vs. /api/auth/register:
 *   - `role` defaults to 'TEACHER' and `role: 'TEACHER'` is the only
 *     value accepted by this endpoint. (The `role` field in the body is
 *     optional but if supplied must equal 'TEACHER'.)
 *   - Optional `school` (max 200 chars) - stored on the User row for
 *     school-link lookups.
 *   - Optional `selectedExamBoard` - validated against the Prisma
 *     ExamBoard enum whitelist; rejects unknown values.
 *
 * Like /api/auth/register this route is idempotent on `supabaseUserId`,
 * rate-limited per-user, and reads email from the verified Supabase
 * session (never from the body). See the header comment of
 * /api/auth/register/route.ts for the full design rationale, sentinel
 * password-hash explanation, and the follow-up client-integration TODO.
 *
 * TODO (follow-up PR, out of this agent's write scope):
 *   `src/app/auth/teacher-register/page.tsx` must add a fire-and-forget
 *   POST to this endpoint after `supabase.auth.signUp()` returns
 *   successfully, passing { firstName, lastName, dateOfBirth, country,
 *   school, selectedExamBoard }. (If you don't yet collect DOB on the
 *   teacher page, add it - the Prisma schema requires it as NOT NULL.)
 */

import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { z, ZodError } from 'zod'
import { Prisma, ExamBoard } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ─── Validation ───────────────────────────────────────────────────────────

// Whitelist from Prisma's ExamBoard enum - pulled from the generated
// client so it stays in sync with the schema automatically.
const EXAM_BOARD_VALUES = Object.values(ExamBoard) as [ExamBoard, ...ExamBoard[]]

const teacherSignupBodySchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name is too long'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name is too long'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'dateOfBirth must be YYYY-MM-DD'),
  country: z.string().trim().min(2, 'Country is required').max(56, 'Country name is too long'),
  // Teachers are always role TEACHER from this endpoint. We accept it in
  // the body for symmetry with /api/auth/register but constrain it to
  // that single literal - a client cannot upgrade themselves to ADMIN.
  role: z.literal('TEACHER').optional(),
  school: z.string().trim().max(200, 'School name is too long').optional(),
  selectedExamBoard: z.enum(EXAM_BOARD_VALUES).optional(),
})

// See `/api/auth/register/route.ts` for the full explanation of this
// sentinel. TL;DR: the Prisma User row is a projection; credentials live
// in Supabase, but passwordHash is NOT NULL in the schema.
const SUPABASE_MANAGED_SENTINEL = 'SUPABASE_MANAGED'

const MINOR_AGE_THRESHOLD = 16
const MIN_AGE = 13

// ─── Age helper (mirrors register/route.ts) ───────────────────────────────

function calculateAgeFromDate(dob: Date, now: Date = new Date()): number {
  let age = now.getUTCFullYear() - dob.getUTCFullYear()
  const monthDiff = now.getUTCMonth() - dob.getUTCMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < dob.getUTCDate())) {
    age--
  }
  return age
}

// ─── Handler ──────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── 1. Authenticate: require a Supabase session ──────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json(
        { error: 'Authentication required. Please sign in first.' },
        { status: 403 },
      )
    }

    // ── 2. Rate limit: 5/min per Supabase user id ────────────────────────
    const rl = await rateLimit(`teacher-signup:${authUser.id}`, {
      limit: 5,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // ── 3. Idempotency: existing row short-circuit ───────────────────────
    const existing = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true, supabaseUserId: true, role: true, isMinor: true },
    })
    if (existing) {
      return NextResponse.json(existing, { status: 200 })
    }

    // ── 4. Validate body ─────────────────────────────────────────────────
    const body = await request.json().catch(() => ({}))
    const data = teacherSignupBodySchema.parse(body)

    // ── 5. Parse DOB + age gate ──────────────────────────────────────────
    const [yearStr, monthStr, dayStr] = data.dateOfBirth.split('-')
    const dobYear = Number(yearStr)
    const dobMonth = Number(monthStr)
    const dobDay = Number(dayStr)
    const dob = new Date(Date.UTC(dobYear, dobMonth - 1, dobDay))

    if (
      dob.getUTCFullYear() !== dobYear ||
      dob.getUTCMonth() !== dobMonth - 1 ||
      dob.getUTCDate() !== dobDay
    ) {
      return NextResponse.json({ error: 'Invalid date of birth.' }, { status: 400 })
    }

    const age = calculateAgeFromDate(dob)
    if (age < MIN_AGE) {
      // A teacher under 13 shouldn't exist, but we enforce the same floor
      // as register/route.ts for consistency. In practice teachers should
      // be 18+, but the client-side form is responsible for that UX - we
      // don't reject 13-17 here because the product allows student
      // teachers / trainee teachers.
      return NextResponse.json(
        { error: 'You must be at least 13 years old to register.' },
        { status: 403 },
      )
    }

    // ── 6. Email: from session ───────────────────────────────────────────
    const email = authUser.email?.toLowerCase()
    if (!email) {
      return NextResponse.json(
        { error: 'Authenticated session has no email address.' },
        { status: 400 },
      )
    }

    // ── 7. Create Prisma projection row ──────────────────────────────────
    // Role is forced to TEACHER regardless of what's in the body. isMinor
    // is computed honestly from DOB; it will normally be false for
    // teachers but we don't special-case - a trainee teacher aged 15
    // should still get minor-level privacy defaults.
    const isMinor = age < MINOR_AGE_THRESHOLD

    try {
      const created = await prisma.user.create({
        data: {
          supabaseUserId: authUser.id,
          email,
          passwordHash: SUPABASE_MANAGED_SENTINEL,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: dob,
          country: data.country,
          role: 'TEACHER',
          isMinor,
          school: data.school ?? null,
          selectedExamBoard: data.selectedExamBoard ?? null,
        },
        select: {
          id: true,
          supabaseUserId: true,
          role: true,
          isMinor: true,
        },
      })

      return NextResponse.json(created, { status: 201 })
    } catch (dbError) {
      if (dbError instanceof Prisma.PrismaClientKnownRequestError && dbError.code === 'P2002') {
        const raced = await prisma.user.findUnique({
          where: { supabaseUserId: authUser.id },
          select: {
            id: true,
            supabaseUserId: true,
            role: true,
            isMinor: true,
          },
        })
        if (raced) {
          return NextResponse.json(raced, { status: 200 })
        }
        console.error(
          '[TeacherSignup] Email unique-constraint collision for supabaseUserId',
          authUser.id,
        )
        Sentry.captureException(dbError, {
          tags: { route: 'auth/teacher-signup', reason: 'email_collision' },
          extra: { supabaseUserId: authUser.id },
        })
        return NextResponse.json(
          { error: 'Unable to complete registration. Please contact support.' },
          { status: 500 },
        )
      }

      console.error('[TeacherSignup] Prisma create failed:', dbError)
      Sentry.captureException(dbError, {
        tags: { route: 'auth/teacher-signup', reason: 'prisma_create' },
        extra: { supabaseUserId: authUser.id },
      })
      return NextResponse.json(
        { error: 'An unexpected error occurred. Please try again.' },
        { status: 500 },
      )
    }
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of error.issues) {
        const key = issue.path.join('.')
        if (!fieldErrors[key]) fieldErrors[key] = []
        fieldErrors[key].push(issue.message)
      }
      return NextResponse.json({ error: 'Validation failed', errors: fieldErrors }, { status: 400 })
    }

    console.error('[TeacherSignup] Unexpected error:', error)
    Sentry.captureException(error, {
      tags: { route: 'auth/teacher-signup', reason: 'unexpected' },
    })
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    )
  }
}
