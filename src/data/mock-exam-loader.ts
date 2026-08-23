// ─── Lazy Mock Exam Paper Loader ─────────────────────────────────────────────
// Fetches ONE paper's full content (sections, questions, extracts, model
// answers, mark schemes) on demand.
//
// DEFECT THIS FIXES: the previous version of this file dynamic-imported
// './mock-exams' under a 'default' key. That module is the aggregator which
// statically re-imports every bank, so the "lazy" chunk was the entire ~2.8 MB
// paper set - the saving was zero. (It also had no importers at all.) The map
// below therefore points at leaf modules only: `./mock-exams/base` rather than
// `./mock-exams`, and the 24 individual chunk files rather than
// `./mock-exams/index`, so opening a paper downloads roughly 70-190 KB
// instead of the whole bank.
//
// Listing UI must NOT call these functions to build a list - use
// `MOCK_EXAM_INDEX` from '@/data/mock-exams/paper-index' for that.

import { MOCK_EXAM_INDEX } from './mock-exams/paper-index'
import type { MockExamPaper, MockExamSourceKey } from './mock-exams/types'

/**
 * One dynamic import per leaf module. Typed as a total `Record` over
 * `MockExamSourceKey` so that adding a source key without adding a loader is a
 * compile error rather than a blank screen for a student mid-revision.
 */
const SOURCE_LOADERS: Record<MockExamSourceKey, () => Promise<MockExamPaper[]>> = {
  base: () => import('./mock-exams/base').then((m) => m.mockExamPapers),
  'aqa-lit': () => import('./mock-exams-aqa-lit').then((m) => m.aqaLitMockExams),
  wjec: () => import('./mock-exams-wjec').then((m) => m.wjecMockExams),
  edexcel: () => import('./mock-exams-edexcel').then((m) => m.edexcelMockExams),
  caie: () => import('./mock-exams-caie').then((m) => m.caieMockExams),
  ial: () => import('./mock-exams-ial').then((m) => m.ialMockExams),
  'chunk/aqa-p1-a': () => import('./mock-exams/aqa-p1-a').then((m) => m.aqaP1A),
  'chunk/aqa-p1-b': () => import('./mock-exams/aqa-p1-b').then((m) => m.aqaP1B),
  'chunk/aqa-p1-c': () => import('./mock-exams/aqa-p1-c').then((m) => m.aqaP1C),
  'chunk/aqa-p2-a': () => import('./mock-exams/aqa-p2-a').then((m) => m.aqaP2A),
  'chunk/aqa-p2-b': () => import('./mock-exams/aqa-p2-b').then((m) => m.aqaP2B),
  'chunk/aqa-p2-c': () => import('./mock-exams/aqa-p2-c').then((m) => m.aqaP2C),
  'chunk/edexcel-p1-a': () => import('./mock-exams/edexcel-p1-a').then((m) => m.edexcelP1A),
  'chunk/edexcel-p1-b': () => import('./mock-exams/edexcel-p1-b').then((m) => m.edexcelP1B),
  'chunk/edexcel-p1-c': () => import('./mock-exams/edexcel-p1-c').then((m) => m.edexcelP1C),
  'chunk/edexcel-p2-a': () => import('./mock-exams/edexcel-p2-a').then((m) => m.edexcelP2A),
  'chunk/edexcel-p2-b': () => import('./mock-exams/edexcel-p2-b').then((m) => m.edexcelP2B),
  'chunk/edexcel-p2-c': () => import('./mock-exams/edexcel-p2-c').then((m) => m.edexcelP2C),
  'chunk/ocr-p1-a': () => import('./mock-exams/ocr-p1-a').then((m) => m.ocrP1A),
  'chunk/ocr-p1-b': () => import('./mock-exams/ocr-p1-b').then((m) => m.ocrP1B),
  'chunk/ocr-p1-c': () => import('./mock-exams/ocr-p1-c').then((m) => m.ocrP1C),
  'chunk/ocr-p2-a': () => import('./mock-exams/ocr-p2-a').then((m) => m.ocrP2A),
  'chunk/ocr-p2-b': () => import('./mock-exams/ocr-p2-b').then((m) => m.ocrP2B),
  'chunk/ocr-p2-c': () => import('./mock-exams/ocr-p2-c').then((m) => m.ocrP2C),
  'chunk/wjec-c1-a': () => import('./mock-exams/wjec-c1-a').then((m) => m.wjecC1A),
  'chunk/wjec-c1-b': () => import('./mock-exams/wjec-c1-b').then((m) => m.wjecC1B),
  'chunk/wjec-c1-c': () => import('./mock-exams/wjec-c1-c').then((m) => m.wjecC1C),
  'chunk/wjec-c2-a': () => import('./mock-exams/wjec-c2-a').then((m) => m.wjecC2A),
  'chunk/wjec-c2-b': () => import('./mock-exams/wjec-c2-b').then((m) => m.wjecC2B),
  'chunk/wjec-c2-c': () => import('./mock-exams/wjec-c2-c').then((m) => m.wjecC2C),
  'chunk/aqa-lit-p1-a': () => import('./mock-exams/aqa-lit-p1-a').then((m) => m.aqaLitP1Papers),
  'chunk/aqa-lit-p2-a': () => import('./mock-exams/aqa-lit-p2-a').then((m) => m.aqaLitP2Papers),
  'chunk/edexcel-lit-a': () => import('./mock-exams/edexcel-lit-a').then((m) => m.edexcelLitPapers),
  'chunk/ocr-lit-a': () => import('./mock-exams/ocr-lit-a').then((m) => m.ocrLitPapers),
  'chunk/wjec-lit-a': () => import('./mock-exams/wjec-lit-a').then((m) => m.wjecLitPapers),
}

/** Papers already resolved this session, keyed by paper id. */
const paperCache = new Map<string, MockExamPaper>()

/**
 * In-flight module promises, keyed by source. Deduplicates concurrent loads so
 * that a remount (React strict mode, or a fast back/forward) does not kick off
 * a second network request for the same chunk.
 */
const sourceRequests = new Map<MockExamSourceKey, Promise<MockExamPaper[]>>()

function loadSource(source: MockExamSourceKey): Promise<MockExamPaper[]> {
  const existing = sourceRequests.get(source)
  if (existing) return existing
  const request = SOURCE_LOADERS[source]().catch((error) => {
    // Drop the failed promise so a retry (e.g. after a dropped connection) can
    // actually re-request the chunk instead of replaying the rejection.
    sourceRequests.delete(source)
    throw error
  })
  sourceRequests.set(source, request)
  return request
}

/**
 * Full content for one paper, or `null` if the id is not in the index.
 *
 * Returning `null` rather than throwing lets callers render an honest
 * "paper not found" state; they must never substitute placeholder questions.
 */
export async function loadMockExamPaper(id: string): Promise<MockExamPaper | null> {
  const cached = paperCache.get(id)
  if (cached) return cached

  const summary = MOCK_EXAM_INDEX.find((p) => p.id === id)
  if (!summary) return null

  const papers = await loadSource(summary.source)
  // Cache the whole module's papers: the student is likely to open a sibling
  // paper next, and the chunk is already in memory.
  for (const paper of papers) {
    if (!paperCache.has(paper.id)) paperCache.set(paper.id, paper)
  }

  return paperCache.get(id) ?? null
}

/** Test/diagnostic hook - clears the in-memory caches. */
export function __resetMockExamLoaderCache(): void {
  paperCache.clear()
  sourceRequests.clear()
}
