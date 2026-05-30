'use client'

// ─── UCAS Personal-Statement Coach - AI feedback (UCAS 2026 three questions) ──
// The UCAS personal statement is now THREE separate free-text answers. The user
// answers each question; a combined character counter tracks the UCAS limits
// (minimum 350, maximum 4,000 characters across all three combined), then we
// POST { q1, q2, q3 } to /api/ielts/statement-feedback and render PER-QUESTION
// feedback (a per-dimension rating + comment, strengths, three improvements, an
// overall comment) plus an overall summary across the whole statement.
//
// AI opt-out / paywall / over-limit / loading / error states mirror the IELTS
// Writing page. Copy is bilingual-ready via useT() with inline English
// fallbacks. The paywall references the IELTS plan and links to /pricing#ielts.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileText,
  GraduationCap,
  Lightbulb,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { isAiOptedOut } from '@/lib/ai-preferences'
import { useT } from '@/lib/i18n/use-t'

// ─── Public response contract (kept in sync with the API route) ──────────────

type StatementRating = 0 | 1 | 2 | 3 | 4 | 5

interface StatementSection {
  label: string
  comment: string
  rating: StatementRating
}

interface QuestionFeedback {
  sections: StatementSection[]
  strengths: string[]
  improvements: string[]
  overallComment: string
}

type QuestionKey = 'q1' | 'q2' | 'q3'

interface StatementFeedback {
  perQuestion: Record<QuestionKey, QuestionFeedback>
  overall: { summary: string }
}

interface ApiSuccess {
  feedback: StatementFeedback
  disclaimer: string
}

// ─── UCAS 2026 questions + limits ─────────────────────────────────────────────
// The server validates length authoritatively; these mirror the UCAS rules.

const MIN_COMBINED_CHARS = 350
const MAX_COMBINED_CHARS = 4000

interface QuestionDef {
  key: QuestionKey
  prompt: string
  helper: string
  placeholder: string
}

const QUESTIONS: readonly QuestionDef[] = [
  {
    key: 'q1',
    prompt: 'Why do you want to study this course or subject?',
    helper:
      'Explain your motivation and how this course fits your goals. Be specific about what draws you to the subject - not a neighbouring one.',
    placeholder: 'Why this subject, specifically? What sparked and what sustains your interest…',
  },
  {
    key: 'q2',
    prompt:
      'How have your qualifications and studies helped you to prepare for this course or subject?',
    helper:
      'Link your subjects, qualifications and academic skills to the demands of the course, with concrete examples of what you learned.',
    placeholder:
      'Which subjects, projects or qualifications prepared you, and what did each teach you…',
  },
  {
    key: 'q3',
    prompt:
      'What else have you done to prepare outside of education, and why are these experiences useful?',
    helper:
      'Describe wider experiences (work, volunteering, reading, projects, responsibilities) and reflect on why each matters for this course.',
    placeholder: 'What have you done beyond the classroom, and why is it useful for this course…',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────

/**
 * Map an API status code → a friendly, user-facing message (route parity).
 * `t` resolves the localized copy; a server-supplied `body` message (already
 * localized by the route) takes precedence where the API provides one.
 */
function friendlyError(status: number, body: string, t: (key: string) => string): string {
  if (status === 401) return t('ielts.admissions.ps.err.401')
  if (status === 403) return body || t('ielts.admissions.ps.err.403')
  if (status === 429) return body || t('ielts.admissions.ps.err.429')
  if (status === 400) return body || t('ielts.admissions.ps.err.400')
  if (status === 503) return body || t('ielts.admissions.ps.err.503')
  if (status >= 500) return t('ielts.admissions.ps.err.500')
  return body || t('ielts.admissions.ps.err.generic')
}

/** Validate that one question's payload is a usable QuestionFeedback. */
function isQuestionFeedback(value: unknown): value is QuestionFeedback {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    Array.isArray(v.sections) &&
    Array.isArray(v.strengths) &&
    Array.isArray(v.improvements) &&
    typeof v.overallComment === 'string'
  )
}

/** Validate that an unknown API payload is a usable StatementFeedback. */
function isStatementFeedback(value: unknown): value is StatementFeedback {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  const pq = v.perQuestion as Record<string, unknown> | undefined
  if (!pq || typeof pq !== 'object') return false
  if (!isQuestionFeedback(pq.q1) || !isQuestionFeedback(pq.q2) || !isQuestionFeedback(pq.q3)) {
    return false
  }
  const overall = v.overall as Record<string, unknown> | undefined
  return !!overall && typeof overall.summary === 'string'
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function PersonalStatementCoachPage() {
  // The ielts.admissions.ps.* keys are defined (EN + Khaleeji AR) in
  // src/lib/i18n/dictionary-ielts-admissions.ts. The wrapper coerces an
  // unresolved "[[key]]" to '' so the inline English fallback renders.
  const tBase = useT()
  const t = (key: string): string => {
    const v = tBase(key)
    return v.startsWith('[[') ? '' : v
  }

  const [answers, setAnswers] = useState<Record<QuestionKey, string>>({ q1: '', q2: '', q3: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paywalled, setPaywalled] = useState(false)
  const [feedback, setFeedback] = useState<StatementFeedback | null>(null)
  const [disclaimer, setDisclaimer] = useState<string>('')

  // Children's Code AI opt-out - gate the whole tool client-side, then the API
  // enforces it authoritatively server-side too.
  const [aiOff, setAiOff] = useState(false)
  useEffect(() => {
    setAiOff(isAiOptedOut())
  }, [])

  const combinedCount = useMemo(
    () => answers.q1.length + answers.q2.length + answers.q3.length,
    [answers],
  )
  const underMin = combinedCount < MIN_COMBINED_CHARS
  const overMax = combinedCount > MAX_COMBINED_CHARS
  const canSubmit = !underMin && !overMax && !isSubmitting

  const setAnswer = useCallback((key: QuestionKey, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!canSubmit) return
    setIsSubmitting(true)
    setError(null)
    setPaywalled(false)

    try {
      const res = await fetch('/api/ielts/statement-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      })

      if (!res.ok) {
        let message = ''
        try {
          const body = (await res.json()) as { error?: string; message?: string }
          message = body?.error ?? body?.message ?? ''
        } catch {
          /* non-JSON error body */
        }
        if (res.status === 403) setPaywalled(true)
        setError(friendlyError(res.status, message, t))
        setIsSubmitting(false)
        return
      }

      const data = (await res.json()) as Partial<ApiSuccess>
      if (!isStatementFeedback(data.feedback)) {
        setError(t('ielts.admissions.ps.err.parse'))
        setIsSubmitting(false)
        return
      }

      setFeedback(data.feedback)
      setDisclaimer(
        typeof data.disclaimer === 'string'
          ? data.disclaimer
          : t('ielts.admissions.ps.fb.disclaimer'),
      )
      setIsSubmitting(false)
    } catch (err) {
      console.error('[ielts/admissions/personal-statement] fetch error', err)
      setError(t('ielts.admissions.ps.err.network'))
      setIsSubmitting(false)
    }
    // `t` is a stable wrapper over useT()'s memoized fn; intentionally excluded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canSubmit, answers])

  // ── AI opt-out screen ───────────────────────────────────────────────────
  if (aiOff) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BackLink t={t} />
        <div className="mt-8 rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
          <Lock className="mx-auto size-6 text-muted-foreground" />
          <h1 className="mt-3 font-heading text-xl font-semibold text-foreground">
            {t('ielts.admissions.ps.ai_off_title') || 'AI feedback is turned off'}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {t('ielts.admissions.ps.ai_off_body_pre') ||
              'AI features are currently disabled for this account. To turn AI feedback back on, visit your'}{' '}
            <Link
              href="/parent/settings"
              className="text-primary underline-offset-2 hover:underline"
            >
              {t('ielts.admissions.ps.ai_off_link') || 'privacy settings'}
            </Link>{' '}
            {t('ielts.admissions.ps.ai_off_body_post') ||
              'or ask a parent or guardian to update your preferences.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <BackLink t={t} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          {t('ielts.admissions.ps.eyebrow') || 'AI feedback - UCAS personal statement'}
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          {t('ielts.admissions.ps.title') || 'UCAS Personal-Statement Coach'}
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          {t('ielts.admissions.ps.subtitle') ||
            'The UCAS personal statement is now three separate questions. Answer each below to get honest, specific feedback on motivation, academic preparation and wider experience - plus concrete fixes for your next draft.'}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>
            {(
              t('ielts.admissions.ps.limit_note') ||
              'UCAS requires {min}-{max} characters in total across the three questions.'
            )
              .replace('{min}', MIN_COMBINED_CHARS.toLocaleString())
              .replace('{max}', MAX_COMBINED_CHARS.toLocaleString())}
          </span>
        </div>
      </section>

      {/* ── Draft workspace ───────────────────────────────────────── */}
      {!feedback && (
        <section className="space-y-5">
          {QUESTIONS.map((q, index) => (
            <div key={q.key} className="space-y-1.5">
              <Label htmlFor={`ps-${q.key}`}>
                {t(`ielts.admissions.ps.q.${q.key}.label`) || `Q${index + 1}. ${q.prompt}`}
              </Label>
              <p className="text-xs text-muted-foreground">
                {t(`ielts.admissions.ps.q.${q.key}.helper`) || q.helper}
              </p>
              <Textarea
                id={`ps-${q.key}`}
                value={answers[q.key]}
                onChange={(e) => setAnswer(q.key, e.target.value)}
                placeholder={t(`ielts.admissions.ps.q.${q.key}.placeholder`) || q.placeholder}
                rows={6}
                className="resize-y leading-relaxed"
              />
            </div>
          ))}

          {/* Combined character counter */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span
              className={
                underMin || overMax ? 'font-medium text-destructive' : 'text-muted-foreground'
              }
            >
              {(t('ielts.admissions.ps.char_count') || '{count} / {limit} characters')
                .replace('{count}', combinedCount.toLocaleString())
                .replace('{limit}', MAX_COMBINED_CHARS.toLocaleString())}
            </span>
            {underMin && (
              <span className="text-destructive">
                {(
                  t('ielts.admissions.ps.under_min') ||
                  'At least {min} characters required across all three answers.'
                ).replace('{min}', MIN_COMBINED_CHARS.toLocaleString())}
              </span>
            )}
            {overMax && (
              <span className="text-destructive">
                {(
                  t('ielts.admissions.ps.over_limit') ||
                  'Over the {max}-character UCAS limit - trim before submitting.'
                ).replace('{max}', MAX_COMBINED_CHARS.toLocaleString())}
              </span>
            )}
          </div>

          {/* Error / paywall banner */}
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              <p>{error}</p>
              {paywalled && (
                <p className="mt-2">
                  <Link
                    href="/pricing#ielts"
                    className="font-semibold underline underline-offset-2"
                  >
                    {t('ielts.admissions.ps.view_premium') || 'View the IELTS plan'}
                  </Link>
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
            <Button type="button" size="lg" disabled={!canSubmit} onClick={handleSubmit}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {t('ielts.admissions.ps.submitting') || 'Reading your answers…'}
                </span>
              ) : (
                t('ielts.admissions.ps.submit') || 'Get feedback'
              )}
            </Button>
          </div>
          {isSubmitting && (
            <p className="text-center text-xs text-muted-foreground">
              {t('ielts.admissions.ps.submitting_note') ||
                'This usually takes 15-30 seconds. Please don’t close the page.'}
            </p>
          )}

          {/* Privacy / guidance note */}
          <p className="text-center text-[11px] text-muted-foreground/70">
            {t('ielts.admissions.ps.privacy_note') ||
              'Your answers are sent only to generate feedback. This is guidance for UK-study preparation, not an official UCAS or university service.'}
          </p>
        </section>
      )}

      {/* ── Feedback ──────────────────────────────────────────────── */}
      {feedback && (
        <FeedbackView
          t={t}
          feedback={feedback}
          disclaimer={disclaimer}
          onTryAgain={() => {
            setFeedback(null)
            setError(null)
            setPaywalled(false)
          }}
        />
      )}
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────

function BackLink({ t }: { t: (key: string) => string }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-2 text-muted-foreground"
      render={<Link href="/ielts/admissions" />}
    >
      <ArrowLeft className="size-3.5" />
      {t('ielts.admissions.ps.back') || 'Back to UK admissions'}
    </Button>
  )
}

/** A compact 0-5 quality meter. Original visual - not an IELTS band chip. */
function RatingMeter({ rating }: { rating: StatementRating }) {
  const tone =
    rating >= 4
      ? 'bg-emerald-500'
      : rating === 3
        ? 'bg-sky-500'
        : rating === 2
          ? 'bg-amber-500'
          : 'bg-destructive'
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex gap-1" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`h-1.5 w-4 rounded-full ${n <= rating ? tone : 'bg-border'}`} />
        ))}
      </div>
      <span className="text-xs font-semibold tabular-nums text-muted-foreground">{rating}/5</span>
    </div>
  )
}

function SectionCard({ section }: { section: StatementSection }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-foreground">{section.label}</h4>
        <RatingMeter rating={section.rating} />
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{section.comment}</p>
    </div>
  )
}

/** One question's full feedback block. */
function QuestionFeedbackCard({
  t,
  index,
  prompt,
  qf,
}: {
  t: (key: string) => string
  index: number
  prompt: string
  qf: QuestionFeedback
}) {
  const avg =
    qf.sections.length > 0
      ? qf.sections.reduce((sum, s) => sum + s.rating, 0) / qf.sections.length
      : 0

  return (
    <Card className="border-border/60">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-heading-sm font-heading">
            {t('ielts.admissions.ps.fb.question_label') || 'Question'} {index + 1}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 tabular-nums">
            {(t('ielts.admissions.ps.fb.average') || '{score}/5 average').replace(
              '{score}',
              avg.toFixed(1),
            )}
          </Badge>
        </div>
        <CardDescription>{prompt}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {qf.overallComment && (
          <p className="text-sm leading-relaxed text-foreground">{qf.overallComment}</p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {qf.sections.map((s) => (
            <SectionCard key={s.label} section={s} />
          ))}
        </div>

        {qf.strengths.length > 0 && (
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-500">
              <CheckCircle2 className="size-4" />
              {t('ielts.admissions.ps.fb.strengths') || 'What’s working'}
            </p>
            <ul className="space-y-2">
              {qf.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {qf.improvements.length > 0 && (
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-500">
              <TrendingUp className="size-4" />
              {t('ielts.admissions.ps.fb.improve_title') || 'Things to improve next'}
            </p>
            <ol className="space-y-3">
              {qf.improvements.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-[11px] font-semibold text-amber-500">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function FeedbackView({
  t,
  feedback,
  disclaimer,
  onTryAgain,
}: {
  t: (key: string) => string
  feedback: StatementFeedback
  disclaimer: string
  onTryAgain: () => void
}) {
  return (
    <section className="space-y-6">
      {/* Overall summary */}
      <Card className="border-sky-500/20 bg-sky-500/[0.03]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-5 text-sky-400" />
            <CardTitle className="text-heading-sm font-heading">
              {t('ielts.admissions.ps.fb.overall') || 'Overall'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-foreground">{feedback.overall.summary}</p>
        </CardContent>
      </Card>

      {/* Per-question feedback */}
      {QUESTIONS.map((q, index) => (
        <QuestionFeedbackCard
          key={q.key}
          t={t}
          index={index}
          prompt={t(`ielts.admissions.ps.q.${q.key}.label`) || q.prompt}
          qf={feedback.perQuestion[q.key]}
        />
      ))}

      {/* Disclaimer */}
      <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground">
        <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
        <p>
          {disclaimer ||
            t('ielts.admissions.ps.fb.disclaimer') ||
            'This is AI-generated guidance for UK-study preparation only. It is not an official UCAS or university service, and it is not a prediction or guarantee of any admissions decision.'}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline" render={<Link href="/ielts/admissions" />}>
          <FileText className="size-3.5" />
          {t('ielts.admissions.ps.fb.back') || 'Back to admissions guide'}
        </Button>
        <Button onClick={onTryAgain}>
          <Lightbulb className="size-3.5" />
          {t('ielts.admissions.ps.fb.try_again') || 'Revise and re-check'}
        </Button>
      </div>
    </section>
  )
}
