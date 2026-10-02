// @vitest-environment node
import { describe, it, expect, beforeAll } from 'vitest'

import { audit, selfTest, summarise, EXCEPTIONS, SKIPPED } from '../../scripts/check-quotations.mjs'

/**
 * Every quotation the site gives a held text is that text's words.
 *
 * WHY (2 October 2026). Students memorise these quotations for their exams, so
 * a quotation shown as a writer's must be the writer's words, in the wording
 * of the edition the site holds (src/data/full-texts).
 * scripts/check-quotations.mjs reads every page and data file for quotations
 * of the held texts and checks each against its text. A run of it on 2
 * October 2026 found misquotations of 25 of them across the site, and they
 * were corrected that day (the corrected pages' docblocks say what was
 * wrong). But the checker was a command someone had to remember to run, and
 * only the Macbeth and Frankenstein pages and the study guides had a test, so
 * the next misquotation on any other page would have gone out unseen, as all
 * of those had. This runs the checker's own logic, imported rather than
 * copied, so that there is one implementation and the command and the guard
 * cannot disagree.
 *
 * WHAT FAILS IT. Any quotation the checker finds wrong: a changed, added or
 * dropped word, the edition's spelling changed, passages joined or a speech
 * tag cut with no ellipsis, lines out of order, a line from another work, a
 * quotation field in no held text, or the wrong act, scene, chapter or
 * speaker. The message names the file and line, the quotation's first words
 * (never more than eight of them) and why. Put the page right in the held
 * edition's wording; `node scripts/check-quotations.mjs --file <path>` lists
 * one file's quotations with the reason for each.
 *
 * WHAT IS LEFT OUT, AND WHERE IT IS DECLARED. All in the script, so that the
 * command reports what the guard does:
 *   - EXCEPTIONS: quotations the checker takes for a held text's that are not
 *     its words at all (a quiz's wrong option, Orwell's essay on an Animal
 *     Farm page), each with whose words they are. An entry that no longer
 *     matches a quotation fails here, so the list cannot outlive what it
 *     excuses.
 *   - SKIPPED: held texts passed over by decision, each with the date and the
 *     reason. Nothing is recorded that could print more than a word or two of
 *     a skipped text, so a failure here cannot print it.
 *   - OTHER_PRINTINGS, DECLARED, a study guide's quotesFromElsewhere and the
 *     Frankenstein test's NOT_THE_NOVEL: another printing or another source,
 *     said so where the quotation is.
 * The script's docblock says what the checker cannot see.
 *
 * NOT A PASS BY READING NOTHING. A scanner that found no files, or no
 * quotations, would report no misquotations. So the guard also requires the
 * thousands of files and quotations the site has, quotations of every held
 * text it checks, and the checker's reverse test: misquotations of every kind
 * planted in copies of real pages, each of which must be caught, and the
 * short cuts that make the audit fast checked against the long way round,
 * since a short cut gone wrong would read less and report nothing.
 *
 * TIME. The full audit took about 100 seconds when this was written; the
 * checker was made faster for it, with every record of a full run compared
 * against the slower version's and found identical. On the development
 * machine the audit now takes about 18 seconds and this file about 22, so the
 * audit runs once, in beforeAll, with a timeout that allows a slower machine.
 */

let result: ReturnType<typeof audit>

beforeAll(() => {
  result = audit()
}, 300_000)

const show = (r: (typeof result.records)[number]) =>
  `${r.file}:${r.line}  "${r.words8}"  ${r.text}, ${r.why}: ${r.reason}`

describe('every quotation of a held text is the held text', () => {
  it('reads the whole site, and checks quotations of every held text it does not skip', () => {
    expect(result.files).toBeGreaterThan(4000)
    const summary = summarise(result.records)
    const total = summary.reduce((n, e) => n + e.checked, 0)
    expect(total).toBeGreaterThan(15000)
    // Each held text had 171 or more when this was written.
    const unread = summary
      .filter((e) => e.checked < 20)
      .map((e) => `${e.slug}: ${e.checked} checked`)
    expect(
      unread,
      'held texts with almost no quotations checked: is the scanner reading their pages?',
    ).toEqual([])
  })

  it('finds no misquotation of a held text', () => {
    const wrong = result.records.filter((r) => r.verdict === 'wrong').map(show)
    expect(
      wrong,
      'quotations that are not the held text: put each right in the held wording',
    ).toEqual([])
  })

  it('gives every exception a reason, and every one still matches a quotation it excuses', () => {
    const unexplained = EXCEPTIONS.filter((e) => e.why.trim().split(/\s+/).length < 5).map(
      (e) => `${e.file}: "${e.starts}"`,
    )
    expect(unexplained, 'say whose words each is').toEqual([])
    const stale = result.staleExceptions.map((e) => `${e.file}: "${e.starts}" (${e.text})`)
    expect(stale, 'remove these from EXCEPTIONS in scripts/check-quotations.mjs').toEqual([])
  })

  it('records nothing of a skipped text, and says when and why each was skipped', () => {
    // Counted, never listed: a listed record could print the text.
    const skipped = new Set(Object.keys(SKIPPED))
    expect(result.records.filter((r) => r.text !== undefined && skipped.has(r.text)).length).toBe(0)
    for (const why of Object.values(SKIPPED)) expect(why).toMatch(/\b\d{1,2} [A-Z][a-z]+ 20\d\d\b/)
  })

  it('catches misquotations planted in copies of real pages, and its short cuts miss nothing', () => {
    const results = selfTest({ log: () => {} })
    expect(results.length).toBeGreaterThan(50)
    expect(results.filter(([, ok]) => !ok).map(([name]) => name)).toEqual([])
  }, 60_000)
})
