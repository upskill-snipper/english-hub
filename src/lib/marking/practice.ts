// ─── Practice-mark comparison (examiner calibration) ─────────────────────────
//
// Pure helper for the examiner Practice zone: compares a marker's attempt on a
// specimen gold script to the expert "gold" mark, so a new examiner can
// calibrate (mark blind → reveal → see the gap) before marking live.
//
// Pure + dependency-free so it's unit-testable.
// ────────────────────────────────────────────────────────────────────────────

export interface GoldExpected {
  mark: number | null
  grade: string | null
  ao?: Record<string, number> | null
}

export interface PracticeAttempt {
  /** The marker's numeric mark for the script. */
  score: number | null
  /** Optional grade the marker assigned. */
  grade?: string | null
  /** Optional per-AO marks the marker assigned. */
  ao?: Record<string, number> | null
}

export interface AoComparison {
  ao: string
  expected: number
  yours: number | null
  delta: number | null
}

export interface PracticeComparison {
  expectedMark: number | null
  yourMark: number | null
  /** yourMark − expectedMark (signed). */
  markDelta: number | null
  absError: number | null
  expectedGrade: string | null
  yourGrade: string | null
  gradeMatch: boolean | null
  /** exact (=0), close (≤1), off (>1), or unknown (can't compute). */
  verdict: 'exact' | 'close' | 'off' | 'unknown'
  aoComparison: AoComparison[]
}

export function comparePractice(
  expected: GoldExpected,
  attempt: PracticeAttempt,
): PracticeComparison {
  const expectedMark = typeof expected.mark === 'number' ? expected.mark : null
  const yourMark = typeof attempt.score === 'number' ? attempt.score : null
  const markDelta = expectedMark !== null && yourMark !== null ? yourMark - expectedMark : null
  const absError = markDelta !== null ? Math.abs(markDelta) : null

  let verdict: PracticeComparison['verdict'] = 'unknown'
  if (absError !== null) {
    verdict = absError === 0 ? 'exact' : absError <= 1 ? 'close' : 'off'
  }

  const expectedGrade = expected.grade ?? null
  const yourGrade = attempt.grade ?? null
  const gradeMatch =
    expectedGrade !== null && yourGrade !== null ? expectedGrade === yourGrade : null

  const aoComparison: AoComparison[] = []
  if (expected.ao && typeof expected.ao === 'object') {
    for (const [ao, exp] of Object.entries(expected.ao)) {
      if (typeof exp !== 'number') continue
      const yours = attempt.ao && typeof attempt.ao[ao] === 'number' ? attempt.ao[ao] : null
      aoComparison.push({ ao, expected: exp, yours, delta: yours !== null ? yours - exp : null })
    }
  }

  return {
    expectedMark,
    yourMark,
    markDelta,
    absError,
    expectedGrade,
    yourGrade,
    gradeMatch,
    verdict,
    aoComparison,
  }
}
