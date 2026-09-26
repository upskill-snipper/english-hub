/**
 * What /board-select actually renders, read from the page's HTML.
 *
 * 26 September 2026. The picker's cards were built as
 * `/set-texts/<id>?setBoard=<id>` and then rewritten, inside the page, to
 * `/revision?setBoard=<id>` before they were rendered. Every test that guarded
 * the landing rule read the source - the card arrays, or the name of the
 * function the page called - so all of them passed while no student who chose
 * a board here reached their set texts.
 *
 * So this renders the real page component, with only the locale lookup and the
 * geo banner stubbed (neither decides an href), and reads the hrefs off the
 * anchors. It fails if the page stops using boardSelectCardHref, if something
 * after that call rewrites the href, or if the helper itself goes wrong. The
 * expected links are written out by hand rather than computed with
 * boardLandingHref or the helper, so a mistake in either cannot agree with
 * itself here.
 */
import { describe, it, expect, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import type { ReactElement } from 'react'

vi.mock('@/lib/i18n/t', () => ({
  tMany: async (keys: string[]) => keys,
}))
vi.mock('@/lib/geo/gcc', () => ({
  isMuslimMajorityVisitor: async () => false,
}))

import BoardSelectPage from '@/app/board-select/page'

const SITE = 'https://theenglishhub.app'

/** Every card href on the rendered page, in page order. */
async function cardHrefs(params: Record<string, string | string[] | undefined>) {
  const tree = (await BoardSelectPage({ searchParams: Promise.resolve(params) })) as ReactElement
  const html = renderToStaticMarkup(tree)
  // The cards are the anchors carrying the card class; the only other link is
  // "back to homepage".
  const hrefs = [...html.matchAll(/<a\b[^>]*>/g)]
    .map((m) => m[0])
    .filter((tag) => tag.includes('group relative flex h-full'))
    .map((tag) => /href="([^"]*)"/.exec(tag)?.[1] ?? '')
    .map((href) => href.replace(/&amp;/g, '&'))
  return hrefs
}

// KS3, GCSE (4), IGCSE (3), EAL - the order the page renders them.
const IDS = [
  'ks3',
  'aqa',
  'edexcel',
  'ocr',
  'eduqas',
  'cambridge-0500',
  'edexcel-igcse',
  'edexcel-igcse-lang',
]

const LANDING = [
  '/ks3?setBoard=ks3',
  '/set-texts/aqa?setBoard=aqa',
  '/set-texts/edexcel?setBoard=edexcel',
  '/set-texts/ocr?setBoard=ocr',
  '/set-texts/eduqas?setBoard=eduqas',
  '/igcse/cambridge/0500?setBoard=cambridge-0500',
  '/set-texts/edexcel-igcse?setBoard=edexcel-igcse',
  '/set-texts/edexcel-igcse-lang?setBoard=edexcel-igcse-lang',
  '/eal',
]

describe('/board-select as rendered', () => {
  it('with no next, every card links to its own landing page and EAL to /eal', async () => {
    // The normal way in. This is the case that rendered /revision?setBoard=<id>
    // for every card.
    expect(await cardHrefs({})).toEqual(LANDING)
  })

  it('with a next from the board gate, every card goes back there and sets its board', async () => {
    // The gate builds next from the path and its query; setBoard has to join
    // that query, not start a second one, or the middleware never sees it.
    expect(await cardHrefs({ next: '/dashboard/teacher?tab=classes' })).toEqual([
      ...IDS.map((id) => `/dashboard/teacher?tab=classes&setBoard=${id}`),
      '/eal',
    ])
  })

  it.each([
    'https://evil.example',
    '//evil.example',
    '/\\evil.example',
    'javascript:alert(1)',
    '%2F%2Fevil.example',
    '/%2F/evil.example',
    '/..//evil.example',
    '/.//evil.example',
    '/a/..//evil.example',
  ])('an unsafe next, %j, leaves every card on its landing page', async (next) => {
    const hrefs = await cardHrefs({ next })
    expect(hrefs).toEqual(LANDING)
    for (const href of hrefs) {
      expect(new URL(href, `${SITE}/board-select`).origin).toBe(SITE)
    }
  })

  it('a repeated next is treated as no next', async () => {
    expect(await cardHrefs({ next: ['/dashboard', '/marking'] })).toEqual(LANDING)
  })
})
