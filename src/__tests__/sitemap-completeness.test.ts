import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Sitemap-completeness contract test (TICKET-18).
 *
 * Asserts that every prescribed-text directory under
 * `src/app/igcse/edexcel-lang/anthology/<slug>/page.tsx` has a matching
 * entry in `src/app/sitemap.ts`. The Pearson Edexcel IGCSE English
 * Language A (4EA1) anthology has 10 prescribed non-fiction texts; if a
 * future commit adds an 11th anthology page without registering it in
 * the sitemap, this test fails fast.
 *
 * The check is read-only and source-text-based (we don't execute the
 * sitemap function). The sitemap currently registers anthology slugs as
 * a single literal-string array, so a regex over the source is both
 * cheaper and more robust than spinning up the Next runtime.
 */

const SRC = join(process.cwd(), 'src')
const ANTHOLOGY_DIR = join(SRC, 'app', 'igcse', 'edexcel-lang', 'anthology')
const SITEMAP_PATH = join(SRC, 'app', 'sitemap.ts')

/** Slugs of every subdirectory under the anthology route that ships a `page.tsx`. */
function getAnthologySlugsFromFs(): readonly string[] {
  if (!existsSync(ANTHOLOGY_DIR)) return []
  const entries = readdirSync(ANTHOLOGY_DIR)
  const slugs: string[] = []
  for (const entry of entries) {
    const full = join(ANTHOLOGY_DIR, entry)
    if (!statSync(full).isDirectory()) continue
    if (!existsSync(join(full, 'page.tsx'))) continue
    slugs.push(entry)
  }
  return slugs.sort()
}

/**
 * Extract every `/igcse/edexcel-lang/anthology/<slug>` URL referenced in the
 * sitemap source. Captures both the directly-templated form
 * (`anthology/${text}` inside the `.map(...)` block) and any explicitly-listed
 * URLs, so the test does not lock the implementation into a single shape.
 */
function getAnthologySlugsFromSitemap(): readonly string[] {
  const source = readFileSync(SITEMAP_PATH, 'utf8')
  const slugs = new Set<string>()

  // (a) Slugs inside an array literal feeding `.map(...)` -> `anthology/${text}`
  // Match the array of bare string literals, then split out each entry.
  const arrayBlockMatch = source.match(
    /Edexcel IGCSE English Language A[\s\S]*?\[\s*([\s\S]*?)\s*\]\.map\(/,
  )
  if (arrayBlockMatch !== null) {
    const arrayBody = arrayBlockMatch[1]
    const literalMatches = arrayBody.matchAll(/'([a-z0-9-]+)'/g)
    for (const m of literalMatches) slugs.add(m[1])
  }

  // (b) Any directly-written URL of the form `/igcse/edexcel-lang/anthology/<slug>`.
  const directMatches = source.matchAll(
    /\/igcse\/edexcel-lang\/anthology\/([a-z0-9-]+)(?=['"`/\s})])/g,
  )
  for (const m of directMatches) slugs.add(m[1])

  return Array.from(slugs).sort()
}

describe('Sitemap completeness - Edexcel IGCSE Language A anthology', () => {
  const fsSlugs = getAnthologySlugsFromFs()
  const sitemapSlugs = getAnthologySlugsFromSitemap()

  it('discovers at least one anthology page on disk', () => {
    expect(fsSlugs.length).toBeGreaterThan(0)
  })

  it('lists ten prescribed texts (4EA1 anthology spec)', () => {
    // Pearson Edexcel IGCSE English Language A (4EA1) - 10 prescribed
    // non-fiction texts in Section A of the anthology. If this number ever
    // changes, both the directory tree and the sitemap should change together.
    expect(fsSlugs.length).toBe(10)
  })

  it('every anthology page on disk has a matching sitemap entry', () => {
    const missing = fsSlugs.filter((slug) => !sitemapSlugs.includes(slug))
    expect(missing).toEqual([])
  })

  it('every sitemap anthology entry corresponds to a real page on disk', () => {
    const orphaned = sitemapSlugs.filter((slug) => !fsSlugs.includes(slug))
    expect(orphaned).toEqual([])
  })
})
