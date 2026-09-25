/**
 * How much of a copyrighted text a study guide may quote, and why these numbers.
 *
 * THE LAW. Quotation for criticism and review is lawful fair dealing under the
 * Copyright, Designs and Patents Act 1988, s.30(1), where the work has been made
 * public, the use carries a sufficient acknowledgement, and the use is fair. The
 * Act sets no word count. Fairness turns on how much is taken against what the
 * analysis needs, and on whether the use competes with the work itself.
 *
 * s.32, illustration for instruction, is NOT available to this site: it requires
 * a non-commercial purpose, and the site sells subscriptions. Everything here
 * rests on s.30.
 *
 * THE BENCHMARK the law leaves room for. The Society of Authors and the
 * Publishers Association have long said they would usually regard as fair
 * dealing for criticism or review a single extract of up to 400 words, or several
 * none over 300 words and totalling 800, from a prose work, and up to 40 lines of
 * a poem provided that is no more than a quarter of it.
 *
 * WHY THE HOUSE RULE IS TIGHTER THAN THAT, and stays tighter (25 September 2026).
 * The founder asked for the full room the law gives. The guides here are written
 * with an AI assistant whose own policy does not allow it to reproduce copyrighted
 * text beyond short quotations, or to rebuild a work from excerpts, whatever the
 * law would permit; its output is filtered to enforce that, and an audit agent
 * reading the Blood Brothers pages was stopped by the filter on 25 September. So
 * every guide it writes holds to the site's long-standing rule of quotations under
 * 15 words, and longer passages from copyrighted texts are pointed to and
 * paraphrased rather than printed. Printing more is possible, by a human editor
 * working to the benchmark above or under a licence (PLSclear, the publisher, or a
 * CLA licence), and is the founder's decision, not this file's.
 *
 * TWO GUARDS FAIRNESS NEEDS ON TOP OF THE PER-QUOTATION LIMIT.
 * - A short work cannot give up a large share of itself in fragments. Many short
 *   phrases from a twenty-line poem can amount to the poem. So the total quoted
 *   from a poem or a short work is capped as a share of its length.
 * - Every quotation must be followed by analysis of it. Quotation that is
 *   decoration is not criticism, and the defence falls with it.
 *
 * Change a number here and every guide is re-measured against it by
 * study-guides.test.ts on the next run. Public-domain texts have no limits; their
 * quotations are checked word for word against the held editions instead.
 */

export const FAIR_DEALING = {
  /** Longest single quotation from a copyrighted text: under 15 words. */
  quoteWords: 14,
  /** Longest single quotation from a copyrighted poem, in lines. */
  poemQuoteLines: 2,
  /** Total quoted from a long copyrighted work on one guide page. */
  totalWords: 400,
  /** Below this length a prose work is short, and quoted by share instead. */
  shortWorkWords: 3000,
  /** Share of a short prose work that may be quoted in total. */
  shortWorkShare: 0.1,
  /** Share of a copyrighted poem that may be quoted in total, measured in words. */
  poemShare: 0.15,
} as const

export type Limits = {
  kind: 'prose' | 'short' | 'poem'
  quoteWords: number
  quoteLines?: number
  totalWords: number
}

/**
 * The limits for one copyrighted work, from its form and its length.
 *
 * `length` is the length of what the student studies: the anthology extract,
 * not the whole book it comes from. Unknown length is treated as the tightest
 * case, so a guide that does not record the length cannot loosen its limits by
 * leaving it out.
 */
export function limitsFor(form: string, length?: { words?: number; lines?: number }): Limits {
  const words = length?.words ?? 0
  if (form === 'poem') {
    return {
      kind: 'poem',
      quoteWords: FAIR_DEALING.quoteWords,
      quoteLines: FAIR_DEALING.poemQuoteLines,
      totalWords: words > 0 ? Math.floor(words * FAIR_DEALING.poemShare) : 20,
    }
  }
  if (words === 0 || words < FAIR_DEALING.shortWorkWords) {
    return {
      kind: 'short',
      quoteWords: FAIR_DEALING.quoteWords,
      totalWords: words > 0 ? Math.floor(words * FAIR_DEALING.shortWorkShare) : 60,
    }
  }
  return { kind: 'prose', quoteWords: FAIR_DEALING.quoteWords, totalWords: FAIR_DEALING.totalWords }
}
