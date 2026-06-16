import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Sitemap-completeness contract test (TICKET-18).
 *
 * Asserts that every prescribed-text directory under
 * `src/app/igcse/edexcel-lang/anthology/<slug>/page.tsx` is registered for
 * the sitemap. The Pearson Edexcel IGCSE English Language A (4EA1)
 * anthology has 10 prescribed non-fiction texts; if a future commit adds
 * an 11th anthology page without it appearing in the sitemap, this test
 * fails fast.
 *
 * Registry source of truth (since the 2026-06-10 filesystem-driven sitemap
 * refactor): `src/lib/seo/static-routes.json`, generated from the route
 * tree by `scripts/generate-sitemap-routes.mjs` (npm prebuild hook) and
 * fed into `sitemap.ts` via `for (const route of staticRoutes) add(route)`.
 * That refactor replaced the old hand-maintained literal arrays in
 * `sitemap.ts` (which had drifted ~200 pages behind the tree), so anthology
 * pages now register automatically. We therefore assert against the
 * generated JSON — which also catches the real drift risk now: a page added
 * on disk but committed without regenerating the JSON. As a belt-and-braces
 * fallback we still honour any anthology slug written directly into
 * `sitemap.ts` source (the legacy explicit-array shape).
 *
 * The check is read-only and source/data-text-based (we don't execute the
 * sitemap function).
 */

const SRC = join(process.cwd(), 'src')
const ANTHOLOGY_DIR = join(SRC, 'app', 'igcse', 'edexcel-lang', 'anthology')
const SITEMAP_PATH = join(SRC, 'app', 'sitemap.ts')
const STATIC_ROUTES_PATH = join(SRC, 'lib', 'seo', 'static-routes.json')

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
 * Extract every `/igcse/edexcel-lang/anthology/<slug>` slug registered for the
 * sitemap. Reads the generated `static-routes.json` (the post-refactor source
 * of truth) and, as a fallback, any anthology URL written directly into
 * `sitemap.ts` source — so the test does not lock the implementation into a
 * single shape.
 */
function getAnthologySlugsRegistered(): readonly string[] {
  const slugs = new Set<string>()
  const anthologyUrl = /\/igcse\/edexcel-lang\/anthology\/([a-z0-9-]+)(?=['"`/\s})]|$)/g

  // (a) Primary: the generated static-routes registry that sitemap.ts iterates.
  if (existsSync(STATIC_ROUTES_PATH)) {
    const routes = JSON.parse(readFileSync(STATIC_ROUTES_PATH, 'utf8')) as unknown
    if (Array.isArray(routes)) {
      for (const route of routes) {
        if (typeof route !== 'string') continue
        for (const m of route.matchAll(anthologyUrl)) slugs.add(m[1])
      }
    }
  }

  // (b) Fallback: any anthology slug written directly into sitemap.ts source
  // (legacy explicit-array / directly-templated shapes), so a hand-listed entry
  // still counts.
  const source = readFileSync(SITEMAP_PATH, 'utf8')
  const arrayBlockMatch = source.match(
    /Edexcel IGCSE English Language A[\s\S]*?\[\s*([\s\S]*?)\s*\]\.map\(/,
  )
  if (arrayBlockMatch !== null) {
    for (const m of arrayBlockMatch[1].matchAll(/'([a-z0-9-]+)'/g)) slugs.add(m[1])
  }
  for (const m of source.matchAll(anthologyUrl)) slugs.add(m[1])

  return Array.from(slugs).sort()
}

describe('Sitemap completeness - Edexcel IGCSE Language A anthology', () => {
  const fsSlugs = getAnthologySlugsFromFs()
  const sitemapSlugs = getAnthologySlugsRegistered()

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
