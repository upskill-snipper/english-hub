/**
 * Generates src/data/analysis/index.ts from the backup page.tsx files.
 * Run: node scripts/generate-analysis-data.js
 */
const fs = require('fs')
const path = require('path')

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
      consts[cm[1]] = cm[2].replace(/\\'/g, "'")
    }
    const constRe2 = /const\s+(\w+)\s*=\s*\n?\s*"((?:[^"\\]|\\.)*)"/g
    while ((cm = constRe2.exec(content)) !== null) {
      consts[cm[1]] = cm[2].replace(/\\"/g, '"')
    }

    // Extract title
    let title = ''

    // Pattern: title: 'string with "quotes" inside'
    const t1 = content.match(/title:\s*'((?:[^'\\]|\\.)*)'/)
    if (t1) {
      title = t1[1].replace(/\\'/g, "'")
    }

    // Pattern: title: "string"
    if (!title) {
      const t2 = content.match(/title:\s*"((?:[^"\\]|\\.)*)"/)
      if (t2) title = t2[1].replace(/\\"/g, '"')
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
        description = d1[1].replace(/\\'/g, "'")
      } else {
        const d2 = content.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)
        if (d2) description = d2[1].replace(/\\"/g, '"')
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
const tsContent = `// Auto-generated analysis page registry — do not edit by hand.
// Re-generate with: node scripts/generate-analysis-data.js
//
// This file maps slug paths to metadata for the catch-all [...slug] route.
// Content is rendered on-demand via ISR — no static pre-rendering at build time.

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

fs.writeFileSync(outputFile, tsContent)
console.log(`\nWritten: ${outputFile}`)
