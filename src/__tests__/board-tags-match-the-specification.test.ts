import { describe, it, expect } from 'vitest'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { PRESCRIBED, prescribedTitles, isVerifiedBoard } from '@/lib/board/prescribed-texts'
import { BOARDS } from '@/lib/board/board-config'

/**
 * Our board tags against the awarding bodies' own specifications.
 *
 * THE DEFECT. Six texts were tagged to boards that do not examine them. AQA
 * students were shown Silas Marner, which appears nowhere in AQA's
 * specification, and Never Let Me Go, which AQA examined for the last time in
 * summer 2024. OCR students were shown The Tempest, Frankenstein and Lord of the
 * Flies, none of which OCR prescribes. Eduqas students were shown Henry V,
 * withdrawn after summer 2024. Two had been wrong for two exam cycles, on a
 * product that tells a child it knows their specification.
 *
 * There was also an inversion worth remembering: Never Let Me Go IS prescribed,
 * by OCR, and OCR was the one board we did not tag it to. Wrong data is not
 * always too generous.
 *
 * WHY IT HAPPENED. Not carelessness. Eduqas hosts a superseded, unversioned copy
 * of its own specification that still lists Henry V, Never Let Me Go and A Taste
 * of Honey, and it outranks the current file in search. Every Eduqas error we
 * held matched that file exactly. Two more stale primary documents were found
 * live on awarding-body domains during the same work. So the register this test
 * reads from records a version string and a read date for each specification,
 * and this test is what stops the data drifting away from it again.
 *
 * WHAT THIS TEST DOES NOT COVER, deliberately: anthology poems, and the ten
 * specifications whose documents have not been read. Asserting against
 * unverified lists would be the same mistake in a new place.
 */

/**
 * Specifications print the same book several ways. AQA writes "The Strange Case
 * of Dr Jekyll and Mr Hyde", Pearson writes "Dr Jekyll and Mr Hyde", and our
 * data carries Stevenson's full bibliographic title. None is wrong, so titles
 * are compared on a normalised form rather than exactly.
 */
function normalise(title: string): string {
  return title
    .toLowerCase()
    .replace(/^the strange case of /, '')
    .replace(/^strange case of /, '')
    .replace(/^the /, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

describe('every tag we hold is prescribed by the board we tag it to', () => {
  it.each(PRESCRIBED.map((p) => p.board))('%s', (board) => {
    const allowed = new Set(prescribedTitles(board)!.map(normalise))
    const wrong = SET_TEXTS.filter(
      (t) => t.boards.includes(board) && !allowed.has(normalise(t.title)),
    ).map((t) => t.title)
    expect(wrong, `tagged to ${board} but not on its specification`).toEqual([])
  })

  it('checks a meaningful number of tags, so the assertion is not vacuous', () => {
    const tagged = PRESCRIBED.flatMap((p) => SET_TEXTS.filter((t) => t.boards.includes(p.board)))
    expect(tagged.length).toBeGreaterThan(50)
  })
})

describe('the six that were wrong', () => {
  // Named individually, because a future edit that reintroduces any one of them
  // should fail with the text's own name rather than a set difference.
  const gone: [string, string][] = [
    ['silas-marner', 'aqa'],
    ['never-let-me-go', 'aqa'],
    ['the-tempest', 'ocr'],
    ['frankenstein', 'ocr'],
    ['lord-of-the-flies', 'ocr'],
    ['henry-v', 'eduqas'],
  ]

  it.each(gone)('%s is no longer tagged to %s', (slug, board) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text, `${slug} has vanished from the data`).toBeTruthy()
    expect(text!.boards).not.toContain(board)
  })

  it('still tags Never Let Me Go to OCR, which does prescribe it', () => {
    // The inversion. Removing the wrong tag without adding the right one would
    // have left an OCR student with no page for a text they sit.
    expect(SET_TEXTS.find((t) => t.slug === 'never-let-me-go')!.boards).toContain('ocr')
  })

  it('leaves Henry V with no board rather than a guessed one', () => {
    // No board we cover examines it at GCSE. It may sit on an A-Level list, but
    // the A-Level data is unverified, so guessing would repeat the original
    // mistake. The page stays; it simply appears on no shelf.
    expect(SET_TEXTS.find((t) => t.slug === 'henry-v')!.boards).toEqual([])
  })
})

describe('the title the specification prints', () => {
  it('is The Sign of Four, not The Sign of the Four', () => {
    expect(SET_TEXTS.find((t) => t.slug === 'the-sign-of-four')!.title).toBe('The Sign of Four')
  })
})

describe('what is still missing, recorded rather than asserted', () => {
  // These are real gaps in the product, not failures of the data model, so they
  // are pinned as counts. If a count falls, someone has written a guide and
  // should lower the number deliberately. If it rises, a text has been dropped.
  it.each([
    ['aqa', 6],
    ['edexcel', 7],
    ['ocr', 2],
    ['eduqas', 5],
  ])('%s is missing %i prescribed texts', (board, expected) => {
    const held = new Set(
      SET_TEXTS.filter((t) => t.boards.includes(board as never)).map((t) => normalise(t.title)),
    )
    const missing = prescribedTitles(board as never)!.filter((title) => !held.has(normalise(title)))
    expect(missing.length, `missing from ${board}: ${missing.join(', ')}`).toBe(expected)
  })
})

describe('the boards whose specification has not been read', () => {
  it('is eleven of the fifteen, and they are not silently treated as verified', () => {
    const unverified = BOARDS.filter((b) => !isVerifiedBoard(b.id)).map((b) => b.id)
    expect(unverified).toEqual([
      'ks3',
      'edexcel-igcse',
      'edexcel-igcse-lang',
      'cambridge-0500',
      'cambridge-0990',
      'cambridge-0475',
      'ial-edexcel',
      'aqa-a-level',
      'edexcel-a-level',
      'ocr-a-level',
      'eduqas-a-level',
    ])
  })

  it('still carries the blanket-tagged A-Level array, which is a known defect', () => {
    // Nine texts share a byte-identical five-board array across four awarding
    // bodies with different component structures. That is the signature of
    // blanket tagging, not of four researched lists. Pinned here so it is
    // visible in the suite until the four specifications are read, rather than
    // sitting silently in the data.
    const aLevel = SET_TEXTS.filter((t) => t.boards.includes('aqa-a-level'))
    expect(aLevel.length).toBe(9)
    const identical = aLevel.filter(
      (t) =>
        t.boards.includes('edexcel-a-level') &&
        t.boards.includes('ocr-a-level') &&
        t.boards.includes('eduqas-a-level'),
    )
    expect(identical.length).toBe(9)
  })
})
