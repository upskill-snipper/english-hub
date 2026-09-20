import { describe, it, expect } from 'vitest'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { cambridge0475Slugs } from '@/lib/board/cambridge-0475'

/**
 * The Cambridge register held the right texts and could not point at them.
 *
 * Forty-three rows in cambridge-0475.ts carried `slug: null`. Most are the
 * prescribed poems, which we deliberately hold no row for - Paper 1 Section A
 * is a choice of three alternative fifteen-poem sets, and listing all
 * forty-five would tell a student to revise three times what they sit. That
 * part is correct.
 *
 * But six of the nulls were WHOLE TEXTS we hold a guide for: I'm the King of
 * the Castle, Blues for an Alabama Sky, Fire on the Mountain, Hullaballoo in
 * the Guava Orchard, A Midsummer Night's Dream and What it Means When a Man
 * Falls from the Sky. Each was tagged `cambridge-0475` in set-texts.ts and
 * absent from `cambridge0475Slugs()`, so the register and the shelf disagreed
 * by half the board and any coverage figure computed from the register
 * under-reported by six.
 *
 * All six were verified on 20 September 2026 against Cambridge's own syllabus
 * PDFs, downloaded and text-extracted rather than summarised - the agents
 * reported that Cambridge's PDFs defeat the fetching summariser, so anything
 * read that way would have been worthless. The tags were right; the link was
 * missing.
 *
 * THE YEAR IS THE POINT. Cambridge rotates 0475 every single year and serves
 * four syllabus PDFs side by side with no archived label on any of them.
 * set-texts.ts states its own policy: its flat cambridge-0475 tags are for the
 * 2027 examination, "the series the current cohort sits". `SetText.boards`
 * carries no year, so that policy can only be kept by matching the tags to one
 * specific series, which is what these assert.
 *
 * THE WAR OF THE WORLDS is the case that proves it matters. It is on the 2026
 * list and absent from 2027, where Arimah replaces it. Tagging it would put a
 * withdrawn novel in front of a student revising for June 2027, so it carries
 * OCR and Eduqas and not this board.
 *
 * MUTATION RUN, verified to have altered the file first: restoring one linked
 * row to `slug: null` fails 2 of these.
 */

const taggedToCambridge = (): string[] =>
  SET_TEXTS.filter((t) => t.boards.includes('cambridge-0475'))
    .map((t) => t.slug)
    .sort()

describe('the register can point at the texts it prescribes', () => {
  it('reads a realistic number of set texts for both live series', () => {
    // Vacuity guard. Two empty lists would satisfy the equality below.
    expect(cambridge0475Slugs(2026).length).toBeGreaterThan(10)
    expect(cambridge0475Slugs(2027).length).toBeGreaterThan(10)
  })

  it('and the six that were linked resolve to a text we actually hold', () => {
    const held = new Set(SET_TEXTS.map((t) => t.slug))
    for (const slug of [
      'im-the-king-of-the-castle',
      'blues-for-an-alabama-sky',
      'fire-on-the-mountain',
      'hullaballoo-in-the-guava-orchard',
      'a-midsummer-nights-dream',
      'what-it-means-when-a-man-falls-from-the-sky',
    ]) {
      expect(cambridge0475Slugs(2027), `${slug} is unlinked in the 2027 list`).toContain(slug)
      expect(held, `${slug} is linked to a text that does not exist`).toContain(slug)
    }
  })
})

describe('the shelf is the series the current cohort sits', () => {
  it('every text tagged cambridge-0475 is on the 2027 syllabus', () => {
    // THE ASSERTION THAT MATTERS. A tag that is not on this list is a book the
    // student's exam will not ask about.
    const onSyllabus = new Set(cambridge0475Slugs(2027))
    const wrong = taggedToCambridge().filter((s) => !onSyllabus.has(s))
    expect(wrong, 'tagged cambridge-0475 but not on the 2027 syllabus').toEqual([])
  })

  it('and every 2027 whole text we hold a guide for is on the shelf', () => {
    // The inversion, which this codebase has been caught by before: wrong data
    // is not always too generous.
    const tagged = new Set(taggedToCambridge())
    const missing = cambridge0475Slugs(2027).filter((s) => !tagged.has(s))
    expect(missing, 'on the 2027 syllabus, held, and not on the shelf').toEqual([])
  })

  it('The War of the Worlds is NOT on it, because 2027 withdrew it', () => {
    // Named individually. It is on the 2026 list, so a future edit reading only
    // that document would reintroduce it.
    const wotw = SET_TEXTS.find((t) => t.slug === 'the-war-of-the-worlds')
    expect(wotw, 'the text has vanished').toBeTruthy()
    expect(cambridge0475Slugs(2026)).toContain('the-war-of-the-worlds')
    expect(cambridge0475Slugs(2027)).not.toContain('the-war-of-the-worlds')
    expect(wotw!.boards).not.toContain('cambridge-0475')
    // It is still a real OCR and Eduqas text, so the page is not orphaned.
    expect(wotw!.boards).toContain('ocr')
  })
})

describe('the texts that belong to no board, verified rather than assumed', () => {
  // Seven texts carry no board tag. That looked like a gap and was checked on
  // 20 September 2026, one agent per text against every awarding body we cover.
  // Every one came back negative: no current specification prescribes them.
  // Refugee Blues is the clearest case - it WAS in the Edexcel IGCSE anthology
  // under the pre-2016 4ET0/4EA0 series, which is dead, and the current Part 3
  // sixteen-poem list does not contain it.
  //
  // So the empty array is the correct answer, not an unfinished one, and this
  // records that it was established rather than left alone.
  const verifiedOrphans = [
    'refugee-blues',
    'the-door',
    'the-pedestrian',
    'the-yellow-wallpaper',
    'when-greek-meets-greek',
    'the-man-who-loved-flowers',
    'henry-v',
  ]

  it.each(verifiedOrphans)('%s is on no current specification', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text, `${slug} has vanished from the data`).toBeTruthy()
    expect(text!.boards).toEqual([])
  })

  it('and no OTHER text has quietly joined them', () => {
    // The list above is closed. A text arriving with no board is either a new
    // gap or a careless removal, and both should be looked at rather than
    // absorbed.
    const orphans = SET_TEXTS.filter((t) => t.boards.length === 0).map((t) => t.slug)
    expect(orphans.sort()).toEqual([...verifiedOrphans].sort())
  })
})
