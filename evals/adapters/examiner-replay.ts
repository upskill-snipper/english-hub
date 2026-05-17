// ─── Adapter: examiner-replay (offline, deterministic baseline) ──────────────
//
// Replays each case's *examiner* AO marks through the production deterministic
// `predictGrade`. This isolates the grade-BOUNDARY model's validity (the AQA
// cross-board proxy concern, doc 06 §C) from LLM marking noise, and is fully
// pure/offline so it is always safe for CI.
//
// It is NOT an LLM-accuracy measurement (`evaluatesLlm: false`): feeding the
// gold AO marks back in can only ever exercise the mark→grade arithmetic, never
// the model's ability to *award* those marks. The CI gate uses this distinction
// to refuse certifying an accuracy figure from this adapter alone.
// ────────────────────────────────────────────────────────────────────────────

import { predictGrade } from '@/lib/marking/grade-predictor'
import type { AOScore } from '@/lib/marking/mark-schemes/types'

import type { GoldStandardCase, MarkerAdapter, MarkOutcome } from '../types'

function denominatorFor(c: GoldStandardCase): number {
  return c.questionMaxMarks ?? c.examinerMarks.reduce((s, m) => s + m.maxMarks, 0)
}

export const examinerReplayAdapter: MarkerAdapter = {
  name: 'examiner-replay (offline, deterministic boundary model)',
  evaluatesLlm: false,
  predict(input: GoldStandardCase): MarkOutcome {
    const aoScores: AOScore[] = input.examinerMarks.map((m) => ({
      id: m.id,
      label: m.id,
      marks: m.marks,
      maxMarks: m.maxMarks,
      band: '',
      justification: '',
    }))
    const prediction = predictGrade(aoScores, denominatorFor(input), input.board)
    return {
      grade: prediction.grade,
      // By construction the predicted AO marks ARE the examiner marks here, so
      // AO-MAE is trivially 0 for this adapter — surfaced for shape parity only.
      aoMarks: input.examinerMarks.map((m) => ({
        id: m.id,
        marks: m.marks,
        maxMarks: m.maxMarks,
      })),
      boundarySource: prediction.boundarySource,
    }
  },
}
