/**
 * Lesson plans content layer.
 *
 * Reads MDX files from `content/lesson-plans/` at build time, parses frontmatter
 * with gray-matter, and exposes typed accessors used by the lesson-plans index
 * and slug routes under /resources/teaching/lesson-plans.
 *
 * The `LessonPlan` type defined here is intentionally distinct from the legacy
 * interactive `LessonPlan` re-exported by `@/lib/lesson-plans/index.ts` (which
 * comes from `@/types`). Consumers of this MDX-driven library should import
 * from `@/lib/lesson-plans/list` directly to avoid collisions.
 */

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'lesson-plans')

const EDUCATIONAL_LEVELS = ['GCSE', 'IGCSE', 'KS3'] as const
export type EducationalLevel = (typeof EDUCATIONAL_LEVELS)[number]

const EXAM_BOARDS = [
  'AQA',
  'Pearson Edexcel',
  'OCR',
  'WJEC Eduqas',
  'Cambridge IGCSE',
  'Multi-board',
] as const
export type ExamBoard = (typeof EXAM_BOARDS)[number]

const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'KS5'] as const
export type YearGroup = (typeof YEAR_GROUPS)[number]

const STATUSES = ['coming-soon', 'available'] as const
export type LessonPlanStatus = (typeof STATUSES)[number]

export type LessonPlan = {
  slug: string
  title: string
  description: string
  educationalLevel: EducationalLevel
  examBoard?: ExamBoard
  text?: string
  yearGroup?: YearGroup
  duration: string
  learningObjectives: string[]
  excerpt: string
  status: LessonPlanStatus
  content: string
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Type guards                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString)
}

function isEducationalLevel(value: unknown): value is EducationalLevel {
  return isString(value) && (EDUCATIONAL_LEVELS as readonly string[]).includes(value)
}

function isExamBoard(value: unknown): value is ExamBoard {
  return isString(value) && (EXAM_BOARDS as readonly string[]).includes(value)
}

function isYearGroup(value: unknown): value is YearGroup {
  return isString(value) && (YEAR_GROUPS as readonly string[]).includes(value)
}

function isStatus(value: unknown): value is LessonPlanStatus {
  return isString(value) && (STATUSES as readonly string[]).includes(value)
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Filesystem helpers                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

function contentDirExists(): boolean {
  try {
    return fs.statSync(CONTENT_DIR).isDirectory()
  } catch {
    return false
  }
}

function listMdxFiles(): string[] {
  if (!contentDirExists()) return []
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name)
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Parsing                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

type ParseResult =
  | { ok: true; lessonPlan: LessonPlan }
  | { ok: false; reason: string; file: string }

function parseFile(fileName: string): ParseResult {
  const fullPath = path.join(CONTENT_DIR, fileName)
  const fileSlug = fileName.replace(/\.mdx$/u, '')
  const raw = fs.readFileSync(fullPath, 'utf8')
  const parsed = matter(raw)
  const data = parsed.data as Record<string, unknown>

  const slugFromFrontmatter = data.slug
  const slug =
    isString(slugFromFrontmatter) && slugFromFrontmatter.length > 0 ? slugFromFrontmatter : fileSlug

  if (!isString(data.title) || data.title.length === 0) {
    return { ok: false, reason: 'missing title', file: fileName }
  }
  if (!isString(data.description) || data.description.length === 0) {
    return { ok: false, reason: 'missing description', file: fileName }
  }
  if (!isEducationalLevel(data.educationalLevel)) {
    return { ok: false, reason: 'invalid educationalLevel', file: fileName }
  }
  if (!isString(data.duration) || data.duration.length === 0) {
    return { ok: false, reason: 'missing duration', file: fileName }
  }
  if (!isStringArray(data.learningObjectives)) {
    return { ok: false, reason: 'invalid learningObjectives', file: fileName }
  }
  if (!isString(data.excerpt) || data.excerpt.length === 0) {
    return { ok: false, reason: 'missing excerpt', file: fileName }
  }
  if (!isStatus(data.status)) {
    return { ok: false, reason: 'invalid status', file: fileName }
  }

  const lessonPlan: LessonPlan = {
    slug,
    title: data.title,
    description: data.description,
    educationalLevel: data.educationalLevel,
    duration: data.duration,
    learningObjectives: data.learningObjectives,
    excerpt: data.excerpt,
    status: data.status,
    content: parsed.content,
  }

  if (isExamBoard(data.examBoard)) lessonPlan.examBoard = data.examBoard
  if (isString(data.text) && data.text.length > 0) lessonPlan.text = data.text
  if (isYearGroup(data.yearGroup)) lessonPlan.yearGroup = data.yearGroup

  return { ok: true, lessonPlan }
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Public API                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

/**
 * Returns every parseable lesson plan, sorted alphabetically by title.
 * Files with invalid frontmatter are skipped silently in production builds
 * and surfaced via console.warn in development.
 */
export function getAllLessonPlans(): LessonPlan[] {
  const files = listMdxFiles()
  const plans: LessonPlan[] = []

  for (const file of files) {
    const result = parseFile(file)
    if (result.ok) {
      plans.push(result.lessonPlan)
    } else if (process.env.NODE_ENV !== 'production') {
      console.warn(`[lesson-plans] skipped ${result.file}: ${result.reason}`)
    }
  }

  return plans.sort((a, b) => a.title.localeCompare(b.title, 'en-GB'))
}

/**
 * Returns a single lesson plan by slug, or null if no MDX file matches.
 */
export function getLessonPlan(slug: string): LessonPlan | null {
  const files = listMdxFiles()
  for (const file of files) {
    const fileSlug = file.replace(/\.mdx$/u, '')
    if (fileSlug !== slug) continue
    const result = parseFile(file)
    if (!result.ok) return null
    if (result.lessonPlan.slug !== slug) continue
    return result.lessonPlan
  }
  // Fall back: in case frontmatter slug differs from filename, scan all.
  for (const file of files) {
    const result = parseFile(file)
    if (result.ok && result.lessonPlan.slug === slug) return result.lessonPlan
  }
  return null
}

/**
 * Returns every available slug — used by `generateStaticParams`.
 */
export function getLessonPlanSlugs(): string[] {
  return getAllLessonPlans().map((plan) => plan.slug)
}
