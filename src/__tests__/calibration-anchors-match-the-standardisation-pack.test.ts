import { describe, it, expect } from 'vitest'
import { EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION } from '@/lib/marking/calibration/edexcel-igcse-lang-paper1'
import { getCalibrationAnchor } from '@/lib/marking/calibration'
import { getMarkScheme } from '@/lib/marking/mark-schemes'

/**
 * The marks a real examiner gave, and whether ours still match them.
 *
 * THE DEFECT (19 September 2026). The Q4 and Q5 calibration anchors cited the
 * official OLS standardisation pack for Series 2606GQ and did not match it.
 * Eight of the ten marks were wrong:
 *
 *   Q4  claimed 1, 4, 6, 9, 11   pack says 3, 6, 7, 10, 11
 *   Q5  claimed 6, 11, 13, 16, 21   pack says 6, 10, 14, 18, 22
 *
 * These summaries are injected into the marking system prompt by
 * getCalibrationAnchor(). They are the model's only concrete sense of what a
 * given mark looks like on a real script. Every Q4 anchor was two or three
 * marks too LOW, so the AI marker had been calibrated to under-mark the
 * language-analysis question - quietly, on a paid feature, for children.
 *
 * Nothing failed and nothing logged an error. The marks were simply a little
 * mean, everywhere, which is exactly the failure shape this repository exists
 * to catch: it reports success and is wrong.
 *
 * WHY THE VALUES ARE PINNED HERE. A calibration anchor cannot be checked by
 * reasoning about it - the only authority is the pack. Five of the eight
 * corrections are stated in the standardisers' own words on the script ("Top of
 * level 3", "So this scores 10", "for level 4 on 14", "Top of level 4", "This
 * is full marks"). Pinning them means a future edit has to disagree with a
 * recorded source rather than with an opinion.
 */

const SCHEME_ID = 'edexcel-igcse-lang-paper1'

/** The marks on the five standardised scripts for each question, in order. */
const PACK_MARKS: Record<string, number[]> = {
  Q4: [3, 6, 7, 10, 11],
  Q5: [6, 10, 14, 18, 22],
}

/** "10/12 (top of Level 4): ..." -> { mark: 10, outOf: 12, level: 4 } */
function parse(summary: string): { mark: number; outOf: number; level: number | null } {
  const m = /^(\d+)\/(\d+)/.exec(summary)
  if (!m) throw new Error(`anchor summary does not start with a mark: ${summary}`)
  const lvl = /Level (\d)/.exec(summary)
  return {
    mark: Number(m[1]),
    outOf: Number(m[2]),
    level: lvl ? Number(lvl[1]) : null,
  }
}

describe('the marks match the pack', () => {
  it.each(Object.keys(PACK_MARKS))('%s', (qid) => {
    const q = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION[qid]
    expect(q, `no calibration for ${qid}`).toBeTruthy()
    const marks = q!.exemplars.map((e) => parse(e.summary).mark)
    expect(marks).toEqual(PACK_MARKS[qid])
  })

  it('still has five standardised scripts per question, as the pack does', () => {
    for (const qid of Object.keys(PACK_MARKS)) {
      expect(EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION[qid]!.exemplars).toHaveLength(5)
    }
  })

  it('runs from low to high, which is what makes it a calibration ladder', () => {
    for (const qid of Object.keys(PACK_MARKS)) {
      const marks = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION[qid]!.exemplars.map(
        (e) => parse(e.summary).mark,
      )
      expect(
        [...marks].sort((a, b) => a - b),
        qid,
      ).toEqual(marks)
    }
  })
})

describe('every anchor is consistent with the real mark scheme', () => {
  // A second, independent guard. The marks above are pinned to a source; this
  // checks they are internally possible, so a typo that happens to match a
  // stale pinned value still fails.
  const scheme = getMarkScheme(SCHEME_ID)

  it('has a scheme to check against', () => {
    expect(scheme).toBeTruthy()
  })

  it.each(['Q4', 'Q5'])('%s: each mark is out of the right total', (qid) => {
    const question = scheme!.questions.find((q) => q.id === qid)
    expect(question, `${qid} missing from the scheme`).toBeTruthy()
    const total = question!.assessmentObjectives.reduce((n, ao) => n + ao.maxMarks, 0)
    for (const ex of EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION[qid]!.exemplars) {
      const { mark, outOf } = parse(ex.summary)
      expect(outOf, `${ex.ref} is marked out of ${outOf}, scheme says ${total}`).toBe(total)
      expect(mark).toBeLessThanOrEqual(total)
      expect(mark).toBeGreaterThan(0)
    }
  })

  it.each(['Q4', 'Q5'])('%s: each stated level really contains that mark', (qid) => {
    const question = scheme!.questions.find((q) => q.id === qid)!
    const ao = question.assessmentObjectives[0]!
    for (const ex of EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION[qid]!.exemplars) {
      const { mark, level } = parse(ex.summary)
      if (level === null) continue
      const band = ao.bands.find((b) => b.band === `Level ${level}`)
      expect(band, `${ex.ref} names Level ${level}, which is not in the grid`).toBeTruthy()
      expect(
        mark >= band!.minMarks && mark <= band!.maxMarks,
        `${ex.ref}: ${mark} is outside Level ${level} (${band!.minMarks}-${band!.maxMarks})`,
      ).toBe(true)
    }
  })
})

describe('the discriminators the standardisers actually used', () => {
  // The level descriptors do not say any of this, and it is what moves a mark.
  // Losing these rules would not fail any other test.
  it('Q4 records that missing references cap a response at Level 3', () => {
    const rules = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION.Q4!.rules!.join(' ')
    expect(rules).toMatch(/reference/i)
    expect(rules).toMatch(/Level 3/)
  })

  it('Q4 records the explores-versus-analyses ceiling', () => {
    const rules = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION.Q4!.rules!.join(' ')
    expect(rules).toMatch(/explores/i)
    expect(rules).toMatch(/analyses/i)
  })

  it('Q5 records that the range of comparisons is the main driver', () => {
    const rules = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION.Q5!.rules!.join(' ')
    expect(rules).toMatch(/range/i)
    expect(rules).toMatch(/comparison/i)
  })

  it('Q5 keeps the single-text cap, which is a mark-scheme rule not an opinion', () => {
    const rules = EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION.Q5!.rules!.join(' ')
    expect(rules).toMatch(/only one of the two texts|SINGLE-TEXT CAP/i)
    expect(rules).toContain('8')
  })
})

describe('the anchors reach the prompt', () => {
  // A calibration pack nothing injects is decoration. This asserts the wiring,
  // because the marks being right is worth nothing if the marker never sees
  // them.
  it.each(['Q4', 'Q5'])('%s produces a prompt block carrying its marks', (qid) => {
    const block = getCalibrationAnchor(SCHEME_ID, qid)
    expect(block, `no anchor block for ${qid}`).toBeTruthy()
    for (const mark of PACK_MARKS[qid]!) {
      expect(block).toContain(`${mark}/`)
    }
    expect(block).toContain('STANDARDISATION ANCHORS')
  })

  it('returns nothing for a scheme with no pack, rather than an empty block', () => {
    expect(getCalibrationAnchor('aqa-lit-paper1', 'Q1')).toBeNull()
  })
})
