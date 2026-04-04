// ── Teaching Guide Types ──────────────────────────────────────────────────────

export type GuideCategory =
  | 'marking'
  | 'pedagogy'
  | 'exam-prep'
  | 'data'
  | 'behaviour'
  | 'literacy'

export interface TeachingGuideExample {
  scenario: string
  approach: string
}

export interface TeachingGuideSection {
  title: string
  content: string
  tips: string[]
  examples?: TeachingGuideExample[]
}

export interface TeachingGuideRelatedResource {
  type: string
  id: string
  title: string
}

export interface TeachingGuide {
  id: string
  title: string
  description: string
  category: GuideCategory
  readTime: number // minutes
  sections: TeachingGuideSection[]
  relatedResources: TeachingGuideRelatedResource[]
}

// ── Guide Imports ────────────────────────────────────────────────────────────

import { essayMarkingGuide } from './essay-marking-guide'
import { differentiationGuide } from './differentiation-guide'
import { examPreparationGuide } from './exam-preparation-guide'
import { usingDataGuide } from './using-data-guide'
import { revisionStrategiesGuide } from './revision-strategies'
import { assessmentForLearningGuide } from './assessment-for-learning'
import { closingGapsGuide } from './closing-gaps'
import { literacyAcrossCurriculumGuide } from './literacy-across-curriculum'
import { markingGuide } from './marking-guide'
import { examPrepGuide } from './exam-prep-guide'
import { dataDrivenTeachingGuide } from './data-driven-teaching-guide'
import { curriculumTeachingGuide } from './curriculum-teaching-guide'

// ── Master Index ─────────────────────────────────────────────────────────────

export const allTeachingGuides: TeachingGuide[] = [
  essayMarkingGuide,
  differentiationGuide,
  examPreparationGuide,
  usingDataGuide,
  revisionStrategiesGuide,
  assessmentForLearningGuide,
  closingGapsGuide,
  literacyAcrossCurriculumGuide,
  markingGuide,
  examPrepGuide,
  dataDrivenTeachingGuide,
  curriculumTeachingGuide,
]

/** Look up a single guide by its `id` field. */
export function getGuideById(id: string): TeachingGuide | undefined {
  return allTeachingGuides.find((g) => g.id === id)
}

/** Return all unique categories present in the guide catalogue. */
export function getGuideCategories(): GuideCategory[] {
  return [...new Set(allTeachingGuides.map((g) => g.category))]
}

/** Human-readable labels for each category. */
export const categoryLabels: Record<GuideCategory, string> = {
  marking: 'Marking & Feedback',
  pedagogy: 'Pedagogy',
  'exam-prep': 'Exam Preparation',
  data: 'Data & Analytics',
  behaviour: 'Behaviour',
  literacy: 'Literacy',
}

/** Colours for category badges (Tailwind classes). */
export const categoryColors: Record<GuideCategory, string> = {
  marking: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  pedagogy: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  'exam-prep': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  data: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  behaviour: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  literacy: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
}
