import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { EXPLAINED_GAMES } from '@/lib/games/explanations/load'
import type { GameBank, GameExplanations } from '@/lib/games/explanations/types'

/**
 * Every skills game question has an explanation, and each one is held to what
 * the question really is (13 October 2026; src/lib/games/explanations/types.ts).
 *
 * The founder asked for the games' answers to go about ten times deeper. The
 * GCSE games had explained none of their 440 answers and the rest averaged
 * under 13 words. The explanations are written with AI, as he decided, so
 * these checks are the floor nothing ships below:
 *
 *   - one for every question in the bank, and none for a question that is not;
 *   - a "why not" only for an option the question really shows, and never for
 *     the right answer;
 *   - no "why not" at all where the student types or builds the answer;
 *   - the page that plays the bank renders the explanation and records the
 *     answer, and a game where the student types never sends what was typed;
 *   - house style: British English, no dashes for punctuation, no exclamation
 *     marks, no grades, and short enough to read between questions.
 *
 * A bank is a file in src/data/games/banks/. Each game moves there when its
 * explanations are written; the last test fails until all of them have.
 */

const BANKS_DIR = join(process.cwd(), 'src/data/games/banks')
const BANK_SLUGS = existsSync(BANKS_DIR)
  ? readdirSync(BANKS_DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  : []

const LIMITS = { why: 60, not: 35, more: 60, tip: 45 } as const
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length

/** American spellings the house style does not use. Whole words only. */
const US =
  /\b(color|colors|colored|favorite|favor|behavior|honor|center|centered|theater|analyze|analyzed|analyzing|organize|organized|recognize|recognized|realize|realized|emphasize|emphasized|criticize|summarize|apologize|characterize|characterized|symbolize|symbolizes|symbolized|dialog|traveled|traveling|labeled|modeled|gray|mom)\b/i

function styleProblems(text: string): string[] {
  const out: string[] = []
  if (/[—–]/.test(text)) out.push('a dash used as punctuation')
  if (/!/.test(text)) out.push('an exclamation mark')
  if (/\bgrades?\b/i.test(text)) out.push('a mention of grades')
  const us = text.match(US)
  if (us) out.push(`American spelling "${us[0]}"`)
  return out
}

describe.each(BANK_SLUGS)('%s', (slug) => {
  let bank: GameBank<unknown>
  let explanations: GameExplanations
  let page: string

  beforeAll(async () => {
    bank = (await import(`../data/games/banks/${slug}.ts`)).BANK
    explanations = (await import(`../data/games/explanations/${slug}.ts`)).EXPLANATIONS
    page = readFileSync(join(process.cwd(), `src/app/games/${slug}/page.tsx`), 'utf8')
  })

  it('is a game the explanations loader knows', () => {
    expect(bank.slug).toBe(slug)
    expect(EXPLAINED_GAMES).toContain(slug)
    expect(bank.items.length).toBeGreaterThan(0)
  })

  it('names each question once', () => {
    const keys = bank.items.map((i) => bank.key(i))
    expect(keys.every((k) => typeof k === 'string' && k.trim().length > 0)).toBe(true)
    const dupes = keys.filter((k, n) => keys.indexOf(k) !== n)
    expect(dupes, 'two questions share a key').toEqual([])
  })

  it('has the right answer among the options it shows', () => {
    for (const item of bank.items) {
      const options = bank.options(item)
      if (options) expect(options, bank.key(item)).toContain(bank.answer(item))
    }
  })

  it('explains every question, and nothing else', () => {
    const keys = new Set(bank.items.map((i) => bank.key(i)))
    const missing = [...keys].filter((k) => !explanations[k]?.why?.trim())
    const orphans = Object.keys(explanations).filter((k) => !keys.has(k))
    expect(missing, 'questions with no explanation').toEqual([])
    expect(orphans, 'explanations for questions the bank does not have').toEqual([])
  })

  it('gives a "why not" only for a wrong option the question really shows', () => {
    const problems: string[] = []
    for (const item of bank.items) {
      const ex = explanations[bank.key(item)]
      if (!ex?.not) continue
      const options = bank.options(item)
      for (const chosen of Object.keys(ex.not)) {
        if (!options) problems.push(`${bank.key(item)}: a "why not" on a question with no options`)
        else if (!options.includes(chosen))
          problems.push(`${bank.key(item)}: "${chosen}" is not an option`)
        else if (chosen === bank.answer(item))
          problems.push(`${bank.key(item)}: "why not" the right answer`)
      }
    }
    expect(problems).toEqual([])
  })

  it('is written to the house style and short enough to read between questions', () => {
    const problems: string[] = []
    for (const [key, ex] of Object.entries(explanations)) {
      const parts: [keyof typeof LIMITS, string][] = [
        ['why', ex.why],
        ...(ex.more ? [['more', ex.more] as [keyof typeof LIMITS, string]] : []),
        ...(ex.tip ? [['tip', ex.tip] as [keyof typeof LIMITS, string]] : []),
        ...Object.values(ex.not ?? {}).map((t) => ['not', t] as [keyof typeof LIMITS, string]),
      ]
      for (const [part, text] of parts) {
        if (words(text) > LIMITS[part]) problems.push(`${key}: ${part} is ${words(text)} words`)
        for (const p of styleProblems(text)) problems.push(`${key}: ${part} has ${p}`)
      }
    }
    expect(problems).toEqual([])
  })

  it('is played by a page that shows the explanation and records each answer', () => {
    // useGameRound, passed to GameShell as `round`: the page's logic runs
    // outside the shell, where a context the shell provides cannot reach it.
    expect(page).toContain(`@/data/games/banks/${slug}`)
    expect(page).toContain('AnswerExplanation')
    expect(page).toContain('useGameRound')
    expect(page).toMatch(/round=\{/)
  })

  it('never sends what a student typed', () => {
    // Where no question has options, the student types or builds the answer,
    // and `chose` would carry their own words into a stored row.
    if (bank.items.some((i) => bank.options(i) !== null)) return
    expect(page).not.toMatch(/\bchose\s*:/)
  })
})

/**
 * Games whose questions have not yet moved into a bank with their
 * explanations. Listed here, by name, so the gap is visible in the code and
 * not hidden in a skipped test: the founder asked for every game, and this
 * list must end empty. Remove a game when its bank lands.
 */
const PENDING: readonly string[] = [
  'apostrophe-ace',
  'classroom-objects',
  'days-months-seasons',
  'everyday-vocab-flashcards',
  'homophone-hero',
  'numbers-and-time',
  'phrasal-verbs-match',
  'picture-word-match',
  'prefix-suffix-lab',
  'prepositions-of-place',
  'punctuation-repair',
  'sentence-builder',
  'spelling-patterns',
  'tense-timeline',
  'tricky-word-spelling',
  'word-class-sorter',
]

describe('the whole set', () => {
  it('every explained game has its bank, or is named as still to do', () => {
    expect([...EXPLAINED_GAMES].sort()).toEqual([...BANK_SLUGS, ...PENDING].sort())
  })

  it('no game is named as still to do once its bank has landed', () => {
    expect(PENDING.filter((s) => BANK_SLUGS.includes(s))).toEqual([])
  })

  // Thirty seconds, not the default five: it imports every pending game's
  // file in turn, and on 16 October 2026 that took more than five seconds on a
  // busy machine and failed a push with nothing wrong.
  it('a pending game has no explanations yet, so none can ship unchecked', async () => {
    for (const slug of PENDING) {
      const ex = (await import(`../data/games/explanations/${slug}.ts`)).EXPLANATIONS
      expect(Object.keys(ex), slug).toEqual([])
    }
  }, 30_000)
})
