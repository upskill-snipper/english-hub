import { describe, it, expect } from 'vitest'
import { findOrphans } from '../../scripts/check-tr-literals-have-translations.mjs'

/**
 * Editing English copy silently deletes its Arabic.
 *
 * FOUND 19 September 2026, by doing it. Twenty-one resource pages localise
 * with a LOCAL helper rather than the dictionary:
 *
 *   const tr = (en: string): string => {
 *     if (_lang !== 'ar') return en
 *     for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
 *     return en
 *   }
 *
 * The lookup key is the English sentence itself. Correcting the Edexcel GCSE
 * tariffs (EXAM-3) rewrote 26 of those sentences, and every one of them stopped
 * matching: the loop found nothing, returned the English, and the Arabic page
 * quietly lost a whole question table. No error, no log, no failing test. The
 * English page looked perfect, which is the only page anyone was looking at.
 *
 * This is the house pattern exactly - a thing that fails and reports success -
 * and it is unusually easy to trip, because the trigger is "improve some copy".
 *
 * WHAT THIS ASSERTS, and why it is a count rather than a ban.
 *
 * 74 literals across other pages were already orphaned before tonight, mostly
 * section headings added after the translation pass. They are real, but fixing
 * them means writing Arabic for other people's pages and is not this item.
 * Pinning the number is the same device as scripts/schema-drift-known.json and
 * the KNOWN map in e2e/accessibility.spec.ts: a red result then means something
 * NEW, which is the only way a number like this keeps being read.
 *
 * If you fix some, lower the pin. If you add a tr() literal, add its Arabic.
 */

const PINNED_ORPHANS = 74

/** The pages corrected under EXAM-3, which must stay at zero. */
const MUST_BE_COMPLETE = 'src/app/resources/english-language/edexcel'

describe('the local-STRINGS pages are actually being checked', () => {
  it('found a substantial number of literals, not zero', () => {
    // The vacuity guard. Every assertion below passes trivially if the walker
    // matched no pages at all, which is how this kind of check goes quiet: the
    // pattern it greps for gets refactored and the report stays green forever.
    const { checked, report } = findOrphans()
    expect(checked).toBeGreaterThan(3000)
    expect(report.length).toBeGreaterThan(0)
  })
})

describe('the pages corrected tonight keep their Arabic', () => {
  it('no orphaned string anywhere under the Edexcel GCSE language pages', () => {
    const { report } = findOrphans()
    const offenders = report
      .filter((r: { page: string }) => r.page.includes(MUST_BE_COMPLETE))
      .flatMap((r: { page: string; missing: string[] }) =>
        r.missing.map((m: string) => `${r.page}: ${m.slice(0, 70)}`),
      )
    expect(
      offenders,
      'a tr() literal on these pages has no matching en: in its content.ts, so /ar renders English',
    ).toEqual([])
  })
})

describe('the rest of the site does not get worse', () => {
  it('the orphan count is exactly the number pinned above', () => {
    // Not "at most". An allowlist that outlives its entries is how a checker
    // starts lying, so fixing some has to come with lowering the pin.
    const { orphans } = findOrphans()
    expect(
      orphans,
      orphans > PINNED_ORPHANS
        ? `${orphans - PINNED_ORPHANS} new untranslated tr() literal(s). Add the Arabic to the sibling content.ts, or run: node scripts/check-tr-literals-have-translations.mjs --all`
        : `${PINNED_ORPHANS - orphans} orphan(s) have been fixed. Lower PINNED_ORPHANS to ${orphans}.`,
    ).toBe(PINNED_ORPHANS)
  })
})
