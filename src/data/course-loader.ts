/**
 * Dynamic course data loader.
 *
 * Two tiers, and picking the wrong one is expensive:
 *
 *  - `loadCourseIndex()` returns metadata only (titles, colours, module lists,
 *    counts) from the prebuilt ./course-index module. ~107 KB of JSON for all
 *    87 courses. Use this for every card, list, filter, chart label and course
 *    map - anything that is not rendering a lesson.
 *  - `loadCourseById()` / `loadCoursesByBoard()` / `loadAllCourses()` pull full
 *    lesson bodies and quizzes. `loadAllCourses()` alone is ~7.2 MB. Use only
 *    where a lesson or an assessment is actually being rendered.
 *
 * Both tiers load through `import()` so neither lands in a route's first-load
 * bundle; the index is one small shared chunk, fetched once and cached.
 */

import type { CourseData } from './courses'
import type { CourseIndexEntry } from './course-index'

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

/**
 * Fallback course ID prefix -> board mapping.
 *
 * Only used for ids that are not in COURSE_BOARD_KEYS (i.e. ids that do not
 * exist, or a course added without regenerating the index). The prefix rules
 * below are order-sensitive and were mis-routing 13 of the 87 real courses, so
 * `resolveBoard()` consults the generated map first and treats this as a guess.
 */
function getBoardForCourseByPrefix(courseId: string): string {
  // Specific matches first (longer prefixes before shorter ones)
  if (courseId.startsWith('ks3-y7-')) return 'ks3-y7'
  if (courseId.startsWith('ks3-y8-')) return 'ks3-y8'
  if (courseId.startsWith('ks3-y9-')) return 'ks3-y9'
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

  // IGCSE Literature sub-courses (new poetry/prose/drama/classics).
  // `igcse-lit-classic-` must be tested before `igcse-lit-drama-` and the
  // generic `igcse-lit-` rule below, otherwise the three classics courses
  // route to the wrong board file and the course player 404s.
  if (courseId.startsWith('igcse-lit-classic-') || courseId.startsWith('igcse-classic-'))
    return 'igcse-classics'
  if (courseId.startsWith('igcse-lit-poem-')) return 'igcse-poetry-1'
  if (courseId.startsWith('igcse-lit-prose-')) return 'igcse-prose'
  // `igcse-lit-drama-prose` is the combined overview course and lives in
  // igcse-lit-courses, not in the individual drama-text file - exclude it
  // before the drama-text prefix rule claims it.
  if (courseId === 'igcse-lit-drama-prose') return 'igcse-lit'
  if (courseId.startsWith('igcse-lit-drama-')) return 'igcse-drama'

  // IGCSE Literature (poetry overview course)
  if (courseId.startsWith('igcse-lit-')) return 'igcse-lit'

  // Edexcel Literature
  if (courseId.startsWith('edexcel-lit-') || courseId.startsWith('edexcel-lit'))
    return 'edexcel-lit'

  // Edexcel IGCSE Language (Specifications A & B) - must come BEFORE the
  // generic `edexcel-` rule below, otherwise these IDs route to the wrong
  // board loader and the course player 404s.
  if (courseId.startsWith('edexcel-igcse-')) return 'igcse'

  // Edexcel Language
  if (courseId.startsWith('edexcel-')) return 'edexcel'

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

// ── Lightweight index ──────────────────────────────────────────────────────
//
// The index module is only ever reached through `import()`, never a static
// import. A static import would pull all 87 courses' metadata into the
// first-load bundle of every route that touches this loader; as a dynamic
// import it is one shared chunk, fetched on demand and cached thereafter.

let indexCache: Promise<typeof import('./course-index')> | null = null

function loadIndexModule(): Promise<typeof import('./course-index')> {
  if (!indexCache) indexCache = import('./course-index')
  return indexCache
}

/**
 * Every course as metadata only - no lesson bodies, no quiz questions.
 *
 * This is what list/browse/dashboard surfaces should use. Calling
 * `loadAllCourses()` for a course map costs ~7.2 MB of lesson content the
 * caller then throws away; this costs ~107 KB.
 */
export async function loadCourseIndex(): Promise<CourseIndexEntry[]> {
  const mod = await loadIndexModule()
  return mod.COURSE_INDEX
}

/** Metadata for one course, or undefined if the ID is unknown. */
export async function loadCourseIndexEntry(
  courseId: string,
): Promise<CourseIndexEntry | undefined> {
  const index = await loadCourseIndex()
  return index.find((c) => c.id === courseId)
}

/**
 * Resolve the board data file that actually contains a course.
 *
 * Prefers the generated COURSE_BOARD_KEYS map, which is derived from the board
 * modules themselves. The prefix heuristic is only a fallback for ids added
 * since the index was last regenerated - on its own it silently mis-routed 13
 * of the 87 real courses, and a mis-route makes `loadCourseById` return
 * undefined rather than fail loudly.
 */
async function resolveBoard(courseId: string): Promise<string> {
  try {
    const { COURSE_BOARD_KEYS } = await loadIndexModule()
    const known = COURSE_BOARD_KEYS[courseId]
    if (known) return known
  } catch (err) {
    console.error('Failed to load the course index for board resolution:', err)
  }
  return getBoardForCourseByPrefix(courseId)
}

/**
 * Load a single course by ID. Only imports the relevant board's data file.
 */
export async function loadCourseById(courseId: string): Promise<CourseData | undefined> {
  const board = await resolveBoard(courseId)

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

/**
 * Development-only guard against a stale ./course-index.
 *
 * The index is generated data. If someone adds a course (or renames one, or
 * changes a module list) without regenerating it, the catalogue and dashboards
 * would quietly show the old set - a silent wrong-content bug rather than a
 * crash. This compares the index against the real course data and logs exactly
 * what drifted.
 *
 * Call it from a server component behind a `NODE_ENV !== 'production'` check
 * only: it loads all 7.2 MB of course data, so it must never run in a browser
 * or in production.
 */
export async function verifyCourseIndex(): Promise<string[]> {
  const [courses, index] = await Promise.all([loadAllCourses(), loadCourseIndex()])
  const problems: string[] = []

  const indexById = new Map(index.map((c) => [c.id, c]))
  for (const course of courses) {
    const entry = indexById.get(course.id)
    if (!entry) {
      problems.push(`missing from index: ${course.id}`)
      continue
    }
    if (entry.title !== course.title) {
      problems.push(`title drift for ${course.id}: index has "${entry.title}"`)
    }
    if (entry.moduleCount !== course.moduleList.length) {
      problems.push(
        `module count drift for ${course.id}: index has ${entry.moduleCount}, data has ${course.moduleList.length}`,
      )
    }
  }

  const dataIds = new Set(courses.map((c) => c.id))
  for (const entry of index) {
    if (!dataIds.has(entry.id)) problems.push(`stale entry in index: ${entry.id}`)
  }

  if (problems.length > 0) {
    console.error(
      `[course-index] ${problems.length} problem(s) - regenerate src/data/course-index.ts:\n  ` +
        problems.join('\n  '),
    )
  }

  return problems
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
