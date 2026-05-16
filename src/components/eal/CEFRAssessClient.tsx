'use client'

/**
 * CEFR productive-skill assessor — client UI.
 *
 * Replaces the "Coming soon" writing/speaking stubs with a real,
 * AI-assisted CEFR assessment. The learner reads the task framing for
 * the topic, types a written response (writing) or notes on what they
 * would say (speaking), and submits to POST /api/cefr-assess. The
 * returned `CEFRAssessmentResult` (overall band, per-criterion bands,
 * strengths / improvements / next steps, summary) is rendered with the
 * mandatory <AiGeneratedNotice />.
 *
 * Bilingual via useLocale/loc (EN + Khaleeji). Auth / subscription /
 * rate-limit / error states mirror the essay-feedback UX so the
 * experience is consistent with the rest of the product. Teal / rounded
 * EAL visual language matches MockExamClient and the topic pages.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLocale } from '@/lib/i18n/use-locale'
import { loc } from '@/lib/eal/types'
import { findEALTopic } from '@/lib/eal/curriculum'
import { CEFR_LABEL } from '@/lib/eal/cefr'
import type { CEFRAssessmentResult } from '@/lib/eal/assess'
import { AiGeneratedNotice } from '@/components/ai/AiGeneratedNotice'

type Skill = 'writing' | 'speaking'

/** Distinguishes auth/subscription errors so we can show the right CTA. */
type ErrState = { kind: 'auth' | 'subscription' | 'rate' | 'generic'; message: string }

const MIN_WORDS = 30

export function CEFRAssessClient({ slug, skill }: { slug: string; skill: Skill }) {
  const locale = useLocale()
  const isAr = locale === 'ar'
  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  const maybeTopic = findEALTopic(slug)
  if (!maybeTopic) notFound()
  // notFound() throws, so past this point the topic is defined; bind it
  // to a non-optional const so the narrowing survives into closures.
  const topic = maybeTopic

  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [err, setErr] = useState<ErrState | null>(null)
  const [result, setResult] = useState<CEFRAssessmentResult | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)

  const wordCount = useMemo(() => {
    const trimmed = text.trim()
    return trimmed ? trimmed.split(/\s+/).length : 0
  }, [text])

  const skillLabel = isAr
    ? skill === 'writing'
      ? 'الكتابة'
      : 'المحادثة'
    : skill === 'writing'
      ? 'Writing'
      : 'Speaking'

  const taskIntro =
    skill === 'writing'
      ? isAr
        ? `اكتب نصاً قصيراً (فقرة أو فقرتين) عن "${t(topic.title)}" بمستوى ${topic.cefr}. ثم سيقيّم الذكاء الاصطناعي كتابتك حسب معايير الإطار الأوروبي المرجعي (CEFR).`
        : `Write a short response (one or two paragraphs) on "${t(topic.title)}" at the ${topic.cefr} level. The AI will then assess your writing against the CEFR criteria.`
      : isAr
        ? `اكتب ما ستقوله (نص ما تريد قوله) حول "${t(topic.title)}" بمستوى ${topic.cefr}. سيقيّم الذكاء الاصطناعي استجابتك المنطوقة حسب معايير الإطار الأوروبي المرجعي (CEFR).`
        : `Type what you would say (a transcript of your spoken answer) about "${t(topic.title)}" at the ${topic.cefr} level. The AI will assess your spoken response against the CEFR criteria.`

  async function handleSubmit() {
    if (wordCount < MIN_WORDS) {
      setErr({
        kind: 'generic',
        message: isAr
          ? `اكتب ${MIN_WORDS} كلمة على الأقل قبل التقييم (المكتوب: ${wordCount}).`
          : `Please write at least ${MIN_WORDS} words before assessing (you have ${wordCount}).`,
      })
      return
    }
    setSubmitting(true)
    setErr(null)
    setResult(null)
    try {
      const res = await fetch('/api/cefr-assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skill,
          topicId: topic.id,
          band: topic.cefr,
          text: text.trim(),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        result?: CEFRAssessmentResult
        remaining?: number
        error?: string
      }

      if (!res.ok) {
        const message =
          data.error ||
          (isAr ? 'حدث خطأ. حاول مرة أخرى.' : 'Something went wrong. Please try again.')
        let kind: ErrState['kind'] = 'generic'
        if (res.status === 401) kind = 'auth'
        else if (res.status === 403) kind = 'subscription'
        else if (res.status === 429) kind = 'rate'
        setErr({ kind, message })
        return
      }

      if (data.result) {
        setResult(data.result)
        if (typeof data.remaining === 'number') setRemaining(data.remaining)
      } else {
        setErr({
          kind: 'generic',
          message: isAr
            ? 'لم نستلم تقييماً صالحاً. حاول مرة أخرى.'
            : 'We did not receive a valid assessment. Please try again.',
        })
      }
    } catch {
      setErr({
        kind: 'generic',
        message: isAr
          ? 'تعذّر الاتصال. تحقّق من الإنترنت وحاول مرة أخرى.'
          : 'Network error. Check your connection and try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setResult(null)
    setErr(null)
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-teal-600 mb-3">
        <Link href={`/eal/${slug}`}>EAL · {t(topic.title)}</Link>
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        {skillLabel} — {t(CEFR_LABEL[topic.cefr])}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed mb-6">{taskIntro}</p>

      {!result && (
        <div className="rounded-xl border border-border bg-card p-5">
          <label htmlFor="cefr-response" className="block text-sm font-medium text-foreground mb-2">
            {skill === 'writing'
              ? isAr
                ? 'اكتب إجابتك'
                : 'Write your response'
              : isAr
                ? 'اكتب ما ستقوله'
                : 'Type what you would say'}
          </label>
          <textarea
            id="cefr-response"
            dir="ltr"
            lang="en"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={skill === 'writing' ? 10 : 7}
            placeholder={
              skill === 'writing'
                ? isAr
                  ? 'اكتب فقرتك هنا بالإنجليزية…'
                  : 'Write your paragraph here in English…'
                : isAr
                  ? 'اكتب نص ما ستقوله بالإنجليزية…'
                  : 'Write out what you would say, in English…'
            }
            className="w-full min-h-[140px] resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <div className="mt-2 flex items-center justify-between">
            <span
              className={`text-xs tabular-nums ${
                wordCount < MIN_WORDS ? 'text-amber-600' : 'text-muted-foreground'
              }`}
            >
              {wordCount} {isAr ? 'كلمة' : wordCount === 1 ? 'word' : 'words'}
              {wordCount < MIN_WORDS &&
                ` (${isAr ? `الحد الأدنى ${MIN_WORDS}` : `min ${MIN_WORDS}`})`}
            </span>
            {remaining !== null && (
              <span className="text-xs text-muted-foreground">
                {isAr
                  ? `${remaining} تقييم متبقٍّ اليوم`
                  : `${remaining} ${remaining === 1 ? 'assessment' : 'assessments'} left today`}
              </span>
            )}
          </div>

          {err && <ErrorPanel err={err} isAr={isAr} />}

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {isAr
                ? 'تقييم بمساعدة الذكاء الاصطناعي — إرشادي وليس درجة رسمية.'
                : 'AI-assisted estimate — guidance, not an official grade.'}
            </p>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || wordCount < MIN_WORDS}
              className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? isAr
                  ? 'جارٍ التقييم…'
                  : 'Assessing…'
                : isAr
                  ? 'قيّم إجابتي'
                  : 'Assess my response'}
            </button>
          </div>
        </div>
      )}

      {result && <ResultView result={result} isAr={isAr} t={t} onReset={handleReset} />}

      <p className="mt-10 text-sm text-muted-foreground">
        <Link href={`/eal/${slug}`} className="underline">
          ← {isAr ? 'رجوع إلى الموضوع' : 'Back to the topic'}
        </Link>
      </p>
    </main>
  )
}

// ─── Error panel with contextual CTA ──────────────────────────────────────────

function ErrorPanel({ err, isAr }: { err: ErrState; isAr: boolean }) {
  return (
    <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/[0.06] p-4 text-sm">
      <p className="text-amber-800 dark:text-amber-300">{err.message}</p>
      {err.kind === 'auth' && (
        <Link
          href="/login"
          className="mt-3 inline-block rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700"
        >
          {isAr ? 'تسجيل الدخول' : 'Sign in'}
        </Link>
      )}
      {err.kind === 'subscription' && (
        <Link
          href="/pricing"
          className="mt-3 inline-block rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700"
        >
          {isAr ? 'الترقية إلى Premium' : 'Upgrade to Premium'}
        </Link>
      )}
      {err.kind === 'rate' && (
        <p className="mt-2 text-xs text-muted-foreground">
          {isAr
            ? 'بلغت الحد اليومي للتقييمات. حاول مرة أخرى غداً.'
            : 'You have reached the daily assessment limit. Please try again tomorrow.'}
        </p>
      )}
    </div>
  )
}

// ─── Result view ──────────────────────────────────────────────────────────────

function ResultView({
  result,
  isAr,
  t,
  onReset,
}: {
  result: CEFRAssessmentResult
  isAr: boolean
  t: (s: { en: string; ar?: string }) => string
  onReset: () => void
}) {
  return (
    <div className="space-y-6">
      <AiGeneratedNotice variant="panel" />

      {/* Overall band */}
      <div className="rounded-xl border border-teal-400/40 bg-teal-500/[0.06] p-5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal-700 mb-1">
          {isAr ? 'مستوى CEFR المقدّر' : 'Estimated CEFR level'}
        </p>
        <p className="text-2xl font-bold text-foreground">{t(CEFR_LABEL[result.band])}</p>
      </div>

      {/* Per-criterion */}
      <div>
        <h2 className="font-serif text-xl font-bold mb-3">
          {isAr ? 'التفصيل حسب المعيار' : 'Per-criterion breakdown'}
        </h2>
        <div className="space-y-3">
          {result.perCriterion.map((c, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-foreground">{t(c.name)}</span>
                <span className="rounded-full border border-teal-400/40 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-teal-700">
                  {c.band}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(c.comment)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & improvements */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-teal-700 mb-2">
            {isAr ? 'نقاط القوة' : 'Strengths'}
          </h3>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li
                key={i}
                className="rounded-lg border border-teal-300/30 bg-teal-500/[0.04] p-3 text-sm text-foreground"
              >
                {t(s)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-amber-700 mb-2">
            {isAr ? 'مجالات التحسين' : 'Improvements'}
          </h3>
          <ul className="space-y-2">
            {result.improvements.map((s, i) => (
              <li
                key={i}
                className="rounded-lg border border-amber-400/30 bg-amber-500/[0.04] p-3 text-sm text-foreground"
              >
                {t(s)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next steps */}
      <div>
        <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
          {isAr ? 'الخطوات التالية' : 'Next steps'}
        </h3>
        <ol className="space-y-2">
          {result.nextSteps.map((s, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-border bg-card p-3 text-sm text-foreground"
            >
              <span className="font-mono text-xs text-teal-600">{i + 1}.</span>
              <span>{t(s)}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-border bg-muted/30 p-4">
        <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
          {isAr ? 'الملخّص' : 'Summary'}
        </h3>
        <p className="text-sm text-foreground leading-relaxed">{t(result.summary)}</p>
      </div>

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          {isAr ? 'تقييم تقريبي بمساعدة الذكاء الاصطناعي.' : 'AI-assisted approximate assessment.'}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {isAr ? 'حاول مرة أخرى' : 'Try again'}
        </button>
      </div>
    </div>
  )
}
