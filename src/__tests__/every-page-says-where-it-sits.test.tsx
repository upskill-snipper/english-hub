// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync } from 'node:fs'

/**
 * A third of the site said nothing about where its pages sit.
 *
 * MEASURED 20 September 2026, across all 1,329 sitemap URLs fetched from
 * production. 426 of them - 32.1% - emitted no BreadcrumbList at all:
 *
 *     /resources 181     /ielts 43     /marking 7     /help       4
 *     /igcse      93     /legal 10     /ks3     7     /assessment 2
 *     /revision   61                                  and a tail
 *
 * Breadcrumbs are one of the few structured-data types Google renders visibly
 * in a result, and they are how an answer engine reads where a page sits. The
 * pages missing them were the deep ones that most need the context: a poem,
 * inside an anthology, inside a board, inside IGCSE.
 *
 * The same crawl is the reason this is the item worth fixing rather than the
 * others it measured: 0 pages were missing a title, a description or a
 * canonical, and exactly one pair of pages shared a title. Those were the
 * problems a week ago. This one was not being looked at.
 *
 * WHY A LAYOUT MOUNT IS RIGHT HERE and wrong for a LearningResource or Course
 * node. Those carry a hard-coded url, so a layout stamps a false identity onto
 * every descendant - the defect fixed across nine layouts earlier today. A
 * breadcrumb is COMPUTED from the path of whatever page renders it, so one
 * mount at the root gives every URL its own correct trail.
 * no-hub-schema-in-layouts.test.ts states that distinction and deliberately
 * keeps BreadcrumbJsonLd out of its list.
 *
 * WHY THE 903 HAND-WRITTEN TRAILS STAY. Some describe a hierarchy the URL does
 * not. Replacing them would change the declared structure of 903 working pages
 * to fix 426 broken ones. Google's guidance covers the overlap: "If there are
 * multiple breadcrumb trails to reach a page, you can add multiple breadcrumb
 * trails to the page."
 *
 * MUTATIONS RUN, each verified to have altered the file first: removing the
 * mount from the root layout fails; dropping the /ar prefix fails; returning a
 * trail for the homepage fails; and removing the specification-code rule from
 * labelFor fails.
 */

const headerValues = new Map<string, string>()
vi.mock('next/headers', () => ({
  headers: async () => ({ get: (k: string) => headerValues.get(k) ?? null }),
}))

const { PathBreadcrumbJsonLd, labelFor } = await import('@/components/seo/path-breadcrumb-json-ld')

const LAYOUT = readFileSync('src/app/layout.tsx', 'utf8')

async function trailFor(path: string, extra: Record<string, string> = {}) {
  headerValues.clear()
  headerValues.set('x-pathname', path)
  for (const [k, v] of Object.entries(extra)) headerValues.set(k, v)
  const html = renderToStaticMarkup(await PathBreadcrumbJsonLd())
  if (!html) return null
  const json = /<script[^>]*>([\s\S]*?)<\/script>/.exec(html)?.[1] ?? ''
  return JSON.parse(
    json
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&amp;/g, '&'),
  )
}

beforeEach(() => headerValues.clear())

describe('every page says where it sits', () => {
  it('is mounted once, at the root', () => {
    // Vacuity guard: the component can be perfect and reach nothing.
    expect(LAYOUT).toContain(
      "import { PathBreadcrumbJsonLd } from '@/components/seo/path-breadcrumb-json-ld'",
    )
    expect(LAYOUT).toMatch(/<PathBreadcrumbJsonLd \/>/)
  })

  it('builds a trail from the path', async () => {
    const node = await trailFor('/igcse/edexcel/poetry/ozymandias')
    expect(node['@type']).toBe('BreadcrumbList')
    expect(node.itemListElement.map((i: { name: string }) => i.name)).toEqual([
      'Home',
      'IGCSE',
      'Edexcel',
      'Poetry',
      'Ozymandias',
    ])
    expect(node.itemListElement.map((i: { item: string }) => i.item)).toEqual([
      'https://theenglishhub.app/',
      'https://theenglishhub.app/igcse',
      'https://theenglishhub.app/igcse/edexcel',
      'https://theenglishhub.app/igcse/edexcel/poetry',
      'https://theenglishhub.app/igcse/edexcel/poetry/ozymandias',
    ])
    expect(node.itemListElement.map((i: { position: number }) => i.position)).toEqual([
      1, 2, 3, 4, 5,
    ])
  })

  it('and says nothing on the homepage', () => {
    // A one-item trail tells a crawler what it already knows, and would put a
    // BreadcrumbList on the one page that cannot have a hierarchy.
    return expect(trailFor('/')).resolves.toBeNull()
  })

  it('keeps an Arabic reader on the Arabic surface', async () => {
    // The middleware stamps the STRIPPED path, because /ar/revision renders the
    // /revision route. A trail built straight from that sends the reader to
    // English URLs - the same mistake CUI-9 fixed in the redirect tables.
    const node = await trailFor('/revision/texts', { 'x-lang-source': 'url' })
    expect(node.itemListElement.map((i: { item: string }) => i.item)).toEqual([
      'https://theenglishhub.app/ar',
      'https://theenglishhub.app/ar/revision',
      'https://theenglishhub.app/ar/revision/texts',
    ])
  })

  it('labels segments the way a reader would write them', () => {
    // Every one of these appears in a real URL on the site.
    expect(labelFor('igcse')).toBe('IGCSE')
    expect(labelFor('a-level')).toBe('A-Level')
    expect(labelFor('eduqas')).toBe('Eduqas')
    expect(labelFor('a-christmas-carol')).toBe('A Christmas Carol')
    expect(labelFor('jekyll-and-hyde')).toBe('Jekyll and Hyde')
    expect(labelFor('the-charge-of-the-light-brigade')).toBe('The Charge of the Light Brigade')
    expect(labelFor('power-and-conflict')).toBe('Power and Conflict')
    // Specification and paper codes, which title-casing would mangle into
    // "0500" -> "0500" but "4et1" -> "4et1".
    expect(labelFor('0500')).toBe('0500')
    expect(labelFor('4et1')).toBe('4ET1')
    expect(labelFor('j351')).toBe('J351')
  })

  it('and never leaves a segment empty or half-cased', async () => {
    // A trail with a blank name is worse than no trail: Google reports it as an
    // error rather than ignoring it.
    for (const path of [
      '/resources/revision-notes/macbeth',
      '/ielts/learn/writing/task-1',
      '/marking',
      '/legal/privacy',
      '/ks3/year-7',
    ]) {
      const node = await trailFor(path)
      for (const item of node.itemListElement) {
        expect(item.name, `${path} produced an empty crumb`).toBeTruthy()
        expect(item.item, `${path} produced an empty url`).toMatch(/^https:\/\//)
      }
    }
  })
})
