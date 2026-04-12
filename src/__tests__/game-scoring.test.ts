import { describe, it, expect, vi, beforeEach } from 'vitest'
import { scoreToGrade, saveGameScore, getHighScore, getGameHistory } from '@/lib/game-scores'

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

// ─── scoreToGrade ───────────────────────────────────────────────────────────────

describe('scoreToGrade', () => {
  it('returns Grade 9 for 90%+', () => {
    expect(scoreToGrade(9, 10)).toBe(9)
    expect(scoreToGrade(10, 10)).toBe(9)
    expect(scoreToGrade(45, 50)).toBe(9)
  })

  it('returns Grade 8 for 80-89%', () => {
    expect(scoreToGrade(8, 10)).toBe(8)
    expect(scoreToGrade(85, 100)).toBe(8)
    expect(scoreToGrade(89, 100)).toBe(8)
  })

  it('returns Grade 7 for 70-79%', () => {
    expect(scoreToGrade(7, 10)).toBe(7)
    expect(scoreToGrade(75, 100)).toBe(7)
  })

  it('returns Grade 6 for 60-69%', () => {
    expect(scoreToGrade(6, 10)).toBe(6)
    expect(scoreToGrade(65, 100)).toBe(6)
  })

  it('returns Grade 5 for 50-59%', () => {
    expect(scoreToGrade(5, 10)).toBe(5)
    expect(scoreToGrade(55, 100)).toBe(5)
  })

  it('returns Grade 4 for 40-49%', () => {
    expect(scoreToGrade(4, 10)).toBe(4)
    expect(scoreToGrade(45, 100)).toBe(4)
  })

  it('returns Grade 3 for 30-39%', () => {
    expect(scoreToGrade(3, 10)).toBe(3)
    expect(scoreToGrade(35, 100)).toBe(3)
  })

  it('returns Grade 2 for 20-29%', () => {
    expect(scoreToGrade(2, 10)).toBe(2)
    expect(scoreToGrade(25, 100)).toBe(2)
  })

  it('returns Grade 1 for 0-19%', () => {
    expect(scoreToGrade(1, 10)).toBe(1)
    expect(scoreToGrade(0, 10)).toBe(1)
    expect(scoreToGrade(15, 100)).toBe(1)
  })

  it('returns Grade 1 when maxScore is 0 or negative', () => {
    expect(scoreToGrade(5, 0)).toBe(1)
    expect(scoreToGrade(5, -1)).toBe(1)
  })

  it('handles boundary values exactly', () => {
    // Exact boundary percentages
    expect(scoreToGrade(90, 100)).toBe(9)
    expect(scoreToGrade(80, 100)).toBe(8)
    expect(scoreToGrade(70, 100)).toBe(7)
    expect(scoreToGrade(60, 100)).toBe(6)
    expect(scoreToGrade(50, 100)).toBe(5)
    expect(scoreToGrade(40, 100)).toBe(4)
    expect(scoreToGrade(30, 100)).toBe(3)
    expect(scoreToGrade(20, 100)).toBe(2)
    expect(scoreToGrade(0, 100)).toBe(1)
  })
})

// ─── saveGameScore ──────────────────────────────────────────────────────────────

describe('saveGameScore', () => {
  it('saves a game attempt and returns the correct attempt object', () => {
    const attempt = saveGameScore('quiz-1', 8, 10)

    expect(attempt.score).toBe(8)
    expect(attempt.maxScore).toBe(10)
    expect(attempt.percentage).toBe(80)
    expect(attempt.grade).toBe(8)
    expect(attempt.timestamp).toBeGreaterThan(0)
  })

  it('persists data to localStorage under the correct key', () => {
    saveGameScore('vocab-game', 7, 10)

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'eh_game_vocab-game',
      expect.any(String),
    )
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
    expect(attempt.grade).toBe(1)
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
      grade: 8,
    })
  })

  it('compares by percentage, not raw score', () => {
    saveGameScore('quiz-1', 4, 5)   // 80%
    saveGameScore('quiz-1', 7, 10)  // 70%

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
