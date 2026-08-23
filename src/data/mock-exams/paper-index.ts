// ─── Mock Exam Paper Index (public API) ──────────────────────────────────────
// The ONLY mock-exam module a listing or browse surface should import.
//
// DEFECT THIS FIXES: /mock-exams and /dashboard/mock-exam are 'use client'
// pages that imported `getMockExamsByBoard` / `mockExamPapers` from
// '@/data/mock-exams'. That module's aggregation block statically imports
// every paper bank (24 chunk files plus the wjec/caie/edexcel/aqa-lit/ial
// banks), so ~2.8 MB of reading extracts, question text, model answers and
// mark schemes was pulled into those routes' First Load JS purely to render
// paper titles and counts.
//
// Everything here is derived from `index-data.ts`, which is generated from the
// same aggregation and carries metadata only. Full papers are fetched on
// demand by `src/data/mock-exam-loader.ts`.

import { MOCK_EXAM_INDEX } from './index-data'
import type { MockExamSummary, MockExamSectionSummary } from './types'

export { MOCK_EXAM_INDEX }
export type { MockExamSummary, MockExamSectionSummary }

/** Every paper the app knows about, metadata only. */
export function getAllMockExamSummaries(): MockExamSummary[] {
  return MOCK_EXAM_INDEX
}

/** Metadata for every paper tagged with a board display name (e.g. "AQA"). */
export function getMockExamSummariesByBoard(board: string): MockExamSummary[] {
  return MOCK_EXAM_INDEX.filter((p) => p.board === board)
}

/**
 * How many papers a board has. Split out from
 * `getMockExamSummariesByBoard(...).length` because the board cards render
 * this count on every keystroke and had no reason to build an array.
 */
export function countMockExamsByBoard(board: string): number {
  let count = 0
  for (const p of MOCK_EXAM_INDEX) if (p.board === board) count++
  return count
}

export function getMockExamSummaryById(id: string): MockExamSummary | undefined {
  return MOCK_EXAM_INDEX.find((p) => p.id === id)
}

/** Board display names that have at least one paper, in index order. */
export function getAvailableBoards(): string[] {
  return Array.from(new Set(MOCK_EXAM_INDEX.map((p) => p.board)))
}

/** Total number of papers across every board. */
export function getTotalMockExamCount(): number {
  return MOCK_EXAM_INDEX.length
}

/**
 * Human-readable duration, e.g. "1 hour 45 minutes".
 * Lives here rather than in the aggregator so a page can format a paper's
 * time without importing the paper bank.
 */
export function formatExamTime(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} minutes`
  if (m === 0) return `${h} hour${h > 1 ? 's' : ''}`
  return `${h} hour${h > 1 ? 's' : ''} ${m} minutes`
}
