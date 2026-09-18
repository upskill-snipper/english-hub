#!/usr/bin/env node
/**
 * Does the production schema actually contain what the migrations say it does?
 *
 * WHY THIS EXISTS
 * ───────────────
 * `scripts/apply-migrations.mjs` has a `BASELINE_CUTOFF`. Every migration file
 * sorting before it is INSERTED INTO the `_migrations_applied` tracker without
 * being executed — that is what baselining means, and it is correct for files
 * that predate the tracker and were applied by hand. On 2026-05-30T11:51:47Z
 * it recorded 66 files in four seconds.
 *
 * At least one of those files had never actually been run.
 * `20260512_user_is_minor.sql` creates `profiles.is_minor`. The column did not
 * exist. `src/lib/identity/profiles.ts` selects it on every identity read, so
 * every read returned Postgres error 42703, the caller discarded the error, and
 * `resolveAgeBand()` degraded to UNKNOWN for all 206 accounts — blocking every
 * consent-gated AI route on a children's product. Nobody found out for four
 * months, because the tracker said applied and the code said nothing.
 *
 * THE LESSON THIS SCRIPT ENCODES: `_migrations_applied` records an intention.
 * `information_schema` records reality. When they disagree, reality wins, and
 * you will only notice if something asks.
 *
 * WHAT IT DOES
 * ────────────
 * Parses every file in supabase/migrations/ for the tables and columns it
 * claims to create, asks the database which of them exist, and reports the
 * difference. Read-only: it issues SELECTs against information_schema and
 * nothing else. It cannot create, alter, drop or write anything.
 *
 *   node --env-file=.env.local scripts/check-schema-drift.mjs
 *   node --env-file=.env.local scripts/check-schema-drift.mjs --json
 *
 * Exit codes: 0 clean, 1 drift found, 2 could not check. Safe in CI.
 *
 * KNOWN LIMITS, stated so nobody reads a clean run as more than it is:
 *   - Regex parsing of SQL. It finds CREATE TABLE and ALTER TABLE ... ADD
 *     COLUMN; it does not understand DO blocks, functions or conditional DDL,
 *     so a table created inside one reads as missing.
 *   - It does not check types, constraints, defaults, indexes or RLS policies.
 *     A column of the wrong type passes.
 *   - It cannot see objects created outside the migrations directory (the
 *     Supabase dashboard, psql by hand). Those show as extra, not missing, and
 *     are not reported: extra objects are normal here.
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PrismaClient } from '@prisma/client'

const HERE = dirname(fileURLToPath(import.meta.url))
const MIGRATIONS = resolve(HERE, '..', 'supabase', 'migrations')
const asJson = process.argv.includes('--json')

// Words a loose regex would otherwise pick up as table names.
const NOT_A_TABLE = new Set(['if', 'and', 'for', 'or', 'not', 'exists', 'only', 'public'])

function declaredObjects() {
  const tables = new Map() // name -> file that declares it
  const columns = new Map() // "table.column" -> file

  for (const file of readdirSync(MIGRATIONS).filter((n) => n.endsWith('.sql')).sort()) {
    const sql = readFileSync(join(MIGRATIONS, file), 'utf8')

    for (const m of sql.matchAll(/CREATE TABLE\s+(?:IF NOT EXISTS\s+)?(?:public\.)?"?([a-z_][a-z0-9_]*)"?/gi)) {
      const name = m[1].toLowerCase()
      if (!NOT_A_TABLE.has(name) && !tables.has(name)) tables.set(name, file)
    }

    for (const m of sql.matchAll(
      /ALTER TABLE\s+(?:ONLY\s+)?(?:public\.)?"?([a-z_][a-z0-9_]*)"?[\s\S]{0,120}?ADD COLUMN\s+(?:IF NOT EXISTS\s+)?"?([a-z_][a-z0-9_]*)"?/gi,
    )) {
      const table = m[1].toLowerCase()
      if (NOT_A_TABLE.has(table)) continue
      const key = `${table}.${m[2].toLowerCase()}`
      if (!columns.has(key)) columns.set(key, file)
    }
  }
  return { tables, columns }
}

async function main() {
  const prisma = new PrismaClient()
  let liveTables, liveColumns
  try {
    const t = await prisma.$queryRawUnsafe(
      `select table_name from information_schema.tables where table_schema = 'public'`,
    )
    const c = await prisma.$queryRawUnsafe(
      `select table_name || '.' || column_name as k from information_schema.columns where table_schema = 'public'`,
    )
    liveTables = new Set(t.map((r) => r.table_name.toLowerCase()))
    liveColumns = new Set(c.map((r) => r.k.toLowerCase()))
  } catch (err) {
    console.error('Could not read the schema:', err instanceof Error ? err.message : err)
    console.error('Needs a database URL in the environment, e.g. --env-file=.env.local')
    await prisma.$disconnect().catch(() => {})
    process.exit(2)
  }

  const { tables, columns } = declaredObjects()

  const missingTables = [...tables.entries()]
    .filter(([name]) => !liveTables.has(name))
    .map(([name, file]) => ({ object: name, declaredIn: file }))

  // Only meaningful for tables that DO exist - a column on a missing table is
  // already covered by the missing table, and reporting both doubles the noise.
  const missingColumns = [...columns.entries()]
    .filter(([key]) => liveTables.has(key.split('.')[0]) && !liveColumns.has(key))
    .map(([key, file]) => ({ object: key, declaredIn: file }))

  await prisma.$disconnect().catch(() => {})

  if (asJson) {
    console.log(JSON.stringify({ missingTables, missingColumns }, null, 2))
  } else {
    console.log(`Declared by migrations: ${tables.size} tables, ${columns.size} added columns.`)
    console.log(`Live in the database:   ${liveTables.size} tables.\n`)

    if (!missingTables.length && !missingColumns.length) {
      console.log('No drift. Every table and column the migrations declare exists.')
    } else {
      if (missingTables.length) {
        console.log(`MISSING TABLES (${missingTables.length}):`)
        for (const m of missingTables) console.log(`  ${m.object.padEnd(34)} ${m.declaredIn}`)
        console.log('')
      }
      if (missingColumns.length) {
        console.log(`MISSING COLUMNS on tables that exist (${missingColumns.length}):`)
        for (const m of missingColumns) console.log(`  ${m.object.padEnd(34)} ${m.declaredIn}`)
        console.log('')
      }
      console.log('Each of these is code that may be silently failing against the database.')
      console.log('Before fixing: grep for the object to see whether anything reads it, and')
      console.log('read the migration - some recreate RLS policies on live tables, which is')
      console.log('not something to run casually on a product used by children.')
    }
  }

  process.exit(missingTables.length || missingColumns.length ? 1 : 0)
}

main()
