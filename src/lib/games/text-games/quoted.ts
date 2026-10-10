/**
 * How much of a text a guided path quotes, measured the way a study guide is,
 * and whether that stays inside the fair-dealing limits for a text in
 * copyright.
 *
 * WHY (10 October 2026). Texts in copyright have guided games from today. A
 * path is built only from its guide's own data, so everything it quotes is
 * something the guide page already quotes within the limits in
 * src/lib/study-guides/fair-dealing.ts. This module proves that for each path
 * rather than trusting it: a future round that quoted from anywhere else, or
 * joined two quotations into one, is caught when the path is built (load.ts
 * throws, so the page fails loudly instead of printing it) and on every test
 * run (text-games-are-built-from-the-guides.test.ts).
 *
 * What counts as quoted is what quotedTotals() counts on a guide page: a
 * "where" or "finish" item's quotation whole, and anything inside quotation
 * marks in every other string a path shows (an explanation, a method's
 * example, a moment's significance, an option), each passage counted once.
 */

import { limitsFor } from '@/lib/study-guides/fair-dealing'
import type { StudyGuide } from '@/lib/study-guides/types'
import { lineCount, quotedSpans, quotedTotals, wordCount } from '@/lib/study-guides/validate'

import { normForMatch } from './text'
import type { TextGame } from './types'

/** Fields that hold a quotation of the text whole. */
const VERBATIM = new Set(['quote'])
/** Fields that hold no words of the text at all: keys and art references. */
const NOT_TEXT = new Set(['id', 'kind', 'mode', 'panel', 'portrait', 'portraits'])

function collect(value: unknown, key: string, out: string[]): void {
  if (typeof value === 'string') {
    if (VERBATIM.has(key)) out.push(value)
    else if (!NOT_TEXT.has(key)) out.push(...quotedSpans(value))
  } else if (Array.isArray(value)) {
    for (const v of value) collect(v, key, out)
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) collect(v, k, out)
  }
}

/** Every passage of the text a path shows, longest first, each counted once. */
export function quotedInGame(game: TextGame): { words: number; passages: string[] } {
  const all: string[] = []
  for (const round of game.rounds) for (const item of round.items) collect(item, '', all)
  collect(game.acknowledgement, 'acknowledgement', all)
  const byLength = [...new Set(all.map((q) => q.trim()).filter((q) => wordCount(q) > 0))].sort(
    (a, b) => wordCount(b) - wordCount(a),
  )
  const kept: string[] = []
  for (const q of byLength) {
    const n = normForMatch(q)
    if (!kept.some((k) => normForMatch(k).includes(n))) kept.push(q)
  }
  return { words: kept.reduce((t, q) => t + wordCount(q), 0), passages: kept }
}

/**
 * What is wrong with a path's quotations for a text in copyright, in words
 * that print none of the text at length; empty when nothing is, and always
 * empty for a text in the public domain, which has no limits (its quotations
 * are checked word for word against the held edition instead).
 */
export function overTheLimits(game: TextGame, guide: StudyGuide): string[] {
  if (guide.rights.status !== 'copyright') return []
  const lim = limitsFor(guide.form, guide.workLength)
  const { words, passages } = quotedInGame(game)
  const problems: string[] = []
  for (const q of passages) {
    const n = wordCount(q)
    if (n > lim.quoteWords) {
      problems.push(`a quotation of ${n} words, over the ${lim.quoteWords}-word limit`)
    }
    if (lim.quoteLines && lineCount(q) > lim.quoteLines) {
      problems.push(`a quotation of ${lineCount(q)} lines, over the ${lim.quoteLines}-line limit`)
    }
  }
  if (words > lim.totalWords) {
    problems.push(`${words} words quoted in all, over the ${lim.totalWords}-word limit`)
  }
  // Nothing the guide page does not quote itself, so the path can never
  // quote more of the work than the page its limits were set for.
  const guideText = quotedTotals(guide).passages.map(normForMatch)
  for (const q of passages) {
    const n = normForMatch(q)
    if (!guideText.some((g) => g.includes(n))) {
      problems.push(`a quotation its guide does not make, beginning "${q.slice(0, 30)}"`)
    }
  }
  return problems
}
