'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Filter,
  Shuffle,
  Clock,
  ClockFading,
  Eye,
  ChevronRight,
  Star,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Save,
  Loader2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoardStore } from '@/store/board-store'
import { matchesPracticeBoard } from '@/lib/board-filter'
import { practiceQuestions, type PracticeQuestion } from '@/data/practice-data'
import { formatTime } from '@/lib/utils'

// ─── Constants ──────────────────────────────────────────────────────────────

const DIFFICULTIES = ['All', 'Foundation', 'Higher'] as const
const GRADE_TABS = ['Grade 4-5', 'Grade 6-7', 'Grade 8-9'] as const

// Derive unique question types from the data
function getUniqueQuestionTypes(): string[] {
  const types = new Set(practiceQuestions.map((q) => q.questionType || q.type || 'Other').filter(Boolean))
  return ['All', ...Array.from(types).sort()]
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function PracticePage() {
  // Filters
  const { selectedBoard } = useBoardStore()
  const [questionType, setQuestionType] = useState<string>('All')
  const [difficulty, setDifficulty] = useState<string>('All')

  // Question state
  const [currentQuestion, setCurrentQuestion] = useState<PracticeQuestion | null>(null)
  const [answer, setAnswer] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [activeGradeTab, setActiveGradeTab] = useState<string>('Grade 6-7')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  // Timer
  const [timedMode, setTimedMode] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Saving
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  const { user } = useAuthStore()
  const questionTypes = getUniqueQuestionTypes()

  // ── Filtered questions ─────────────────────────────────────────────────

  const filtered = practiceQuestions.filter((q) => {
    if (!matchesPracticeBoard(q, selectedBoard)) return false
    if (questionType !== 'All' && (q.questionType || q.type) !== questionType) return false
    if (difficulty !== 'All' && (q.difficulty || q.tier) !== difficulty) return false
    return true
  })

  // ── Pick random question ───────────────────────────────────────────────

  const pickRandom = useCallback(() => {
    if (filtered.length === 0) {
      setCurrentQuestion(null)
      return
    }
    const idx = Math.floor(Math.random() * filtered.length)
    setCurrentQuestion(filtered[idx])
    setAnswer('')
    setShowModel(false)
    setRating(0)
    setHoverRating(0)
    setElapsed(0)
    setSaved(false)
    if (timerRef.current) clearInterval(timerRef.current)
    if (timedMode) {
      timerRef.current = setInterval(() => setElapsed((p) => p + 1), 1000)
    }
  }, [filtered, timedMode])

  // Pick initial question
  useEffect(() => {
    if (!currentQuestion) pickRandom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle timer toggle
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (timedMode && currentQuestion && !showModel) {
      timerRef.current = setInterval(() => setElapsed((p) => p + 1), 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [timedMode, currentQuestion, showModel])

  // Stop timer when model answer shown
  useEffect(() => {
    if (showModel && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [showModel])

  // ── Save session ───────────────────────────────────────────────────────

  async function saveSession() {
    if (!user || !currentQuestion || saving) return
    setSaving(true)
    setSaveError(null)
    try {
      const supabase = createClient()
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        question_id: currentQuestion.id,
        board: currentQuestion.board,
        question_type: currentQuestion.questionType,
        difficulty: currentQuestion.difficulty,
        answer,
        self_rating: rating,
        time_seconds: elapsed,
        timed_mode: timedMode,
      })
      setSaved(true)
    } catch {
      setSaveError('Failed to save your session. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  // ── Next question ──────────────────────────────────────────────────────

  function handleNext() {
    pickRandom()
  }

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <main id="main-content" className="min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-brand-border bg-brand-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold text-brand-text sm:text-4xl">
            Practice Mode
          </h1>
          <p className="mt-2 text-brand-muted">
            Sharpen your skills with exam-style questions and model answers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ── Filter Bar ──────────────────────────────────────────────── */}
        <div className="card mb-8 p-4 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-brand-muted">
            <Filter className="h-4 w-4" />
            Filters
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Question Type */}
            <div>
              <label htmlFor="question-type-filter" className="label">Question Type</label>
              <select
                id="question-type-filter"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="input-field"
              >
                {questionTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {/* Difficulty */}
            <div>
              <label htmlFor="difficulty-filter" className="label">Difficulty</label>
              <select
                id="difficulty-filter"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="input-field"
              >
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-brand-muted">
              {filtered.length} question{filtered.length !== 1 ? 's' : ''} available
            </span>
            <div className="flex items-center gap-3">
              {/* Timer toggle */}
              <button
                onClick={() => setTimedMode(!timedMode)}
                className={`btn-ghost gap-2 text-sm ${
                  timedMode ? 'text-brand-accent' : ''
                }`}
              >
                {timedMode ? (
                  <Clock className="h-4 w-4" />
                ) : (
                  <ClockFading className="h-4 w-4" />
                )}
                {timedMode ? 'Timed' : 'Untimed'}
              </button>
              {/* New random question */}
              <button onClick={handleNext} className="btn-ghost gap-2 text-sm">
                <Shuffle className="h-4 w-4" />
                Random Question
              </button>
            </div>
          </div>
        </div>

        {/* ── Question Area ───────────────────────────────────────────── */}
        {currentQuestion ? (
          <div className="space-y-6">
            {/* Timer display */}
            {timedMode && (
              <div className="flex items-center justify-center">
                <div className="card inline-flex items-center gap-2 px-5 py-2.5 text-lg font-mono font-semibold text-brand-accent">
                  <Clock className="h-5 w-5" />
                  {formatTime(elapsed)}
                </div>
              </div>
            )}

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-medium text-brand-accent">
                {currentQuestion.board}
              </span>
              <span className="rounded-full bg-brand-blue/15 px-3 py-1 text-xs font-medium text-brand-blue">
                Paper {currentQuestion.paper}
              </span>
              <span className="rounded-full bg-brand-warning/15 px-3 py-1 text-xs font-medium text-brand-warning">
                {currentQuestion.questionType}
              </span>
              <span className="rounded-full bg-brand-border px-3 py-1 text-xs font-medium text-brand-muted">
                {currentQuestion.difficulty}
              </span>
            </div>

            {/* Extract */}
            {currentQuestion.extract && (
              <div className="card overflow-hidden">
                <div className="flex items-center gap-2 border-b border-brand-border px-5 py-3">
                  <BookOpen className="h-4 w-4 text-brand-accent" />
                  <span className="text-sm font-medium text-brand-text">
                    Source Text
                  </span>
                </div>
                <div className="px-5 py-5">
                  <div className="border-l-4 border-brand-accent/40 pl-5 text-[0.95rem] italic leading-relaxed text-brand-text/80">
                    {currentQuestion.extract.split('\n').map((para, i) => (
                      <p key={i} className={i > 0 ? 'mt-4' : ''}>
                        {para}
                      </p>
                    ))}
                  </div>
                  {currentQuestion.extractSource && (
                    <p className="mt-4 text-sm font-medium text-brand-muted">
                      — {currentQuestion.extractSource}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Question */}
            <div className="card p-5">
              <h2 className="text-lg font-semibold text-brand-text">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer textarea */}
            <div>
              <label className="label">Your Answer</label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                rows={10}
                className="input-field resize-y text-base leading-relaxed"
              />
            </div>

            {/* Show Model Answer button */}
            {!showModel && (
              <button
                onClick={() => setShowModel(true)}
                className="btn-primary gap-2"
              >
                <Eye className="h-4 w-4" />
                Show Model Answer
              </button>
            )}

            {/* ── Model Answers ────────────────────────────────────────── */}
            {showModel && (
              <div className="space-y-6">
                {/* Grade tabs */}
                <div className="card overflow-hidden">
                  <div className="flex border-b border-brand-border">
                    {GRADE_TABS.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveGradeTab(tab)}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                          activeGradeTab === tab
                            ? 'border-b-2 border-brand-accent bg-brand-accent/10 text-brand-accent'
                            : 'text-brand-muted hover:bg-brand-card hover:text-brand-text'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="p-5">
                    <div className="whitespace-pre-line text-[0.95rem] leading-relaxed text-brand-muted">
                      {currentQuestion.modelAnswers[activeGradeTab] ||
                        'No model answer available for this grade.'}
                    </div>
                  </div>
                </div>

                {/* Mark Scheme */}
                {currentQuestion.markScheme &&
                  currentQuestion.markScheme.length > 0 && (
                    <div className="card p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-text">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                        Mark Scheme Points
                      </div>
                      <ul className="space-y-2">
                        {currentQuestion.markScheme.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-brand-muted"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-xs font-semibold text-brand-accent">
                              {i + 1}
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Examiner Tips */}
                {currentQuestion.examinerTips &&
                  currentQuestion.examinerTips.length > 0 && (
                    <div className="card border-brand-warning/30 p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-text">
                        <Lightbulb className="h-4 w-4 text-brand-warning" />
                        Examiner Tips
                      </div>
                      <ul className="space-y-2">
                        {currentQuestion.examinerTips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-brand-muted"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-warning" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Self-rating */}
                <div className="card p-5">
                  <p className="mb-3 text-sm font-semibold text-brand-text">
                    How did you do? Rate yourself:
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        onClick={() => setRating(s)}
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Rate ${s} out of 5`}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            s <= (hoverRating || rating)
                              ? 'fill-brand-warning text-brand-warning'
                              : 'text-brand-border'
                          }`}
                        />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="ml-3 text-sm text-brand-muted">
                        {rating}/5
                      </span>
                    )}
                  </div>
                </div>

                {/* Save & Next */}
                <div className="flex flex-wrap items-center gap-3">
                  {user && (
                    <button
                      onClick={saveSession}
                      disabled={saving || saved}
                      className="btn-secondary gap-2"
                    >
                      {saving ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : saved ? (
                        <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                      {saved ? 'Saved' : saving ? 'Saving...' : 'Save Session'}
                    </button>
                  )}
                  <button onClick={handleNext} className="btn-primary gap-2">
                    Next Question
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                {saveError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm mt-2">
                    {saveError}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* No questions match */
          <div className="card flex flex-col items-center justify-center p-12 text-center">
            <BookOpen className="mb-4 h-12 w-12 text-brand-border" />
            <h2 className="text-lg font-semibold text-brand-text">
              No questions found
            </h2>
            <p className="mt-1 text-sm text-brand-muted">
              Try adjusting your filters to see available questions.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
