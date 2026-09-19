/**
 * Generates src/data/analysis/index.ts from the backup page.tsx files.
 * Run: node scripts/generate-analysis-data.js
 */
const fs = require('fs')
const path = require('path')

/**
 * Decode the inside of a JavaScript string literal.
 *
 * WHAT WAS WRONG (SEO-6, 20 September 2026). This script scrapes page sources
 * with a regex and used to unescape the quote pair and nothing else. The pages
 * it reads write apostrophes and dashes as unicode escape SEQUENCES - a
 * backslash, the letter u, then four hex digits - and those passed through
 * untouched, so the registry received the six characters rather than the one
 * they stand for.
 *
 * That string is the meta description and the Article JSON-LD for the page, so
 * Google's result for twenty-one analysis pages showed the raw escape in the
 * middle of an author's name. Forty-two occurrences across the file: forty
 * right single quotes and two en dashes.
 *
 * Fixing the generated file alone would have lasted until the next run of this
 * script, which is why the fix is here and the file is regenerated from it.
 *
 * Handles the escapes that actually occur in these sources rather than the
 * whole grammar. Anything unrecognised keeps its character and loses the
 * backslash, which is what a JavaScript engine does with an unknown escape.
 */
function decodeJsString(raw) {
  let out = ''
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i]
    if (ch !== '\\') {
      out += ch
      continue
    }
    const next = raw[i + 1]
    if (next === undefined) {
      out += ch
      continue
    }
    if (next === 'u') {
      const hex = raw.slice(i + 2, i + 6)
      if (/^[0-9a-fA-F]{4}$/.test(hex)) {
        out += String.fromCharCode(parseInt(hex, 16))
        i += 5
        continue
      }
    }
    if (next === 'n') out += '\n'
    else if (next === 't') out += '\t'
    else if (next === 'r') out += '\r'
    else out += next
    i += 1
  }
  return out
}

const backupRoot = path.join(__dirname, '../../english-hub-analysis-backup/analysis')
const outputFile = path.join(__dirname, '../src/data/analysis/index.ts')

const hubs = [
  'macbeth',
  'inspector-calls',
  'christmas-carol',
  'jekyll-hyde',
  'aqa-love-relationships',
  'aqa-power-conflict',
  'language-paper',
  'revision',
]

const pages = []

for (const hub of hubs) {
  const hubDir = path.join(backupRoot, hub)
  const entries = fs.readdirSync(hubDir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue
    const pageFile = path.join(hubDir, entry.name, 'page.tsx')
    if (!fs.existsSync(pageFile)) continue

    const content = fs.readFileSync(pageFile, 'utf8')

    // Extract const declarations that pages use for metadata
    const consts = {}
    const constRe = /const\s+(\w+)\s*=\s*\n?\s*'((?:[^'\\]|\\.)*)'/g
    let cm
    while ((cm = constRe.exec(content)) !== null) {
      consts[cm[1]] = decodeJsString(cm[2])
    }
    const constRe2 = /const\s+(\w+)\s*=\s*\n?\s*"((?:[^"\\]|\\.)*)"/g
    while ((cm = constRe2.exec(content)) !== null) {
      consts[cm[1]] = decodeJsString(cm[2])
    }

    // Extract title
    let title = ''

    // Pattern: title: 'string with "quotes" inside'
    const t1 = content.match(/title:\s*'((?:[^'\\]|\\.)*)'/)
    if (t1) {
      title = decodeJsString(t1[1])
    }

    // Pattern: title: "string"
    if (!title) {
      const t2 = content.match(/title:\s*"((?:[^"\\]|\\.)*)"/)
      if (t2) title = decodeJsString(t2[1])
    }

    // Pattern: title: `${VAR} | suffix`
    if (!title) {
      const t3 = content.match(/title:\s*`([^`]+)`/)
      if (t3) {
        title = t3[1].replace(/\$\{(\w+)\}/g, (_, v) => consts[v] || v)
      }
    }

    if (!title) title = entry.name

    // Extract description
    let description = ''
    if (consts.DESCRIPTION) {
      description = consts.DESCRIPTION
    } else {
      const d1 = content.match(/description:\s*\n?\s*'((?:[^'\\]|\\.)*)'/)
      if (d1) {
        description = decodeJsString(d1[1])
      } else {
        const d2 = content.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)
        if (d2) description = decodeJsString(d2[1])
      }
      if (!description) {
        const d3 = content.match(/description:\s*\n?\s*`([^`]+)`/)
        if (d3) {
          description = d3[1].replace(/\$\{(\w+)\}/g, (_, v) => consts[v] || v)
        }
      }
    }

    pages.push({
      slug: [hub, entry.name],
      title,
      description,
      category: hub,
    })
  }
}

// Sort by category then slug
pages.sort((a, b) => {
  if (a.category !== b.category) return a.category.localeCompare(b.category)
  return a.slug[1].localeCompare(b.slug[1])
})

// Report
const fallbacks = pages.filter((p) => p.title === p.slug[1])
console.log(`Total pages: ${pages.length}`)
console.log(`Pages with fallback title: ${fallbacks.length}`)
if (fallbacks.length) fallbacks.forEach((p) => console.log(`  ${p.slug.join('/')}`))

const noDesc = pages.filter((p) => !p.description)
console.log(`Pages with no description: ${noDesc.length}`)

// Write TypeScript data file
const tsContent = `// Auto-generated analysis page registry - do not edit by hand.
// Re-generate with: node scripts/generate-analysis-data.js
//
// This file maps slug paths to metadata for the catch-all [...slug] route.
// Content is rendered on-demand via ISR - no static pre-rendering at build time.

export type AnalysisPageEntry = {
  /** URL slug segments, e.g. ['macbeth', 'fair-is-foul-and-foul-is-fair'] */
  slug: [string, string]
  /** Full page title (used in <title> and og:title) */
  title: string
  /** Meta description for SEO */
  description: string
  /** Parent category slug, e.g. 'macbeth' */
  category: string
}

/**
 * Registry of all analysis sub-pages.
 *
 * The catch-all route at /analysis/[...slug]/page.tsx uses this to:
 * 1. Validate that a requested slug pair is a known page (otherwise 404)
 * 2. Provide metadata (title, description) for SEO
 * 3. Generate the page content on-demand via ISR
 */
export const ANALYSIS_PAGES: AnalysisPageEntry[] = ${JSON.stringify(pages, null, 2)}

/** Fast lookup map: 'category/slug' -> AnalysisPageEntry */
export const ANALYSIS_PAGE_MAP = new Map<string, AnalysisPageEntry>(
  ANALYSIS_PAGES.map((p) => [p.slug.join('/'), p]),
)

/** Get all slugs for a given category */
export function getPagesByCategory(category: string): AnalysisPageEntry[] {
  return ANALYSIS_PAGES.filter((p) => p.category === category)
}
`

// ─── The reason this script does not just write ─────────────────────────────
//
// ITS SOURCE TREE IS OLDER THAN THE FILE IT GENERATES. `backupRoot` is a
// backup of pages that were deleted, and it predates the sitewide language
// cleanup of 14 April 2026 (commit a49dcf22), which replaced "Examiner" with
// "Marker" and "mark scheme" with "marking guide" across 273 files. The
// generated registry was corrected by that commit; the backup was not.
//
// So running this script blind reintroduces the exact wording the founder had
// removed, across 192 page descriptions, and does it silently - the diff looks
// like a routine regeneration. Found on 20 September 2026 while fixing the
// escape decoding above: the regenerated file said "Written by GCSE examiners"
// where the committed one says "markers".
//
// The guard below refuses rather than warns. A warning on a script somebody
// runs once a year is a warning nobody reads, and the failure is silent by
// construction. `--force` is there for whoever eventually refreshes the backup.
const REMOVED_WORDING = [
  { pattern: /examiner/i, was: 'examiner', now: 'marker' },
  { pattern: /mark scheme/i, was: 'mark scheme', now: 'marking guide' },
  { pattern: /assessment objective/i, was: 'assessment objective', now: 'a skill name' },
  { pattern: /—/, was: 'an em dash', now: 'a hyphen' },
]

const offenders = []
for (const page of pages) {
  for (const rule of REMOVED_WORDING) {
    if (rule.pattern.test(page.title) || rule.pattern.test(page.description)) {
      offenders.push(`${page.slug.join('/')}: ${rule.was} (should be ${rule.now})`)
    }
  }
}

if (offenders.length > 0 && !process.argv.includes('--force')) {
  console.error(
    `\nREFUSING TO WRITE. ${offenders.length} entries carry wording removed from the product on 14 April 2026.`,
  )
  console.error('The backup this script reads is older than the file it would overwrite.\n')
  for (const o of offenders.slice(0, 10)) console.error(`  ${o}`)
  if (offenders.length > 10) console.error(`  ...and ${offenders.length - 10} more`)
  console.error(
    '\nRefresh the backup tree, or re-run with --force if you have checked every one of them.',
  )
  process.exit(1)
}

fs.writeFileSync(outputFile, tsContent)
console.log(`\nWritten: ${outputFile}`)
