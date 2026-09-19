// ─── Does the application write columns the database actually has? ──────────
//
// WHY THIS EXISTS (19 September 2026). `/practice` inserted into
// `practice_sessions` naming five columns that do not exist - question_id,
// board, answer, time_seconds, timed_mode. Every save failed, the student saw
// an error, and the table held zero rows for months while /dashboard/grades
// counted a student's practice out of it.
//
// `scripts/check-schema-drift.mjs` could not have caught it. That compares the
// MIGRATIONS against the DATABASE, and here those two agreed perfectly: it was
// the CODE that had drifted away from both. Nothing in this repository looks at
// what the application asks for.
//
// So this walks every `.from('<table>').insert({...})` and `.update({...})` in
// src, collects the top-level keys, and checks each against the live column set
// read from the database. Read-only: it selects each candidate column with
// `limit(0)`, which returns an error if the column does not exist and no rows
// if it does. No student data is read.
//
//   node --env-file=.env.local scripts/check-supabase-columns.mjs
//
// Exit 0 when every written column exists, 1 when one does not. It needs
// production credentials, so it is an operator check rather than a push gate;
// the pinned-column tests beside the two known inserters are the push gate.

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error('Needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.')
  console.error('Run with: node --env-file=.env.local scripts/check-supabase-columns.mjs')
  process.exit(1)
}
const db = createClient(url, key, { auth: { persistSession: false } })

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '__tests__' || entry.name === 'node_modules') continue
      walk(full, out)
    } else if (/\.tsx?$/.test(entry.name)) out.push(full)
  }
  return out
}

/** Top-level keys of the object literal starting at `open`. */
function literalKeys(source, open) {
  let depth = 0
  let end = open
  do {
    if (source[end] === '{') depth += 1
    if (source[end] === '}') depth -= 1
    end += 1
  } while (depth > 0 && end < source.length)

  const body = source.slice(open + 1, end - 1)
  const keys = []
  let nest = 0
  for (const line of body.split('\n')) {
    if (nest === 0) {
      const m = line.trim().match(/^([a-z_][a-z0-9_]*)\s*:/i)
      if (m) keys.push(m[1])
    }
    nest += (line.match(/[[{(]/g) ?? []).length - (line.match(/[\]})]/g) ?? []).length
  }
  return { keys, end }
}

// `.from('table')` followed by `.insert({` or `.update({`, allowing whitespace
// and a newline between them, which prettier introduces on long chains.
const CALL = /\.from\(\s*['"`]([a-z_][a-z0-9_]*)['"`]\s*\)\s*\.\s*(insert|update|upsert)\s*\(\s*\{/g

const writes = new Map()
for (const file of walk('src')) {
  const source = readFileSync(file, 'utf8')
  for (const m of source.matchAll(CALL)) {
    const table = m[1]
    const open = m.index + m[0].length - 1
    const { keys } = literalKeys(source, open)
    if (!keys.length) continue
    if (!writes.has(table)) writes.set(table, [])
    writes.get(table).push({ file: file.split('\\').join('/'), op: m[2], keys })
  }
}

if (!writes.size) {
  console.error('Found no Supabase writes at all, which cannot be right. Check the pattern.')
  process.exit(1)
}

const columnCache = new Map()
async function columnExists(table, column) {
  const cacheKey = `${table}.${column}`
  if (columnCache.has(cacheKey)) return columnCache.get(cacheKey)
  const { error } = await db.from(table).select(column).limit(0)
  // A missing TABLE is reported separately; treat only the column error as a
  // missing column so a table this key cannot see is not reported as 40 faults.
  const missingTable = error && /relation .* does not exist|schema cache/i.test(error.message)
  const ok = !error
  columnCache.set(cacheKey, ok ? true : missingTable ? 'table' : false)
  return columnCache.get(cacheKey)
}

let problems = 0
let checked = 0
const unreadableTables = new Set()

for (const [table, sites] of [...writes].sort()) {
  const unknown = new Map()
  for (const site of sites) {
    for (const column of site.keys) {
      checked += 1
      const state = await columnExists(table, column)
      if (state === 'table') {
        unreadableTables.add(table)
      } else if (state === false) {
        if (!unknown.has(column)) unknown.set(column, new Set())
        unknown.get(column).add(`${site.file} (${site.op})`)
      }
    }
  }
  if (unknown.size) {
    problems += unknown.size
    console.log('')
    console.log(`${table}: ${unknown.size} column(s) written that do not exist`)
    for (const [column, files] of unknown) {
      console.log(`  ${column}`)
      for (const f of files) console.log(`      ${f}`)
    }
  }
}

console.log('')
console.log(
  `Checked ${checked} written column(s) across ${writes.size} table(s) from ${[...writes.values()].flat().length} call site(s).`,
)
if (unreadableTables.size) {
  console.log(`Not checked (table not visible to this key): ${[...unreadableTables].join(', ')}`)
}

if (problems) {
  console.log('')
  console.log(`${problems} column(s) written that the database does not have.`)
  console.log('Each one is a write that fails at runtime, however green the tests are.')
  process.exit(1)
}
console.log('Every column the application writes exists.')
