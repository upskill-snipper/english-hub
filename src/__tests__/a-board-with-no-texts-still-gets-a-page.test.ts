import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'

/**
 * The set-text index promised texts to boards that have none.
 *
 * Found by measuring, not by report. After fixing the teacher mark-scheme
 * library you reported, I fetched all 1,301 pages with the board set to KS3 and
 * compared how much readable text each rendered against its best board.
 * /revision/texts came back at 51 per cent, and it turned out to be the same
 * shape: heading "Your KS3 Set Texts", a promise of "in-depth study guides for
 * every set text on your KS3 exam board", then a magnifying glass and "No texts
 * found".
 *
 * IT WAS NOT WRONG, WHICH IS WHY IT SURVIVED. The small print underneath did
 * say KS3 has no prescribed texts. But the heading two lines above claimed the
 * opposite, and there was no route onward - a KS3 student who wanted to read
 * Macbeth was shown an empty search result and left there.
 *
 * TWO CHANGES. The page no longer says "Your <board> Set Texts" when none of
 * them are; and when a board prescribes nothing it is given the whole library
 * rather than an empty list, so the reader can still go and read something.
 *
 * The wording matters too. "has no prescribed literature texts in our database
 * yet" says this is a gap we intend to fill. It is not: KS3 and the Cambridge
 * first-language syllabuses set no literature texts by design, and telling a
 * student to wait for something that is never coming is its own small untruth.
 */

const ROOT = process.cwd()
const PAGE = readFileSync(join(ROOT, 'src/app/revision/texts/page.tsx'), 'utf8')
const VIEW = readFileSync(join(ROOT, 'src/app/revision/texts/texts-view.tsx'), 'utf8')

/** The boards that prescribe nothing, from the data rather than a list here. */
const EMPTY_BOARDS = BOARDS.filter((b) => getSetTextsForBoard(b.id).length === 0).map((b) => b.id)

describe('which boards this is about', () => {
  it('there are some, so the change is not theoretical', () => {
    expect(EMPTY_BOARDS.length).toBeGreaterThan(0)
  })

  it('KS3 is one of them', () => {
    expect(EMPTY_BOARDS).toContain('ks3')
  })

  it('and most boards are not, so the normal path still matters', () => {
    // The counterweight: if every board came back empty the assertions below
    // would be describing the whole site rather than an edge.
    expect(EMPTY_BOARDS.length).toBeLessThan(BOARDS.length / 2)
    expect(getSetTextsForBoard('aqa').length).toBeGreaterThan(10)
  })
})

describe('a board that prescribes nothing is given the library', () => {
  it('the page falls back to every text rather than an empty list', () => {
    expect(PAGE).toContain('boardOwnTexts.length > 0 ? boardOwnTexts : SET_TEXTS')
  })

  it('and tells the view which case it is in', () => {
    expect(PAGE).toContain('boardPrescribesNone={boardOwnTexts.length === 0}')
  })

  it('there is a library to fall back to', () => {
    expect(SET_TEXTS.length).toBeGreaterThan(100)
  })
})

describe('the heading stops claiming the texts are yours', () => {
  it('the title is conditional', () => {
    expect(VIEW).toContain("boardPrescribesNone ? 'Set Texts' : `Your ${boardName} Set Texts`")
  })

  it('and so is the promise underneath it', () => {
    // "study guides for every set text on your board" over a list that is not
    // your board's is the same false claim in the body copy.
    expect(VIEW).toContain('prescribes no set literature texts, so there is nothing here that is')
    expect(VIEW).toMatch(/boardPrescribesNone \? \(/)
  })

  it('the reader is told they can still read them', () => {
    expect(VIEW).toContain('you can read any of them')
  })
})

describe('the wording distinguishes a gap from a fact', () => {
  it('no longer says the texts are missing from our database', () => {
    // That phrasing promises something that is never coming.
    expect(VIEW).not.toContain('in our database yet')
  })

  it('and says the board prescribes none', () => {
    expect(VIEW).toContain('prescribes no set literature texts.')
  })
})

describe('the default is unchanged for a board that does have texts', () => {
  it('boardPrescribesNone defaults to false', () => {
    // A missing prop must not silently turn every board into the empty case,
    // which would replace one wrong page with a worse one.
    expect(VIEW).toContain('boardPrescribesNone = false')
  })

  it('and the original copy is still there for them', () => {
    expect(VIEW).toContain('In-depth study guides for every set text on your')
  })
})
