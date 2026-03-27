'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
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
  Send,
  Loader2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoardStore } from '@/store/board-store'
import { matchesPracticeBoard } from '@/lib/board-filter'
import { practiceQuestions, type PracticeQuestion } from '@/data/practice-data'
import { cn, formatTime } from '@/lib/utils'
import { getGuideByBoard } from '@/data/exam-guides'
import Link from 'next/link'

import EssayFeedbackInline from '@/components/EssayFeedbackInline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// ─── Constants ──────────────────────────────────────────────────────────────

const DIFFICULTIES = ['All', 'Foundation', 'Higher'] as const
const GRADE_TABS = ['Grade 4-5', 'Grade 6-7', 'Grade 8-9'] as const

// Derive unique question types from the data
function getUniqueQuestionTypes(): string[] {
  const types = new Set(practiceQuestions.map((q) => q.questionType || q.type || 'Other').filter(Boolean))
  return ['All', ...Array.from(types).sort()]
}

// ─── Contextual Tip Helper ──────────────────────────────────────────────────

function getContextualExaminerTip(
  questionType: string | undefined,
  tips: { question: string; tips: string[] }[]
): { label: string; tip: string } | null {
  if (!tips.length) return null

  const qt = (questionType || '').toLowerCase()
  let matched: { question: string; tips: string[] } | undefined

  if (qt.includes('language') || qt.includes('analysis')) {
    matched = tips.find((t) => /language|ao2/i.test(t.question))
  } else if (qt.includes('creative') || qt.includes('writing') || qt.includes('narrative') || qt.includes('descriptive')) {
    matched = tips.find((t) => /creative|writing|ao5|ao6/i.test(t.question))
  } else if (qt.includes('evaluat')) {
    matched = tips.find((t) => /evaluat|ao4/i.test(t.question))
  }

  if (!matched) matched = tips[0]
  if (!matched?.tips.length) return null

  const randomTip = matched.tips[Math.floor(Math.random() * matched.tips.length)]
  return { label: matched.question, tip: randomTip }
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
  const [submitted, setSubmitted] = useState(false)
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
  const questionTypes = useMemo(() => getUniqueQuestionTypes(), [])

  // Board exam guide for contextual tips
  const boardGuide = useMemo(
    () => (selectedBoard ? getGuideByBoard(selectedBoard) : undefined),
    [selectedBoard]
  )

  const contextualTip = useMemo(
    () =>
      boardGuide && currentQuestion
        ? getContextualExaminerTip(currentQuestion.questionType || currentQuestion.type, boardGuide.examinerTips)
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [boardGuide, currentQuestion?.id]
  )

  // ── Filtered questions ─────────────────────────────────────────────────

  const filtered = useMemo(
    () =>
      practiceQuestions.filter((q) => {
        if (!matchesPracticeBoard(q, selectedBoard)) return false
        if (questionType !== 'All' && (q.questionType || q.type) !== questionType) return false
        if (difficulty !== 'All' && (q.difficulty || q.tier) !== difficulty) return false
        return true
      }),
    [selectedBoard, questionType, difficulty]
  )

  // ── Pick random question ───────────────────────────────────────────────

  const pickRandom = useCallback(() => {
    if (filtered.length === 0) {
      setCurrentQuestion(null)
      return
    }
    const idx = Math.floor(Math.random() * filtered.length)
    setCurrentQuestion(filtered[idx])
    setAnswer('')
    setSubmitted(false)
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
    if (timedMode && currentQuestion && !submitted) {
      timerRef.current = setInterval(() => setElapsed((p) => p + 1), 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [timedMode, currentQuestion, submitted])

  // Stop timer when answer submitted
  useEffect(() => {
    if (submitted && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [submitted])

  // ── Save session ───────────────────────────────────────────────────────

  async function saveSession() {
    if (!user || !currentQuestion || saving) return
    setSaving(true)
    setSaveError(null)
    try {
      const supabase = createClient()
      const { error } = await supabase.from('practice_sessions').insert({
        user_id: user.id,
        question_id: currentQuestion.id,
        board: currentQuestion.board,
        question_type: currentQuestion.questionType || currentQuestion.type,
        difficulty: currentQuestion.difficulty || currentQuestion.tier,
        answer,
        self_rating: rating,
        time_seconds: elapsed,
        timed_mode: timedMode,
      })
      if (error) throw error
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
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Practice Mode
          </h1>
          <p className="mt-2 text-muted-foreground">
            Sharpen your skills with exam-style questions and model answers.
          </p>
        </div>
      </div>

      {/* Subscription CTA */}
      {!user && (
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
            <Card className="border-primary/30 bg-primary/10">
              <CardContent className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    Unlock 40+ exam-style practice questions with detailed model answers and examiner tips
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">{PRICING.TRIAL_TEXT}!</span>
                    {' '}Then {PRICING_DISPLAY.monthly} on a rolling monthly contract. Cancel anytime.
                  </p>
                </div>
                <Button render={<Link href="/auth/register" />} size="lg" className="shrink-0 px-6 py-3">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ── Filter Bar ──────────────────────────────────────────────── */}
        <Card className="mb-8">
          <CardContent>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Filter className="h-4 w-4" />
              Filters
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Question Type */}
              <div className="space-y-1.5">
                <Label htmlFor="question-type-filter">Question Type</Label>
                <Select value={questionType} onValueChange={(v) => v && setQuestionType(v)}>
                  <SelectTrigger id="question-type-filter" className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Difficulty */}
              <div className="space-y-1.5">
                <Label htmlFor="difficulty-filter">Difficulty</Label>
                <Select value={difficulty} onValueChange={(v) => v && setDifficulty(v)}>
                  <SelectTrigger id="difficulty-filter" className="w-full">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {DIFFICULTIES.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {filtered.length} question{filtered.length !== 1 ? 's' : ''} available
                </span>
                {selectedBoard && (
                  <Link
                    href={`/exam-guide/${selectedBoard.toLowerCase()}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View your board&apos;s full exam guide
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-3">
                {/* Timer toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTimedMode(!timedMode)}
                  className={cn(timedMode && 'text-primary')}
                >
                  {timedMode ? (
                    <Clock className="h-4 w-4" />
                  ) : (
                    <ClockFading className="h-4 w-4" />
                  )}
                  {timedMode ? 'Timed' : 'Untimed'}
                </Button>
                {/* New random question */}
                <Button variant="ghost" size="sm" onClick={handleNext}>
                  <Shuffle className="h-4 w-4" />
                  Random Question
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Question Area ───────────────────────────────────────────── */}
        {currentQuestion ? (
          <div className="space-y-6">
            {/* Timer display */}
            {timedMode && (
              <div className="flex items-center justify-center">
                <Card className="inline-flex flex-row items-center gap-2 px-5 py-2.5">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-mono text-lg font-semibold text-primary">
                    {formatTime(elapsed)}
                  </span>
                </Card>
              </div>
            )}

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/15 text-primary">
                {currentQuestion.board}
              </Badge>
              {currentQuestion.paper != null && (
                <Badge variant="secondary">
                  Paper {currentQuestion.paper}
                </Badge>
              )}
              <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400">
                {currentQuestion.questionType || currentQuestion.type || 'General'}
              </Badge>
              <Badge variant="outline">
                {currentQuestion.difficulty || currentQuestion.tier || 'Standard'}
              </Badge>
            </div>

            {/* Extract */}
            {currentQuestion.extract && (
              <Card>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Source Text
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-primary/40 pl-5 text-[0.95rem] italic leading-relaxed text-foreground/80">
                    {currentQuestion.extract.split('\n').map((para, i) => (
                      <p key={i} className={i > 0 ? 'mt-4' : ''}>
                        {para}
                      </p>
                    ))}
                  </div>
                  {currentQuestion.extractSource && (
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                      — {currentQuestion.extractSource}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Question */}
            <Card>
              <CardContent>
                <h2 className="text-lg font-semibold text-foreground">
                  {currentQuestion.question}
                </h2>
              </CardContent>
            </Card>

            {/* Board Examiner Tip Callout */}
            {contextualTip && (
              <div className="flex items-start gap-3 rounded-lg border border-primary/25 bg-primary/5 px-4 py-3">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm">
                  <span className="font-semibold text-primary">Examiner Tip</span>
                  <span className="mx-1.5 text-border">·</span>
                  <span className="text-xs text-muted-foreground">{contextualTip.label}</span>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {contextualTip.tip}
                  </p>
                </div>
              </div>
            )}

            {/* Answer textarea */}
            <div className="space-y-1.5">
              <Label htmlFor="answer-textarea">Your Answer</Label>
              <Textarea
                id="answer-textarea"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                rows={10}
                disabled={submitted}
                className="resize-y text-base leading-relaxed"
              />
            </div>

            {/* Submit Answer button — only before submission */}
            {!submitted && (
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setSubmitted(true)}
                disabled={!answer.trim()}
              >
                <Send className="h-4 w-4" />
                Submit Answer
              </Button>
            )}

            {/* ── Post-submission: AI Feedback + Model Answers ──────── */}
            {submitted && (
              <div className="space-y-6">
                {/* AI Feedback — auto-submits on render */}
                {user && currentQuestion && (
                  <EssayFeedbackInline
                    board={currentQuestion.board}
                    paper={currentQuestion.paper != null ? `Paper ${currentQuestion.paper}` : 'Paper 1'}
                    questionType={currentQuestion.questionType || currentQuestion.type || 'General'}
                    questionText={currentQuestion.question}
                    existingAnswer={answer}
                    autoSubmit
                  />
                )}

                {/* Model Answers — Grade tabs */}
                <Card>
                  <Tabs value={activeGradeTab} onValueChange={setActiveGradeTab}>
                    <CardHeader className="border-b pb-0">
                      <CardTitle className="mb-2 flex items-center gap-2 text-sm">
                        <Eye className="h-4 w-4 text-primary" />
                        Model Answers
                      </CardTitle>
                      <TabsList className="w-full">
                        {GRADE_TABS.map((tab) => (
                          <TabsTrigger key={tab} value={tab}>
                            {tab}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </CardHeader>
                    {GRADE_TABS.map((tab) => (
                      <TabsContent key={tab} value={tab}>
                        <CardContent>
                          <div className="whitespace-pre-line text-[0.95rem] leading-relaxed text-muted-foreground">
                            {currentQuestion.modelAnswers?.[tab] ||
                              'No model answer available for this grade.'}
                          </div>
                        </CardContent>
                      </TabsContent>
                    ))}
                  </Tabs>
                </Card>

                {/* Mark Scheme */}
                {currentQuestion.markScheme &&
                  (Array.isArray(currentQuestion.markScheme) ? currentQuestion.markScheme.length > 0 : Object.keys(currentQuestion.markScheme).length > 0) && (
                    <Card>
                      <CardContent>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Mark Scheme Points
                        </div>
                        <ul className="space-y-2">
                          {(Array.isArray(currentQuestion.markScheme) ? currentQuestion.markScheme : Object.entries(currentQuestion.markScheme).flatMap(([cat, points]) => [`${cat}:`, ...points])).map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                                {i + 1}
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                {/* Examiner Tips */}
                {currentQuestion.examinerTips &&
                  currentQuestion.examinerTips.length > 0 && (
                    <Card className="border-amber-500/30">
                      <CardContent>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Lightbulb className="h-4 w-4 text-amber-500" />
                          Examiner Tips
                        </div>
                        <ul className="space-y-2">
                          {currentQuestion.examinerTips.map((tip, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                {/* Self-rating */}
                <Card>
                  <CardContent>
                    <p className="mb-3 text-sm font-semibold text-foreground">
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
                            className={cn(
                              'h-7 w-7',
                              s <= (hoverRating || rating)
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-border'
                            )}
                          />
                        </button>
                      ))}
                      {rating > 0 && (
                        <span className="ml-3 text-sm text-muted-foreground">
                          {rating}/5
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Save & Try Another */}
                <div className="flex flex-wrap items-center gap-3">
                  {user && (
                    <Button
                      variant="secondary"
                      onClick={saveSession}
                      disabled={saving || saved}
                    >
                      {saving ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : saved ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                      {saved ? 'Saved' : saving ? 'Saving...' : 'Save Session'}
                    </Button>
                  )}
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleNext}
                  >
                    Try Another Question
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                {saveError && (
                  <div className="mt-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                    {saveError}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* No questions match */
          <Card className="flex flex-col items-center justify-center p-12 text-center">
            <BookOpen className="mb-4 h-12 w-12 text-border" />
            <h2 className="text-lg font-semibold text-foreground">
              No questions found
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your filters to see available questions.
            </p>
          </Card>
        )}
      </div>
    </main>
  )
}
