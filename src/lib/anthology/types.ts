/**
 * types.ts - Anthology Document Content Schemas
 *
 * Every Anthology document is modelled as typed data.
 * Template components consume these types; rendering is separate from content.
 */

// ─── Shared building blocks ────────────────────────────────────────────────

export interface AnthologyBrand {
  /** Centre column - e.g. "Spring Anthology · Vol. III" */
  edition: string
  /** Right column - e.g. "Study Guide № 14" */
  code: string
}

export interface AnthologyCover {
  /** Uppercase mono kicker - e.g. "CLOSE READING · MACBETH I.VII" */
  super: string
  /** Headline lines (joined with <br>). One word in `accentWord` is italic terracotta */
  titleLines: string[]
  /** The single word wrapped in <em> for italic-terracotta accent */
  accentWord: string
  /** Italic standfirst below the headline */
  sub: string
  /** Optional byline - e.g. "Edited by" + "Ms R. Halstead" */
  byline?: { prefix: string; name: string }
  /** Optional font-size override for h1 (default 64px) */
  titleSize?: number
}

export interface AnthologyFooter {
  /** Left column - e.g. "The English Hub · GCSE English" */
  left: string
  /** Centre column - includes <em> for accent. e.g. "Spring Anthology · Vol. <em>III</em>" */
  centre: string
  /** Right column - e.g. "Study Guide № 14 · p. 1" */
  right: string
}

export interface DataCardContent {
  kicker: string
  value: string
  sub: string
  /** Optional list below a divider */
  list?: string[]
}

export interface AoScore {
  label: string
  /** Percentage 0-100 */
  score: number
}

export interface MarginComment {
  /** Anchor label - e.g. "[1] AO2 ★" */
  anchor: string
  body: string
}

// ─── Study Guide ───────────────────────────────────────────────────────────

export type StudyGuideChapter =
  | {
      kind: 'narrative'
      drop?: boolean
      title?: string
      numPrefix?: string
      chapNum?: string
      body: string
      paragraphs?: string[]
      sidebar?: DataCardContent
    }
  | { kind: 'pullquote'; body: string; cite: string }
  | { kind: 'section'; title: string; numPrefix: string }
  | { kind: 'quote-list'; title?: string; numPrefix?: string; items: string[] }
  | { kind: 'callout'; kicker: string; body: string }

export interface StudyGuideContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  chapters: StudyGuideChapter[]
  footer: AnthologyFooter
}

// ─── Essay Feedback ────────────────────────────────────────────────────────

export interface EssayAnnotation {
  /** 'strong' = sage highlight, 'weak' = terracotta underline, undefined = default ochre */
  type?: 'strong' | 'weak'
}

export interface EssayParagraph {
  /** Raw HTML with <mark>, <mark class="strong">, <mark class="weak">, <span class="comment-anchor"> */
  html: string
}

export interface EssayNextStep {
  text: string
}

export interface EssayFeedbackContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  essay: {
    paragraphs: EssayParagraph[]
    marginComments: MarginComment[]
  }
  scores: {
    aos: AoScore[]
    grade: { value: string; label: string }
  }
  nextSteps?: {
    title: string
    numPrefix: string
    items: string[]
  }
  footer: AnthologyFooter
}

// ─── Revision Booklet ──────────────────────────────────────────────────────

export interface IndexItem {
  numeral: string
  label: string
  ref: string
}

export type RevisionSection =
  | { kind: 'index'; title: string; numPrefix: string; items: IndexItem[] }
  | { kind: 'task-list'; title: string; numPrefix: string; items: string[] }
  | {
      kind: 'task-with-callout'
      title: string
      numPrefix: string
      items: string[]
      callout: { kicker: string; body: string }
    }
  | { kind: 'pullquote'; body: string; cite: string }
  | { kind: 'callout'; kicker: string; body: string }

export interface RevisionBookletContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  sections: RevisionSection[]
  footer: AnthologyFooter
}

// ─── Clean Report ──────────────────────────────────────────────────────────

export interface ReportKPI {
  kicker: string
  value: string
  sub: string
}

export interface ReportTableRow {
  cells: string[]
  isSummary?: boolean
}

export interface CleanReportContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  kpis: {
    title: string
    numPrefix: string
    cards: ReportKPI[]
  }
  table?: {
    title: string
    numPrefix: string
    headers: string[]
    rows: ReportTableRow[]
  }
  narrative?: {
    title: string
    numPrefix: string
    paragraphs: string[]
  }
  outlook?: {
    kicker: string
    body: string
  }
  footer: AnthologyFooter
}

// ─── Lesson Plan (teaching resource) ───────────────────────────────────────

export interface LessonActivity {
  kicker: string
  title: string
  duration: string
  instructions: string
  differentiation?: { support: string; core: string; stretch: string }
}

export interface LessonPlanContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  objectives: string[]
  activities: LessonActivity[]
  keywords?: string[]
  resources?: string[]
  homework?: string
  teacherNotes?: string[]
  footer: AnthologyFooter
}

// ─── Worksheet ─────────────────────────────────────────────────────────────

export interface WorksheetQuestionContent {
  question: string
  type: 'short-answer' | 'extended-writing' | 'multiple-choice' | 'quote-analysis'
  marks: number
  lines?: number
  options?: string[]
  sourceQuote?: string
}

export interface WorksheetContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  instructions: string
  totalMarks: number
  questions: WorksheetQuestionContent[]
  footer: AnthologyFooter
}

// ─── Mark Scheme ───────────────────────────────────────────────────────────

export interface MarkSchemeAnswerContent {
  questionNumber: number
  question: string
  marks: number
  ao: string
  markingCriteria: string[]
  exampleTop: string
  exampleMid: string
  exampleLower: string
  commonMisconceptions?: string[]
}

export interface MarkSchemeContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  totalMarks: number
  answers: MarkSchemeAnswerContent[]
  footer: AnthologyFooter
}

// ─── Homework ──────────────────────────────────────────────────────────────

export interface HomeworkQuestionContent {
  question: string
  marks: number
  lines: number
}

export interface HomeworkContent {
  brand: AnthologyBrand
  cover: AnthologyCover
  instructions: string
  totalMarks: number
  successCriteria: string[]
  questions: HomeworkQuestionContent[]
  extensionTasks: string[]
  footer: AnthologyFooter
}

// ─── Union type for all document types ─────────────────────────────────────

export type AnthologyDocument =
  | { type: 'study-guide'; content: StudyGuideContent }
  | { type: 'essay-feedback'; content: EssayFeedbackContent }
  | { type: 'revision-booklet'; content: RevisionBookletContent }
  | { type: 'clean-report'; content: CleanReportContent }
  | { type: 'lesson-plan'; content: LessonPlanContent }
  | { type: 'worksheet'; content: WorksheetContent }
  | { type: 'mark-scheme'; content: MarkSchemeContent }
  | { type: 'homework'; content: HomeworkContent }
