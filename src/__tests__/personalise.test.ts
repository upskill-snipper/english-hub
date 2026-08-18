// ─── Personalised revision profile: quiz-history schema regression tests ────
// Guards the writer/reader contract for 'english-hub-quiz-history'. The
// original bug: the quiz engine wrote RAW correct counts into `score` while
// the toolkit readers treated `score` as a percentage, so a student averaging
// 85% was told "Predicted Grade: Grade 1".

import { describe, it, expect, beforeEach } from 'vitest'
import { buildStudentProfile } from '@/lib/revision/personalise'
import {
  LS_KEYS,
  normaliseQuizHistory,
  quizAttemptsFromHistory,
  type QuizHistoryEntry,
} from '@/components/toolkit/toolkit-types'

function legacyAttempt(dateIso: string, correct: number, total: number) {
  return {
    date: dateIso,
    mode: 'Quick (Mixed)',
    score: correct, // legacy shape: RAW correct count, not a percentage
    total,
    percentage: Math.round((correct / total) * 100),
    grade: '8',
    topics: ['poetry', 'context'],
    topicBreakdown: {
      poetry: { correct: Math.ceil(correct / 2), total: Math.ceil(total / 2) },
      context: { correct: Math.floor(correct / 2), total: Math.floor(total / 2) },
    },
  }
}

function currentAttempt(dateIso: string, attemptId: string, pct: number): QuizHistoryEntry[] {
  return [
    {
      id: `${attemptId}-poetry`,
      topic: 'poetry',
      score: pct,
      total: 10,
      correct: Math.round((pct / 100) * 10),
      date: dateIso,
      board: 'aqa',
      attemptId,
      mode: 'Quick (Mixed)',
      attemptCorrect: Math.round((pct / 100) * 20),
      attemptTotal: 20,
      attemptPercentage: pct,
    },
    {
      id: `${attemptId}-context`,
      topic: 'context',
      score: pct,
      total: 10,
      correct: Math.round((pct / 100) * 10),
      date: dateIso,
      board: 'aqa',
      attemptId,
      mode: 'Quick (Mixed)',
      attemptCorrect: Math.round((pct / 100) * 20),
      attemptTotal: 20,
      attemptPercentage: pct,
    },
  ]
}

beforeEach(() => {
  localStorage.clear()
})

describe('buildStudentProfile predicted grade', () => {
  it('two 85% attempts in the CURRENT per-topic shape produce grade >= 7', () => {
    const history = [
      ...currentAttempt('2026-08-10T10:00:00.000Z', 'a1', 85),
      ...currentAttempt('2026-08-17T10:00:00.000Z', 'a2', 85),
    ]
    localStorage.setItem(LS_KEYS.quizHistory, JSON.stringify(history))

    const profile = buildStudentProfile(null)
    expect(profile.totalQuizzes).toBe(2)
    expect(profile.predictedGrade).toBeGreaterThanOrEqual(7)
  })

  it('two 85% attempts in the LEGACY per-attempt shape migrate and produce grade >= 7', () => {
    const history = [
      legacyAttempt('2026-08-17T10:00:00.000Z', 17, 20), // newest first, as the old writer stored
      legacyAttempt('2026-08-10T10:00:00.000Z', 17, 20),
    ]
    localStorage.setItem(LS_KEYS.quizHistory, JSON.stringify(history))

    const profile = buildStudentProfile(null)
    expect(profile.totalQuizzes).toBe(2)
    // 85% average must never be read as an 8.5% average again
    expect(profile.predictedGradeRaw).toBeGreaterThanOrEqual(80)
    expect(profile.predictedGrade).toBeGreaterThanOrEqual(7)
  })

  it('never renders the literal string "undefined" in weak-topic suggestions', () => {
    const history = [
      legacyAttempt('2026-08-17T10:00:00.000Z', 5, 20),
      legacyAttempt('2026-08-10T10:00:00.000Z', 4, 20),
    ]
    localStorage.setItem(LS_KEYS.quizHistory, JSON.stringify(history))

    const profile = buildStudentProfile(null)
    expect(profile.weakTopics.length).toBeGreaterThan(0)
    for (const weak of profile.weakTopics) {
      expect(weak.label).not.toContain('undefined')
      expect(weak.suggestion).not.toContain('undefined')
    }
  })
})

describe('normaliseQuizHistory', () => {
  it('expands a legacy attempt into per-topic percentage rows', () => {
    const rows = normaliseQuizHistory([legacyAttempt('2026-08-17T10:00:00.000Z', 17, 20)])
    expect(rows).toHaveLength(2)
    for (const row of rows) {
      expect(typeof row.topic).toBe('string')
      expect(row.score).toBeGreaterThanOrEqual(0)
      expect(row.score).toBeLessThanOrEqual(100)
      expect(row.attemptPercentage).toBe(85)
    }
  })

  it('passes current-shape rows through and collapses them back into attempts', () => {
    const rows = normaliseQuizHistory([
      ...currentAttempt('2026-08-10T10:00:00.000Z', 'a1', 90),
      ...currentAttempt('2026-08-17T10:00:00.000Z', 'a2', 70),
    ])
    const attempts = quizAttemptsFromHistory(rows)
    expect(attempts).toHaveLength(2)
    // Oldest first
    expect(attempts[0].percentage).toBe(90)
    expect(attempts[1].percentage).toBe(70)
  })

  it('drops garbage rows instead of letting them poison averages', () => {
    const rows = normaliseQuizHistory([null, 42, 'nope', {}, { topic: 7, score: 'x' }])
    expect(rows).toHaveLength(0)
  })
})
