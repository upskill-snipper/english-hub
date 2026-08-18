import { describe, it, expect } from 'vitest'
import {
  scoreAnswer,
  calculateReadingAge,
  formatAgeScore,
  compareToChronologicalAge,
} from '@/lib/reading-assessment'
import type {
  ComprehensionAnswer,
  FluencyTiming,
  DecodingAnswer,
  AssessmentInput,
} from '@/lib/reading-assessment'
import type { ComprehensionQuestion } from '@/data/reading-passages'

// ─── Helpers ────────────────────────────────────────────────────────────────

function mcQuestion(overrides: Partial<ComprehensionQuestion> = {}): ComprehensionQuestion {
  return {
    id: 'p1q1',
    type: 'multiple-choice',
    question: 'What colour is the sky?',
    options: [
      { id: 'a', text: 'Red' },
      { id: 'b', text: 'Blue' },
    ],
    correctAnswer: 'b',
    skill: 'literal',
    points: 2,
    ...overrides,
  }
}

function saQuestion(overrides: Partial<ComprehensionQuestion> = {}): ComprehensionQuestion {
  return {
    id: 'p1q2',
    type: 'short-answer',
    question: 'Describe the setting',
    correctAnswer: 'dark forest night',
    acceptableKeywords: ['gloomy', 'woods'],
    skill: 'inferential',
    points: 4,
    ...overrides,
  }
}

function buildInput(overrides: Partial<AssessmentInput> = {}): AssessmentInput {
  return {
    comprehensionAnswers: [],
    decodingAnswers: [],
    fluencyTimings: [],
    questions: [],
    decodingWords: [],
    ...overrides,
  }
}

// ─── scoreAnswer ────────────────────────────────────────────────────────────

describe('scoreAnswer', () => {
  describe('multiple-choice', () => {
    it('awards full points for correct answer', () => {
      const q = mcQuestion({ points: 3, correctAnswer: 'b' })
      expect(scoreAnswer({ questionId: 'p1q1', answer: 'b' }, q)).toBe(3)
    })

    it('awards zero for incorrect answer', () => {
      const q = mcQuestion({ points: 3, correctAnswer: 'b' })
      expect(scoreAnswer({ questionId: 'p1q1', answer: 'a' }, q)).toBe(0)
    })

    it('awards zero for empty string answer', () => {
      const q = mcQuestion()
      expect(scoreAnswer({ questionId: 'p1q1', answer: '' }, q)).toBe(0)
    })
  })

  describe('short-answer keyword matching', () => {
    it('awards full points when >=50% keywords match', () => {
      // correctAnswer splits to ["dark", "forest", "night"]
      // acceptableKeywords = ["gloomy", "woods"]
      // unique keywords: dark, forest, night, gloomy, woods (5 total)
      // answer contains "dark", "forest", "night" = 3/5 = 60% >= 50%
      const q = saQuestion()
      const answer: ComprehensionAnswer = {
        questionId: 'p1q2',
        answer: 'It was a dark forest at night',
      }
      expect(scoreAnswer(answer, q)).toBe(4)
    })

    it('awards half points (rounded up) when >=25% but <50%', () => {
      // 1 of 5 keywords = 20%... need exactly 25%
      // Use a question with 4 unique keywords so 1 match = 25%
      const q = saQuestion({
        correctAnswer: 'bright sunny morning',
        acceptableKeywords: ['dawn'],
        points: 4,
      })
      // unique keywords: bright, sunny, morning, dawn (4)
      // answer contains "dawn" = 1/4 = 25%
      const answer: ComprehensionAnswer = { questionId: 'p1q2', answer: 'at dawn' }
      expect(scoreAnswer(answer, q)).toBe(2) // ceil(4/2) = 2
    })

    it('awards zero when <25% keywords match', () => {
      const q = saQuestion()
      const answer: ComprehensionAnswer = { questionId: 'p1q2', answer: 'I do not know' }
      expect(scoreAnswer(answer, q)).toBe(0)
    })

    it('is case-insensitive', () => {
      const q = saQuestion({ correctAnswer: 'dark forest', acceptableKeywords: [], points: 2 })
      const answer: ComprehensionAnswer = { questionId: 'p1q2', answer: 'DARK FOREST' }
      expect(scoreAnswer(answer, q)).toBe(2)
    })

    it('trims whitespace from answer', () => {
      const q = saQuestion({ correctAnswer: 'dark forest', acceptableKeywords: [], points: 2 })
      const answer: ComprehensionAnswer = { questionId: 'p1q2', answer: '  dark forest  ' }
      expect(scoreAnswer(answer, q)).toBe(2)
    })

    it('handles question with no acceptableKeywords', () => {
      const q = saQuestion({
        correctAnswer: 'the cat sat',
        acceptableKeywords: undefined,
        points: 2,
      })
      // keywords from correctAnswer only: the, cat, sat (3)
      // answer "the cat" = 2/3 = 66% >= 50%
      const answer: ComprehensionAnswer = { questionId: 'p1q2', answer: 'the cat' }
      expect(scoreAnswer(answer, q)).toBe(2)
    })
  })
})

// ─── scoreFluency ───────────────────────────────────────────────────────────
// Self-timed reading rate only. Accuracy and adjusted WPM were removed after
// audit: the screener cannot hear the child read, so an earlier version's
// flat 95% "accuracy" was fabricated - these tests pin the honest contract.

describe('scoreFluency (via calculateReadingAge)', () => {
  function fluencyResult(timings: FluencyTiming[]) {
    return calculateReadingAge(buildInput({ fluencyTimings: timings })).rawScores.fluency
  }

  it('calculates WPM correctly for a single passage', () => {
    // 100 words in 60 seconds = 100 WPM
    const result = fluencyResult([{ passageId: 'p1', readingTimeSeconds: 60, wordCount: 100 }])
    expect(result.wordsPerMinute).toBe(100)
  })

  it('caps WPM at 450', () => {
    // 1000 words in 60 seconds = 1000 WPM (unrealistic), should cap at 450
    const result = fluencyResult([{ passageId: 'p1', readingTimeSeconds: 60, wordCount: 1000 }])
    expect(result.wordsPerMinute).toBe(450)
  })

  it('never reports an accuracy figure - accuracy is not measurable here', () => {
    const result = fluencyResult([{ passageId: 'p1', readingTimeSeconds: 60, wordCount: 100 }])
    expect(result).not.toHaveProperty('accuracy')
    expect(result).not.toHaveProperty('adjustedWpm')
  })

  it('averages across multiple passages', () => {
    const result = fluencyResult([
      { passageId: 'p1', readingTimeSeconds: 60, wordCount: 120 }, // 120 WPM
      { passageId: 'p2', readingTimeSeconds: 60, wordCount: 80 }, // 80 WPM
    ])
    // avg WPM = (120+80)/2 = 100
    expect(result.wordsPerMinute).toBe(100)
  })

  it('returns zeros for empty timings array', () => {
    const result = fluencyResult([])
    expect(result.wordsPerMinute).toBe(0)
  })

  it('handles zero reading time (0 seconds)', () => {
    const result = fluencyResult([{ passageId: 'p1', readingTimeSeconds: 0, wordCount: 100 }])
    // minutes = 0, rawWpm = 0 (guarded by minutes > 0)
    expect(result.wordsPerMinute).toBe(0)
  })

  it('handles zero word count', () => {
    const result = fluencyResult([{ passageId: 'p1', readingTimeSeconds: 60, wordCount: 0 }])
    expect(result.wordsPerMinute).toBe(0)
  })
})

// ─── calculateReadingAge ────────────────────────────────────────────────────

describe('calculateReadingAge', () => {
  it('returns correct output structure', () => {
    const result = calculateReadingAge(buildInput())
    expect(result).toHaveProperty('readingAge')
    expect(result).toHaveProperty('decodingAge')
    expect(result).toHaveProperty('rawScores')
    expect(result).toHaveProperty('ceilingLevel')
    expect(result).toHaveProperty('ceilingReached')
    expect(result).toHaveProperty('passagesAttempted')
    expect(result).toHaveProperty('strengths')
    expect(result).toHaveProperty('areasForDevelopment')

    // Removed after audit - must never come back:
    // a "fluency age" from a self-clicked timer and a GCSE mapping
    // from a reading age were both fabricated numbers.
    expect(result).not.toHaveProperty('fluencyAge')
    expect(result).not.toHaveProperty('gcseEquivalent')

    // AgeScore shape
    expect(result.readingAge).toHaveProperty('years')
    expect(result.readingAge).toHaveProperty('months')
    expect(typeof result.readingAge.years).toBe('number')
    expect(typeof result.readingAge.months).toBe('number')
  })

  it('returns rawScores with all three dimensions', () => {
    const result = calculateReadingAge(buildInput())
    expect(result.rawScores).toHaveProperty('comprehension')
    expect(result.rawScores).toHaveProperty('decoding')
    expect(result.rawScores).toHaveProperty('fluency')
    expect(result.rawScores.comprehension).toHaveProperty('score')
    expect(result.rawScores.comprehension).toHaveProperty('maxScore')
    expect(result.rawScores.comprehension).toHaveProperty('percentage')
  })

  it('scores comprehension correctly', () => {
    const q = mcQuestion({ id: 'p1q1', correctAnswer: 'b', points: 2 })
    const result = calculateReadingAge(
      buildInput({
        comprehensionAnswers: [{ questionId: 'p1q1', answer: 'b' }],
        questions: [q],
      }),
    )
    expect(result.rawScores.comprehension.score).toBe(2)
    expect(result.rawScores.comprehension.maxScore).toBe(2)
    expect(result.rawScores.comprehension.percentage).toBe(100)
  })

  it('scores decoding correctly', () => {
    const decodingAnswers: DecodingAnswer[] = [
      { wordId: 'd1', correct: true, responseTimeMs: 500 },
      { wordId: 'd2', correct: false, responseTimeMs: 800 },
      { wordId: 'd3', correct: true, responseTimeMs: 600 },
    ]
    const result = calculateReadingAge(buildInput({ decodingAnswers }))
    expect(result.rawScores.decoding.score).toBe(2)
    expect(result.rawScores.decoding.maxScore).toBe(3)
    expect(result.rawScores.decoding.percentage).toBe(67)
  })

  it('handles fully empty input without errors', () => {
    const result = calculateReadingAge(buildInput())
    expect(result.readingAge.years).toBeGreaterThanOrEqual(5)
    expect(result.ceilingLevel).toBe(1)
    expect(result.ceilingReached).toBe(false)
    expect(result.strengths.length).toBeGreaterThanOrEqual(1)
    expect(result.areasForDevelopment.length).toBeGreaterThanOrEqual(1)
  })

  it('ceiling flag passes through from input', () => {
    const result = calculateReadingAge(buildInput({ ceilingReached: true }))
    expect(result.ceilingReached).toBe(true)
  })

  it('passagesAttempted uses input value when provided', () => {
    const result = calculateReadingAge(buildInput({ passagesAttempted: 5 }))
    expect(result.passagesAttempted).toBe(5)
  })
})

// ─── No GCSE mapping (regression) ──────────────────────────────────────────
// A reading age does not map to a GCSE grade. The old gcseEquivalent output
// was removed after audit; this pins its absence even at ceiling scores.

describe('no GCSE grade mapping', () => {
  function resultForScores(compPct: number, decPct: number, wpm: number) {
    // Build questions/answers to hit the desired comprehension percentage
    const questions: ComprehensionQuestion[] = []
    const answers: ComprehensionAnswer[] = []
    const total = 100
    const correct = compPct
    for (let i = 0; i < total; i++) {
      questions.push(mcQuestion({ id: `p1q${i}`, points: 1, correctAnswer: 'b' }))
      answers.push({ questionId: `p1q${i}`, answer: i < correct ? 'b' : 'a' })
    }

    // Build decoding answers
    const decodingAnswers: DecodingAnswer[] = []
    const decTotal = 100
    for (let i = 0; i < decTotal; i++) {
      decodingAnswers.push({ wordId: `d${i}`, correct: i < decPct, responseTimeMs: 500 })
    }

    const fluencyTimings: FluencyTiming[] = [
      { passageId: 'p1', readingTimeSeconds: 60, wordCount: wpm },
    ]

    return calculateReadingAge(
      buildInput({
        comprehensionAnswers: answers,
        questions,
        decodingAnswers,
        fluencyTimings,
      }),
    )
  }

  it('never emits a gcseEquivalent, even for a ceiling performance', () => {
    const result = resultForScores(95, 95, 250)
    expect(result).not.toHaveProperty('gcseEquivalent')
    // The composite still reflects the strong performance
    expect(result.readingAge.years).toBeGreaterThanOrEqual(14)
  })

  it('never recommends clinical interventions in plain-language feedback', () => {
    const weak = resultForScores(10, 10, 20)
    const allFeedback = [...weak.strengths, ...weak.areasForDevelopment].join(' ')
    expect(allFeedback.toLowerCase()).not.toContain('systematic phonics intervention')
  })
})

// ─── Edge cases ─────────────────────────────────────────────────────────────

describe('edge cases', () => {
  it('comprehension with no matching question IDs scores zero', () => {
    const q = mcQuestion({ id: 'p1q1' })
    const result = calculateReadingAge(
      buildInput({
        comprehensionAnswers: [{ questionId: 'nonexistent', answer: 'b' }],
        questions: [q],
      }),
    )
    // Answer doesn't match any question, so score is 0 but maxScore is still counted
    expect(result.rawScores.comprehension.score).toBe(0)
  })

  it('decoding with all incorrect answers produces 0%', () => {
    const decodingAnswers: DecodingAnswer[] = [
      { wordId: 'd1', correct: false, responseTimeMs: 1000 },
      { wordId: 'd2', correct: false, responseTimeMs: 1000 },
    ]
    const result = calculateReadingAge(buildInput({ decodingAnswers }))
    expect(result.rawScores.decoding.percentage).toBe(0)
  })

  it('decoding with all correct answers produces 100%', () => {
    const decodingAnswers: DecodingAnswer[] = [
      { wordId: 'd1', correct: true, responseTimeMs: 500 },
      { wordId: 'd2', correct: true, responseTimeMs: 500 },
    ]
    const result = calculateReadingAge(buildInput({ decodingAnswers }))
    expect(result.rawScores.decoding.percentage).toBe(100)
  })

  it('very fast reading time gets capped at 450 WPM per passage', () => {
    // 500 words in 10 seconds = 3000 WPM raw, but should cap at 450
    const result = calculateReadingAge(
      buildInput({
        fluencyTimings: [{ passageId: 'p1', readingTimeSeconds: 10, wordCount: 500 }],
      }),
    )
    expect(result.rawScores.fluency.wordsPerMinute).toBe(450)
  })
})

// ─── formatAgeScore ─────────────────────────────────────────────────────────

describe('formatAgeScore', () => {
  it('formats years only when months is 0', () => {
    expect(formatAgeScore({ years: 10, months: 0 })).toBe('10 years')
  })

  it('formats years and months', () => {
    expect(formatAgeScore({ years: 8, months: 6 })).toBe('8 years 6 months')
  })

  it('handles singular year', () => {
    expect(formatAgeScore({ years: 1, months: 0 })).toBe('1 year')
  })

  it('handles singular month', () => {
    expect(formatAgeScore({ years: 7, months: 1 })).toBe('7 years 1 month')
  })
})

// ─── compareToChronologicalAge ──────────────────────────────────────────────

describe('compareToChronologicalAge', () => {
  it('returns "above" when reading age is 6+ months ahead', () => {
    expect(compareToChronologicalAge({ years: 12, months: 0 }, 11, 0)).toBe('above')
  })

  it('returns "below" when reading age is 6+ months behind', () => {
    expect(compareToChronologicalAge({ years: 9, months: 0 }, 10, 0)).toBe('below')
  })

  it('returns "at" when within 5 months', () => {
    expect(compareToChronologicalAge({ years: 10, months: 3 }, 10, 0)).toBe('at')
  })

  it('returns "at" when exactly equal', () => {
    expect(compareToChronologicalAge({ years: 10, months: 6 }, 10, 6)).toBe('at')
  })
})
