// ─── Lesson Plan Metadata Projection ───────────────────────────────────────
//
// SERVER-ONLY projection of the full lesson-plan barrel down to the handful
// of fields the /school/lessons listing page needs. By importing this module
// from a server component and passing the projected data across the RSC
// boundary, we avoid shipping the heavy `objectives`, `mainActivities`,
// `worksheetQuestions`, `teacherNotes`, etc. to the client.
//
// DO NOT import this module from a `'use client'` file for the listing page
// expecting a bundle win — importing from a client module will still pull in
// the entire barrel. The trick is that the server component resolves the
// projection, then only the serialisable result crosses to the client.
//

import {
  ALL_LESSON_PLANS,
  getLessonCategory,
  getTextLabel,
  getDifficulty,
  recommendLessons as recommendLessonsFull,
} from './index'
import type { LessonPlan } from '@/types'

// ─── Projected Metadata Shape ──────────────────────────────────────────────

/**
 * Narrow projection of a LessonPlan containing only the fields needed by the
 * client listing UI. Includes computed fields (`category`, `textLabel`,
 * `difficulty`) so the client does not need to re-import the heavy helpers
 * from `./index`.
 */
export interface LessonPlanMetadata {
  id: string
  title: string
  text: string
  board: string
  yearGroup: string
  duration: string
  targetedSkills: string[]
  keywords: string[]
  // Computed (server-side) — saves the client re-running the helpers and
  // more importantly avoids it needing to import them (which would drag in
  // the full barrel).
  category: string
  textLabel: string
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
}

// ─── Projection Helpers ────────────────────────────────────────────────────

/** Project a single full LessonPlan down to the metadata shape. */
export function toLessonMetadata(lp: LessonPlan): LessonPlanMetadata {
  return {
    id: lp.id,
    title: lp.title,
    text: lp.text,
    board: lp.board,
    yearGroup: lp.yearGroup,
    duration: lp.duration,
    targetedSkills: lp.targetedSkills,
    keywords: lp.keywords,
    category: getLessonCategory(lp),
    textLabel: getTextLabel(lp),
    difficulty: getDifficulty(lp),
  }
}

// ─── Projected Master Array ────────────────────────────────────────────────

/**
 * All lesson plans projected down to metadata-only. Resolved eagerly so that
 * a server component can import it and pass the array straight across the
 * RSC boundary without any further mapping.
 */
export const ALL_LESSON_METADATA: LessonPlanMetadata[] = ALL_LESSON_PLANS.map(toLessonMetadata)

// ─── Recommendation Wrapper ────────────────────────────────────────────────

/**
 * Server-side wrapper around the full `recommendLessons` engine. Runs the
 * engine against the full LessonPlan array (so weighting against
 * `targetedSkills` + `keywords` works correctly) and returns a metadata-only
 * projection for safe transport to the client.
 */
export function recommendLessonsMetadata(
  weakAreas: string[],
  board: string,
  limit: number = 10,
): LessonPlanMetadata[] {
  return recommendLessonsFull(weakAreas, board, limit).map(toLessonMetadata)
}
