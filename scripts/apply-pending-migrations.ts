/**
 * Applies any local SQL migration files that haven't yet been run on the
 * Supabase database, using the DATABASE_URL Postgres direct connection
 * (no Supabase Dashboard click-through, no Supabase CLI required).
 *
 * Usage:
 *   $env:DATABASE_URL = "postgres://..."   # paste from Vercel env
 *   npx tsx scripts/apply-pending-migrations.ts
 *
 * Or, if you have a .env.local with DATABASE_URL already set:
 *   npx tsx scripts/apply-pending-migrations.ts
 *
 * Behaviour:
 *   1. Connects to Postgres via Prisma's underlying driver.
 *   2. Reads `supabase/migrations/*.sql` AND `supabase/migrations-pending/*.sql`,
 *      sorted by filename (timestamp prefix means filename-sort = chronological).
 *   3. Tracks which migrations have already been applied via a small
 *      `_applied_migrations` ledger table (created on first run).
 *   4. Applies any migration not in the ledger, wrapped in a transaction.
 *   5. Records the migration filename + applied_at in the ledger.
 *   6. Idempotent — re-running is safe; already-applied migrations are skipped.
 *
 * Why not use Supabase CLI / `supabase db push`?
 *   - Requires interactive login with a personal access token
 *   - Sometimes drifts on what it considers "applied"
 *   - The founder doesn't want another tool to install at 11 PM
 *
 * Why not paste in the SQL Editor?
 *   - Founder explicitly asked "do it for me"
 *   - One command vs. multi-click Dashboard navigation
 */

import { readFileSync, readdirSync } from 'fs'
import { resolve, basename } from 'path'
import { config as loadDotenv } from 'dotenv'
import { PrismaClient } from '@prisma/client'

// Load .env files Next.js-style — local first, then base. Honoured by both
// `npx tsx` and `node`. Doesn't override existing env vars.
loadDotenv({ path: resolve(__dirname, '..', '.env.local') })
loadDotenv({ path: resolve(__dirname, '..', '.env') })

const DATABASE_URL = process.env.DATABASE_URL
const DIRECT_URL = process.env.DIRECT_URL

if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set.')
  console.error('')
  console.error('Get it from Vercel:')
  console.error(
    '  https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
  )
  console.error("Search 'DATABASE_URL' → click ⋯ → Edit → copy the value, then:")
  console.error('  PowerShell: $env:DATABASE_URL = "postgres://..."')
  console.error('  bash:       export DATABASE_URL="postgres://..."')
  console.error('  Re-run: npx tsx scripts/apply-pending-migrations.ts')
  process.exit(2)
}

// Direct (non-pooled) URL is preferred for migrations — pooled connections
// don't allow CREATE TABLE / DDL in some Supabase setups.
const connectionUrl = DIRECT_URL || DATABASE_URL
if (!DIRECT_URL) {
  console.warn('DIRECT_URL not set — falling back to DATABASE_URL.')
  console.warn('If migrations fail with "session pooler" errors, set DIRECT_URL too.')
  console.warn('')
}

const prisma = new PrismaClient({
  datasources: { db: { url: connectionUrl } },
})

const MIGRATION_DIRS = [
  resolve(__dirname, '..', 'supabase', 'migrations'),
  resolve(__dirname, '..', 'supabase', 'migrations-pending'),
]

interface Migration {
  filename: string
  source: 'migrations' | 'migrations-pending'
  fullPath: string
  sql: string
}

function loadAllMigrations(): Migration[] {
  const all: Migration[] = []
  for (const dir of MIGRATION_DIRS) {
    let entries: string[]
    try {
      entries = readdirSync(dir).filter((f) => f.endsWith('.sql'))
    } catch {
      // Directory may not exist; skip silently.
      continue
    }
    const source = basename(dir) as 'migrations' | 'migrations-pending'
    for (const filename of entries) {
      const fullPath = resolve(dir, filename)
      const sql = readFileSync(fullPath, 'utf-8')
      all.push({ filename, source, fullPath, sql })
    }
  }
  // Sort by filename — timestamp-prefixed migrations sort chronologically.
  all.sort((a, b) => a.filename.localeCompare(b.filename))
  return all
}

async function ensureLedger(): Promise<void> {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS public._applied_migrations (
      filename TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      source TEXT NOT NULL,
      sha256 TEXT
    );
  `)
}

async function getApplied(): Promise<Set<string>> {
  const rows = await prisma.$queryRawUnsafe<Array<{ filename: string }>>(
    'SELECT filename FROM public._applied_migrations',
  )
  return new Set(rows.map((r) => r.filename))
}

async function applyMigration(migration: Migration): Promise<void> {
  // Wrap in a transaction so a failed migration doesn't leave the DB in a
  // partial state. The ledger insert lives in the same transaction.
  await prisma.$transaction(async (tx) => {
    await tx.$executeRawUnsafe(migration.sql)
    await tx.$executeRawUnsafe(
      'INSERT INTO public._applied_migrations (filename, source) VALUES ($1, $2)',
      migration.filename,
      migration.source,
    )
  })
}

async function main() {
  console.log('━'.repeat(72))
  console.log('Applying pending Supabase migrations')
  console.log('━'.repeat(72))
  console.log('')

  await ensureLedger()
  const applied = await getApplied()
  const all = loadAllMigrations()

  console.log(`Found ${all.length} migration files locally.`)
  console.log(`Already applied per ledger: ${applied.size}.`)
  console.log('')

  const pending = all.filter((m) => !applied.has(m.filename))
  if (pending.length === 0) {
    console.log('✓ Nothing to do. Database is up to date.')
    return
  }

  console.log(`Will apply ${pending.length} pending migration(s):`)
  for (const m of pending) {
    console.log(`  - [${m.source}] ${m.filename}`)
  }
  console.log('')

  let successCount = 0
  for (const migration of pending) {
    process.stdout.write(`Applying ${migration.filename}… `)
    try {
      await applyMigration(migration)
      console.log('✓')
      successCount++
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      console.log('✗')
      console.error(`  Error: ${message}`)
      console.error(
        '  Stopping. Already-applied migrations remain applied; this one was rolled back.',
      )
      console.error(
        '  Common causes: table already exists (apply manually with IF NOT EXISTS), or DATABASE_URL points at the pooled connection (use DIRECT_URL).',
      )
      process.exit(1)
    }
  }

  console.log('')
  console.log(`✓ Applied ${successCount} migration(s) successfully.`)
}

main()
  .catch((err) => {
    console.error('Unexpected error:', err)
    process.exit(1)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
