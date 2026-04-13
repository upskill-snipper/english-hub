import { describe, it, expect } from 'vitest'
import {
  ALL_QUESTIONS,
  TOPICS,
  getTopicsForBoard,
  questionMatchesBoard,
  getQuestionsForBoard,
  pickQuestions,
} from '@/app/revision/quiz/quiz-data'
import type { QuizQuestion } from '@/app/revision/quiz/quiz-data'

// ─── Question bank integrity ───────────────────────────────────────────────

describe('Quiz question bank', () => {
  it('contains at least 100 questions', () => {
    expect(ALL_QUESTIONS.length).toBeGreaterThanOrEqual(100)
  })

  it('every question has all required fields with valid values', () => {
    for (const q of ALL_QUESTIONS) {
      expect(q.id).toBeTruthy()
      expect(TOPICS).toContain(q.topic)
      expect(q.question.length).toBeGreaterThan(0)
      expect(q.options).toHaveLength(4)
      for (const opt of q.options) expect(opt.length).toBeGreaterThan(0)
      expect(q.correctIndex).toBeGreaterThanOrEqual(0)
      expect(q.correctIndex).toBeLessThanOrEqual(3)
      expect(q.explanation.length).toBeGreaterThan(0)
    }
  })

  it('has no duplicate question IDs', () => {
    const ids = ALL_QUESTIONS.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

// ─── getTopicsForBoard ──────────────────────────────────────────────────────

describe('getTopicsForBoard', () => {
  it('returns all 5 topics for AQA', () => {
    const topics = getTopicsForBoard('aqa')
    expect(topics).toHaveLength(5)
    expect(topics).toEqual(
      expect.arrayContaining([
        'poetry',
        'set-texts',
        'language-techniques',
        'exam-technique',
        'context',
      ]),
    )
  })

  it('returns only language-techniques and exam-technique for cambridge-0500', () => {
    const topics = getTopicsForBoard('cambridge-0500')
    expect(topics).toEqual(
      expect.arrayContaining(['language-techniques', 'exam-technique']),
    )
    expect(topics).not.toContain('poetry')
    expect(topics).not.toContain('set-texts')
    expect(topics).not.toContain('context')
  })

  it('returns all topics when board is null', () => {
    expect(getTopicsForBoard(null)).toEqual(TOPICS)
  })
})

// ─── questionMatchesBoard ───────────────────────────────────────────────────

describe('questionMatchesBoard', () => {
  const generic: QuizQuestion = {
    id: 'test-generic',
    topic: 'language-techniques',
    question: 'Test?',
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanation: 'Test.',
  }

  const aqaOnly: QuizQuestion = {
    ...generic,
    id: 'test-aqa',
    boards: ['aqa'],
  }

  it('matches any board when question has no boards field', () => {
    expect(questionMatchesBoard(generic, 'aqa')).toBe(true)
    expect(questionMatchesBoard(generic, 'cambridge-0500')).toBe(true)
  })

  it('matches when board is null (no filtering)', () => {
    expect(questionMatchesBoard(aqaOnly, null)).toBe(true)
  })

  it('matches when question lists the given board', () => {
    expect(questionMatchesBoard(aqaOnly, 'aqa')).toBe(true)
  })

  it('does not match when question is scoped to a different board', () => {
    expect(questionMatchesBoard(aqaOnly, 'cambridge-0500')).toBe(false)
  })
})

// ─── getQuestionsForBoard ───────────────────────────────────────────────────

describe('getQuestionsForBoard', () => {
  it('returns only matching questions for cambridge-0500', () => {
    const qs = getQuestionsForBoard(undefined, 'cambridge-0500')
    for (const q of qs) {
      // Must not be board-locked to another board
      if (q.boards && q.boards.length > 0) {
        expect(q.boards).toContain('cambridge-0500')
      }
      // When no topics are specified, getQuestionsForBoard only filters by
      // board matching — untagged questions from any topic pass through.
      // Topic restriction is the caller's responsibility (e.g. via
      // getTopicsForBoard).
    }
    expect(qs.length).toBeGreaterThan(0)
  })

  it('returns only board-relevant topics when topics are provided from getTopicsForBoard', () => {
    const topics = getTopicsForBoard('cambridge-0500')
    const qs = getQuestionsForBoard(topics, 'cambridge-0500')
    for (const q of qs) {
      expect(['language-techniques', 'exam-technique']).toContain(q.topic)
      if (q.boards && q.boards.length > 0) {
        expect(q.boards).toContain('cambridge-0500')
      }
    }
    expect(qs.length).toBeGreaterThan(0)
  })

  it('returns all questions when board is null and topics are empty', () => {
    expect(getQuestionsForBoard(undefined, null)).toHaveLength(ALL_QUESTIONS.length)
  })

  it('filters by topic when topics are provided', () => {
    const qs = getQuestionsForBoard(['poetry'], null)
    for (const q of qs) expect(q.topic).toBe('poetry')
    expect(qs.length).toBeGreaterThan(0)
  })

  it('excludes board-scoped questions that do not match', () => {
    const qs = getQuestionsForBoard(['poetry'], 'cambridge-0500')
    // cambridge-0500 does not cover poetry, so topic filter alone would yield
    // poetry questions, but board filtering should remove board-scoped ones
    // and the topic is not in cambridge-0500's topic list -- however
    // getQuestionsForBoard only filters by board via questionMatchesBoard,
    // not by TOPICS_FOR_BOARD. So we just verify board matching here.
    for (const q of qs) {
      expect(q.topic).toBe('poetry')
      expect(questionMatchesBoard(q, 'cambridge-0500')).toBe(true)
    }
  })
})

// ─── pickQuestions ──────────────────────────────────────────────────────────

describe('pickQuestions', () => {
  it('returns the requested number of questions', () => {
    const qs = pickQuestions(10)
    expect(qs).toHaveLength(10)
  })

  it('returns fewer if pool is smaller than requested count', () => {
    const pool = getQuestionsForBoard(['poetry'], 'cambridge-0500')
    const qs = pickQuestions(999, ['poetry'], 'cambridge-0500')
    expect(qs).toHaveLength(pool.length)
  })

  it('returns valid QuizQuestion objects', () => {
    const qs = pickQuestions(5)
    for (const q of qs) {
      expect(q.id).toBeTruthy()
      expect(q.options).toHaveLength(4)
    }
  })
})
