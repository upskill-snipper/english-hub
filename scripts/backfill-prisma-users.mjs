#!/usr/bin/env node
// scripts/backfill-prisma-users.mjs
// ============================================================================
// One-shot Prisma User backfill — Cycle 7 (Agent-BACKFILL)
// ============================================================================
//
// WHAT THIS SCRIPT DOES
// ---------------------
// Creates a Prisma `User` projection row for every Supabase `auth.users` row
// that doesn't yet have one. Closes the gap surfaced in Cycle 5: the
// `/api/auth/register` handler (Cycle 6) only fires for NEW signups, so every
// pre-existing Supabase user is invisible to Prisma-backed features
// (dormancy-check cron, data-retention, DSAR/privacy endpoints, weekly
// reports, subscription linkage, `/api/auth/record-login`'s `updateMany` on
// email, etc.).
//
// It mirrors the exact sentinel + field pattern used by
// `src/app/api/auth/register/route.ts`:
//   - `passwordHash: 'SUPABASE_MANAGED'` (non-bcrypt sentinel; fails safe if
//     ever fed into bcrypt.compare)
//   - `isMinor` = (age < 16) per the MINOR_AGE_THRESHOLD in register/route.ts
//   - `role` defaulted to `STUDENT` (schema default) — ADMIN/REVIEWER are
//     out-of-band and never assignable here
//   - `country` defaulted to `'GB'` when absent from user_metadata
//
// FOR EACH SUPABASE USER, IN ORDER
// --------------------------------
//   1. If a Prisma row exists with `supabaseUserId: user.id` → SKIP.
//   2. Else if a Prisma row exists with `email: user.email.toLowerCase()` →
//      UPDATE that row to set `supabaseUserId: user.id` (adopting the
//      pre-existing Prisma row rather than orphaning it).
//   3. Else → CREATE a new Prisma row with the sentinel pattern above.
//
// SAFETY GUARANTEES
// -----------------
//   - IDEMPOTENT. Re-run as many times as you like; each pass is a no-op on
//     already-backfilled rows.
//   - DRY-RUN. Pass `--dry-run` to log every decision without writing.
//   - BATCHED. 50 users per batch, 200ms sleep between batches to stay well
//     under Supabase Admin API rate limits (~100 req/s burst).
//   - READ-ONLY against Supabase. We never mutate `auth.users` — this is a
//     one-way Supabase → Prisma projection.
//   - ERROR-ISOLATED. A single bad row logs and continues; it never aborts
//     the whole run.
//
// USAGE
// -----
// From the project root:
//
//   # Dry run first — always, every time, in every environment:
//   node --env-file=.env.local scripts/backfill-prisma-users.mjs --dry-run
//
//   # Real run:
//   node --env-file=.env.local scripts/backfill-prisma-users.mjs
//
// Required env vars (read from .env.local via `--env-file`):
//   - DATABASE_URL               — Prisma connection string
//   - NEXT_PUBLIC_SUPABASE_URL   — Supabase project URL
//   - SUPABASE_SERVICE_ROLE_KEY  — Supabase service-role key (bypasses RLS;
//                                  required for admin.listUsers)
//
// EXPECTED RUNTIME
// ----------------
// ~30 seconds per 1,000 Supabase users on a warm connection (dominated by
// the 200ms inter-batch sleep + Prisma round-trips). For 10k users, budget
// ~5 minutes.
//
// POST-RUN VERIFICATION
// ---------------------
// Expected invariant after a successful run:
//
//     prisma.user.count({ where: { supabaseUserId: { not: null } } })
//         ≈ number of rows in auth.users
//
// Run from a psql/Supabase SQL editor:
//
//     SELECT
//       (SELECT COUNT(*) FROM auth.users)                                    AS supabase_users,
//       (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NOT NULL)     AS prisma_linked,
//       (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NULL)         AS prisma_unlinked;
//
// The `prisma_linked` count should equal (or very closely match) `supabase_users`.
// Any `prisma_unlinked` rows are pre-existing Prisma rows whose email never
// appeared in Supabase — investigate case-by-case, don't mass-delete.
//
// WHAT THIS SCRIPT DOES NOT HANDLE
// --------------------------------
//   - It does NOT backfill Consent rows, Essay rows, PrivacySettings, or any
//     other child tables. It only creates the User projection.
//   - It does NOT trigger welcome emails, Stripe customer creation, or any
//     other signup side-effects. This is a silent schema-level backfill.
//   - It does NOT reconcile stale Prisma rows whose email has changed in
//     Supabase. The email match in step 2 is exact (lowercased).
//   - It does NOT flip `supabaseUserId` from NOT NULL — a follow-up migration
//     should do that once counts are verified.
//   - Placeholder DOBs (`2000-01-01`) are logged but not flagged otherwise.
//     Before the dormancy-check cron relies on these rows, someone should
//     prompt those users to confirm their real DOB, or the cron will use the
//     placeholder. Audit via:
//       SELECT id, email FROM "User" WHERE "dateOfBirth" = '2000-01-01';
//
// ============================================================================

import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

// ── Config / flags ──────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run')
const BATCH_SIZE = 50
const INTER_BATCH_SLEEP_MS = 200
const SUPABASE_PAGE_SIZE = 1000

// Mirror src/app/api/auth/register/route.ts — the sentinel MUST match so that
// downstream code (auth helpers that check for this value) works identically
// on backfilled rows and on rows created by the register handler.
const SUPABASE_MANAGED_SENTINEL = 'SUPABASE_MANAGED'
const MINOR_AGE_THRESHOLD = 16
const DEFAULT_COUNTRY = 'GB'
const DEFAULT_ROLE = 'STUDENT'
const VALID_ROLES = new Set(['STUDENT', 'TEACHER', 'PARENT', 'ADMIN', 'REVIEWER'])
const PLACEHOLDER_DOB = new Date('2000-01-01T00:00:00.000Z')

// ── Env validation ──────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const DATABASE_URL = process.env.DATABASE_URL

const missing = []
if (!SUPABASE_URL) missing.push('NEXT_PUBLIC_SUPABASE_URL')
if (!SUPABASE_SERVICE_ROLE_KEY) missing.push('SUPABASE_SERVICE_ROLE_KEY')
if (!DATABASE_URL) missing.push('DATABASE_URL')
if (missing.length > 0) {
  console.error(
    `[backfill] Missing required env vars: ${missing.join(', ')}.\n` +
      `  Did you forget \`--env-file=.env.local\`?\n` +
      `  Example: node --env-file=.env.local scripts/backfill-prisma-users.mjs --dry-run`,
  )
  process.exit(1)
}

// ── Clients ─────────────────────────────────────────────────────────────────

const prisma = new PrismaClient()
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

// ── Helpers ─────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Compute age from a Date of birth, mirroring `calculateAgeFromDate` in
 * src/app/api/auth/register/route.ts (UTC-based, handles month/day rollover).
 */
function calculateAgeFromDate(dob, now = new Date()) {
  let age = now.getUTCFullYear() - dob.getUTCFullYear()
  const monthDiff = now.getUTCMonth() - dob.getUTCMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < dob.getUTCDate())) {
    age--
  }
  return age
}

/**
 * Split `user_metadata.full_name` into (firstName, lastName). Defaults to
 * empty strings so the NOT NULL columns still populate — the operator can
 * prompt users to complete their profiles later.
 */
function splitFullName(fullName) {
  if (typeof fullName !== 'string' || fullName.trim() === '') {
    return { firstName: '', lastName: '' }
  }
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' }
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  }
}

/**
 * Parse a user_metadata.dateOfBirth value into a Date, or return null if
 * it's missing/unparseable. Supports both 'YYYY-MM-DD' strings and ISO
 * timestamps.
 */
function parseDateOfBirth(raw) {
  if (!raw || typeof raw !== 'string') return null
  // Prefer the YYYY-MM-DD path used by the register route (UTC midnight).
  const ymd = raw.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (ymd) {
    const y = Number(ymd[1])
    const m = Number(ymd[2])
    const d = Number(ymd[3])
    const dob = new Date(Date.UTC(y, m - 1, d))
    if (
      dob.getUTCFullYear() === y &&
      dob.getUTCMonth() === m - 1 &&
      dob.getUTCDate() === d
    ) {
      return dob
    }
  }
  // Fallback: let Date do its best.
  const parsed = new Date(raw)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

/**
 * Normalise a metadata role string into a valid Prisma Role enum value, or
 * fall back to STUDENT.
 */
function normaliseRole(raw) {
  if (typeof raw !== 'string') return DEFAULT_ROLE
  const upper = raw.trim().toUpperCase()
  return VALID_ROLES.has(upper) ? upper : DEFAULT_ROLE
}

/**
 * Fetch every Supabase user by paginating listUsers. The admin API tops out
 * at perPage=1000 and returns `{ users: [...] }` per page. We stop when a
 * page comes back with fewer than perPage rows.
 */
async function fetchAllSupabaseUsers() {
  const all = []
  let page = 1
  // Hard ceiling to prevent a runaway loop if the API ever misbehaves.
  const MAX_PAGES = 1000
  while (page <= MAX_PAGES) {
    const { data, error } = await supabase.auth.admin.listUsers({
      page,
      perPage: SUPABASE_PAGE_SIZE,
    })
    if (error) {
      throw new Error(`Supabase admin.listUsers page ${page} failed: ${error.message}`)
    }
    const batch = data?.users ?? []
    all.push(...batch)
    if (batch.length < SUPABASE_PAGE_SIZE) break
    page++
  }
  return all
}

/**
 * Process a single Supabase user. Returns the outcome tag so main() can tally.
 * Never throws — all errors are logged and reported as 'errored'.
 */
async function processUser(user) {
  try {
    if (!user?.id) {
      console.warn('[backfill] Skipping Supabase user with no id:', user)
      return 'errored'
    }
    if (!user.email) {
      console.warn(`[backfill] Skipping Supabase user ${user.id} — no email on record.`)
      return 'errored'
    }

    const email = user.email.toLowerCase()

    // Step 1: already linked by supabaseUserId?
    const byId = await prisma.user.findUnique({
      where: { supabaseUserId: user.id },
      select: { id: true },
    })
    if (byId) return 'skipped'

    // Step 2: existing Prisma row by email? Adopt it.
    const byEmail = await prisma.user.findUnique({
      where: { email },
      select: { id: true, supabaseUserId: true },
    })
    if (byEmail) {
      if (byEmail.supabaseUserId && byEmail.supabaseUserId !== user.id) {
        // This Prisma row is already linked to a DIFFERENT Supabase user.
        // Don't overwrite — log and treat as an error for operator review.
        console.error(
          `[backfill] Conflict: Prisma row ${byEmail.id} (email=${email}) is linked to ` +
            `supabaseUserId=${byEmail.supabaseUserId}, but Supabase user ${user.id} also ` +
            `claims this email. Manual review required — skipping.`,
        )
        return 'errored'
      }
      if (DRY_RUN) {
        console.log(
          `[backfill][dry-run] Would adopt Prisma row ${byEmail.id} (email=${email}) ` +
            `→ supabaseUserId=${user.id}`,
        )
        return 'backfilledByEmail'
      }
      await prisma.user.update({
        where: { id: byEmail.id },
        data: { supabaseUserId: user.id },
      })
      return 'backfilledByEmail'
    }

    // Step 3: create a fresh projection row.
    const metadata = user.user_metadata ?? {}
    const { firstName, lastName } = splitFullName(metadata.full_name)

    let dateOfBirth = parseDateOfBirth(metadata.dateOfBirth)
    if (!dateOfBirth) {
      console.warn(
        `[backfill] No dateOfBirth in user_metadata for ${email} (${user.id}). ` +
          `Using placeholder ${PLACEHOLDER_DOB.toISOString().slice(0, 10)} — ` +
          `row needs a real DOB to drive dormancy-check correctly. ` +
          `Audit later with: SELECT id, email FROM "User" WHERE "dateOfBirth" = '2000-01-01';`,
      )
      dateOfBirth = PLACEHOLDER_DOB
    }

    const country =
      typeof metadata.country === 'string' && metadata.country.trim() !== ''
        ? metadata.country.trim()
        : DEFAULT_COUNTRY

    const role = normaliseRole(metadata.role)
    const age = calculateAgeFromDate(dateOfBirth)
    const isMinor = age < MINOR_AGE_THRESHOLD

    if (DRY_RUN) {
      console.log(
        `[backfill][dry-run] Would create Prisma row: { email=${email}, ` +
          `supabaseUserId=${user.id}, role=${role}, isMinor=${isMinor}, ` +
          `country=${country}, dob=${dateOfBirth.toISOString().slice(0, 10)}, ` +
          `firstName="${firstName}", lastName="${lastName}" }`,
      )
      return 'createdNew'
    }

    await prisma.user.create({
      data: {
        supabaseUserId: user.id,
        email,
        passwordHash: SUPABASE_MANAGED_SENTINEL,
        firstName,
        lastName,
        dateOfBirth,
        country,
        role,
        isMinor,
        accountStatus: 'ACTIVE',
      },
    })
    return 'createdNew'
  } catch (err) {
    console.error(
      `[backfill] Error processing Supabase user ${user?.id ?? '(unknown)'} ` +
        `(${user?.email ?? '(no email)'}):`,
      err?.message ?? err,
    )
    return 'errored'
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const startedAt = Date.now()
  console.log(
    `[backfill] Starting Prisma User backfill ${DRY_RUN ? '(DRY RUN — no writes)' : '(LIVE)'}.`,
  )
  console.log(`[backfill] Supabase URL: ${SUPABASE_URL}`)

  console.log('[backfill] Fetching all Supabase users via admin.listUsers…')
  const users = await fetchAllSupabaseUsers()
  console.log(`[backfill] Fetched ${users.length} Supabase users total.`)

  const tallies = {
    skipped: 0,
    backfilledByEmail: 0,
    createdNew: 0,
    errored: 0,
  }

  for (let i = 0; i < users.length; i += BATCH_SIZE) {
    const batch = users.slice(i, i + BATCH_SIZE)
    const batchNum = Math.floor(i / BATCH_SIZE) + 1
    const totalBatches = Math.ceil(users.length / BATCH_SIZE)

    // Within a batch, process in parallel — they hit independent rows.
    // Across batches, we sleep to respect rate limits.
    const outcomes = await Promise.all(batch.map((u) => processUser(u)))
    for (const outcome of outcomes) {
      tallies[outcome] = (tallies[outcome] ?? 0) + 1
    }

    console.log(
      `[backfill] Batch ${batchNum}/${totalBatches} done. Running totals: ` +
        JSON.stringify(tallies),
    )

    if (i + BATCH_SIZE < users.length) {
      await sleep(INTER_BATCH_SLEEP_MS)
    }
  }

  const durationMs = Date.now() - startedAt
  console.log('[backfill] ────────────────────────────────────────────────────')
  console.log(`[backfill] Done in ${(durationMs / 1000).toFixed(1)}s.`)
  console.log(`[backfill] Mode: ${DRY_RUN ? 'DRY RUN (no writes made)' : 'LIVE'}`)
  console.log(`[backfill] Summary: ${JSON.stringify(tallies, null, 2)}`)
  console.log('[backfill] ────────────────────────────────────────────────────')
  console.log(
    '[backfill] Post-run check (run in SQL): \n' +
      '  SELECT\n' +
      '    (SELECT COUNT(*) FROM auth.users)                                AS supabase_users,\n' +
      '    (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NOT NULL) AS prisma_linked,\n' +
      '    (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NULL)     AS prisma_unlinked;',
  )

  if (tallies.errored > 0) {
    // Non-zero exit so CI/cron wrappers can notice, but don't throw — the
    // per-user errors have already been logged above.
    process.exitCode = 2
  }
}

main()
  .catch((err) => {
    console.error('[backfill] Fatal error:', err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect().catch(() => {})
  })
