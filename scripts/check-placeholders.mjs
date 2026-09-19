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
 * WHAT IT MISSED, AND WHY THAT IS THE INTERESTING PART (19 September 2026).
 *
 * `content/blog/gcse-english-language-paper-1-transactional-writing.mdx` was
 * live on theenglishhub.app showing readers two blockquotes reading
 * "[HUMAN REVIEW REQUIRED — AO labels] ... correct all AO labels throughout
 * before publication". This gate scanned that exact file on every commit and
 * printed "✓ Placeholder gate passed" every time, because the six tokens it
 * knew about did not include that one.
 *
 * It was not broken. It did exactly what it was configured to do, and what it
 * proved was its own configuration rather than the absence of editorial notes
 * from published pages. That is the shape CLAUDE.md names: a health check that
 * proves configuration rather than function. A token list can only ever be as
 * good as the last leak somebody remembered to add to it, so when a new marker
 * gets through, adding it here is the fix, not evidence that the gate works.
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
 *   [HUMAN REVIEW
 *
 * And one STRUCTURAL rule, because a token list is written in one language and
 * this site publishes in two: a Markdown blockquote opening `> **[` is an
 * editorial note to a reviewer whatever language it is written in. That is
 * what catches the Arabic sibling of the post above, whose identical notes
 * read `> **[يلزم مراجعة بشرية — تسميات AO]:**` and which no English token
 * would ever have matched.
 *
 * Excludes: node_modules, .next, the audit pack, this script, test files,
 * and *.test.* / *.spec.* fixtures. Also MDX/MD marked `draft: true`, which
 * is not published content. Those are COUNTED AND NAMED in the output, never
 * silently skipped, so "draft" cannot become a way to park a token out of
 * sight of the gate.
 *
 * Usage: node scripts/check-placeholders.mjs   (exit 1 on any hit)
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { isAbsolute, join, relative, sep } from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = process.cwd()

const SCAN_DIRS = ['src/app', 'content', 'src/lib/i18n', 'src/components', 'public']

const EXCLUDE_DIR_PARTS = new Set([
  'node_modules',
  '.next',
  '.git',
  'external-audit-pack',
  '__tests__',
  'e2e',
  'evals',
])

const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mdx', '.md', '.json', '.txt', '.html'])

// Literal token fragments exactly as they would appear in published copy.
export const TOKENS = [
  '[DSL_',
  '[FACT-CHECK',
  '[Address —', // em dash
  '[Address -',
  '[PLACEHOLDER',
  // The one that got through. A whole blog post shipped with two of these
  // visible to readers, saying in terms that it should not have been
  // published yet.
  '[HUMAN REVIEW',
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

/**
 * An editorial note left in Markdown: a blockquote whose first content is a
 * bold bracketed label, `> **[HUMAN REVIEW REQUIRED — AO labels]:** ...`.
 *
 * THE REASON THIS EXISTS ALONGSIDE THE TOKEN LIST. The token list is English.
 * The post that prompted all this has an Arabic sibling carrying the same two
 * notes, translated - `> **[يلزم مراجعة بشرية — تسميات AO]:**` - and no
 * amount of adding English tokens would ever have seen them. Roughly a third
 * of this site's content is Arabic, so an English-only gate over it is a gate
 * over two thirds of the corpus.
 *
 * The SHAPE survives translation. Checked against the whole of `content/`
 * before adding it: this pattern matched three lines, all of them in the one
 * broken post, and nothing else in forty-odd published articles. A blockquote
 * opening with a bold bracketed label is an editorial convention, not a way
 * anybody writes for a reader.
 */
const EDITORIAL_NOTE = /^\s*>\s*\*\*\[/

/** How a structural hit is labelled in the report, in place of a token. */
export const EDITORIAL_LABEL = 'editorial note to a reviewer (> **[...])'

/**
 * True when the file's frontmatter holds `draft: true`.
 *
 * Deliberately narrow: only the leading `---` block, only a bare `true`, only
 * MDX and Markdown. A loose match would let the word "draft" anywhere in a
 * post's prose take that post out of the gate's sight, which is the failure
 * this whole file is about.
 */
export function isDraftContent(text, file) {
  if (!/\.mdx?$/.test(file)) return false
  if (!text.startsWith('---')) return false
  const end = text.indexOf('\n---', 3)
  if (end === -1) return false
  return /^draft:\s*true\s*$/m.test(text.slice(0, end))
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

/**
 * Scan the published content sources.
 *
 * `scanned` is returned so a caller can tell "no tokens found" apart from "no
 * files read", which are the same output and completely different facts.
 */
export function scanPlaceholders(dirs = SCAN_DIRS) {
  const hits = []
  const drafts = []
  let scanned = 0

  for (const rel of dirs) {
    // An absolute directory is passed through unchanged so a test can point
    // this at a fixture. It cannot live inside the repository: `__tests__` is
    // on the exclude list, which is correct for the gate and means a fixture
    // there would be skipped and prove nothing.
    for (const file of walk(isAbsolute(rel) ? rel : join(ROOT, rel))) {
      let text
      try {
        text = readFileSync(file, 'utf8')
      } catch {
        continue
      }
      if (isDraftContent(text, file)) {
        drafts.push(relative(ROOT, file))
        continue
      }
      scanned += 1
      const markdown = /\.mdx?$/.test(file)
      text.split(/\r?\n/).forEach((line, i) => {
        const token = TOKENS.find((tok) => line.includes(tok))
        // The structural check is second so a line carrying a known token is
        // reported under that token, which is the more specific diagnosis.
        const found = token ?? (markdown && EDITORIAL_NOTE.test(line) ? EDITORIAL_LABEL : null)
        if (found) {
          hits.push({
            file: relative(ROOT, file),
            line: i + 1,
            token: found,
            excerpt: line.trim().slice(0, 160),
          })
        }
      })
    }
  }

  return { hits, drafts, scanned }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { hits, drafts, scanned } = scanPlaceholders()

  if (drafts.length > 0) {
    // Named, not just counted. An unpublished file is out of scope for a
    // PUBLISH gate, but it is not out of mind: somebody has to be able to see
    // at a glance that nothing has quietly been parked here.
    console.log(`\n  ${drafts.length} unpublished draft(s) not scanned (draft: true):`)
    for (const d of drafts) console.log(`    ${d}`)
  }

  if (hits.length > 0) {
    console.error(
      `\n✗ Placeholder gate FAILED — ${hits.length} unresolved item(s) in published content.\n` +
        `  No [DSL_*], [FACT-CHECK], [Address —], [PLACEHOLDER], [HUMAN REVIEW] or [VERIFY]\n` +
        `  token may reach a live page, and neither may an editorial note to a reviewer\n` +
        `  (a blockquote opening "> **[...]"), in any language. Resolve with verified data\n` +
        `  or honest interim copy, then log the open business decision in\n` +
        `  BUSINESS-DECISIONS-NEEDED.md (not as a live token). If the page is not ready at\n` +
        `  all, hold it back with draft: true.\n`,
    )
    for (const h of hits) {
      console.error(`  ${h.file}:${h.line}  ${h.token}\n      ${h.excerpt}`)
    }
    console.error('')
    process.exit(1)
  }

  console.log(
    `\n✓ Placeholder gate passed — no unresolved placeholder tokens in ${scanned} published file(s).`,
  )
}
