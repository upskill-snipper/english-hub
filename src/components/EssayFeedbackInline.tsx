'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import {
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
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

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

export interface EssayFeedbackInlineProps {
  /** Exam board (e.g. "AQA", "Edexcel") */
  board: string
  /** Paper identifier (e.g. "Paper 1") */
  paper: string
  /** Question type (e.g. "Creative Writing", "Language Analysis") */
  questionType: string
  /** The full question text to provide context to the AI */
  questionText: string
  /**
   * If provided, the component uses this as the essay text instead of rendering its own textarea.
   * Useful when the student has already typed an answer in an existing textarea.
   */
  existingAnswer?: string
  /**
   * If true, automatically submits the essay for feedback on mount (no collapsible wrapper).
   * Renders feedback results directly without requiring user to expand/click.
   */
  autoSubmit?: boolean
  /** Additional className for the outer wrapper */
  className?: string
}

// ── Grade band colour helpers ────────────────────────────────────────────────

function getGradeBandStyle(band: string) {
  switch (band) {
    case 'Grade 8-9':
      return {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
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

// ── Main Component ───────────────────────────────────────────────────────────

export default function EssayFeedbackInline({
  board,
  paper,
  questionType,
  questionText,
  existingAnswer,
  autoSubmit = false,
  className,
}: EssayFeedbackInlineProps) {
  const [open, setOpen] = useState(false)
  const [essay, setEssay] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const autoSubmitTriggered = useRef(false)

  // Use existingAnswer if provided, otherwise use local textarea value
  const essayText = existingAnswer ?? essay

  const wordCount = useMemo(() => {
    const trimmed = essayText.trim()
    if (!trimmed) return 0
    return trimmed.split(/\s+/).length
  }, [essayText])

  async function handleSubmit() {
    if (!board || !paper || !questionType || !questionText.trim() || wordCount < 100) {
      setError('Your answer must be at least 100 words to get AI feedback.')
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
          essay: essayText.trim(),
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
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // Auto-submit on mount when autoSubmit is true and we have enough words
  useEffect(() => {
    if (autoSubmit && !autoSubmitTriggered.current && wordCount >= 100) {
      autoSubmitTriggered.current = true
      handleSubmit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSubmit])

  function handleReset() {
    setFeedback(null)
    setError(null)
    autoSubmitTriggered.current = false
    if (!existingAnswer) {
      setEssay('')
    }
  }

  function handleRetry() {
    setError(null)
    handleSubmit()
  }

  const canSubmit = wordCount >= 100 && !submitting

  // ── Auto-submit mode: render directly without collapsible wrapper ──
  if (autoSubmit) {
    return (
      <Card className={className}>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2 text-sm">
            <PenLine className="h-4 w-4 text-primary" />
            AI Feedback
            {remaining !== null && (
              <span className="ml-1 text-xs font-normal text-muted-foreground">
                ({remaining} review{remaining !== 1 ? 's' : ''} remaining today)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {submitting && (
            <div className="flex items-center gap-3 py-6">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Analysing your answer...</p>
                <p className="text-xs text-muted-foreground">This usually takes a few seconds.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="space-y-3 py-2">
              <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
              <Button size="sm" variant="secondary" onClick={handleRetry} disabled={submitting}>
                <RefreshCw className="h-3.5 w-3.5" />
                Retry
              </Button>
            </div>
          )}

          {feedback && (
            <InlineFeedbackResults
              feedback={feedback}
              board={board}
              paper={paper}
              questionType={questionType}
              onReset={handleReset}
            />
          )}

          {!submitting && !error && !feedback && wordCount < 100 && (
            <p className="py-4 text-sm text-muted-foreground">
              Your answer needs at least 100 words for AI feedback ({wordCount} word{wordCount !== 1 ? 's' : ''} written).
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  // ── Standard collapsible mode (standalone usage) ──
  return (
    <Collapsible open={open} onOpenChange={setOpen} className={className}>
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors',
          'hover:bg-accent/50',
          open
            ? 'border-primary/30 bg-primary/5'
            : 'border-border/50 bg-card'
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
            <PenLine className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <span className="text-sm font-semibold text-foreground">AI Essay Feedback</span>
            {remaining !== null && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({remaining} review{remaining !== 1 ? 's' : ''} remaining today)
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        <div className="mt-3 space-y-4 rounded-lg border border-border/50 bg-card p-4">
          {feedback ? (
            /* ── Feedback Results ──────────────────────────────────────── */
            <InlineFeedbackResults
              feedback={feedback}
              board={board}
              paper={paper}
              questionType={questionType}
              onReset={handleReset}
            />
          ) : (
            /* ── Input Form ───────────────────────────────────────────── */
            <>
              {/* Show textarea only if no existingAnswer is provided */}
              {!existingAnswer && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Your Answer</span>
                    <span
                      className={cn(
                        'text-xs tabular-nums',
                        wordCount < 100 ? 'text-destructive' : 'text-muted-foreground'
                      )}
                    >
                      {wordCount} word{wordCount !== 1 ? 's' : ''}
                      {wordCount < 100 && ' (min 100)'}
                    </span>
                  </div>
                  <Textarea
                    placeholder="Paste or type your essay here..."
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                    rows={8}
                    className="min-h-[120px] resize-y"
                  />
                </div>
              )}

              {/* When using existingAnswer, show a word count summary */}
              {existingAnswer && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Your answer above will be analysed ({wordCount} word{wordCount !== 1 ? 's' : ''})
                  </span>
                  {wordCount < 100 && (
                    <span className="text-xs text-destructive">Min 100 words required</span>
                  )}
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  AI-generated feedback — use as a guide alongside your teacher&apos;s assessment.
                </p>
                <Button
                  size="sm"
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Analysing...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Get AI Feedback
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

// ── Inline Feedback Results ──────────────────────────────────────────────────

function InlineFeedbackResults({
  feedback,
  board,
  paper,
  questionType,
  onReset,
}: {
  feedback: FeedbackData
  board: string
  paper: string
  questionType: string
  onReset: () => void
}) {
  const gradeStyle = getGradeBandStyle(feedback.gradeBand)

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Disclaimer */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-200">
        <p className="font-medium text-sm">AI-Generated Estimate</p>
        <p className="mt-0.5 text-muted-foreground">
          Not an official grade — use alongside your teacher&apos;s guidance.
        </p>
      </div>

      {/* Grade Band */}
      <div className={cn('flex items-center gap-3 rounded-lg border p-4', gradeStyle.border)}>
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl ring-4',
            gradeStyle.bg,
            gradeStyle.ring
          )}
        >
          <Award className={cn('h-6 w-6', gradeStyle.text)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn('text-xl font-bold tracking-tight', gradeStyle.text)}>
              {feedback.gradeBand}
            </span>
            <Badge variant="outline" className="text-xs uppercase">
              {board} {paper}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {questionType}
            </Badge>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
            {feedback.gradeJustification}
          </p>
        </div>
      </div>

      {/* AO Scores */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <BarChart3 className="h-3.5 w-3.5 text-primary" />
          Marking Guide Breakdown
        </div>
        <div className="space-y-2.5">
          {feedback.aoScores.map((ao) => {
            const pct = ao.maxScore > 0 ? (ao.score / ao.maxScore) * 100 : 0
            return (
              <div key={ao.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{ao.label}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {ao.score}/{ao.maxScore}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn('h-full rounded-full transition-all duration-500', getScoreBarColor(ao.score, ao.maxScore))}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{ao.comment}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Strengths & Improvements */}
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Strengths */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-green-400" />
            Strengths
          </div>
          <ul className="space-y-2">
            {feedback.strengths.map((s, i) => (
              <li key={i} className="space-y-0.5">
                <p className="text-xs font-medium text-foreground">{s.point}</p>
                <blockquote className="border-l-2 border-green-500/30 pl-2 text-xs italic text-muted-foreground">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            Improvements
          </div>
          <ul className="space-y-2">
            {feedback.improvements.map((imp, i) => (
              <li key={i} className="space-y-0.5">
                <p className="text-xs font-medium text-foreground">{imp.point}</p>
                <div className="rounded-md bg-blue-500/5 border border-blue-500/10 p-1.5 text-xs text-muted-foreground">
                  {imp.suggestion}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detailed Feedback */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <MessageSquareText className="h-3.5 w-3.5 text-primary" />
          Detailed Feedback
        </div>
        <div className="rounded-lg bg-muted/30 p-3">
          {feedback.annotatedFeedback.split('\n').map((paragraph, i) => (
            paragraph.trim() ? (
              <p key={i} className="mb-2 text-xs leading-relaxed text-muted-foreground last:mb-0">
                {paragraph}
              </p>
            ) : null
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          AI feedback is approximate and should not replace teacher assessment.
        </p>
        <Button size="sm" variant="secondary" onClick={onReset}>
          <RefreshCw className="h-3.5 w-3.5" />
          Try Again
        </Button>
      </div>
    </div>
  )
}
