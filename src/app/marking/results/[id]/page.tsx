'use client'

import { useEffect, useState, use } from 'react'
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

/* ─── Types ────────────────────────────────────────────────── */

interface FeedbackItem {
  point: string
  suggestion?: string
  quote?: string
}

interface StoredResult {
  id: string
  title: string
  board: string
  paper: string
  question?: string
  essay: string
  wordCount: number
  grade: number
  predictedGrade?: string
  gradeBand?: string
  totalMarks?: number
  maxMarks?: number
  scorePercent: number
  /** legacy localStorage key written before the confidence→scorePercent rename */
  confidence?: number
  aos: AOScore[]
  submittedAt: string
  // AI feedback fields
  strengths?: FeedbackItem[]
  improvements?: FeedbackItem[]
  nextStepsToNextGrade?: string[]
  summary?: string
}

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
 * /marking/submit has no prefill parameter, so this is the honest way to
 * carry the text across without claiming the form will be pre-populated.
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

/** The act-on-feedback block: redraft the essay, or practise the weakest AO. */
function NextStepsSection({
  tx,
  essay,
  aos,
}: {
  tx: (k: string) => string
  essay: string
  aos: AOScore[]
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
              {withFallback(
                tx,
                'marking.results.next.redraft_body',
                'Rewrite the parts the feedback picks out, then submit the new version. Choose the same board, paper and question to be marked against the same mark scheme.',
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              {essay.trim() ? <CopyEssayButton essay={essay} tx={tx} /> : null}
              <Button render={<Link href="/marking/submit" />}>
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

/* ─── Server submission (Smart IP spine) ───────────────────── */

/**
 * Shape returned by GET /api/marking/[submissionId] (built in parallel).
 * Only the fields this page consumes are typed; everything is optional so a
 * partially-populated row (e.g. AI not run yet) renders the right waiting
 * state rather than throwing.
 */
interface ServerSubmission {
  id: string
  source?: 'b2c_self' | 'b2b_class' | string
  status?: string
  examBoard?: string | null
  exam_board?: string | null
  paper?: string | null
  questionText?: string | null
  question_text?: string | null
  essayTitle?: string | null
  studentAnswer?: string | null
  essay_text?: string | null
  aiResult?: unknown
  ai_result?: unknown
  aiScore?: number | null
  aiMaxMarks?: number | null
  aiGradeBand?: string | null
  aiFeedback?: string | null
  // Final teacher decision (B2B approved path)
  finalTeacherMark?: string | null
  finalTeacherFeedback?: string | null
  teacherGrade?: string | null
  teacherComment?: string | null
}

/**
 * Decide whether the viewing student is allowed to see AI/teacher feedback.
 *
 * SAFEGUARD (hard rule): a student on a B2B / teacher-linked submission
 * ('b2b_class') may ONLY ever see feedback once a teacher has APPROVED it
 * (status === 'approved'). They must NEVER see a draft AI mark for a
 * teacher-linked submission. B2C self-study ('b2c_self') has no teacher in
 * the loop, so AI feedback is visible once the model has marked it
 * ('ai_marked') or it was later approved.
 */
function canStudentSeeFeedback(sub: ServerSubmission): boolean {
  const status = sub.status ?? ''
  const source = sub.source ?? 'b2b_class' // default to the stricter path
  if (source === 'b2b_class') {
    return status === 'approved'
  }
  // b2c_self (or any non-b2b source): AI feedback is the product.
  return status === 'ai_marked' || status === 'approved'
}

/** Map a server submission's AI result JSON into the StoredResult render shape. */
function serverToStoredResult(sub: ServerSubmission): StoredResult {
  const board = sub.examBoard ?? sub.exam_board ?? ''
  const paper = sub.paper ?? ''
  const question = sub.questionText ?? sub.question_text ?? undefined
  const essay = sub.studentAnswer ?? sub.essay_text ?? ''
  const title = sub.essayTitle?.trim() || question || 'Marked submission'

  // ai_result is the full production MarkingResult JSON when present.
  const ai = (sub.aiResult ?? sub.ai_result ?? null) as {
    predictedGrade?: string
    gradeBand?: string
    totalMarks?: number
    maxMarks?: number
    summary?: string
    strengths?: FeedbackItem[]
    improvements?: FeedbackItem[]
    nextStepsToNextGrade?: string[]
    aoScores?: Array<{
      id: string
      label: string
      marks: number
      maxMarks: number
      band?: string
      justification?: string
      evidence?: string[]
    }>
  } | null

  // Prefer the teacher's final mark/feedback when this is an approved row.
  const teacherMark = sub.finalTeacherMark ?? sub.teacherGrade ?? null
  const numericGrade =
    (teacherMark != null ? parseInt(teacherMark, 10) : NaN) ||
    (ai?.predictedGrade != null ? parseInt(ai.predictedGrade, 10) : NaN) ||
    (typeof sub.aiScore === 'number' ? sub.aiScore : 0)

  const totalMarks = ai?.totalMarks ?? (typeof sub.aiScore === 'number' ? sub.aiScore : undefined)
  const maxMarks = ai?.maxMarks ?? (typeof sub.aiMaxMarks === 'number' ? sub.aiMaxMarks : undefined)
  const scorePercent =
    totalMarks != null && maxMarks != null && maxMarks > 0
      ? Math.round((totalMarks / maxMarks) * 100)
      : 0

  const teacherFeedback = sub.finalTeacherFeedback ?? sub.teacherComment ?? null

  return {
    id: sub.id,
    title,
    board,
    paper,
    question,
    essay,
    wordCount: essay.trim() ? essay.trim().split(/\s+/).length : 0,
    grade: Number.isFinite(numericGrade) ? (numericGrade as number) : 0,
    predictedGrade: ai?.predictedGrade,
    gradeBand: ai?.gradeBand ?? sub.aiGradeBand ?? undefined,
    totalMarks,
    maxMarks,
    scorePercent,
    aos: (ai?.aoScores ?? []).map((ao) => ({
      code: ao.id,
      label: ao.label,
      score: ao.marks,
      max: ao.maxMarks,
      band: ao.band,
      justification: ao.justification,
      evidence: ao.evidence,
    })) as AOScore[],
    strengths: ai?.strengths,
    improvements: ai?.improvements,
    nextStepsToNextGrade: ai?.nextStepsToNextGrade,
    // When a teacher has finalised, surface their comment as the summary so
    // the approved feedback the student sees is the human-reviewed one.
    summary: teacherFeedback ?? ai?.summary,
    submittedAt: new Date().toISOString(),
  }
}

/* ─── Page ─────────────────────────────────────────────────── */

/** Awaiting-teacher-review state for B2B submissions not yet approved. */
function AwaitingReviewState({
  tx,
  title,
  meta,
}: {
  tx: (k: string) => string
  title: string
  meta: string
}) {
  const awaitingTitle =
    tx('marking.results.awaiting_title') === '[[marking.results.awaiting_title]]'
      ? 'Awaiting teacher review'
      : tx('marking.results.awaiting_title')
  const awaitingBody =
    tx('marking.results.awaiting_body') === '[[marking.results.awaiting_body]]'
      ? 'Your work has been submitted and is waiting for your teacher to review it. Your feedback and mark will appear here once your teacher has checked and approved them. You will not see an automated mark for teacher-set work before then.'
      : tx('marking.results.awaiting_body')
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
          <CardTitle>{awaitingTitle}</CardTitle>
          <CardDescription>{awaitingBody}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 rounded-lg border border-amber-500/40 bg-amber-500/[0.06] px-4 py-3 text-sm text-muted-foreground">
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-amber-500"
            />
            <span>
              {tx('marking.results.awaiting_status') === '[[marking.results.awaiting_status]]'
                ? 'Status: waiting for teacher approval'
                : tx('marking.results.awaiting_status')}
            </span>
          </div>
          <div className="mt-6">
            <Button variant="outline" render={<Link href="/marking/history" />}>
              {tx('marking.results.btn_back')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const tx = useT()
  const { id } = use(params)
  const [result, setResult] = useState<StoredResult | null>(null)
  const [loaded, setLoaded] = useState(false)
  /** Set when the server says this is a teacher-linked row not yet approved. */
  const [awaiting, setAwaiting] = useState<{ title: string; meta: string } | null>(null)
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
            // SAFEGUARD: students only ever see APPROVED feedback for
            // teacher-linked (b2b_class) work; B2C self-study sees AI
            // feedback once marked. Anything else → awaiting state.
            if (!cancelled) {
              if (canStudentSeeFeedback(sub)) {
                setResult(stored)
              } else {
                const meta = [stored.board, stored.paper, stored.question]
                  .filter(Boolean)
                  .join(' · ')
                setAwaiting({ title: stored.title, meta })
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

  if (awaiting) {
    return <AwaitingReviewState tx={tx} title={awaiting.title} meta={awaiting.meta} />
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

      {/* Accurate AI-result disclosure (EU AI Act Art 13/50) - this is a
          predicted, AI-generated, non-human-reviewed grade. */}
      <AiMarkingNotice className="mb-6" />

      {/* Listen to feedback - free browser read-aloud (helpful for EAL learners). */}
      {hasAnyFeedback && (
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
      <NextStepsSection tx={tx} essay={result.essay} aos={result.aos} />

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
