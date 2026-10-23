// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running
// jsdom for all 187 files cost 148 seconds of environment setup against an
// 11-second wall clock, for the 13 files that actually use one.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { saveGameScore, getHighScore, getGameHistory } from '@/lib/game-scores'

// ─── Mock localStorage ─────────────────────────────────────────────────────────

const store: Record<string, string> = {}

const localStorageMock = {
  getItem: vi.fn((key: string) => store[key] ?? null),
  setItem: vi.fn((key: string, value: string) => {
    store[key] = value
  }),
  removeItem: vi.fn((key: string) => {
    delete store[key]
  }),
  clear: vi.fn(() => {
    for (const key of Object.keys(store)) delete store[key]
  }),
  get length() {
    return Object.keys(store).length
  },
  key: vi.fn((index: number) => Object.keys(store)[index] ?? null),
}

Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  localStorageMock.clear()
  vi.clearAllMocks()
})

// ─── saveGameScore ──────────────────────────────────────────────────────────────

describe('saveGameScore', () => {
  it('saves a game attempt and returns the correct attempt object', () => {
    const attempt = saveGameScore('quiz-1', 8, 10)

    expect(attempt.score).toBe(8)
    expect(attempt.maxScore).toBe(10)
    expect(attempt.percentage).toBe(80)
    expect(attempt.timestamp).toBeGreaterThan(0)
  })

  it('stores no grade: a share of questions right is not an exam result (23 October 2026)', () => {
    const attempt = saveGameScore('quiz-1', 9, 10)
    expect(attempt).not.toHaveProperty('grade')
    expect(getHighScore('quiz-1')).not.toHaveProperty('grade')
  })

  it('persists data to localStorage under the correct key', () => {
    saveGameScore('vocab-game', 7, 10)

    expect(localStorageMock.setItem).toHaveBeenCalledWith('eh_game_vocab-game', expect.any(String))
  })

  it('updates the high score when a higher percentage is achieved', () => {
    saveGameScore('quiz-1', 6, 10) // 60%
    saveGameScore('quiz-1', 9, 10) // 90%

    const high = getHighScore('quiz-1')
    expect(high).not.toBeNull()
    expect(high!.score).toBe(9)
    expect(high!.percentage).toBe(90)
  })

  it('does not overwrite high score with a lower percentage', () => {
    saveGameScore('quiz-1', 9, 10) // 90%
    saveGameScore('quiz-1', 5, 10) // 50%

    const high = getHighScore('quiz-1')
    expect(high!.score).toBe(9)
    expect(high!.percentage).toBe(90)
  })

  it('handles maxScore of 0 without crashing', () => {
    const attempt = saveGameScore('broken', 5, 0)
    expect(attempt.percentage).toBe(0)
  })

  it('caps stored attempts at 50', () => {
    for (let i = 0; i < 55; i++) {
      saveGameScore('quiz-1', i % 10, 10)
    }

    const raw = JSON.parse(store['eh_game_quiz-1'])
    expect(raw.attempts.length).toBe(50)
  })
})

// ─── getHighScore ───────────────────────────────────────────────────────────────

describe('getHighScore', () => {
  it('returns null when no games have been played', () => {
    expect(getHighScore('never-played')).toBeNull()
  })

  it('returns the correct high score after multiple attempts', () => {
    saveGameScore('quiz-1', 5, 10) // 50%
    saveGameScore('quiz-1', 8, 10) // 80%
    saveGameScore('quiz-1', 6, 10) // 60%

    const high = getHighScore('quiz-1')
    expect(high).toEqual({
      score: 8,
      maxScore: 10,
      percentage: 80,
    })
  })

  it('compares by percentage, not raw score', () => {
    saveGameScore('quiz-1', 4, 5) // 80%
    saveGameScore('quiz-1', 7, 10) // 70%

    const high = getHighScore('quiz-1')
    expect(high!.percentage).toBe(80)
    expect(high!.score).toBe(4)
    expect(high!.maxScore).toBe(5)
  })
})

// ─── getGameHistory ─────────────────────────────────────────────────────────────

describe('getGameHistory', () => {
  it('returns an empty array when no games have been played', () => {
    expect(getGameHistory('no-game')).toEqual([])
  })

  it('returns attempts in reverse chronological order (most recent first)', () => {
    saveGameScore('quiz-1', 3, 10)
    saveGameScore('quiz-1', 7, 10)
    saveGameScore('quiz-1', 5, 10)

    const history = getGameHistory('quiz-1')
    expect(history.length).toBe(3)
    // Most recent attempt (score 5) should be first
    expect(history[0].score).toBe(5)
    expect(history[1].score).toBe(7)
    expect(history[2].score).toBe(3)
  })

  it('returns at most 10 entries', () => {
    for (let i = 0; i < 15; i++) {
      saveGameScore('quiz-1', i, 20)
    }

    const history = getGameHistory('quiz-1')
    expect(history.length).toBe(10)
  })

  it('returns the 10 most recent attempts when more than 10 exist', () => {
    for (let i = 1; i <= 15; i++) {
      saveGameScore('quiz-1', i, 20)
    }

    const history = getGameHistory('quiz-1')
    // The most recent attempt (score=15) should be first
    expect(history[0].score).toBe(15)
    // The oldest of the 10 returned (score=6) should be last
    expect(history[9].score).toBe(6)
  })
})
