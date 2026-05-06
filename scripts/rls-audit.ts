/**
 * RLS audit — finds every table in the `public` schema where Row-Level
 * Security is disabled, and reports its row count + column shape so we
 * can decide what policy each one needs.
 *
 * Usage:
 *   npx tsx scripts/rls-audit.ts
 *
 * Reads DATABASE_URL / DIRECT_URL from .env.local. No mutations — read-only.
 */

import { resolve } from 'path'
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

interface RlsTableRow {
  schemaname: string
  tablename: string
  rowsecurity: boolean
}

interface PolicyRow {
  schemaname: string
  tablename: string
  policyname: string
  cmd: string | null
}

interface TableSizeRow {
  table_name: string
  row_count: bigint
}

interface ColumnRow {
  table_name: string
  column_name: string
  data_type: string
  is_nullable: string
}

async function main() {
  console.log('━'.repeat(72))
  console.log('RLS audit — public schema')
  console.log('━'.repeat(72))
  console.log('')

  // 1. Tables with RLS state
  const tables = await prisma.$queryRawUnsafe<RlsTableRow[]>(`
    SELECT n.nspname AS schemaname, c.relname AS tablename, c.relrowsecurity AS rowsecurity
    FROM pg_class c
    JOIN pg_namespace n ON c.relnamespace = n.oid
    WHERE n.nspname = 'public'
      AND c.relkind = 'r'   -- ordinary tables only
    ORDER BY c.relname
  `)

  // 2. Existing policies (so we know if some tables have policies but RLS is off)
  const policies = await prisma.$queryRawUnsafe<PolicyRow[]>(`
    SELECT schemaname, tablename, policyname, cmd
    FROM pg_policies
    WHERE schemaname = 'public'
    ORDER BY tablename, policyname
  `)

  const policyByTable = new Map<string, PolicyRow[]>()
  for (const p of policies) {
    const arr = policyByTable.get(p.tablename) ?? []
    arr.push(p)
    policyByTable.set(p.tablename, arr)
  }

  const noRls = tables.filter((t) => !t.rowsecurity)
  const withRls = tables.filter((t) => t.rowsecurity)

  console.log(`Total public tables: ${tables.length}`)
  console.log(`  ✓ RLS enabled:    ${withRls.length}`)
  console.log(`  ✗ RLS DISABLED:   ${noRls.length}`)
  console.log('')

  if (noRls.length === 0) {
    console.log('All public tables have RLS enabled. Nothing to fix.')
    return
  }

  console.log('━'.repeat(72))
  console.log('Tables WITHOUT RLS (publicly accessible)')
  console.log('━'.repeat(72))

  for (const t of noRls) {
    const existingPolicies = policyByTable.get(t.tablename) ?? []
    let count: bigint | null = null
    try {
      const r = await prisma.$queryRawUnsafe<TableSizeRow[]>(
        `SELECT '${t.tablename}'::text AS table_name, COUNT(*)::bigint AS row_count FROM public."${t.tablename}"`,
      )
      count = r[0]?.row_count ?? null
    } catch (e) {
      count = null
    }

    const cols = await prisma.$queryRawUnsafe<ColumnRow[]>(`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '${t.tablename}'
      ORDER BY ordinal_position
    `)

    console.log('')
    console.log(`📋 ${t.tablename}  (rows: ${count ?? 'unknown'})`)
    console.log(`   policies attached: ${existingPolicies.length}`)
    if (existingPolicies.length > 0) {
      for (const p of existingPolicies) {
        console.log(`     - ${p.policyname} (${p.cmd ?? 'ALL'})`)
      }
    }
    console.log(`   columns:`)
    for (const c of cols) {
      console.log(
        `     - ${c.column_name.padEnd(28)} ${c.data_type}${c.is_nullable === 'NO' ? ' NOT NULL' : ''}`,
      )
    }
  }

  console.log('')
  console.log('━'.repeat(72))
  console.log(`SUMMARY: ${noRls.length} table(s) need RLS enabled.`)
  console.log('━'.repeat(72))
}

main()
  .catch((err) => {
    console.error('Error:', err)
    process.exit(1)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
