import { describe, it, expect } from 'vitest'
import { isAcceptedOrder, isAcceptedSpelling, themeRoundScore } from '@/lib/games/scoring'
import { SENTENCE_BANK } from '@/data/games/banks/sentence-builder'
import { EXPLANATIONS as SENTENCE_EXPLANATIONS } from '@/data/games/explanations/sentence-builder'
import { SPELLING_BANK } from '@/data/games/banks/spelling-bee'
import { EXPLANATIONS as SPELLING_EXPLANATIONS } from '@/data/games/explanations/spelling-bee'

/**
 * The scoring rules the founder decided on 23 October 2026
 * (src/lib/games/scoring.ts), each held to the defect it closes.
 *
 * Three games marked right English wrong, or rewarded knowing nothing, and
 * each fix changed what counts as right, so each waited from 16 October for
 * his decision. The pages are not rendered here: the rules are pure functions
 * so that this file needs no DOM, and the pages call them.
 */

describe('Theme Matcher: a point per right text, a wrong one costs a point', () => {
  const grid = [
    'Macbeth',
    'A Christmas Carol',
    'An Inspector Calls',
    'Jekyll and Hyde',
    'Romeo and Juliet',
    'Lord of the Flies',
    'Animal Farm',
    'Great Expectations',
    'Jane Eyre',
    'Frankenstein',
    'The Tempest',
    'Ozymandias',
  ]
  const right = ['Macbeth', 'Animal Farm', 'Ozymandias']

  it('one lone right guess scores 1 of 3, not 10 of 12', () => {
    expect(themeRoundScore(new Set(['Macbeth']), right)).toEqual({ points: 1, outOf: 3 })
  })

  it('leaving every text alone scores nothing, not 9 of 12', () => {
    expect(themeRoundScore(new Set(), right)).toEqual({ points: 0, outOf: 3 })
  })

  it('every right text and no wrong one is full marks', () => {
    expect(themeRoundScore(new Set(right), right)).toEqual({ points: 3, outOf: 3 })
  })

  it('a wrong text takes a point away, and the score never goes below nought', () => {
    expect(themeRoundScore(new Set([...right, 'Jane Eyre', 'Frankenstein']), right).points).toBe(1)
    expect(themeRoundScore(new Set(['Jane Eyre']), right).points).toBe(0)
    expect(themeRoundScore(new Set(grid), right).points).toBe(0)
  })
})

describe('Spelling Bee: the spellings dictionaries accept are right', () => {
  const word = (w: string) => {
    const entry = SPELLING_BANK.find((x) => x.word === w)
    if (!entry) throw new Error(`${w} is not in the bank`)
    return entry
  }

  it('enjambement is right for enjambment, and dénouement for denouement', () => {
    expect(isAcceptedSpelling('enjambement', word('enjambment'))).toBe(true)
    expect(isAcceptedSpelling('enjambment', word('enjambment'))).toBe(true)
    expect(isAcceptedSpelling('dénouement', word('denouement'))).toBe(true)
    expect(isAcceptedSpelling('denouement', word('denouement'))).toBe(true)
  })

  it('an accent composed from two keystrokes is the same letter', () => {
    expect(isAcceptedSpelling('dénouement', word('denouement'))).toBe(true)
  })

  it('a misspelling, or nothing, is still wrong, and case does not matter', () => {
    expect(isAcceptedSpelling('enjambmant', word('enjambment'))).toBe(false)
    expect(isAcceptedSpelling('', word('enjambment'))).toBe(false)
    expect(isAcceptedSpelling(' Definitely ', word('definitely'))).toBe(true)
  })

  it('cesura is right for caesura, and hybris for hubris', () => {
    // Added 24 October 2026 under the same decision: Collins lists both as
    // variants, and the rebuilt bank's checker found the game marking them
    // wrong.
    expect(isAcceptedSpelling('cesura', word('caesura'))).toBe(true)
    expect(isAcceptedSpelling('hybris', word('hubris'))).toBe(true)
    expect(isAcceptedSpelling('ceasura', word('caesura'))).toBe(false)
  })

  it('only those words accept a second spelling, and their explanations say so', () => {
    const withAlternatives = SPELLING_BANK.filter((w) => w.alsoAccepted?.length)
    expect(withAlternatives.map((w) => w.word).sort()).toEqual([
      'caesura',
      'denouement',
      'enjambment',
      'hubris',
    ])
    for (const w of withAlternatives) {
      const text = JSON.stringify(SPELLING_EXPLANATIONS[w.word])
      expect(text, w.word).toContain('this game accepts it too')
      expect(text, w.word).not.toMatch(/marks only/)
    }
  })
})

describe('Sentence Builder: every other correct order of the tiles is right', () => {
  const item = (correct: string) => {
    const found = SENTENCE_BANK.find((x) => x.correct === correct)
    if (!found) throw new Error(`${correct} is not in the bank`)
    return found
  }

  it('a listed order is right, an unlisted one is not', () => {
    const cat = item('The cat is sleeping on the sofa')
    expect(isAcceptedOrder('The cat on the sofa is sleeping', cat)).toBe(true)
    expect(isAcceptedOrder('The cat is sleeping on the sofa', cat)).toBe(true)
    expect(isAcceptedOrder('Sofa the cat is sleeping on the', cat)).toBe(false)
  })

  it('the bank lists other orders for 30 sentences, 51 orders in all', () => {
    const listed = SENTENCE_BANK.filter((s) => s.alsoCorrect?.length)
    expect(listed.length).toBe(30)
    expect(listed.reduce((n, s) => n + s.alsoCorrect!.length, 0)).toBe(51)
  })

  it.each(SENTENCE_BANK.filter((s) => s.alsoCorrect?.length).map((s) => [s.correct] as const))(
    '%s: every listed order uses exactly the tiles the student is given',
    (correct) => {
      const s = item(correct)
      const tiles = [...s.tiles].sort().join('\u0000')
      for (const order of s.alsoCorrect!) {
        expect(order.split(' ').sort().join('\u0000'), order).toBe(tiles)
        expect(order, 'an order the same as the sentence shown').not.toBe(s.correct)
      }
    },
  )

  it('every order an explanation calls correct English is one the game accepts', () => {
    // The sentences the explanations name: "'X' is also correct English",
    // "build 'X', which is correct English too" and "other correct sentences,
    // such as 'X'" (a bare "such as 'tonight'" names a word, not an order).
    const named: { key: string; order: string }[] = []
    for (const [key, e] of Object.entries(SENTENCE_EXPLANATIONS)) {
      const more = e.more ?? ''
      for (const m of more.matchAll(/'([^']+)' is also correct English/g)) {
        named.push({ key, order: m[1] })
      }
      for (const m of more.matchAll(/(?:build|make) '([^']+)', which is correct English too/g)) {
        named.push({ key, order: m[1] })
      }
      for (const m of more.matchAll(/correct sentences, such as '([^']+)'/g)) {
        named.push({ key, order: m[1] })
      }
    }
    expect(named.length).toBe(30)
    for (const { key, order } of named) {
      expect(isAcceptedOrder(order, item(key)), `${key}: ${order}`).toBe(true)
    }
  })

  it('no explanation still says the game asks for the order shown', () => {
    expect(JSON.stringify(SENTENCE_EXPLANATIONS)).not.toMatch(/order shown/)
  })
})
