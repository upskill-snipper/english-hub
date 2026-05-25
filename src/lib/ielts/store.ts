// ─── IELTS progress store ──────────────────────────────────────────────────
// Wave 1 persistence: localStorage, reusing the toolkit's safe lsGet/lsSet
// helpers (same pattern as the GCSE quiz/marking history). This is a deliberate
// abstraction layer — when the server-side IELTSAttempt / IELTSTaskSubmission
// Prisma models are wired (see prisma/schema.prisma), only this file changes;
// every IELTS module calls getAttempts/saveAttempt/buildIeltsProfile and is
// unaffected by where the data actually lives.
// ────────────────────────────────────────────────────────────────────────────

import { lsGet, lsSet } from '@/components/toolkit/toolkit-types'
import { overallBand } from './bands'
import type { IeltsLevel } from './curriculum'
import {
  IELTS_SKILLS,
  type Band,
  type IeltsAttempt,
  type IeltsProfile,
  type IeltsSkill,
  type SkillBand,
} from './types'

const IELTS_LS = {
  attempts: 'english-hub-ielts-attempts',
  diagnostic: 'english-hub-ielts-diagnostic',
} as const

/** Most-recent-first list of all IELTS attempts. */
export function getAttempts(): IeltsAttempt[] {
  return lsGet<IeltsAttempt[]>(IELTS_LS.attempts, [])
}

/** Persist an attempt (newest first) and keep the streak marker fresh. */
export function saveAttempt(attempt: IeltsAttempt): void {
  const all = getAttempts()
  all.unshift(attempt)
  lsSet(IELTS_LS.attempts, all.slice(0, 500))
  touchStreak()
  // Best-effort server write-through (cross-device continuity + B2B teacher
  // analytics). localStorage above is the primary, instant store; this
  // fire-and-forget POST is intentionally swallowed on failure (signed out, or
  // the ielts_attempts table not migrated yet) so the UX is never blocked.
  if (typeof window !== 'undefined') {
    void fetch('/api/ielts/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attempt),
      keepalive: true,
    }).catch(() => {})
  }
}

/**
 * Best-effort fetch of server-persisted attempts (cross-device). Returns []
 * when signed out or the table isn't migrated yet. Callers should MERGE this
 * with getAttempts() (local) rather than replace, so an offline/local attempt
 * is never lost.
 */
export async function getServerAttempts(): Promise<IeltsAttempt[]> {
  if (typeof window === 'undefined') return []
  try {
    const res = await fetch('/api/ielts/attempts', { method: 'GET' })
    if (!res.ok) return []
    const data = (await res.json()) as { attempts?: IeltsAttempt[] }
    return Array.isArray(data.attempts) ? data.attempts : []
  } catch {
    return []
  }
}

export function getAttemptsForSkill(skill: IeltsSkill, attempts = getAttempts()): IeltsAttempt[] {
  return attempts.filter((a) => a.skill === skill)
}

/** Latest band recorded for a skill, or null if never attempted. */
export function latestBandForSkill(skill: IeltsSkill, attempts = getAttempts()): Band | null {
  const forSkill = getAttemptsForSkill(skill, attempts)
  return forSkill.length ? forSkill[0].band : null
}

/** Build the profile that drives the diagnostic result, plan and dashboard. */
export function buildIeltsProfile(): IeltsProfile {
  const attempts = getAttempts()
  const skills = {} as Record<IeltsSkill, SkillBand>
  const skillBands: (Band | null)[] = []

  for (const skill of IELTS_SKILLS) {
    const forSkill = getAttemptsForSkill(skill, attempts)
    const band = forSkill.length ? forSkill[0].band : null
    skills[skill] = { skill, band, attempts: forSkill.length }
    skillBands.push(band)
  }

  let weakestSkill: IeltsSkill | null = null
  let lowest = Infinity
  for (const skill of IELTS_SKILLS) {
    const b = skills[skill].band
    if (b !== null && b < lowest) {
      lowest = b
      weakestSkill = skill
    }
  }

  return {
    overallBand: overallBand(skillBands),
    skills,
    totalAttempts: attempts.length,
    hasData: attempts.length > 0,
    weakestSkill,
  }
}

// ─── Diagnostic result (placement) ─────────────────────────────────────────

export interface DiagnosticResult {
  date: string
  estimatedBands: Partial<Record<IeltsSkill, Band>>
  overall: Band | null
}

export function getDiagnostic(): DiagnosticResult | null {
  return lsGet<DiagnosticResult | null>(IELTS_LS.diagnostic, null)
}

export function saveDiagnostic(result: DiagnosticResult): void {
  lsSet(IELTS_LS.diagnostic, result)
  touchStreak()
}

// ─── Streak (shares the toolkit streak key so IELTS activity counts too) ───

function touchStreak(): void {
  if (typeof window === 'undefined') return
  try {
    const key = 'english-hub-streak-dates'
    const dates = lsGet<string[]>(key, [])
    dates.push(new Date().toISOString())
    lsSet(key, dates.slice(-365))
  } catch {
    // non-fatal
  }
}

export function genId(prefix = 'ielts'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// ─── Program goals (target band, exam date, level) ─────────────────────────
// Drives the dashboard, the exam-date study planner, and "what to study next".

export interface IeltsGoals {
  targetBand?: Band
  examDate?: string // ISO date, yyyy-mm-dd
  level?: IeltsLevel
}

const GOALS_KEY = 'english-hub-ielts-goals'
const LESSONS_DONE_KEY = 'english-hub-ielts-lessons-done'

export function getGoals(): IeltsGoals {
  return lsGet<IeltsGoals>(GOALS_KEY, {})
}

export function setGoals(patch: IeltsGoals): void {
  lsSet(GOALS_KEY, { ...getGoals(), ...patch })
  touchStreak()
}

/** Whole days until the saved exam date, or null if none set. */
export function daysUntilExam(): number | null {
  const { examDate } = getGoals()
  if (!examDate) return null
  const ms = new Date(`${examDate}T00:00:00`).getTime() - Date.now()
  return Math.max(0, Math.ceil(ms / 86_400_000))
}

// ─── Lesson completion (drives progress + "what to learn next") ────────────

export function getCompletedLessons(): string[] {
  return lsGet<string[]>(LESSONS_DONE_KEY, [])
}

export function isLessonComplete(lessonId: string): boolean {
  return getCompletedLessons().includes(lessonId)
}

export function markLessonComplete(lessonId: string): void {
  const done = getCompletedLessons()
  if (!done.includes(lessonId)) {
    lsSet(LESSONS_DONE_KEY, [...done, lessonId])
    touchStreak()
  }
}
