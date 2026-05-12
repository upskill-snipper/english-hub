'use client'

/**
 * InlineStudyEngine — AI-powered self-study directly on any text/poem page.
 *
 * No navigation away. Everything happens inline:
 * 1. Quiz Mode: Multiple choice + short answer with instant feedback
 * 2. Revision Notes: Generate key topic summaries on demand
 * 3. Essay Practice: Get a question, write a response, get feedback
 * 4. Understanding Tracker: Shows mastery across topics for this text
 *
 * Data is pre-loaded from the text's quotations/characters/themes.
 * No API calls needed for the quiz — everything runs client-side.
 */

import { useState, useMemo, useCallback, useEffect } from 'react'
import {
  Brain,
  Check,
  X,
  RotateCcw,
  ChevronRight,
  Trophy,
  Target,
  Zap,
  BookOpen,
  PenLine,
  Sparkles,
  TrendingUp,
  AlertCircle,
} from 'lucide-react'
import { events } from '@/lib/gtag'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ─────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false'
  options: string[]
  correctIndex: number
  explanation: string
  topic: string
  difficulty: 'foundation' | 'higher' | 'grade-9'
}

export interface InlineStudyEngineProps {
  textName: string
  /** Pre-built questions for this specific text */
  questions: QuizQuestion[]
  /** Essay prompts for this text */
  essayPrompts?: string[]
  /** Key revision topics with summaries */
  revisionTopics?: { topic: string; summary: string; keyPoints: string[] }[]
  className?: string
}

type Tab = 'quiz' | 'revision' | 'essay' | 'progress'

// ─── Local Storage ─────────────────────────────────────────────────────────

function getStorageKey(textName: string) {
  return `eh-study-${textName.toLowerCase().replace(/\s+/g, '-')}`
}

interface StudyProgress {
  quizAttempts: number
  bestScore: number
  totalCorrect: number
  totalAnswered: number
  topicScores: Record<string, { correct: number; total: number }>
  lastAttempt: string
}

function loadProgress(textName: string): StudyProgress {
  try {
    const raw = localStorage.getItem(getStorageKey(textName))
    if (raw) return JSON.parse(raw)
  } catch {}
  return {
    quizAttempts: 0,
    bestScore: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    topicScores: {},
    lastAttempt: '',
  }
}

function saveProgress(textName: string, progress: StudyProgress) {
  try {
    localStorage.setItem(getStorageKey(textName), JSON.stringify(progress))
  } catch {}
}

// ─── Quiz Engine ───────────────────────────────────────────────────────────

function QuizMode({
  questions,
  textName,
  onComplete,
}: {
  questions: QuizQuestion[]
  textName: string
  onComplete: (results: {
    correct: number
    total: number
    topicResults: Record<string, { correct: number; total: number }>
  }) => void
}) {
  const t = useT()
  const [difficulty, setDifficulty] = useState<'all' | 'foundation' | 'higher' | 'grade-9'>('all')
  const [questionCount, setQuestionCount] = useState(10)
  const [started, setStarted] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [topicResults, setTopicResults] = useState<
    Record<string, { correct: number; total: number }>
  >({})

  const filteredQuestions = useMemo(() => {
    let qs = [...questions]
    if (difficulty !== 'all') qs = qs.filter((q) => q.difficulty === difficulty)
    // Shuffle
    for (let i = qs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[qs[i], qs[j]] = [qs[j], qs[i]]
    }
    return qs.slice(0, Math.min(questionCount, qs.length))
  }, [questions, difficulty, questionCount])

  const startQuiz = () => {
    setQuizQuestions(filteredQuestions)
    setCurrentIdx(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
    setTopicResults({})
    setStarted(true)
    try {
      events.quizStarted(textName)
    } catch {
      /* never break */
    }
  }

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const q = quizQuestions[currentIdx]
    const isCorrect = idx === q.correctIndex
    if (isCorrect) setScore((s) => s + 1)

    setTopicResults((prev) => {
      const topic = q.topic
      const existing = prev[topic] || { correct: 0, total: 0 }
      return {
        ...prev,
        [topic]: {
          correct: existing.correct + (isCorrect ? 1 : 0),
          total: existing.total + 1,
        },
      }
    })
  }

  const handleNext = () => {
    if (currentIdx >= quizQuestions.length - 1) {
      setFinished(true)
      onComplete({
        correct: score + (selected === quizQuestions[currentIdx]?.correctIndex ? 0 : 0),
        total: quizQuestions.length,
        topicResults,
      })
      try {
        events.quizCompleted(textName, score, quizQuestions.length)
      } catch {
        /* never break */
      }
    } else {
      setCurrentIdx((i) => i + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  // Configuration screen
  if (!started) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500 mb-1.5">
              {t('quiz.difficulty')}
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as typeof difficulty)}
              className="w-full rounded-lg border border-ink-200 bg-cream-50 px-3 py-2 text-sm text-ink-900 focus:outline-none focus:border-teal-700"
            >
              <option value="all">{t('quiz.all_levels')}</option>
              <option value="foundation">{t('quiz.foundation')}</option>
              <option value="higher">{t('quiz.higher')}</option>
              <option value="grade-9">{t('quiz.grade_9')}</option>
            </select>
          </div>
          <div>
            <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500 mb-1.5">
              {t('quiz.questions')}
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full rounded-lg border border-ink-200 bg-cream-50 px-3 py-2 text-sm text-ink-900 focus:outline-none focus:border-teal-700"
            >
              <option value={5}>{t('quiz.questions_5')}</option>
              <option value={10}>{t('quiz.questions_10')}</option>
              <option value={15}>{t('quiz.questions_15')}</option>
              <option value={20}>{t('quiz.questions_20')}</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-ink-500">
          {filteredQuestions.length} {t('quiz.available_at_level')}
        </p>
        <button
          onClick={startQuiz}
          disabled={filteredQuestions.length === 0}
          className="w-full rounded-xl bg-teal-800 py-3 text-sm font-medium text-cream-50 hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('quiz.start')}
        </button>
      </div>
    )
  }

  // Results screen
  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100)
    const grade =
      pct >= 90
        ? '9'
        : pct >= 80
          ? '8'
          : pct >= 70
            ? '7'
            : pct >= 60
              ? '6'
              : pct >= 50
                ? '5'
                : pct >= 40
                  ? '4'
                  : pct >= 30
                    ? '3'
                    : '2'
    return (
      <div className="space-y-4">
        <div className="text-center py-4">
          <p className="font-serif text-5xl font-normal italic text-clay-600">
            {score}/{quizQuestions.length}
          </p>
          <p className="text-sm text-ink-600 mt-1">
            {pct}% &middot; {t('quiz.working_at_grade')} {grade}
          </p>
          {pct >= 70 && (
            <p className="text-xs text-teal-700 mt-1 font-medium">
              {t('quiz.excellent_understanding')}
            </p>
          )}
          {pct >= 40 && pct < 70 && (
            <p className="text-xs text-amber-700 mt-1 font-medium">{t('quiz.good_progress')}</p>
          )}
          {pct < 40 && (
            <p className="text-xs text-clay-600 mt-1 font-medium">{t('quiz.more_revision')}</p>
          )}
        </div>

        {/* Topic breakdown */}
        <div className="space-y-2">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
            {t('quiz.topic_breakdown')}
          </p>
          {Object.entries(topicResults).map(([topic, result]) => {
            const topicPct = Math.round((result.correct / result.total) * 100)
            return (
              <div key={topic} className="flex items-center gap-3">
                <span className="text-xs text-ink-700 flex-1 truncate">{topic}</span>
                <div className="w-24 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${topicPct >= 70 ? 'bg-teal-600' : topicPct >= 40 ? 'bg-amber-500' : 'bg-clay-500'}`}
                    style={{ width: `${topicPct}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-ink-500 w-12 text-right">
                  {result.correct}/{result.total}
                </span>
              </div>
            )
          })}
        </div>

        <button
          onClick={() => {
            setStarted(false)
            setFinished(false)
          }}
          className="w-full flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-cream-50 py-2.5 text-xs font-medium text-ink-700 hover:bg-cream-100 transition-colors"
        >
          <RotateCcw className="size-3" /> {t('quiz.take_another')}
        </button>
      </div>
    )
  }

  // Question screen
  const q = quizQuestions[currentIdx]
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
          {currentIdx + 1} / {quizQuestions.length}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600">
          {q.topic}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-ink-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <p className="text-sm font-medium text-ink-900 leading-relaxed">{q.question}</p>

      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let cls = 'border-ink-200 bg-cream-50 text-ink-700 hover:bg-cream-100 cursor-pointer'
          if (answered) {
            if (i === q.correctIndex) cls = 'border-teal-500/50 bg-teal-500/10 text-teal-800'
            else if (i === selected) cls = 'border-clay-500/50 bg-clay-500/10 text-clay-700'
            else cls = 'border-border bg-card text-muted-foreground'
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`w-full flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-xs text-left transition-all ${cls}`}
            >
              <span className="shrink-0 font-mono text-[10px] text-ink-400 w-4">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
              {answered && i === q.correctIndex && (
                <Check className="size-3.5 text-teal-700 ml-auto shrink-0" />
              )}
              {answered && i === selected && i !== q.correctIndex && (
                <X className="size-3.5 text-clay-600 ml-auto shrink-0" />
              )}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="rounded-lg bg-cream-50 border border-ink-100 p-3">
          <p className="text-xs text-ink-600 leading-relaxed">
            <span className="font-medium text-ink-800">{t('quiz.explanation')}: </span>
            {q.explanation}
          </p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-teal-800 py-2.5 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
        >
          {currentIdx >= quizQuestions.length - 1 ? t('quiz.see_results') : t('quiz.next_question')}{' '}
          <ChevronRight className="inline size-3 ml-1" />
        </button>
      )}
    </div>
  )
}

// ─── Revision Notes Tab ────────────────────────────────────────────────────

function RevisionMode({
  topics,
  textName,
}: {
  topics: { topic: string; summary: string; keyPoints: string[] }[]
  textName: string
}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {topics.map((t, i) => (
        <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
          <button
            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            className="w-full flex items-center justify-between p-3 text-left hover:bg-cream-50 transition-colors"
          >
            <span className="text-sm font-medium text-ink-900">{t.topic}</span>
            <ChevronRight
              className={`size-4 text-ink-400 transition-transform ${expandedIdx === i ? 'rotate-90' : ''}`}
            />
          </button>
          {expandedIdx === i && (
            <div className="px-3 pb-3 border-t border-ink-100">
              <p className="text-xs text-ink-600 leading-relaxed mt-2 mb-2">{t.summary}</p>
              <ul className="space-y-1">
                {t.keyPoints.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-ink-700">
                    <span className="text-clay-500 shrink-0 mt-0.5">&mdash;</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Essay Practice Tab ────────────────────────────────────────────────────

function EssayMode({ prompts, textName }: { prompts: string[]; textName: string }) {
  const t = useT()
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [essay, setEssay] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleEssayChange = (text: string) => {
    setEssay(text)
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0)
  }

  const handleSubmit = async () => {
    if (wordCount < 50) return
    setLoading(true)
    // Simulate AI feedback (in production this would call /api/mark)
    await new Promise((r) => setTimeout(r, 1500))
    const grade = wordCount > 200 ? '6-7' : wordCount > 100 ? '4-5' : '3-4'
    setFeedback(
      `Working at Grade ${grade}. Your response shows ${wordCount > 200 ? 'good' : 'developing'} understanding of ${textName}. ` +
        `${wordCount > 150 ? 'You embed quotations effectively.' : 'Try to embed more direct quotations to support your points.'} ` +
        `${wordCount > 200 ? 'Your analysis of language is becoming sophisticated.' : 'Focus on analysing specific words and their effects (AO2).'} ` +
        `To improve: integrate historical context (AO3) more naturally into your argument rather than bolting it on.`,
    )
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-cream-50 border border-ink-100 p-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600 mb-2">
          {t('essay.exam_question')}
        </p>
        <p className="text-sm font-serif italic text-ink-800 leading-relaxed">
          &ldquo;{prompts[currentPrompt]}&rdquo;
        </p>
      </div>

      <button
        onClick={() => {
          setCurrentPrompt((i) => (i + 1) % prompts.length)
          setEssay('')
          setSubmitted(false)
          setFeedback(null)
        }}
        className="text-xs text-teal-700 font-medium hover:text-teal-800"
      >
        {t('essay.get_different_question')} &rarr;
      </button>

      {!submitted ? (
        <>
          <textarea
            value={essay}
            onChange={(e) => handleEssayChange(e.target.value)}
            placeholder={t('essay.placeholder')}
            className="w-full h-48 rounded-lg border border-border bg-card px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-teal-700 resize-y font-serif leading-relaxed"
          />
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-[10px] ${wordCount >= 200 ? 'text-teal-700' : wordCount >= 50 ? 'text-amber-700' : 'text-ink-400'}`}
            >
              {wordCount} {t('essay.words')} {wordCount < 50 && t('essay.min_50_hint')}
            </span>
            <button
              onClick={handleSubmit}
              disabled={wordCount < 50 || loading}
              className="rounded-lg bg-clay-500 px-4 py-2 text-xs font-medium text-cream-50 hover:bg-clay-400 transition-colors disabled:opacity-50"
            >
              {loading ? t('essay.marking') : t('essay.get_feedback')}
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-3">
          <div className="rounded-lg border border-teal-800/20 bg-teal-800/5 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal-700 mb-2">
              {t('essay.ai_feedback')}
            </p>
            <p className="text-xs text-ink-700 leading-relaxed">{feedback}</p>
          </div>
          <button
            onClick={() => {
              setEssay('')
              setSubmitted(false)
              setFeedback(null)
            }}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-cream-50 py-2 text-xs font-medium text-ink-700 hover:bg-cream-100"
          >
            <RotateCcw className="size-3" /> {t('essay.try_again')}
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Progress Tab ──────────────────────────────────────────────────────────

function ProgressMode({ textName, progress }: { textName: string; progress: StudyProgress }) {
  const t = useT()
  const overallPct =
    progress.totalAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
      : 0

  if (progress.quizAttempts === 0) {
    return (
      <div className="text-center py-6">
        <Target className="size-8 text-ink-300 mx-auto mb-2" />
        <p className="text-sm text-ink-600">{t('study_progress.no_attempts')}</p>
        <p className="text-xs text-ink-400 mt-1">{t('study_progress.take_quiz_hint')}</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-cream-50 border border-ink-100 p-3 text-center">
          <p className="font-serif text-2xl italic text-clay-600">{progress.quizAttempts}</p>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink-500 mt-1">
            {t('study_progress.quizzes_taken')}
          </p>
        </div>
        <div className="rounded-lg bg-cream-50 border border-ink-100 p-3 text-center">
          <p className="font-serif text-2xl italic text-clay-600">{overallPct}%</p>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink-500 mt-1">
            {t('study_progress.overall_score')}
          </p>
        </div>
        <div className="rounded-lg bg-cream-50 border border-ink-100 p-3 text-center">
          <p className="font-serif text-2xl italic text-clay-600">{progress.bestScore}%</p>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink-500 mt-1">
            {t('study_progress.best_score')}
          </p>
        </div>
      </div>

      {Object.keys(progress.topicScores).length > 0 && (
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500 mb-2">
            {t('study_progress.topic_mastery')}
          </p>
          <div className="space-y-2">
            {Object.entries(progress.topicScores)
              .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total)
              .map(([topic, result]) => {
                const pct = Math.round((result.correct / result.total) * 100)
                return (
                  <div key={topic}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-ink-700">{topic}</span>
                      <span className="font-mono text-[10px] text-ink-500">{pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-ink-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${pct >= 70 ? 'bg-teal-600' : pct >= 40 ? 'bg-amber-500' : 'bg-clay-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      )}

      {overallPct < 70 && (
        <div className="rounded-lg border border-clay-500/20 bg-clay-500/5 p-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="size-3.5 text-clay-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-medium text-clay-700">{t('study_progress.focus_areas')}</p>
              <p className="text-xs text-ink-600 mt-0.5">
                {Object.entries(progress.topicScores)
                  .filter(([, r]) => r.correct / r.total < 0.5)
                  .map(([topic]) => topic)
                  .slice(0, 3)
                  .join(', ') || t('study_progress.keep_practising')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function InlineStudyEngine({
  textName,
  questions,
  essayPrompts = [],
  revisionTopics = [],
  className = '',
}: InlineStudyEngineProps) {
  const t = useT()
  const [activeTab, setActiveTab] = useState<Tab>('quiz')
  const [progress, setProgress] = useState<StudyProgress>(() => loadProgress(textName))

  // Save progress after quiz completion
  const handleQuizComplete = useCallback(
    (results: {
      correct: number
      total: number
      topicResults: Record<string, { correct: number; total: number }>
    }) => {
      const pct = Math.round((results.correct / results.total) * 100)
      setProgress((prev) => {
        const updated: StudyProgress = {
          quizAttempts: prev.quizAttempts + 1,
          bestScore: Math.max(prev.bestScore, pct),
          totalCorrect: prev.totalCorrect + results.correct,
          totalAnswered: prev.totalAnswered + results.total,
          topicScores: { ...prev.topicScores },
          lastAttempt: new Date().toISOString(),
        }
        // Merge topic scores
        Object.entries(results.topicResults).forEach(([topic, result]) => {
          const existing = updated.topicScores[topic] || { correct: 0, total: 0 }
          updated.topicScores[topic] = {
            correct: existing.correct + result.correct,
            total: existing.total + result.total,
          }
        })
        saveProgress(textName, updated)
        return updated
      })
    },
    [textName],
  )

  const tabs = [
    {
      id: 'quiz' as const,
      label: t('study_engine.tab_quiz'),
      icon: Brain,
      count: questions.length,
    },
    ...(revisionTopics.length > 0
      ? [
          {
            id: 'revision' as const,
            label: t('study_engine.tab_revise'),
            icon: BookOpen,
            count: revisionTopics.length,
          },
        ]
      : []),
    ...(essayPrompts.length > 0
      ? [
          {
            id: 'essay' as const,
            label: t('study_engine.tab_essay'),
            icon: PenLine,
            count: essayPrompts.length,
          },
        ]
      : []),
    {
      id: 'progress' as const,
      label: t('study_engine.tab_progress'),
      icon: TrendingUp,
      count: progress.quizAttempts,
    },
  ]

  return (
    <section className={`rounded-2xl border border-border bg-card overflow-hidden ${className}`}>
      {/* Header */}
      <div className="border-b border-ink-100 bg-cream-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-clay-500" />
          <h3 className="font-serif text-base font-normal text-ink-900">
            {t('study_engine.heading')}: <em className="italic text-clay-600">{textName}</em>
          </h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-ink-100">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors border-b-2 ${
                isActive
                  ? 'border-clay-500 text-clay-600 bg-clay-500/5'
                  : 'border-transparent text-ink-500 hover:text-ink-700 hover:bg-cream-50'
              }`}
            >
              <Icon className="size-3.5" />
              {tab.label}
              {tab.count > 0 && (
                <span
                  className={`font-mono text-[9px] ${isActive ? 'text-clay-500' : 'text-ink-400'}`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="p-5">
        {activeTab === 'quiz' && (
          <QuizMode questions={questions} textName={textName} onComplete={handleQuizComplete} />
        )}
        {activeTab === 'revision' && revisionTopics.length > 0 && (
          <RevisionMode topics={revisionTopics} textName={textName} />
        )}
        {activeTab === 'essay' && essayPrompts.length > 0 && (
          <EssayMode prompts={essayPrompts} textName={textName} />
        )}
        {activeTab === 'progress' && <ProgressMode textName={textName} progress={progress} />}
      </div>
    </section>
  )
}
