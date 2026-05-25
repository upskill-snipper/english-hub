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
