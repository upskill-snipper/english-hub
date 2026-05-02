// ─── Personalised Recommendation Engine ─────────────────────────────────────
// Generates ranked, actionable study recommendations based on quiz scores,
// studied poems, game data, study plans and reading assessment history.
// All data is read from localStorage by the calling component.
// ──────────────────────────────────────────────────────────────────────────────

import type { ExamBoard } from '@/lib/board/board-config'
import type { Topic } from '@/app/revision/quiz/quiz-data'
import { TOPIC_META } from '@/app/revision/quiz/quiz-data'

// ─── Public Types ────────────────────────────────────────────────────────────

export type RecommendationType = 'weakness' | 'next-step' | 'streak' | 'new-content'

export type Recommendation = {
  id: string
  title: string
  description: string
  href: string
  reason: string // e.g. "You scored 40% on poetry questions"
  priority: 'high' | 'medium' | 'low'
  type: RecommendationType
}

// ─── Progress Shape (read from localStorage) ────────────────────────────────

export interface QuizResult {
  date: string
  mode: string
  score: number
  total: number
  percentage: number
  grade: string
  topics: Topic[]
  topicBreakdown: Record<string, { correct: number; total: number }>
}

export interface StudyPlanData {
  answers: {
    weeks: string
    grade: string
    weakArea: string
    hoursPerWeek: string
  }
  board: ExamBoard | null
  createdAt: string
  weeks: {
    week: number
    focus: string
    tasks: {
      title: string
      description: string
      href: string
    }[]
  }[]
}

export interface UserProgress {
  quizHistory: QuizResult[]
  studiedPoems: string[]
  gameScores: Record<string, unknown>
  studyPlan: StudyPlanData | null
  hasCompletedReadingAssessment: boolean
}

// ─── Constants ──────────────────────────────────────────────────────────────

const MAX_RECOMMENDATIONS = 5

const TOPIC_REVISION_LINKS: Record<Topic, { href: string; title: string }> = {
  poetry: { href: '/revision/poetry', title: 'Poetry Revision' },
  'set-texts': { href: '/revision/texts', title: 'Set Texts Revision' },
  'language-techniques': { href: '/revision/language', title: 'Language Techniques' },
  'exam-technique': { href: '/revision/exam-technique', title: 'Exam Technique' },
  context: { href: '/revision/exam-technique', title: 'Context Revision' },
}

const BOARD_POETRY_LINKS: Partial<Record<ExamBoard, { href: string; title: string }>> = {
  aqa: { href: '/revision/poetry/power-and-conflict', title: 'AQA Power and Conflict' },
  edexcel: { href: '/revision/poetry/edexcel', title: 'Edexcel Poetry Anthology' },
  eduqas: { href: '/revision/poetry/eduqas', title: 'Eduqas Poetry Anthology' },
  ocr: { href: '/revision/poetry/ocr', title: 'OCR Poetry Anthology' },
}

const PRIORITY_ORDER: Record<Recommendation['priority'], number> = {
  high: 0,
  medium: 1,
  low: 2,
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function topicScores(history: QuizResult[]): Record<string, { correct: number; total: number }> {
  const agg: Record<string, { correct: number; total: number }> = {}

  for (const result of history) {
    if (!result.topicBreakdown) continue
    for (const [topic, data] of Object.entries(result.topicBreakdown)) {
      if (!agg[topic]) agg[topic] = { correct: 0, total: 0 }
      agg[topic].correct += data.correct
      agg[topic].total += data.total
    }
  }

  return agg
}

function topicPercentage(data: { correct: number; total: number }): number {
  if (data.total === 0) return 100
  return Math.round((data.correct / data.total) * 100)
}

function makeId(...parts: string[]): string {
  return parts
    .join('-')
    .replace(/[^a-z0-9-]/gi, '-')
    .toLowerCase()
}

// ─── Main Generator ─────────────────────────────────────────────────────────

export function generateRecommendations(
  progress: UserProgress,
  board: ExamBoard | null,
): Recommendation[] {
  const recs: Recommendation[] = []

  // ── 1. Weak topics from quiz scores (<60%) → HIGH ─────────────────────
  if (progress.quizHistory.length > 0) {
    const scores = topicScores(progress.quizHistory)

    for (const [topic, data] of Object.entries(scores)) {
      const pct = topicPercentage(data)
      if (pct < 60) {
        const topicKey = topic as Topic
        const meta = TOPIC_META[topicKey]
        const link =
          topicKey === 'poetry' && board
            ? (BOARD_POETRY_LINKS[board] ?? TOPIC_REVISION_LINKS[topicKey])
            : TOPIC_REVISION_LINKS[topicKey]

        if (meta && link) {
          recs.push({
            id: makeId('weakness', topic),
            title: `Revise ${meta.label}`,
            description: `Your ${meta.label.toLowerCase()} score is below the pass threshold. Focused revision here will boost your grade.`,
            href: link.href,
            reason: `You scored ${pct}% on ${meta.label.toLowerCase()} questions`,
            priority: 'high',
            type: 'weakness',
          })
        }
      }
    }
  }

  // ── 2. Study plan: next uncompleted task → HIGH ───────────────────────
  if (progress.studyPlan?.weeks) {
    const allTasks = progress.studyPlan.weeks.flatMap((w) =>
      w.tasks.map((t) => ({ ...t, week: w.week })),
    )
    // Recommend the first task (study plans don't track completion per-task
    // in localStorage, so we recommend the next week's first task as a nudge)
    const nextTask = allTasks[0]
    if (nextTask) {
      recs.push({
        id: makeId('study-plan', 'next-task'),
        title: `Continue your study plan`,
        description: `Week ${nextTask.week}: ${nextTask.title} — ${nextTask.description}`,
        href: nextTask.href,
        reason: 'Your personalised study plan has tasks waiting',
        priority: 'high',
        type: 'next-step',
      })
    }
  }

  // ── 3. Unstudied poems on the user's board → MEDIUM ───────────────────
  if (board && BOARD_POETRY_LINKS[board]) {
    const studiedCount = progress.studiedPoems.length
    // AQA has ~30 poems across two clusters; other boards have ~15
    const expectedMin = board === 'aqa' ? 30 : 15

    if (studiedCount < expectedMin) {
      const boardPoetry = BOARD_POETRY_LINKS[board]!
      const remaining = expectedMin - studiedCount
      recs.push({
        id: makeId('new-content', 'poems', board),
        title: `Study more ${boardPoetry.title} poems`,
        description: `You have studied ${studiedCount} poem${studiedCount !== 1 ? 's' : ''} so far. There are roughly ${remaining} more to cover on your board.`,
        href: boardPoetry.href,
        reason: `${remaining} poems on your board haven't been studied yet`,
        priority: 'medium',
        type: 'new-content',
      })
    }
  }

  // ── 4. Studied 3+ poems but no comparison practice → MEDIUM ───────────
  if (progress.studiedPoems.length >= 3) {
    // Check quiz history for comparison-related topics
    const hasTriedComparison = progress.quizHistory.some(
      (r) => r.mode?.toLowerCase().includes('comparison') || r.topics?.includes('poetry'),
    )

    // Even if they've done poetry quizzes, recommend comparison practice
    // as a distinct skill. We check if they've specifically visited comparison.
    const scores = topicScores(progress.quizHistory)
    const poetryScore = scores['poetry']
    const hasStrongPoetryBase = poetryScore && topicPercentage(poetryScore) >= 50

    if (hasStrongPoetryBase || !hasTriedComparison) {
      recs.push({
        id: makeId('next-step', 'comparison'),
        title: 'Try poetry comparison practice',
        description:
          'You have studied enough poems to start practising comparisons — a key exam skill worth up to 30 marks.',
        href: '/revision/exam-technique/essay-structure',
        reason: `You have studied ${progress.studiedPoems.length} poems — time to compare them`,
        priority: 'medium',
        type: 'next-step',
      })
    }
  }

  // ── 5. Reading assessment not done → LOW ──────────────────────────────
  if (!progress.hasCompletedReadingAssessment) {
    recs.push({
      id: makeId('new-content', 'reading-assessment'),
      title: 'Take the Reading Assessment',
      description:
        'Discover your reading age and get personalised recommendations for comprehension and fluency.',
      href: '/assessment/reading',
      reason: "You haven't completed the reading assessment yet",
      priority: 'low',
      type: 'new-content',
    })
  }

  // ── Sort by priority, de-duplicate, cap at MAX_RECOMMENDATIONS ────────
  const seen = new Set<string>()
  const unique = recs.filter((r) => {
    if (seen.has(r.id)) return false
    seen.add(r.id)
    return true
  })

  unique.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority])

  return unique.slice(0, MAX_RECOMMENDATIONS)
}
