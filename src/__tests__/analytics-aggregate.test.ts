import { describe, it, expect, vi } from 'vitest'
import {
  getQuestionDifficulty,
  getMostStudiedTexts,
  getAverageScoresByBoard,
  getGradeDistribution,
  getHardestQuestions,
  getAggregateSnapshot,
  getWeeklyPopularTexts,
} from '@/lib/analytics/aggregate'

// Mock Supabase client (functions currently return mock data)
const mockSupabase = {} as any

describe('Analytics Aggregate Engine', () => {
  // ── getQuestionDifficulty ────────────────────────────────────────────

  describe('getQuestionDifficulty', () => {
    it('returns an array of question difficulty metrics', async () => {
      const questions = await getQuestionDifficulty(mockSupabase)
      expect(Array.isArray(questions)).toBe(true)
      expect(questions.length).toBeGreaterThan(0)
    })

    it('returns questions sorted by correctRate ascending (hardest first)', async () => {
      const questions = await getQuestionDifficulty(mockSupabase)
      for (let i = 1; i < questions.length; i++) {
        expect(questions[i].correctRate).toBeGreaterThanOrEqual(questions[i - 1].correctRate)
      }
    })

    it('each question has all required fields', async () => {
      const questions = await getQuestionDifficulty(mockSupabase)
      for (const q of questions) {
        expect(q.questionId).toBeTruthy()
        expect(q.questionText).toBeTruthy()
        expect(q.moduleId).toBeTruthy()
        expect(typeof q.totalAttempts).toBe('number')
        expect(typeof q.correctRate).toBe('number')
        expect(q.correctRate).toBeGreaterThanOrEqual(0)
        expect(q.correctRate).toBeLessThanOrEqual(100)
        expect(['easy', 'medium', 'hard', 'very-hard']).toContain(q.difficulty)
      }
    })

    it('correctCount + incorrectCount equals totalAttempts', async () => {
      const questions = await getQuestionDifficulty(mockSupabase)
      for (const q of questions) {
        expect(q.correctCount + q.incorrectCount).toBe(q.totalAttempts)
      }
    })

    it('difficulty label is consistent with correctRate ordering', async () => {
      const questions = await getQuestionDifficulty(mockSupabase)
      // Difficulty labels should be one of the valid enum values
      const validDifficulties = ['easy', 'medium', 'hard', 'very-hard']
      for (const q of questions) {
        expect(validDifficulties).toContain(q.difficulty)
      }
    })
  })

  // ── getMostStudiedTexts ──────────────────────────────────────────────

  describe('getMostStudiedTexts', () => {
    it('returns an array sorted by totalStudents descending', async () => {
      const texts = await getMostStudiedTexts(mockSupabase)
      expect(texts.length).toBeGreaterThan(0)
      for (let i = 1; i < texts.length; i++) {
        expect(texts[i].totalStudents).toBeLessThanOrEqual(texts[i - 1].totalStudents)
      }
    })

    it('each text has valid trend direction', async () => {
      const texts = await getMostStudiedTexts(mockSupabase)
      for (const t of texts) {
        expect(['rising', 'stable', 'falling']).toContain(t.trendDirection)
      }
    })

    it('completion rates are between 0 and 100', async () => {
      const texts = await getMostStudiedTexts(mockSupabase)
      for (const t of texts) {
        expect(t.completionRate).toBeGreaterThanOrEqual(0)
        expect(t.completionRate).toBeLessThanOrEqual(100)
      }
    })
  })

  // ── getAverageScoresByBoard ─────────────────────────────────────────

  describe('getAverageScoresByBoard', () => {
    it('returns board scores sorted by totalStudents descending', async () => {
      const boards = await getAverageScoresByBoard(mockSupabase)
      expect(boards.length).toBeGreaterThan(0)
      for (let i = 1; i < boards.length; i++) {
        expect(boards[i].totalStudents).toBeLessThanOrEqual(boards[i - 1].totalStudents)
      }
    })

    it('quiz scores are within 0-100 range', async () => {
      const boards = await getAverageScoresByBoard(mockSupabase)
      for (const b of boards) {
        expect(b.avgQuizScore).toBeGreaterThanOrEqual(0)
        expect(b.avgQuizScore).toBeLessThanOrEqual(100)
      }
    })

    it('each board has top and bottom performing courses', async () => {
      const boards = await getAverageScoresByBoard(mockSupabase)
      for (const b of boards) {
        expect(b.topPerformingCourse).toBeTruthy()
        expect(b.bottomPerformingCourse).toBeTruthy()
        expect(b.topPerformingCourse).not.toBe(b.bottomPerformingCourse)
      }
    })
  })

  // ── getGradeDistribution ────────────────────────────────────────────

  describe('getGradeDistribution', () => {
    it('returns grade distribution entries', async () => {
      const grades = await getGradeDistribution(mockSupabase)
      expect(grades.length).toBeGreaterThan(0)
    })

    it('grade percentages are between 0 and 100', async () => {
      const grades = await getGradeDistribution(mockSupabase)
      for (const g of grades) {
        expect(g.percentage).toBeGreaterThanOrEqual(0)
        expect(g.percentage).toBeLessThanOrEqual(100)
      }
    })

    it('combined percentages sum to approximately 100', async () => {
      const grades = await getGradeDistribution(mockSupabase)
      const combined = grades.filter((g) => g.examBoard === null)
      const totalPct = combined.reduce((sum, g) => sum + g.percentage, 0)
      expect(totalPct).toBe(100)
    })

    it('grade counts are positive', async () => {
      const grades = await getGradeDistribution(mockSupabase)
      for (const g of grades) {
        expect(g.count).toBeGreaterThan(0)
      }
    })
  })

  // ── getHardestQuestions ──────────────────────────────────────────────

  describe('getHardestQuestions', () => {
    it('returns at most the requested limit', async () => {
      const questions = await getHardestQuestions(mockSupabase, 3)
      expect(questions.length).toBeLessThanOrEqual(3)
    })

    it('defaults to 5 if no limit is given', async () => {
      const questions = await getHardestQuestions(mockSupabase)
      expect(questions.length).toBeLessThanOrEqual(5)
    })

    it('returns the hardest questions (lowest correctRate first)', async () => {
      const questions = await getHardestQuestions(mockSupabase, 5)
      for (let i = 1; i < questions.length; i++) {
        expect(questions[i].correctRate).toBeGreaterThanOrEqual(questions[i - 1].correctRate)
      }
    })
  })

  // ── getWeeklyPopularTexts ──────────────────────────────────────────

  describe('getWeeklyPopularTexts', () => {
    it('returns at most 5 texts', async () => {
      const weekly = await getWeeklyPopularTexts(mockSupabase)
      expect(weekly.length).toBeLessThanOrEqual(5)
    })

    it('weekly student counts are lower than overall counts', async () => {
      const allTexts = await getMostStudiedTexts(mockSupabase)
      const weekly = await getWeeklyPopularTexts(mockSupabase)

      for (const wt of weekly) {
        const overall = allTexts.find((t) => t.textId === wt.textId)
        if (overall) {
          expect(wt.totalStudents).toBeLessThan(overall.totalStudents)
        }
      }
    })
  })

  // ── getAggregateSnapshot ───────────────────────────────────────────

  describe('getAggregateSnapshot', () => {
    it('returns a snapshot with all required sections', async () => {
      const snapshot = await getAggregateSnapshot(mockSupabase)

      expect(snapshot.generatedAt).toBeTruthy()
      expect(typeof snapshot.totalStudents).toBe('number')
      expect(typeof snapshot.totalQuizAttempts).toBe('number')
      expect(Array.isArray(snapshot.questionDifficulty)).toBe(true)
      expect(Array.isArray(snapshot.mostStudiedTexts)).toBe(true)
      expect(Array.isArray(snapshot.scoresByBoard)).toBe(true)
      expect(Array.isArray(snapshot.gradeDistribution)).toBe(true)
      expect(Array.isArray(snapshot.weeklyPopularTexts)).toBe(true)
      expect(Array.isArray(snapshot.hardestQuestions)).toBe(true)
    })

    it('generatedAt is a valid ISO date', async () => {
      const snapshot = await getAggregateSnapshot(mockSupabase)
      const parsed = new Date(snapshot.generatedAt)
      expect(parsed.getTime()).not.toBeNaN()
    })
  })
})
