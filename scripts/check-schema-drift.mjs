#!/usr/bin/env node
/**
 * Does the production schema actually contain what this repository says it does?
 *
 * WHY THIS EXISTS
 * ───────────────
 * `scripts/apply-migrations.mjs` has a `BASELINE_CUTOFF`. Every migration file
 * sorting before it is INSERTED INTO the `_migrations_applied` tracker without
 * being executed. On 2026-05-30T11:51:47Z it recorded 66 files in four seconds.
 *
 * At least one of those files had never actually been run.
 * `20260512_user_is_minor.sql` creates `profiles.is_minor`. The column did not
 * exist. `src/lib/identity/profiles.ts` selects it on every identity read, so
 * every read returned Postgres error 42703, the caller discarded the error, and
 * `resolveAgeBand()` degraded to UNKNOWN for all 206 accounts - blocking every
 * consent-gated AI route on a children's product. Nobody found out for four
 * months, because the tracker said applied and the code said nothing.
 *
 * THE LESSON THIS SCRIPT ENCODES: `_migrations_applied` records an intention.
 * `information_schema` records reality. When they disagree, reality wins, and
 * you will only notice if something asks.
 *
 * WHAT CHANGED ON 19 SEPTEMBER 2026 (DATA-1)
 * ──────────────────────────────────────────
 * It used to compare only the tables and columns that MIGRATIONS declare. That
 * is structurally blind to the more common failure here - a table that CODE
 * reads and no migration ever declared. Five public forms (creator
 * applications, school contact, waitlist, feedback, teacher leads) wrote to
 * nothing for months while this script reported no drift, because none of them
 * had a migration to be missing from. Seven more tables are still in that state.
 *
 * It now checks 529 expectations: migration tables and columns, every
 * `.from('x')` in `src/`, every Prisma model, and the policies, indexes,
 * triggers and functions the migrations declare. It shares its comparison with
 * `GET /api/health/schema`, which runs it daily - because a checker nothing
 * runs is only as good as the last person who remembered.
 *
 *   node --env-file=.env.local scripts/check-schema-drift.mjs
 *   node --env-file=.env.local scripts/check-schema-drift.mjs --json
 *   node --env-file=.env.local scripts/check-schema-drift.mjs --all
 *
 * `--all` lists the known drift as well as the new. Without it, only NEW drift
 * is shown and only new drift sets exit code 1: the 31 findings recorded in
 * `schema-drift-known.json` are debt with a decision attached, and a report
 * that is red every single day is one nobody reads.
 *
 * Exit codes: 0 clean, 1 new drift, 2 could not check. Safe in CI. Read-only:
 * it issues SELECTs against catalogue views and nothing else.
 *
 * KNOWN LIMITS, stated so a clean run is not read as more than it is:
 *   - Regex parsing of SQL and TypeScript. It does not understand DO blocks or
 *     a `.from(variable)`.
 *   - It checks existence, not shape. A column of the wrong type passes.
 *   - Objects created outside the migrations directory show as extra, not
 *     missing, and extra is normal here.
 */

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PrismaClient } from '@prisma/client'
import { compareSchema } from '../src/lib/schema/drift.mjs'
import { buildManifest } from './generate-schema-manifest.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const asJson = process.argv.includes('--json')
const showAll = process.argv.includes('--all')

const QUERIES = {
  tables: `select table_name as n from information_schema.tables where table_schema = 'public'`,
  columns: `select table_name || '.' || column_name as n from information_schema.columns where table_schema = 'public'`,
  policies: `select tablename || ':' || policyname as n from pg_policies where schemaname = 'public'`,
  indexes: `select indexname as n from pg_indexes where schemaname = 'public'`,
  // `auth` too: the account-creation trigger lives on `auth.users`, and a
  // query scoped to `public` reports it missing for ever.
  triggers: `select n.nspname || '.' || t.tgname as n from pg_trigger t
               join pg_class c on c.oid = t.tgrelid
               join pg_namespace n on n.oid = c.relnamespace
              where n.nspname in ('public','auth') and not t.tgisinternal`,
  functions: `select p.proname as n from pg_proc p
                join pg_namespace n on n.oid = p.pronamespace
               where n.nspname = 'public'`,
}

async function main() {
  const prisma = new PrismaClient()
  const live = {}
  try {
    for (const [key, sql] of Object.entries(QUERIES)) {
      const rows = await prisma.$queryRawUnsafe(sql)
      live[key] = rows.map((r) => r.n)
    }
  } catch (err) {
    console.error('Could not read the schema:', err instanceof Error ? err.message : err)
    console.error('Needs a database URL in the environment, e.g. --env-file=.env.local')
    await prisma.$disconnect().catch(() => {})
    process.exit(2)
  }
  await prisma.$disconnect().catch(() => {})

  // Built fresh rather than read from the committed manifest, so the CLI is
  // never reporting against a stale snapshot of the repository.
  const manifest = buildManifest()
  const known = JSON.parse(readFileSync(resolve(ROOT, 'scripts/schema-drift-known.json'), 'utf8'))
  const report = compareSchema(manifest, live, known)

  if (asJson) {
    console.log(JSON.stringify(report, null, 2))
    process.exit(report.introduced.length ? 1 : 0)
  }

  console.log(`Checked ${report.checkedObjects} expectations against the live database.`)
  console.log(`Live: ${live.tables.length} tables, ${live.policies.length} policies.\n`)

  const print = (title, findings) => {
    if (!findings.length) return
    console.log(`${title} (${findings.length}):`)
    for (const f of findings) {
      const detail = f.detail ? ` ${f.detail}` : ''
      console.log(`  ${f.kind.padEnd(30)} ${f.object.padEnd(44)}${detail}  ${f.declaredIn}`)
    }
    console.log('')
  }

  print('NEW DRIFT', report.introduced)
  if (showAll) print('KNOWN DRIFT (recorded in schema-drift-known.json)', report.expected)

  if (report.stale.length) {
    console.log(`ALLOWLIST ENTRIES THAT NO LONGER DRIFT (${report.stale.length}):`)
    for (const s of report.stale) console.log(`  ${s.kind.padEnd(30)} ${s.object}`)
    console.log('  Remove these from scripts/schema-drift-known.json.\n')
  }

  if (!report.introduced.length) {
    console.log(
      `No new drift. ${report.expected.length} known finding(s) recorded in ` +
        `scripts/schema-drift-known.json${showAll ? '' : ' (--all to list them)'}.`,
    )
  } else {
    console.log('Each NEW entry is code that may be silently failing against the database.')
    console.log('Before fixing: grep for the object to see whether anything reads it, and')
    console.log('read the migration - some recreate RLS policies on live tables, which is')
    console.log('not something to run casually on a product used by children.')
  }

  process.exit(report.introduced.length ? 1 : 0)
}

main()
