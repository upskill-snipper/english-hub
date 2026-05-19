#!/usr/bin/env node
/**
 * I1 — Placeholder publish gate (external audit remediation, 2026-05-19).
 *
 * Fails the build / commit if any unresolved placeholder token reaches a
 * published/rendered content source. These tokens leaking to a live page
 * is a procurement-blocking trust defect (broken safeguarding contact,
 * unverified facts, etc.). This gate "protects every other fix" — it
 * stays permanently.
 *
 * Scanned (published/rendered) sources:
 *   - src/app/**        (routes + page copy)
 *   - content/**        (MDX blog, EN + .ar)
 *   - src/lib/i18n/**   (dictionaries rendered into pages)
 *   - src/components (shared UI copy)
 *   - public (txt/json/md/html)
 *
 * Tokens that fail the gate (case-sensitive, as they appear in copy):
 *   [DSL_   [FACT-CHECK   [Address —   [Address -   [PLACEHOLDER   [VERIFY
 *
 * Excludes: node_modules, .next, the audit pack, this script, test files,
 * and *.test.* / *.spec.* fixtures.
 *
 * Usage: node scripts/check-placeholders.mjs   (exit 1 on any hit)
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = process.cwd()

const SCAN_DIRS = [
  'src/app',
  'content',
  'src/lib/i18n',
  'src/components',
  'public',
]

const EXCLUDE_DIR_PARTS = new Set([
  'node_modules',
  '.next',
  '.git',
  'external-audit-pack',
  '__tests__',
  'e2e',
  'evals',
])

const SCAN_EXT = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mdx',
  '.md',
  '.json',
  '.txt',
  '.html',
])

// Literal token fragments exactly as they would appear in published copy.
const TOKENS = [
  '[DSL_',
  '[FACT-CHECK',
  '[Address —', // em dash
  '[Address -',
  '[PLACEHOLDER',
  '[VERIFY',
]

function isExcluded(path) {
  const parts = relative(ROOT, path).split(sep)
  if (parts.some((p) => EXCLUDE_DIR_PARTS.has(p))) return true
  const base = parts[parts.length - 1] ?? ''
  if (/\.(test|spec)\.[tj]sx?$/.test(base)) return true
  if (base === 'check-placeholders.mjs') return true
  return false
}

function* walk(dir) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const name of entries) {
    const full = join(dir, name)
    if (isExcluded(full)) continue
    let st
    try {
      st = statSync(full)
    } catch {
      continue
    }
    if (st.isDirectory()) {
      yield* walk(full)
    } else if (st.isFile()) {
      const dot = name.lastIndexOf('.')
      const ext = dot >= 0 ? name.slice(dot) : ''
      if (SCAN_EXT.has(ext)) yield full
    }
  }
}

const hits = []

for (const rel of SCAN_DIRS) {
  const dir = join(ROOT, rel)
  for (const file of walk(dir)) {
    let text
    try {
      text = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    const lines = text.split(/\r?\n/)
    lines.forEach((line, i) => {
      for (const tok of TOKENS) {
        if (line.includes(tok)) {
          hits.push({
            file: relative(ROOT, file),
            line: i + 1,
            token: tok,
            excerpt: line.trim().slice(0, 160),
          })
          break
        }
      }
    })
  }
}

if (hits.length > 0) {
  console.error(
    `\n✗ Placeholder gate FAILED — ${hits.length} unresolved token(s) in published content.\n` +
      `  No [DSL_*], [FACT-CHECK], [Address —], [PLACEHOLDER] or [VERIFY] token may reach a live page.\n` +
      `  Resolve with verified data or honest interim copy, then log the open\n` +
      `  business decision in BUSINESS-DECISIONS-NEEDED.md (not as a live token).\n`,
  )
  for (const h of hits) {
    console.error(`  ${h.file}:${h.line}  ${h.token}\n      ${h.excerpt}`)
  }
  console.error('')
  process.exit(1)
}

console.log(
  '✓ Placeholder gate passed — no unresolved placeholder tokens in published content.',
)
