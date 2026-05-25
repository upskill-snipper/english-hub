'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useT } from '@/lib/i18n/use-t'
import {
  ArrowLeft,
  Send,
  Loader2,
  RefreshCw,
  Award,
  CheckCircle,
  AlertTriangle,
  MessageSquareText,
  BarChart3,
  Sparkles,
  PenLine,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { useBoard } from '@/hooks/useBoard'
import { markSchemes, getPapersForBoard, getQuestionTypes } from '@/data/mark-schemes'
import { getQuestionsForType } from '@/data/exam-questions'
import { cn } from '@/lib/utils'
import { AiGeneratedNotice } from '@/components/ai/AiGeneratedNotice'
import { RequestHumanReviewButton } from '@/components/ai/RequestHumanReviewButton'
import { ReadAloudButton } from '@/components/speech/ReadAloudButton'
import { DictationButton } from '@/components/speech/DictationButton'
import { capture as phCapture, EVENTS as PH_EVENTS } from '@/lib/posthog'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ────────────────────────────────────────────────────────────────────

interface AOScore {
  id: string
  label: string
  score: number
  maxScore: number
  comment: string
}

interface FeedbackData {
  gradeBand: 'Grade 4-5' | 'Grade 6-7' | 'Grade 8-9'
  gradeJustification: string
  aoScores: AOScore[]
  strengths: Array<{ point: string; quote: string }>
  improvements: Array<{ point: string; suggestion: string }>
  annotatedFeedback: string
}

// ── Grade band colour helpers ────────────────────────────────────────────────

function getGradeBandStyle(band: string) {
  switch (band) {
    case 'Grade 8-9':
      return {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-clay-600',
        ring: 'ring-yellow-500/20',
      }
    case 'Grade 6-7':
      return {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        ring: 'ring-blue-500/20',
      }
    case 'Grade 4-5':
    default:
      return {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        ring: 'ring-green-500/20',
      }
  }
}

function getScoreBarColor(score: number, max: number) {
  const pct = max > 0 ? (score / max) * 100 : 0
  if (pct >= 75) return 'bg-yellow-400'
  if (pct >= 50) return 'bg-blue-400'
  return 'bg-green-400'
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function EssayFeedbackPage() {
  const t = useT()
  const { user, isLoading } = useAuthStore()
  const router = useRouter()
  const { board: globalBoard } = useBoard()

  // Auth redirect guard
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(window.location.pathname))
    }
  }, [isLoading, user, router])

  // Form state — use null (not '') for empty selections so Base UI Select shows placeholders
  const [board, setBoard] = useState<string | null>(null)
  const [paper, setPaper] = useState<string | null>(null)
  const [questionType, setQuestionType] = useState<string | null>(null)
  const [questionText, setQuestionText] = useState('')
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null)
  const [essay, setEssay] = useState('')

  // Submission state
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)

  // Auto-populate board from global board-gate selection (skip KS3 as essay feedback is GCSE-only)
  useEffect(() => {
    if (globalBoard && board === null) {
      setBoard(globalBoard)
    }
  }, [globalBoard]) // eslint-disable-line react-hooks/exhaustive-deps

  // Derived: available papers / question types
  const availablePapers = useMemo(() => {
    if (!board) return []
    return getPapersForBoard(board)
  }, [board])

  // Question types that are short-answer on the actual exam — not suitable for essay feedback
  const SHORT_ANSWER_TYPES = ['Information Retrieval', 'Summary & Synthesis', 'Summary']

  const availableQuestionTypes = useMemo(() => {
    if (!board || !paper) return []
    return getQuestionTypes(board, paper).filter((qt) => !SHORT_ANSWER_TYPES.includes(qt))
  }, [board, paper])

  const availableQuestions = useMemo(() => {
    if (!board || !paper || !questionType) return []
    return getQuestionsForType(board, paper, questionType)
  }, [board, paper, questionType])

  // Word count
  const wordCount = useMemo(() => {
    const trimmed = essay.trim()
    if (!trimmed) return 0
    return trimmed.split(/\s+/).length
  }, [essay])

  // Handle board change — reset downstream
  function handleBoardChange(value: string | null) {
    setBoard(value)
    setPaper(null)
    setQuestionType(null)
    setSelectedQuestionId(null)
    setQuestionText('')
  }

  // Handle paper change — reset question type
  function handlePaperChange(value: string | null) {
    setPaper(value)
    setQuestionType(null)
    setSelectedQuestionId(null)
    setQuestionText('')
  }

  // Handle question selection from dropdown
  function handleQuestionSelect(questionId: string | null) {
    setSelectedQuestionId(questionId)
    const question = availableQuestions.find((q) => q.id === questionId)
    if (question && !question.id.endsWith('-custom')) {
      setQuestionText(question.text)
    } else {
      setQuestionText('')
    }
  }

  // Submit essay
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user) {
      setError('Please sign in to use essay feedback.')
      return
    }
    if (!board || !paper || !questionType || !questionText.trim() || wordCount < 100) {
      setError('Please fill in all fields. Your essay must be at least 100 words.')
      return
    }

    setSubmitting(true)
    setError(null)
    setFeedback(null)

    try {
      const res = await fetch('/api/essay-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board,
          paper,
          questionType,
          questionText: questionText.trim(),
          essay: essay.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setFeedback(data.feedback)
      if (typeof data.remaining === 'number') {
        setRemaining(data.remaining)
      }
      // Funnel: first_essay_submitted. We fire on every successful essay
      // submission; PostHog de-dupes "first" via its built-in
      // once-per-user-per-event analysis, which is cheaper and more
      // reliable than tracking "first" client-side. Consent-gated in
      // src/lib/posthog.ts.
      phCapture(PH_EVENTS.FIRST_ESSAY_SUBMITTED, { board, paper, questionType })
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // Reset form
  function handleTryAgain() {
    setFeedback(null)
    setError(null)
    setEssay('')
    setQuestionText('')
    setSelectedQuestionId(null)
  }

  // ── Auth guard renders ─────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect via useEffect
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 gap-1.5"
            render={<Link href="/dashboard" />}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('dashboard.essay_feedback.back')}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <PenLine className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t('dashboard.essay_feedback.title')}
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {t('dashboard.essay_feedback.subtitle')}
              </p>
            </div>
          </div>

          {remaining !== null && (
            <p className="mt-2 text-xs text-muted-foreground">
              {remaining}{' '}
              {remaining !== 1
                ? t('dashboard.essay_feedback.remaining_plural')
                : t('dashboard.essay_feedback.remaining')}{' '}
              {t('dashboard.essay_feedback.remaining_today')}
            </p>
          )}
        </div>

        <Separator className="mb-6" />

        {/* ── Show results or form ──────────────────────────────────────── */}
        {feedback ? (
          <FeedbackResults
            feedback={feedback}
            board={board!}
            paper={paper!}
            questionType={questionType!}
            onTryAgain={handleTryAgain}
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            {/* Selectors row */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Board */}
              <div className="space-y-2">
                <Label htmlFor="board">{t('dashboard.essay_feedback.label_board')}</Label>
                <Select value={board} onValueChange={handleBoardChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('dashboard.essay_feedback.placeholder_board')} />
                  </SelectTrigger>
                  <SelectContent>
                    {markSchemes.map((b) => (
                      <SelectItem key={b.board} value={b.board}>
                        {b.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Paper */}
              <div className="space-y-2">
                <Label htmlFor="paper">{t('dashboard.essay_feedback.label_paper')}</Label>
                <Select
                  key={board}
                  value={paper}
                  onValueChange={handlePaperChange}
                  disabled={!board}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        board
                          ? t('dashboard.essay_feedback.placeholder_paper')
                          : t('dashboard.essay_feedback.placeholder_paper_first')
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePapers.map((p) => (
                      <SelectItem key={p.paper} value={p.paper}>
                        {p.paper} — {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Question type */}
              <div className="space-y-2">
                <Label htmlFor="questionType">
                  {t('dashboard.essay_feedback.label_question_type')}
                </Label>
                <Select
                  key={`${board}-${paper}`}
                  value={questionType}
                  onValueChange={(v) => {
                    setQuestionType(v)
                    setSelectedQuestionId(null)
                    setQuestionText('')
                  }}
                  disabled={!paper}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        paper
                          ? t('dashboard.essay_feedback.placeholder_question_type')
                          : t('dashboard.essay_feedback.placeholder_question_type_first')
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableQuestionTypes.map((qt) => (
                      <SelectItem key={qt} value={qt}>
                        {qt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Question selection */}
            <div className="space-y-2">
              <Label htmlFor="questionSelect">{t('dashboard.essay_feedback.label_question')}</Label>
              <Select
                key={`${board}-${paper}-${questionType}`}
                value={selectedQuestionId}
                onValueChange={handleQuestionSelect}
                disabled={!questionType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      questionType
                        ? t('dashboard.essay_feedback.placeholder_question')
                        : t('dashboard.essay_feedback.placeholder_question_first')
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableQuestions.map((q) => (
                    <SelectItem key={q.id} value={q.id}>
                      {q.text.length > 80 ? `${q.text.slice(0, 80)}...` : q.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedQuestionId?.endsWith('-custom') && (
                <Input
                  id="questionText"
                  placeholder={t('dashboard.essay_feedback.placeholder_question_custom')}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                />
              )}
              <p className="text-xs text-muted-foreground">
                {t('dashboard.essay_feedback.question_hint')}
              </p>
            </div>

            {/* Essay textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="essay">{t('dashboard.essay_feedback.label_essay')}</Label>
                <div className="flex items-center gap-2">
                  {/* Speak-to-type — append dictated text to the essay. */}
                  <DictationButton
                    onText={(chunk) => setEssay((v) => (v ? v + ' ' : '') + chunk)}
                    lang="en-GB"
                    iconOnly
                  />
                  <span
                    className={cn(
                      'text-xs tabular-nums',
                      wordCount < 100 ? 'text-destructive' : 'text-muted-foreground',
                    )}
                  >
                    {wordCount}{' '}
                    {wordCount !== 1
                      ? t('dashboard.essay_feedback.words')
                      : t('dashboard.essay_feedback.word')}
                    {wordCount < 100 && ` ${t('dashboard.essay_feedback.word_min')}`}
                  </span>
                </div>
              </div>
              <Textarea
                id="essay"
                placeholder={t('dashboard.essay_feedback.placeholder_essay')}
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                rows={16}
                className="min-h-[200px] resize-y"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                {t('dashboard.essay_feedback.disclaimer_ai')}
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={
                  submitting ||
                  !board ||
                  !paper ||
                  !questionType ||
                  !questionText.trim() ||
                  wordCount < 100
                }
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t('dashboard.essay_feedback.btn_analysing')}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t('dashboard.essay_feedback.btn_get_feedback')}
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// ── Feedback Results Component ───────────────────────────────────────────────

function FeedbackResults({
  feedback,
  board,
  paper,
  questionType,
  onTryAgain,
}: {
  feedback: FeedbackData
  board: string
  paper: string
  questionType: string
  onTryAgain: () => void
}) {
  const t = useT()
  const gradeStyle = getGradeBandStyle(feedback.gradeBand)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Consistent AI-generated disclosure (policy-matched). */}
      <AiGeneratedNotice variant="panel" />

      {/* Disclaimer Banner */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-700">
        <p className="font-medium">{t('dashboard.essay_feedback.result_disclaimer_title')}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {t('dashboard.essay_feedback.result_disclaimer_body')}
        </p>
      </div>

      {/* Grade Band Hero */}
      <Card className={cn('border', gradeStyle.border)}>
        <CardContent className="py-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div
              className={cn(
                'flex h-16 w-16 items-center justify-center rounded-2xl ring-4',
                gradeStyle.bg,
                gradeStyle.ring,
              )}
            >
              <Award className={cn('h-8 w-8', gradeStyle.text)} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className={cn('text-3xl font-bold tracking-tight', gradeStyle.text)}>
                  {feedback.gradeBand}
                </h2>
                <Badge variant="outline" className="text-xs uppercase">
                  {board} {paper}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {questionType}
                </Badge>
                {/* Read aloud — grade band + why it was awarded. */}
                <ReadAloudButton
                  text={`${feedback.gradeBand}. ${feedback.gradeJustification}`}
                  lang="en-GB"
                  iconOnly
                  label={t('dashboard.essay_feedback.detailed_feedback_title')}
                />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{feedback.gradeJustification}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AO Scores */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <CardTitle>{t('dashboard.essay_feedback.marking_breakdown_title')}</CardTitle>
          </div>
          <CardDescription>{t('dashboard.essay_feedback.marking_breakdown_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedback.aoScores.map((ao) => {
              const pct = ao.maxScore > 0 ? (ao.score / ao.maxScore) * 100 : 0
              return (
                <div key={ao.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{ao.label}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {ao.score}/{ao.maxScore}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        getScoreBarColor(ao.score, ao.maxScore),
                      )}
                      style={{ width: `${Math.min(pct, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{ao.comment}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Improvements side by side */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Strengths */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <CardTitle>{t('dashboard.essay_feedback.strengths_title')}</CardTitle>
            </div>
            <CardDescription>{t('dashboard.essay_feedback.strengths_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-sm font-medium text-foreground">{s.point}</p>
                  <blockquote className="border-l-2 border-green-500/30 pl-3 text-xs italic text-muted-foreground">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Improvements */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <CardTitle>{t('dashboard.essay_feedback.improvements_title')}</CardTitle>
            </div>
            <CardDescription>{t('dashboard.essay_feedback.improvements_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.improvements.map((imp, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-sm font-medium text-foreground">{imp.point}</p>
                  <div className="rounded-md bg-blue-500/5 border border-blue-500/10 p-2 text-xs text-muted-foreground">
                    {imp.suggestion}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Annotated Feedback */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4 text-primary" />
              <CardTitle>{t('dashboard.essay_feedback.detailed_feedback_title')}</CardTitle>
            </div>
            {/* Read aloud — helps EAL learners follow the detailed feedback. */}
            <ReadAloudButton text={feedback.annotatedFeedback} lang="en-GB" />
          </div>
          <CardDescription>{t('dashboard.essay_feedback.detailed_feedback_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
            {feedback.annotatedFeedback.split('\n').map((paragraph, i) =>
              paragraph.trim() ? (
                <p key={i} className="mb-3 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ) : null,
            )}
          </div>
        </CardContent>
      </Card>

      {/* Human oversight (EU AI Act Art 14) — request a person to
          review this AI-generated, predicted (not official) feedback. */}
      <div className="border-t pt-6">
        <RequestHumanReviewButton context="essay-feedback" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {t('dashboard.essay_feedback.ai_approximate')}
        </p>
        <Button size="lg" onClick={onTryAgain}>
          <RefreshCw className="h-4 w-4" />
          {t('dashboard.essay_feedback.btn_try_again')}
        </Button>
      </div>
    </div>
  )
}
