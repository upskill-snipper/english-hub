'use client'

import { useState, useEffect, useMemo } from 'react'
import { Lightbulb } from 'lucide-react'

import {
  generateRecommendations,
  type Recommendation,
  type UserProgress,
  type QuizResult,
  type StudyPlanData,
} from '@/lib/recommendations/engine'
import { useBoard } from '@/hooks/useBoard'
import { RecommendationCard, getDismissedIds } from './RecommendationCard'

// ─── LocalStorage Keys ──────────────────────────────────────────────────────

const QUIZ_HISTORY_KEY = 'english-hub-quiz-history'
const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const GAME_SCORES_KEY = 'english-hub-game-scores'
const STUDY_PLAN_KEY = 'english-hub-study-plan'
const READING_ASSESSMENT_KEY = 'reading-assessment-result'

// ─── Helpers ────────────────────────────────────────────────────────────────

function readJson<T>(key: string): T | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function readSessionJson<T>(key: string): T | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function loadProgress(): UserProgress {
  const quizHistory = readJson<QuizResult[]>(QUIZ_HISTORY_KEY) ?? []
  const studiedPoems = readJson<string[]>(STUDIED_POEMS_KEY) ?? []
  const gameScores = readJson<Record<string, unknown>>(GAME_SCORES_KEY) ?? {}
  const studyPlan = readJson<StudyPlanData>(STUDY_PLAN_KEY)

  // Reading assessment stores result in sessionStorage during the test flow,
  // but we also check localStorage for any persisted indicator
  const hasCompletedReadingAssessment =
    readSessionJson<unknown>(READING_ASSESSMENT_KEY) !== null ||
    readJson<unknown>('english-hub-reading-assessment-completed') !== null

  return {
    quizHistory,
    studiedPoems,
    gameScores,
    studyPlan,
    hasCompletedReadingAssessment,
  }
}

// ─── Component ──────────────────────────────────────────────────────────────

interface RecommendationSectionProps {
  /** Optional heading override */
  title?: string
  /** Limit the number of visible cards (default: 5) */
  maxCards?: number
  /** Additional className for the wrapper */
  className?: string
}

export function RecommendationSection({
  title = 'Recommended for you',
  maxCards = 5,
  className = '',
}: RecommendationSectionProps) {
  const { board, isHydrated } = useBoard()
  const [mounted, setMounted] = useState(false)
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
    setDismissedIds(getDismissedIds())
  }, [])

  const recommendations = useMemo<Recommendation[]>(() => {
    if (!mounted || !isHydrated) return []
    const progress = loadProgress()
    return generateRecommendations(progress, board)
  }, [mounted, isHydrated, board])

  const visibleRecs = useMemo(
    () => recommendations.filter((r) => !dismissedIds.has(r.id)).slice(0, maxCards),
    [recommendations, dismissedIds, maxCards],
  )

  const handleDismiss = (id: string) => {
    setDismissedIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  // Don't render anything before hydration to avoid layout shift
  if (!mounted || !isHydrated) {
    return null
  }

  // Don't render section if there are no recommendations
  if (visibleRecs.length === 0) {
    return null
  }

  return (
    <section className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Lightbulb className="size-4 text-amber-500" />
        <h2 className="text-heading-sm font-heading text-foreground">{title}</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {visibleRecs.map((rec) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            onDismiss={handleDismiss}
          />
        ))}
      </div>
    </section>
  )
}
