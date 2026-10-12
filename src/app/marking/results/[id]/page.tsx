'use client'

import { useEffect, useState, use } from 'react'
import { markResultOpened } from '@/lib/dashboard/first-week'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GradePredictionCard } from '@/components/marking/GradePredictionCard'
import { AiMarkingNotice } from '@/components/ai/AiMarkingNotice'
import { AOBreakdown, type AOScore } from '@/components/marking/AOBreakdown'
import { AnnotatedEssay, type Annotation } from '@/components/marking/AnnotatedEssay'
import { RequestHumanReviewButton } from '@/components/ai/RequestHumanReviewButton'
import { useT } from '@/lib/i18n/use-t'
import { ReadAloudButton } from '@/components/speech/ReadAloudButton'
import { ReviewDecisionCard, SchoolReviewNote } from '@/components/marking/ReviewDecisionCard'
import {
  canStudentSeeFeedback,
  hiddenStateFor,
  redraftLink,
  serverToStoredResult,
  type HiddenState,
  type ServerSubmission,
  type StoredResult,
} from '@/lib/marking/results-view'

/* ─── Types ────────────────────────────────────────────────── */
// The render shape, the server row and the visibility rule live in
// src/lib/marking/results-view.ts, where they are tested.

/* ─── No fallback data. Ever. ────────────────────────────────
 *
 * Until 2026-08-18 this file carried a complete fabricated result - a
 * Grade 7 / 82% Macbeth essay with AO scores - that rendered as the
 * student's own work whenever an id could not be resolved (second
 * device, cleared storage, stale link, or simply being signed out:
 * the 401 from the API fell through to it too). Three arrays of
 * generic Macbeth advice were likewise substituted into the
 * strengths / improvements / next-steps cards of REAL results that
 * lacked stored feedback, and fed to the read-aloud feature as if
 * the model had written them about the student's essay.
 *
 * On a children's product that is a fabricated attainment record.
 * Unresolvable ids now render an explicit not-found (or sign-in)
 * state, and missing feedback renders an honest note - never
 * invented praise for "contextual links to Jacobean politics" on an
 * essay about a different text.
 */

/** Find the paragraph index that contains the given quote substring. */
function findParagraphForQuote(paragraphs: string[], quote: string): number {
  const normalised = quote.toLowerCase().replace(/['']/g, "'")
  return paragraphs.findIndex((p) => p.toLowerCase().replace(/['']/g, "'").includes(normalised))
}

/* ─── Act on the feedback (2026-08-23) ───────────────────────
 *
 * DEFECT: the marking loop dead-ended here. The student was shown a
 * weakest Assessment Objective and then offered nothing but "back to
 * history" and "mark another essay" - no route from "here is your
 * weakness" to "do something about it".
 *
 * Everything below turns the feedback into concrete destinations that
 * were checked to exist in src/app (none of them subscription-gated:
 * only /revision/study-plan, /revision/analytics and /mock-exams/[id]
 * sit behind requireSubscription). No progress claim, no predicted
 * improvement - the only figures shown are the marks already awarded.
 */

interface PractiseTarget {
  href: string
  /** Dictionary key for the link label. */
  key: string
  /** English text used until the generated locale maps are rebuilt by prebuild. */
  fallback: string
}

/**
 * Resolve a key, falling back to English while the key is not yet in the
 * pre-generated locale maps that useT() reads (scripts/generate-i18n-locales
 * runs in `prebuild`). Same defensive pattern as AwaitingReviewState above.
 */
function withFallback(tx: (k: string) => string, key: string, fallback: string): string {
  const value = tx(key)
  return value === `[[${key}]]` ? fallback : value
}

/**
 * Pick the revision destination for one Assessment Objective.
 *
 * Routed on the AO LABEL, never on the code: AO numbering is not stable
 * across specifications - on AQA Literature AO4 is technical accuracy, on
 * AQA Language AO4 is evaluating texts critically - so mapping "AO4" to a
 * fixed page would send half of students to the wrong guide. An unmatched
 * label falls back to the exam technique hub, which covers every objective.
 */
function practiseTargetForAo(ao: AOScore): PractiseTarget {
  const label = `${ao.code ?? ''} ${ao.label ?? ''}`.toLowerCase()

  if (label.includes('context')) {
    return {
      href: '/resources/context',
      key: 'marking.results.next.dest.context',
      fallback: 'Revise historical context',
    }
  }
  if (/technical accuracy|spelling|punctuation|grammar/.test(label)) {
    return {
      href: '/revision/language/spag',
      key: 'marking.results.next.dest.spag',
      fallback: 'Practise spelling, punctuation and grammar',
    }
  }
  if (/content and organisation|creative|communicat/.test(label)) {
    return {
      href: '/resources/writing-skills',
      key: 'marking.results.next.dest.writing',
      fallback: 'Work on content and organisation',
    }
  }
  if (/evaluat/.test(label)) {
    return {
      href: '/revision/language/reading',
      key: 'marking.results.next.dest.reading',
      fallback: 'Practise reading and evaluation skills',
    }
  }
  if (/compar|contrast|relate texts/.test(label)) {
    return {
      href: '/revision/exam-technique/question-types',
      key: 'marking.results.next.dest.question_types',
      fallback: 'Revise what each question is asking',
    }
  }
  if (/read, understand|respond|reference|quotation/.test(label)) {
    return {
      href: '/revision/exam-technique/essay-structure',
      key: 'marking.results.next.dest.essay_structure',
      fallback: 'Revise essay structure',
    }
  }
  if (/identify|interpret|synthes|summaris|retriev/.test(label)) {
    return {
      href: '/revision/language/reading',
      key: 'marking.results.next.dest.reading',
      fallback: 'Practise reading and evaluation skills',
    }
  }
  if (/analys|language|structure|form|terminology/.test(label)) {
    return {
      href: '/resources/techniques',
      key: 'marking.results.next.dest.techniques',
      fallback: 'Revise language and structure techniques',
    }
  }
  return {
    href: '/revision/exam-technique',
    key: 'marking.results.next.dest.exam_technique',
    fallback: 'Open the exam technique guides',
  }
}

/**
 * The AO with the lowest proportion of its available marks, or null when the
 * submission carries no usable AO breakdown. Never guesses: an entry with no
 * max marks is skipped rather than treated as zero.
 */
function weakestAo(aos: AOScore[]): AOScore | null {
  const scored = aos.filter(
    (ao) => ao && Number.isFinite(ao.max) && ao.max > 0 && Number.isFinite(ao.score),
  )
  if (scored.length === 0) return null
  return scored.reduce((worst, ao) => (ao.score / ao.max < worst.score / worst.max ? ao : worst))
}

/**
 * Leading "AOn - " that model output often repeats inside the AO label.
 * Built from a string so the en/em dashes stay as unicode escapes rather
 * than literal characters, which keeps a repo-wide dash sweep clean.
 */
const AO_CODE_PREFIX = new RegExp('^AO\\s*\\d+\\s*[-:\\u2013\\u2014]\\s*', 'i')

/** "AO2 (Analyse language, form and structure)" without repeating the code. */
function aoDisplayName(ao: AOScore): string {
  const label = (ao.label ?? '').trim()
  // Model output often repeats the code inside the label ("AO2 - Analyse ...").
  const stripped = label.replace(AO_CODE_PREFIX, '').trim()
  if (!stripped) return ao.code
  return ao.code ? `${ao.code} (${stripped})` : stripped
}

/**
 * Copies the student's own essay so they can paste it into a redraft.
 * "Submit a new version" pre-fills the board, paper and question, but not the
 * essay, which does not belong in a URL; this is the honest way to carry the
 * text across.
 */
function CopyEssayButton({ essay, tx }: { essay: string; tx: (k: string) => string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  async function copy() {
    try {
      await navigator.clipboard.writeText(essay)
      setState('copied')
    } catch {
      // Clipboard API is unavailable in insecure contexts and some in-app
      // browsers. Say so rather than silently doing nothing.
      setState('failed')
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Button variant="outline" onClick={() => void copy()}>
        {withFallback(tx, 'marking.results.next.copy_cta', 'Copy my essay')}
      </Button>
      <p aria-live="polite" className="text-xs text-muted-foreground">
        {state === 'copied' &&
          withFallback(tx, 'marking.results.next.copy_done', 'Copied to your clipboard')}
        {state === 'failed' &&
          withFallback(
            tx,
            'marking.results.next.copy_failed',
            'Copying did not work in this browser. You can select the essay text further down the page.',
          )}
      </p>
    </div>
  )
}

/**
 * The act-on-feedback block: redraft the essay, or practise the weakest AO.
 *
 * A DEFECT, FIXED 12 OCTOBER 2026: "Submit a new version" went to a bare
 * /marking/submit, so a pupil redrafting had to find the board, paper and
 * question again, and a wrong pick marked the new version against a different
 * scheme. The submit page has read them from its URL since 19 September, so
 * the link now carries them (redraftLink in src/lib/marking/results-view.ts).
 */
function NextStepsSection({
  tx,
  essay,
  aos,
  redraft,
}: {
  tx: (k: string) => string
  essay: string
  aos: AOScore[]
  redraft: { href: string; prefilled: boolean }
}) {
  const weakest = weakestAo(aos)
  const target = weakest ? practiseTargetForAo(weakest) : null

  return (
    <section aria-labelledby="next-steps-heading" className="mt-8">
      <h2
        id="next-steps-heading"
        className="font-heading text-xl font-bold tracking-tight text-foreground"
      >
        {withFallback(tx, 'marking.results.next.heading', 'What to do next')}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {withFallback(
          tx,
          'marking.results.next.subheading',
          'Act on this feedback while it is fresh.',
        )}
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {/* Redraft and resubmit */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle>
              {withFallback(tx, 'marking.results.next.redraft_title', 'Redraft this essay')}
            </CardTitle>
            <CardDescription>
              {redraft.prefilled
                ? withFallback(
                    tx,
                    'marking.results.next.redraft_body_prefilled',
                    'Rewrite the parts the feedback picks out, then submit the new version. The board, paper and question are filled in for you, so it is marked against the same mark scheme.',
                  )
                : withFallback(
                    tx,
                    'marking.results.next.redraft_body',
                    'Rewrite the parts the feedback picks out, then submit the new version. Choose the same board, paper and question to be marked against the same mark scheme.',
                  )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              {essay.trim() ? <CopyEssayButton essay={essay} tx={tx} /> : null}
              <Button render={<Link href={redraft.href} />}>
                {withFallback(tx, 'marking.results.next.redraft_cta', 'Submit a new version')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Targeted practice for the weakest AO (or an honest generic card) */}
        <Card>
          <CardHeader>
            <CardTitle>
              {weakest
                ? withFallback(
                    tx,
                    'marking.results.next.practise_title',
                    'Practise your lowest-scoring objective',
                  )
                : withFallback(
                    tx,
                    'marking.results.next.practise_generic_title',
                    'Practise your exam technique',
                  )}
            </CardTitle>
            <CardDescription>
              {weakest
                ? withFallback(
                    tx,
                    'marking.results.next.practise_scored',
                    'Your lowest mark in this essay was {ao}: {score} out of {max}.',
                  )
                    .replace('{ao}', aoDisplayName(weakest))
                    .replace('{score}', String(weakest.score))
                    .replace('{max}', String(weakest.max))
                : withFallback(
                    tx,
                    'marking.results.next.practise_generic_body',
                    'No assessment objective breakdown was stored for this submission, so there is no single weakness to target. These guides cover every objective.',
                  )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href={target ? target.href : '/revision/exam-technique'} />}
                variant="outline"
              >
                {target
                  ? withFallback(tx, target.key, target.fallback)
                  : withFallback(
                      tx,
                      'marking.results.next.dest.exam_technique',
                      'Open the exam technique guides',
                    )}
              </Button>
              <Button variant="outline" render={<Link href="/resources/model-answers" />}>
                {withFallback(tx, 'marking.results.next.dest.model_answers', 'See model answers')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

/* ─── Results a pupil may not see yet ──────────────────────── */

/** Copy for each hidden state: dictionary key and the English used until the maps are rebuilt. */
const HIDDEN_COPY: Record<HiddenState, { title: [string, string]; body: [string, string] }> = {
  unmarked: {
    title: ['marking.results.unmarked_title', 'Not marked yet'],
    body: [
      'marking.results.unmarked_body',
      'This essay was saved but has not been marked yet. If marking did not finish, submit it again from Mark an essay.',
    ],
  },
  reviewing: {
    title: ['marking.results.reviewing_title', 'Your teacher is reviewing this mark'],
    body: [
      'marking.results.reviewing_body',
      "Your teacher is checking the AI's mark for this essay and may change it. Their decision will appear here when they have finished.",
    ],
  },
  rejected: {
    title: ['marking.results.rejected_title', 'No mark has been released'],
    body: [
      'marking.results.rejected_body',
      'Your teacher has reviewed this essay and has not released a mark for it. Ask your teacher if you would like to know why.',
    ],
  },
  unavailable: {
    title: ['marking.results.unavailable_title', 'This result is not available'],
    body: [
      'marking.results.unavailable_body',
      'The result for this essay cannot be shown at the moment.',
    ],
  },
}

/**
 * A result the pupil may not see yet, with a message that is true for its
 * status. Until 12 October 2026 every such row, a self-study essay that had
 * simply not been marked included, said it was waiting for a teacher and
 * promised no automated mark before then. A school pupil now sees their AI
 * mark straight away, so that promise is no longer made anywhere.
 */
function HiddenResultState({
  tx,
  state,
  title,
  meta,
}: {
  tx: (k: string) => string
  state: HiddenState
  title: string
  meta: string
}) {
  const copy = HIDDEN_COPY[state]
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              {tx('marking.nav.marking')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">{tx('marking.results.breadcrumb')}</li>
        </ol>
      </nav>

      <header className="mb-6 flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
        {meta && <p className="text-sm text-muted-foreground">{meta}</p>}
      </header>

      <Card>
        <CardHeader>
          <CardTitle>{withFallback(tx, ...copy.title)}</CardTitle>
          <CardDescription>{withFallback(tx, ...copy.body)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" render={<Link href="/marking/history" />}>
              {tx('marking.results.btn_back')}
            </Button>
            {state === 'unmarked' && (
              <Button render={<Link href="/marking/submit" />}>{tx('header.nav.marking')}</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const tx = useT()
  const { id } = use(params)
  const [result, setResult] = useState<StoredResult | null>(null)

  /**
   * UX-4, step three of the first-fortnight checklist: the student has opened
   * their feedback.
   *
   * Keyed off `result` rather than called at each `setResult` site, because
   * there are two of them - a localStorage render and the server spine - and a
   * marker added at one would quietly miss half the students. It deliberately
   * does NOT fire for a hidden result: work with no visible mark has not been
   * read by anyone.
   */
  useEffect(() => {
    if (result) markResultOpened()
  }, [result])
  const [loaded, setLoaded] = useState(false)
  /** Set when the server row exists but its result is not the pupil's to see yet. */
  const [hidden, setHidden] = useState<{ state: HiddenState; title: string; meta: string } | null>(
    null,
  )
  /** Terminal resolution failures get their own honest screens. */
  const [failure, setFailure] = useState<'not_found' | 'signin' | null>(null)

  useEffect(() => {
    let cancelled = false

    /** Legacy path: resolve from localStorage, else an explicit not-found. */
    function resolveFromLocalStorage() {
      if (cancelled) return
      try {
        const raw = localStorage.getItem('english-hub-marking-history')
        if (raw) {
          const list: StoredResult[] = JSON.parse(raw)
          const found = list.find((e) => e.id === id)
          // A server-backed stub (no AI fields yet) must NOT short-circuit to
          // a localStorage render - the server is the source of truth there.
          if (found && !(found as { serverBacked?: boolean }).serverBacked) {
            setResult(found)
            setLoaded(true)
            return
          }
        }
      } catch {
        /* ignore */
      }
      setFailure('not_found')
      setLoaded(true)
    }

    async function resolve() {
      // 1. Try the server marking spine first. Legacy localStorage ids
      //    (mk_…) will simply 404 here and fall through.
      try {
        const res = await fetch(`/api/marking/${encodeURIComponent(id)}`, {
          headers: { Accept: 'application/json' },
        })

        if (res.status === 404 || res.status === 405) {
          // Not a server submission (or spine not deployed) → legacy path.
          resolveFromLocalStorage()
          return
        }

        if (res.status === 401 || res.status === 403) {
          // A signed-out (or wrong-account) viewer must get a sign-in
          // prompt - NOT a localStorage lookup that used to end in a
          // fabricated sample result.
          if (!cancelled) {
            setFailure('signin')
            setLoaded(true)
          }
          return
        }

        if (res.ok) {
          const body = await res.json().catch(() => null)
          const sub: ServerSubmission | null =
            body && typeof body === 'object'
              ? ((body.submission ?? body) as ServerSubmission)
              : null

          if (sub && sub.id) {
            const stored = serverToStoredResult(sub)
            // The one visibility rule, the same function the API applies:
            // AI feedback once marked, for class work as for self-study, and
            // a teacher's decision once made. Anything else gets a message
            // that is true for its status.
            if (!cancelled) {
              if (canStudentSeeFeedback(sub)) {
                setResult(stored)
              } else {
                const meta = [stored.board, stored.paper, stored.question]
                  .filter(Boolean)
                  .join(' · ')
                setHidden({ state: hiddenStateFor(sub), title: stored.title, meta })
              }
              setLoaded(true)
            }
            return
          }
        }
      } catch {
        /* network/parse error - fall back to the legacy path below */
      }
      resolveFromLocalStorage()
    }

    void resolve()
    return () => {
      cancelled = true
    }
  }, [id])

  if (!loaded) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-sm text-muted-foreground">
        {tx('marking.results.loading')}
      </div>
    )
  }

  if (hidden) {
    return (
      <HiddenResultState tx={tx} state={hidden.state} title={hidden.title} meta={hidden.meta} />
    )
  }

  if (failure || !result) {
    const signin = failure === 'signin'
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {tx(signin ? 'marking.results.signin_title' : 'marking.results.not_found_title')}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {tx(signin ? 'marking.results.signin_body' : 'marking.results.not_found_body')}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {signin ? (
            <Button
              render={
                <Link
                  href={`/auth/login?redirect=${encodeURIComponent(`/marking/results/${id}`)}`}
                />
              }
            >
              {tx('header.cta.login')}
            </Button>
          ) : (
            <>
              <Button variant="outline" render={<Link href="/marking/history" />}>
                {tx('marking.results.btn_history')}
              </Button>
              <Button render={<Link href="/marking/submit" />}>
                {tx('marking.results.btn_new')}
              </Button>
            </>
          )}
        </div>
      </div>
    )
  }

  // Build paragraphs from essay body
  const paragraphs = result.essay
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  // Build annotations from AO evidence quotes if available
  const annotations: Annotation[] = result.aos
    .flatMap((ao, aoIdx) => {
      const evidence = (ao as AOScore & { evidence?: string[] }).evidence
      if (!Array.isArray(evidence)) return []
      return evidence.map((quote, evIdx) => ({
        id: `ao${aoIdx}-ev${evIdx}`,
        paragraphIndex: findParagraphForQuote(paragraphs, quote),
        quote,
        kind: 'technique' as const,
        comment:
          (ao as AOScore & { justification?: string }).justification ?? `${ao.code}: ${ao.label}`,
      }))
    })
    .filter((a) => a.paragraphIndex >= 0 && a.paragraphIndex < paragraphs.length)

  // Real AI feedback only. Legacy entries with none stored render an honest
  // note (below) instead of the generic Macbeth advice that used to be
  // substituted here - confidently wrong praise is worse than an empty card.
  const strengths: string[] = result.strengths?.map((s) => s.point) ?? []
  const improvements: string[] = result.improvements?.map((s) => s.point) ?? []
  const nextGradeAdvice: string[] = result.nextStepsToNextGrade ?? []
  const hasAnyFeedback =
    strengths.length > 0 ||
    improvements.length > 0 ||
    nextGradeAdvice.length > 0 ||
    !!result.summary

  // Combined feedback text for free browser read-aloud (accessibility / EAL).
  const feedbackToRead = [
    result.review?.comment ? `Comments. ${result.review.comment}` : '',
    result.summary ? `Summary. ${result.summary}` : '',
    strengths.length ? `Strengths. ${strengths.join('. ')}.` : '',
    improvements.length ? `Areas to improve. ${improvements.join('. ')}.` : '',
    nextGradeAdvice.length ? `To reach the next grade. ${nextGradeAdvice.join('. ')}.` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              {tx('marking.nav.marking')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">{tx('marking.results.breadcrumb')}</li>
        </ol>
      </nav>

      <header className="mb-6 flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          {result.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {result.board} · {result.paper}
          {result.question && ` · ${result.question}`} · {result.wordCount} words
        </p>
      </header>

      {/* A person's decision comes first and stands apart from the AI's
          result, so a pupil can always tell which mark is whose. */}
      {result.review && <ReviewDecisionCard review={result.review} className="mb-6" />}

      {/* Accurate AI-result disclosure (EU AI Act Art 13/50). Until a person
          has reviewed the essay this is a predicted, AI-generated,
          non-human-reviewed grade; once they have, the notice says so rather
          than claiming no human has checked it. */}
      <AiMarkingNotice className="mb-6" reviewed={Boolean(result.review)} />

      {/* Class work: the AI mark is shown straight away, and the pupil is told
          their teacher will review it (Calum's decision, 12 October 2026). */}
      {result.schoolWork && !result.review && <SchoolReviewNote className="mb-6" />}

      {/* Listen to feedback - free browser read-aloud (helpful for EAL learners). */}
      {(hasAnyFeedback || !!result.review?.comment) && (
        <div className="mb-6 flex justify-end">
          <ReadAloudButton text={feedbackToRead} label="Listen to feedback" lang="en-GB" />
        </div>
      )}

      {/* ── Grade + AO side-by-side ───────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <GradePredictionCard
          grade={result.grade}
          scorePercent={result.scorePercent ?? result.confidence ?? 0}
          paperLabel={`${result.board} · ${result.paper}`}
        />
        <AOBreakdown scores={result.aos} />
      </div>

      {/* ── Feedback columns ──────────────────────────────── */}
      {/* Legacy entries with no stored AI feedback get an honest note, not
          three cards of substituted generic advice (removed 2026-08-18). */}
      {!hasAnyFeedback && (
        <Card className="mt-6 border-border/60 bg-muted/30">
          <CardContent className="py-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tx('marking.results.no_feedback_note')}
            </p>
          </CardContent>
        </Card>
      )}
      <div className={hasAnyFeedback ? 'mt-6 grid gap-6 md:grid-cols-3' : 'hidden'}>
        <Card>
          <CardHeader>
            <CardTitle>{tx('marking.results.card_strengths')}</CardTitle>
            <CardDescription>{tx('marking.results.card_strengths_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {strengths.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{tx('marking.results.card_improve')}</CardTitle>
            <CardDescription>{tx('marking.results.card_improve_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {improvements.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle>
              {tx('marking.results.card_next_grade_prefix')} {Math.min(9, result.grade + 1)}
            </CardTitle>
            <CardDescription>{tx('marking.results.card_next_grade_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {nextGradeAdvice.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ── Summary ─────────────────────────────────────────── */}
      {result.summary && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{tx('marking.results.card_summary')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-foreground">{result.summary}</p>
          </CardContent>
        </Card>
      )}

      {/* ── Act on this feedback ──────────────────────────────
          Closes the marking loop: before this the page ended at the
          feedback with no way to act on it. */}
      <NextStepsSection
        tx={tx}
        essay={result.essay}
        aos={result.aos}
        redraft={redraftLink(result)}
      />

      {/* ── Annotated essay ───────────────────────────────── */}
      <div className="mt-6">
        <AnnotatedEssay paragraphs={paragraphs} annotations={annotations} />
      </div>

      {/* ── Human oversight (EU AI Act Art 14) ────────────── */}
      <div className="mt-8 border-t pt-6">
        <RequestHumanReviewButton submissionRef={result.id} context="marking" />
      </div>

      {/* ── Footer actions ────────────────────────────────── */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking/history" />}>
          {tx('marking.results.btn_back')}
        </Button>
        <Button render={<Link href="/marking/submit" />}>
          {tx('marking.results.btn_another')}
        </Button>
      </div>
    </div>
  )
}
