import { describe, it, expect } from 'vitest'
import { getMarkScheme } from '@/lib/marking/mark-schemes'

/**
 * The Cambridge 0500 marker against the syllabus, and 0990 against 0500.
 *
 * WHAT WAS WRONG (EXAM-5, corrected 19 September 2026). Paper 1 was declared as
 * 50 marks and Paper 2 as 65. Both are 80. Every percentage, grade estimate and
 * "you need N more marks" this tool produced for a Cambridge student was
 * computed against a paper that does not exist - and our own product pages
 * print 80 and 80, so the site and the marker openly contradicted each other.
 * This is the board a head of English in Doha knows by heart.
 *
 * WHICH SYLLABUS, WHICH IS THE INTERESTING PART. The backlog item proposed
 * rebuilding to the 2024-2026 syllabus, whose Paper 1 is THREE questions of 30,
 * 25 and 25. That structure is real and it expires with the November 2026
 * series, about two months after this was written. The 2027-2029 syllabus -
 * the one the cohort we are currently teaching will sit - replaces it with FOUR
 * questions of 20. Building the item as written would have shipped an almost
 * obsolete structure for a cohort we do not have.
 *
 * That is the Cambridge rotation hazard, and it is documented at length in
 * cambridge-0475.ts: syllabus PDFs for several series sit side by side on one
 * page with no archived label on any of them, and the superseded ones still
 * load.
 *
 * WHAT IS NOT MODELLED. The November 2026 cohort, who still sit the
 * three-question paper. One scheme per paper cannot express two structures, and
 * defaulting to the expiring one would be wrong for almost every user. The
 * difference is recorded in the scheme file rather than left to be discovered
 * from a complaint.
 */

const P1 = getMarkScheme('cambridge-0500-paper1')
const P2 = getMarkScheme('cambridge-0500-paper2')

describe('the papers are the size the syllabus says', () => {
  it('Paper 1 is 80 marks in two hours, not 50', () => {
    expect(P1?.totalMarks).toBe(80)
    expect(P1?.durationMinutes).toBe(120)
  })

  it('Paper 2 is 80 marks in two hours, not 65', () => {
    expect(P2?.totalMarks).toBe(80)
    expect(P2?.durationMinutes).toBe(120)
  })

  it('and neither still carries the old total', () => {
    // The specific wrong answers, named, so a revert is unmistakable.
    expect(P1?.totalMarks).not.toBe(50)
    expect(P2?.totalMarks).not.toBe(65)
  })
})

describe('Paper 1 is the 2027-2029 four-question structure', () => {
  it('has four questions of twenty marks each', () => {
    expect(P1?.questions.map((q) => q.id)).toEqual(['Q1', 'Q2', 'Q3', 'Q4'])
    expect(P1?.questions.map((q) => q.totalMarks)).toEqual([20, 20, 20, 20])
  })

  it('is not the 2024-2026 three-question structure', () => {
    // 30 / 25 / 25 is the expiring paper. If this ever passes, somebody has
    // rebuilt to a syllabus that is out of date.
    expect(P1?.questions.map((q) => q.totalMarks)).not.toEqual([30, 25, 25])
    expect(P1?.questions).toHaveLength(4)
  })

  it('splits the reading and writing marks as the syllabus does', () => {
    const q = (id: string) => P1?.questions.find((x) => x.id === id)
    const split = (id: string) =>
      (q(id)?.assessmentObjectives ?? []).map((o) => [o.id.startsWith('W') ? 'W' : 'R', o.maxMarks])

    // Q1 comprehension: 20 reading, no writing.
    expect(split('Q1')).toEqual([['R', 20]])
    // Q2 summary: 15 reading (10 on 2a, 5 on 2b) and 5 writing.
    expect(split('Q2')).toEqual([
      ['R', 15],
      ['W', 5],
    ])
    // Q3 short answers and language task: 20 reading, no writing.
    expect(split('Q3')).toEqual([['R', 20]])
    // Q4 extended response: 10 reading and 10 writing.
    expect(split('Q4')).toEqual([
      ['R', 10],
      ['W', 10],
    ])
  })
})

describe('Paper 2 is two sections of forty', () => {
  it('is Directed Writing then Composition', () => {
    expect(P2?.questions.map((q) => q.id)).toEqual(['Section A', 'Section B'])
    expect(P2?.questions.map((q) => q.totalMarks)).toEqual([40, 40])
  })

  it('marks Directed Writing 15 reading and 25 writing', () => {
    const a = P2?.questions.find((q) => q.id === 'Section A')
    expect(
      (a?.assessmentObjectives ?? []).map((o) => [o.id.startsWith('W') ? 'W' : 'R', o.maxMarks]),
    ).toEqual([
      ['R', 15],
      ['W', 25],
    ])
  })

  it('marks Composition entirely on writing', () => {
    const b = P2?.questions.find((q) => q.id === 'Section B')
    const objectives = b?.assessmentObjectives ?? []
    expect(objectives.every((o) => o.id.startsWith('W'))).toBe(true)
    expect(objectives.reduce((n, o) => n + o.maxMarks, 0)).toBe(40)
  })
})

describe('the rescaled bands still work', () => {
  it.each([
    ['cambridge-0500-paper1'],
    ['cambridge-0500-paper2'],
    ['cambridge-0990-paper1'],
    ['cambridge-0990-paper2'],
  ])('%s: every objective can award its maximum and the sums are exact', (id) => {
    // Correcting the totals re-pegged every band. A grid whose top band cannot
    // reach the marks the paper says are available is the OCR Literature defect
    // from earlier in this backlog, and it is silent.
    const scheme = getMarkScheme(id)
    expect(scheme).toBeTruthy()
    for (const q of scheme?.questions ?? []) {
      for (const ao of q.assessmentObjectives) {
        const top = Math.max(...ao.bands.map((b) => b.maxMarks))
        expect(top, `${id} ${q.id}/${ao.id} tops out at ${top} of ${ao.maxMarks}`).toBe(ao.maxMarks)
      }
      const sum = q.assessmentObjectives.reduce((n, o) => n + o.maxMarks, 0)
      expect(sum, `${id} ${q.id} objectives sum to ${sum}, not ${q.totalMarks}`).toBe(q.totalMarks)
    }
    const paper = (scheme?.questions ?? []).reduce((n, q) => n + q.totalMarks, 0)
    expect(paper, `${id} questions sum to ${paper}, not ${scheme?.totalMarks}`).toBe(
      scheme?.totalMarks,
    )
  })

  it('leaves no band with a gap or an overlap', () => {
    for (const id of ['cambridge-0500-paper1', 'cambridge-0500-paper2']) {
      for (const q of getMarkScheme(id)?.questions ?? []) {
        for (const ao of q.assessmentObjectives) {
          let expected = 1
          for (const band of ao.bands) {
            expect(band.minMarks, `${id} ${q.id}/${ao.id} band "${band.band}"`).toBe(expected)
            expect(band.maxMarks).toBeGreaterThanOrEqual(band.minMarks)
            expected = band.maxMarks + 1
          }
        }
      }
    }
  })
})

describe('0990 is 0500, and is no longer allowed to drift from it', () => {
  // THE DEFECT THIS REPLACES. cambridge-0990.ts re-declared `totalMarks: 50`
  // over the spread from 0500, with a comment saying it was stated explicitly
  // "so the paper total cannot silently drift". It is how it drifted: when 0500
  // was corrected, Paper 2 followed because it inherits and Paper 1 did not
  // because it re-declared. A duplicated constant is not a guard against drift,
  // it is the mechanism of it. The guarantee lives here instead.
  const PAIRS: [string, string][] = [
    ['cambridge-0500-paper1', 'cambridge-0990-paper1'],
    ['cambridge-0500-paper2', 'cambridge-0990-paper2'],
  ]

  it.each(PAIRS)('%s and %s differ only by id, board, version and source', (a, b) => {
    const left = getMarkScheme(a)
    const right = getMarkScheme(b)
    expect(left).toBeTruthy()
    expect(right).toBeTruthy()
    const strip = (s: typeof left) => {
      const copy = { ...(s as object) } as Record<string, unknown>
      delete copy.id
      delete copy.board
      delete copy.version
      delete copy.sourceUrl
      return copy
    }
    expect(strip(right)).toEqual(strip(left))
  })

  it('and 0990 really is the 9-1 variant, not a second copy of 0500', () => {
    expect(getMarkScheme('cambridge-0990-paper1')?.board).toBe('Cambridge (9-1)')
    expect(getMarkScheme('cambridge-0500-paper1')?.board).toBe('Cambridge')
  })
})
