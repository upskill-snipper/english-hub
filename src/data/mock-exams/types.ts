// ─── Mock Exam Types ─────────────────────────────────────────────────────────
// Type-only module. Split out of `src/data/mock-exams.ts` so that the paper
// index, the lazy paper loader and the exam chunk files can reference these
// shapes without any chance of pulling the ~2.8 MB paper bank into a client
// bundle through a value import.
//
// `src/data/mock-exams.ts` re-exports everything here, so existing
// `import type { MockExamPaper } from '../mock-exams'` call sites keep working.

export type QuestionType =
  | 'multiple-choice'
  | 'short-answer'
  | 'analysis'
  | 'evaluation'
  | 'creative-writing'
  | 'transactional-writing'
  | 'summary'
  | 'comparison'
  | 'reading-detail'
  | 'reading-analysis'
  | 'reading-analysis-detailed'
  | 'reading-inference'
  | 'reading-evaluation'
  | 'reading-comparison'
  | 'extended-writing'
  | 'extended-response'
  | 'persuasive-writing'
  | 'directed-writing'
  | 'composition'
  | 'personal-narrative'
  | 'retrieval'
  | 'comparative-analysis'

export interface MockExamQuestion {
  id: string
  questionNumber: number
  questionText: string
  marks: number
  suggestedTimeMinutes: number
  questionType: QuestionType
  /** Optional stimulus extract shown above the question */
  extract?: string
  extractSource?: string
  /** Model answer keyed by grade band (or fullMark/partialMarks structure) */
  modelAnswers?: Record<string, string | string[]>
  /** Mark scheme bullet points (flat array) or categorised object */
  markScheme?: string[] | Record<string, string[]>
}

export interface MockExamSection {
  id: string
  title: string
  description: string
  totalMarks: number
  suggestedTimeMinutes: number
  questions: MockExamQuestion[]
}

export interface MockExamPaper {
  id: string
  board: 'AQA' | 'Edexcel' | 'OCR' | 'WJEC' | 'CAIE' | 'IGCSE'
  paperNumber: 1 | 2
  title: string
  subtitle: string
  code: string
  totalTimeMinutes: number
  totalMarks: number
  sections: MockExamSection[]
  /** Extra properties used by some exam data files */
  qualification?: string
  subject?: string
  description?: string
  duration?: number | string
  paper?: string
  component?: string
  spec?: string
  sourceText?: string
  tasks?: unknown[]
}

// ─── Listing index types ─────────────────────────────────────────────────────
// The summary shapes below are what listing/browse UI is allowed to import
// eagerly. They must never gain a field that carries question text, reading
// extracts, model answers or mark schemes: the moment they do, the whole paper
// bank is back in the client bundle, which is the defect this split fixed.

/**
 * Key identifying the single module that owns a paper, used by
 * `src/data/mock-exam-loader.ts` to dynamic-import just that module.
 * Keep in step with `SOURCES` in `_build-index.mjs` and `SOURCE_LOADERS`
 * in the loader - the loader's `Record<MockExamSourceKey, ...>` makes a
 * missing entry a type error rather than a runtime 404.
 */
export type MockExamSourceKey =
  | 'base'
  | 'aqa-lit'
  | 'wjec'
  | 'edexcel'
  | 'caie'
  | 'ial'
  | 'chunk/aqa-p1-a'
  | 'chunk/aqa-p1-b'
  | 'chunk/aqa-p1-c'
  | 'chunk/aqa-p2-a'
  | 'chunk/aqa-p2-b'
  | 'chunk/aqa-p2-c'
  | 'chunk/edexcel-p1-a'
  | 'chunk/edexcel-p1-b'
  | 'chunk/edexcel-p1-c'
  | 'chunk/edexcel-p2-a'
  | 'chunk/edexcel-p2-b'
  | 'chunk/edexcel-p2-c'
  | 'chunk/ocr-p1-a'
  | 'chunk/ocr-p1-b'
  | 'chunk/ocr-p1-c'
  | 'chunk/ocr-p2-a'
  | 'chunk/ocr-p2-b'
  | 'chunk/ocr-p2-c'
  | 'chunk/wjec-c1-a'
  | 'chunk/wjec-c1-b'
  | 'chunk/wjec-c1-c'
  | 'chunk/wjec-c2-a'
  | 'chunk/wjec-c2-b'
  | 'chunk/wjec-c2-c'
  | 'chunk/aqa-lit-p1-a'
  | 'chunk/aqa-lit-p2-a'
  | 'chunk/edexcel-lit-a'
  | 'chunk/ocr-lit-a'
  | 'chunk/wjec-lit-a'

/** Section metadata only - no `questions` array. */
export interface MockExamSectionSummary {
  id: string
  title: string
  totalMarks: number
  suggestedTimeMinutes: number
  /** Number of questions in the section, so listing UI need not load them. */
  questionCount: number
}

/**
 * Everything the listing UI renders about a paper before the student opens it.
 * `board` is intentionally a plain string: some banks tag papers with display
 * names outside `MockExamPaper['board']` (e.g. "IAL", "Eduqas").
 */
export interface MockExamSummary {
  id: string
  board: string
  paperNumber: 1 | 2
  title: string
  subtitle: string
  code: string
  totalTimeMinutes: number
  totalMarks: number
  /** Total questions across all sections. */
  questionCount: number
  sections: MockExamSectionSummary[]
  source: MockExamSourceKey
}
