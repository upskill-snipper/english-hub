// ─── Does every tr(`...`) literal still match a translation? ────────────────
//
// Several resource pages localise with a LOCAL helper rather than the
// dictionary:
//
//   const tr = (en: string): string => {
//     if (_lang !== 'ar') return en
//     for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
//     return en
//   }
//
// The lookup key is the ENGLISH SENTENCE ITSELF. So editing the copy on the
// page silently orphans its Arabic: the loop finds no match, returns the
// English, and the page renders correctly in English while the Arabic surface
// quietly loses that string. Nothing fails, nothing logs.
//
// This reports, per page, how many tr() literals have no matching `.en` in the
// sibling content.ts. Run it after editing any page that uses this pattern.
//
//   node scripts/check-tr-literals-have-translations.mjs [--quiet]

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * The trailing comma matters. Prettier wraps a long call as
 *
 *   {tr(
 *     `a long sentence...`,
 *   )}
 *
 * and a pattern without `,?` silently skips exactly the longest strings on the
 * page. A checker that under-reports is worse than none, because the zero it
 * prints looks like a clean result.
 */
const TR_LITERAL = /tr\(\s*`((?:[^`\\]|\\.)*)`\s*,?\s*\)/gs
const EN_FIELD = /en:\s*(?:`((?:[^`\\]|\\.)*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/gs

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (entry.name === 'page.tsx') out.push(full)
  }
  return out
}

/** Collapse the whitespace prettier introduces when it wraps a long literal. */
const norm = (s) => s.replace(/\s+/g, ' ').trim()

/**
 * Every page using the local-STRINGS pattern, with the tr() literals that have
 * no matching `.en`. Exported so the vitest and this CLI cannot drift apart.
 */
export function findOrphans(root = 'src/app') {
  const pages = walk(root)
  let checked = 0
  const report = []

  for (const page of pages) {
    const source = readFileSync(page, 'utf8')
    if (!/for \(const v of Object\.values\(STRINGS\)\)/.test(source)) continue

    const contentPath = join(dirname(page), 'content.ts')
    if (!existsSync(contentPath)) continue
    const content = readFileSync(contentPath, 'utf8')

    const translated = new Set()
    for (const m of content.matchAll(EN_FIELD)) {
      translated.add(norm(m[1] ?? m[2] ?? m[3] ?? ''))
    }

    const missing = []
    for (const m of source.matchAll(TR_LITERAL)) {
      const literal = norm(m[1])
      if (!literal) continue
      checked += 1
      if (!translated.has(literal)) missing.push(literal)
    }

    if (missing.length) report.push({ page: page.split('\\').join('/'), missing })
  }

  return { checked, report, orphans: report.reduce((a, r) => a + r.missing.length, 0) }
}

// CLI only when run directly, so importing this from a test runs nothing.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { checked, report, orphans } = findOrphans()
  if (!process.argv.includes('--quiet')) {
    for (const { page, missing } of report) {
      console.log('')
      console.log(`${page}  (${missing.length} untranslated)`)
      const show = process.argv.includes('--all') ? missing : missing.slice(0, 6)
      for (const line of show) {
        console.log('   ' + (line.length > 96 ? line.slice(0, 96) + '...' : line))
      }
      if (missing.length > show.length) {
        console.log(`   ... and ${missing.length - show.length} more`)
      }
    }
  }
  console.log('')
  console.log(
    `${checked} tr() literals checked; ${orphans} have no Arabic, across ${report.length} page(s).`,
  )
  // Reporting tool, not a gate. The vitest beside it is the gate, so that a
  // new orphan fails a push rather than printing a line nobody reads.
}
