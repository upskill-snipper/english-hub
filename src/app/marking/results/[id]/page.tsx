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

/* ─── Fallback mock so the page always renders ─────────────── */

const FALLBACK: StoredResult = {
  id: 'sample',
  title: 'Sample — Macbeth ambition',
  board: 'AQA',
  paper: 'English Literature — Paper 1',
  question: 'How does Shakespeare present ambition in Macbeth?',
  wordCount: 612,
  grade: 7,
  scorePercent: 82,
  submittedAt: new Date().toISOString(),
  aos: [
    {
      code: 'AO1',
      label: 'Read, understand, respond',
      score: 10,
      max: 12,
    },
    {
      code: 'AO2',
      label: 'Analyse language, form and structure',
      score: 9,
      max: 12,
    },
    {
      code: 'AO3',
      label: 'Context',
      score: 4,
      max: 6,
    },
    {
      code: 'AO4',
      label: 'Accuracy of SPaG',
      score: 3,
      max: 4,
    },
  ],
  essay:
    "Shakespeare presents ambition in Macbeth as a destructive and corrupting force that ultimately leads to the downfall of those who pursue it without moral restraint. From the outset, Macbeth is described as 'brave Macbeth', a loyal soldier whose reputation is built on heroism. However, once the witches plant the seed of prophecy, his 'vaulting ambition' quickly overwhelms his better judgement.\n\nShakespeare uses the metaphor of 'vaulting ambition, which o'erleaps itself' to suggest that ambition, when unchecked, becomes self-defeating. The equestrian imagery implies a rider attempting to mount a horse with too much force, only to fall on the other side. This foreshadows Macbeth's eventual downfall and positions ambition as inherently dangerous when divorced from virtue.\n\nContextually, a Jacobean audience would have read Macbeth's ambition through the lens of the divine right of kings. Regicide was not just treason but a sin against God's order. Shakespeare, writing during the reign of James I—himself the target of the Gunpowder Plot—deliberately uses Macbeth to reinforce the idea that usurping a divinely-appointed monarch leads to chaos and damnation.\n\nBy the end of the play, Macbeth's ambition has hollowed him out. His famous 'tomorrow and tomorrow and tomorrow' soliloquy reveals a man whose pursuit of power has robbed life of meaning. The repetition mirrors the monotony of a life devoid of purpose, and the metaphor of the 'walking shadow' reduces his existence to something insubstantial. Shakespeare thus uses Macbeth's tragic arc to warn that unrestrained ambition does not elevate—it erodes.",
}

// Fallback feedback for legacy entries that don't have AI feedback stored
const FALLBACK_STRENGTHS = [
  'Clear thesis sustained across the response',
  'Judicious use of embedded quotations supporting AO1',
  'Relevant contextual links to Jacobean politics (AO3)',
]
const FALLBACK_IMPROVEMENTS = [
  'Push analytical vocabulary beyond general description',
  'Zoom in on individual word choices for deeper AO2',
  'Maintain consistent formality in phrasing',
]
const FALLBACK_NEXT_STEPS = [
  'Develop conceptualised arguments — show the marker what the writer is DOING',
  'Integrate methods analysis at word/phrase level, not just metaphor-level',
  "Link context to the writer's intention, not just background facts",
]

/** Find the paragraph index that contains the given quote substring. */
function findParagraphForQuote(paragraphs: string[], quote: string): number {
  const normalised = quote.toLowerCase().replace(/['']/g, "'")
  return paragraphs.findIndex((p) => p.toLowerCase().replace(/['']/g, "'").includes(normalised))
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

  useEffect(() => {
    let cancelled = false

    /** Legacy path: resolve from localStorage, else the sample fallback. */
    function resolveFromLocalStorage() {
      if (cancelled) return
      try {
        const raw = localStorage.getItem('english-hub-marking-history')
        if (raw) {
          const list: StoredResult[] = JSON.parse(raw)
          const found = list.find((e) => e.id === id)
          // A server-backed stub (no AI fields yet) must NOT short-circuit to
          // a localStorage render — the server is the source of truth there.
          if (found && !(found as { serverBacked?: boolean }).serverBacked) {
            setResult(found)
            setLoaded(true)
            return
          }
        }
      } catch {
        /* ignore */
      }
      setResult(FALLBACK)
      setLoaded(true)
    }

    async function resolve() {
      // 1. Try the server marking spine first. Legacy localStorage ids
      //    (mk_…, "sample") will simply 404 here and fall through.
      try {
        const res = await fetch(`/api/marking/${encodeURIComponent(id)}`, {
          headers: { Accept: 'application/json' },
        })

        if (res.status === 404 || res.status === 405) {
          // Not a server submission (or spine not deployed) → legacy path.
          resolveFromLocalStorage()
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
        /* network/parse error — fall back to the legacy path below */
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

  if (!result) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-sm text-muted-foreground">
        {tx('marking.results.loading')}
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

  // Use real AI feedback when available, fall back to the hardcoded defaults
  // only if the stored result doesn't include AI feedback (e.g. old entries)
  const strengths: string[] = result.strengths?.length
    ? result.strengths.map((s) => s.point)
    : FALLBACK_STRENGTHS
  const improvements: string[] = result.improvements?.length
    ? result.improvements.map((s) => s.point)
    : FALLBACK_IMPROVEMENTS
  const nextGradeAdvice: string[] = result.nextStepsToNextGrade?.length
    ? result.nextStepsToNextGrade
    : FALLBACK_NEXT_STEPS

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

      {/* Accurate AI-result disclosure (EU AI Act Art 13/50) — this is a
          predicted, AI-generated, non-human-reviewed grade. */}
      <AiMarkingNotice className="mb-6" />

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
      <div className="mt-6 grid gap-6 md:grid-cols-3">
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
