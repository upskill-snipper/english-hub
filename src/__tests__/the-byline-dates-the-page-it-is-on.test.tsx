// @vitest-environment jsdom
//
// The three render assertions drive the real component, which needs a DOM.
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { readFileSync } from 'node:fs'
import { ReviewedByline } from '@/components/seo/ReviewedByline'
import ROUTE_LASTMOD from '@/lib/seo/route-lastmod.json'

/**
 * Every page said it was last updated in May 2026. 762 of them were not.
 *
 * THE DEFECT (20 September 2026). `ReviewedByline` exported
 * `SITE_LAST_REVIEWED = new Date('2026-05-01')` and printed "Last updated May
 * 2026" from the footer of all 1,071 pages. The sitemap had been given a real
 * per-route lastmod the day before, from the commit that last touched each
 * page's source. Compared against that map:
 *
 *     2026-09   762 routes      2026-06    35
 *     2026-05    78             2026-08     7
 *                               2026-04     1
 *
 * So the visible date was right for 78 routes out of 883 and four months stale
 * on 762 of them, including pages edited the same morning. The machine date in
 * the sitemap and the human date on the page disagreed across most of the site,
 * and it is the human one a reader and an answer engine weigh.
 *
 * It is the same defect as the site-wide `dateModified` removed from the JSON-LD
 * on 19 September - a hand-maintained constant asserting a fact about 1,071
 * different pages - and it survived that fix because it lives in the visible
 * layer rather than the structured one.
 *
 * THE FIX. The middleware stamps the served route on `x-pathname`, the root
 * layout looks it up in the same map the sitemap uses, and passes the date down
 * to the footer. The lookup is on the server on purpose: this component renders
 * inside the client footer, and importing a 62 KB map of route dates there
 * would ship it to every visitor - the mistake this repository already paid for
 * with the trilingual dictionary.
 *
 * WHEN THE ROUTE IS UNKNOWN the clause is omitted, not defaulted. A missing
 * date costs a freshness signal; a wrong one is a false statement about the
 * page, printed on the page.
 *
 * MUTATIONS RUN, each verified to have altered the file first: a default date
 * put back on the `updated` prop fails 2 of the 7; removing the x-pathname stamp
 * from the middleware fails; dropping the prop from the Footer call fails.
 */

const MIDDLEWARE = readFileSync('src/middleware.ts', 'utf8')
const LAYOUT = readFileSync('src/app/layout.tsx', 'utf8')
const SHELL = readFileSync('src/components/layout/root-layout-shell.tsx', 'utf8')
const FOOTER = readFileSync('src/components/layout/footer.tsx', 'utf8')
const BYLINE = readFileSync('src/components/seo/ReviewedByline.tsx', 'utf8')

describe('the byline dates the page it is on', () => {
  it('prints the date it is given', () => {
    render(<ReviewedByline updated="2026-09-19T19:16:18+03:00" />)
    expect(screen.getByText(/Last updated/)).toBeTruthy()
    expect(screen.getByText('September 2026')).toBeTruthy()
  })

  it('prints no date at all when it is given none', () => {
    // The whole point. A default here is how the old constant came to assert
    // May 2026 on pages edited that morning.
    render(<ReviewedByline />)
    expect(screen.queryByText(/Last updated/)).toBeNull()
    // The attribution still renders - the date is the only part that goes.
    expect(screen.getByText(/The English Hub editorial team/)).toBeTruthy()
    expect(screen.getByText(/Reviewed for accuracy by/)).toBeTruthy()
  })

  it('and prints none for a date it cannot parse', () => {
    render(<ReviewedByline updated="not a date" />)
    expect(screen.queryByText(/Last updated/)).toBeNull()
  })

  it('carries no site-wide constant any more', () => {
    expect(BYLINE).not.toMatch(/export const SITE_LAST_REVIEWED/)
    expect(BYLINE, 'a default on the prop is the same defect wearing a hat').not.toMatch(
      /updated\s*=\s*[A-Z_]/,
    )
  })

  it('and the wiring that feeds it exists end to end', () => {
    // Each of these four links is load-bearing: the component can be perfect
    // and the footer still print nothing, or the wrong thing, if any one of
    // them is missing.
    expect(MIDDLEWARE, 'middleware does not stamp the route').toContain(
      "request.headers.set('x-pathname', pathname)",
    )
    expect(MIDDLEWARE, 'the /ar branch would look up a route that does not exist').toContain(
      "request.headers.set('x-pathname', strippedPath)",
    )
    expect(LAYOUT, 'the layout does not read the map').toContain(
      "import ROUTE_LASTMOD from '@/lib/seo/route-lastmod.json'",
    )
    expect(LAYOUT).toContain("reqHeaders.get('x-pathname')")
    expect(LAYOUT, 'the date never reaches the shell').toMatch(
      /<RootLayoutShell lastUpdated=\{pageLastUpdated\}>/,
    )
    expect(SHELL, 'the shell never passes it to the footer').toContain(
      '<Footer lastUpdated={lastUpdated} />',
    )
    expect(FOOTER, 'the footer never passes it to the byline').toMatch(
      /<ReviewedByline updated=\{lastUpdated\}/,
    )
  })

  it('and the map it reads is a real one that disagrees with the old constant', () => {
    // Vacuity guard with teeth. If the map were empty, or if it happened to say
    // May 2026 everywhere, this change would be theatre.
    const dates = Object.values(ROUTE_LASTMOD as Record<string, string>)
    expect(dates.length).toBeGreaterThan(800)
    const notMay2026 = dates.filter((d) => !d.startsWith('2026-05'))
    expect(notMay2026.length / dates.length).toBeGreaterThan(0.8)
    expect((ROUTE_LASTMOD as Record<string, string>)['/revision/texts/macbeth']).toBeTruthy()
  })

  it('and the map does not stamp the whole site with one date', () => {
    // The counterweight. Regenerating everything to "today" would satisfy the
    // assertion above and restore, in a new costume, the defect the sitemap
    // lastmod work removed: every deploy claiming the whole site just changed.
    //
    // This used to require more than 20 routes still dated May 2026. That was
    // a snapshot, not the rule: the sweeps of 19, 20 and 26 September really
    // changed most pages, and an honest regeneration on 26 September left 6
    // in May. What the defect looks like is one date everywhere, so that is
    // what is checked: no single day holds half the routes, and the dates span
    // several days.
    const days = Object.values(ROUTE_LASTMOD as Record<string, string>).map((d) => d.slice(0, 10))
    const byDay = new Map<string, number>()
    for (const d of days) byDay.set(d, (byDay.get(d) ?? 0) + 1)
    expect(Math.max(...byDay.values()) / days.length).toBeLessThan(0.75)
    const newest = [...byDay.keys()].sort().at(-1)!
    expect(byDay.get(newest)! / days.length).toBeLessThan(0.5)
    expect(byDay.size).toBeGreaterThanOrEqual(5)
  })
})
