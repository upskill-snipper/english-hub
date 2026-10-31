// ─── Which model answer a mock question shows ───────────────────────────────
//
// The results view of a mock exam lets the student choose a band ("Grade 4-5",
// "Grade 6-7", "Grade 8-9") and shows each question's model answer for it.
// Questions do not all carry every band: the Language mocks restructured on
// 24 October 2026 carry one strong answer, Grade 8-9, for each question worth
// 6 or more, and the Cambridge 0500 mocks key theirs by letter grade.
//
// Until 31 October 2026 the page looked only for the chosen band, then 6-7,
// then 4-5, and headed whatever it showed with the band the student chose. So
// a student on 4-5 or 6-7 was told no answer was available for a question that
// had one, a fallback answer was labelled as a band it was not, and the
// Cambridge answers never showed at all.

import type { MockExamQuestion } from '@/data/mock-exams/types'

/**
 * Where a model answer's key sits among the bands a student can choose: the
 * 9-1 bands, and Cambridge 0500's letter grades beside the nearest of them.
 */
const BAND_LADDER: Readonly<Record<string, number>> = {
  'Grade 4-5': 0,
  'Grade C': 0,
  'Grade 6-7': 1,
  'Grade B': 1,
  'Grade 8-9': 2,
  'Grade A/A*': 2,
}

/**
 * The model answer to show for the band the student chose, and the band it
 * actually is: that band's own, else the nearest band the question has (the
 * higher on a tie), else whatever answer it carries. Null when it has none.
 */
export function modelAnswerFor(
  answers: MockExamQuestion['modelAnswers'],
  chosen: string,
): { band: string; text: string } | null {
  if (!answers) return null
  const at = BAND_LADDER[chosen] ?? 1
  const rank = (key: string) => [
    key === chosen ? 0 : 1,
    key in BAND_LADDER ? Math.abs(BAND_LADDER[key] - at) : 9,
    -(BAND_LADDER[key] ?? 0),
  ]
  const keys = Object.keys(answers).sort((a, b) => {
    const [ra, rb] = [rank(a), rank(b)]
    return ra[0] - rb[0] || ra[1] - rb[1] || ra[2] - rb[2]
  })
  for (const band of keys) {
    const value = answers[band]
    const text = Array.isArray(value) ? value.join('\n\n') : value
    if (text && text.trim()) return { band, text }
  }
  return null
}
