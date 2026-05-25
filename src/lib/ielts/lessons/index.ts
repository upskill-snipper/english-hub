// ─── IELTS lessons aggregator ──────────────────────────────────────────────
// Combines the per-skill lesson sets into one indexed library for the
// /ielts/learn UI and the dashboard ("continue / next lesson"). Each set is
// authored in its own file and references the curriculum spine's unit ids +
// levels (see ../curriculum).
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '../curriculum'
import type { IeltsLevel } from '../curriculum'
import { FOUNDATION_LESSONS } from './foundation-lessons'
import { READING_LESSONS } from './reading-lessons'
import { LISTENING_LESSONS } from './listening-lessons'
import { WRITING_LESSONS } from './writing-lessons'
import { SPEAKING_LESSONS } from './speaking-lessons'

export const ALL_LESSONS: Lesson[] = [
  ...FOUNDATION_LESSONS,
  ...READING_LESSONS,
  ...LISTENING_LESSONS,
  ...WRITING_LESSONS,
  ...SPEAKING_LESSONS,
]

export function lessonsForSkill(skill: Lesson['skill']): Lesson[] {
  return ALL_LESSONS.filter((l) => l.skill === skill)
}

export function lessonsForUnit(unitId: string): Lesson[] {
  return ALL_LESSONS.filter((l) => l.unit === unitId)
}

export function lessonsForLevel(level: IeltsLevel): Lesson[] {
  return ALL_LESSONS.filter((l) => l.level === level)
}

export function lessonBySlug(skill: string, slug: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.skill === skill && l.slug === slug)
}

export function lessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id)
}

/** Total lessons in the library - used for progress denominators. */
export const LESSON_COUNT = ALL_LESSONS.length
