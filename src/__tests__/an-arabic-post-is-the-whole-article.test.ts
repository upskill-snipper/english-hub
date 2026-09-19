import { describe, it, expect } from 'vitest'
import {
  findTruncatedTranslations,
  MIN_HEADING_RATIO,
  MIN_WORD_RATIO,
} from '../../scripts/check-translation-parity.mjs'

/**
 * Four Arabic translations were missing half their article.
 *
 * FOUND 20 September 2026, sweeping the third dimension nobody had swept:
 * every Arabic body against its English original.
 *
 *   gcse-english-prose-analysis-techniques   7 of 13 headings,  541 of 1,324 words
 *   gothic-literature-techniques-gcse        8 of 14 headings,  567 of 1,332 words
 *   shakespeare-sonnet-analysis-gcse        10 of 16 headings,  648 of 1,358 words
 *   gcse-english-literature-revision-tips   12 of 16 headings,  746 of 1,307 words
 *
 * Not looser phrasing. Whole sections gone, the article stopping partway down.
 * An Arabic reader got between 41% and 57% of what the English reader got, on
 * a page that gave no sign of being partial.
 *
 * ALL FOUR WERE ALREADY HELD BACK an hour earlier, for a completely unrelated
 * reason: their English bodies were the wrong articles. That is luck. Four
 * defects in one batch of six posts is not a system catching anything, and if
 * the English halves had been sound these four would still be live and still
 * be half-missing. This check is the part that is not luck.
 *
 * THE THRESHOLDS were measured across all 40 pairs before being fixed, because
 * a ratio chosen by intuition either cries wolf or sleeps through the fault:
 *
 *   sound translations   0.89-1.00 of the headings,  0.77-0.89 of the words
 *   the four bad ones    0.54-0.75 of the headings,  0.41-0.57 of the words
 *
 * Both cut points sit inside a clear gap and the two measures agree on all 40.
 *
 * MUTATION RUN: clearing `draft: true` from gothic-literature-techniques-gcse
 * republishes it, and the check reports it at 0.57 headings / 0.42 words and
 * exits 1. Verified the edit landed before the run.
 *
 * WHAT THIS CANNOT SEE, stated rather than implied: whether the Arabic is any
 * good. It counts structure. A fluent mistranslation and a stilted accurate
 * one are identical to it, and the register problem across the Arabic surface
 * (514 strings with Latin spliced in, 150 stopping mid-sentence) is a separate
 * human question that is on Calum's list, not this one.
 */

describe('the check is looking at the real corpus', () => {
  it('compared a realistic number of pairs', () => {
    // Vacuity guard. An empty result from a walker that matched no `.ar.mdx`
    // file is indistinguishable from a complete corpus.
    const { checked } = findTruncatedTranslations()
    expect(checked).toBeGreaterThan(25)
  })

  it('no published translation is materially shorter than its original', () => {
    const { truncated } = findTruncatedTranslations()
    const named = truncated.map(
      (t: { slug: string; headings?: string; words?: string; reason?: string }) =>
        t.reason ? `${t.slug}: ${t.reason}` : `${t.slug}: headings ${t.headings}, words ${t.words}`,
    )
    expect(named, 'an Arabic reader is getting a fraction of the article').toEqual([])
  })
})

describe('the thresholds are the measured ones, not round numbers picked later', () => {
  it('sit between the sound translations and the truncated ones', () => {
    // Pinned so a future loosening has to be deliberate. The four bad
    // translations topped out at 0.75 headings and 0.57 words; the worst sound
    // one was 0.89 and 0.77. Anything outside these bounds has stopped
    // separating the two groups.
    expect(MIN_HEADING_RATIO).toBeGreaterThan(0.75)
    expect(MIN_HEADING_RATIO).toBeLessThan(0.89)
    expect(MIN_WORD_RATIO).toBeGreaterThan(0.57)
    expect(MIN_WORD_RATIO).toBeLessThan(0.77)
  })
})
