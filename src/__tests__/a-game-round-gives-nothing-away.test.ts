import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { dealRound, normalFact } from '@/lib/games/deal-round'
import { findGiveAways, type GiveAways } from '@/lib/games/give-aways'
import type { GameBank, GameExplanations } from '@/lib/games/explanations/types'

/**
 * Every skills game's real bank, dealt as one student would meet it, round
 * after round (24 October 2026; src/lib/games/deal-round.ts says why).
 *
 * THE DEFECT. The founder, 24 October 2026: "questions repetitive with the
 * answer in the previous. too obvious and easy." Replaying each page's own
 * dealing that day: no game remembered what a student had met, so two thirds
 * of round 5 had been answered before; and an answer could be on screen
 * before its question was asked (an EAL explanation lists the days of the
 * week; "What day comes after Wednesday?" could follow it).
 *
 * WHAT IS HELD, for every bank, over 300 rounds with the history a student's
 * browser would keep:
 *
 *   - no question twice in a round;
 *   - a round holds a question the student has met only when every question
 *     they have never met, left out of it, would have put the same quotation
 *     or word in the round twice, or formed a pair that give each other away
 *     (src/lib/games/deal-round.ts ranks those above novelty, and novelty
 *     above everything else);
 *   - no question is asked after one that has already shown its answer,
 *     unless the two give each other away (then neither order helps).
 *
 * And every skills game page deals through the dealer, so a page cannot
 * quietly go back to `shuffle(BANK).slice(0, n)`.
 *
 * What it cannot hold: that two questions that give each other away are never
 * in one round at all. A bank too small for that tops the round up (asking
 * the one given away first), and only a bigger bank fixes it.
 */

const BANKS_DIR = join(process.cwd(), 'src/data/games/banks')
const SLUGS = existsSync(BANKS_DIR)
  ? readdirSync(BANKS_DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  : []

/** The page's own round length, as its constant says, else 15. */
function roundSizeOf(slug: string): number {
  const page = readFileSync(join(process.cwd(), `src/app/games/${slug}/page.tsx`), 'utf8')
  const m = page.match(/const (?:ROUND_SIZE|QUESTIONS_PER_ROUND|ROUND_LENGTH|TOTAL_ROUNDS) = (\d+)/)
  return m ? Number(m[1]) : 15
}

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

describe.each(SLUGS)('%s', (slug) => {
  let bank: GameBank<unknown>
  let found: GiveAways
  let size: number

  beforeAll(async () => {
    bank = (await import(`../data/games/banks/${slug}.ts`)).BANK
    const explanations: GameExplanations = (await import(`../data/games/explanations/${slug}.ts`))
      .EXPLANATIONS
    found = findGiveAways(bank, explanations)
    size = Math.min(roundSizeOf(slug), bank.items.length)
  })

  it('deals 300 rounds that repeat nothing, bring the unmet first and never show an answer early', () => {
    const key = (item: unknown) => bank.key(item)
    const factsOf = (i: unknown) =>
      [...(bank.facts?.(i) ?? []), ...(found.facts.get(key(i)) ?? [])].map(normalFact)
    const random = mulberry32(slug.length * 7919)
    let seen: string[] = []
    const problems: string[] = []
    for (let r = 0; r < 300; r++) {
      const unmet = bank.items.filter((i) => !seen.includes(key(i)))
      const round = dealRound(bank.items, {
        size,
        key,
        seen,
        tier: bank.tier ? (i) => bank.tier!(i) : undefined,
        facts: (i) => [...(bank.facts?.(i) ?? []), ...(found.facts.get(key(i)) ?? [])],
        reveals: (i) => found.reveals.get(key(i)),
        group: (i) => (bank.group ? bank.group(i) : bank.tag?.(i)),
        random,
      })
      const keys = round.map(key)
      if (new Set(keys).size !== keys.length) problems.push(`round ${r}: a question twice`)
      if (keys.some((k) => seen.includes(k))) {
        const factsIn = new Set(round.flatMap(factsOf))
        const fits = unmet.find((u) => {
          const k = key(u)
          if (keys.includes(k)) return false
          if (factsOf(u).some((f) => factsIn.has(f))) return false
          const mine = found.reveals.get(k)
          return !keys.some((p) => mine?.has(p) && found.reveals.get(p)?.has(k))
        })
        if (fits)
          problems.push(`round ${r}: a met question, though "${key(fits)}" was unmet and fitted`)
      }
      for (let i = 0; i < round.length; i++) {
        const shows = found.reveals.get(keys[i])
        if (!shows) continue
        for (let j = i + 1; j < round.length; j++) {
          if (!shows.has(keys[j])) continue
          const mutual = found.reveals.get(keys[j])?.has(keys[i])
          if (!mutual) problems.push(`round ${r}: "${keys[j]}" asked after "${keys[i]}" showed it`)
        }
      }
      seen = [...keys, ...seen.filter((k) => !keys.includes(k))]
    }
    expect(problems.slice(0, 5), `${problems.length} problems`).toEqual([])
  })
})

describe('every skills game page', () => {
  it('deals through the dealer, never by shuffling its bank and slicing it', () => {
    const offenders: string[] = []
    for (const slug of SLUGS) {
      const page = readFileSync(join(process.cwd(), `src/app/games/${slug}/page.tsx`), 'utf8')
      if (!page.includes("from '@/lib/games/start-round'")) offenders.push(`${slug}: no dealer`)
      if (/shuffle\([A-Z_]+\)\s*\.slice\(0/.test(page))
        offenders.push(`${slug}: shuffles and slices`)
    }
    expect(offenders).toEqual([])
  })
})
