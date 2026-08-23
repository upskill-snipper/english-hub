// ─── Practice question types ─────────────────────────────────────────────────
//
// Lifted verbatim out of the former single 636 KB `src/data/practice-data.ts`
// (Aug 2026) so the /practice page can import the TYPE without pulling any
// question data into its client bundle.

export interface ModelAnswers {
  [grade: string]: string
}

export interface PracticeQuestion {
  id: string
  board: string
  paper?: number
  questionType?: string
  type?: string
  title?: string
  extract: string
  extractSource?: string
  question: string
  marks?: number
  timing?: string
  modelAnswers: ModelAnswers
  markScheme: string[]
  examinerTips: string[]
}
