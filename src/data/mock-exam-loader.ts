/**
 * Dynamic mock exam loader - loads exam data by board on demand.
 * Avoids importing all ~650KB of mock exam data on every page.
 */

import type { MockExamPaper } from './mock-exams'

const MOCK_EXAM_LOADERS: Record<string, () => Promise<Record<string, unknown>>> = {
  default: () => import('./mock-exams'),
  aqa: () => import('./mock-exams-aqa'),
  ocr: () => import('./mock-exams-ocr'),
}

const examCache = new Map<string, MockExamPaper[]>()

/**
 * Load mock exams for a specific board key.
 * Keys: 'default' (AQA/Edexcel base), 'aqa' (expanded AQA), 'ocr' (expanded OCR).
 */
export async function loadMockExamsByKey(key: string): Promise<MockExamPaper[]> {
  if (examCache.has(key)) return examCache.get(key)!

  const loader = MOCK_EXAM_LOADERS[key] || MOCK_EXAM_LOADERS.default
  const mod = await loader()
  for (const val of Object.values(mod)) {
    if (Array.isArray(val) && val.length > 0 && 'id' in val[0]) {
      const papers = val as MockExamPaper[]
      examCache.set(key, papers)
      return papers
    }
  }
  return []
}

/**
 * Load all mock exam papers across all sources.
 */
export async function loadAllMockExams(): Promise<MockExamPaper[]> {
  const keys = Object.keys(MOCK_EXAM_LOADERS)
  const results = await Promise.all(keys.map((k) => loadMockExamsByKey(k)))
  // Deduplicate by ID in case of overlaps
  const seen = new Set<string>()
  const all: MockExamPaper[] = []
  for (const papers of results) {
    for (const p of papers) {
      if (!seen.has(p.id)) {
        seen.add(p.id)
        all.push(p)
      }
    }
  }
  return all
}
