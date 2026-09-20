import { describe, it, expect } from 'vitest'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * Five specifications nobody had read, and a text on three A-Level lists that
 * is on none of them.
 *
 * REPORTED BY CALUM: "There are others which I don't think are even on that
 * exam board as a set text."
 *
 * He was right, and the codebase already suspected it. `prescribed-texts.ts`
 * recorded that Edexcel IAL and the four UK A-Levels were unverified, and that
 * the four A-Level boards carried "a byte-identical nine-text tag array, which
 * is the signature of blanket tagging rather than four researched lists". Nine
 * texts, four awarding bodies with different component structures, one array.
 *
 * READ ON 20 SEPTEMBER 2026, one agent per board against the awarding bodies'
 * own specification PDFs, with every proposed change then handed to a second
 * agent instructed to REFUTE it and to treat an unreachable or third-party
 * source as a refusal. 54 changes were proposed across all fifteen boards and
 * 6 were refuted - every one of them for confusing two qualifications, which is
 * exactly the error the whole exercise is about. Of the 48 that survived, 32
 * fell on the five A-Level and IAL lists: 24 texts added, 8 removed.
 *
 * ANTONY AND CLEOPATRA is the one to remember. It was tagged to AQA A-Level,
 * OCR A-Level and Edexcel IAL. It is on none of them. A student revising it for
 * any of those three was revising a play their paper would not ask about.
 *
 * EDEXCEL IAL was the worst list: six texts removed, more than any other board,
 * including Jane Eyre and Pride and Prejudice.
 *
 * WHAT THESE TESTS ARE FOR. Not to re-prove the specifications - the evidence
 * lives in the commit, quoting each document and its page. They pin the
 * individual corrections so that a regression names the text that broke rather
 * than reporting a set difference, which is the house style here for exactly
 * this reason.
 *
 * MUTATION RUN, verified to have altered the file first: restoring
 * antony-and-cleopatra to its three original A-Level boards fails 3 of these.
 */

const boardsOf = (slug: string): string[] => {
  const t = SET_TEXTS.find((x) => x.slug === slug)
  expect(t, `${slug} has vanished from the data`).toBeTruthy()
  return t!.boards
}

describe('texts that were tagged to boards that do not prescribe them', () => {
  const removals: [string, string][] = [
    ['antony-and-cleopatra', 'aqa-a-level'],
    ['antony-and-cleopatra', 'ocr-a-level'],
    ['antony-and-cleopatra', 'ial-edexcel'],
    ['the-waste-land', 'aqa-a-level'],
    ['the-waste-land', 'ial-edexcel'],
    ['the-great-gatsby', 'edexcel-a-level'],
    ['the-great-gatsby', 'ial-edexcel'],
    ['a-dolls-house', 'edexcel-a-level'],
    ['a-dolls-house', 'eduqas-a-level'],
    ['a-dolls-house', 'ial-edexcel'],
    ['a-streetcar-named-desire', 'ocr-a-level'],
    ['jane-eyre', 'ial-edexcel'],
    ['pride-and-prejudice', 'ial-edexcel'],
  ]

  it.each(removals)('%s is no longer tagged to %s', (slug, board) => {
    expect(boardsOf(slug)).not.toContain(board)
  })

  it('but none of them has been deleted from the catalogue', () => {
    // Removing the text rather than the wrong tag would be a worse fix: every
    // one of these is a real set text on some other board.
    for (const [slug] of removals) {
      expect(
        SET_TEXTS.some((t) => t.slug === slug),
        `${slug} was deleted`,
      ).toBe(true)
    }
  })
})

describe('texts that were prescribed and not tagged', () => {
  const additions: [string, string][] = [
    ['jane-eyre', 'aqa-a-level'],
    ['journeys-end', 'aqa-a-level'],
    ['oranges-are-not-the-only-fruit', 'aqa-a-level'],
    ['twelfth-night', 'edexcel-a-level'],
    ['frankenstein', 'edexcel-a-level'],
    ['never-let-me-go', 'edexcel-a-level'],
    ['the-tempest', 'ocr-a-level'],
    ['jane-eyre', 'ocr-a-level'],
    ['oranges-are-not-the-only-fruit', 'ocr-a-level'],
    ['the-tempest', 'eduqas-a-level'],
    ['othello', 'ial-edexcel'],
    ['twelfth-night', 'ial-edexcel'],
    ['never-let-me-go', 'ial-edexcel'],
  ]

  it.each(additions)('%s is now tagged to %s', (slug, board) => {
    expect(boardsOf(slug)).toContain(board)
  })
})

describe('the GCSE poems a student could not find', () => {
  // These are the anthology poems. They were in the catalogue with an IGCSE tag
  // and no UK GCSE tag, so an AQA student searching for My Last Duchess - which
  // is printed in full on their own Paper 2 - found it on no shelf.
  const poems: [string, string][] = [
    ['my-last-duchess', 'aqa'],
    ['war-photographer', 'aqa'],
    ['my-last-duchess', 'edexcel'],
    ['la-belle-dame-sans-merci', 'edexcel'],
    ['half-caste', 'edexcel'],
    ['out-out', 'ocr'],
  ]

  it.each(poems)('%s is now on the %s shelf', (slug, board) => {
    expect(boardsOf(slug)).toContain(board)
  })

  it('and Eduqas is deliberately not among them', () => {
    // Two Eduqas poems were verified to the same standard and held back on
    // purpose: both were read off the anthology "for assessment from 2027",
    // and the cohort sitting in summer 2026 uses a different one with no poem
    // in common. Tagging them now would be right for one cohort and wrong for
    // the one that sits the exam first.
    expect(boardsOf('disabled')).not.toContain('eduqas')
    expect(boardsOf('war-photographer')).not.toContain('eduqas')
  })
})

describe('the shape of the fix', () => {
  it('every board still has a shelf worth visiting', () => {
    // The counterweight to thirteen removals: a correction that emptied a board
    // would satisfy every "no longer tagged" assertion above.
    for (const board of [
      'aqa-a-level',
      'edexcel-a-level',
      'ocr-a-level',
      'eduqas-a-level',
      'ial-edexcel',
    ] as const) {
      const shelf = SET_TEXTS.filter((t) => t.boards.includes(board))
      expect(shelf.length, `${board} has almost nothing left`).toBeGreaterThan(5)
    }
  })

  it('and no text has been left with no board by this change', () => {
    // Seven texts carry no board and that is a separate, known gap. This asserts
    // the number has not GROWN, which is what a careless removal would do.
    const orphans = SET_TEXTS.filter((t) => t.boards.length === 0)
    expect(orphans.length, `now ${orphans.map((t) => t.slug).join(', ')}`).toBeLessThanOrEqual(7)
  })
})
