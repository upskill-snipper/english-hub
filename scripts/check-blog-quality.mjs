#!/usr/bin/env node
/**
 * Blog quality publish gate (scaled-content-abuse defence, 2026-05-28).
 *
 * Sits alongside the placeholder gate (scripts/check-placeholders.mjs) and runs
 * in `prebuild` AFTER it. Where the placeholder gate protects trust (no broken
 * tokens reach a live page), THIS gate protects content quality so the 12-hour
 * automated blog pipeline cannot quietly publish thin or duplicate posts.
 * Google's "scaled content abuse" systems penalise sites that publish many
 * low-value, near-duplicate pages; this gate is the structural guard against
 * that, enforced at build/deploy time.
 *
 * Scans content/blog/*.mdx (English posts only; *.ar.mdx translations are
 * skipped - they legitimately mirror their English source's title/description
 * and so would trip the duplicate checks). FAILS (exit 1, printing offenders)
 * if any post:
 *   - has a body of fewer than 1200 words;
 *   - shares an EXACT title or description with another post;
 *   - is a NEAR-duplicate of another post (Jaccard similarity > 0.8 on word
 *     shingles of `title + description`);
 *   - has fewer than 2 in-body internal links matching
 *     /(revision|resources|practice|igcse|courses)/;
 *   - is missing any required frontmatter field.
 *
 * The same thresholds are enforced in-process by the cron generator
 * (src/app/api/cron/blog-generate/route.ts) before it opens a PR, so a
 * generated post that would fail this gate never reaches a branch.
 *
 * Usage: node scripts/check-blog-quality.mjs   (exit 1 on any failure)
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const BLOG_DIR = join(ROOT, 'content', 'blog')

// ── Tunable thresholds (keep in sync with the cron route) ────────────────────
const MIN_WORDS = 1200
const MIN_INTERNAL_LINKS = 2
const NEAR_DUP_JACCARD = 0.8
const INTERNAL_LINK_RE = /\/(revision|resources|practice|igcse|courses)/
const REQUIRED_FRONTMATTER = [
  'title',
  'description',
  'slug',
  'date',
  'author',
  'cover',
  'tags',
  'excerpt',
  'category',
  'educationalLevel',
]

/**
 * Split a raw MDX file into { frontmatter (raw lines), body }.
 * Self-contained (no gray-matter) so the gate runs under a bare `node`
 * invocation exactly like check-placeholders.mjs. We only need to (a) read
 * scalar frontmatter keys and (b) get the body text, both of which a minimal
 * parser handles for this corpus.
 */
function splitFrontmatter(raw) {
  const lines = raw.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') {
    return { fmLines: [], body: raw }
  }
  let end = -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i
      break
    }
  }
  if (end === -1) return { fmLines: [], body: raw }
  return {
    fmLines: lines.slice(1, end),
    body: lines.slice(end + 1).join('\n'),
  }
}

/** Which top-level frontmatter keys are present (handles `key:` and `key :`). */
function frontmatterKeys(fmLines) {
  const keys = new Set()
  for (const line of fmLines) {
    // Only top-level keys (no leading whitespace) count as a field declaration.
    const m = /^([A-Za-z0-9_]+)\s*:/.exec(line)
    if (m) keys.add(m[1])
  }
  return keys
}

/** Read a single scalar string frontmatter value (strips surrounding quotes). */
function readScalar(fmLines, key) {
  for (const line of fmLines) {
    const m = new RegExp(`^${key}\\s*:\\s*(.*)$`).exec(line)
    if (m) {
      let v = m[1].trim()
      if (
        (v.startsWith("'") && v.endsWith("'")) ||
        (v.startsWith('"') && v.endsWith('"'))
      ) {
        v = v.slice(1, -1)
      }
      // YAML escapes a literal single quote inside a single-quoted scalar as ''.
      return v.replace(/''/g, "'")
    }
  }
  return ''
}

/** Count words in the MDX body (strip MDX/markdown punctuation to plain words). */
function countWords(body) {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ') // fenced code
    .replace(/`[^`]*`/g, ' ') // inline code
    .replace(/[#>*_~\-|=]/g, ' ') // md punctuation
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → keep link text
    .replace(/[^\p{L}\p{N}'\s]/gu, ' ') // other symbols
  const words = text.split(/\s+/).filter(Boolean)
  return words.length
}

/** Count in-body internal links whose href matches the allow-list regex. */
function countInternalLinks(body) {
  let count = 0
  const re = /\]\((\/[^)]*)\)/g // markdown link href starting with /
  let m
  while ((m = re.exec(body)) !== null) {
    if (INTERNAL_LINK_RE.test(m[1])) count++
  }
  // Also catch raw <a href="/..."> in MDX bodies.
  const reHtml = /href=["'](\/[^"']*)["']/g
  while ((m = reHtml.exec(body)) !== null) {
    if (INTERNAL_LINK_RE.test(m[1])) count++
  }
  return count
}

/** Word-shingle set for Jaccard near-duplicate detection. */
function shingles(text, size = 3) {
  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
  const set = new Set()
  if (words.length < size) {
    if (words.length) set.add(words.join(' '))
    return set
  }
  for (let i = 0; i <= words.length - size; i++) {
    set.add(words.slice(i, i + size).join(' '))
  }
  return set
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  const union = a.size + b.size - inter
  return union === 0 ? 0 : inter / union
}

// ── Scan ─────────────────────────────────────────────────────────────────────
if (!existsSync(BLOG_DIR)) {
  console.log('✓ Blog quality gate passed - no content/blog directory yet.')
  process.exit(0)
}

const files = readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith('.mdx') && !f.endsWith('.ar.mdx') && !f.startsWith('.'))
  .sort()

const posts = files.map((file) => {
  const full = join(BLOG_DIR, file)
  const raw = readFileSync(full, 'utf8')
  const { fmLines, body } = splitFrontmatter(raw)
  const keys = frontmatterKeys(fmLines)
  const title = readScalar(fmLines, 'title')
  const description = readScalar(fmLines, 'description')
  return {
    file,
    rel: relative(ROOT, full),
    title,
    description,
    words: countWords(body),
    internalLinks: countInternalLinks(body),
    missing: REQUIRED_FRONTMATTER.filter((k) => !keys.has(k)),
    shingleSet: shingles(`${title} ${description}`),
  }
})

const failures = []

// Per-post structural checks.
for (const p of posts) {
  if (p.missing.length > 0) {
    failures.push(`${p.rel}: missing frontmatter field(s): ${p.missing.join(', ')}`)
  }
  if (p.words < MIN_WORDS) {
    failures.push(`${p.rel}: body too short (${p.words} words, need >= ${MIN_WORDS})`)
  }
  if (p.internalLinks < MIN_INTERNAL_LINKS) {
    failures.push(
      `${p.rel}: too few in-body internal links (${p.internalLinks}, need >= ${MIN_INTERNAL_LINKS} matching ${INTERNAL_LINK_RE})`,
    )
  }
}

// Cross-post duplicate / near-duplicate checks.
for (let i = 0; i < posts.length; i++) {
  for (let j = i + 1; j < posts.length; j++) {
    const a = posts[i]
    const b = posts[j]
    if (a.title && a.title === b.title) {
      failures.push(`${a.rel} <=> ${b.rel}: duplicate title "${a.title}"`)
    }
    if (a.description && a.description === b.description) {
      failures.push(`${a.rel} <=> ${b.rel}: duplicate description`)
    }
    const sim = jaccard(a.shingleSet, b.shingleSet)
    if (sim > NEAR_DUP_JACCARD) {
      failures.push(
        `${a.rel} <=> ${b.rel}: title+description near-duplicate (Jaccard ${sim.toFixed(2)} > ${NEAR_DUP_JACCARD})`,
      )
    }
  }
}

if (failures.length > 0) {
  console.error(
    `\n✗ Blog quality gate FAILED - ${failures.length} issue(s) across ${posts.length} post(s).\n` +
      `  Thin or duplicate posts must not be published (Google scaled-content-abuse risk).\n` +
      `  Fix the offending .mdx file(s) below, or remove duplicates and add a 308 redirect.\n`,
  )
  for (const f of failures) console.error(`  - ${f}`)
  console.error('')
  process.exit(1)
}

console.log(
  `✓ Blog quality gate passed - ${posts.length} post(s) meet length, link and uniqueness rules.`,
)
