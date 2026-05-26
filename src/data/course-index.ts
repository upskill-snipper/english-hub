/**
 * Lightweight course metadata for catalogue/listing pages.
 * Does NOT include full moduleList content - only metadata needed for cards.
 * Import `allCourses` from './courses' only when you need full module content.
 */

import type { CourseData, CourseTier, CourseModule } from './courses'

export interface CourseIndexEntry {
  id: string
  title: string
  subtitle: string
  tier: CourseTier
  board?: string
  price: number
  duration: string
  level: string
  description: string
  color: string
  moduleCount: number
  moduleList: Pick<CourseModule, 'id' | 'title' | 'duration'>[]
}

/**
 * Strips heavy content from courses for lightweight listing.
 * Keeps only what's needed for cards, filters, and navigation.
 */
export function toIndexEntry(course: CourseData): CourseIndexEntry {
  return {
    id: course.id,
    title: course.title,
    subtitle: course.subtitle,
    tier: course.tier,
    board: course.board,
    price: course.price,
    duration: course.duration,
    level: course.level,
    description: course.description,
    color: course.color,
    moduleCount: course.moduleList.length,
    moduleList: course.moduleList.map((m) => ({
      id: m.id,
      title: m.title,
      duration: m.duration,
    })),
  }
}
