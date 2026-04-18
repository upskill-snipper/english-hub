'use client'

/**
 * generate-docx.ts
 *
 * Generates Word-compatible .doc files using the Anthology template system.
 * All exported function signatures are preserved for backward compatibility.
 * Internally, data is converted to Anthology content schemas and rendered
 * with the warm cream/terracotta Anthology styling.
 */

import { downloadAnthologyWord } from '@/lib/anthology'
import { anthologyWordHtml } from '@/lib/anthology/html-shell'
import type {
  AnthologyBrand,
  AnthologyCover,
  AnthologyFooter,
  LessonPlanContent,
  WorksheetContent,
  MarkSchemeContent,
  HomeworkContent,
  LessonActivity,
} from '@/lib/anthology'

// ─── Shared helpers ────────────────────────────────────────────────────────

function formatDate(): string {
  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Pick the longest non-trivial word from a title for the cover accent */
function pickAccentWord(title: string): string {
  const words = title.split(/\s+/).filter((w) => w.length > 3)
  if (words.length === 0) return title.split(/\s+/)[0] || ''
  return words.reduce((a, b) => (a.length >= b.length ? a : b))
}

function makeBrand(code: string): AnthologyBrand {
  return {
    edition: `Teaching Resource \u00b7 ${formatDate()}`,
    code,
  }
}

function makeCover(
  superText: string,
  titleLines: string[],
  sub: string,
): AnthologyCover {
  const fullTitle = titleLines.join(' ')
  return {
    super: superText,
    titleLines,
    accentWord: pickAccentWord(fullTitle),
    sub,
  }
}

function makeFooter(code: string): AnthologyFooter {
  return {
    left: 'The English Hub \u00b7 theenglishhub.app',
    centre: `Teaching Resource \u00b7 ${formatDate()}`,
    right: code,
  }
}

// ─── Core download function (backward-compatible) ────────────────────────

/**
 * Downloads a Word-compatible .doc file from raw HTML content.
 * Now uses the Anthology CSS styling (cream/terracotta, Newsreader serif).
 *
 * Kept for backward compatibility -- prefer the typed generator functions
 * or `downloadAnthologyWord()` for new code.
 */
export function downloadAsWord(title: string, htmlContent: string, fileName?: string) {
  const brand = makeBrand('DOCUMENT')
  const cover = makeCover(title.toUpperCase(), [title], 'Teaching Resource')
  const footer = makeFooter('DOCUMENT')

  const html = anthologyWordHtml({
    title,
    brand,
    cover,
    bodyHtml: htmlContent,
    footer,
  })

  const blob = new Blob(['\ufeff' + html], { type: 'application/msword' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = (fileName || title.replace(/[^a-zA-Z0-9]/g, '-')) + '.doc'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Types (exported, unchanged) ──────────────────────────────────────────

export interface WordLessonPlanData {
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

export interface WordWorksheetQuestion {
  question: string
  type: 'short-answer' | 'extended-writing' | 'multiple-choice' | 'quote-analysis'
  marks: number
  lines?: number
  options?: string[]
  sourceQuote?: string
}

export interface WordMarkSchemeAnswer {
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

export interface WordHomeworkData {
  title: string
  topic: string
  homeworkType: string
  yearGroup: string
  targetGrade: string
  estimatedTime: string
  instructions: string
  questions: { question: string; marks: number; lines: number; modelAnswer?: string }[]
  successCriteria: string[]
  extensionTasks: string[]
  markScheme: string[]
}

// ═══════════════════════════════════════════════════════════════════════════
//  1. LESSON PLAN -- Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateLessonPlanWord(topic: string, data: WordLessonPlanData): void {
  const code = 'LESSON PLAN'
  const brand = makeBrand(code)
  const cover = makeCover(
    topic.toUpperCase(),
    [data.title],
    `${data.text} \u00b7 ${data.yearGroup} \u00b7 ${data.examBoard} \u00b7 ${data.duration}`,
  )
  const footer = makeFooter(code)

  // Convert activities to Anthology LessonActivity[]
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
    duration: '',
    instructions: data.plenary.instructions,
    differentiation: data.plenary.differentiation,
  })

  const content: LessonPlanContent = {
    brand,
    cover,
    objectives: data.objectives,
    activities,
    keywords: data.keyVocabulary,
    resources: data.resourcesNeeded,
    homework: data.homework,
    teacherNotes: data.teacherNotes,
    footer,
  }

  downloadAnthologyWord(
    { type: 'lesson-plan', content },
    `Lesson-Plan-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`,
  )
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. WORKSHEET -- Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateWorksheetWord(
  topic: string,
  meta: { title: string; instructions: string; text: string; yearGroup: string; examBoard: string },
  questions: WordWorksheetQuestion[],
): void {
  const code = 'WORKSHEET'
  const brand = makeBrand(code)
  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)
  const cover = makeCover(
    topic.toUpperCase(),
    [meta.title],
    `${meta.text} \u00b7 ${meta.yearGroup} \u00b7 ${meta.examBoard} \u00b7 ${totalMarks} marks`,
  )
  const footer = makeFooter(code)

  const content: WorksheetContent = {
    brand,
    cover,
    instructions: meta.instructions,
    totalMarks,
    questions: questions.map((q) => ({
      question: q.question,
      type: q.type,
      marks: q.marks,
      lines: q.lines,
      options: q.options,
      sourceQuote: q.sourceQuote,
    })),
    footer,
  }

  downloadAnthologyWord(
    { type: 'worksheet', content },
    `Worksheet-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`,
  )
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. MARK SCHEME -- Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateMarkSchemeWord(
  topic: string,
  meta: { title: string; text: string; yearGroup: string; examBoard: string },
  answers: WordMarkSchemeAnswer[],
): void {
  const code = 'MARK SCHEME'
  const brand = makeBrand(code)
  const totalMarks = answers.reduce((s, a) => s + a.marks, 0)
  const cover = makeCover(
    topic.toUpperCase(),
    [meta.title],
    `${meta.text} \u00b7 ${meta.yearGroup} \u00b7 ${meta.examBoard} \u00b7 Answer Guide (Teacher Copy)`,
  )
  const footer = makeFooter(code)

  const content: MarkSchemeContent = {
    brand,
    cover,
    totalMarks,
    answers: answers.map((a) => ({
      questionNumber: a.questionNumber,
      question: a.question,
      marks: a.marks,
      ao: a.ao,
      markingCriteria: a.markingCriteria,
      exampleTop: a.exampleTop,
      exampleMid: a.exampleMid,
      exampleLower: a.exampleLower,
      commonMisconceptions: a.commonMisconceptions,
    })),
    footer,
  }

  downloadAnthologyWord(
    { type: 'mark-scheme', content },
    `Mark-Scheme-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`,
  )
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. HOMEWORK ASSIGNMENT -- Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateHomeworkWord(data: WordHomeworkData): void {
  const code = 'HOMEWORK'
  const brand = makeBrand(code)
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)
  const cover = makeCover(
    data.topic.toUpperCase(),
    [data.title],
    `${data.homeworkType} \u00b7 ${data.yearGroup} \u00b7 Grade ${data.targetGrade} \u00b7 ${data.estimatedTime}`,
  )
  const footer = makeFooter(code)

  const content: HomeworkContent = {
    brand,
    cover,
    instructions: data.instructions,
    totalMarks,
    successCriteria: data.successCriteria,
    questions: data.questions.map((q) => ({
      question: q.question,
      marks: q.marks,
      lines: q.lines,
    })),
    extensionTasks: data.extensionTasks,
    footer,
  }

  downloadAnthologyWord(
    { type: 'homework', content },
    `Homework-${data.topic.replace(/[^a-zA-Z0-9]/g, '-')}`,
  )
}
