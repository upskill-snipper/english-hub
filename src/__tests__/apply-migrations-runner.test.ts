import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { stripSqlNoise, hasTopLevelTransactionControl } from '../../scripts/apply-migrations.mjs'

/**
 * The migration runner, which is where this codebase's schema drift came from.
 *
 * CLAUDE.md structural fact 3: "_migrations_applied records an intention, not
 * reality." On 30 May 2026 the runner inserted 66 files as applied without
 * executing one of them, in four seconds. One created `profiles.is_minor`; the
 * column did not exist for four months while the code selected it on every
 * identity read. On 19 September two more surfaced: the four progress_* tables
 * had never been created while the tracker said they had, so the progress API
 * queried nothing on every call.
 *
 * It is now 69 of the 90 files in supabase/migrations.
 *
 * TWO DEFECTS, FIXED HERE.
 *
 * 1. Baselining had no guard. A dropped tracker or a fresh database silently
 *    re-baselined and then reported "Up to date". The premise - "these already
 *    ran, before this runner existed" - is true exactly once, on one database.
 *
 * 2. The runner wraps every file in BEGIN/COMMIT, and four migrations open
 *    their own transaction. Postgres does not nest: the inner BEGIN is ignored
 *    and the file's own COMMIT ends the RUNNER's transaction, so the tracker
 *    INSERT ran outside any transaction. A later failure in the same file
 *    would leave it half-applied AND recorded as applied - the precise shape
 *    of the original bug, reachable again.
 */

const RUNNER = readFileSync(join(process.cwd(), 'scripts/apply-migrations.mjs'), 'utf8')
const MIGRATIONS = join(process.cwd(), 'supabase/migrations')

// ─── Detecting a self-managed transaction ───────────────────────────────

describe('hasTopLevelTransactionControl', () => {
  it('finds a file that opens its own transaction', () => {
    expect(hasTopLevelTransactionControl('BEGIN;\nCREATE TABLE x (id int);\nCOMMIT;')).toBe(true)
  })

  it('finds START TRANSACTION too', () => {
    expect(hasTopLevelTransactionControl('START TRANSACTION;\nSELECT 1;\nCOMMIT;')).toBe(true)
  })

  it('leaves ordinary DDL alone', () => {
    expect(hasTopLevelTransactionControl('CREATE TABLE x (id int);')).toBe(false)
  })

  // ─── The trap ─────────────────────────────────────────────────────────
  //
  // Every plpgsql function in this repository is written as
  // `$$ ... BEGIN ... END; ... $$`. A naive search for BEGIN matches all of
  // them, and the runner would then skip its own transaction for a file that
  // genuinely needs one.
  it('is not fooled by BEGIN inside a plpgsql body', () => {
    const sql = `CREATE FUNCTION f() RETURNS void AS $$ BEGIN RAISE NOTICE 'x'; END; $$ LANGUAGE plpgsql;`
    expect(hasTopLevelTransactionControl(sql)).toBe(false)
  })

  it('is not fooled by a named dollar tag', () => {
    const sql = `CREATE FUNCTION f() RETURNS void AS $func$ BEGIN NULL; END; $func$ LANGUAGE plpgsql;`
    expect(hasTopLevelTransactionControl(sql)).toBe(false)
  })

  it('is not fooled by a line comment', () => {
    expect(hasTopLevelTransactionControl('-- BEGIN;\nCREATE TABLE x (id int);')).toBe(false)
  })

  it('is not fooled by a block comment', () => {
    expect(hasTopLevelTransactionControl('/* BEGIN; */\nCREATE TABLE x (id int);')).toBe(false)
  })

  it('is not fooled by a string literal', () => {
    expect(hasTopLevelTransactionControl(`SELECT 'BEGIN;' AS s;`)).toBe(false)
  })
})

describe('stripSqlNoise', () => {
  it('removes a dollar-quoted body wholesale', () => {
    expect(stripSqlNoise('a $$ hidden BEGIN $$ b')).not.toContain('hidden')
  })

  it('keeps the statement text around it', () => {
    const out = stripSqlNoise('CREATE TABLE keepme (id int); -- gone\n')
    expect(out).toContain('keepme')
    expect(out).not.toContain('gone')
  })
})

// ─── Applied to the real migration corpus ───────────────────────────────

describe('the migrations directory', () => {
  const files = readdirSync(MIGRATIONS).filter((f) => f.endsWith('.sql'))

  it('has migrations to check, or this guards nothing', () => {
    expect(files.length).toBeGreaterThan(50)
  })

  it('identifies exactly the files that manage their own transaction', () => {
    const selfManaged = files
      .filter((f) => hasTopLevelTransactionControl(readFileSync(join(MIGRATIONS, f), 'utf8')))
      .sort()
    // Four, as audited. If a fifth appears the runner handles it correctly
    // now, but the number changing should be noticed rather than assumed.
    expect(selfManaged).toEqual([
      '004_fix_school_rls.sql',
      '20260501_apple_reviewer_account.sql',
      '20260529_marking_result_v2.sql',
      '20260917_identity_nullable_dob_country.sql',
    ])
  })

  it('does not flag the many files that merely contain a plpgsql BEGIN', () => {
    // If the dollar-quote stripper broke, this number would jump towards the
    // whole corpus and the runner would stop wrapping files that need it.
    const flagged = files.filter((f) =>
      hasTopLevelTransactionControl(readFileSync(join(MIGRATIONS, f), 'utf8')),
    )
    expect(flagged.length).toBeLessThan(10)
  })
})

// ─── The baseline guard ─────────────────────────────────────────────────

describe('baselining', () => {
  it('refuses unless explicitly allowed', () => {
    expect(RUNNER).toContain('Refusing to baseline')
    expect(RUNNER).toContain('MIGRATION_ALLOW_BASELINE')
  })

  it('checks the flag at the branch, not just defines it', () => {
    // Defining ALLOW_BASELINE and never consulting it would leave the defect
    // in place with a reassuring constant above it.
    expect(RUNNER).toContain('if (!ALLOW_BASELINE) {')
  })

  it('explains what baselining actually costs', () => {
    // Whoever hits this at 2am needs to know why it is refusing, not just
    // which variable to set.
    expect(RUNNER).toMatch(/WITHOUT running them/)
    expect(RUNNER).toMatch(/is_minor|progress_/)
  })

  it('still skips its own transaction for a self-managed file', () => {
    expect(RUNNER).toContain('if (!selfManaged) await client.query(')
  })

  it('only runs main() when invoked directly', () => {
    // Without this, importing the file to test the helpers would connect to
    // PRODUCTION and start applying migrations inside a vitest worker.
    expect(RUNNER).toContain('invokedDirectly')
  })
})
