/**
 * Printables data layer.
 *
 * Reads MDX lead-magnet stubs out of `content/printables/*.mdx`, parses
 * frontmatter with `gray-matter`, and exposes a typed list/lookup API for
 * the public landing pages under /resources/teaching/printables.
 *
 * The MDX body is returned as a raw string - pages compile it on demand
 * via `next-mdx-remote/rsc#compileMDX` so we don't pay the MDX runtime
 * cost on the index page.
 *
 * No `any`, no fallbacks for unknown enum values: invalid frontmatter
 * throws at request time so we catch authoring mistakes early instead of
 * silently shipping broken cards.
 */

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PrintableEducationalLevel = 'GCSE' | 'IGCSE' | 'KS3'

export type PrintableExamBoard =
  | 'AQA'
  | 'Pearson Edexcel'
  | 'OCR'
  | 'WJEC Eduqas'
  | 'Cambridge IGCSE'
  | 'Multi-board'

export type PrintableCategory =
  | 'quote-bank'
  | 'flashcards'
  | 'comparison-grid'
  | 'essay-plans'
  | 'character-map'
  | 'mark-scheme-decoder'
  | 'timing-planner'
  | 'cheatsheet'
  | 'tracker'
  | 'workbook'

export type PrintableStatus = 'coming-soon' | 'available'

export type Printable = {
  slug: string
  title: string
  description: string
  educationalLevel: PrintableEducationalLevel
  examBoard?: PrintableExamBoard
  /** Set text or cluster, e.g. "Macbeth" or "Power and Conflict". */
  text?: string
  category: PrintableCategory
  excerpt: string
  status: PrintableStatus
  /** Null/undefined when status === 'coming-soon'. */
  pdfUrl?: string
  /** Raw MDX body - compile on the page that needs it. */
  content: string
}

const PRINTABLES_DIR = path.join(process.cwd(), 'content', 'printables')

const VALID_LEVELS: ReadonlySet<PrintableEducationalLevel> = new Set(['GCSE', 'IGCSE', 'KS3'])

const VALID_BOARDS: ReadonlySet<PrintableExamBoard> = new Set([
  'AQA',
  'Pearson Edexcel',
  'OCR',
  'WJEC Eduqas',
  'Cambridge IGCSE',
  'Multi-board',
])

const VALID_CATEGORIES: ReadonlySet<PrintableCategory> = new Set([
  'quote-bank',
  'flashcards',
  'comparison-grid',
  'essay-plans',
  'character-map',
  'mark-scheme-decoder',
  'timing-planner',
  'cheatsheet',
  'tracker',
  'workbook',
])

const VALID_STATUSES: ReadonlySet<PrintableStatus> = new Set(['coming-soon', 'available'])

function isString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0
}

function parsePrintable(slug: string, raw: string): Printable {
  const parsed = matter(raw)
  const data = parsed.data as Record<string, unknown>

  const title = data.title
  const description = data.description
  const frontmatterSlug = data.slug ?? slug
  const educationalLevel = data.educationalLevel
  const examBoard = data.examBoard
  const text = data.text
  const category = data.category
  const excerpt = data.excerpt
  const status = data.status ?? 'coming-soon'
  const pdfUrl = data.pdfUrl

  if (!isString(title)) {
    throw new Error(
      `[printables] "${slug}": frontmatter.title is required and must be a non-empty string`,
    )
  }
  if (!isString(description)) {
    throw new Error(
      `[printables] "${slug}": frontmatter.description is required and must be a non-empty string`,
    )
  }
  if (!isString(frontmatterSlug)) {
    throw new Error(`[printables] "${slug}": frontmatter.slug must be a non-empty string`)
  }
  if (
    !isString(educationalLevel) ||
    !VALID_LEVELS.has(educationalLevel as PrintableEducationalLevel)
  ) {
    throw new Error(
      `[printables] "${slug}": frontmatter.educationalLevel must be one of ${Array.from(VALID_LEVELS).join(', ')}`,
    )
  }
  if (!isString(category) || !VALID_CATEGORIES.has(category as PrintableCategory)) {
    throw new Error(
      `[printables] "${slug}": frontmatter.category must be one of ${Array.from(VALID_CATEGORIES).join(', ')}`,
    )
  }
  if (!isString(excerpt)) {
    throw new Error(
      `[printables] "${slug}": frontmatter.excerpt is required and must be a non-empty string`,
    )
  }
  if (!isString(status) || !VALID_STATUSES.has(status as PrintableStatus)) {
    throw new Error(
      `[printables] "${slug}": frontmatter.status must be one of ${Array.from(VALID_STATUSES).join(', ')}`,
    )
  }

  let resolvedExamBoard: PrintableExamBoard | undefined
  if (examBoard !== undefined) {
    if (!isString(examBoard) || !VALID_BOARDS.has(examBoard as PrintableExamBoard)) {
      throw new Error(
        `[printables] "${slug}": frontmatter.examBoard must be one of ${Array.from(VALID_BOARDS).join(', ')}`,
      )
    }
    resolvedExamBoard = examBoard as PrintableExamBoard
  }

  let resolvedText: string | undefined
  if (text !== undefined) {
    if (!isString(text)) {
      throw new Error(
        `[printables] "${slug}": frontmatter.text must be a non-empty string when present`,
      )
    }
    resolvedText = text
  }

  let resolvedPdfUrl: string | undefined
  if (pdfUrl !== undefined && pdfUrl !== null) {
    if (!isString(pdfUrl)) {
      throw new Error(
        `[printables] "${slug}": frontmatter.pdfUrl must be a non-empty string when present`,
      )
    }
    resolvedPdfUrl = pdfUrl
  }

  const printable: Printable = {
    slug: frontmatterSlug,
    title,
    description,
    educationalLevel: educationalLevel as PrintableEducationalLevel,
    category: category as PrintableCategory,
    excerpt,
    status: status as PrintableStatus,
    content: parsed.content,
  }
  if (resolvedExamBoard) printable.examBoard = resolvedExamBoard
  if (resolvedText) printable.text = resolvedText
  if (resolvedPdfUrl) printable.pdfUrl = resolvedPdfUrl

  return printable
}

async function readDirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir)
  } catch (err) {
    // Directory doesn't exist yet - sibling content agents may not have
    // populated it. Return empty list so the index page still renders.
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw err
  }
}

async function readPrintableFile(slug: string): Promise<Printable | null> {
  const filePath = path.join(PRINTABLES_DIR, `${slug}.mdx`)
  let raw: string
  try {
    raw = await fs.readFile(filePath, 'utf8')
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return null
    throw err
  }
  return parsePrintable(slug, raw)
}

/** All printable slugs derived from on-disk MDX files (filename without extension). */
export async function getPrintableSlugs(): Promise<string[]> {
  const entries = await readDirSafe(PRINTABLES_DIR)
  return entries
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
    .sort()
}

/** All printables, sorted alphabetically by slug. */
export async function getAllPrintables(): Promise<Printable[]> {
  const slugs = await getPrintableSlugs()
  const items = await Promise.all(slugs.map((slug) => readPrintableFile(slug)))
  return items.filter((item): item is Printable => item !== null)
}

/** Single printable by slug, or null when no MDX exists. */
export async function getPrintable(slug: string): Promise<Printable | null> {
  return readPrintableFile(slug)
}
