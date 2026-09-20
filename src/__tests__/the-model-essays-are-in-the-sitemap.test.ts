import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { modelEssayRoutes, ALL_TEXT_KEYS, loadEssaysFor } from '@/lib/revision/model-essays'

/**
 * Twenty-five model essays were in no sitemap, and a comment said SEO was fine.
 *
 * THE DEFECT (20 September 2026). `generateStaticParams` was removed from
 * `src/app/revision/model-essays/[text]/[slug]/page.tsx` in June 2026 for a
 * good reason: with it present Next prerendered every slug, baking
 * `hasAccess=false` into cached HTML, and a paying subscriber was served a
 * locked page. The note left in its place reads
 *
 *   "SEO is unaffected - the page is server-rendered with the crawlable teaser
 *    on every request."
 *
 * The teaser part is true and still is. The rest is not. That function was the
 * ONLY enumeration of these URLs in the repository, so `src/app/sitemap.ts`
 * lost its only way to learn they existed. Verified against the live sitemap
 * before changing anything: one model-essays URL in it, and it is the hub.
 * Twenty-five annotated Grade 9 essays - "How does Shakespeare present
 * Macbeth's ambition in the play?" and twenty-four more - were reachable only
 * by crawling in from the hub.
 *
 * It is the shape this repository keeps producing: a change fixes the thing in
 * front of it, and the comment explaining the change asserts something the
 * code does not do.
 *
 * The catalogue now lives in `src/lib/revision/model-essays.ts`, where the
 * sitemap can read it without the route prerendering anything. `force-dynamic`
 * and the per-request entitlement check are untouched.
 *
 * AND THE MEASUREMENT FOUND SOMETHING WORSE. Writing the "every route has the
 * content a route implies" assertion below failed immediately on all five
 * Romeo and Juliet essays: they have no paragraphs. That file does not carry
 * `paragraphs` at all - it carries `essay`, one string of about 750 words -
 * and the normaliser only knew the other shape. Confirmed live:
 * /revision/model-essays/romeo-and-juliet/rj-romeo-petrarchan-tragic-hero
 * returns 200 with 491 visible words, of which none are the essay. Title,
 * "use this essay well" box, fair-dealing notice, and nothing in between.
 *
 * 3,765 words of writing checked against Folger and Arden, published and
 * invisible, on pages that looked finished. Submitting those five to Google
 * unfixed would have been worse than leaving them out.
 *
 * MUTATIONS RUN, each verified to have altered the file first: removing the
 * loop from sitemap.ts fails; making modelEssayRoutes return [] fails;
 * dropping a text from ALL_TEXT_KEYS fails; and removing the `essay` branch
 * from the paragraph normaliser fails, which is the one that matters.
 */

const SITEMAP = readFileSync('src/app/sitemap.ts', 'utf8')
const PAGE = readFileSync('src/app/revision/model-essays/[text]/[slug]/page.tsx', 'utf8')

describe('every model essay is submitted', () => {
  it('there are 25 of them, across five texts', async () => {
    // Vacuity guard. An empty catalogue would satisfy "the sitemap lists every
    // essay" perfectly.
    const routes = await modelEssayRoutes()
    expect(ALL_TEXT_KEYS).toHaveLength(5)
    expect(routes).toHaveLength(25)
    expect(routes).toContain('/revision/model-essays/macbeth/macbeth-ambition')
    expect(new Set(routes).size, 'two essays share a route').toBe(routes.length)
  })

  it('and every one has the content a route implies', async () => {
    // A route built from a slug that leads to an empty essay would be worse
    // than no route: a submitted URL that renders nothing.
    for (const key of ALL_TEXT_KEYS) {
      const essays = await loadEssaysFor(key)
      expect(essays.length, `${key} has no essays`).toBeGreaterThan(0)
      for (const essay of essays) {
        expect(essay.slug, `${key} has an essay with no slug`).toBeTruthy()
        expect(essay.title, `${key}/${essay.slug} has no title`).toBeTruthy()
        expect(essay.paragraphs.length, `${key}/${essay.slug} has no paragraphs`).toBeGreaterThan(0)
      }
    }
  })

  it('the sitemap reads the catalogue', () => {
    expect(SITEMAP).toContain("import { modelEssayRoutes } from '@/lib/revision/model-essays'")
    expect(SITEMAP).toMatch(/for \(const route of await modelEssayRoutes\(\)\)/)
  })

  it('and the page reads the same one, not a second copy', () => {
    // The data files disagree about their own shape - slug or id, targetGrade
    // or grade, annotations either a string or an AO1/AO2/AO3 object - so a
    // second normalisation in the sitemap would drift from the one that
    // renders. This is the rule identity-guard.test.ts states for user ids,
    // applied to the same failure mode somewhere else.
    expect(PAGE).toContain("from '@/lib/revision/model-essays'")
    expect(PAGE, 'the page has its own loader again').not.toMatch(/async function loadEssaysFor/)
    expect(PAGE, 'the page has its own text list again').not.toMatch(/const TEXT_LABELS/)
  })

  it('and an unannotated essay does not claim to be annotated', () => {
    // The five Romeo and Juliet essays are prose only. The page used to put
    // "Annotated" in every title unconditionally, which would now be a promise
    // of marker commentary the page cannot keep.
    expect(PAGE).toMatch(/isAnnotated\(essay\) \? 'Annotated ' : ''/)
    expect(PAGE, 'the annotation column renders even when empty').toMatch(
      /const annotated = paragraph\.annotation\.trim\(\)\.length > 0/,
    )
  })

  it('and the route is still per-request, which is why this was needed', () => {
    // The counterweight. Putting generateStaticParams back would let the
    // sitemap enumerate them again and would re-break the paywall: it
    // prerenders hasAccess=false and serves a paying subscriber a locked page.
    expect(PAGE).toMatch(/export const dynamic = 'force-dynamic'/)
    expect(PAGE, 'generateStaticParams is back on a paywalled route').not.toMatch(
      /export (async )?function generateStaticParams/,
    )
  })
})
