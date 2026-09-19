import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'

/**
 * The teacher mark-scheme library served four boards an empty page.
 *
 * REPORTED FROM THE LIVE SITE: "This page does not work or show anything
 * relevant, even says KS3."
 *
 * The page held sixteen reference cards and filtered them to the reader's
 * board. Nothing in the list matches KS3 or any of the three Cambridge
 * syllabuses, so those four boards got the heading, the promise of
 * "quick-reference cards for every major GCSE English exam board", a badge
 * reading "For KS3", and then nothing.
 *
 * AND IT BROKE TWELVE LINKS. The marking hub deep-links to all sixteen cards by
 * anchor. An anchor only exists on a card that renders, so an AQA reader
 * following an Edexcel link arrived here and jumped nowhere - which looks
 * exactly like the dead href="#" that deep-linking was introduced to fix.
 *
 * WHY THE EXISTING TEST DID NOT CATCH IT, which is the part worth keeping.
 * marking-hub-links-go-somewhere.test.ts reads the MARK_SCHEMES array out of
 * the page source and checks every hub link against it. That proves the list
 * and the links agree. It says nothing about what a reader is served, because
 * the filter runs at request time against a cookie the test never sets. A check
 * that proves configuration rather than function.
 *
 * So this file asserts the thing that was actually wrong: that no card is
 * removed from the render for any reason, which is the only way every anchor
 * exists on every request.
 */

const ROOT = process.cwd()
const PAGE = readFileSync(
  join(ROOT, 'src/app/resources/teacher-library/mark-schemes/page.tsx'),
  'utf8',
)
const CODE = PAGE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

/**
 * Every card title declared on the page.
 *
 * Scoped to the MARK_SCHEMES array: the page's `metadata` block also has a
 * `title` at the same indentation, so an unscoped match counts seventeen cards
 * and the count assertion below becomes nonsense in the quiet direction.
 */
const ARRAY_SRC = PAGE.slice(
  PAGE.indexOf('const MARK_SCHEMES = ['),
  PAGE.indexOf('function MarkSchemeCards'),
)
const TITLES = [...ARRAY_SRC.matchAll(/^ {4}title: '([^']+)',$/gm)].map((m) => m[1])

describe('the cards', () => {
  it('there are sixteen of them', () => {
    expect(TITLES.length).toBe(16)
  })

  it('cover the four UK GCSE boards', () => {
    for (const board of ['AQA', 'Edexcel', 'OCR', 'Eduqas']) {
      expect(
        TITLES.some((t) => t.startsWith(board)),
        `no card for ${board}`,
      ).toBe(true)
    }
  })
})

describe('nothing is hidden from the render any more', () => {
  it('both groups together are the whole list', () => {
    // `mine` and `others` partition MARK_SCHEMES, and the second group falls
    // back to the whole list when the board matches none of it. Either way
    // every card renders, so every anchor exists.
    expect(CODE).toContain('const others = MARK_SCHEMES.filter((m) => !mine.includes(m))')
    expect(CODE).toContain('items={boardHasCards ? others : MARK_SCHEMES}')
  })

  it('and the old filtered render is gone', () => {
    // The whole defect in one line: a single grid fed a board-filtered array.
    expect(CODE).not.toMatch(/\{visible\.map\(/)
    expect(CODE).not.toContain('const visible =')
  })

  it('every card still carries its anchor', () => {
    expect(CODE).toContain('id={markSchemeAnchor(m.title)}')
    expect(CODE).toContain('scroll-mt-24')
  })
})

describe('a board we hold no cards for is told so', () => {
  it('the page says it rather than rendering an empty grid', () => {
    expect(CODE).toMatch(/!boardHasCards && mine\.length === 0/)
    expect(PAGE).toContain('We do not have reference cards for')
  })

  it('and the "For <board>" badge only shows when it is true', () => {
    // It read "For KS3" over an empty page. A badge is a claim about relevance
    // and that one could not be kept.
    expect(CODE).toMatch(/boardConfig && boardHasCards &&/)
  })

  it('boardHasCards requires the board to narrow the list, not just exist', () => {
    expect(CODE).toContain('Boolean(board) && mine.length > 0 && others.length > 0')
  })
})

describe('the anchors the marking hub depends on', () => {
  const HUB = readFileSync(join(ROOT, 'src/app/marking/page.tsx'), 'utf8')
  const linked = [...HUB.matchAll(/guideHref\('([^']+)'\)/g)].map((m) => m[1])

  it('the hub links to a realistic number of cards', () => {
    expect(linked.length).toBeGreaterThanOrEqual(12)
  })

  it('every hub link names a card on this page', () => {
    const anchors = new Set(TITLES.map(markSchemeAnchor))
    const broken = linked.filter((t) => !anchors.has(markSchemeAnchor(t)))
    expect(broken).toEqual([])
  })

  it('and those cards are not board-specific to the reader, which is the fix', () => {
    // Before this change the hub linked to cards across all four boards while
    // the page showed one board's four. Twelve of the links could not land, and
    // which twelve depended on a cookie.
    const boardsLinked = new Set(linked.map((t) => t.split(' ')[0]))
    expect(boardsLinked.size).toBeGreaterThan(1)
  })
})

describe('a card that goes nowhere is not dressed as a link', () => {
  const CARD = readFileSync(join(ROOT, 'src/components/teacher/ResourceCard.tsx'), 'utf8')

  it('href is optional', () => {
    expect(CARD).toMatch(/href\?: string/)
  })

  it('and a card without one renders as a plain block', () => {
    expect(CARD).toContain('if (!href) return <div className={classes}>{body}</div>')
  })

  it('with no "Open" affordance', () => {
    // Every mark-scheme card used to link to the page it was already on, under
    // a label reading Open with an arrow. The click reloaded the same page.
    expect(CARD).toMatch(/\{href && \(/)
    expect(CODE).not.toMatch(/href="\/resources\/teacher-library\/mark-schemes"\s*\/>/)
  })
})

describe('the board map covers every board', () => {
  it('so no board falls through to an undefined label', () => {
    // markSchemeMatchesBoard indexes a Record<ExamBoard, string>. A board added
    // to the register without a row here would read `undefined` and throw on
    // .toLowerCase().
    for (const b of BOARDS) {
      // Prettier drops the quotes on ids that are valid identifiers, so `ks3:`
      // and `'edexcel-igcse':` both appear. Accepting one spelling only would
      // fail on five boards that are correctly present.
      const quoted = CODE.includes(`'${b.id}':`)
      const bare = new RegExp(`^\\s*${b.id}:`, 'm').test(CODE)
      expect(quoted || bare, `${b.id} is not in the board map`).toBe(true)
    }
  })
})
