import { beforeEach, describe, expect, it } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { normalFact } from '@/lib/games/deal-round'
import type { GameBank, GameExplanations } from '@/lib/games/explanations/types'
import { findGiveAways, type GiveAways } from '@/lib/games/give-aways'
import { PROGRESS_VERSION, TOP_LEVEL, levelCounts } from '@/lib/games/progression'
import { SEEN_LIMIT, seenKeys } from '@/lib/games/round-history'
import { dealNow } from '@/lib/games/start-round'

/**
 * A skills game whose questions have tiers deals each round by the student's
 * level in it (24 October 2026; src/lib/games/start-round.ts, dealNow, and
 * src/lib/games/progression.ts, LEVEL_MIX): mostly that level's questions,
 * some below to keep them, a few above to stretch.
 *
 * a-game-round-gives-nothing-away.test.ts holds the dealer itself to its
 * rules over 300 rounds. This holds the deal a page actually makes, through
 * dealNow, with a browser's own history, at every level:
 *
 *   - no question twice in a round, and every round full;
 *   - at least the level's share of its own tier, where the bank has them;
 *   - a met question of a tier only when no unmet one of that tier fitted;
 *   - no question asked after one that has already shown its answer, unless
 *     the two give each other away.
 */

const BANKS_DIR = join(process.cwd(), 'src/data/games/banks')
const SLUGS = existsSync(BANKS_DIR)
  ? readdirSync(BANKS_DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  : []
const ROUNDS = 60

function roundSizeOf(slug: string): number {
  const page = readFileSync(join(process.cwd(), `src/app/games/${slug}/page.tsx`), 'utf8')
  const m = page.match(/const (?:ROUND_SIZE|QUESTIONS_PER_ROUND|ROUND_LENGTH|TOTAL_ROUNDS) = (\d+)/)
  return m ? Number(m[1]) : 15
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** This browser's storage, without a DOM: the code reads window.localStorage. */
class MemoryStorage {
  private m = new Map<string, string>()
  getItem(k: string) {
    return this.m.has(k) ? this.m.get(k)! : null
  }
  setItem(k: string, v: string) {
    this.m.set(k, v)
  }
  removeItem(k: string) {
    this.m.delete(k)
  }
  clear() {
    this.m.clear()
  }
}
const g = globalThis as unknown as { window?: { localStorage: MemoryStorage } }
const storage = () => g.window!.localStorage

/** This browser's record says the student is at `level` in `slug`. */
function atLevel(slug: string, level: number) {
  storage().setItem(
    `teh-games:v${PROGRESS_VERSION}:progress`,
    JSON.stringify({
      v: PROGRESS_VERSION,
      games: { [slug]: { level, passes: 0, rounds: 1, right: 0, bestRun: 0, levelled: true } },
      days: [],
    }),
  )
}

beforeEach(() => {
  g.window = { localStorage: new MemoryStorage() }
})

describe.each(SLUGS)('%s', (slug) => {
  it.each(Array.from({ length: TOP_LEVEL }, (_, i) => i + 1))(
    'deals by level %i what the student is ready for, met questions last',
    async (level) => {
      const bank: GameBank<unknown> = (await import(`../data/games/banks/${slug}.ts`)).BANK
      const tierOf = (i: unknown) => (bank.tier ? bank.tier(i) : undefined)
      // Dealt by level: a bank with tiers, on a page that deals rounds
      // through dealNow with no fixed mix of its own. A page that deals
      // passages whole (dealSetsNow), climbs a ladder (pickNextNow) or keeps a
      // fixed mix (Spelling Bee's five, eight and seven) keeps its own deal.
      const page = readFileSync(join(process.cwd(), `src/app/games/${slug}/page.tsx`), 'utf8')
      if (/dealSetsNow|pickNextNow|quota:/.test(page)) return
      if (!bank.items.some((i) => tierOf(i) !== undefined)) return
      const explanations: GameExplanations = (await import(`../data/games/explanations/${slug}.ts`))
        .EXPLANATIONS
      const found: GiveAways = findGiveAways(bank, explanations)
      const key = (i: unknown) => bank.key(i)
      const factsOf = (i: unknown) =>
        [...(bank.facts?.(i) ?? []), ...(found.facts.get(key(i)) ?? [])].map(normalFact)
      const size = Math.min(roundSizeOf(slug), bank.items.length)
      const counts = levelCounts(level, size)
      const ofTier = (t: number) => bank.items.filter((i) => (tierOf(i) ?? 1) === t).length

      atLevel(slug, level)
      const random = mulberry32(slug.length * 104729 + level)
      const problems: string[] = []
      for (let r = 0; r < ROUNDS; r++) {
        // Met, as this browser remembers it: the last SEEN_LIMIT questions
        // (round-history.ts). One met longer ago than that is new again.
        const met = new Set(seenKeys(slug).slice(0, SEEN_LIMIT))
        const round = dealNow(bank, size, { explanations, random })
        const keys = round.map(key)
        if (new Set(keys).size !== keys.length) problems.push(`round ${r}: a question twice`)
        if (round.length !== size) problems.push(`round ${r}: ${round.length} of ${size}`)
        // The level's own tier, where the bank holds enough of it.
        const own = round.filter((i) => (tierOf(i) ?? 1) === level).length
        if (ofTier(level) >= 3 * (counts[String(level)] ?? 0) && own < (counts[String(level)] ?? 0))
          problems.push(`round ${r}: ${own} of tier ${level}, short of ${counts[String(level)]}`)
        // A met question of a tier only when no unmet one of that tier fitted.
        const factsIn = new Set(round.flatMap(factsOf))
        for (const item of round) {
          if (!met.has(key(item))) continue
          const t = tierOf(item) ?? 1
          const fits = bank.items.find((u) => {
            const k = key(u)
            if (met.has(k) || keys.includes(k) || (tierOf(u) ?? 1) !== t) return false
            if (factsOf(u).some((f) => factsIn.has(f))) return false
            const mine = found.reveals.get(k)
            return !keys.some((p) => mine?.has(p) && found.reveals.get(p)?.has(k))
          })
          if (fits) {
            problems.push(
              `round ${r}: met "${key(item)}" though "${key(fits)}" was unmet and fitted`,
            )
            break
          }
        }
        // Nothing asked after its answer has been shown.
        for (let i = 0; i < round.length; i++) {
          const shows = found.reveals.get(keys[i])
          if (!shows) continue
          for (let j = i + 1; j < round.length; j++)
            if (shows.has(keys[j]) && !found.reveals.get(keys[j])?.has(keys[i]))
              problems.push(`round ${r}: "${keys[j]}" asked after "${keys[i]}" showed it`)
        }
      }
      expect(problems.slice(0, 5), `${problems.length} problems`).toEqual([])
    },
    60_000,
  )
})
