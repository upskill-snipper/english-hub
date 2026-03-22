/**
 * Dynamic course data loader — loads full course data on demand.
 * Use `getCourseIndex()` for listing/cards, and `loadCourseById()` for full content.
 */

import type { CourseData } from './courses'

// Board -> module mapping for dynamic imports
const BOARD_LOADERS: Record<string, () => Promise<Record<string, unknown>>> = {
  ks3: () => import('./ks3-courses'),
  gcse: () => import('./gcse-courses'),
  edexcel: () => import('./edexcel-courses'),
  'edexcel-lit': () => import('./edexcel-lit-courses'),
  igcse: () => import('./igcse-courses'),
}

// Course ID prefix -> board mapping
function getBoardForCourse(courseId: string): string {
  if (courseId.startsWith('ks3-')) return 'ks3'
  if (courseId.startsWith('edexcel-lit-') || courseId.startsWith('edexcel-lit')) return 'edexcel-lit'
  if (courseId.startsWith('edexcel-')) return 'edexcel'
  if (courseId.startsWith('igcse-')) return 'igcse'
  return 'gcse' // default for gcse-lang-*, gcse-lit-*, etc.
}

// Cache loaded boards
const boardCache = new Map<string, CourseData[]>()

/**
 * Load a single course by ID. Only imports the relevant board's data file.
 */
export async function loadCourseById(courseId: string): Promise<CourseData | undefined> {
  const board = getBoardForCourse(courseId)

  if (boardCache.has(board)) {
    return boardCache.get(board)!.find(c => c.id === courseId)
  }

  const loader = BOARD_LOADERS[board]
  if (!loader) return undefined

  const mod = await loader()
  const courses = extractCourses(mod)
  boardCache.set(board, courses)
  return courses.find(c => c.id === courseId)
}

/**
 * Load all courses for a specific board.
 */
export async function loadCoursesByBoard(board: string): Promise<CourseData[]> {
  if (boardCache.has(board)) return boardCache.get(board)!

  const loader = BOARD_LOADERS[board]
  if (!loader) return []

  const mod = await loader()
  const courses = extractCourses(mod)
  boardCache.set(board, courses)
  return courses
}

/**
 * Load ALL courses (all boards). Prefer `loadCourseById` or `loadCoursesByBoard`
 * when you only need a subset.
 */
export async function loadAllCourses(): Promise<CourseData[]> {
  const boards = Object.keys(BOARD_LOADERS)
  const results = await Promise.all(boards.map(b => loadCoursesByBoard(b)))
  return results.flat()
}

function extractCourses(mod: Record<string, unknown>): CourseData[] {
  for (const key of Object.keys(mod)) {
    const val = mod[key]
    if (Array.isArray(val) && val.length > 0 && 'id' in val[0] && 'moduleList' in val[0]) {
      return val as CourseData[]
    }
  }
  return []
}
