// scripts/confirm-stuck-users.ts
//
// One-shot remediation script: manually confirm the email of three real
// customers stuck in "Waiting for verification" state in Supabase Auth
// after the verification email never landed (or was missed). Triggered
// 28 Apr 2026 after Lauren Johnson flagged the post-launch friction.
//
// Usage:
//   npx tsx scripts/confirm-stuck-users.ts --dry-run
//   STUCK_USER_REMEDIATION=yes npx tsx scripts/confirm-stuck-users.ts
//
// Exit codes:
//   0 — all 3 users now confirmed (idempotent: re-running is safe)
//   1 — at least one user failed to confirm
//   2 — required env vars missing
//
// Required env:
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY  (NEVER ship this; .env only)
//   STUCK_USER_REMEDIATION=yes (safety latch)
//
// Safety:
//   - Hard-coded allowlist of three emails + UIDs. The script will not
//     touch any other user. Cross-references both email and UID before
//     mutating, to defend against the (extremely unlikely) case where an
//     email has been recycled to a different account.
//   - Defaults to refusing to run unless STUCK_USER_REMEDIATION=yes is set
//     or --force is passed. This prevents accidental re-runs from shell
//     history.
//   - --dry-run does the lookups but skips updateUserById entirely.
//   - The service role key is read from env and never logged.

import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js'

// ── Argument parsing ───────────────────────────────────────────────────────

const args = new Set(process.argv.slice(2))
const DRY_RUN = args.has('--dry-run')
const FORCE = args.has('--force')

// ── Allowlist ──────────────────────────────────────────────────────────────
// Hard-coded by design. These three users were verified against the
// Supabase Auth dashboard screenshot dated 28 Apr 2026. Any divergence
// between the screenshot and live state should be investigated manually
// before this script is re-run.

interface StuckUser {
  email: string
  uid: string
  /** Display label for logs only. Not used for matching. */
  label: string
  /** Original signup date from the dashboard screenshot, for audit logs. */
  signedUp: string
}

const STUCK_USERS: readonly StuckUser[] = [
  {
    email: 'esanaveed1@gmail.com',
    uid: 'f498011d-a136-4e69-a050-6594266f1734',
    label: 'Esa Mohammed Naveed',
    signedUp: 'Sun 26 Apr 2026',
  },
  {
    email: 'luciel0u1704@gmail.com',
    uid: '4af90bd6-ef93-4bd2-a4e6-04eca6dfe169',
    label: 'Lucie',
    signedUp: 'Mon 20 Apr 2026',
  },
  {
    email: 'm4.karts@gmail.com',
    uid: '5c1961d2-4f5b-47b7-bac0-b0d84d830a9b',
    label: 'M',
    signedUp: 'Wed 15 Apr 2026',
  },
]

// ── Result types ───────────────────────────────────────────────────────────

type Outcome =
  | 'newly_confirmed'
  | 'already_confirmed'
  | 'would_confirm' // dry-run path
  | 'not_found'
  | 'uid_mismatch'
  | 'error'

interface ResultRow {
  email: string
  uid: string
  label: string
  outcome: Outcome
  message: string
}

// ── Logging helpers ────────────────────────────────────────────────────────

const PREFIX = '[stuck-users]'

function ts(): string {
  return new Date().toISOString()
}

function log(line: string): void {
  console.log(`${ts()} ${PREFIX} ${line}`)
}

function logErr(line: string): void {
  console.error(`${ts()} ${PREFIX} ${line}`)
}

// ── Supabase admin lookup ──────────────────────────────────────────────────
// admin.listUsers() is paginated (50 per page by default; we use 200 to
// keep round-trips low). We build a one-shot map of email → User up front,
// then look each allowlisted email up locally. This is far cheaper than
// calling admin.getUserById per row, which would also bypass our
// email-based sanity check.

async function buildEmailIndex(client: SupabaseClient): Promise<Map<string, User>> {
  const byEmail = new Map<string, User>()
  const perPage = 200
  let page = 1

  while (true) {
    const { data, error } = await client.auth.admin.listUsers({ page, perPage })
    if (error) {
      throw new Error(`admin.listUsers (page ${page}) failed: ${error.message}`)
    }
    const users = data?.users ?? []
    for (const u of users) {
      if (u.email) byEmail.set(u.email.toLowerCase(), u)
    }
    if (users.length < perPage) break
    page += 1
    // Hard cap to avoid pathological loops if Supabase ever changes pagination semantics.
    if (page > 200) {
      throw new Error(`admin.listUsers paginated past 200 pages — aborting to be safe`)
    }
  }

  return byEmail
}

// ── Per-user remediation ───────────────────────────────────────────────────

async function processUser(
  client: SupabaseClient,
  target: StuckUser,
  index: Map<string, User>,
): Promise<ResultRow> {
  const found = index.get(target.email.toLowerCase())

  if (!found) {
    return {
      email: target.email,
      uid: target.uid,
      label: target.label,
      outcome: 'not_found',
      message: `no user with that email exists in Supabase Auth`,
    }
  }

  // Defence in depth: refuse to mutate if the live UID differs from the
  // one captured on 28 Apr 2026. An email reuse, a manual delete + re-create,
  // or a copy-paste error in the allowlist would all surface here.
  if (found.id !== target.uid) {
    return {
      email: target.email,
      uid: target.uid,
      label: target.label,
      outcome: 'uid_mismatch',
      message: `live UID ${found.id} does not match allowlisted UID ${target.uid}`,
    }
  }

  if (found.email_confirmed_at) {
    return {
      email: target.email,
      uid: target.uid,
      label: target.label,
      outcome: 'already_confirmed',
      message: `email_confirmed_at=${found.email_confirmed_at} (no action)`,
    }
  }

  if (DRY_RUN) {
    return {
      email: target.email,
      uid: target.uid,
      label: target.label,
      outcome: 'would_confirm',
      message: `[dry-run] would call admin.updateUserById(${found.id}, { email_confirm: true })`,
    }
  }

  // One-shot retry on transient network errors. Anything beyond that is
  // surfaced verbatim so the operator can decide whether to retry.
  let lastErrorMessage = ''
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const { data, error } = await client.auth.admin.updateUserById(found.id, {
      email_confirm: true,
    })
    if (!error && data?.user) {
      return {
        email: target.email,
        uid: target.uid,
        label: target.label,
        outcome: 'newly_confirmed',
        message: `email_confirmed_at=${data.user.email_confirmed_at ?? '(set)'}`,
      }
    }
    lastErrorMessage = error?.message ?? 'updateUserById returned no user and no error'
    if (attempt === 1) {
      logErr(`WARN ${target.email} attempt 1 failed (${lastErrorMessage}); retrying once`)
    }
  }

  return {
    email: target.email,
    uid: target.uid,
    label: target.label,
    outcome: 'error',
    message: lastErrorMessage,
  }
}

// ── Summary printing ───────────────────────────────────────────────────────

function printSummary(rows: readonly ResultRow[]): {
  alreadyConfirmed: number
  newlyConfirmed: number
  wouldConfirm: number
  failed: number
} {
  const counts = {
    alreadyConfirmed: rows.filter((r) => r.outcome === 'already_confirmed').length,
    newlyConfirmed: rows.filter((r) => r.outcome === 'newly_confirmed').length,
    wouldConfirm: rows.filter((r) => r.outcome === 'would_confirm').length,
    failed: rows.filter(
      (r) => r.outcome === 'not_found' || r.outcome === 'uid_mismatch' || r.outcome === 'error',
    ).length,
  }

  console.log('')
  console.log('━'.repeat(72))
  console.log(`${PREFIX} Summary`)
  console.log('━'.repeat(72))
  console.log(`Total stuck users in allowlist: ${STUCK_USERS.length}`)
  console.log(`Already confirmed (skipped):    ${counts.alreadyConfirmed}`)
  if (DRY_RUN) {
    console.log(`Would be confirmed (dry-run):   ${counts.wouldConfirm}`)
  } else {
    console.log(`Newly confirmed:                ${counts.newlyConfirmed}`)
  }
  console.log(`Failed:                         ${counts.failed}`)
  console.log('')

  // Per-row detail table for the audit log.
  const headers = ['EMAIL', 'UID', 'OUTCOME', 'DETAIL']
  const data = rows.map((r) => [r.email, r.uid, r.outcome, r.message])
  const widths = headers.map((h, i) => Math.max(h.length, ...data.map((d) => d[i].length)))
  const fmtRow = (cells: string[]): string => cells.map((c, i) => c.padEnd(widths[i])).join('  ')
  console.log(fmtRow(headers))
  console.log(widths.map((w) => '─'.repeat(w)).join('  '))
  for (const row of data) console.log(fmtRow(row))
  console.log('')

  return counts
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log('━'.repeat(72))
  log(`confirm-stuck-users — ${DRY_RUN ? 'DRY RUN (no writes)' : 'LIVE (will mutate Supabase)'}`)
  console.log('━'.repeat(72))

  // ── Safety latch ─────────────────────────────────────────────────────────
  if (!DRY_RUN && process.env.STUCK_USER_REMEDIATION !== 'yes' && !FORCE) {
    logErr('refusing to run live without safety latch.')
    logErr('  → re-run with --dry-run to preview, or set STUCK_USER_REMEDIATION=yes to apply.')
    logErr('  → alternatively pass --force (not recommended; latch exists for a reason).')
    process.exit(2)
  }

  // ── Env validation ───────────────────────────────────────────────────────
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    logErr('required env vars missing:')
    logErr(`  NEXT_PUBLIC_SUPABASE_URL    ${supabaseUrl ? 'OK' : 'MISSING'}`)
    logErr(`  SUPABASE_SERVICE_ROLE_KEY   ${serviceRoleKey ? 'OK' : 'MISSING'}`)
    logErr('  → populate .env from .env.example and re-run.')
    process.exit(2)
  }

  // Connection signal that does not leak the key.
  log(`connecting to ${supabaseUrl} (service role key length=${serviceRoleKey.length})`)

  const client = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  // ── Build email index ────────────────────────────────────────────────────
  let index: Map<string, User>
  try {
    log(`listing Supabase Auth users…`)
    index = await buildEmailIndex(client)
    log(`indexed ${index.size} users`)
  } catch (err) {
    logErr(`failed to list users: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  }

  // ── Process each allowlisted user ────────────────────────────────────────
  const rows: ResultRow[] = []
  for (const target of STUCK_USERS) {
    log(`processing ${target.email} (uid=${target.uid}, signed up ${target.signedUp})`)
    try {
      const row = await processUser(client, target, index)
      rows.push(row)

      switch (row.outcome) {
        case 'newly_confirmed':
          log(`OK ${row.email} → confirmed (${row.message})`)
          break
        case 'already_confirmed':
          log(`SKIP ${row.email} → already confirmed; ${row.message}`)
          break
        case 'would_confirm':
          log(`DRY-RUN ${row.email} → ${row.message}`)
          break
        case 'not_found':
          logErr(`FAIL ${row.email} → ${row.message}`)
          break
        case 'uid_mismatch':
          logErr(`FAIL ${row.email} → ${row.message}`)
          break
        case 'error':
          logErr(`FAIL ${row.email} → ${row.message}`)
          break
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      logErr(`FAIL ${target.email} → unexpected error: ${message}`)
      rows.push({
        email: target.email,
        uid: target.uid,
        label: target.label,
        outcome: 'error',
        message,
      })
    }
  }

  // ── Summary + exit code ──────────────────────────────────────────────────
  const counts = printSummary(rows)

  if (counts.failed > 0) {
    logErr(`exiting 1 — ${counts.failed} user(s) failed to confirm`)
    process.exit(1)
  }

  if (DRY_RUN) {
    log(
      `dry-run complete: ${counts.alreadyConfirmed} already confirmed, ${counts.wouldConfirm} would be confirmed`,
    )
    log(`re-run with STUCK_USER_REMEDIATION=yes (and no --dry-run) to apply.`)
    process.exit(0)
  }

  log(
    `done: ${counts.alreadyConfirmed} already confirmed, ${counts.newlyConfirmed} newly confirmed`,
  )
  process.exit(0)
}

main().catch((err) => {
  logErr(`confirm-stuck-users crashed: ${err instanceof Error ? err.message : String(err)}`)
  process.exit(1)
})
