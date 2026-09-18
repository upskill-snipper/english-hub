// ─── Examiner pack registry ─────────────────────────────────────────────────
//
// One pack per paper. Every mark scheme registered with the GCSE marker gets a
// published-grid pack automatically, so a new board added there appears here
// with no further work. An exemplar-derived pack registered under the same id
// replaces the derived one for that paper, which is how a paper is "promoted".
//
// Server-only module: it pulls in the whole mark-scheme corpus. The browser
// gets packs one at a time from /api/examiner/packs/[packId].
// ────────────────────────────────────────────────────────────────────────────

import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { derivePack } from './packs/derive'
import { pearsonIgcseEnglishAPaper1 } from './packs/pearson-igcse-english-a-paper1'
import type { ExaminerPack, ExaminerPackSummary } from './types'

const EXEMPLAR_PACKS: readonly ExaminerPack[] = [pearsonIgcseEnglishAPaper1]

function build(): Readonly<Record<string, ExaminerPack>> {
  const out: Record<string, ExaminerPack> = {}
  for (const scheme of Object.values(MARK_SCHEMES)) {
    out[scheme.id] = derivePack(scheme)
  }
  for (const pack of EXEMPLAR_PACKS) {
    out[pack.id] = pack
  }
  return out
}

export const EXAMINER_PACKS: Readonly<Record<string, ExaminerPack>> = build()

export function getExaminerPack(id: string): ExaminerPack | null {
  return EXAMINER_PACKS[id] ?? null
}

export function summarisePack(p: ExaminerPack): ExaminerPackSummary {
  return {
    id: p.id,
    board: p.board,
    boardId: p.boardId,
    qualification: p.qualification,
    subject: p.subject,
    paper: p.paper,
    codes: p.codes,
    title: p.title,
    totalMarks: p.totalMarks,
    calibration: p.calibration,
    questions: p.questions.map((q) => ({
      id: q.id,
      label: q.label,
      title: q.title,
      max: q.max,
      kind: q.kind,
    })),
  }
}

/** Exemplar-derived packs first, then by board, subject and paper. */
export function listExaminerPacks(): ExaminerPackSummary[] {
  return Object.values(EXAMINER_PACKS)
    .sort((a, b) => {
      if (a.calibration !== b.calibration) return a.calibration === 'exemplar-derived' ? -1 : 1
      return (
        a.board.localeCompare(b.board) ||
        a.subject.localeCompare(b.subject) ||
        a.paper.localeCompare(b.paper, undefined, { numeric: true })
      )
    })
    .map(summarisePack)
}
