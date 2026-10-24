import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { GameBank } from '@/lib/games/explanations/types'

/**
 * A skills game question should take knowing, not test sense (24 October
 * 2026).
 *
 * THE DEFECT. The founder, 24 October 2026: the games are "too obvious and
 * easy. not enough depth". Measured that day across all 37 banks: in Grade
 * Climber the right option was the longest in 85 per cent of questions, and
 * in all 87 on its top four rungs; in Comprehension Challenge 97 per cent;
 * Phrasal Verbs 93; Vocabulary Builder 73; Reading Detective and Greetings 72.
 * A student who always picked the longest answer passed without reading.
 * Every question was recall or recognition, and no bank said how hard any
 * question was.
 *
 * WHAT IS HELD.
 *
 *   - Every bank: the right option is the unique longest in no more than
 *     LONGEST_MAX of its multiple-choice questions, apart from the banks in
 *     NOT_YET, which are being rebuilt and leave the list as they are.
 *   - A bank that says it was rebuilt for depth (GameBank.deepened) is held to
 *     more: a tier on every question, every tier used, at least TIER3_MIN of
 *     them at tier 3 (analysis and evaluation, not recall), at least
 *     MIN_ITEMS questions, three or more options where there are options,
 *     none twice, and the answer not the unique shortest either in more than
 *     SHORTEST_MAX.
 *
 * What it cannot hold: that a wrong option is wrong, or a hard question hard.
 * Those are read, question by question, by a checker who is not the writer,
 * as every explanation is (src/lib/games/explanations/types.ts).
 */

const LONGEST_MAX = 0.3
const SHORTEST_MAX = 0.4
const TIER3_MIN = 0.25
const TIER_MIN = 0.15
/** The fewest questions a rebuilt bank holds, where not set below. */
const MIN_ITEMS_DEFAULT = 150
const MIN_ITEMS: Record<string, number> = {
  // A passage holds several questions, but a round deals whole passages.
  'comprehension-challenge': 100,
  'reading-detective': 100,
  'paragraph-jumble': 80,
}

/** Banks being rebuilt, 24 October 2026: each leaves this list as it is done. */
const NOT_YET = new Set([
  'article-a-an-the',
  'classroom-objects',
  'grade-climber',
  'greetings-dialogue',
  'phrasal-verbs-match',
  'reading-detective',
  'vocabulary-builder',
])

const BANKS_DIR = join(process.cwd(), 'src/data/games/banks')
const SLUGS = existsSync(BANKS_DIR)
  ? readdirSync(BANKS_DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  : []

const norm = (s: string) => s.trim().toLowerCase()

describe.each(SLUGS)('%s', (slug) => {
  let bank: GameBank<unknown>
  beforeAll(async () => {
    bank = (await import(`../data/games/banks/${slug}.ts`)).BANK
  })

  /** The share of multiple-choice questions whose answer is the unique longest (or shortest) option. */
  function share(which: 'longest' | 'shortest'): { share: number; mcq: number } {
    let mcq = 0
    let hits = 0
    for (const item of bank.items) {
      const options = bank.options(item)
      if (!options || options.length < 2) continue
      mcq++
      const lens = options.map((o) => o.length)
      const edge = which === 'longest' ? Math.max(...lens) : Math.min(...lens)
      const a = bank.answer(item).length
      if (a === edge && lens.filter((l) => l === edge).length === 1) hits++
    }
    return { share: mcq ? hits / mcq : 0, mcq }
  }

  it('does not give its answer away by being the longest option', () => {
    const { share: s, mcq } = share('longest')
    if (NOT_YET.has(slug)) {
      // Still being rebuilt: say so if it has been mended, so it leaves the list.
      if (mcq >= 20)
        expect(s, `${slug} now passes: take it out of NOT_YET`).toBeGreaterThan(LONGEST_MAX)
      return
    }
    if (mcq < 20) return
    expect(
      s,
      `the answer is the longest option in ${Math.round(s * 100)}% of questions`,
    ).toBeLessThanOrEqual(LONGEST_MAX)
  })

  it('if rebuilt for depth, holds to it', () => {
    if (!bank.deepened) return
    const n = bank.items.length
    expect(n, 'questions').toBeGreaterThanOrEqual(MIN_ITEMS[slug] ?? MIN_ITEMS_DEFAULT)
    const tiers = bank.items.map((i) => bank.tier?.(i))
    const untiered = bank.items.filter((_, i) => ![1, 2, 3].includes(tiers[i] ?? 0))
    expect(
      untiered.slice(0, 3).map((i) => bank.key(i)),
      `${untiered.length} questions without a tier`,
    ).toEqual([])
    for (const t of [1, 2, 3]) {
      const c = tiers.filter((x) => x === t).length / n
      expect(c, `tier ${t} share`).toBeGreaterThanOrEqual(t === 3 ? TIER3_MIN : TIER_MIN)
    }
    for (const item of bank.items) {
      const options = bank.options(item)
      if (!options) continue
      expect(options.length, `${bank.key(item)}: options`).toBeGreaterThanOrEqual(3)
      expect(new Set(options.map(norm)).size, `${bank.key(item)}: an option twice`).toBe(
        options.length,
      )
    }
    const { share: s, mcq } = share('shortest')
    if (mcq >= 20)
      expect(s, `the answer is the shortest option in ${Math.round(s * 100)}%`).toBeLessThanOrEqual(
        SHORTEST_MAX,
      )
  })
})
