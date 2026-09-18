import { describe, it, expect } from 'vitest'
import { getMarkScheme, listMarkSchemeIds } from '@/lib/marking/mark-schemes'
import { scaleAO } from '@/lib/marking/mark-schemes/scale-ao'
import type { AssessmentObjective } from '@/lib/marking/mark-schemes/types'

/**
 * A band grid that stops short of the marks it claims to award (EXAM-7).
 *
 * THE DEFECT (19 September 2026). Several schemes define one base AO with a
 * full Level 1-6 ladder and reuse it at different tariffs per question, using
 * an object spread:
 *
 *     { ...ao1, maxMarks: 16, weighting: 16 / 40 }
 *
 * That overrides the DECLARED total and leaves the ladder untouched. In
 * `ocr-lit.ts` the base ladder tops out at 12, so three sections of OCR
 * Literature told the marker the objective was worth 16 marks and handed it a
 * grid whose top level read "11-12 marks". A candidate who deserved 16 could
 * not be awarded more than 12. Six objectives were in that state.
 *
 * WHY NOTHING CAUGHT IT. Every total still added up. Question and paper totals
 * are computed from `maxMarks`, which was correct throughout - and the existing
 * spec-verification tests check exactly those totals. Only the grid the model
 * actually marks against was short, and no test had ever looked at a grid.
 * This is the "fails and reports success" shape: a green suite, correct
 * arithmetic, and four unawardable marks per objective.
 */

interface Offence {
  scheme: string
  question: string
  ao: string
  detail: string
}

function everyObjective(): { scheme: string; question: string; ao: AssessmentObjective }[] {
  const out: { scheme: string; question: string; ao: AssessmentObjective }[] = []
  for (const id of listMarkSchemeIds()) {
    const scheme = getMarkScheme(id)
    if (!scheme) continue
    for (const q of scheme.questions) {
      for (const ao of q.assessmentObjectives) {
        out.push({ scheme: id, question: q.id, ao })
      }
    }
  }
  return out
}

const ALL = everyObjective()

describe('every band grid in the corpus', () => {
  it('covers the marks its objective claims to be worth', () => {
    const offences: Offence[] = []
    for (const { scheme, question, ao } of ALL) {
      const top = Math.max(...ao.bands.map((b) => b.maxMarks))
      if (top !== ao.maxMarks) {
        offences.push({
          scheme,
          question,
          ao: ao.id,
          detail: `declares ${ao.maxMarks} marks, grid tops out at ${top}`,
        })
      }
    }
    expect(
      offences.map((o) => `${o.scheme}/${o.question}/${o.ao}: ${o.detail}`),
      'these objectives cannot award the marks they claim - a candidate at the ' +
        'top of the range has no band to be placed in',
    ).toEqual([])
  })

  it('starts at 0 or 1, so there is a band for the weakest real answer', () => {
    // NOT "starts at 1". The first draft of this assertion required 1 and
    // failed on 35 objectives across the Eduqas papers, which open their
    // ladders at 0. A "0 marks - nothing creditable" band is a real feature of
    // published mark schemes, not a defect, and rewriting the corpus to
    // satisfy a rule I had invented would have been the exact failure this
    // file exists to catch. The assertion was wrong; the corpus was not.
    const offences: string[] = []
    for (const { scheme, question, ao } of ALL) {
      const bottom = Math.min(...ao.bands.map((b) => b.minMarks))
      if (bottom > 1) offences.push(`${scheme}/${question}/${ao.id}: starts at ${bottom}`)
    }
    expect(offences).toEqual([])
  })

  /**
   * Overlapping ladders that are KNOWN, RECORDED and deliberately not fixed
   * tonight.
   *
   * `eduqas-lang.ts` keeps its own local copy of the rescaler, which rounds
   * both band edges independently and so produces overlaps - a band ending at
   * 1 followed by another starting at 1, meaning two different level
   * descriptors claim the same mark.
   *
   * Moving it onto the shared `scaleAO` genuinely fixes those overlaps. It was
   * done, and then reverted, because it has a consequence outside this file:
   * the cleaner ladder for A2's two-mark objective drops below the examiner
   * pack's "a real grid has at least three levels" heuristic, which
   * reclassifies a five-mark question as a single three-mark grid and breaks
   * `examiner/__tests__/packs.test.ts`. A two-mark objective cannot have three
   * meaningful levels; the heuristic is what needs revisiting, and that is the
   * examiner-pack half of EXAM-7, which is gated on a board document.
   *
   * So the defect is enumerated rather than hidden. This list must SHRINK,
   * never grow: adding to it needs a deliberate edit and a reason.
   */
  const KNOWN_OVERLAPS = new Set([
    'eduqas-lang-comp1/A2/AO1',
    'eduqas-lang-comp1/A2/AO2',
    'eduqas-lang-comp1/A5/AO6',
    'eduqas-lang-comp2/A2/AO1',
    'eduqas-lang-comp2/A2/AO2',
    'eduqas-lang-comp2/A5/AO6',
  ])

  it('is contiguous, with no mark falling between two levels', () => {
    // The rounding bug the shared scaleAO was written to kill: independently
    // rounded edges produced a band ending at 17 followed by one starting at
    // 19, so a response worth 18 had nowhere to go.
    const offences: string[] = []
    for (const { scheme, question, ao } of ALL) {
      if (KNOWN_OVERLAPS.has(`${scheme}/${question}/${ao.id}`)) continue
      const sorted = [...ao.bands].sort((a, b) => a.minMarks - b.minMarks)
      for (let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1]!
        const cur = sorted[i]!
        if (cur.minMarks !== prev.maxMarks + 1) {
          offences.push(`${scheme}/${question}/${ao.id}: ${prev.maxMarks} then ${cur.minMarks}`)
        }
      }
    }
    expect(offences).toEqual([])
  })

  it('never inverts a band', () => {
    const offences: string[] = []
    for (const { scheme, question, ao } of ALL) {
      for (const b of ao.bands) {
        if (b.maxMarks < b.minMarks) {
          offences.push(`${scheme}/${question}/${ao.id}: ${b.band} ${b.minMarks}-${b.maxMarks}`)
        }
      }
    }
    expect(offences).toEqual([])
  })

  it('has exactly the overlaps we know about, and no others', () => {
    // Pins the exception list. If a scheme is fixed, this fails and the entry
    // must be deleted; if a new overlap appears, this fails and it must be
    // fixed rather than quietly added.
    const overlapping = new Set<string>()
    for (const { scheme, question, ao } of ALL) {
      const sorted = [...ao.bands].sort((a, b) => a.minMarks - b.minMarks)
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i]!.minMarks !== sorted[i - 1]!.maxMarks + 1) {
          overlapping.add(`${scheme}/${question}/${ao.id}`)
        }
      }
    }
    expect([...overlapping].sort()).toEqual([...KNOWN_OVERLAPS].sort())
  })

  it('checks a corpus of a realistic size', () => {
    // Guards against the walk silently returning nothing and every assertion
    // above passing vacuously. 132 objectives across 21 schemes today; the
    // floor is set below that rather than at it so adding a paper does not
    // need this line edited, but far enough above zero to be meaningful.
    expect(ALL.length).toBeGreaterThan(100)
  })
})

// ─── The shared rescaler ────────────────────────────────────────────────────

const LADDER = {
  id: 'AO1',
  label: 'AO1 - test',
  description: 'test',
  bands: [1, 2, 3, 4, 5, 6].map((n) => ({
    band: `Level ${n}`,
    minMarks: n * 2 - 1,
    maxMarks: n * 2,
    label: `L${n}`,
    descriptor: 'd',
    indicators: ['i'],
  })),
}

describe('scaleAO', () => {
  it.each([4, 5, 8, 10, 12, 16, 20, 30, 40])('reaches exactly %s', (max) => {
    const out = scaleAO(LADDER, max, 1)
    expect(Math.max(...out.bands.map((b) => b.maxMarks))).toBe(max)
    expect(Math.min(...out.bands.map((b) => b.minMarks))).toBe(1)
  })

  it.each([4, 5, 8, 10, 12, 16, 20, 30, 40])('stays contiguous at %s', (max) => {
    const bands = scaleAO(LADDER, max, 1).bands
    for (let i = 1; i < bands.length; i++) {
      expect(bands[i]!.minMarks).toBe(bands[i - 1]!.maxMarks + 1)
    }
  })

  it('drops levels that a small tariff squeezes out rather than inverting them', () => {
    const bands = scaleAO(LADDER, 3, 1).bands
    expect(bands.length).toBeLessThan(6)
    for (const b of bands) expect(b.maxMarks).toBeGreaterThanOrEqual(b.minMarks)
  })

  it('leaves a ladder that already fits completely alone', () => {
    const out = scaleAO(LADDER, 12, 1)
    expect(out.bands).toEqual(LADDER.bands)
  })
})

// ─── AO4 on England GCSE Literature ─────────────────────────────────────────

describe('AO4 on the England GCSE Literature papers', () => {
  /**
   * An EXPLICIT allowlist, not `subject === 'English Literature'`.
   *
   * Pearson's IGCSE 4ET1 (`edexcel-igcse-lit`) is a different qualification
   * with a genuinely different AO scheme - its AO4 IS "Explore connections
   * across texts". A subject-wide rule would fail on it immediately, and
   * "fixing" it to match would corrupt a correct file.
   */
  const ENGLAND_GCSE_LIT = [
    'aqa-lit-paper1',
    'edexcel-lit-paper1',
    'edexcel-lit-paper2',
    'eduqas-lit-comp1',
    'eduqas-lit-comp2',
    'ocr-lit-component01',
    'ocr-lit-component02',
  ]

  it('names accuracy, not comparison', () => {
    // AO4 in GCSE Literature is technical accuracy. Comparison is not a
    // separate objective; it is assessed within AO1 and AO2. Told the
    // objective was "compare and contrast", the model awarded these marks for
    // comparison skill and never assessed accuracy at all.
    const offences: string[] = []
    for (const id of ENGLAND_GCSE_LIT) {
      const scheme = getMarkScheme(id)
      if (!scheme) continue
      for (const q of scheme.questions) {
        for (const ao of q.assessmentObjectives) {
          if (ao.id !== 'AO4') continue
          if (/compare|comparison|connection|relate/i.test(ao.label)) {
            offences.push(`${id}/${q.id}: label "${ao.label}"`)
          }
          if (
            !/accuracy|spelling|punctuation|grammar|vocabulary/i.test(ao.label + ao.description)
          ) {
            offences.push(`${id}/${q.id}: neither label nor description mentions accuracy`)
          }
        }
      }
    }
    expect(offences).toEqual([])
  })

  it('leaves the Pearson IGCSE alone, whose AO4 really is connections', () => {
    // The guard against the allowlist being widened to `subject` later.
    const igcse = getMarkScheme('edexcel-igcse-lit')
    if (!igcse) return
    const labels = igcse.questions
      .flatMap((q) => q.assessmentObjectives)
      .filter((a) => a.id === 'AO4')
      .map((a) => a.label)
    if (labels.length > 0) {
      expect(labels.some((l) => /connection/i.test(l))).toBe(true)
    }
  })
})
