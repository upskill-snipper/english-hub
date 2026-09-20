import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Twenty-seven pages told Google they were the homepage.
 *
 * FOUND 20 September 2026 by crawling all 1,303 sitemap URLs. Next.js inherits
 * `alternates.canonical` down the layout tree, so any route whose own segments
 * export no metadata silently adopts the ROOT canonical -
 * https://theenglishhub.app. `src/lib/seo/canonical.ts` exists because of that
 * hazard; these routes had simply never been given their own.
 *
 * WHAT WAS AFFECTED:
 *
 *   26 of the 28 /revision/texts/<slug>/read pages - the complete public-domain
 *   texts. 599,385 words, the largest body of unique writing on the site, every
 *   page of it declaring itself a duplicate of the homepage. All 26 also
 *   carried the title "Your Hub - The English Hub", the only exact-duplicate
 *   title cluster on the site, against query families this site should own:
 *   "read Hamlet online free", "Jekyll and Hyde read online".
 *
 *   /marking - the flagship paid feature, rendering <h1>AI Essay Marking</h1>,
 *   with 787 internal links pointing at it, more than any page outside the
 *   primary nav. It could not rank for its own terms.
 *
 * Fourteen of the read routes were not even registered in static-routes.json,
 * because the generator only lists routes that export metadata. Giving them a
 * layout fixed the canonical and the registration together.
 *
 * WHY A LAYOUT AND NOT A PAGE EDIT. `metadata` must be exported from a server
 * component, and every one of these pages is a client component. A sibling
 * layout.tsx is the smallest change that does not touch the page at all.
 *
 * WHAT THE DESCRIPTIONS SAY, and why it was not one template. Each names only
 * the annotation overlays that text ACTUALLY has: The Tyger's says "Language
 * highlighted inline" because its four annotations are all language notes, and
 * claiming themes would be a promise the page does not keep. Three texts have
 * no annotations at all and their descriptions claim none.
 *
 * MUTATION RUN, verified to have altered the file first: deleting
 * hamlet/read/layout.tsx fails 2 of these.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')

const readRoutes = readdirSync(TEXTS, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((slug) => existsSync(join(TEXTS, slug, 'read', 'page.tsx')))

const layoutOf = (slug: string): string | null => {
  const p = join(TEXTS, slug, 'read', 'layout.tsx')
  return existsSync(p) ? readFileSync(p, 'utf8') : null
}

describe('every full-text reader declares itself, not the homepage', () => {
  it('there are readers to check', () => {
    // Vacuity guard: an empty list would satisfy every assertion below.
    expect(readRoutes.length).toBeGreaterThan(25)
  })

  it.each(readRoutes)('%s/read has its own metadata', (slug) => {
    const src = layoutOf(slug)
    expect(src, `${slug}/read has no layout, so it inherits the root canonical`).toBeTruthy()
    expect(src!, `${slug}/read exports no metadata`).toMatch(/export const metadata/)
  })

  it.each(readRoutes)('%s/read canonicalises to itself', (slug) => {
    const src = layoutOf(slug) ?? ''
    expect(src, `${slug}/read does not canonicalise to its own path`).toContain(
      `/revision/texts/${slug}/read`,
    )
  })

  it('and no reader carries the shared "Your Hub" title', () => {
    // The symptom that made the cluster findable: 27 URLs sharing one title.
    for (const slug of readRoutes) {
      expect(layoutOf(slug) ?? '', `${slug}/read still titled Your Hub`).not.toContain('Your Hub')
    }
  })

  it('and every title and description is distinct', () => {
    // A template that produced one string for all 28 would pass everything
    // above while leaving the duplicate-title defect exactly where it was.
    const titles = new Set<string>()
    const descriptions = new Set<string>()
    for (const slug of readRoutes) {
      const src = layoutOf(slug) ?? ''
      const title = (src.match(/title:\s*['"]([^'"]+)['"]/) ?? [])[1] ?? slug
      const desc = (src.match(/description:\s*['"]([^'"]+)['"]/) ?? [])[1] ?? slug
      titles.add(title)
      descriptions.add(desc)
    }
    expect(titles.size, 'two readers share a title').toBe(readRoutes.length)
    expect(descriptions.size, 'two readers share a description').toBe(readRoutes.length)
  })

  it('and no description is long enough to be truncated in a result', () => {
    for (const slug of readRoutes) {
      const desc = (layoutOf(slug)?.match(/description:\s*['"]([^'"]+)['"]/) ?? [])[1] ?? ''
      expect(desc.length, `${slug}/read description is ${desc.length} chars`).toBeLessThanOrEqual(
        165,
      )
    }
  })
})

describe('the marking hub declares itself too', () => {
  const marking = join(ROOT, 'src/app/marking/layout.tsx')

  it('has its own layout and metadata', () => {
    expect(existsSync(marking), '/marking has no layout, so it inherits the root canonical').toBe(
      true,
    )
    expect(readFileSync(marking, 'utf8')).toMatch(/export const metadata/)
  })

  it('canonicalises to /marking, not the homepage', () => {
    expect(readFileSync(marking, 'utf8')).toContain("selfCanonical('/marking')")
  })

  it('and is no longer excluded from the sitemap', () => {
    const gen = readFileSync(join(ROOT, 'scripts/generate-sitemap-routes.mjs'), 'utf8')
    expect(gen).toMatch(/const EXACT_EXCLUDE = new Set\(\[\]\)/)
    const routes = readFileSync(join(ROOT, 'src/lib/seo/static-routes.json'), 'utf8')
    expect(routes, '/marking is still absent from the route register').toContain('"/marking"')
  })

  it('but the logged-in tools stay out', () => {
    // /marking/submit and /marking/history are tools behind auth, not landing
    // pages. Submitting them would be the opposite mistake.
    const gen = readFileSync(join(ROOT, 'scripts/generate-sitemap-routes.mjs'), 'utf8')
    expect(gen).toContain('/marking/submit')
    expect(gen).toContain('/marking/history')
  })
})
