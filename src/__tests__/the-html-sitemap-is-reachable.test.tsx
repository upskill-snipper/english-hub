// @vitest-environment jsdom
//
// The assertion that matters is that the link is in the DOM for a visitor with
// no board cookie, which is what a crawler is. That cannot be read off source.
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { existsSync, readFileSync } from 'node:fs'

/**
 * A page holding 1,305 internal links had no inbound link of its own.
 *
 * THE DEFECT (20 September 2026). `/sitemap-html` lists every URL on the site,
 * organised by section - 1,305 links, 1.17 MB - and NOTHING on the site linked
 * to it. It is in sitemap.xml and in llms.txt, so a crawler could reach it, but
 * no internal link means no link equity flows into it and none flows out
 * through it, which is the entire job of an HTML sitemap.
 *
 * MEASURED, NOT ASSUMED. All 1,304 sitemap URLs were fetched and their internal
 * links graphed. 173 of them have no inbound link from anywhere on the site
 * except /sitemap-html, and one has none at all. The worst sections:
 *
 *     /courses     50        /eal          19        /set-texts   7
 *     /resources   32        /revision     12        /ks3         4
 *     /igcse       30        /demo          4        /games       3
 *
 * Fifty course pages, thirty IGCSE pages and thirty-two resource pages sit one
 * click from nowhere. With the footer link they sit two clicks from every page
 * on the site.
 *
 * WHY THE "RENDERS FOR A VISITOR WITH NO BOARD" ASSERTION IS THE LOAD-BEARING
 * ONE. The footer filters its links by the visitor's exam board, and on the
 * SERVER render `isHydrated` is false, so `effectiveBoard` is null and every
 * board-scoped link in a non-generic section is dropped. A crawler has no board
 * cookie and never hydrates, so a link in the Revision or IGCSE section would be
 * invisible to exactly the audience this change is for. It goes in Support,
 * which is `generic: true`.
 *
 * Note that a `generic: true` section short-circuits the filter before it looks
 * at the link at all - `if (section.generic) return section` - so adding
 * `boardType` to THIS entry changes nothing, and a mutation that did so passed.
 * The mutation that bites is moving the entry into a scoped section, which is
 * the mistake somebody would actually make.
 *
 * The label reuses `sitemap.h1` - the page's own heading, already translated
 * into English, Arabic and Spanish - rather than adding a key that would need
 * the locale generator run and three more strings kept in step.
 *
 * MUTATIONS RUN, each verified to have altered the file first: removing the
 * footer entry fails 2 of the 3; moving it into the board-scoped Revision
 * section fails the one that matters.
 */

vi.mock('@/hooks/useBoard', () => ({ useBoard: () => ({ board: null, isHydrated: false }) }))
vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

const { Footer } = await import('@/components/layout/footer')

describe('the HTML sitemap is reachable from every page', () => {
  it('the page it points at exists', () => {
    // Vacuity guard: a footer link to a 404 is worse than no link.
    expect(existsSync('src/app/sitemap-html/page.tsx')).toBe(true)
  })

  it('the footer renders a link to it for a visitor with no board', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link') as HTMLAnchorElement[]
    const hrefs = links.map((a) => a.getAttribute('href'))

    // Vacuity guard: if the footer rendered nothing, "contains the link" would
    // be the only assertion failing and the reason would be unclear.
    expect(hrefs.length).toBeGreaterThan(30)
    expect(hrefs).toContain('/help')

    expect(
      hrefs,
      'A crawler has no board cookie and never hydrates, so a link in a ' +
        'board-scoped footer section is invisible to it. Keep this one in a ' +
        'section marked `generic: true`.',
    ).toContain('/sitemap-html')
  })

  it('and it is labelled with the page’s own heading, in all three locales', () => {
    const dict = readFileSync('src/lib/i18n/dictionary-public-a.ts', 'utf8')
    const footer = readFileSync('src/components/layout/footer.tsx', 'utf8')
    expect(footer).toMatch(/href: '\/sitemap-html', labelKey: 'sitemap\.h1'/)
    // The counterweight: pointing labelKey at a key with no ar/es would ship
    // an English word into the Arabic footer, which the i18n gate would not
    // catch because the key exists.
    const entry = /'sitemap\.h1': \{([^}]*)\}/.exec(dict)?.[1] ?? ''
    expect(entry).toMatch(/\ben:/)
    expect(entry).toMatch(/\bar:/)
    expect(entry).toMatch(/\bes:/)
  })
})
