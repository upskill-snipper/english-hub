/**
 * What the repository CLAIMS the database contains.
 *
 * Shared by `check-schema-drift.mjs` (the CLI), `generate-schema-manifest.mjs`
 * (which freezes this into JSON the serverless route can import) and the test
 * that stops the two drifting apart.
 *
 * WHY THE CODE SCAN MATTERS MORE THAN THE MIGRATION SCAN (DATA-1). The checker
 * only ever compared migrations against `information_schema`. That is
 * structurally blind to the more common failure here: a table that CODE reads
 * and no migration ever declared. Five public forms - creator applications,
 * school contact, waitlist, feedback, teacher leads - wrote to nothing for
 * months without a single error reaching anyone, because the Supabase client
 * returns `{ data: null, error }` and every one of those call sites discarded
 * the error. A migration-only checker reports "no drift" the entire time.
 *
 * KNOWN LIMITS, stated so a clean run is not read as more than it is:
 *   - Regex parsing of SQL and TypeScript. It does not understand DO blocks,
 *     dynamic table names, or a `.from(variable)`.
 *   - It checks existence, not shape. A column of the wrong type passes.
 *   - Objects created outside the migrations directory show as extra, not
 *     missing, and extra is normal here.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

/** Words a loose regex would otherwise pick up as a table name. */
/** SQL words a loose index or trigger regex picks up as an object name. */
const SQL_KEYWORDS = new Set([
  'concurrently',
  'if',
  'is',
  'not',
  'exists',
  'unique',
  'index',
  'trigger',
  'on',
  'or',
  'replace',
])

const NOT_A_TABLE = new Set([
  'if',
  'and',
  'for',
  'or',
  'not',
  'exists',
  'only',
  'public',
  'select',
  'table',
])

/**
 * `.from('x')` calls that are not Postgres tables.
 *
 * `supabase.storage.from('bucket')` and `supabase.schema('x').from()` share the
 * method name. Listed rather than pattern-matched, so adding a bucket is a
 * deliberate edit rather than a silent exclusion.
 */
const NOT_A_TABLE_REFERENCE = new Set([
  'avatars',
  'essays-uploads',
  'public-assets',
  'exam-papers',
])

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry === '__tests__') continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (['.ts', '.tsx'].includes(extname(entry))) out.push(full)
  }
  return out
}

/** Strip comments and string-literal noise that would produce phantom matches. */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
}

/** Tables and added columns the migrations declare, plus the other objects. */
export function fromMigrations(migrationsDir) {
  const tables = new Map()
  const columns = new Map()
  const policies = new Map()
  const indexes = new Map()
  const triggers = new Map()
  const functions = new Map()

  const files = readdirSync(migrationsDir)
    .filter((n) => n.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const sql = readFileSync(join(migrationsDir, file), 'utf8')

    for (const m of sql.matchAll(
      /CREATE TABLE\s+(?:IF NOT EXISTS\s+)?(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const name = m[1].toLowerCase()
      if (!NOT_A_TABLE.has(name) && !tables.has(name)) tables.set(name, file)
    }

    for (const m of sql.matchAll(
      /ALTER TABLE\s+(?:ONLY\s+)?(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?[\s\S]{0,120}?ADD COLUMN\s+(?:IF NOT EXISTS\s+)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const table = m[1].toLowerCase()
      if (NOT_A_TABLE.has(table)) continue
      const key = `${table}.${m[2].toLowerCase()}`
      if (!columns.has(key)) columns.set(key, file)
    }

    // ── The objects the checker was blind to ───────────────────────────────
    //
    // A dropped policy is the difference between a table only the service role
    // can read and one anyone with the public key can read, and the checker
    // said nothing about either.
    for (const m of sql.matchAll(
      /CREATE POLICY\s+"?([^"\s]+)"?\s+ON\s+(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const key = `${m[2].toLowerCase()}:${m[1]}`
      if (!policies.has(key)) policies.set(key, file)
    }

    // The index and trigger patterns capture the TABLE as well as the name.
    // Without it, an index on a table that does not exist is reported as its
    // own finding, and a report that lists the same absence three times is a
    // report people stop reading - which is precisely how `email_subscribers`
    // trained everyone to ignore this output.
    //
    // The keyword guard is not decoration: the first version of this regex
    // reported indexes called `concurrently`, `if` and `is`, because the
    // optional groups did not consume the modifiers when they were split
    // across lines.
    for (const m of sql.matchAll(
      /CREATE\s+(?:UNIQUE\s+)?INDEX\s+(?:CONCURRENTLY\s+)?(?:IF\s+NOT\s+EXISTS\s+)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?\s+ON\s+(?:ONLY\s+)?(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const name = m[1].toLowerCase()
      if (SQL_KEYWORDS.has(name)) continue
      if (!indexes.has(name)) indexes.set(name, { file, table: m[2].toLowerCase() })
    }

    for (const m of sql.matchAll(
      /CREATE\s+(?:OR REPLACE\s+)?TRIGGER\s+"?([a-zA-Z_][a-zA-Z0-9_]*)"?[\s\S]{0,160}?\sON\s+(?:ONLY\s+)?(?:(auth|public)\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const name = m[1].toLowerCase()
      if (SQL_KEYWORDS.has(name)) continue
      // `on_auth_user_created` lives on `auth.users`, not on a public table.
      // Scoping it correctly is what stops it being reported as missing for
      // ever by a query that only looks at `public`.
      if (!triggers.has(name)) {
        triggers.set(name, { file, table: m[3].toLowerCase(), schema: m[2]?.toLowerCase() ?? 'public' })
      }
    }

    for (const m of sql.matchAll(
      /CREATE\s+(?:OR REPLACE\s+)?FUNCTION\s+(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      const name = m[1].toLowerCase()
      if (!functions.has(name)) functions.set(name, file)
    }
  }

  // A policy or trigger on a table the migrations never create is already
  // covered by the missing table; reporting both doubles the noise.
  return { tables, columns, policies, indexes, triggers, functions }
}

/**
 * Tables the CODE reads or writes.
 *
 * Two sources with different casing rules, which is a trap worth naming: a
 * Supabase `.from('x')` names a lower-case table, while a Prisma model with no
 * `@@map` resolves to a QUOTED PascalCase table. `BulkUploadJob` and
 * `bulkuploadjob` are different objects in Postgres, so these are kept apart
 * and compared case-sensitively.
 */
export function fromCode(srcDir, prismaSchemaPath, root = '') {
  const supabase = new Map()
  const prismaModels = new Map()

  for (const file of walk(srcDir)) {
    const source = stripComments(readFileSync(file, 'utf8'))
    for (const m of source.matchAll(/\.from\(\s*'([a-zA-Z_][a-zA-Z0-9_]*)'\s*\)/g)) {
      const name = m[1]
      if (NOT_A_TABLE_REFERENCE.has(name)) continue
      // Repo-relative. An absolute Windows path in a committed manifest is
      // noise in the diff and useless to anyone reading it on another machine.
      const where = file.replace(/\\/g, '/').replace(`${root.replace(/\\/g, '/')}/`, '')
      if (!supabase.has(name)) supabase.set(name, where)
    }
  }

  const schema = readFileSync(prismaSchemaPath, 'utf8')
  for (const m of schema.matchAll(/^model\s+([A-Za-z0-9_]+)\s*\{([\s\S]*?)^\}/gm)) {
    const model = m[1]
    const mapped = m[2].match(/@@map\("([^"]+)"\)/)
    prismaModels.set(mapped ? mapped[1] : model, 'prisma/schema.prisma')
  }

  return { supabase, prismaModels }
}
