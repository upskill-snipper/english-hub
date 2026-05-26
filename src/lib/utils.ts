import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

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

/** Format a date as a localised UK string (e.g. "18 Mar 2026") */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** Format a price in pence as a GBP string (e.g. 1999 -> "£19.99") */
export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`
}

/** Get course name by ID - lazy-loads course data to avoid pulling ~900KB into every import */
export function getCourseName(courseId: string): string {
  // Dynamically import to avoid bundling all course data into every file that imports utils
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { allCourses } = require('@/data/courses')
    return (
      allCourses.find((c: { id: string; title: string }) => c.id === courseId)?.title || courseId
    )
  } catch {
    return courseId
  }
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
