// ─── Schema contract: every profiles column the signup path writes is declared
//
// The first schema-contract test in this repo. It exists because the signup
// page wrote ten columns to public.profiles that no migration had created, and
// 2,265 mocked tests passed while every signup lost its profile. This test
// reads the migrations themselves, so it fails the moment code names a column
// nobody declared. It cannot prove the live database matches the migrations
// (scripts/check-schema-drift.mjs does that against information_schema), but
// it closes the other half of the gap.
//
// Mutation check performed on 18 September 2026: removing 'social_share_nudge'
// from the privacy-columns migration fails this test.
// ────────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { PROFILE_COLUMNS_WRITTEN_BY_TRIGGER } from '@/lib/auth/signup-metadata'
import { getChildProfileDefaults } from '@/lib/privacy/child-defaults'

const MIGRATIONS = join(process.cwd(), 'supabase', 'migrations')

/** Columns of public.profiles declared by CREATE TABLE or ADD COLUMN in any migration. */
function declaredProfileColumns(): Set<string> {
  const cols = new Set<string>()
  const files = readdirSync(MIGRATIONS).filter((f) => f.endsWith('.sql') && !f.startsWith('_'))
  for (const f of files) {
    const sql = readFileSync(join(MIGRATIONS, f), 'utf8')
    // CREATE TABLE ... profiles ( ... )
    const create =
      /CREATE TABLE\s+(?:IF NOT EXISTS\s+)?(?:public\.)?"?profiles"?\s*\(([\s\S]*?)\);/gi
    let m: RegExpExecArray | null
    while ((m = create.exec(sql))) {
      for (const rawLine of m[1]!.split('\n')) {
        const line = rawLine.trim()
        const col = /^"?([a-z_][a-z0-9_]*)"?\s+[A-Z]/.exec(line)
        if (col && !/^(CONSTRAINT|PRIMARY|FOREIGN|UNIQUE|CHECK)$/i.test(col[1]!)) cols.add(col[1]!)
      }
    }
    // ALTER TABLE ... profiles ADD COLUMN [IF NOT EXISTS] name (possibly several per statement)
    const alter = /ALTER TABLE\s+(?:ONLY\s+)?(?:public\.)?"?profiles"?\s+([\s\S]*?);/gi
    while ((m = alter.exec(sql))) {
      const body = m[1]!
      const add = /ADD COLUMN\s+(?:IF NOT EXISTS\s+)?"?([a-z_][a-z0-9_]*)"?/gi
      let a: RegExpExecArray | null
      while ((a = add.exec(body))) cols.add(a[1]!)
    }
  }
  return cols
}

/** The INSERT column list inside the trigger migration. */
function triggerInsertColumns(): string[] {
  const sql = readFileSync(
    join(MIGRATIONS, '20260918_handle_new_user_reads_signup_metadata.sql'),
    'utf8',
  )
  const m = /INSERT INTO public\.profiles \(([\s\S]*?)\) VALUES/.exec(sql)
  expect(m, 'trigger migration has a full INSERT').not.toBeNull()
  return m![1]!
    .replace(/--[^\n]*/g, '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

describe('profiles columns written at signup are declared by a migration', () => {
  const declared = declaredProfileColumns()

  it('parses a plausible column set', () => {
    for (const must of ['id', 'email', 'role', 'date_of_birth', 'is_minor', 'utm_source']) {
      expect(declared.has(must), `${must} declared`).toBe(true)
    }
  })

  it('every column the trigger writes is declared', () => {
    for (const col of PROFILE_COLUMNS_WRITTEN_BY_TRIGGER) {
      expect(
        declared.has(col),
        `profiles.${col} is written by handle_new_user but declared by no migration`,
      ).toBe(true)
    }
  })

  it('the trigger SQL and the TypeScript contract name the same columns', () => {
    expect([...triggerInsertColumns()].sort()).toEqual(
      [...PROFILE_COLUMNS_WRITTEN_BY_TRIGGER].sort(),
    )
  })

  it("every Children's Code default column is declared", () => {
    for (const col of Object.keys(getChildProfileDefaults())) {
      expect(
        declared.has(col),
        `profiles.${col} from getChildProfileDefaults is declared by no migration`,
      ).toBe(true)
    }
  })
})
