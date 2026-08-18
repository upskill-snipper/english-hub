// ─── Reading Assessment Scoring Engine ────────────────────────────────────────
// Calculates indicative Reading Age and Decoding Age from a self-administered
// online screener. The norm tables below are hand-authored approximations in
// the style of standardised instruments (NFER, Salford, YARC) - they are NOT
// standardised norms, carry no sample or standard error, and every consumer
// must present the output as indicative only, with a visible caveat.
//
// Deliberately absent (removed after audit - do not reintroduce):
//   - Reading ACCURACY: the screener cannot hear the child read, so accuracy
//     cannot be measured. It was previously hardcoded to 95% for everyone.
//   - Fluency Age: with no accuracy capture, a "fluency age" is purely a
//     function of how quickly the child pressed "finished". The self-timed
//     reading rate (WPM) is still reported, labelled as self-timed.
//   - GCSE equivalent: a reading age does not map to a GCSE grade.
// ──────────────────────────────────────────────────────────────────────────────

import type { ComprehensionQuestion, DecodingWord } from '@/data/reading-passages'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AgeScore {
  years: number
  months: number
}

export interface ReadingAssessmentResult {
  /** Indicative only - composite of comprehension and decoding ages. */
  readingAge: AgeScore
  decodingAge: AgeScore
  rawScores: {
    comprehension: { score: number; maxScore: number; percentage: number }
    decoding: { score: number; maxScore: number; percentage: number }
    /** Self-timed reading rate. A fact about the attempt, not a measured skill level. */
    fluency: { wordsPerMinute: number }
  }
  /** Highest passage level completed with >50% accuracy */
  ceilingLevel: number
  /** Whether the test ended early due to ceiling rule */
  ceilingReached: boolean
  /** Number of passages attempted (may be less than total if ceiling reached) */
  passagesAttempted: number
  strengths: string[]
  areasForDevelopment: string[]
}

export interface ComprehensionAnswer {
  questionId: string
  answer: string // option id for MC, text for short-answer
}

export interface DecodingAnswer {
  wordId: string
  correct: boolean
  /** Time taken in milliseconds */
  responseTimeMs: number
}

export interface FluencyTiming {
  passageId: string
  /** Time taken to read the passage in seconds */
  readingTimeSeconds: number
  /** Word count of the passage */
  wordCount: number
}

export interface AssessmentInput {
  comprehensionAnswers: ComprehensionAnswer[]
  decodingAnswers: DecodingAnswer[]
  fluencyTimings: FluencyTiming[]
  /** Questions reference for scoring */
  questions: ComprehensionQuestion[]
  /** Decoding words reference */
  decodingWords: DecodingWord[]
  /** Whether the test ended early due to ceiling rule */
  ceilingReached?: boolean
  /** Number of passages actually attempted (for partial completion) */
  passagesAttempted?: number
  /** Total passages available */
  totalPassages?: number
}

// ─── Age-Score Norm Tables ───────────────────────────────────────────────────
// These map raw percentage scores to age equivalents, based on standardised
// reading test methodology. Each entry: [minPercentage, ageYears, ageMonths]

const COMPREHENSION_NORMS: [number, number, number][] = [
  [95, 17, 6],
  [90, 16, 6],
  [85, 15, 6],
  [80, 14, 9],
  [75, 14, 0],
  [70, 13, 3],
  [65, 12, 6],
  [60, 11, 9],
  [55, 11, 0],
  [50, 10, 6],
  [45, 10, 0],
  [40, 9, 6],
  [35, 9, 0],
  [30, 8, 6],
  [25, 8, 0],
  [20, 7, 6],
  [15, 7, 0],
  [10, 6, 6],
  [5, 6, 0],
  [0, 5, 6],
]

const DECODING_NORMS: [number, number, number][] = [
  [95, 16, 0],
  [90, 15, 0],
  [85, 14, 0],
  [80, 13, 3],
  [75, 12, 6],
  [70, 12, 0],
  [65, 11, 6],
  [60, 11, 0],
  [55, 10, 6],
  [50, 10, 0],
  [45, 9, 6],
  [40, 9, 0],
  [35, 8, 6],
  [30, 8, 0],
  [25, 7, 6],
  [20, 7, 0],
  [15, 6, 6],
  [10, 6, 0],
  [5, 5, 6],
  [0, 5, 0],
]

// ─── Scoring Functions ───────────────────────────────────────────────────────

function lookupAge(norms: [number, number, number][], value: number): AgeScore {
  for (const [min, years, months] of norms) {
    if (value >= min) return { years, months }
  }
  return { years: 5, months: 0 }
}

/**
 * Score a single answer against its question. Returns the points earned.
 */
export function scoreAnswer(answer: ComprehensionAnswer, question: ComprehensionQuestion): number {
  if (question.type === 'multiple-choice') {
    return answer.answer === question.correctAnswer ? question.points : 0
  }

  // Short answer - check for keyword matches
  const answerLower = answer.answer.toLowerCase().trim()
  const keywords = [
    ...(question.acceptableKeywords ?? []),
    ...question.correctAnswer.split(' '),
  ].map((k) => k.toLowerCase())

  const uniqueKeywords = [...new Set(keywords)]
  const matchCount = uniqueKeywords.filter((kw) => answerLower.includes(kw)).length
  const matchRatio = matchCount / Math.max(uniqueKeywords.length, 1)

  if (matchRatio >= 0.5) return question.points
  if (matchRatio >= 0.25) return Math.ceil(question.points / 2)
  return 0
}

function scoreComprehension(
  answers: ComprehensionAnswer[],
  questions: ComprehensionQuestion[],
): { score: number; maxScore: number; percentage: number } {
  const questionMap = new Map(questions.map((q) => [q.id, q]))
  let score = 0
  let maxScore = 0

  for (const answer of answers) {
    const question = questionMap.get(answer.questionId)
    if (!question) continue
    maxScore += question.points
    score += scoreAnswer(answer, question)
  }

  return {
    score,
    maxScore: maxScore || 1,
    percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
  }
}

function scoreDecoding(answers: DecodingAnswer[]): {
  score: number
  maxScore: number
  percentage: number
} {
  const maxScore = answers.length
  const score = answers.filter((a) => a.correct).length

  return {
    score,
    maxScore: maxScore || 1,
    percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
  }
}

// Cap WPM at a realistic maximum - even exceptional adult readers with full
// comprehension rarely exceed 450 WPM. Speed readers and skimmers may hit
// 700+ but comprehension drops dramatically above 500. We cap at 450 so the
// reading-age norms table (which maps WPM to age) stays within the range
// it was designed for.
const MAX_FLUENCY_WPM = 450

export function scoreFluency(timings: FluencyTiming[]): { wordsPerMinute: number } {
  if (timings.length === 0) {
    return { wordsPerMinute: 0 }
  }

  // Average across all timed passages. Each passage's WPM is individually
  // capped so one suspiciously-fast passage can't skew the average upward.
  // No accuracy adjustment: the screener never hears the child read, so
  // accuracy is unmeasurable here (an earlier version invented a flat 95%).
  let totalWpm = 0

  for (const timing of timings) {
    const minutes = timing.readingTimeSeconds / 60
    const rawWpm = minutes > 0 ? timing.wordCount / minutes : 0
    // Cap individual passage WPM - any reading faster than this is gaming
    // the button (clicking "finished" too quickly) rather than genuine fluency.
    totalWpm += Math.min(rawWpm, MAX_FLUENCY_WPM)
  }

  const avgWpm = totalWpm / timings.length

  return {
    wordsPerMinute: Math.round(Math.min(avgWpm, MAX_FLUENCY_WPM)),
  }
}

/**
 * Determine the highest passage level where the student scored >50%.
 */
function findCeilingLevel(
  answers: ComprehensionAnswer[],
  questions: ComprehensionQuestion[],
  passageLevels: Map<string, number>,
): number {
  // Group questions by passage level
  const levelScores = new Map<number, { score: number; max: number }>()

  for (const q of questions) {
    // Extract passage level from question id (e.g. "p3q1" → passage "p3" → level from map)
    const passageId = q.id.replace(/q\d+$/, '')
    const level = passageLevels.get(passageId) ?? 1

    if (!levelScores.has(level)) {
      levelScores.set(level, { score: 0, max: 0 })
    }
    const ls = levelScores.get(level)!
    ls.max += q.points

    const answer = answers.find((a) => a.questionId === q.id)
    if (answer) {
      if (q.type === 'multiple-choice' && answer.answer === q.correctAnswer) {
        ls.score += q.points
      } else if (q.type === 'short-answer') {
        const answerLower = answer.answer.toLowerCase().trim()
        const keywords = [...(q.acceptableKeywords ?? []), ...q.correctAnswer.split(' ')].map((k) =>
          k.toLowerCase(),
        )
        const uniqueKeywords = [...new Set(keywords)]
        const matchCount = uniqueKeywords.filter((kw) => answerLower.includes(kw)).length
        const matchRatio = matchCount / Math.max(uniqueKeywords.length, 1)
        if (matchRatio >= 0.5) ls.score += q.points
        else if (matchRatio >= 0.25) ls.score += Math.ceil(q.points / 2)
      }
    }
  }

  let ceiling = 1
  for (const [level, { score, max }] of levelScores) {
    if (max > 0 && score / max > 0.5) {
      ceiling = Math.max(ceiling, level)
    }
  }

  return ceiling
}

/**
 * Identify strengths and areas for development based on scores.
 */
function analysePerformance(
  comprehension: { percentage: number },
  decoding: { percentage: number },
  fluency: { wordsPerMinute: number },
  ceilingLevel: number,
): { strengths: string[]; areasForDevelopment: string[] } {
  const strengths: string[] = []
  const areas: string[] = []

  // Comprehension analysis
  if (comprehension.percentage >= 80) {
    strengths.push(
      'Strong reading comprehension - excellent understanding of both literal and inferential questions',
    )
  } else if (comprehension.percentage >= 60) {
    strengths.push('Good literal comprehension - able to retrieve key information from texts')
    if (comprehension.percentage < 70) {
      areas.push(
        'Develop inferential and evaluative reading skills - practise reading between the lines',
      )
    }
  } else {
    areas.push(
      'Reading comprehension needs focused support - practise answering questions about texts at an appropriate level',
    )
  }

  // Decoding analysis. Plain language only - no clinical terminology
  // ('systematic phonics intervention' etc.), because this is an indicative
  // screener and clinical recommendations require a validated instrument.
  if (decoding.percentage >= 85) {
    strengths.push(
      'Excellent decoding skills - confident word recognition across regular and irregular words',
    )
  } else if (decoding.percentage >= 65) {
    strengths.push('Solid phonics foundation with good word recognition')
    areas.push(
      'Continue building vocabulary - focus on multi-syllable words and unfamiliar word patterns',
    )
  } else {
    areas.push(
      'Word reading looks like an area to work on - regular practice reading aloud with an adult would help, and a teacher or SENCo can advise on next steps',
    )
  }

  // Self-timed reading rate. Framed as a fact about the attempt - the rate
  // depends on when the child pressed "finished", so it never drives an age.
  if (fluency.wordsPerMinute >= 150) {
    strengths.push('A good self-timed reading pace across the passages')
  } else if (fluency.wordsPerMinute > 0 && fluency.wordsPerMinute < 100) {
    areas.push(
      'Build reading stamina through regular practice - aim for 15-20 minutes of daily reading',
    )
  }

  // Ceiling level observations
  if (ceilingLevel >= 8) {
    strengths.push('Able to access and understand challenging, sophisticated texts')
  } else if (ceilingLevel >= 5) {
    strengths.push('Comfortable reading texts at Key Stage 3 level')
  }

  return {
    strengths:
      strengths.length > 0
        ? strengths
        : ['Completing the assessment demonstrates commitment to improving reading skills'],
    areasForDevelopment:
      areas.length > 0
        ? areas
        : ['Continue reading widely across fiction and non-fiction to maintain strong skills'],
  }
}

// ─── Main Scoring Function ───────────────────────────────────────────────────

/**
 * Calculate indicative Reading Age and Decoding Age from assessment answers.
 *
 * - Comprehension is scored against hand-authored age tables (NFER/YARC style,
 *   NOT standardised norms)
 * - Decoding is scored on word recognition accuracy (Salford style)
 * - Reading Age is a weighted composite of the two genuinely-scored
 *   dimensions only. The self-timed reading rate is reported as a fact but
 *   never feeds an age: it measures button-pressing speed as much as reading.
 */
export function calculateReadingAge(input: AssessmentInput): ReadingAssessmentResult {
  // Build passage-level map from question IDs
  const passageLevels = new Map<string, number>()
  // We infer passage levels from question IDs: "p1q1" → passage "p1" level 1, etc.
  for (const q of input.questions) {
    const passageId = q.id.replace(/q\d+$/, '')
    const levelMatch = passageId.match(/p(\d+)/)
    if (levelMatch) {
      passageLevels.set(passageId, parseInt(levelMatch[1], 10))
    }
  }

  // When ceiling was reached, only score questions from passages that were
  // actually attempted - don't penalise for unattempted passages
  const answeredQuestionIds = new Set(input.comprehensionAnswers.map((a) => a.questionId))
  const attemptedPassageIds = new Set<string>()
  for (const a of input.comprehensionAnswers) {
    const passageId = a.questionId.replace(/q\d+$/, '')
    attemptedPassageIds.add(passageId)
  }

  const scorableQuestions = input.ceilingReached
    ? input.questions.filter((q) => {
        const passageId = q.id.replace(/q\d+$/, '')
        return attemptedPassageIds.has(passageId)
      })
    : input.questions

  // Score each dimension
  const comprehensionScores = scoreComprehension(input.comprehensionAnswers, scorableQuestions)
  const decodingScores = scoreDecoding(input.decodingAnswers)
  const fluencyScores = scoreFluency(input.fluencyTimings)

  // Look up ages from the approximate tables
  const comprehensionAge = lookupAge(COMPREHENSION_NORMS, comprehensionScores.percentage)
  const decodingAge = lookupAge(DECODING_NORMS, decodingScores.percentage)

  // Composite reading age from the two answer-scored dimensions only
  // (comprehension 2/3, decoding 1/3 - preserving the old 50:25 ratio).
  const compMonths = comprehensionAge.years * 12 + comprehensionAge.months
  const decMonths = decodingAge.years * 12 + decodingAge.months

  const compositeMonths = Math.round((compMonths * 2) / 3 + decMonths / 3)
  const readingAge: AgeScore = {
    years: Math.floor(compositeMonths / 12),
    months: compositeMonths % 12,
  }

  const ceilingLevel = findCeilingLevel(
    input.comprehensionAnswers,
    scorableQuestions,
    passageLevels,
  )

  const { strengths, areasForDevelopment } = analysePerformance(
    comprehensionScores,
    decodingScores,
    fluencyScores,
    ceilingLevel,
  )

  return {
    readingAge,
    decodingAge,
    rawScores: {
      comprehension: comprehensionScores,
      decoding: decodingScores,
      fluency: fluencyScores,
    },
    ceilingLevel,
    ceilingReached: input.ceilingReached ?? false,
    passagesAttempted: input.passagesAttempted ?? attemptedPassageIds.size,
    strengths,
    areasForDevelopment,
  }
}

// ─── Utility: Format age score to string ─────────────────────────────────────

export function formatAgeScore(age: AgeScore): string {
  const yearStr = age.years === 1 ? '1 year' : `${age.years} years`
  const monthStr = age.months === 1 ? '1 month' : `${age.months} months`
  if (age.months === 0) return yearStr
  return `${yearStr} ${monthStr}`
}

/**
 * Compare reading age to chronological age.
 * Returns 'above', 'at', or 'below' expected level.
 */
export function compareToChronologicalAge(
  readingAge: AgeScore,
  chronologicalAgeYears: number,
  chronologicalAgeMonths: number = 0,
): 'above' | 'at' | 'below' {
  const readingMonths = readingAge.years * 12 + readingAge.months
  const chronMonths = chronologicalAgeYears * 12 + chronologicalAgeMonths

  const diff = readingMonths - chronMonths

  if (diff >= 6) return 'above'
  if (diff <= -6) return 'below'
  return 'at'
}
