'use client'

// ─── Personal-Statement Coach — AI feedback ──────────────────────────────────
// Paste a UCAS personal-statement draft, optionally add the intended course and
// university, watch a live word + character count (UCAS caps at 4,000 chars /
// 47 lines), then POST to /api/ielts/statement-feedback and render structured
// AI feedback: a per-dimension rating + comment (Structure & flow, Motivation &
// fit, Evidence & specifics, Reflection & insight, English quality), strengths,
// exactly three concrete improvements, and an overall comment.
//
// AI opt-out / paywall / over-limit / loading / error states mirror the IELTS
// Writing page (src/app/ielts/writing/page.tsx) and the critic page's card
// aesthetic. Copy is bilingual-ready via useT() with inline English fallbacks.
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
import { Input } from '@/components/ui/input'
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

interface StatementFeedback {
  sections: StatementSection[]
  strengths: string[]
  improvements: string[]
  overallComment: string
}

interface ApiSuccess {
  feedback: StatementFeedback
  disclaimer: string
}

// UCAS limits, surfaced to the writer as soft guidance (the server validates
// length authoritatively).
const UCAS_CHAR_LIMIT = 4000

// ─── Helpers ──────────────────────────────────────────────────────────────

function countWords(text: string): number {
  const trimmed = text.trim()
  if (trimmed.length === 0) return 0
  return trimmed.split(/\s+/).length
}

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

/** Validate that an unknown API payload is a usable StatementFeedback. */
function isStatementFeedback(value: unknown): value is StatementFeedback {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    Array.isArray(v.sections) &&
    Array.isArray(v.strengths) &&
    Array.isArray(v.improvements) &&
    typeof v.overallComment === 'string'
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function PersonalStatementCoachPage() {
  // The ielts.admissions.ps.* keys are now defined (EN + Khaleeji AR) in
  // src/lib/i18n/dictionary-ielts-admissions.ts, so lookups resolve. The
  // wrapper below is kept as a harmless guard: should any key be missing,
  // useT()/lookup() returns "[[key]]" (truthy), which would defeat the
  // `t(key) || '…'` fallbacks; coercing it to '' lets the inline English
  // fallback render instead of a literal "[[…]]".
  const tBase = useT()
  const t = (key: string): string => {
    const v = tBase(key)
    return v.startsWith('[[') ? '' : v
  }

  const [statement, setStatement] = useState('')
  const [course, setCourse] = useState('')
  const [university, setUniversity] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paywalled, setPaywalled] = useState(false)
  const [feedback, setFeedback] = useState<StatementFeedback | null>(null)
  const [disclaimer, setDisclaimer] = useState<string>('')

  // Children's Code AI opt-out — gate the whole tool client-side, then the API
  // enforces it authoritatively server-side too.
  const [aiOff, setAiOff] = useState(false)
  useEffect(() => {
    setAiOff(isAiOptedOut())
  }, [])

  const wordCount = useMemo(() => countWords(statement), [statement])
  const charCount = statement.length
  const overLimit = charCount > UCAS_CHAR_LIMIT
  const canSubmit = statement.trim().length >= 200 && !isSubmitting

  const handleSubmit = useCallback(async () => {
    if (!canSubmit) return
    setIsSubmitting(true)
    setError(null)
    setPaywalled(false)

    try {
      const res = await fetch('/api/ielts/statement-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          statement,
          course: course.trim() || undefined,
          university: university.trim() || undefined,
        }),
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
  }, [canSubmit, statement, course, university])

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
          {t('ielts.admissions.ps.eyebrow') || 'AI feedback — UCAS personal statement'}
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          {t('ielts.admissions.ps.title') || 'Personal-Statement Coach'}
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          {t('ielts.admissions.ps.subtitle') ||
            'Paste a draft of your UCAS personal statement and get honest, specific feedback on structure, motivation, evidence, reflection and English — plus three concrete things to fix in your next draft.'}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>
            {(
              t('ielts.admissions.ps.limit_note') ||
              'UCAS allows up to {chars} characters (about {words} words) across {lines} lines.'
            )
              .replace('{chars}', UCAS_CHAR_LIMIT.toLocaleString())
              .replace('{words}', '500–650')
              .replace('{lines}', '47')}
          </span>
        </div>
      </section>

      {/* ── Draft workspace ───────────────────────────────────────── */}
      {!feedback && (
        <section className="space-y-5">
          {/* Optional course / university */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="ps-course">
                {t('ielts.admissions.ps.course_label') || 'Intended course'}{' '}
                <span className="font-normal text-muted-foreground">
                  {t('ielts.admissions.ps.optional') || '(optional)'}
                </span>
              </Label>
              <Input
                id="ps-course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder={t('ielts.admissions.ps.course_placeholder') || 'e.g. BSc Economics'}
                maxLength={200}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ps-university">
                {t('ielts.admissions.ps.university_label') || 'Target university'}{' '}
                <span className="font-normal text-muted-foreground">
                  {t('ielts.admissions.ps.optional') || '(optional)'}
                </span>
              </Label>
              <Input
                id="ps-university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder={
                  t('ielts.admissions.ps.university_placeholder') || 'e.g. University of Manchester'
                }
                maxLength={200}
              />
            </div>
          </div>

          {/* Draft textarea */}
          <div className="space-y-1.5">
            <Label htmlFor="ps-statement">
              {t('ielts.admissions.ps.draft_label') || 'Your personal statement draft'}
            </Label>
            <Textarea
              id="ps-statement"
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              placeholder={
                t('ielts.admissions.ps.draft_placeholder') ||
                'Paste your full personal statement here — opening, why this subject, your evidence and reflection, and a forward-looking close…'
              }
              rows={18}
              className="resize-y leading-relaxed"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-muted-foreground">
                {wordCount}{' '}
                {wordCount === 1
                  ? t('ielts.admissions.ps.word') || 'word'
                  : t('ielts.admissions.ps.words') || 'words'}
                <span
                  className={overLimit ? 'ml-2 text-destructive' : 'ml-2 text-muted-foreground'}
                >
                  {' '}
                  {(t('ielts.admissions.ps.char_count') || '· {count} / {limit} characters')
                    .replace('{count}', charCount.toLocaleString())
                    .replace('{limit}', UCAS_CHAR_LIMIT.toLocaleString())}
                </span>
              </span>
              {statement.trim().length > 0 && statement.trim().length < 200 && (
                <span className="text-muted-foreground">
                  {t('ielts.admissions.ps.too_short') ||
                    'Paste a fuller draft (at least a paragraph or two) to get useful feedback.'}
                </span>
              )}
              {overLimit && (
                <span className="text-destructive">
                  {t('ielts.admissions.ps.over_limit') ||
                    'Over the UCAS limit — you’ll still get feedback, including where to cut.'}
                </span>
              )}
            </div>
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
                  <Link href="/pricing" className="font-semibold underline underline-offset-2">
                    {t('ielts.admissions.ps.view_premium') || 'View Premium plans'}
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
                  {t('ielts.admissions.ps.submitting') || 'Reading your statement…'}
                </span>
              ) : (
                t('ielts.admissions.ps.submit') || 'Get feedback'
              )}
            </Button>
          </div>
          {isSubmitting && (
            <p className="text-center text-xs text-muted-foreground">
              {t('ielts.admissions.ps.submitting_note') ||
                'This usually takes 15–30 seconds. Please don’t close the page.'}
            </p>
          )}

          {/* Privacy / guidance note */}
          <p className="text-center text-[11px] text-muted-foreground/70">
            {t('ielts.admissions.ps.privacy_note') ||
              'Your draft is sent only to generate feedback. This is guidance for UK-study preparation, not an official UCAS or university service.'}
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

/** A compact 0–5 quality meter. Original visual — not an IELTS band chip. */
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
        <h3 className="text-sm font-semibold text-foreground">{section.label}</h3>
        <RatingMeter rating={section.rating} />
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{section.comment}</p>
    </div>
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
  const avg =
    feedback.sections.length > 0
      ? feedback.sections.reduce((sum, s) => sum + s.rating, 0) / feedback.sections.length
      : 0

  return (
    <section className="space-y-6">
      {/* Overall comment */}
      <Card className="border-sky-500/20 bg-sky-500/[0.03]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-5 text-sky-400" />
            <CardTitle className="text-heading-sm font-heading">
              {t('ielts.admissions.ps.fb.overall') || 'Overall'}
            </CardTitle>
            <Badge variant="secondary" className="ml-auto tabular-nums">
              {(t('ielts.admissions.ps.fb.average') || '{score}/5 average').replace(
                '{score}',
                avg.toFixed(1),
              )}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-foreground">
            {feedback.overallComment ||
              t('ielts.admissions.ps.fb.overall_fallback') ||
              'Your statement has been reviewed against each dimension below.'}
          </p>
        </CardContent>
      </Card>

      {/* Per-dimension ratings */}
      <div className="grid gap-4 sm:grid-cols-2">
        {feedback.sections.map((s) => (
          <SectionCard key={s.label} section={s} />
        ))}
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
              <CheckCircle2 className="size-4" />
              {t('ielts.admissions.ps.fb.strengths') || 'What’s working'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Improvements (exactly three from the rubric) */}
      {feedback.improvements.length > 0 && (
        <Card className="border-amber-500/20 bg-amber-500/[0.02]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-amber-500">
              <TrendingUp className="size-4" />
              {t('ielts.admissions.ps.fb.improve_title') || 'Three things to improve next'}
            </CardTitle>
            <CardDescription>
              {t('ielts.admissions.ps.fb.improve_desc') ||
                'Concrete changes to make in your next draft — not a rewrite to copy.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {feedback.improvements.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-[11px] font-semibold text-amber-500">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {/* Next steps */}
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Lightbulb className="size-4 text-primary" />
            {t('ielts.admissions.ps.fb.keep_going') || 'Keep going'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            {t('ielts.admissions.ps.fb.keep_going_p1') ||
              'Redraft using the three points above, then run it through the coach again to see what moved.'}
          </p>
          <p>
            {t('ielts.admissions.ps.fb.keep_going_p2_pre') ||
              'Need to lift your English score for entry too?'}{' '}
            <Link href="/ielts/writing" className="text-primary underline-offset-2 hover:underline">
              {t('ielts.admissions.ps.fb.keep_going_link_writing') ||
                'Practise IELTS Academic Writing'}
            </Link>{' '}
            {t('ielts.admissions.ps.fb.keep_going_mid') || 'or revisit the'}{' '}
            <Link
              href="/ielts/admissions"
              className="text-primary underline-offset-2 hover:underline"
            >
              {t('ielts.admissions.ps.fb.keep_going_link_guide') || 'UK admissions guide'}
            </Link>
            .
          </p>
        </CardContent>
      </Card>

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
          {t('ielts.admissions.ps.fb.try_again') || 'Revise and re-check'}
        </Button>
      </div>
    </section>
  )
}
