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
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-config'
import { matchesPracticeBoard } from '@/lib/board-filter'
// PERF (Aug 2026): both the question bank and the exam guides are now pulled in
// on demand rather than at module scope. The type imports below are erased at
// compile time, so they cost this client bundle nothing. See the header comments
// in `@/data/practice/load` and `@/data/exam-guides/load-guide` for the defect.
import type { PracticeQuestion } from '@/data/practice/types'
import { loadPracticeQuestions, questionTypesFor } from '@/data/practice/load'
import { cn, formatTime } from '@/lib/utils'
import type { BoardExamGuide } from '@/data/exam-guides/types'
import { loadGuideByBoard } from '@/data/exam-guides/load-guide'
import Link from 'next/link'

import EssayFeedbackInline from '@/components/EssayFeedbackInline'
import { QuizJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LearningTip } from '@/components/ui/learning-tip'

// ─── Constants ──────────────────────────────────────────────────────────────

const GRADE_TABS = ['Grade 4-5', 'Grade 6-7', 'Grade 8-9'] as const

// NOTE: the question-type filter used to be derived here, at module scope, from
// the whole cross-board bank. That single line was enough to keep every board's
// question module in this route's import graph, so it has moved into the
// component and now reads only the slice the student actually loaded
// (`questionTypesFor` in @/data/practice/load).

// ─── Contextual Tip Helper ──────────────────────────────────────────────────

function getContextualExaminerTip(
  questionType: string | undefined,
  tips: { question: string; tips: string[] }[],
): { label: string; tip: string } | null {
  if (!tips.length) return null

  const qt = (questionType || '').toLowerCase()
  let matched: { question: string; tips: string[] } | undefined

  if (qt.includes('language') || qt.includes('analysis')) {
    matched = tips.find((t) => /language|ao2/i.test(t.question))
  } else if (
    qt.includes('creative') ||
    qt.includes('writing') ||
    qt.includes('narrative') ||
    qt.includes('descriptive')
  ) {
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
  const t = useT()
  // Filters
  const { board: selectedBoard } = useBoard()
  const [questionType, setQuestionType] = useState<string>('All')

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

  // ── Lazily loaded question bank ────────────────────────────────────────
  //
  // `null` means "still fetching"; an empty array means "fetched, nothing for
  // this board". The two must stay distinguishable or the page flashes the
  // "no questions found" empty state on every load.
  const [questions, setQuestions] = useState<PracticeQuestion[] | null>(null)
  const [bankFailed, setBankFailed] = useState(false)
  // Bumped by the retry button so a failed chunk fetch can be re-attempted
  // without a full page reload.
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setQuestions(null)
    setBankFailed(false)
    loadPracticeQuestions(selectedBoard)
      .then((loaded) => {
        if (!cancelled) setQuestions(loaded)
      })
      .catch(() => {
        // A chunk that fails to download must surface as an error, never as a
        // placeholder question - students would revise against invented content.
        if (cancelled) return
        setQuestions([])
        setBankFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [selectedBoard, reloadKey])

  const questionTypes = useMemo(() => questionTypesFor(questions ?? []), [questions])

  // If the student's saved type filter does not exist in the newly loaded
  // slice (e.g. they had an AQA-only question type selected and switched to
  // Cambridge), fall back to "All". Otherwise the Select shows a value that is
  // not in its own option list and the pool is stuck empty.
  useEffect(() => {
    if (questions && questionType !== 'All' && !questionTypes.includes(questionType)) {
      setQuestionType('All')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionTypes, questions])

  // ── Lazily loaded board exam guide (contextual examiner tips) ──────────

  const [boardGuide, setBoardGuide] = useState<BoardExamGuide | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    if (!selectedBoard) {
      setBoardGuide(undefined)
      return
    }
    loadGuideByBoard(selectedBoard)
      .then((guide) => {
        if (!cancelled) setBoardGuide(guide)
      })
      .catch(() => {
        // The examiner tip is a bonus, not the feature. If its chunk fails we
        // simply omit the callout rather than blocking practice.
        if (!cancelled) setBoardGuide(undefined)
      })
    return () => {
      cancelled = true
    }
  }, [selectedBoard])

  const contextualTip = useMemo(
    () =>
      boardGuide && currentQuestion
        ? getContextualExaminerTip(
            currentQuestion.questionType || currentQuestion.type,
            boardGuide.examinerTips,
          )
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [boardGuide, currentQuestion?.id],
  )

  // ── Filtered questions ─────────────────────────────────────────────────

  // `matchesPracticeBoard` still runs even though the loader already narrows by
  // board: it is the authoritative syllabus gate, so a mis-tagged question can
  // never reach a student on the wrong specification.
  const filtered = useMemo(
    () =>
      (questions ?? []).filter((q) => {
        if (!matchesPracticeBoard(q, selectedBoard)) return false
        if (questionType !== 'All' && (q.questionType || q.type) !== questionType) return false
        return true
      }),
    [questions, selectedBoard, questionType],
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

  // Pick initial question, and re-pick whenever the user's board (or filter)
  // changes such that the current question no longer matches the user's
  // active board+filter set. Without this, switching from AQA to Pearson
  // IGCSE leaves an "AQA" question on screen until the next manual shuffle.
  useEffect(() => {
    const stillValid = currentQuestion != null && filtered.some((q) => q.id === currentQuestion.id)
    if (!stillValid) pickRandom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered])

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
        answer,
        self_rating: rating,
        time_seconds: elapsed,
        timed_mode: timedMode,
      })
      if (error) throw error
      setSaved(true)
    } catch {
      setSaveError(t('marking.save_session_failed'))
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
      <QuizJsonLd
        name="GCSE and IGCSE English practice questions"
        description="Practice questions across GCSE and IGCSE English Language and Literature, calibrated to AO mark schemes."
        about="GCSE English"
        educationalLevel="GCSE"
        url="https://theenglishhub.app/practice"
        audienceRole="student"
      />
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {t('marking.practice_mode')}
            </h1>
            <LearningTip categories={['practice', 'exam']} side="right" size="md" />
          </div>
          <p className="mt-2 text-muted-foreground">{t('marking.practice_mode_subtitle')}</p>
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
                    {t('marking.unlock_cta_heading')}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">{PRICING.TRIAL_TEXT}!</span>{' '}
                    {t('marking.then_label')} {PRICING_DISPLAY.monthly}{' '}
                    {t('marking.rolling_monthly')} {t('home.cancel_anytime')}.
                  </p>
                </div>
                <Button
                  render={<Link href="/auth/register" />}
                  size="lg"
                  className="shrink-0 px-6 py-3"
                >
                  {t('marking.start_free_trial')}
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
              {t('marking.filters')}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="question-type-filter">{t('marking.question_type')}</Label>
              <Select value={questionType} onValueChange={(v) => v && setQuestionType(v)}>
                {/* Disabled until the board's slice has arrived - the type list
                    is derived from the loaded questions, so before then it holds
                    "All" only and would look like a broken filter. */}
                <SelectTrigger
                  id="question-type-filter"
                  className="w-full sm:max-w-xs"
                  disabled={questions === null}
                >
                  <SelectValue placeholder={t('marking.select_type')} />
                </SelectTrigger>
                <SelectContent>
                  {questionTypes.map((qt) => (
                    <SelectItem key={qt} value={qt}>
                      {qt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Never claim "0 questions available" while the bank is still
                    downloading - that reads as an empty product, not a wait. */}
                <span className="text-sm text-muted-foreground">
                  {questions === null ? (
                    t('action.loading')
                  ) : (
                    <>
                      {filtered.length}{' '}
                      {filtered.length !== 1
                        ? t('marking.questions_available_plural')
                        : t('marking.questions_available_singular')}
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/* Timer toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTimedMode(!timedMode)}
                  className={cn(timedMode && 'text-primary')}
                >
                  {timedMode ? <Clock className="h-4 w-4" /> : <ClockFading className="h-4 w-4" />}
                  {timedMode ? t('marking.timed') : t('marking.untimed')}
                </Button>
                {/* New random question */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  disabled={questions === null}
                >
                  <Shuffle className="h-4 w-4" />
                  {t('marking.random_question')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Question Area ───────────────────────────────────────────── */}
        {questions === null ? (
          /* Bank still downloading. Deliberately renders no question content -
             an error or waiting state must never show placeholder questions. */
          <Card className="flex flex-col items-center justify-center p-12 text-center">
            <Loader2 className="mb-4 h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">{t('action.loading')}</p>
          </Card>
        ) : bankFailed ? (
          /* The question chunk failed to download (offline, cache miss after a
             deploy). Say so plainly and offer a retry rather than showing an
             empty pool, which reads as "this board has no questions". */
          <Card className="flex flex-col items-center justify-center p-12 text-center">
            <BookOpen className="mb-4 h-12 w-12 text-border" />
            <h2 className="text-lg font-semibold text-foreground">{t('action.error_generic')}</h2>
            <Button variant="default" className="mt-6" onClick={() => setReloadKey((k) => k + 1)}>
              {t('action.retry')}
            </Button>
          </Card>
        ) : currentQuestion ? (
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

            {/* Meta badges - prefer the user's selected board name over the
                question's raw legacy tag so a Pearson IGCSE student never sees
                "OCR" or "AQA" splashed across a generic practice question. */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/15 text-primary">
                {getBoardConfig(selectedBoard)?.shortName ?? currentQuestion.board}
              </Badge>
              {currentQuestion.paper != null && (
                <Badge variant="secondary">
                  {t('marking.paper')} {currentQuestion.paper}
                </Badge>
              )}
              <Badge className="bg-amber-500/15 text-amber-600 dark:text-clay-600">
                {(currentQuestion.questionType || currentQuestion.type || 'General')
                  .split('-')
                  .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ')}
              </Badge>
            </div>

            {/* Extract */}
            {currentQuestion.extract && (
              <Card>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    {t('marking.source_text')}
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
                      - {currentQuestion.extractSource}
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
                  <span className="font-semibold text-primary">{t('marking.examiner_tip')}</span>
                  <span className="mx-1.5 text-border">·</span>
                  <span className="text-xs text-muted-foreground">{contextualTip.label}</span>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{contextualTip.tip}</p>
                </div>
              </div>
            )}

            {/* Answer textarea */}
            <div className="space-y-1.5">
              <Label htmlFor="answer-textarea">{t('marking.your_answer')}</Label>
              <Textarea
                id="answer-textarea"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={t('marking.placeholder')}
                rows={10}
                disabled={submitted}
                className="resize-y text-base leading-relaxed"
              />
              {!submitted && (
                <div className="flex items-center justify-between">
                  <p
                    className={cn(
                      'text-sm font-medium',
                      answer.split(/\s+/).filter(Boolean).length >= 100
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-destructive',
                    )}
                  >
                    {answer.split(/\s+/).filter(Boolean).length} / 100 {t('marking.words_plural')}
                  </p>
                  {answer.split(/\s+/).filter(Boolean).length < 100 && (
                    <p className="text-sm text-muted-foreground">{t('marking.min_words_hint')}</p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Answer button - only before submission */}
            {!submitted && (
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setSubmitted(true)}
                disabled={answer.split(/\s+/).filter(Boolean).length < 100}
              >
                <Send className="h-4 w-4" />
                {t('marking.submit_essay')}
              </Button>
            )}

            {/* ── Post-submission: AI Feedback + Model Answers ──────── */}
            {submitted && (
              <div className="space-y-6">
                {/* AI Feedback - auto-submits on render */}
                {user && currentQuestion && (
                  <EssayFeedbackInline
                    board={currentQuestion.board}
                    paper={
                      currentQuestion.paper != null ? `Paper ${currentQuestion.paper}` : 'Paper 1'
                    }
                    questionType={currentQuestion.questionType || currentQuestion.type || 'General'}
                    questionText={currentQuestion.question}
                    existingAnswer={answer}
                    autoSubmit
                  />
                )}

                {/* Model Answers - Grade tabs */}
                <Card>
                  <Tabs value={activeGradeTab} onValueChange={setActiveGradeTab}>
                    <CardHeader className="border-b pb-0">
                      <CardTitle className="mb-2 flex items-center gap-2 text-sm">
                        <Eye className="h-4 w-4 text-primary" />
                        {t('marking.model_answers')}
                        <LearningTip categories={['grade', 'exam']} side="right" />
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
                            {currentQuestion.modelAnswers?.[tab] || t('marking.no_model_answer')}
                          </div>
                        </CardContent>
                      </TabsContent>
                    ))}
                  </Tabs>
                </Card>

                {/* Mark Scheme */}
                {currentQuestion.markScheme &&
                  (Array.isArray(currentQuestion.markScheme)
                    ? currentQuestion.markScheme.length > 0
                    : Object.keys(currentQuestion.markScheme).length > 0) && (
                    <Card>
                      <CardContent>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {t('marking.mark_scheme_points')}
                        </div>
                        <ul className="space-y-2">
                          {(Array.isArray(currentQuestion.markScheme)
                            ? currentQuestion.markScheme
                            : Object.entries(
                                currentQuestion.markScheme as Record<string, string[]>,
                              ).flatMap(([cat, points]) => [`${cat}:`, ...points])
                          ).map((point, i) => (
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
                {currentQuestion.examinerTips && currentQuestion.examinerTips.length > 0 && (
                  <Card className="border-amber-500/30">
                    <CardContent>
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Lightbulb className="h-4 w-4 text-amber-500" />
                        {t('marking.examiner_tips')}
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
                      {t('marking.rate_yourself_prompt')}
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
                                : 'text-border',
                            )}
                          />
                        </button>
                      ))}
                      {rating > 0 && (
                        <span className="ml-3 text-sm text-muted-foreground">{rating}/5</span>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Save & Try Another */}
                <div className="flex flex-wrap items-center gap-3">
                  {user && (
                    <Button variant="secondary" onClick={saveSession} disabled={saving || saved}>
                      {saving ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : saved ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                      {saved
                        ? t('marking.saved')
                        : saving
                          ? t('marking.saving')
                          : t('marking.save_session')}
                    </Button>
                  )}
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleNext}
                  >
                    {t('marking.try_another_question')}
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
              {t('marking.no_questions_found')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t('marking.no_questions_hint')}</p>
            <Button
              variant="default"
              className="mt-6"
              onClick={() => {
                setQuestionType('All')
              }}
            >
              {t('marking.reset_filters')}
            </Button>
          </Card>
        )}
      </div>
    </main>
  )
}
