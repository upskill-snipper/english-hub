import { describe, it, expect } from 'vitest'
import { dealRound } from './deal-round'
import { findGiveAways } from './give-aways'

/**
 * The round dealer the skills games share (24 October 2026): missed questions
 * back when due, new questions before old, nothing in a round that gives
 * another away, groups spread, easier first.
 */

/** A seeded random, so a failure can be replayed. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Q = { id: string; answer: string; quote: string; tier: number; group: string }
const BANK: Q[] = Array.from({ length: 60 }, (_, i) => ({
  id: `q${i}`,
  answer: `answer-${i % 20}`,
  quote: `quote-${i % 30}`,
  tier: (i % 3) + 1,
  group: `g${i % 6}`,
}))
const key = (q: Q) => q.id

describe('dealRound', () => {
  it('deals a full round, each question once', () => {
    const round = dealRound(BANK, { size: 15, key, random: mulberry32(1) })
    expect(round).toHaveLength(15)
    expect(new Set(round.map(key)).size).toBe(15)
  })

  it('never puts two questions that share a fact in one round, while the bank allows', () => {
    for (let s = 0; s < 200; s++) {
      const round = dealRound(BANK, {
        size: 15,
        key,
        facts: (q) => [q.answer, q.quote],
        random: mulberry32(s),
      })
      expect(new Set(round.map((q) => q.answer)).size, `seed ${s}`).toBe(15)
      expect(new Set(round.map((q) => q.quote)).size, `seed ${s}`).toBe(15)
    }
  })

  it('deals what has never been met before what has', () => {
    const seen = BANK.slice(0, 45).map(key)
    const round = dealRound(BANK, { size: 15, key, seen, random: mulberry32(7) })
    expect(round.every((q) => !seen.includes(q.id))).toBe(true)
  })

  it('then what was met longest ago', () => {
    // Newest first: q0 was met last, q59 longest ago.
    const seen = BANK.map(key)
    const round = dealRound(BANK, { size: 10, key, seen, random: mulberry32(3) })
    expect(round.map(key).sort()).toEqual(BANK.slice(50).map(key).sort())
  })

  it('brings back a missed question when it is due, ahead of new ones', () => {
    const seen = BANK.slice(0, 30).map(key)
    const due = ['q3', 'q4']
    const round = dealRound(BANK, { size: 15, key, seen, due, random: mulberry32(11) })
    expect(round.map(key)).toEqual(expect.arrayContaining(due))
  })

  it('but never lets review fill more than a third of a round', () => {
    const due = BANK.slice(0, 30).map(key)
    const round = dealRound(BANK, { size: 15, key, due, random: mulberry32(13) })
    expect(round.filter((q) => due.includes(q.id))).toHaveLength(5)
  })

  it('still fills a round from a bank too small for the rules', () => {
    const small = BANK.slice(0, 18).map((q) => ({ ...q, answer: 'same' }))
    const round = dealRound(small, {
      size: 15,
      key,
      facts: (q) => [q.answer],
      random: mulberry32(9),
    })
    expect(round).toHaveLength(15)
  })

  it('deals at most two of a group, and never two in a row, where the bank allows', () => {
    for (let s = 0; s < 200; s++) {
      const round = dealRound(BANK, {
        size: 12,
        key,
        group: (q) => q.group,
        random: mulberry32(s),
      })
      const counts = new Map<string, number>()
      for (const q of round) counts.set(q.group, (counts.get(q.group) ?? 0) + 1)
      expect(Math.max(...counts.values()), `seed ${s}`).toBeLessThanOrEqual(2)
      for (let i = 1; i < round.length; i++) {
        expect(round[i].group, `seed ${s} at ${i}`).not.toBe(round[i - 1].group)
      }
    }
  })

  it('shares a round out evenly where there are too few groups for two each', () => {
    const round = dealRound(BANK, {
      size: 15,
      key,
      group: (q) =>
        Number(q.id.slice(1)) % 3 === 0 ? 'a' : Number(q.id.slice(1)) % 3 === 1 ? 'b' : 'c',
      random: mulberry32(2),
    })
    const counts = new Map<string, number>()
    for (const q of round) {
      const g = Number(q.id.slice(1)) % 3
      counts.set(String(g), (counts.get(String(g)) ?? 0) + 1)
    }
    expect([...counts.values()].sort()).toEqual([5, 5, 5])
  })

  it("keeps a page's fixed mix", () => {
    const round = dealRound(BANK, {
      size: 10,
      key,
      quota: { of: (q) => `t${q.tier}`, counts: { t1: 2, t2: 3, t3: 5 } },
      tier: (q) => q.tier,
      random: mulberry32(4),
    })
    expect(round.map((q) => q.tier)).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 3, 3])
  })

  it('fills a share the bank cannot, from the others, where asked to', () => {
    // Tier 3 has 20 questions; a mix asking for 25 of them is filled to 30.
    const round = dealRound(BANK, {
      size: 30,
      key,
      quota: { of: (q) => `t${q.tier}`, counts: { t1: 2, t2: 3, t3: 25 }, fill: true },
      random: mulberry32(6),
    })
    expect(round).toHaveLength(30)
    expect(round.filter((q) => q.tier === 3)).toHaveLength(20)
  })

  it('climbs: easier tiers first', () => {
    const round = dealRound(BANK, { size: 15, key, tier: (q) => q.tier, random: mulberry32(5) })
    const tiers = round.map((q) => q.tier)
    expect([...tiers].sort((a, b) => a - b)).toEqual(tiers)
  })

  it('keeps a question out of a round with one that gives it away', () => {
    // q1 gives q2 away; with plenty else to deal they never meet.
    const reveals = (q: Q) => (q.id === 'q1' ? new Set(['q2']) : undefined)
    for (let s = 0; s < 300; s++) {
      const ids = dealRound(BANK, { size: 30, key, reveals, random: mulberry32(s) }).map(key)
      expect(ids.includes('q1') && ids.includes('q2'), `seed ${s}`).toBe(false)
    }
  })

  it('and where it cannot, asks the question given away first', () => {
    const tiny = BANK.slice(0, 4)
    const reveals = (q: Q) => (q.id === 'q0' ? new Set(['q3']) : undefined)
    for (let s = 0; s < 50; s++) {
      const ids = dealRound(tiny, { size: 4, key, reveals, random: mulberry32(s) }).map(key)
      expect(ids.indexOf('q3'), `seed ${s}`).toBeLessThan(ids.indexOf('q0'))
    }
  })
})

describe('findGiveAways', () => {
  type W = { q: string; a: string }
  const bank = {
    items: [
      { q: 'three woman', a: 'women' },
      { q: 'five child', a: 'children' },
      { q: 'two man', a: 'men' },
      { q: 'Which is a noun? cat', a: 'noun' },
      { q: 'Which is a noun? dog', a: 'noun' },
      { q: 'Which is a noun? hat', a: 'noun' },
      { q: 'Which is a noun? box', a: 'noun' },
      { q: 'and so', a: 'an' },
    ] as W[],
    key: (i: W) => i.q,
    answer: (i: W) => i.a,
  }
  const explanations = {
    'three woman': { why: 'One woman, two women, as one child, two children.' },
    'five child': { why: 'Child becomes children.' },
    'two man': { why: 'Man becomes men. It is a noun and so it changes.' },
    'Which is a noun? cat': { why: 'Cat names a thing.' },
    'Which is a noun? dog': { why: 'Dog names a thing.' },
    'Which is a noun? hat': { why: 'Hat names a thing.' },
    'Which is a noun? box': { why: 'Box names a thing.' },
    'and so': { why: 'A plain sentence.' },
  }
  const found = findGiveAways(bank, explanations)

  it("finds an explanation that states another question's answer", () => {
    expect([...(found.reveals.get('three woman') ?? [])]).toEqual(['five child'])
  })

  it("ignores an answer most questions share, which is the game's subject", () => {
    expect(found.reveals.get('two man')).toBeUndefined()
  })

  it('matches whole words only', () => {
    expect([...found.reveals.values()].some((s) => s.has('and so'))).toBe(false)
  })

  it('leaves alone an answer the bank calls an ordinary word, and only that one', () => {
    type Q = { q: string; a: string; word?: boolean }
    const b = {
      items: [
        { q: 'Which word in "she would still wait" does the work?', a: 'still', word: true },
        { q: 'Why does the house stay silent?', a: 'grief' },
        { q: 'Which month comes after April?', a: 'May' },
      ] as Q[],
      key: (i: Q) => i.q,
      answer: (i: Q) => i.a,
      ordinaryAnswer: (i: Q) => i.word === true,
    }
    const f = findGiveAways(b, {
      'Why does the house stay silent?': { why: 'It is still and quiet: grief.' },
      'Which month comes after April?': { why: 'The month after it is May.' },
    })
    // "still" in another explanation tells no one which word does the work...
    expect([...f.reveals.values()].some((s) => s.has(b.items[0].q))).toBe(false)
    // ...but a mention of an answer the bank has not called ordinary still counts.
    const g = findGiveAways(
      { ...b, ordinaryAnswer: undefined },
      {
        'Which month comes after April?': { why: 'Not the month of grief.' },
      },
    )
    expect([...(g.reveals.get('Which month comes after April?') ?? [])]).toEqual([
      'Why does the house stay silent?',
    ])
  })

  it("finds an explanation that quotes another question's sentence", () => {
    const b = {
      items: [
        { q: 'light the candle', a: 'verb' },
        { q: 'a light breeze', a: 'adjective' },
        { q: 'the bright light', a: 'noun' },
      ] as W[],
      key: (i: W) => i.q,
      answer: (i: W) => i.a,
    }
    const f = findGiveAways(b, {
      'the bright light': { why: 'Here it is a noun; it is a verb in "light the candle".' },
    })
    expect([...(f.reveals.get('the bright light') ?? [])]).toEqual(['light the candle'])
  })
})
