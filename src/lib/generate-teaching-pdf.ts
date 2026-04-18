'use client'

/**
 * generate-teaching-pdf.ts
 *
 * Generates professional teaching materials using the Anthology template system.
 * Each function preserves its original signature so callers do not need updating,
 * but internally converts data to Anthology content schemas and delegates to
 * `generateAnthologyPdf()`.
 */

import { generateAnthologyPdf } from './anthology'
import type {
  AnthologyBrand,
  AnthologyCover,
  AnthologyFooter,
  LessonPlanContent,
  WorksheetContent,
  MarkSchemeContent,
  HomeworkContent,
  LessonActivity,
  WorksheetQuestionContent,
  MarkSchemeAnswerContent,
  HomeworkQuestionContent,
  AnthologyDocument,
  StudyGuideContent,
  StudyGuideChapter,
} from './anthology'

// ─── Exported types (unchanged for backward compatibility) ──────────────────

export interface LessonPlanData {
  title: string
  duration: string
  yearGroup: string
  examBoard: string
  text: string
  objectives: string[]
  starterActivity: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  mainActivities: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }[]
  plenary: {
    title: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  keyVocabulary: string[]
  resourcesNeeded: string[]
  homework?: string
  teacherNotes?: string[]
}

export interface WorksheetQuestion {
  question: string
  type: "short-answer" | "extended-writing" | "multiple-choice" | "quote-analysis"
  marks: number
  lines?: number
  options?: string[] // for multiple-choice
  sourceQuote?: string // for quote-analysis
}

export interface MarkSchemeAnswer {
  questionNumber: number
  question: string
  marks: number
  ao: string
  markingCriteria: string[]
  exampleTop: string
  exampleMid: string
  exampleLower: string
  commonMisconceptions: string[]
}

export interface RevisionGuideData {
  text: string
  examBoard: string
  plotSummary: { section: string; summary: string }[]
  characters: { name: string; role: string; keyQuotes: string[]; analysis: string }[]
  themes: { theme: string; explanation: string; keyMoments: string[]; quotes: string[] }[]
  keyQuotes: { quote: string; speaker: string; context: string; analysis: string }[]
  examTips: string[]
  practiceQuestions: string[]
}

export interface HomeworkQuestion {
  question: string
  marks: number
  lines: number
  modelAnswer?: string
}

export interface HomeworkData {
  title: string
  topic: string
  homeworkType: string
  yearGroup: string
  targetGrade: string
  estimatedTime: string
  instructions: string
  questions: HomeworkQuestion[]
  successCriteria: string[]
  extensionTasks: string[]
  markScheme: string[]
}

// ─── Shared helpers ─────────────────────────────────────────────────────────

function currentDate(): string {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

function pickAccentWord(title: string): string {
  // Filter out very short / generic words and pick the longest remaining word
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'is',
    'it', 'at', 'by', 'as', 'be', 'do', 'no', 'if', 'up', 'so', 'we',
    'my', 'with', 'from', 'that', 'this', 'was', 'are', 'has', 'had',
  ])
  const words = title.split(/\s+/).filter(w => w.length > 0)
  const candidates = words.filter(w => !stopWords.has(w.toLowerCase()) && w.length > 2)
  if (candidates.length === 0) return words[0] || title
  // Prefer the longest meaningful word
  return candidates.reduce((a, b) => b.length > a.length ? b : a)
}

function makeBrand(docType: string): AnthologyBrand {
  return {
    edition: `Teaching Resource \u00b7 ${currentDate()}`,
    code: docType,
  }
}

function makeCover(title: string, superText: string, sub: string, titleSize?: number): AnthologyCover {
  return {
    super: superText,
    titleLines: [title],
    accentWord: pickAccentWord(title),
    sub,
    titleSize,
  }
}

function makeFooter(): AnthologyFooter {
  return {
    left: 'The English Hub',
    centre: `Teaching Resource \u00b7 ${currentDate()}`,
    right: 'theenglishhub.app',
  }
}

// ═══════════════════════════════════════════════════════════════════════════
//  1. LESSON PLAN GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateLessonPlan(topic: string, data: LessonPlanData): void {
  const activities: LessonActivity[] = []

  // Starter
  activities.push({
    kicker: 'STARTER',
    title: data.starterActivity.title,
    duration: data.starterActivity.duration,
    instructions: data.starterActivity.instructions,
    differentiation: data.starterActivity.differentiation,
  })

  // Main activities
  data.mainActivities.forEach((act, i) => {
    activities.push({
      kicker: `MAIN ACTIVITY ${i + 1}`,
      title: act.title,
      duration: act.duration,
      instructions: act.instructions,
      differentiation: act.differentiation,
    })
  })

  // Plenary
  activities.push({
    kicker: 'PLENARY / AFL',
    title: data.plenary.title,
    duration: data.duration, // use lesson duration as fallback
    instructions: data.plenary.instructions,
    differentiation: data.plenary.differentiation,
  })

  const content: LessonPlanContent = {
    brand: makeBrand('Lesson Plan'),
    cover: makeCover(
      data.title,
      `${topic.toUpperCase()} \u00b7 ${data.text.toUpperCase()}`,
      `${data.yearGroup} \u00b7 ${data.examBoard} \u00b7 ${data.duration}`,
    ),
    objectives: data.objectives,
    activities,
    keywords: data.keyVocabulary,
    resources: data.resourcesNeeded,
    homework: data.homework,
    teacherNotes: data.teacherNotes,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'lesson-plan', content })
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. WORKSHEET GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateWorksheet(
  topic: string,
  meta: { title: string; instructions: string; text: string; yearGroup: string; examBoard: string },
  questions: WorksheetQuestion[],
): void {
  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)

  const anthologyQuestions: WorksheetQuestionContent[] = questions.map((q) => ({
    question: q.question,
    type: q.type,
    marks: q.marks,
    lines: q.lines,
    options: q.options,
    sourceQuote: q.sourceQuote,
  }))

  const content: WorksheetContent = {
    brand: makeBrand('Worksheet'),
    cover: makeCover(
      meta.title,
      `${topic.toUpperCase()} \u00b7 ${meta.text.toUpperCase()}`,
      `${meta.yearGroup} \u00b7 ${meta.examBoard} \u00b7 ${totalMarks} marks`,
    ),
    instructions: meta.instructions,
    totalMarks,
    questions: anthologyQuestions,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'worksheet', content })
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. MARK SCHEME GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateMarkScheme(
  topic: string,
  meta: { title: string; text: string; yearGroup: string; examBoard: string },
  answers: MarkSchemeAnswer[],
): void {
  const totalMarks = answers.reduce((s, a) => s + a.marks, 0)

  const anthologyAnswers: MarkSchemeAnswerContent[] = answers.map((a) => ({
    questionNumber: a.questionNumber,
    question: a.question,
    marks: a.marks,
    ao: a.ao,
    markingCriteria: a.markingCriteria,
    exampleTop: a.exampleTop,
    exampleMid: a.exampleMid,
    exampleLower: a.exampleLower,
    commonMisconceptions: a.commonMisconceptions,
  }))

  const content: MarkSchemeContent = {
    brand: makeBrand('Mark Scheme'),
    cover: makeCover(
      meta.title,
      `${topic.toUpperCase()} \u00b7 ANSWER GUIDE`,
      `${meta.yearGroup} \u00b7 ${meta.examBoard} \u00b7 ${totalMarks} marks \u00b7 Teacher Copy`,
    ),
    totalMarks,
    answers: anthologyAnswers,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'mark-scheme', content })
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. REVISION GUIDE GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateRevisionGuide(topic: string, data: RevisionGuideData): void {
  const chapters: StudyGuideChapter[] = []

  // Section: Plot / Context Summary
  chapters.push({ kind: 'section', title: 'Plot / Context Summary', numPrefix: 'I' })
  data.plotSummary.forEach((p) => {
    chapters.push({
      kind: 'narrative',
      title: p.section,
      body: p.summary,
    })
  })

  // Section: Character Profiles
  chapters.push({ kind: 'section', title: 'Character Profiles', numPrefix: 'II' })
  data.characters.forEach((c) => {
    chapters.push({
      kind: 'narrative',
      title: c.name,
      body: `${c.role}\n\nAnalysis: ${c.analysis}`,
    })
    c.keyQuotes.forEach((q) => {
      chapters.push({ kind: 'pullquote', body: q, cite: c.name })
    })
  })

  // Section: Key Themes
  chapters.push({ kind: 'section', title: 'Key Themes', numPrefix: 'III' })
  data.themes.forEach((t) => {
    chapters.push({
      kind: 'narrative',
      title: t.theme,
      body: t.explanation,
    })
    if (t.keyMoments.length > 0) {
      chapters.push({ kind: 'quote-list', title: 'Key Moments', items: t.keyMoments })
    }
    t.quotes.forEach((q) => {
      chapters.push({ kind: 'pullquote', body: q, cite: t.theme })
    })
  })

  // Section: Key Quotes with Analysis
  chapters.push({ kind: 'section', title: 'Key Quotes with Analysis', numPrefix: 'IV' })
  data.keyQuotes.forEach((q) => {
    chapters.push({ kind: 'pullquote', body: q.quote, cite: `${q.speaker} \u2014 ${q.context}` })
    chapters.push({ kind: 'narrative', body: q.analysis })
  })

  // Section: Exam Technique Tips
  chapters.push({ kind: 'section', title: 'Exam Technique Tips', numPrefix: 'V' })
  chapters.push({ kind: 'quote-list', items: data.examTips })

  // Section: Practice Questions
  chapters.push({ kind: 'section', title: 'Practice Questions', numPrefix: 'VI' })
  chapters.push({ kind: 'quote-list', items: data.practiceQuestions })

  const title = `${topic} \u2014 Revision Guide`

  const content: StudyGuideContent = {
    brand: makeBrand('Revision Guide'),
    cover: makeCover(
      title,
      `${data.text.toUpperCase()} \u00b7 REVISION GUIDE`,
      `${data.examBoard}`,
    ),
    chapters,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'study-guide', content })
}

// ═══════════════════════════════════════════════════════════════════════════
//  5. HOMEWORK ASSIGNMENT GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateHomeworkPdf(data: HomeworkData): void {
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)

  const anthologyQuestions: HomeworkQuestionContent[] = data.questions.map((q) => ({
    question: q.question,
    marks: q.marks,
    lines: q.lines,
  }))

  const content: HomeworkContent = {
    brand: makeBrand('Homework'),
    cover: makeCover(
      data.title,
      `${data.topic.toUpperCase()} \u00b7 ${data.homeworkType.toUpperCase()}`,
      `${data.yearGroup} \u00b7 Grade ${data.targetGrade} \u00b7 ${data.estimatedTime} \u00b7 ${totalMarks} marks`,
    ),
    instructions: data.instructions,
    totalMarks,
    successCriteria: data.successCriteria,
    questions: anthologyQuestions,
    extensionTasks: data.extensionTasks,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'homework', content })
}

// ═══════════════════════════════════════════════════════════════════════════
//  6. HOMEWORK MARK SCHEME GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateHomeworkMarkSchemePdf(data: HomeworkData): void {
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)

  const anthologyAnswers: MarkSchemeAnswerContent[] = data.questions.map((q, i) => ({
    questionNumber: i + 1,
    question: q.question,
    marks: q.marks,
    ao: '',
    markingCriteria: data.markScheme,
    exampleTop: q.modelAnswer || '',
    exampleMid: '',
    exampleLower: '',
    commonMisconceptions: [],
  }))

  const content: MarkSchemeContent = {
    brand: makeBrand('Homework Answer Guide'),
    cover: makeCover(
      `${data.title} \u2014 Answer Guide`,
      `${data.topic.toUpperCase()} \u00b7 ANSWER GUIDE`,
      `${data.yearGroup} \u00b7 Grade ${data.targetGrade} \u00b7 ${totalMarks} marks \u00b7 Teacher Copy`,
    ),
    totalMarks,
    answers: anthologyAnswers,
    footer: makeFooter(),
  }

  generateAnthologyPdf({ type: 'mark-scheme', content })
}
