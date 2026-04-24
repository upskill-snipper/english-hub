/**
 * Tests for the pure weekly-report generator.
 *
 * Coverage focus: eligibility gates (Children's Code §5 + §8) and the
 * constructive framing of weaknesses. No database, no network — the module
 * under test is deliberately pure.
 */

import { describe, it, expect } from 'vitest'

import {
  generateWeeklyReport,
  type ReportChild,
  type ReportEssaySummary,
  type ReportProgress,
  type GenerateOptions,
} from './generate'

// ─── Fixtures ────────────────────────────────────────────────────────────

const WEEK_STARTS_AT = new Date('2026-04-12T00:00:00.000Z')
const WEEK_ENDS_AT = new Date('2026-04-19T00:00:00.000Z')

const options: GenerateOptions = {
  weekStartsAt: WEEK_STARTS_AT,
  weekEndsAt: WEEK_ENDS_AT,
}

function makeChild(overrides: Partial<ReportChild> = {}): ReportChild {
  return {
    id: 'child_123',
    firstName: 'Ava',
    // 14 years old on the week-end date.
    dateOfBirth: new Date('2012-01-01T00:00:00.000Z'),
    privacy: {
      aiOptOut: false,
      profileVisibility: 'SCHOOL_ONLY',
    },
    ...overrides,
  }
}

function essay(
  overall: number | null,
  ao: Partial<Record<'AO1' | 'AO2' | 'AO3' | 'AO4', number>>,
  id = Math.random().toString(36).slice(2),
): ReportEssaySummary {
  return {
    id,
    subject: 'LANGUAGE',
    createdAt: new Date('2026-04-15T12:00:00.000Z'),
    overallScore: overall,
    aoScores: ao,
  }
}

const baseProgress: ReportProgress = {
  timeSpentMinutes: 120,
  streakDays: 5,
  assignmentsCompleted: 2,
  streakBrokenMidWeek: false,
}

// ─── Tests ───────────────────────────────────────────────────────────────

describe('generateWeeklyReport', () => {
  it('produces a normal-week report with strengths, focus areas, and a suggestion', () => {
    const essays = [
      essay(72, { AO1: 80, AO2: 78, AO3: 60, AO4: 70 }),
      essay(68, { AO1: 82, AO2: 75, AO3: 55, AO4: 68 }),
      essay(70, { AO1: 78, AO2: 74, AO3: 58, AO4: 72 }),
    ]

    const result = generateWeeklyReport(makeChild(), essays, baseProgress, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(result.report.essaysCompleted).toBe(3)
    expect(result.report.averageScore).toBe(70)
    expect(result.report.strongestAO).toBe('AO1')
    expect(result.report.weakestAO).toBe('AO3')

    // Constructive framing assertion (Children's Code §5).
    expect(result.report.focusAreas.join(' ')).toMatch(/room to grow/i)
    expect(result.report.focusAreas.join(' ').toLowerCase()).not.toMatch(
      /struggl|weak|poor|fail/,
    )

    expect(result.report.strengths.length).toBeGreaterThan(0)
    expect(result.report.suggestion).toBeTruthy()
  })

  it('handles a no-essays week without crashing and suggests a restart', () => {
    const result = generateWeeklyReport(
      makeChild(),
      [],
      { ...baseProgress, assignmentsCompleted: 0, streakDays: 0, timeSpentMinutes: 0 },
      options,
    )
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(result.report.essaysCompleted).toBe(0)
    expect(result.report.averageScore).toBeNull()
    expect(result.report.strongestAO).toBeNull()
    expect(result.report.weakestAO).toBeNull()
    expect(result.report.focusAreas.some((b) => /no essays/i.test(b))).toBe(true)
    expect(result.report.suggestion).toMatch(/one short essay/i)
  })

  it('rejects a child under 13 with CHILD_UNDER_13', () => {
    // Age 12 at the week-end date.
    const tooYoung = makeChild({
      dateOfBirth: new Date('2014-05-01T00:00:00.000Z'),
    })
    const result = generateWeeklyReport(tooYoung, [], baseProgress, options)
    expect(result).toEqual({ ok: false, reason: 'CHILD_UNDER_13' })
  })

  it('rejects when the child has AI opt-out enabled', () => {
    const optedOut = makeChild({
      privacy: { aiOptOut: true, profileVisibility: 'SCHOOL_ONLY' },
    })
    const result = generateWeeklyReport(optedOut, [], baseProgress, options)
    expect(result).toEqual({ ok: false, reason: 'AI_OPT_OUT' })
  })

  it('rejects when profileVisibility is PRIVATE', () => {
    const privateChild = makeChild({
      privacy: { aiOptOut: false, profileVisibility: 'PRIVATE' },
    })
    const result = generateWeeklyReport(privateChild, [], baseProgress, options)
    expect(result).toEqual({ ok: false, reason: 'PROFILE_PRIVATE' })
  })

  it('handles an empty AO set without picking a spurious ranking', () => {
    const essays = [essay(60, {}), essay(65, {})]
    const result = generateWeeklyReport(makeChild(), essays, baseProgress, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(result.report.averageScore).toBe(63)
    expect(result.report.strongestAO).toBeNull()
    expect(result.report.weakestAO).toBeNull()
  })

  it('does not emit a weakest AO when only a single AO has samples', () => {
    // High performer — every essay scored AO1 only. We must not invent a
    // "weakest" that is in fact the only data point.
    const essays = [
      essay(88, { AO1: 90 }),
      essay(92, { AO1: 94 }),
      essay(86, { AO1: 88 }),
    ]
    const highFlyerProgress: ReportProgress = {
      ...baseProgress,
      timeSpentMinutes: 180,
      streakDays: 7,
    }
    const result = generateWeeklyReport(makeChild(), essays, highFlyerProgress, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(result.report.strongestAO).toBe('AO1')
    expect(result.report.weakestAO).toBeNull()
    // Suggestion falls back to the "keep stretching" line.
    expect(result.report.suggestion).toMatch(/stretching|harder prompt/i)
  })

  it('surfaces a gentle consistency note when the streak broke mid-week', () => {
    const essays = [essay(70, { AO1: 72, AO2: 68, AO3: 65, AO4: 70 })]
    const broken: ReportProgress = {
      ...baseProgress,
      streakDays: 2,
      streakBrokenMidWeek: true,
    }
    const result = generateWeeklyReport(makeChild(), essays, broken, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(
      result.report.focusAreas.some((b) => /consistency/i.test(b)),
    ).toBe(true)
    // No deficit language.
    expect(result.report.focusAreas.join(' ').toLowerCase()).not.toMatch(
      /lazy|fail|struggl/,
    )
  })

  it('caps strengths and focus areas at 3 bullets each', () => {
    const essays = Array.from({ length: 5 }, (_, i) =>
      essay(85, { AO1: 90, AO2: 88, AO3: 55, AO4: 80 }, `e${i}`),
    )
    const topProgress: ReportProgress = {
      timeSpentMinutes: 20, // triggers the "a little more time" focus bullet
      streakDays: 7,
      assignmentsCompleted: 3,
      streakBrokenMidWeek: false,
    }
    const result = generateWeeklyReport(makeChild(), essays, topProgress, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    expect(result.report.strengths.length).toBeLessThanOrEqual(3)
    expect(result.report.focusAreas.length).toBeLessThanOrEqual(3)
  })

  it('never leaks essay bodies or rationale into the payload', () => {
    // Sanity check on the output shape — the generator has no way to surface
    // prose it was never given, but we lock the contract down explicitly.
    const essays = [essay(70, { AO1: 75, AO2: 70, AO3: 60, AO4: 72 })]
    const result = generateWeeklyReport(makeChild(), essays, baseProgress, options)
    expect(result.ok).toBe(true)
    if (!result.ok) throw new Error('unreachable')

    const keys = Object.keys(result.report)
    expect(keys).not.toContain('essayBody')
    expect(keys).not.toContain('rationale')
    expect(keys).not.toContain('feedbackText')
    expect(keys).not.toContain('predictedGrade')
  })
})
