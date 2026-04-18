// ─── Content Adapter ────────────────────────────────────────────────────────
// Transforms curriculum presentation content (slide-by-slide data from
// `src/data/curriculum/*-presentation-content.ts`) into the `LessonPlanData`
// shape consumed by the PPTX generation API route.
//
// Also bridges `TeacherPresentation` records from `src/data/teacher-powerpoints.ts`.

import type { LessonPresentation, SlideContent } from '@/data/curriculum/y7-presentation-content'

// ─── Target interface (mirrors the API route's local copy) ──────────────────

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

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Estimate a per-slide duration based on total slides (minutes). */
function estimateSlideDuration(totalSlides: number): number {
  // Rough estimate: 50-minute lesson spread across all slides
  return Math.max(3, Math.round(50 / totalSlides))
}

/**
 * Extract vocabulary from slides whose title matches common vocabulary-slide
 * naming patterns. Falls back to bullet-point extraction from keyword slides.
 */
function extractVocabulary(slides: SlideContent[]): string[] {
  const vocabSlides = slides.filter(
    (s) =>
      /vocabular|key\s+term|glossar/i.test(s.title),
  )
  if (vocabSlides.length === 0) return []

  return vocabSlides.flatMap((s) =>
    s.bulletPoints
      .map((bp) => {
        // Many vocab bullets follow "Term -- definition" or "Term: definition"
        const match = bp.match(/^(.+?)\s*(?:--|:|—)\s*(.+)$/)
        return match ? match[1].trim() : bp.trim()
      })
      .filter(Boolean),
  )
}

/**
 * Detect homework from the final slide if its title suggests one.
 */
function extractHomework(slides: SlideContent[]): string | undefined {
  const last = slides[slides.length - 1]
  if (!last) return undefined

  // Check if the last slide mentions homework
  const homeworkBullet = last.bulletPoints.find((bp) =>
    /homework|home\s+task|reading/i.test(bp),
  )
  if (homeworkBullet) return homeworkBullet

  // Check teacher notes for homework instructions
  if (/homework/i.test(last.teacherNotes)) {
    const match = last.teacherNotes.match(/[Hh]omework[:\s]+([^.]+\.?)/)
    if (match) return match[1].trim()
  }

  return undefined
}

/**
 * Extract learning objectives from the first slide's bullet points or any
 * slide titled "Learning Objectives".
 */
function extractObjectives(slides: SlideContent[]): string[] {
  // Look for a dedicated objectives slide
  const objSlide = slides.find((s) =>
    /learning\s+objective|objective/i.test(s.title),
  )
  if (objSlide) return objSlide.bulletPoints

  // Fall back to first slide bullet points (commonly where objectives live)
  const first = slides[0]
  if (!first) return []
  return first.bulletPoints.slice(0, 4)
}

/**
 * Derive the exam board from the year group / term unit fields.
 * Curriculum content for Y7-Y9 is board-agnostic (KS3).
 * IGCSE content is relevant to Edexcel / Cambridge boards.
 */
function deriveExamBoard(presentation: LessonPresentation): string {
  const yg = presentation.yearGroup.toLowerCase()
  const term = presentation.termUnit.toLowerCase()

  if (yg.includes('y10') || yg.includes('y11') || term.includes('igcse')) {
    // IGCSE presentations are primarily Edexcel/Cambridge
    return 'Edexcel'
  }

  if (yg.includes('y12') || yg.includes('y13') || term.includes('ial')) {
    // IAL / A-Level presentations
    return 'Edexcel'
  }

  // KS3 presentations are board-agnostic
  return 'All'
}

/**
 * Derive a text / topic label from the term unit.
 */
function deriveTextLabel(presentation: LessonPresentation): string {
  const tu = presentation.termUnit
  // Strip "Term N -- " prefix if present
  const match = tu.match(/--\s*(.+)$/)
  return match ? match[1].trim() : tu
}

// ─── Main transformer ───────────────────────────────────────────────────────

/**
 * Convert a `LessonPresentation` (slide-by-slide curriculum data) into the
 * `LessonPlanData` format expected by the PPTX generation API.
 *
 * Mapping strategy:
 * - Slide 1 -> starter activity
 * - Slides 2 to N-1 -> main activities
 * - Last slide -> plenary
 * - Vocabulary slides -> keyVocabulary
 * - Teacher notes -> teacherNotes array
 */
export function presentationToLessonPlan(
  presentation: LessonPresentation,
): LessonPlanData {
  const { slides, totalSlides } = presentation
  const perSlide = estimateSlideDuration(totalSlides)
  const totalDuration = `${totalSlides * perSlide} minutes`

  const objectives = extractObjectives(slides)
  const vocabulary = extractVocabulary(slides)
  const homework = extractHomework(slides)
  const teacherNotes = slides
    .filter((s) => s.teacherNotes)
    .map((s) => `[${s.title}] ${s.teacherNotes}`)

  // ── Starter: first slide ──────────────────────────────────────────────────
  const starterSlide = slides[0]
  const starterActivity = {
    title: starterSlide?.title ?? 'Starter',
    duration: `${perSlide} minutes`,
    instructions: [
      ...(starterSlide?.bulletPoints ?? []),
      starterSlide?.activity ? `\nActivity: ${starterSlide.activity}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  }

  // ── Main activities: slides 2 to N-1 ─────────────────────────────────────
  const middleSlides = slides.slice(1, slides.length - 1)
  const mainActivities = middleSlides.map((slide) => ({
    title: slide.title,
    duration: `${perSlide} minutes`,
    instructions: [
      ...slide.bulletPoints,
      slide.activity ? `\nActivity: ${slide.activity}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  }))

  // ── Plenary: last slide ───────────────────────────────────────────────────
  const plenarySlide = slides[slides.length - 1]
  const plenary = {
    title: plenarySlide?.title ?? 'Plenary',
    instructions: [
      ...(plenarySlide?.bulletPoints ?? []),
      plenarySlide?.activity ? `\nActivity: ${plenarySlide.activity}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  }

  return {
    title: presentation.lessonTitle,
    duration: totalDuration,
    yearGroup: presentation.yearGroup,
    examBoard: deriveExamBoard(presentation),
    text: deriveTextLabel(presentation),
    objectives,
    starterActivity,
    mainActivities,
    plenary,
    keyVocabulary: vocabulary,
    resourcesNeeded: [
      'Projector / interactive whiteboard',
      'Printed extracts (if applicable)',
      'Student exercise books',
    ],
    homework,
    teacherNotes,
  }
}

// ─── Teacher Presentation adapter ───────────────────────────────────────────

export interface TeacherPresentationSlide {
  slideNumber: number
  title: string
  bulletPoints: string[]
  teacherNotes: string
  activityInstructions?: string
}

export interface TeacherPresentation {
  id: string
  title: string
  examBoard: string
  topic: string
  yearGroup: string
  slideCount: number
  slides: TeacherPresentationSlide[]
  estimatedDuration: string
  learningObjectives: string[]
}

/**
 * Convert a `TeacherPresentation` into `LessonPlanData`.
 */
export function teacherPresentationToLessonPlan(
  tp: TeacherPresentation,
): LessonPlanData {
  const perSlide = estimateSlideDuration(tp.slideCount)

  const starterSlide = tp.slides[0]
  const middleSlides = tp.slides.slice(1, tp.slides.length - 1)
  const plenarySlide = tp.slides[tp.slides.length - 1]

  return {
    title: tp.title,
    duration: tp.estimatedDuration,
    yearGroup: tp.yearGroup,
    examBoard: tp.examBoard,
    text: tp.topic,
    objectives: tp.learningObjectives,
    starterActivity: {
      title: starterSlide?.title ?? 'Introduction',
      duration: `${perSlide} minutes`,
      instructions: [
        ...(starterSlide?.bulletPoints ?? []),
        starterSlide?.activityInstructions
          ? `\nActivity: ${starterSlide.activityInstructions}`
          : '',
      ]
        .filter(Boolean)
        .join('\n'),
    },
    mainActivities: middleSlides.map((slide) => ({
      title: slide.title,
      duration: `${perSlide} minutes`,
      instructions: [
        ...slide.bulletPoints,
        slide.activityInstructions
          ? `\nActivity: ${slide.activityInstructions}`
          : '',
      ]
        .filter(Boolean)
        .join('\n'),
    })),
    plenary: {
      title: plenarySlide?.title ?? 'Summary',
      instructions: [
        ...(plenarySlide?.bulletPoints ?? []),
        plenarySlide?.activityInstructions
          ? `\nActivity: ${plenarySlide.activityInstructions}`
          : '',
      ]
        .filter(Boolean)
        .join('\n'),
    },
    keyVocabulary: [],
    resourcesNeeded: ['Projector / interactive whiteboard', 'Student exercise books'],
    teacherNotes: tp.slides
      .filter((s) => s.teacherNotes)
      .map((s) => `[${s.title}] ${s.teacherNotes}`),
  }
}

// ─── Unified catalogue type ─────────────────────────────────────────────────

export interface PresentationCatalogueEntry {
  id: string
  title: string
  yearGroup: string
  termUnit: string
  examBoard: string
  slideCount: number
  estimatedDuration: string
  source: 'curriculum' | 'teacher-powerpoint'
  /** Slide titles for preview */
  slideTitles: string[]
}

/**
 * Build a catalogue entry from a `LessonPresentation`.
 */
export function toCatalogueEntry(
  p: LessonPresentation,
): PresentationCatalogueEntry {
  const perSlide = estimateSlideDuration(p.totalSlides)
  return {
    id: p.id,
    title: p.lessonTitle,
    yearGroup: p.yearGroup,
    termUnit: p.termUnit,
    examBoard: deriveExamBoard(p),
    slideCount: p.totalSlides,
    estimatedDuration: `${p.totalSlides * perSlide} min`,
    source: 'curriculum',
    slideTitles: p.slides.map((s) => s.title),
  }
}

/**
 * Build a catalogue entry from a `TeacherPresentation`.
 */
export function teacherToCatalogueEntry(
  tp: TeacherPresentation,
): PresentationCatalogueEntry {
  return {
    id: tp.id,
    title: tp.title,
    yearGroup: tp.yearGroup,
    termUnit: tp.topic,
    examBoard: tp.examBoard,
    slideCount: tp.slideCount,
    estimatedDuration: tp.estimatedDuration,
    source: 'teacher-powerpoint',
    slideTitles: tp.slides.map((s) => s.title),
  }
}
