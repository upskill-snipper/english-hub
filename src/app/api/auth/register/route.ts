/**
 * POST /api/auth/register
 *
 * Cycle 6 fix (Agent-SIGNUP): creates the Prisma `User` projection row that
 * mirrors a freshly-created Supabase Auth user. Closes the P0 architectural
 * gap identified in Cycle 5 — before this handler existed, Supabase signups
 * never produced a corresponding Prisma row, so every Prisma-backed feature
 * (dormancy-check cron, data-retention, DSAR/privacy endpoints, weekly
 * reports, subscription linkage, `/api/auth/record-login`'s `updateMany`
 * on email, etc.) silently no-opped for the majority of real users.
 *
 * Design decision (option B — documented in Cycle 5 plan):
 * The client-side `/auth/register` page continues to call
 * `supabase.auth.signUp()` directly in the browser. This preserves the
 * verification-email flow that Supabase sends automatically and avoids a
 * major rewrite of the existing registration UX. After a successful signUp
 * the page is expected to POST to this endpoint to create the Prisma row.
 *
 * The Prisma `User` row is a projection — credentials (password, MFA
 * factors, email verification state) are owned entirely by Supabase. We
 * store a sentinel value in `passwordHash` because the schema is NOT NULL
 * (see PR-1 convergence notes); there is no real password hash to persist.
 *
 * Key properties:
 *   - Requires an authenticated Supabase session (403 if missing). We do
 *     NOT accept an arbitrary `supabaseUserId` from the caller — we read
 *     it from the verified session, so this handler cannot be used to
 *     impersonate another user.
 *   - Idempotent: if a Prisma row already exists for the session's
 *     `supabaseUserId`, we return it with 200 instead of throwing on the
 *     unique constraint. Callers can safely retry on network failure.
 *   - Rate limited to 5/min keyed on the Supabase user id (not the raw IP)
 *     because the caller is already authenticated and we want per-user
 *     bounds, not per-IP (schools can NAT hundreds of students).
 *
 * TODO (follow-up PR, out of this agent's write scope):
 *   `src/app/auth/register/page.tsx` and
 *   `src/app/auth/teacher-register/page.tsx` must add a fire-and-forget
 *   `fetch('/api/auth/register', { method: 'POST', body: JSON.stringify({
 *     firstName, lastName, dateOfBirth, country, role }) })` after
 *   `supabase.auth.signUp()` returns successfully. Failures should be
 *   logged client-side but must not block the signup flow — the
 *   verification-email UX is the user's next step regardless.
 *
 * TODO (related, also out of scope):
 *   `src/app/api/auth/record-login/route.ts` currently does
 *   `prisma.user.updateMany({ where: { email }, ... })` which silently
 *   no-ops for users without a Prisma row. Once this handler is wired
 *   up in the register page + has been backfilled for existing Supabase
 *   users, `record-login` can be rewritten to join on `supabaseUserId`
 *   and fail loudly if the row is missing.
 */

import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { z, ZodError } from 'zod'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ─── Validation ───────────────────────────────────────────────────────────

// Role is constrained to the three values the client-facing signup pages
// can select. ADMIN and REVIEWER are provisioned out-of-band and must
// never be assignable via a public endpoint.
const ROLE_VALUES = ['STUDENT', 'TEACHER', 'PARENT'] as const

const registerBodySchema = z.object({
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
  // Accept ISO YYYY-MM-DD. We parse it ourselves (rather than using
  // z.coerce.date()) so we can reject timezone-ambiguous strings and keep
  // the on-the-wire contract explicit.
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'dateOfBirth must be YYYY-MM-DD'),
  // Country: ISO-3166 alpha-2 (2 chars) OR a common name up to 56 chars
  // (longest UN-recognised country name is "United Kingdom of Great
  // Britain and Northern Ireland" at 56 chars). We don't enforce a
  // whitelist here — the profiles table has the canonical value; the
  // Prisma projection only needs to be non-empty.
  country: z.string().trim().min(2, 'Country is required').max(56, 'Country name is too long'),
  role: z.enum(ROLE_VALUES).optional(),
})

// Sentinel for the NOT-NULL passwordHash column. Real credentials live
// in Supabase (auth.users.encrypted_password). If this value ever leaks
// into a bcrypt.compare() call, it will fail safely — it's not a valid
// bcrypt hash format (no `$2a$`/`$2b$` prefix).
const SUPABASE_MANAGED_SENTINEL = 'SUPABASE_MANAGED'

// Minor threshold — ICO Children's Code defines a child as under 18.
// Anyone aged 13–17 is tagged `isMinor: true` so downstream features
// (analytics, marketing, recommender, parental-consent UX) can apply
// child-safe defaults. Note: the high-privacy defaults in
// `src/lib/privacy/child-defaults.ts` are scoped to under-16; the
// `isMinor` flag is the broader 13–17 marker.
const MINOR_AGE_THRESHOLD = 18
const MIN_AGE = 13

// ─── Age helper ────────────────────────────────────────────────────────────
//
// Mirrors `calculateAge` in `src/lib/auth.ts` but takes a Date directly.
// We compute inline rather than importing because the shared helper takes
// (year, month, day) triplet args and we have a parsed Date.
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
    // We trust only the server-verified session, NOT any user id in the
    // request body. This is the single hardest guarantee of this route.
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
    const rl = await rateLimit(`register:${authUser.id}`, {
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

    // ── 3. Idempotency: if row already exists, return it ─────────────────
    // Note: we check BEFORE parsing the body. If the caller retries (e.g.
    // after a network blip) with a different/malformed body but the row
    // is already present, returning the existing row is the correct
    // behaviour — the Prisma row is already consistent with Supabase.
    const existing = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true, supabaseUserId: true, role: true, isMinor: true },
    })
    if (existing) {
      return NextResponse.json(existing, { status: 200 })
    }

    // ── 4. Validate body ─────────────────────────────────────────────────
    const body = await request.json().catch(() => ({}))
    const data = registerBodySchema.parse(body)

    // ── 5. Parse DOB + age gate ──────────────────────────────────────────
    // Construct in UTC to avoid the TZ-off-by-one that bit the Cycle 2 QA.
    const [yearStr, monthStr, dayStr] = data.dateOfBirth.split('-')
    const dobYear = Number(yearStr)
    const dobMonth = Number(monthStr)
    const dobDay = Number(dayStr)
    const dob = new Date(Date.UTC(dobYear, dobMonth - 1, dobDay))

    // Defensive: reject dates that round-trip differently (e.g. 2026-02-31
    // would become 2026-03-03 via Date.UTC's overflow).
    if (
      dob.getUTCFullYear() !== dobYear ||
      dob.getUTCMonth() !== dobMonth - 1 ||
      dob.getUTCDate() !== dobDay
    ) {
      return NextResponse.json({ error: 'Invalid date of birth.' }, { status: 400 })
    }

    const age = calculateAgeFromDate(dob)
    if (age < MIN_AGE) {
      // ICO Children's Code: under-13s cannot self-sign-up. The client
      // form blocks submit, but we re-enforce server-side because the
      // browser is untrusted.
      return NextResponse.json(
        {
          error:
            "You're not yet old enough to create your own account. Ask a parent or carer to set up a parent-linked account from /parent.",
        },
        { status: 403 },
      )
    }

    // ── 6. Email: pull from Supabase session (source of truth) ───────────
    // We never trust an email in the body; Supabase has already verified
    // ownership via the signup email flow.
    const email = authUser.email?.toLowerCase()
    if (!email) {
      return NextResponse.json(
        { error: 'Authenticated session has no email address.' },
        { status: 400 },
      )
    }

    // ── 7. Create Prisma projection row ──────────────────────────────────
    const role = data.role ?? 'STUDENT'
    const isMinor = age < MINOR_AGE_THRESHOLD

    try {
      const created = await prisma.user.create({
        data: {
          supabaseUserId: authUser.id,
          email,
          // Sentinel: this Prisma row is a projection of the Supabase
          // auth user. Credentials are owned by Supabase — there is no
          // real password hash to store here. The column is NOT NULL in
          // the schema, so we persist a non-empty sentinel.
          passwordHash: SUPABASE_MANAGED_SENTINEL,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: dob,
          country: data.country,
          role,
          // isMinor flags users aged 13–17 (per Children's Code). Required
          // for downstream gating; if the Prisma `isMinor` column is
          // missing, run a migration to add `Boolean @default(false)`.
          isMinor,
        },
        select: {
          id: true,
          supabaseUserId: true,
          role: true,
          isMinor: true,
        },
      })

      // TODO (cross-file, out of this agent's write scope): once the new
      // user row exists, invoke `applyChildDefaults(created.id)` from
      // `src/lib/privacy/child-defaults.ts` to materialise high-privacy
      // settings for child accounts (under-16). The helper does not yet
      // exist in that module — only `getChildDefaults()` /
      // `getChildProfileDefaults()` are exported. A follow-up PR should
      // add `applyChildDefaults(userId: string): Promise<void>` that
      // upserts the defaults into the relevant settings tables, then
      // call it here gated on `isMinor && age < 16`.
      // if (isMinor && age < 16) await applyChildDefaults(created.id)

      return NextResponse.json(created, { status: 201 })
    } catch (dbError) {
      // Handle race: two concurrent calls for the same Supabase user.
      // Prisma P2002 = unique constraint (email or supabaseUserId).
      // Return the existing row to preserve idempotency.
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
        // Unique violation but not our supabaseUserId — must be the email
        // column (a different Prisma row owns this email). That's a
        // genuine conflict worth reporting.
        console.error(
          '[Register] Email unique-constraint collision for supabaseUserId',
          authUser.id,
        )
        Sentry.captureException(dbError, {
          tags: { route: 'auth/register', reason: 'email_collision' },
          extra: { supabaseUserId: authUser.id },
        })
        return NextResponse.json(
          { error: 'Unable to complete registration. Please contact support.' },
          { status: 500 },
        )
      }

      // Any other Prisma error — log, Sentry, generic 500.
      console.error('[Register] Prisma create failed:', dbError)
      Sentry.captureException(dbError, {
        tags: { route: 'auth/register', reason: 'prisma_create' },
        extra: { supabaseUserId: authUser.id },
      })
      return NextResponse.json(
        { error: 'An unexpected error occurred. Please try again.' },
        { status: 500 },
      )
    }
  } catch (error) {
    // ── Zod validation errors ────────────────────────────────────────────
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of error.issues) {
        const key = issue.path.join('.')
        if (!fieldErrors[key]) fieldErrors[key] = []
        fieldErrors[key].push(issue.message)
      }
      return NextResponse.json({ error: 'Validation failed', errors: fieldErrors }, { status: 400 })
    }

    console.error('[Register] Unexpected error:', error)
    Sentry.captureException(error, {
      tags: { route: 'auth/register', reason: 'unexpected' },
    })
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    )
  }
}
