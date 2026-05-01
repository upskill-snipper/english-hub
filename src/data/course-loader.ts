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
  'igcse-lit': () => import('./igcse-lit-courses'),
  wjec: () => import('./wjec-courses'),
  ocr: () => import('./ocr-courses'),
  'aqa-poetry-pc': () => import('./aqa-poetry-power-conflict'),
  'aqa-poetry-lr': () => import('./aqa-poetry-love-relationships'),
  'romeo-juliet': () => import('./romeo-juliet-course'),
  'jekyll-hyde': () => import('./jekyll-hyde-course'),
  'lord-of-flies': () => import('./lord-of-flies-course'),
  'animal-farm': () => import('./animal-farm-course'),
  'christmas-carol': () => import('./christmas-carol-course'),
  'inspector-calls': () => import('./inspector-calls-course'),
  'caie-lit': () => import('./caie-lit-courses'),
  'igcse-poetry-1': () => import('./edexcel-igcse-lit-poetry-courses'),
  'igcse-poetry-2': () => import('./edexcel-igcse-lit-poetry-courses-2'),
  'igcse-prose': () => import('./edexcel-igcse-lit-prose-courses'),
  'igcse-drama': () => import('./edexcel-igcse-lit-drama-courses'),
  'igcse-classics': () => import('./edexcel-igcse-lit-classics-courses'),
  // KS3 year-group curriculum courses
  'ks3-y7': () => import('./ks3-year7-courses'),
  'ks3-y8': () => import('./ks3-year8-courses'),
  'ks3-y9': () => import('./ks3-year9-courses'),
  // IGCSE year 10-11 curriculum courses
  'igcse-y10-11': () => import('./igcse-year10-11-courses'),
  // IAL year 12-13 curriculum courses
  'ial-y12-13': () => import('./ial-year12-13-courses'),
}

// Course ID prefix -> board mapping
function getBoardForCourse(courseId: string): string {
  // Specific matches first (longer prefixes before shorter ones)
  if (courseId.startsWith('ks3-')) return 'ks3'
  if (courseId.startsWith('wjec-')) return 'wjec'
  if (courseId.startsWith('ocr-')) return 'ocr'
  if (courseId.startsWith('caie-')) return 'caie-lit'

  // AQA text-specific courses
  if (courseId === 'aqa-lit-power-conflict') return 'aqa-poetry-pc'
  if (courseId === 'aqa-lit-love-relationships') return 'aqa-poetry-lr'
  if (courseId === 'aqa-lit-romeo-juliet') return 'romeo-juliet'
  if (courseId === 'aqa-lit-jekyll-hyde') return 'jekyll-hyde'
  if (courseId === 'aqa-lit-inspector-calls') return 'inspector-calls'

  // AQA Christmas Carol
  if (courseId === 'aqa-lit-christmas-carol') return 'christmas-carol'

  // Other GCSE lit text courses
  if (courseId === 'gcse-lit-lord-of-flies') return 'lord-of-flies'
  if (courseId === 'gcse-lit-animal-farm') return 'animal-farm'

  // IGCSE Literature sub-courses (new poetry/prose/drama/classics)
  if (courseId.startsWith('igcse-lit-poem-')) return 'igcse-poetry-1'
  if (courseId.startsWith('igcse-lit-prose-')) return 'igcse-prose'
  if (courseId.startsWith('igcse-lit-drama-')) return 'igcse-drama'
  if (courseId.startsWith('igcse-classic-')) return 'igcse-classics'

  // IGCSE Literature (drama-prose & poetry overview courses)
  if (courseId.startsWith('igcse-lit-')) return 'igcse-lit'

  // Edexcel Literature
  if (courseId.startsWith('edexcel-lit-') || courseId.startsWith('edexcel-lit'))
    return 'edexcel-lit'

  // Edexcel IGCSE Language (Specifications A & B) — must come BEFORE the
  // generic `edexcel-` rule below, otherwise these IDs route to the wrong
  // board loader and the course player 404s.
  if (courseId.startsWith('edexcel-igcse-')) return 'igcse'

  // Edexcel Language
  if (courseId.startsWith('edexcel-')) return 'edexcel'

  // KS3 year-group curriculum courses
  if (courseId.startsWith('ks3-y7-')) return 'ks3-y7'
  if (courseId.startsWith('ks3-y8-')) return 'ks3-y8'
  if (courseId.startsWith('ks3-y9-')) return 'ks3-y9'

  // IGCSE year 10-11 curriculum courses
  if (courseId.startsWith('igcse-y10-') || courseId.startsWith('igcse-y11-')) return 'igcse-y10-11'

  // IAL year 12-13 curriculum courses
  if (courseId.startsWith('ial-y12-') || courseId.startsWith('ial-y13-')) return 'ial-y12-13'

  // IGCSE Language
  if (courseId.startsWith('igcse-')) return 'igcse'

  return 'gcse' // default for gcse-lang-*, gcse-lit-*, etc.
}

// Promise-based cache prevents duplicate concurrent imports
const boardCache = new Map<string, Promise<CourseData[]>>()

// Poetry courses are split across two files with the same ID prefix
const POETRY_FALLBACK = ['igcse-poetry-1', 'igcse-poetry-2'] as const

/**
 * Load a single course by ID. Only imports the relevant board's data file.
 */
export async function loadCourseById(courseId: string): Promise<CourseData | undefined> {
  const board = getBoardForCourse(courseId)

  const courses = await loadCoursesByBoard(board)
  const found = courses.find((c) => c.id === courseId)
  if (found) return found

  // Fallback: IGCSE poem courses span two files with the same prefix
  if (courseId.startsWith('igcse-lit-poem-')) {
    for (const fallback of POETRY_FALLBACK) {
      if (fallback === board) continue
      const fallbackCourses = await loadCoursesByBoard(fallback)
      const match = fallbackCourses.find((c) => c.id === courseId)
      if (match) return match
    }
  }

  return undefined
}

/**
 * Load all courses for a specific board.
 */
export async function loadCoursesByBoard(board: string): Promise<CourseData[]> {
  if (boardCache.has(board)) return boardCache.get(board)!

  const loader = BOARD_LOADERS[board]
  if (!loader) return []

  const promise = (async () => {
    try {
      const mod = await loader()
      return extractCourses(mod)
    } catch (err) {
      console.error(`Failed to load course data for board ${board}:`, err)
      return []
    }
  })()

  boardCache.set(board, promise)
  return promise
}

/**
 * Load ALL courses (all boards). Prefer `loadCourseById` or `loadCoursesByBoard`
 * when you only need a subset.
 */
let allCoursesCache: Promise<CourseData[]> | null = null

export async function loadAllCourses(): Promise<CourseData[]> {
  if (allCoursesCache) return allCoursesCache

  allCoursesCache = (async () => {
    const boards = Object.keys(BOARD_LOADERS)
    const results = await Promise.all(boards.map((b) => loadCoursesByBoard(b)))
    return results.flat()
  })()

  return allCoursesCache
}

function extractCourses(mod: Record<string, unknown>): CourseData[] {
  for (const key of Object.keys(mod)) {
    const val = mod[key]
    // Handle single course objects (not arrays)
    if (
      val &&
      typeof val === 'object' &&
      !Array.isArray(val) &&
      'id' in val &&
      'moduleList' in val
    ) {
      return [val as CourseData]
    }
    // Handle arrays of courses
    if (Array.isArray(val) && val.length > 0 && 'id' in val[0] && 'moduleList' in val[0]) {
      return val as CourseData[]
    }
  }
  return []
}
