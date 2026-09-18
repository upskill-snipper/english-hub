import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import courseNamesJson from '@/data/generated/course-names.json'

/** Merge Tailwind CSS classes with clsx + tailwind-merge */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a duration in seconds as a human-readable string (e.g. "1h 30m" or "45m") */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

/**
 * The three locales the product ships. Declared INLINE, deliberately.
 *
 * Importing `Locale` from `@/lib/i18n/dictionary` would be the obvious thing
 * and would be a repeat of a bug this repo has already paid for: that module
 * is 1.5 MB with ~150 static sub-dictionary imports, `@/lib/i18n/t` adds
 * `next/headers` on top, and `cn()` from THIS file is imported by the root
 * layout, the header and BoardGate - so it is in every page's client graph. A
 * value import here would drag the whole dictionary along behind it, exactly
 * as `require('@/data/courses')` once dragged 7.6 MB onto 1,049 pages.
 *
 * The existing guard test for that regression only matches `@/data/...`, so it
 * would not have fired. `no-course-corpus-in-shared-code.test.ts` now covers
 * this module too.
 */
export type FormatLocale = 'en' | 'ar' | 'es'

/**
 * BCP-47 tags for date formatting, one per shipped locale.
 *
 * Arabic uses `ar-EG-u-ca-gregory-nu-latn`: Arabic month names, the Gregorian
 * calendar (not Hijri - these are exam dates and subscription renewals), and
 * LATIN digits. Arabic-Indic digits would be more idiomatic in prose but this
 * product shows marks, grades and dates side by side, and mixing numeral
 * systems within one interface is worse than either alone.
 */
const DATE_LOCALES: Record<FormatLocale, string> = {
  en: 'en-GB',
  ar: 'ar-EG-u-ca-gregory-nu-latn',
  es: 'es-ES',
}

/**
 * Format a date for display (e.g. "18 Sept 2026", "18 سبتمبر 2026").
 *
 * THE DEFECT (19 September 2026, A11Y-10). This hard-coded 'en-GB' with no way
 * to pass anything else, across 130 call sites. An Arabic reader saw English
 * month names embedded in Arabic sentences - "18 Sep 2026" inside a
 * right-to-left paragraph, which is both wrong and, because Latin text inside
 * RTL runs reorders, frequently unreadable.
 *
 * The parameter DEFAULTS to 'en', so every existing call site keeps its exact
 * current behaviour and this change cannot regress the English product. Client
 * components should prefer `useFormatDate()` from `@/lib/i18n/use-format-date`,
 * which supplies the reader's own locale.
 */
export function formatDate(date: string | Date, locale: FormatLocale = 'en'): string {
  return new Date(date).toLocaleDateString(DATE_LOCALES[locale] ?? DATE_LOCALES.en, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** Format a price in pence as a GBP string (e.g. 1999 -> "£19.99") */
export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`
}

/**
 * Course title for an id.
 *
 * THE DEFECT THIS REPLACES (19 September 2026). This function's own comment
 * said it "lazy-loads course data to avoid pulling ~900KB into every import",
 * and then called `require('@/data/courses')`. webpack resolves a `require`
 * with a static string at build time, so nothing was lazy. courses.ts
 * aggregates 27 curriculum modules - about 7.6 MB of TypeScript - and because
 * header.tsx, language-toggle.tsx and BoardGate.tsx all import `cn()` from
 * this file, the whole corpus sat in the root layout's client graph on all
 * 1,049 pages and in the server chunk every page bundle required.
 *
 * It has four production callers and needs one thing: a title for an id. That
 * is 87 short strings. src/data/generated/course-names.json is built by
 * scripts/generate-course-names.mjs during `prebuild`, so it cannot drift.
 *
 * src/__tests__/no-course-corpus-in-shared-code.test.ts fails if @/data comes
 * back into this file or into the layout and board components.
 */
const COURSE_NAMES: Record<string, string> = courseNamesJson
export function getCourseName(courseId: string): string {
  return COURSE_NAMES[courseId] ?? courseId
}

/** Shuffle an array (Fisher-Yates) */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/** Format seconds as mm:ss (fractional seconds are truncated) */
export function formatTime(seconds: number): string {
  const total = Math.floor(seconds)
  const mins = Math.floor(total / 60)
  const secs = total % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/** Validate a redirect URL is safe (no open redirects).
 *  Only allows relative paths starting with `/` - blocks protocol-relative,
 *  absolute, backslash-based, and URLs containing control characters. */
export function validateRedirect(url: string | null): string {
  if (
    !url ||
    !url.startsWith('/') ||
    url.startsWith('//') ||
    url.includes(':') ||
    url.includes('\\') ||
    url.includes('@') ||
    // Block encoded characters that could smuggle dangerous sequences
    url.includes('%') ||
    // Block control characters (tabs, newlines, null bytes)
    /[\x00-\x1f]/.test(url)
  ) {
    return '/dashboard'
  }
  return url
}

export const YEAR_GROUPS = [
  'Year 7',
  'Year 8',
  'Year 9',
  'Year 10',
  'Year 11',
  'Year 12',
  'Year 13',
  'Adult',
  'Other',
] as const
export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Other'] as const
