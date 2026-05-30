#!/usr/bin/env node
// ─── Idempotent Supabase migration runner (wired into the Vercel build) ─────
//
// WHY THIS EXISTS
// The Vercel build only ran `prisma generate` — it never applied database
// migrations. So every schema change had to be run by hand against Supabase,
// and a forgotten one silently broke features in production (e.g. the
// marker_board_access / calibration_baselines tables that were missing live
// despite the code shipping). This script closes that gap: it runs pending
// SQL migrations as part of the build, so deploying = migrating.
//
// HOW IT STAYS SAFE
//  • Tracking table `_migrations_applied(name, applied_at)` records what has run.
//  • BASELINE: on first run (tracking table absent), every migration file whose
//    name sorts BEFORE the cutoff is recorded as already-applied WITHOUT being
//    executed — those predate this runner and are already live (applied
//    historically / by hand). Only files at/after the cutoff actually run.
//  • Every migration authored from the cutoff date is idempotent
//    (CREATE/ALTER ... IF NOT EXISTS, DO-block guards), so even a double-run is
//    harmless — the tracking table is belt-and-braces, not the only safety.
//  • Each file runs inside a transaction; its tracking row is written in the
//    SAME transaction, so a failed migration leaves no "applied" record.
//  • NO DB URL in env (e.g. a local build without secrets) → the script SKIPS
//    cleanly (exit 0) rather than failing the build. A URL present but a real
//    migration error → the build FAILS loudly (we want to know).
//
// It deliberately uses the DIRECT (non-pooled) connection for DDL: pooled
// PgBouncer connections are unreliable for schema changes.
// ───────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MIGRATIONS_DIR = join(__dirname, '..', 'supabase', 'migrations')

// Files at/after this sort key are managed by this runner (and are idempotent);
// everything before is baselined as already-applied on first run. This is the
// date the runner was introduced.
const BASELINE_CUTOFF = '20260530'

// Prefer a DIRECT (non-pooled) connection for DDL. Fall back through the common
// env names so it works on Vercel and locally.
const DB_URL =
  process.env.MIGRATION_DATABASE_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DIRECT_URL ||
  process.env.DATABASE_URL ||
  null

function log(msg) {
  console.log(`[migrations] ${msg}`)
}

async function main() {
  if (!DB_URL) {
    log('No database URL in env — skipping migrations (expected for a local build without DB access).')
    return
  }

  // Discover migration files: numbered .sql files, excluding helpers (README,
  // _RUN-ALL...). Sorted lexically = chronological (YYYYMMDD prefixes).
  const files = readdirSync(MIGRATIONS_DIR)
    .filter((f) => f.endsWith('.sql') && !f.startsWith('_'))
    .sort()

  if (files.length === 0) {
    log('No migration files found.')
    return
  }

  const client = new pg.Client({
    connectionString: DB_URL,
    ssl: { rejectUnauthorized: false },
    // Generous timeouts: DDL on a busy table can take a moment.
    statement_timeout: 120_000,
    query_timeout: 120_000,
  })

  await client.connect()
  try {
    // 1. Ensure the tracking table exists. Detect whether THIS run created it
    //    (so we know to baseline).
    const existed = await client.query(
      `SELECT to_regclass('public._migrations_applied') IS NOT NULL AS e`,
    )
    const trackingExisted = existed.rows[0].e === true

    await client.query(`
      CREATE TABLE IF NOT EXISTS public._migrations_applied (
        name TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `)

    // 2. First run → baseline everything before the cutoff as already-applied.
    if (!trackingExisted) {
      const pre = files.filter((f) => f < BASELINE_CUTOFF)
      for (const f of pre) {
        await client.query(
          `INSERT INTO public._migrations_applied (name) VALUES ($1) ON CONFLICT DO NOTHING`,
          [f],
        )
      }
      log(`First run: baselined ${pre.length} pre-existing migration(s) as applied.`)
    }

    // 3. Load the set already applied.
    const appliedRes = await client.query(`SELECT name FROM public._migrations_applied`)
    const applied = new Set(appliedRes.rows.map((r) => r.name))

    // 4. Apply pending files in order, each in its own transaction.
    let ran = 0
    for (const f of files) {
      if (applied.has(f)) continue
      const sql = readFileSync(join(MIGRATIONS_DIR, f), 'utf8')
      log(`Applying ${f} …`)
      try {
        await client.query('BEGIN')
        await client.query(sql)
        await client.query(
          `INSERT INTO public._migrations_applied (name) VALUES ($1) ON CONFLICT DO NOTHING`,
          [f],
        )
        await client.query('COMMIT')
        ran += 1
        log(`  ✓ ${f}`)
      } catch (err) {
        await client.query('ROLLBACK').catch(() => {})
        throw new Error(`Migration ${f} failed: ${(err && err.message) || err}`)
      }
    }

    if (ran === 0) log('Up to date — no pending migrations.')
    else log(`Applied ${ran} migration(s).`)
  } finally {
    await client.end()
  }
}

main().catch((err) => {
  console.error(`[migrations] FAILED: ${(err && err.message) || err}`)
  process.exit(1)
})
