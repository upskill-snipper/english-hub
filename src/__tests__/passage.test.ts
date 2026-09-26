import { describe, it, expect } from 'vitest'

import { animalFarmText } from '@/data/full-texts/animal-farm'
import { doNotGoGentleIntoThatGoodNightText } from '@/data/full-texts/do-not-go-gentle-into-that-good-night'
import { passage, poemLines } from '@/lib/study-guides/passage'

/**
 * The helpers that let a guide print a passage without typing it. What they
 * must never do is return something other than the edition: a passage that
 * drifted, or a poem with a line merged or dropped.
 */
describe('poemLines', () => {
  it('returns the villanelle as 19 lines in six stanzas', () => {
    const lines = poemLines(doNotGoGentleIntoThatGoodNightText)
    expect(lines.filter(Boolean)).toHaveLength(19)
    expect(lines.filter((l) => l === '')).toHaveLength(5)
    // The stanza breaks fall after lines 3, 6, 9, 12 and 15.
    expect(lines.map((l, i) => (l === '' ? i : -1)).filter((i) => i >= 0)).toEqual([
      3, 7, 11, 15, 19,
    ])
  })
})

describe('passage', () => {
  it('cuts whole paragraphs between two anchors', () => {
    const p = passage(
      animalFarmText,
      'section-1',
      'Mr. Jones, of the Manor Farm',
      'Mr. Jones, of the Manor Farm',
    )
    expect(p.startsWith('Mr. Jones, of the Manor Farm')).toBe(true)
    expect(p).not.toContain('\n\n')
    expect(p).not.toMatch(/<|&amp;/)
  })

  it('throws rather than drift when an anchor is missing or out of order', () => {
    expect(() =>
      passage(animalFarmText, 'section-1', 'no such phrase anywhere', 'Manor Farm'),
    ).toThrow()
    expect(() => passage(animalFarmText, 'section-99', 'Manor Farm', 'Manor Farm')).toThrow()
    // "Beasts of England" is first sung later in Chapter 1 than the opening line.
    expect(() =>
      passage(animalFarmText, 'section-1', 'Beasts of England', 'Mr. Jones, of the Manor Farm'),
    ).toThrow()
  })
})
