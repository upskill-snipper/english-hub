import { describe, it, expect, vi, beforeEach } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'

import { ExamPlacementCard } from '@/components/revision/exam-placement-card'
import { boardSetsText } from '@/lib/board/board-sets-text'
import { readerNotice } from '@/lib/board/exam-placement'
import { textAvailableForBoard } from '@/lib/board/set-texts'

// The card reads the reader's board from the english-hub-board cookie.
const reader = vi.hoisted(() => ({ board: undefined as string | undefined }))
vi.mock('next/headers', () => ({
  headers: async () => ({ get: () => null }),
  cookies: async () => ({
    get: (name: string) =>
      name === 'english-hub-board' && reader.board ? { value: reader.board } : undefined,
  }),
}))

/**
 * Every set-text page says which board and series sets the text.
 *
 * THE DEFECT, seen on the live site on 23 October 2026. The placement card
 * (src/components/revision/exam-placement-card.tsx) prints every verified
 * placement for a text, every held Cambridge 0475 series among them with a
 * "Not set for the ... series." note, and says plainly when nothing has been
 * checked. The catch-all route rendered it. The 32 hand-built guides that
 * render TextGuide did not, so An Inspector Calls showed no Cambridge 2028
 * placement although exam-placement.ts holds it, and Macbeth showed nothing
 * of its Pearson 4ET1 placement. The 56 generated and placeholder pages did
 * show the card, but only because their shared layouts (FullStudyGuide,
 * StubStudyGuide) rendered it on their behalf; no test pinned that, and the
 * TextGuide pages simply never had it.
 *
 * THE RULE. Every page under src/app/revision/texts/<slug>/ names its own card,
 * with its own slug, and hands it to its layout as `placement`. The layouts
 * require that prop, so a page without it does not compile; this test catches
 * what the compiler cannot: a card carrying a neighbour's slug, a card
 * rendered twice, and a layout that accepts the card and never shows it.
 *
 * A directory with no page.tsx of its own (antony-and-cleopatra, disabled and
 * others that hold only a /read route) is served by the catch-all, which is
 * checked last.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')

/**
 * Source with comments removed, so a card quoted in a docblock does not count.
 * Line comments are stripped only where `//` is not part of a URL.
 */
function code(file: string): string {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/**
 * Directories that are text pages. `[slug]` is the catch-all and `_components`
 * is a private folder of shared layouts; neither is a text.
 */
const PAGES = readdirSync(TEXTS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
  .map((d) => ({ slug: d.name, file: join(TEXTS, d.name, 'page.tsx') }))
  .filter((p) => existsSync(p.file))

/** Each `<ExamPlacementCard ... />` in the file, with the slug it passes, if literal. */
function cards(src: string): { tag: string; slug: string | null }[] {
  return [...src.matchAll(/<ExamPlacementCard\b[^>]*>/g)].map(([tag]) => ({
    tag,
    slug: /\bslug=(?:"([^"]+)"|\{\s*'([^']+)'\s*\})/.exec(tag)?.slice(1).find(Boolean) ?? null,
  }))
}

describe('every text page shows where the text is examined', () => {
  it('finds the pages, so a green result means something', () => {
    // 88 on 23 October 2026. A broken directory filter would pass vacuously.
    expect(PAGES.length).toBeGreaterThanOrEqual(80)
  })

  it('renders exactly one placement card, carrying the page’s own slug', () => {
    const offenders: string[] = []
    for (const { slug, file } of PAGES) {
      const found = cards(code(file))
      if (found.length === 0) {
        offenders.push(`${slug}: no <ExamPlacementCard />`)
      } else if (found.length > 1) {
        offenders.push(`${slug}: ${found.length} placement cards`)
      } else if (found[0]!.slug !== slug) {
        offenders.push(`${slug}: card passes ${found[0]!.slug ?? 'a non-literal slug'}`)
      }
    }
    expect(offenders, `${offenders.length} text pages:\n  ${offenders.join('\n  ')}`).toEqual([])
  })
})

describe('the layouts show the card they are given, and only that one', () => {
  // If a layout dropped `{placement}`, every page above would still pass and
  // no page would show a card. If one rendered its own card as well, pages
  // would show two.
  it.each([
    'src/app/revision/texts/_components/text-guide.tsx',
    'src/app/revision/texts/_components/full-study-guide.tsx',
    'src/app/revision/texts/_components/stub-study-guide.tsx',
  ])('%s', (rel) => {
    const src = code(join(ROOT, rel))
    expect(src.match(/\{placement\}/g) ?? [], `${rel} never renders {placement}`).toHaveLength(1)
    expect(src, `${rel} renders a card of its own`).not.toMatch(/<ExamPlacementCard\b/)
  })
})

describe('a text with no page of its own still gets the card', () => {
  it('because the catch-all renders it for whatever slug it serves', () => {
    const catchAll = code(join(TEXTS, '[slug]', 'page.tsx'))
    expect(catchAll).toContain('<ExamPlacementCard slug={text.slug} />')
  })
})

/**
 * WHAT THE CARD SAYS ABOUT THE READER'S OWN BOARD, rendered.
 *
 * Found on 24 October 2026, the day after the card reached the 32 TextGuide
 * pages. An AQA reader of Hamlet saw the rail say "Your board does not set this
 * text" and the card beside it say "We have not yet checked which paper this
 * text is on for your board", which takes for granted that AQA sets it; on a
 * phone the rail is in a closed drawer, so the card's sentence was all they
 * saw. Henry V, which no board we cover sets, said the same. And an AQA reader
 * of An Inspector Calls got Pearson and Cambridge cards and silence about AQA.
 * Separately, a Cambridge reader of An Inspector Calls was told by the rail it
 * is not on their course while the card listed it for 2028.
 */
const NOT_CHECKED = 'We have not yet checked which paper this text is on for your board'
const OFF_BOARD = 'Your board does not set this text.'
const NO_BOARD = 'None of the exam boards we cover sets this text.'

async function card(slug: string, board?: string): Promise<string> {
  reader.board = board
  return renderToStaticMarkup(await ExamPlacementCard({ slug }))
}

describe('the card says which nothing it knows', () => {
  beforeEach(() => {
    reader.board = undefined
  })

  it('tells an AQA reader of Hamlet that AQA does not set it, not that it is unchecked', async () => {
    expect(textAvailableForBoard('hamlet', 'aqa')).toBe(false)
    const html = await card('hamlet', 'aqa')
    expect(html).toContain(OFF_BOARD)
    expect(html).not.toContain(NOT_CHECKED)
  })

  it('tells anyone reading Henry V that no board we cover sets it', async () => {
    for (const board of [undefined, 'aqa', 'cambridge-0475']) {
      const html = await card('henry-v', board)
      expect(html, String(board)).toContain(NO_BOARD)
      expect(html, String(board)).not.toContain(NOT_CHECKED)
    }
  })

  it('names the board when it sets the text and its paper is unread', async () => {
    // Hamlet is on the Edexcel IAL list; no IAL placement has been read.
    expect(await card('hamlet', 'ial-edexcel')).toContain(
      'We have not yet checked which Edexcel IAL paper this text is on',
    )
    // With no board chosen there is nobody to name.
    expect(await card('hamlet')).toContain(NOT_CHECKED)
  })

  it('tells an AQA reader of An Inspector Calls about AQA, beside the boards it has read', async () => {
    const html = await card('an-inspector-calls', 'aqa')
    expect(html).toContain('We have not yet checked which AQA paper this text is on')
    expect(html).not.toContain(OFF_BOARD)
    // The other boards' cards are still there.
    expect(html).toContain('Edexcel IGCSE Literature (4ET1)')
    expect(html).toContain('Cambridge Literature (0475)')
  })

  it('says nothing extra when the reader’s own board has a card', async () => {
    for (const board of ['edexcel-igcse', 'cambridge-0475']) {
      const html = await card('an-inspector-calls', board)
      for (const sentence of [NOT_CHECKED, OFF_BOARD, NO_BOARD, 'We have not yet checked which']) {
        expect(html, `${board}: ${sentence}`).not.toContain(sentence)
      }
    }
  })

  it('prints the series and the not-set note on lines of their own', async () => {
    const html = await card('an-inspector-calls', 'cambridge-0475')
    expect(html).toContain('>For the exam series 2028<')
    expect(html).toContain('>Not set for the 2026 or 2027 series.<')
    expect(html).not.toContain('Drama Not set')
  })

  it('never calls a slug off-board that the register does not hold', () => {
    expect(readerNotice('not-a-text-we-hold', 'aqa', [])).toEqual({ kind: 'not-checked' })
  })
})

describe('the rail and the card share one off-board test', () => {
  it('asks every held Cambridge series, not the 2027 shelf', () => {
    // 2028 drama texts: off the 2027 shelf, on a held series.
    for (const slug of ['an-inspector-calls', 'the-tempest']) {
      expect(textAvailableForBoard(slug, 'cambridge-0475'), slug).toBe(false)
      expect(boardSetsText(slug, 'cambridge-0475'), slug).toBe(true)
    }
    // A 2026 prose text, likewise.
    expect(boardSetsText('the-war-of-the-worlds', 'cambridge-0475')).toBe(true)
    // The counterweight: a text no held series sets is still off-board.
    expect(boardSetsText('macbeth', 'cambridge-0475')).toBe(false)
    expect(boardSetsText('hamlet', 'aqa')).toBe(false)
    expect(boardSetsText('macbeth', 'aqa')).toBe(true)
  })

  it('and the rail uses it', () => {
    const rail = code(join(ROOT, 'src/app/revision/_components/text-scoped-nav.tsx'))
    expect(rail).toContain('boardSetsText(canonical, board)')
  })
})
