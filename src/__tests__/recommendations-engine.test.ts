import { describe, it, expect } from 'vitest'

// We need to mock the quiz-data module which the engine imports
import { vi } from 'vitest'

vi.mock('@/app/revision/quiz/quiz-data', () => ({
  TOPIC_META: {
    poetry: { label: 'Poetry' },
    'set-texts': { label: 'Set Texts' },
    'language-techniques': { label: 'Language Techniques' },
    'exam-technique': { label: 'Exam Technique' },
    context: { label: 'Context' },
  },
}))

import {
  generateRecommendations,
  type UserProgress,
  type Recommendation,
} from '@/lib/recommendations/engine'

// ── Helper: build a base progress object ─────────────────────────────

function baseProgress(overrides?: Partial<UserProgress>): UserProgress {
  return {
    quizHistory: [],
    studiedPoems: [],
    gameScores: {},
    studyPlan: null,
    hasCompletedReadingAssessment: false,
    ...overrides,
  }
}

// ── Tests ─────────────────────────────────────────────────────────────

describe('Recommendation Engine', () => {
  // ── Empty progress ──────────────────────────────────────────────────

  it('returns reading assessment recommendation for a brand-new user', () => {
    const recs = generateRecommendations(baseProgress(), null)
    const readingRec = recs.find((r) => r.id.includes('reading-assessment'))
    expect(readingRec).toBeDefined()
    expect(readingRec!.priority).toBe('low')
    expect(readingRec!.type).toBe('new-content')
  })

  it('does not recommend reading assessment if already completed', () => {
    const recs = generateRecommendations(
      baseProgress({ hasCompletedReadingAssessment: true }),
      null
    )
    const readingRec = recs.find((r) => r.id.includes('reading-assessment'))
    expect(readingRec).toBeUndefined()
  })

  // ── Weak topics ────────────────────────────────────────────────────

  it('flags weak topics (<60%) as high priority', () => {
    const progress = baseProgress({
      quizHistory: [
        {
          date: '2026-04-01',
          mode: 'mixed',
          score: 4,
          total: 10,
          percentage: 40,
          grade: 'D',
          topics: ['poetry'] as any,
          topicBreakdown: {
            poetry: { correct: 4, total: 10 },
          },
        },
      ],
    })

    const recs = generateRecommendations(progress, 'aqa')
    const weakRec = recs.find((r) => r.type === 'weakness')
    expect(weakRec).toBeDefined()
    expect(weakRec!.priority).toBe('high')
    expect(weakRec!.reason).toContain('40%')
  })

  it('does not flag topics at or above 60% as weak', () => {
    const progress = baseProgress({
      quizHistory: [
        {
          date: '2026-04-01',
          mode: 'mixed',
          score: 7,
          total: 10,
          percentage: 70,
          grade: 'B',
          topics: ['poetry'] as any,
          topicBreakdown: {
            poetry: { correct: 7, total: 10 },
          },
        },
      ],
    })

    const recs = generateRecommendations(progress, 'aqa')
    const weakRec = recs.find((r) => r.type === 'weakness')
    expect(weakRec).toBeUndefined()
  })

  // ── Study plan ─────────────────────────────────────────────────────

  it('recommends continuing study plan when one exists', () => {
    const progress = baseProgress({
      studyPlan: {
        answers: { weeks: '4', grade: '5', weakArea: 'poetry', hoursPerWeek: '3' },
        board: 'aqa',
        createdAt: '2026-03-01',
        weeks: [
          {
            week: 1,
            focus: 'Poetry',
            tasks: [{ title: 'Revise Ozymandias', description: 'Focus on themes', href: '/revision/poetry/ozymandias' }],
          },
        ],
      },
    })

    const recs = generateRecommendations(progress, 'aqa')
    const planRec = recs.find((r) => r.type === 'next-step' && r.id.includes('study-plan'))
    expect(planRec).toBeDefined()
    expect(planRec!.priority).toBe('high')
  })

  // ── Unstudied poems ────────────────────────────────────────────────

  it('recommends studying more poems when below board minimum', () => {
    const progress = baseProgress({ studiedPoems: ['ozymandias', 'exposure'] })

    const recs = generateRecommendations(progress, 'aqa')
    const newContent = recs.find((r) => r.type === 'new-content' && r.id.includes('poems'))
    expect(newContent).toBeDefined()
    expect(newContent!.priority).toBe('medium')
    expect(newContent!.description).toContain('2 poem')
  })

  it('uses AQA minimum of 30 poems', () => {
    const studiedPoems = Array.from({ length: 29 }, (_, i) => `poem-${i}`)
    const progress = baseProgress({ studiedPoems })

    const recs = generateRecommendations(progress, 'aqa')
    const newContent = recs.find((r) => r.type === 'new-content' && r.id.includes('poems'))
    expect(newContent).toBeDefined()
  })

  it('uses non-AQA minimum of 15 poems', () => {
    const studiedPoems = Array.from({ length: 14 }, (_, i) => `poem-${i}`)
    const progress = baseProgress({ studiedPoems })

    const recs = generateRecommendations(progress, 'edexcel')
    const newContent = recs.find((r) => r.type === 'new-content' && r.id.includes('poems'))
    expect(newContent).toBeDefined()
  })

  // ── Comparison practice ────────────────────────────────────────────

  it('recommends comparison practice after studying 3+ poems', () => {
    const progress = baseProgress({
      studiedPoems: ['poem-a', 'poem-b', 'poem-c'],
    })

    const recs = generateRecommendations(progress, 'aqa')
    const compRec = recs.find((r) => r.id.includes('comparison'))
    expect(compRec).toBeDefined()
    expect(compRec!.type).toBe('next-step')
  })

  it('does not recommend comparison practice with fewer than 3 poems', () => {
    const progress = baseProgress({ studiedPoems: ['poem-a', 'poem-b'] })

    const recs = generateRecommendations(progress, 'aqa')
    const compRec = recs.find((r) => r.id.includes('comparison'))
    expect(compRec).toBeUndefined()
  })

  // ── Sorting and capping ────────────────────────────────────────────

  it('returns at most 5 recommendations', () => {
    const progress = baseProgress({
      quizHistory: [
        {
          date: '2026-04-01',
          mode: 'mixed',
          score: 2,
          total: 10,
          percentage: 20,
          grade: 'F',
          topics: ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'] as any,
          topicBreakdown: {
            poetry: { correct: 1, total: 5 },
            'set-texts': { correct: 1, total: 5 },
            'language-techniques': { correct: 0, total: 5 },
            'exam-technique': { correct: 1, total: 5 },
            context: { correct: 0, total: 5 },
          },
        },
      ],
      studiedPoems: ['a', 'b', 'c'],
      studyPlan: {
        answers: { weeks: '4', grade: '3', weakArea: 'all', hoursPerWeek: '5' },
        board: 'aqa',
        createdAt: '2026-03-01',
        weeks: [{ week: 1, focus: 'All', tasks: [{ title: 'T', description: 'D', href: '/' }] }],
      },
    })

    const recs = generateRecommendations(progress, 'aqa')
    expect(recs.length).toBeLessThanOrEqual(5)
  })

  it('sorts high priority before medium before low', () => {
    const progress = baseProgress({
      quizHistory: [
        {
          date: '2026-04-01',
          mode: 'mixed',
          score: 3,
          total: 10,
          percentage: 30,
          grade: 'F',
          topics: ['poetry'] as any,
          topicBreakdown: { poetry: { correct: 3, total: 10 } },
        },
      ],
      studiedPoems: ['a', 'b'],
    })

    const recs = generateRecommendations(progress, 'aqa')

    const priorities = recs.map((r) => r.priority)
    const order = { high: 0, medium: 1, low: 2 }
    for (let i = 1; i < priorities.length; i++) {
      expect(order[priorities[i]]).toBeGreaterThanOrEqual(order[priorities[i - 1]])
    }
  })

  it('de-duplicates recommendations by id', () => {
    const progress = baseProgress()
    const recs = generateRecommendations(progress, null)
    const ids = recs.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  // ── Each recommendation has valid shape ────────────────────────────

  it('every recommendation has required fields', () => {
    const progress = baseProgress({
      quizHistory: [
        {
          date: '2026-04-01',
          mode: 'mixed',
          score: 3,
          total: 10,
          percentage: 30,
          grade: 'F',
          topics: ['poetry'] as any,
          topicBreakdown: { poetry: { correct: 3, total: 10 } },
        },
      ],
      studiedPoems: ['a', 'b', 'c'],
    })

    const recs = generateRecommendations(progress, 'aqa')
    for (const rec of recs) {
      expect(rec.id).toBeTruthy()
      expect(rec.title).toBeTruthy()
      expect(rec.description).toBeTruthy()
      expect(rec.href).toBeTruthy()
      expect(rec.reason).toBeTruthy()
      expect(['high', 'medium', 'low']).toContain(rec.priority)
      expect(['weakness', 'next-step', 'streak', 'new-content']).toContain(rec.type)
    }
  })
})
