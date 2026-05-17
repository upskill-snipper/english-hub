'use client'

import { useMemo, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { isAiOptedOut } from '@/lib/ai-preferences'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MARK_SCHEMES, type MarkScheme } from '@/lib/marking/mark-schemes'
import { useT } from '@/lib/i18n/use-t'

/* ─── Board catalogue ──────────────────────────────────────── */

/**
 * The full set of exam boards the submit page can surface, in display order.
 * Each entry carries the display label plus the canonical board names used in
 * mark-scheme files (e.g. "Eduqas" maps to "WJEC Eduqas" in the registry).
 *
 * Boards without any registered mark scheme are rendered as disabled options
 * with a "Coming soon" tooltip — so when a scheme lands in
 * `src/lib/marking/mark-schemes/index.ts` they automatically become
 * selectable here without any change to this file.
 */
const BOARD_CATALOGUE: ReadonlyArray<{
  /** Form value used in local state. */
  value: string
  /** Label shown to the user. */
  label: string
  /** Board names (case-insensitive) accepted from `MarkScheme.board`. */
  match: ReadonlyArray<string>
}> = [
  { value: 'AQA', label: 'AQA', match: ['aqa'] },
  { value: 'Edexcel', label: 'Edexcel', match: ['edexcel', 'pearson edexcel'] },
  { value: 'OCR', label: 'OCR', match: ['ocr'] },
  { value: 'Eduqas', label: 'Eduqas (WJEC)', match: ['eduqas', 'wjec eduqas', 'wjec'] },
  {
    value: 'Cambridge-0500',
    label: 'Cambridge IGCSE 0500 (First Language English)',
    match: ['cambridge 0500', 'cambridge igcse 0500', 'caie 0500', '0500'],
  },
  {
    value: 'Cambridge-0990',
    label: 'Cambridge IGCSE 0990 (English Language 9-1)',
    match: ['cambridge 0990', 'cambridge igcse 0990', 'caie 0990', '0990'],
  },
]

/* ─── Registry derivation ──────────────────────────────────── */

interface BoardOption {
  value: string
  label: string
  schemes: MarkScheme[]
  available: boolean
}

interface PaperOption {
  /** Stable form value: the mark scheme id (e.g. "aqa-lit-paper1"). */
  value: string
  label: string
  scheme: MarkScheme
}

interface QuestionOption {
  /** Form value: the question id from the scheme (e.g. "Section A", "Q2"). */
  value: string
  label: string
}

/**
 * Group every registered mark scheme into its catalogue board entry, returning
 * the board options the picker should render.
 */
function buildBoardOptions(): BoardOption[] {
  const allSchemes = Object.values(MARK_SCHEMES)
  return BOARD_CATALOGUE.map((entry) => {
    const matchSet = new Set(entry.match.map((m) => m.toLowerCase()))
    const schemes = allSchemes.filter((scheme) => {
      const normalised = scheme.board.trim().toLowerCase()
      if (matchSet.has(normalised)) return true
      // Loose fallback: any match token contained in the scheme board string
      // (e.g. "cambridge igcse 0500 first language" includes "0500").
      return entry.match.some((token) => normalised.includes(token.toLowerCase()))
    })
    return {
      value: entry.value,
      label: entry.label,
      schemes,
      available: schemes.length > 0,
    }
  })
}

/**
 * Build the paper dropdown options for a chosen board, sorted by subject then
 * paper name so Literature comes before Language consistently.
 */
function buildPaperOptions(board: BoardOption | undefined): PaperOption[] {
  if (!board) return []
  return [...board.schemes]
    .sort((a, b) => {
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject)
      return a.paper.localeCompare(b.paper, undefined, { numeric: true })
    })
    .map((scheme) => ({
      value: scheme.id,
      label: `${scheme.subject} — ${scheme.paper}${scheme.title ? `: ${scheme.title}` : ''}`,
      scheme,
    }))
}

/**
 * Question dropdown options come straight from the chosen mark scheme so the
 * `questionId` we POST always matches a real `QuestionScheme.id` the API can
 * resolve.
 */
function buildQuestionOptions(scheme: MarkScheme | undefined): QuestionOption[] {
  if (!scheme) return []
  return scheme.questions.map((q) => ({
    value: q.id,
    label: `${q.id} — ${q.questionType}`,
  }))
}

/* ─── Helpers ──────────────────────────────────────────────── */

function countWords(text: string): number {
  const trimmed = text.trim()
  if (trimmed.length === 0) return 0
  return trimmed.split(/\s+/).length
}

/**
 * Return a user-friendly error message based on an API response status.
 */
function friendlyError(status: number, body: string): string {
  if (status === 401) return 'You need to sign in before submitting an essay for marking.'
  if (status === 403)
    return body || "You don't have access to AI marking. Please upgrade to Premium."
  if (status === 429) return "You've reached the daily marking limit. Please try again tomorrow."
  if (status === 400)
    return (
      body || 'There was a problem with your submission. Please check your essay and try again.'
    )
  if (status === 503)
    return (
      body ||
      'The AI marking service is temporarily unavailable. Please try again in a few minutes.'
    )
  if (status >= 500) return 'Something went wrong on our end. Please try again later.'
  return body || 'An unexpected error occurred. Please try again.'
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function SubmitEssayPage() {
  const tx = useT()
  const router = useRouter()
  const [aiOptedOut, setAiOptedOutState] = useState(false)

  useEffect(() => {
    setAiOptedOutState(isAiOptedOut())
  }, [])

  const [board, setBoard] = useState<string>('')
  const [paper, setPaper] = useState<string>('')
  const [question, setQuestion] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [essay, setEssay] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Derive every option from the live registry so newly added schemes
  // (e.g. Cambridge 0500/0990) appear without code changes here.
  const boardOptions = useMemo(buildBoardOptions, [])
  const selectedBoard = useMemo(
    () => boardOptions.find((b) => b.value === board),
    [boardOptions, board],
  )
  const paperOptions = useMemo(() => buildPaperOptions(selectedBoard), [selectedBoard])
  const selectedPaper = useMemo(
    () => paperOptions.find((p) => p.value === paper),
    [paperOptions, paper],
  )
  const questionOptions = useMemo(
    () => buildQuestionOptions(selectedPaper?.scheme),
    [selectedPaper],
  )

  const wordCount = countWords(essay)
  const canSubmit =
    Boolean(selectedBoard?.available) &&
    Boolean(selectedPaper) &&
    question !== '' &&
    essay.trim().length > 0 &&
    wordCount >= 50

  /**
   * Persist the submission to the server marking spine, then trigger the AI
   * mark, then route to the server-backed results page by submissionId.
   *
   * Contract (built in parallel — not implemented here):
   *   POST /api/submissions { source:'b2c_self', examBoard, qualification?,
   *     paper?, questionText, questionType?, studiedText?, studentAnswer,
   *     targetGrade?, markSchemeId, questionId }  → { submissionId }
   *   POST /api/marking/run { submissionId }       → runs the AI mark
   *
   * Returns the submissionId on success, or null if the spine is
   * unavailable (e.g. not yet deployed → 404/405) so the caller can fall
   * back to the legacy /api/mark + localStorage path. Throws only on a
   * definitive submission-spine error (auth/limit/validation) that the
   * legacy path could not recover either.
   */
  const trySubmissionSpine = useCallback(
    async (args: {
      examBoard: string
      paper: string
      questionText: string
      questionType?: string
      studentAnswer: string
      markSchemeId: string
      questionId: string
    }): Promise<{ submissionId: string } | { unavailable: true } | { failed: string }> => {
      let createRes: Response
      try {
        createRes = await fetch('/api/submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'b2c_self',
            examBoard: args.examBoard,
            paper: args.paper,
            questionText: args.questionText,
            questionType: args.questionType,
            studentAnswer: args.studentAnswer,
            markSchemeId: args.markSchemeId,
            questionId: args.questionId,
          }),
        })
      } catch {
        // Network error reaching the spine — let the caller fall back.
        return { unavailable: true }
      }

      // Spine not deployed yet → fall back silently to the legacy path.
      if (createRes.status === 404 || createRes.status === 405) {
        return { unavailable: true }
      }

      if (!createRes.ok) {
        let message = ''
        try {
          const body = await createRes.json()
          message = body?.error ?? body?.message ?? ''
        } catch {
          /* non-JSON */
        }
        return { failed: friendlyError(createRes.status, message) }
      }

      let submissionId = ''
      try {
        const body = await createRes.json()
        submissionId = String(body?.submissionId ?? '')
      } catch {
        return { unavailable: true }
      }
      if (!submissionId) return { unavailable: true }

      // Fire the AI mark. A failure here is non-fatal for navigation — the
      // results page polls status and shows an "awaiting"/"in progress"
      // state, and the human-review path is always available there.
      try {
        await fetch('/api/marking/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ submissionId }),
        })
      } catch {
        /* non-fatal — results page handles a not-yet-marked submission */
      }

      return { submissionId }
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!canSubmit || isSubmitting || !selectedBoard || !selectedPaper) return
      setIsSubmitting(true)
      setError(null)

      const id = `mk_${Date.now().toString(36)}`
      const boardLabel = selectedBoard.label
      const paperLabel = selectedPaper.label
      const questionOption = questionOptions.find((q) => q.value === question)
      const questionLabel = questionOption?.label ?? question
      const markSchemeId = selectedPaper.scheme.id
      const questionType = selectedPaper.scheme.questions.find(
        (q) => q.id === question,
      )?.questionType

      // ── Server persistence (Smart IP submission spine) ─────────────────
      // Preferred path: persist + AI-mark server-side and route by
      // submissionId. Falls back to the legacy /api/mark + localStorage
      // path below if the spine is not available, so existing behaviour
      // (and offline history) keeps working.
      const spine = await trySubmissionSpine({
        examBoard: boardLabel,
        paper: paperLabel,
        questionText: questionLabel,
        questionType,
        studentAnswer: essay,
        markSchemeId,
        questionId: question,
      })

      if ('failed' in spine) {
        setError(spine.failed)
        setIsSubmitting(false)
        return
      }
      if ('submissionId' in spine) {
        // Mirror a lightweight entry into localStorage history so the
        // existing /marking/history list still shows this attempt even
        // before the server feed is wired into that page.
        try {
          const histEntry = {
            id: spine.submissionId,
            title: title.trim() || questionLabel,
            board: boardLabel,
            paper: paperLabel,
            question: questionLabel,
            essay,
            wordCount,
            grade: 0,
            scorePercent: 0,
            aos: [],
            serverBacked: true,
            submittedAt: new Date().toISOString(),
          }
          const raw = localStorage.getItem('english-hub-marking-history')
          const prev = raw ? JSON.parse(raw) : []
          localStorage.setItem('english-hub-marking-history', JSON.stringify([histEntry, ...prev]))
        } catch {
          /* ignore localStorage errors — server is the source of truth */
        }
        router.push(`/marking/results/${spine.submissionId}`)
        return
      }
      // spine.unavailable → fall through to the legacy path unchanged.

      try {
        const res = await fetch('/api/mark', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            markSchemeId,
            questionId: question,
            questionText: questionLabel,
            essay,
          }),
        })

        if (!res.ok) {
          let message = ''
          try {
            const errBody = await res.json()
            message = errBody?.error ?? errBody?.message ?? ''
          } catch {
            /* non-JSON body */
          }
          setError(friendlyError(res.status, message))
          setIsSubmitting(false)
          return
        }

        const data = await res.json()
        const result = data.result

        // Map API MarkingResult into the localStorage entry shape
        const entry = {
          id,
          title: title.trim() || questionLabel,
          board: boardLabel,
          paper: paperLabel,
          question: questionLabel,
          essay,
          wordCount,
          // Grade & scoring
          grade: parseInt(result.predictedGrade, 10) || 0,
          predictedGrade: result.predictedGrade,
          gradeBand: result.gradeBand,
          totalMarks: result.totalMarks,
          maxMarks: result.maxMarks,
          scorePercent: Math.round((result.totalMarks / result.maxMarks) * 100),
          // AO breakdown — map to the shape the results page expects
          aos: (result.aoScores ?? []).map(
            (ao: {
              id: string
              label: string
              marks: number
              maxMarks: number
              band?: string
              justification?: string
              evidence?: string[]
            }) => ({
              code: ao.id,
              label: ao.label,
              score: ao.marks,
              max: ao.maxMarks,
              band: ao.band,
              justification: ao.justification,
              evidence: ao.evidence,
            }),
          ),
          // Feedback from the AI
          strengths: result.strengths,
          improvements: result.improvements,
          nextStepsToNextGrade: result.nextStepsToNextGrade,
          summary: result.summary,
          markSchemeId: result.markSchemeId,
          remaining: data.remaining,
          submittedAt: new Date().toISOString(),
        }

        try {
          const raw = localStorage.getItem('english-hub-marking-history')
          const prev = raw ? JSON.parse(raw) : []
          const next = [entry, ...prev]
          localStorage.setItem('english-hub-marking-history', JSON.stringify(next))
        } catch {
          /* ignore localStorage errors */
        }

        router.push(`/marking/results/${id}`)
      } catch (err) {
        console.error('[marking/submit] fetch error', err)
        setError('Could not reach the marking server. Please check your connection and try again.')
        setIsSubmitting(false)
      }
    },
    [
      selectedBoard,
      selectedPaper,
      question,
      questionOptions,
      title,
      essay,
      wordCount,
      canSubmit,
      isSubmitting,
      router,
      trySubmissionSpine,
    ],
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              {tx('marking.nav.marking')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-foreground">{tx('marking.submit.breadcrumb_new')}</li>
        </ol>
      </nav>

      <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
        {tx('marking.submit.title')}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {tx('marking.submit.subtitle')}{' '}
        <Link
          href="/marking/ai-explainer"
          className="text-primary underline-offset-2 hover:underline"
        >
          {tx('marking.submit.how_ai_works')}
        </Link>
      </p>

      {/* AI opt-out notice (Children's Code — GAP-12B) */}
      {aiOptedOut && (
        <div className="mt-8 rounded-lg border border-border bg-muted/50 px-6 py-8 text-center">
          <h2 className="text-lg font-semibold text-foreground">
            {tx('marking.submit.ai_off_heading')}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {tx('marking.submit.ai_off_body')}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            To turn AI marking back on, visit{' '}
            <Link
              href="/parent/settings"
              className="text-primary underline-offset-2 hover:underline"
            >
              {tx('marking.submit.ai_off_parent_link')}
            </Link>{' '}
            or read{' '}
            <Link
              href="/marking/ai-explainer"
              className="text-primary underline-offset-2 hover:underline"
            >
              {tx('marking.submit.ai_off_explainer_link')}
            </Link>
            .
          </p>
        </div>
      )}

      {!aiOptedOut && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{tx('marking.submit.card_title')}</CardTitle>
            <CardDescription>{tx('marking.submit.card_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ── Board / Paper ───────────────────────────── */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="board" className="text-sm font-medium text-foreground">
                    {tx('marking.submit.label_board')}
                  </label>
                  <select
                    id="board"
                    value={board}
                    onChange={(e) => {
                      setBoard(e.target.value)
                      setPaper('')
                      setQuestion('')
                    }}
                    required
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    <option value="" disabled>
                      {tx('marking.submit.select_board')}
                    </option>
                    {boardOptions.map((b) => (
                      <option
                        key={b.value}
                        value={b.value}
                        disabled={!b.available}
                        title={
                          b.available
                            ? undefined
                            : `${tx('marking.submit.coming_soon')} — mark scheme not yet available`
                        }
                        className={b.available ? undefined : 'text-muted-foreground'}
                      >
                        {b.available ? b.label : `${b.label} — ${tx('marking.submit.coming_soon')}`}
                      </option>
                    ))}
                  </select>
                  {selectedBoard && !selectedBoard.available && (
                    <p className="text-xs text-muted-foreground">
                      Mark schemes for {selectedBoard.label} are coming soon. Please pick another
                      board for now.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="paper" className="text-sm font-medium text-foreground">
                    {tx('marking.submit.label_paper')}
                  </label>
                  <select
                    id="paper"
                    value={paper}
                    onChange={(e) => {
                      setPaper(e.target.value)
                      setQuestion('')
                    }}
                    required
                    disabled={!selectedBoard?.available}
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50"
                  >
                    <option value="" disabled>
                      {selectedBoard?.available
                        ? tx('marking.submit.select_paper')
                        : tx('marking.submit.choose_board_first')}
                    </option>
                    {paperOptions.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ── Question ───────────────────────────────── */}
              <div className="space-y-1.5">
                <label htmlFor="question" className="text-sm font-medium text-foreground">
                  {tx('marking.submit.label_question')}
                </label>
                <select
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  disabled={!selectedPaper}
                  className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50"
                >
                  <option value="" disabled>
                    {selectedPaper
                      ? tx('marking.submit.select_question')
                      : tx('marking.submit.choose_paper_first')}
                  </option>
                  {questionOptions.map((q) => (
                    <option key={q.value} value={q.value}>
                      {q.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ── Title ──────────────────────────────────── */}
              <div className="space-y-1.5">
                <label htmlFor="title" className="text-sm font-medium text-foreground">
                  {tx('marking.submit.label_title')}{' '}
                  <span className="text-xs font-normal text-muted-foreground">
                    {tx('marking.submit.label_title_optional')}
                  </span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={tx('marking.submit.title_placeholder')}
                  className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                />
              </div>

              {/* ── Essay body ─────────────────────────────── */}
              <div className="space-y-1.5">
                <label htmlFor="essay" className="text-sm font-medium text-foreground">
                  {tx('marking.submit.label_essay')}
                </label>
                <textarea
                  id="essay"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  placeholder={tx('marking.submit.essay_placeholder')}
                  required
                  rows={14}
                  className="w-full resize-y rounded-lg border border-border bg-input px-3 py-2.5 text-sm leading-relaxed text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {wordCount}{' '}
                    {wordCount === 1 ? tx('marking.submit.word') : tx('marking.submit.words')}
                    {wordCount > 0 && wordCount < 50 && (
                      <span className="ml-1 text-destructive">{tx('marking.submit.min_50')}</span>
                    )}
                  </span>
                  <span>{tx('marking.submit.no_upper_limit')}</span>
                </div>
              </div>

              {/* ── Error banner ───────────────────────────── */}
              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {error}
                </div>
              )}

              {/* ── Submit ─────────────────────────────────── */}
              <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
                <Button variant="outline" type="button" render={<Link href="/marking" />}>
                  {tx('marking.submit.btn_cancel')}
                </Button>
                <Button type="submit" size="lg" disabled={!canSubmit || isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      {tx('marking.submit.btn_marking')}
                    </span>
                  ) : (
                    tx('marking.submit.btn_submit')
                  )}
                </Button>
              </div>
              {isSubmitting && (
                <p className="text-center text-xs text-muted-foreground">
                  {tx('marking.submit.wait_note')}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
