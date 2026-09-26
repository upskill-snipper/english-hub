import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { BOARDS } from '@/lib/board/board-config'
import { unverifiedShelves } from '@/lib/board/shelf-provenance'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { guideElsewhere } from '@/lib/revision/guide-href'
import { resolveGuide } from '@/lib/revision/shelf'
import { NOT_POEMS, POEM_COLLECTIONS, POEM_PAGES, POEM_ROOTS } from '@/lib/search/poem-pages'
import { buildTextSearchIndex } from '@/lib/search/text-search-index'
import { normalise, searchTexts } from '@/lib/search/match-texts'

/**
 * The text search: "I know my text, take me to it".
 *
 * ADDED 26 September 2026 with the search box on the homepage. Three things
 * can go wrong without anything crashing, and each is pinned here:
 *
 * - A POEM NOBODY CAN FIND. The anthology poems have no set-text row, so they
 *   come from a written list (poem-pages.ts). A new poem page left off it would
 *   simply never appear in results. The register test walks the route trees.
 * - A RESULT THAT LEADS TO AN APOLOGY. A text whose guide lives under /igcse
 *   must be found there, not at the /revision/texts placeholder that says the
 *   guide is somewhere else.
 * - A RESULT THAT CLAIMS TOO MUCH. A board is named only if its list is
 *   verified, and a text with no guide says so.
 *
 * The matching cases use the real index, not a fixture: the question is what a
 * student typing "ozymandias" or "aic" actually gets.
 */

const ROOT = process.cwd()
const APP = join(ROOT, 'src/app')
const pageFile = (href: string) => join(APP, href, 'page.tsx')
const INDEX = buildTextSearchIndex()
const SET_TEXT_SLUGS = new Set(SET_TEXTS.map((t) => t.slug))

/** A page's own source: page and layout, where titles and poets are written. */
function sourceOf(href: string): string {
  const dir = join(APP, href)
  return ['page.tsx', 'layout.tsx']
    .map((f) => join(dir, f))
    .filter(existsSync)
    .map((f) => readFileSync(f, 'utf8'))
    .join('\n')
}

/** Loose comparison for titles in source: accents, quotes and dashes vary. */
const loose = (s: string) => normalise(s.replace(/\\u2013|\\u2014/g, ' '))

describe('the poem register', () => {
  it('lists every poem page under every root', () => {
    const missing: string[] = []
    const listed = new Set(POEM_PAGES.map((p) => p.href))
    for (const root of Object.keys(POEM_ROOTS)) {
      for (const entry of readdirSync(join(APP, root), { withFileTypes: true })) {
        if (!entry.isDirectory()) continue
        if (NOT_POEMS.has(entry.name) || /^[[_(]/.test(entry.name)) continue
        const href = `${root}/${entry.name}`
        if (!existsSync(pageFile(href))) continue
        if (!listed.has(href)) missing.push(href)
      }
    }
    expect(missing, 'poem pages the search cannot find').toEqual([])
  })

  it.each(POEM_PAGES.map((p) => [p.href, p] as const))(
    '%s is real and correctly named',
    (href, p) => {
      expect(existsSync(pageFile(href)), `${href} has no page`).toBe(true)
      const src = loose(sourceOf(href))
      expect(src, `${href} never mentions "${p.title}"`).toContain(loose(p.title))
      expect(src, `${href} never mentions ${p.poet}`).toContain(loose(p.poet))
    },
  )

  it.each(POEM_COLLECTIONS.map((c) => [c.href] as const))('hub %s is a real page', (href) => {
    expect(existsSync(pageFile(href)), `${href} has no page`).toBe(true)
  })
})

describe('the index', () => {
  it('covers the set texts, the poems and the hubs', () => {
    // What this would report with an empty register: a much smaller index.
    const kinds = (k: string) => INDEX.filter((e) => e.kind === k).length
    expect(kinds('poem')).toBeGreaterThanOrEqual(60)
    expect(kinds('collection')).toBeGreaterThanOrEqual(10)
    expect(kinds('text')).toBeGreaterThanOrEqual(90)
  })

  it('has one entry per destination', () => {
    const hrefs = INDEX.map((e) => e.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  it('sends every result to a page that exists', () => {
    const dead = INDEX.filter((e) => {
      if (existsSync(pageFile(e.href))) return false
      // The catch-all /revision/texts/[slug] serves every set text.
      const m = /^\/revision\/texts\/([a-z0-9-]+)$/.exec(e.href)
      return !(m && SET_TEXT_SLUGS.has(m[1]))
    })
    expect(dead.map((e) => e.href)).toEqual([])
  })

  it('never sends a student to a placeholder when the guide is elsewhere', () => {
    const detours = INDEX.filter((e) => {
      const m = /^\/revision\/texts\/([a-z0-9-]+)$/.exec(e.href)
      return m && PLACEHOLDER_TEXT_SLUGS.has(m[1]) && guideElsewhere(m[1]) !== null
    })
    expect(detours.map((e) => e.href)).toEqual([])
  })

  it('names no board whose list is unverified', () => {
    const unverified = unverifiedShelves().map(
      (id) => BOARDS.find((b) => b.id === id)?.shortName ?? id,
    )
    expect(unverified.length).toBeGreaterThan(0)
    for (const e of INDEX.filter((x) => x.kind === 'text')) {
      const named = e.context.split(' · ')
      for (const u of unverified) expect(named, `${e.title} names ${u}`).not.toContain(u)
    }
  })

  it('labels every text by the readiness the shelf gives it', () => {
    // "Full guide" and "Not written yet" must say what the shelf says. Since
    // 26 September 2026 no set text is unwritten, so this checks the label on
    // all of them rather than on the unwritten ones alone.
    const texts = INDEX.filter((e) => e.kind === 'text')
    expect(texts.length).toBeGreaterThan(90)
    for (const e of texts) {
      const slug = SET_TEXTS.find((t) => resolveGuide(t.slug).href === e.href)!.slug
      const r = resolveGuide(slug).readiness
      expect(e.status, e.title).toBe(r === 'full' ? 'full' : r === 'none' ? 'none' : undefined)
    }
    expect(texts.some((e) => e.status === 'full')).toBe(true)
  })
})

describe('what a student gets', () => {
  const first = (q: string) => searchTexts(INDEX, q).results[0]?.href

  it.each([
    ['macbeth', '/revision/texts/macbeth'],
    ['Macbeth', '/revision/texts/macbeth'],
    ['machbeth', '/revision/texts/macbeth'],
    ['inspector', '/revision/texts/an-inspector-calls'],
    ['priestley', '/revision/texts/an-inspector-calls'],
    ['aic', '/revision/texts/an-inspector-calls'],
    ['r&j', '/revision/texts/romeo-and-juliet'],
    ['omam', '/revision/texts/of-mice-and-men'],
    ['tkam', '/revision/texts/to-kill-a-mockingbird'],
    ['jekyll', '/revision/texts/jekyll-and-hyde'],
    ['emigree', '/revision/poetry/power-and-conflict/the-emigree'],
    ['farmers bride', '/revision/poetry/love-and-relationships/the-farmers-bride'],
    ["farmer's bride", '/revision/poetry/love-and-relationships/the-farmers-bride'],
    ['power and conflict', '/revision/poetry/power-and-conflict'],
    ['a passage to africa', '/igcse/edexcel-lang/anthology/a-passage-to-africa'],
  ])('"%s" opens %s first', (q, href) => {
    expect(first(q)).toBe(href)
  })

  it('offers Ozymandias on every board that has a page for it', () => {
    const { results } = searchTexts(INDEX, 'ozymandias')
    expect(results.map((r) => r.href).sort()).toEqual([
      '/igcse/edexcel/poetry/ozymandias',
      '/revision/poetry/eduqas/ozymandias',
      '/revision/poetry/power-and-conflict/ozymandias',
    ])
    // Each labelled, so the student can tell them apart.
    expect(new Set(results.map((r) => r.context)).size).toBe(3)
  })

  it('forgives a misspelling only when nothing matches exactly', () => {
    expect(first('ozymandius')).toMatch(/ozymandias$/)
    // "london" matches exactly, so no fuzzy result joins it: every result has
    // the word itself (London, A Wife in London), none merely resembles it.
    const { results } = searchTexts(INDEX, 'london')
    expect(results.length).toBeGreaterThan(0)
    for (const r of results) expect(r.terms.split(' '), r.title).toContain('london')
  })

  it('returns nothing for one letter or for nonsense', () => {
    expect(searchTexts(INDEX, 'm').total).toBe(0)
    expect(searchTexts(INDEX, '   ').total).toBe(0)
    expect(searchTexts(INDEX, 'xyzzy').total).toBe(0)
  })

  it('caps the list and reports the full count', () => {
    const { results, total } = searchTexts(INDEX, 'shakespeare', 8)
    expect(results.length).toBe(8)
    expect(total).toBeGreaterThan(8)
  })
})
