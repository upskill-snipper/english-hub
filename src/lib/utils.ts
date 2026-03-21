import { clsx, type ClassValue } from 'clsx'
import { allCourses } from '@/data/courses'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`
}

/** Get course name by ID */
export function getCourseName(courseId: string): string {
  return allCourses.find((c) => c.id === courseId)?.title || courseId
}

/** Shuffle an array (Fisher-Yates) */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/** Format seconds as mm:ss */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/** Validate a redirect URL is safe (no open redirects) */
export function validateRedirect(url: string | null): string {
  if (!url || !url.startsWith('/') || url.startsWith('//') || url.includes(':')) {
    return '/dashboard'
  }
  return url
}

export const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Adult', 'Other'] as const
export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Other'] as const
