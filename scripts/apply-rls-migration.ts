/**
 * One-shot applier for the 20260506 RLS migration.
 *
 * Splits the SQL on `;` and runs each statement via Prisma's
 * $executeRawUnsafe, which only supports a single statement per call.
 *
 * Usage:
 *   npx tsx scripts/apply-rls-migration.ts
 *
 * Idempotent — re-running is safe (ALTER TABLE … ENABLE RLS is a
 * no-op when already on, and CREATE POLICY is preceded by DROP POLICY
 * IF EXISTS).
 */

import { resolve } from 'path'
import { readFileSync } from 'fs'
import { config as loadDotenv } from 'dotenv'
import { PrismaClient } from '@prisma/client'

loadDotenv({ path: resolve(__dirname, '..', '.env.local') })
loadDotenv({ path: resolve(__dirname, '..', '.env') })

const url = process.env.DIRECT_URL || process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL / DIRECT_URL not set')
  process.exit(2)
}
const prisma = new PrismaClient({ datasources: { db: { url } } })

const SQL_PATH = resolve(
  __dirname,
  '..',
  'supabase',
  'migrations',
  '20260506_enable_rls_on_prisma_tables.sql',
)

function splitStatements(sql: string): string[] {
  // Strip line comments + block comments to keep splitting simple.
  const stripped = sql.replace(/--[^\n]*\n/g, '\n').replace(/\/\*[\s\S]*?\*\//g, '')
  // Split on `;` followed by whitespace/newline, then trim, drop empties.
  return stripped
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

async function main() {
  const raw = readFileSync(SQL_PATH, 'utf-8')
  const statements = splitStatements(raw)

  console.log('━'.repeat(72))
  console.log(`Applying ${SQL_PATH}`)
  console.log(`Statement count: ${statements.length}`)
  console.log('━'.repeat(72))
  console.log('')

  let ok = 0
  let fail = 0
  for (const [i, stmt] of statements.entries()) {
    const preview = stmt.split('\n')[0].slice(0, 80)
    process.stdout.write(`[${(i + 1).toString().padStart(2)}/${statements.length}] ${preview}… `)
    try {
      await prisma.$executeRawUnsafe(stmt)
      console.log('✓')
      ok++
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.log('✗')
      console.error(`     Error: ${msg}`)
      fail++
    }
  }

  console.log('')
  console.log('━'.repeat(72))
  console.log(`Done. ${ok} ok / ${fail} failed.`)
  console.log('━'.repeat(72))

  if (fail > 0) process.exit(1)

  // Record in our migration ledger so future audits know it ran
  try {
    await prisma.$executeRawUnsafe(
      `INSERT INTO public."_applied_migrations" (filename, source) VALUES ('20260506_enable_rls_on_prisma_tables.sql', 'migrations') ON CONFLICT (filename) DO NOTHING`,
    )
  } catch {
    // ledger may not have ON CONFLICT support if column is text — best effort
  }
}

main()
  .catch((err) => {
    console.error('Unexpected error:', err)
    process.exit(1)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
