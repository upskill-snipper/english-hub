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
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MIGRATIONS_DIR = join(__dirname, '..', 'supabase', 'migrations')

// Files at/after this sort key are managed by this runner (and are idempotent);
// everything before is baselined as already-applied on first run. This is the
// date the runner was introduced.
const BASELINE_CUTOFF = '20260530'

/**
 * Baselining marks migrations as applied WITHOUT running them. It is only ever
 * correct on the one database the runner was introduced against, so it now
 * requires saying so out loud. See the block in main() for what it cost.
 */
const ALLOW_BASELINE =
  process.env.MIGRATION_ALLOW_BASELINE === '1' || process.argv.includes('--allow-baseline')


// ─── Safety helpers, exported so they can be tested ─────────────────────────

/**
 * Strip everything a SQL keyword can hide inside, so a scan sees only real
 * statement text: line comments, block comments, single-quoted literals and
 * dollar-quoted bodies.
 *
 * The dollar-quoted case is the one that matters. Every plpgsql function in
 * this repository is written as `$$ ... BEGIN ... END; ... $$`, and a naive
 * search for BEGIN would match all of them.
 */
export function stripSqlNoise(sql) {
  let out = sql
  // Dollar-quoted bodies first, including named tags like $func$. The
  // backreference stops $func$ ... $func$ closing on a bare $$.
  out = out.replace(/\$([A-Za-z_][A-Za-z0-9_]*)?\$[\s\S]*?\$\1\$/g, ' ')
  out = out.replace(/\/\*[\s\S]*?\*\//g, ' ')
  out = out.replace(/--[^\r\n]*/g, ' ')
  out = out.replace(/'(?:[^']|'')*'/g, " '' ")
  return out
}

/**
 * Does this file manage its own transaction?
 *
 * WHY THIS MATTERS. The runner wraps every file in its own BEGIN/COMMIT. Four
 * migrations here open their own transaction as well, and Postgres does not
 * nest: the inner BEGIN is ignored with a warning, and the file's own COMMIT
 * ends the RUNNER's transaction. Everything after it - including the tracker
 * INSERT - then runs outside any transaction, so a later failure in the same
 * file leaves the migration half-applied AND recorded as applied.
 */
export function hasTopLevelTransactionControl(sql) {
  const bare = stripSqlNoise(sql)
  return /(^|;|\r|\n)\s*(BEGIN|COMMIT|ROLLBACK|START\s+TRANSACTION)\s*(;|$)/im.test(bare)
}

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
    //
    // ─── THIS IS WHERE THE SCHEMA DRIFT CAME FROM ────────────────────────
    //
    // This block used to run with no guard at all. On 30 May 2026 it inserted
    // 66 files as applied without executing a single one of them, in four
    // seconds. One of those created `profiles.is_minor`; the column did not
    // exist for four months while the code selected it on every identity read.
    // On 19 September two more consequences surfaced: the four progress_*
    // tables had never been created while the tracker said they had, so the
    // progress API queried nothing on every call.
    //
    // It is currently 69 of the 90 files in supabase/migrations.
    //
    // The premise - "these already ran, before this runner existed" - is true
    // exactly once, on the database the runner was introduced against. On any
    // OTHER database, a dropped tracker or a fresh provision, it is false and
    // catastrophically quiet: the runner marks most of the schema as done and
    // then reports "Up to date".
    //
    // So it now refuses unless someone says so explicitly. In production the
    // tracker exists, this branch never fires, and nothing changes; the guard
    // only bites on the case that was silently wrong.
    // ─────────────────────────────────────────────────────────────────────
    if (!trackingExisted) {
      const pre = files.filter((f) => f < BASELINE_CUTOFF)
      if (!ALLOW_BASELINE) {
        throw new Error(
          `Refusing to baseline. There is no _migrations_applied table, so this looks like a ` +
            `fresh or reset database. Baselining would mark ${pre.length} migration(s) as applied ` +
            `WITHOUT running them, which is how profiles.is_minor went missing for four months ` +
            `and how the progress_* tables were never created.
` +
            `If this database genuinely already has that schema, re-run with ` +
            `MIGRATION_ALLOW_BASELINE=1. If it is empty, you want the migrations to actually run: ` +
            `create the tracking table yourself with no rows, or run them from the Supabase CLI.`,
        )
      }
      for (const f of pre) {
        await client.query(
          `INSERT INTO public._migrations_applied (name) VALUES ($1) ON CONFLICT DO NOTHING`,
          [f],
        )
      }
      log(`Baselined ${pre.length} pre-existing migration(s) as applied (MIGRATION_ALLOW_BASELINE).`)
    }

    // 3. Load the set already applied.
    const appliedRes = await client.query(`SELECT name FROM public._migrations_applied`)
    const applied = new Set(appliedRes.rows.map((r) => r.name))

    // 4. Apply pending files in order, each in its own transaction.
    let ran = 0
    for (const f of files) {
      if (applied.has(f)) continue
      const sql = readFileSync(join(MIGRATIONS_DIR, f), 'utf8')
      // Four migrations here open their own transaction. Postgres does not
      // nest: the inner BEGIN is ignored with a warning, and the file's own
      // COMMIT ends the RUNNER's transaction - so the tracker INSERT below
      // would run outside any transaction, and a later failure in the same
      // file would leave it half-applied AND recorded as applied.
      const selfManaged = hasTopLevelTransactionControl(sql)
      log(`Applying ${f}${selfManaged ? ' (self-managed transaction)' : ''} …`)
      try {
        if (!selfManaged) await client.query('BEGIN')
        await client.query(sql)
        await client.query(
          `INSERT INTO public._migrations_applied (name) VALUES ($1) ON CONFLICT DO NOTHING`,
          [f],
        )
        if (!selfManaged) await client.query('COMMIT')
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

// Only run when invoked directly. Without this guard, importing the file to
// test the helpers above would connect to PRODUCTION and start applying
// migrations inside a vitest worker.
const invokedDirectly =
  process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))

if (invokedDirectly) {
  main().catch((err) => {
    console.error(`[migrations] FAILED: ${(err && err.message) || err}`)
    process.exit(1)
  })
}
