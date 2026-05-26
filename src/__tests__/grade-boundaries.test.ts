import { describe, it, expect } from 'vitest'
import {
  GRADE_BOUNDARY_REGISTRY,
  NUMERIC_GRADES,
  getBoundaryTable,
  getUsableBoundaryTable,
  hasUsableThresholds,
  normaliseBoardId,
  thresholdsFromRaw,
  type BoardBoundaryTable,
  type NumericGrade,
} from '@/lib/marking/grade-boundaries'
import { predictGrade } from '@/lib/marking/grade-predictor'
import type { AOScore } from '@/lib/marking/mark-schemes/types'

// ─── Helpers ────────────────────────────────────────────────────────────────

function ao(id: string, marks: number, maxMarks: number): AOScore {
  return { id, label: id, marks, maxMarks, band: '', justification: '' }
}

const REGISTRY_KEYS = Object.keys(GRADE_BOUNDARY_REGISTRY)

// ─── Registry shape ─────────────────────────────────────────────────────────

describe('grade-boundary registry - shape', () => {
  it('exposes the five required boards (+ split Cambridge syllabuses)', () => {
    expect(REGISTRY_KEYS.sort()).toEqual(
      ['aqa', 'cambridge-0500', 'cambridge-0990', 'edexcel', 'eduqas', 'ocr'].sort(),
    )
  })

  it.each(REGISTRY_KEYS)('table "%s" has a well-formed, traceable shape', (key) => {
    const t = GRADE_BOUNDARY_REGISTRY[key]
    expect(t.board).toBe(key)
    expect(typeof t.qualification).toBe('string')
    expect(t.qualification.length).toBeGreaterThan(0)
    expect(t.series).toMatch(/\d{4}/)
    expect(t.sourceUrl).toMatch(/^https?:\/\//)
    expect(t.retrievedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(typeof t.verified).toBe('boolean')
    // Exactly the 9 numeric grades, ordered 9 → 1.
    expect(t.thresholds.map((x) => x.grade)).toEqual([...NUMERIC_GRADES])
  })

  it('ships every board UNVERIFIED (human must verify + flip the flag)', () => {
    for (const key of REGISTRY_KEYS) {
      expect(
        GRADE_BOUNDARY_REGISTRY[key].verified,
        `${key} must stay verified:false until a human checks the PDF`,
      ).toBe(false)
    }
  })

  it('does not fabricate: thresholds are either a sane % or explicit null', () => {
    for (const key of REGISTRY_KEYS) {
      for (const th of GRADE_BOUNDARY_REGISTRY[key].thresholds) {
        if (th.pct !== null) {
          expect(th.pct).toBeGreaterThanOrEqual(0)
          expect(th.pct).toBeLessThanOrEqual(100)
          // A sourced % must carry its audit raw figures.
          expect(th.rawMark).not.toBeNull()
          expect(th.rawMax).not.toBeNull()
        } else {
          expect(th.rawMark).toBeNull()
        }
      }
    }
  })

  it('monotonic: higher grades need a >= percentage (where sourced)', () => {
    for (const key of REGISTRY_KEYS) {
      const pcts = GRADE_BOUNDARY_REGISTRY[key].thresholds
        .map((t) => t.pct)
        .filter((p): p is number => p !== null)
      for (let i = 1; i < pcts.length; i++) {
        // thresholds are ordered 9→1, so each should be <= the previous.
        expect(pcts[i]).toBeLessThanOrEqual(pcts[i - 1])
      }
    }
  })
})

// ─── Percentage-normalisation maths ─────────────────────────────────────────

describe('thresholdsFromRaw - percentage normalisation', () => {
  it('normalises raw marks against the published maximum', () => {
    const raw: Record<NumericGrade, number | null> = {
      '9': 80,
      '8': 70,
      '7': 60,
      '6': 50,
      '5': 40,
      '4': 30,
      '3': 20,
      '2': 10,
      '1': 5,
    }
    const ths = thresholdsFromRaw(160, raw)
    const g9 = ths.find((t) => t.grade === '9')!
    expect(g9.pct).toBeCloseTo(50, 6) // 80/160
    expect(g9.rawMark).toBe(80)
    expect(g9.rawMax).toBe(160)
    const g4 = ths.find((t) => t.grade === '4')!
    expect(g4.pct).toBeCloseTo(18.75, 6) // 30/160
  })

  it('propagates null (unsourced) figures without inventing a %', () => {
    const raw = {
      '9': null,
      '8': null,
      '7': null,
      '6': null,
      '5': null,
      '4': null,
      '3': null,
      '2': null,
      '1': null,
    } as Record<NumericGrade, number | null>
    const ths = thresholdsFromRaw(160, raw)
    expect(ths.every((t) => t.pct === null && t.rawMark === null)).toBe(true)
    expect(hasUsableThresholds(ths)).toBe(false)
  })

  it('guards divide-by-zero when the published max is 0', () => {
    const raw = { ...zeroRaw(), '9': 50 }
    const ths = thresholdsFromRaw(0, raw)
    expect(ths.find((t) => t.grade === '9')!.pct).toBeNull()
  })

  it('normalisation is total-independent (200-max Eduqas vs 160-max boards)', () => {
    // 75% of a 200-mark aggregate and 75% of a 160-mark one map identically.
    const a = thresholdsFromRaw(200, { ...zeroRaw(), '9': 150 })
    const b = thresholdsFromRaw(160, { ...zeroRaw(), '9': 120 })
    expect(a.find((t) => t.grade === '9')!.pct).toBeCloseTo(
      b.find((t) => t.grade === '9')!.pct as number,
      6,
    )
  })
})

function zeroRaw(): Record<NumericGrade, number | null> {
  return {
    '9': 0,
    '8': 0,
    '7': 0,
    '6': 0,
    '5': 0,
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0,
  }
}

// ─── Board id normalisation ─────────────────────────────────────────────────

describe('normaliseBoardId', () => {
  it.each([
    ['AQA', 'aqa'],
    ['aqa-lang-paper1', 'aqa'],
    ['Edexcel', 'edexcel'],
    ['Pearson Edexcel', 'edexcel'],
    ['OCR', 'ocr'],
    ['WJEC Eduqas', 'eduqas'],
    ['eduqas', 'eduqas'],
    ['Cambridge (9-1)', 'cambridge-0990'],
    ['Cambridge', 'cambridge-0500'],
    ['cambridge-0500', 'cambridge-0500'],
    ['cambridge-0990', 'cambridge-0990'],
  ])('maps %s → %s', (input, expected) => {
    expect(normaliseBoardId(input)).toBe(expected)
  })

  it.each([null, undefined, '', '   ', 'totally-unknown-board'])(
    'returns null for unmappable input %s',
    (input) => {
      expect(normaliseBoardId(input as string | null | undefined)).toBeNull()
    },
  )
})

// ─── The unverified-fallback gate ───────────────────────────────────────────

describe('unverified-fallback gate', () => {
  it('getBoundaryTable resolves the (unverified) table for known boards', () => {
    expect(getBoundaryTable('AQA')?.board).toBe('aqa')
    expect(getBoundaryTable('WJEC Eduqas')?.board).toBe('eduqas')
  })

  it('getUsableBoundaryTable returns null while every board is unverified', () => {
    for (const key of REGISTRY_KEYS) {
      expect(getUsableBoundaryTable(key)).toBeNull()
    }
    expect(getUsableBoundaryTable('AQA')).toBeNull()
    expect(getUsableBoundaryTable(null)).toBeNull()
  })

  it('a verified+usable clone passes the gate; a verified-but-null one does not', () => {
    const usable: BoardBoundaryTable = {
      ...GRADE_BOUNDARY_REGISTRY['aqa'],
      verified: true,
    }
    expect(usable.verified).toBe(true)
    expect(hasUsableThresholds(usable.thresholds)).toBe(true)

    // Cambridge is verified-but-all-null → must still be treated as unusable.
    const verifiedButNull: BoardBoundaryTable = {
      ...GRADE_BOUNDARY_REGISTRY['cambridge-0990'],
      verified: true,
    }
    expect(hasUsableThresholds(verifiedButNull.thresholds)).toBe(false)
  })
})

// ─── Predictor integration: gate drives the indicative-only signal ──────────

describe('predictGrade - board-aware gate behaviour', () => {
  it('flags indicativeOnly + aqa-proxy-unverified for an unverified non-AQA board', () => {
    const r = predictGrade([ao('AO1', 50, 100)], 100, 'Edexcel')
    expect(r.indicativeOnly).toBe(true)
    expect(r.boundarySource).toBe('aqa-proxy-unverified')
    expect(r.boundaryDetail).toContain('edexcel')
  })

  it('flags indicativeOnly for an unknown board', () => {
    const r = predictGrade([ao('AO1', 50, 100)], 100, 'some-unknown-board')
    expect(r.indicativeOnly).toBe(true)
    expect(r.boundarySource).toBe('aqa-proxy-unverified')
  })

  it('uses the AQA same-board tag (still indicative) for AQA while unverified', () => {
    const r = predictGrade([ao('AO1', 50, 100)], 100, 'AQA')
    expect(r.boundarySource).toBe('aqa-5yr-average')
    expect(r.indicativeOnly).toBe(true)
  })

  it('no board supplied keeps the legacy proxy tag and is behaviour-preserving', () => {
    const r = predictGrade([ao('AO1', 82, 100)])
    // Same AQA proxy curve as before: 82% => grade 9.
    expect(r.grade).toBe('9')
    expect(r.boundarySource).toBe('aqa-5yr-average-proxy')
    expect(r.indicativeOnly).toBe(true)
  })

  it('fallback proxy curve still grades identically regardless of board', () => {
    const noBoard = predictGrade([ao('AO1', 65, 100)])
    const edexcel = predictGrade([ao('AO1', 65, 100)], 100, 'Edexcel')
    // Until Edexcel is verified, both go through the SAME proxy curve.
    expect(edexcel.grade).toBe(noBoard.grade)
    expect(edexcel.percentage).toBe(noBoard.percentage)
  })
})
