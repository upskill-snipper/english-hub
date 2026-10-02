/**
 * Choosing a course on the IGCSE or A-level hub saves it as the board.
 *
 * THE DEFECT (2 October 2026). Both hubs' cards were plain links. A visitor
 * with no board chose "Pearson Edexcel" on /igcse and the very next page opened
 * under a full-screen "Which exam board do you study?" modal, and so did every
 * page after it, the texts included. Confirmed on production for /igcse to
 * /igcse/edexcel and for /a-level to /a-level/aqa. The IGCSE hub also called
 * Cambridge 0500 "IGCSE Language A", the name of Pearson Edexcel's 4EA1, which
 * had no card of its own.
 *
 * This renders both pages, with only the locale lookup and the board reader
 * stubbed (neither decides an href), and reads the anchors. The expected links
 * are written out by hand. It also checks every id against BOARDS, because the
 * middleware drops an unknown setBoard without a word: a misspelt id would
 * bring the defect back and every other assertion here would still pass.
 */
import { describe, it, expect, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import type { ReactElement } from 'react'
import { BOARDS } from '@/lib/board/board-config'

vi.mock('@/lib/i18n/t', () => ({
  t: async (key: string) => key,
  tMany: async (keys: string[]) => keys,
}))
vi.mock('@/lib/board/get-server-board', () => ({
  getServerBoard: async () => null,
}))

import IgcseHubPage from '@/app/igcse/page'
import ALevelHubPage from '@/app/a-level/page'

async function render(page: () => Promise<unknown>): Promise<string> {
  return renderToStaticMarkup((await page()) as ReactElement)
}

/** Every link on the page that saves a board, in page order. */
function savingLinks(markup: string): string[] {
  return [...markup.matchAll(/href="([^"]*setBoard=[^"]*)"/g)].map((m) =>
    m[1]!.replace(/&amp;/g, '&'),
  )
}

const boardOf = (href: string) => new URLSearchParams(href.split('?')[1] ?? '').get('setBoard')

/**
 * A card title: the awarding body, then the label key the stubbed lookup
 * returns, with whatever spacing or text-node markers React puts between them.
 * The label must end there, so "language" cannot match "language_a".
 */
const title = (body: string, labelKey: string) =>
  new RegExp(`${body}(?:<!-- -->|\\s)+${labelKey.replace(/\./g, '\\.')}(?=<)`)

describe('the IGCSE hub, for a visitor with no board', () => {
  it('offers the four IGCSE courses, each saving its own board', async () => {
    expect(savingLinks(await render(IgcseHubPage))).toEqual([
      '/igcse/edexcel?setBoard=edexcel-igcse',
      '/igcse/edexcel-lang?setBoard=edexcel-igcse-lang',
      '/igcse/cambridge/0500?setBoard=cambridge-0500',
      '/igcse/cambridge/0990?setBoard=cambridge-0990',
    ])
  })

  it('names each card by its awarding body and code, beside its own link', async () => {
    // The old "IGCSE Language A" card led to Cambridge 0500. Each card is read
    // as a unit: title, code and description, then its link, each after the
    // previous card's link.
    const markup = await render(IgcseHubPage)
    const cards: [heading: RegExp, code: string, description: string, link: string][] = [
      [
        title('Pearson Edexcel', 'board.paper.literature'),
        '4ET1',
        'board.paper_subtitle.edexcel_igcse_lit',
        'setBoard=edexcel-igcse"',
      ],
      [
        title('Pearson Edexcel', 'board.paper.language'),
        '4EA1',
        'board.paper_subtitle.edexcel_igcse_lang',
        'setBoard=edexcel-igcse-lang"',
      ],
      [
        title('Cambridge', 'board.paper.language_a'),
        '0500',
        'board.paper_subtitle.cambridge_0500',
        'setBoard=cambridge-0500"',
      ],
      [
        title('Cambridge', 'board.paper.language_b'),
        '0990',
        'board.paper_subtitle.cambridge_0990',
        'setBoard=cambridge-0990"',
      ],
    ]
    let from = 0
    for (const [heading, code, description, link] of cards) {
      const rest = markup.slice(from)
      const t = rest.search(heading)
      expect(t, `title ${heading}`).toBeGreaterThan(-1)
      const c = rest.indexOf(`>${code}<`, t)
      const d = rest.indexOf(description, c)
      const l = rest.indexOf(link, d)
      expect(c, `code ${code}`).toBeGreaterThan(t)
      expect(d, `description ${description}`).toBeGreaterThan(c)
      expect(l, `link ${link}`).toBeGreaterThan(d)
      from += l + link.length
    }
  })
})

describe('the A-level hub', () => {
  it('each "Choose your exam board" card saves its A-level board', async () => {
    expect(savingLinks(await render(ALevelHubPage))).toEqual([
      '/a-level/aqa?setBoard=aqa-a-level',
      '/a-level/edexcel?setBoard=edexcel-a-level',
      '/a-level/ocr?setBoard=ocr-a-level',
      '/a-level/eduqas?setBoard=eduqas-a-level',
    ])
  })
})

describe('every board a hub card saves exists', () => {
  const ids = BOARDS.map((b) => b.id) as readonly string[]

  it.each([
    ['/igcse', IgcseHubPage],
    ['/a-level', ALevelHubPage],
  ] as const)('%s', async (_path, page) => {
    const links = savingLinks(await render(page))
    expect(links.length).toBeGreaterThan(0)
    for (const href of links) expect(ids).toContain(boardOf(href))
  })
})
