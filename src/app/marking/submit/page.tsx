'use client'

import { useMemo, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { isAiOptedOut } from '@/lib/ai-preferences'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MARK_SCHEMES, type MarkScheme } from '@/lib/marking/mark-schemes'
import { resolvePrefill } from '@/lib/marking/submit-prefill'
import { isSpecVerified } from '@/lib/marking/examiner/verification'
import { useT } from '@/lib/i18n/use-t'
import { DictationButton } from '@/components/speech/DictationButton'
import { InlineAIConsentPrompt } from '@/components/consent/InlineAIConsentPrompt'
import { readConsentRefusal, type AIConsentRefusal } from '@/components/consent/ai-consent-refusal'
import { markingBoardFor, readSiteBoardCookie } from '@/lib/board/marking-board-map'
import { PRICING } from '@/constants/pricing'
import { saveMarkingDraft, takeMarkingDraft } from '@/lib/marking/draft-store'
import { capture as phCapture, EVENTS as PH_EVENTS } from '@/lib/posthog'

/* ─── Board catalogue ──────────────────────────────────────── */

/**
 * The full set of exam boards the submit page can surface, in display order.
 * Each entry carries the display label plus the canonical board names used in
 * mark-scheme files (e.g. "Eduqas" maps to "WJEC Eduqas" in the registry).
 *
 * Boards without any registered mark scheme are rendered as disabled options
 * with a "Coming soon" tooltip - so when a scheme lands in
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
      // Loose fallback: any match token contained in the scheme board string.
      if (entry.match.some((token) => normalised.includes(token.toLowerCase()))) return true
      // ...and in the scheme ID (SF-4, 19 September 2026).
      //
      // THE DEFECT THIS FIXES. The four Cambridge schemes carry `board:
      // 'Cambridge'` and `'Cambridge (9-1)'`. Neither string contains "0500" or
      // "0990", which are the only tokens that distinguish the two syllabuses,
      // so BOTH Cambridge boards matched zero schemes, rendered `disabled`, and
      // told the reader "mark schemes for Cambridge IGCSE 0500 are coming
      // soon". They have existed all along. A Cambridge IGCSE student - the
      // Gulf wedge this product is trying to win - could not pick their own
      // board on the marking page.
      const id = scheme.id.toLowerCase()
      return entry.match.some((token) => id.includes(token.toLowerCase()))
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
      label: `${scheme.subject} - ${scheme.paper}${scheme.title ? `: ${scheme.title}` : ''}${
        isSpecVerified(scheme.id) ? '' : ' (unverified - marks are indicative only)'
      }`,
      scheme,
    }))
}

/** "language-analysis" -> "Language analysis". Leaves prose labels alone. */
function humanQuestionType(raw: string): string {
  const spaced = raw.replace(/[-_]+/g, ' ').trim()
  if (!spaced) return raw
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
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
    // `questionType` is authored in the mark schemes as a slug-ish label
    // ("language-analysis"), which rendered as "Q2 - language-analysis" and
    // read like a database row rather than a question. Title-case it and add
    // the tariff, which is what a student actually needs to pick the right one.
    label: `${q.id} - ${humanQuestionType(q.questionType)} (${q.totalMarks} marks)`,
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
  // Pre-select from the board the visitor already chose on /board-select.
  // The middleware forces most of the product through that picker, so by the
  // time anyone reaches here the site usually knows the answer and was asking
  // again anyway. Set in an effect, not in useState's initialiser, because the
  // server render has no cookie and a different first client render would be a
  // hydration mismatch. It never overwrites a choice already made here.
  useEffect(() => {
    const mapped = markingBoardFor(readSiteBoardCookie())
    if (mapped) setBoard((current) => current || mapped)
  }, [])

  // Restore an essay stashed before a sign-in round trip, once, on mount.
  useEffect(() => {
    const draft = takeMarkingDraft()
    if (!draft) return
    if (draft.board) setBoard(draft.board)
    if (draft.paper) setPaper(draft.paper)
    if (draft.question) setQuestion(draft.question)
    if (draft.title) setTitle(draft.title)
    if (draft.essay) setEssay(draft.essay)
  }, [])
  const [paper, setPaper] = useState<string>('')
  const [question, setQuestion] = useState<string>('')
  /**
   * The actual wording of the question the student answered.
   *
   * WHAT WAS SENT BEFORE. The dropdown's own label, so the marker was asked to
   * grade an essay against the string "Q2 - Language Analysis (8 marks)". That
   * is a menu entry, not a question. Nothing in it says what the student was
   * asked to do, which text, or about what - so the one thing every mark scheme
   * leads with, whether the answer addresses the task, could not be assessed at
   * all. Reported from the live site on a Merchant of Venice essay.
   *
   * `questionTextTouched` keeps the prefill from overwriting the student. The
   * dropdown seeds this field with the scheme's task description, which is a
   * template carrying [topic] placeholders, so it is a starting point and never
   * an answer: the student has to replace them, and can paste their real
   * question over the whole thing.
   */
  const [questionText, setQuestionText] = useState<string>('')
  const [questionTextTouched, setQuestionTextTouched] = useState(false)
  const [title, setTitle] = useState<string>('')
  // The text the answer is about. The marking API has accepted `studiedText`
  // all along, persists it, and marker.ts injects it into the prompt as
  // context - and this page never sent it. See the prefill effect below.
  const [studiedText, setStudiedText] = useState<string>('')
  const [essay, setEssay] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  /**
   * What KIND of refusal, not just its sentence.
   *
   * THE DEFECT (19 September 2026): a 403 rendered the server's sentence
   * ("AI marking is a Premium feature. Please upgrade to submit your work for
   * marking") inside a plain text div with no link. This is the one screen
   * where a trialist decides the product works, and when it refused them it
   * offered no way to pay. A 401 was worse: /marking is not a protected route,
   * so a signed-out visitor could type a 600-word essay and be told "You need
   * to sign in" as text, with nothing carrying the essay through login.
   */
  const [refusalKind, setRefusalKind] = useState<'upgrade' | 'signin' | null>(null)
  // Refused for consent, as opposed to refused for anything else. Held
  // separately so the learner is offered the decision in place, with the
  // essay they just typed still in the form.
  const [consentRefusal, setConsentRefusal] = useState<AIConsentRefusal | null>(null)

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

  /**
   * Prefill the form from the URL, once, on mount.
   *
   * WHY `window.location` RATHER THAN `useSearchParams`. useSearchParams forces
   * a Suspense boundary and opts the route out of static rendering. Reading the
   * query on mount is exactly as correct here, because a prefill is a
   * client-side convenience by definition, and it costs the route nothing.
   *
   * The resolution itself lives in resolvePrefill() so it can be tested without
   * a browser, and so that everything is validated against the live registry in
   * one pass rather than through the board -> paper -> question state chain,
   * which needs three renders to settle and can half-apply. See that file for
   * why nothing here is trusted.
   *
   * AN EXPLICIT LINK WINS, and this ordering was wrong on the first attempt.
   * Two effects above already set the board: one from the site-wide board
   * cookie, one restoring a draft stashed before a sign-in round trip. Guarding
   * these setters with `current || ...` let a stale cookie beat the link, and a
   * student clicking "get this marked" on an Edexcel IGCSE anthology page
   * landed on an AQA paper. Verified against a production build: board came out
   * AQA and paper aqa-lang-paper1 for an Edexcel IGCSE link.
   *
   * A URL is a more recent and more specific signal than a stored default, so
   * it now sets outright. This cannot clobber anything the student has typed:
   * the effect runs once on mount, before there is anything to clobber, and a
   * URL with no parameters returns early and touches nothing.
   */
  useEffect(() => {
    let params: URLSearchParams
    try {
      params = new URLSearchParams(window.location.search)
    } catch {
      return
    }
    const prefill = resolvePrefill(params, boardOptions, Object.values(MARK_SCHEMES))
    if (prefill.board) setBoard(prefill.board)
    if (prefill.paper) setPaper(prefill.paper)
    if (prefill.question) setQuestion(prefill.question)
    if (prefill.title) setTitle(prefill.title)
    if (prefill.studiedText) setStudiedText(prefill.studiedText)
  }, [boardOptions])

  // Seed the question wording from the chosen question's task description, and
  // stop as soon as the student types. A blank field would be the old defect
  // with an extra click; a field that fights the student would be worse.
  useEffect(() => {
    if (questionTextTouched) return
    const task = selectedPaper?.scheme.questions.find((q) => q.id === question)?.taskDescription
    if (task) setQuestionText(task)
  }, [question, selectedPaper, questionTextTouched])

  const wordCount = countWords(essay)
  const canSubmit =
    Boolean(selectedBoard?.available) &&
    Boolean(selectedPaper) &&
    question !== '' &&
    questionText.trim().length > 0 &&
    essay.trim().length > 0 &&
    wordCount >= 50

  /**
   * Persist the submission to the server marking spine, then trigger the AI
   * mark, then route to the server-backed results page by submissionId.
   *
   * Contract (built in parallel - not implemented here):
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
      studiedText?: string
      studentAnswer: string
      markSchemeId: string
      questionId: string
    }): Promise<
      | { submissionId: string }
      | { unavailable: true }
      | { failed: string }
      | { consentRefusal: AIConsentRefusal }
    > => {
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
            studiedText: args.studiedText,
            studentAnswer: args.studentAnswer,
            markSchemeId: args.markSchemeId,
            questionId: args.questionId,
          }),
        })
      } catch {
        // Network error reaching the spine - let the caller fall back.
        return { unavailable: true }
      }

      // Spine not deployed yet → fall back silently to the legacy path.
      if (createRes.status === 404 || createRes.status === 405) {
        return { unavailable: true }
      }

      if (!createRes.ok) {
        let message = ''
        let body: unknown = null
        try {
          body = await createRes.json()
          message =
            (body as { error?: string; message?: string })?.error ??
            (body as { error?: string; message?: string })?.message ??
            ''
        } catch {
          /* non-JSON */
        }
        // A consent block is not a dead end: hand it back so the page can
        // offer the decision in place. Recognised by the machine-readable
        // code, never by the 403 alone, which is also "not a subscriber".
        const refusal = readConsentRefusal(createRes.status, body)
        // UX-2. Reported here rather than at the call site because `failed`
        // carries only a friendly sentence: the status code, which is the
        // thing that distinguishes a paywall from a signed-out visitor from a
        // rate limit, does not survive the return.
        phCapture(PH_EVENTS.MARKING_REFUSED, {
          status: createRes.status,
          consentCode: refusal?.code ?? null,
          stage: 'create',
          surface: 'marking/submit',
        })
        if (refusal) return { consentRefusal: refusal }
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

      // Fire the AI mark. 2026-08-18: this used to swallow EVERY outcome
      // (it never checked res.ok), then navigate to the results page, whose
      // waiting state tells the student their essay is "waiting for your
      // teacher to review it". A self-study student has no teacher, the
      // results page never polls, and the failed attempt still counted
      // against their 10-a-day cap - a 403 (lapsed trial), 429 (cap hit) or
      // 503 (AI down; the exact state production was in) stranded them on
      // that screen forever. A failed mark now surfaces as a real error on
      // THIS page, before navigation.
      try {
        const runRes = await fetch('/api/marking/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ submissionId }),
        })
        if (!runRes.ok) {
          let message = ''
          let body: unknown = null
          try {
            body = await runRes.json()
            message =
              (body as { error?: string; message?: string })?.error ??
              (body as { error?: string; message?: string })?.message ??
              ''
          } catch {
            /* non-JSON */
          }
          const refusal = readConsentRefusal(runRes.status, body)
          // The essay is saved by this point but unmarked, which is a
          // different failure from being refused at the door and needs a
          // different fix. Hence `stage`.
          phCapture(PH_EVENTS.MARKING_REFUSED, {
            status: runRes.status,
            consentCode: refusal?.code ?? null,
            stage: 'run',
            surface: 'marking/submit',
          })
          if (refusal) return { consentRefusal: refusal }
          return { failed: friendlyError(runRes.status, message) }
        }
      } catch {
        // Network failure between create and run: the submission exists but
        // is unmarked. Be honest about it rather than parking the student
        // on a teacher-review screen.
        return {
          failed:
            'Your essay was saved, but marking could not start because the connection dropped. Check your connection and submit again - saved essays are listed under My marked essays.',
        }
      }

      return { submissionId }
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault()
      if (!canSubmit || isSubmitting || !selectedBoard || !selectedPaper) return
      setIsSubmitting(true)
      setError(null)
      setRefusalKind(null)
      setConsentRefusal(null)

      const id = `mk_${Date.now().toString(36)}`
      const boardLabel = selectedBoard.label
      const paperLabel = selectedPaper.label
      const questionOption = questionOptions.find((q) => q.value === question)
      // The wording the student actually answered, not the dropdown label. The
      // label is kept for the title fallback and the history entry, where "Q2 -
      // Language Analysis" is a useful short name; it is not a question.
      const questionLabel = questionOption?.label ?? question
      const askedQuestion = questionText.trim() || questionLabel
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
        questionText: askedQuestion,
        questionType,
        studiedText: studiedText.trim() || undefined,
        studentAnswer: essay,
        markSchemeId,
        questionId: question,
      })

      if ('consentRefusal' in spine) {
        setConsentRefusal(spine.consentRefusal)
        setIsSubmitting(false)
        return
      }
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
            // null = not marked yet. This used to be 0, which /marking/history
            // rendered as a real Grade 0 tile and averaged into the student's
            // "average grade" and improvement trend - every AI-marked essay
            // looked like a zero. The history page hydrates the real grade
            // from the server and treats null as "awaiting mark".
            grade: null,
            scorePercent: null,
            aos: [],
            serverBacked: true,
            submittedAt: new Date().toISOString(),
          }
          const raw = localStorage.getItem('english-hub-marking-history')
          const prev = raw ? JSON.parse(raw) : []
          localStorage.setItem('english-hub-marking-history', JSON.stringify([histEntry, ...prev]))
        } catch {
          /* ignore localStorage errors - server is the source of truth */
        }
        // THE path this item is about: "fire first_essay_submitted on spine
        // success". The legacy fallback below fires the same event, tagged
        // differently, so the two can be told apart when the spine is down.
        phCapture(PH_EVENTS.FIRST_ESSAY_SUBMITTED, {
          board,
          paper,
          questionType: questionLabel,
          surface: 'marking/submit',
          path: 'spine',
        })
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
            questionText: askedQuestion,
            essay,
          }),
        })

        if (!res.ok) {
          let message = ''
          let errBody: unknown = null
          try {
            errBody = await res.json()
            message =
              (errBody as { error?: string; message?: string })?.error ??
              (errBody as { error?: string; message?: string })?.message ??
              ''
          } catch {
            /* non-JSON body */
          }
          const refusal = readConsentRefusal(res.status, errBody)
          // UX-2. Every refusal is reported, including the consent one below,
          // which returns early. Without this a refusal looks identical to a
          // visitor who never tried: `marking_submissions` has never held a
          // row, and nothing recorded whether people were being turned away or
          // were not getting this far. `phCapture` is the consent-gated
          // wrapper, so minors and non-consenting visitors send nothing.
          phCapture(PH_EVENTS.MARKING_REFUSED, {
            status: res.status,
            consentCode: refusal?.code ?? null,
            board,
            paper,
          })
          if (refusal) {
            setConsentRefusal(refusal)
            setIsSubmitting(false)
            return
          }
          if (res.status === 403) setRefusalKind('upgrade')
          if (res.status === 401) {
            // Carry the work through the login round trip. Session storage,
            // not local: a shared or school machine must not keep someone
            // else's essay after the tab closes.
            saveMarkingDraft({ board, paper, question, title, essay })
            setRefusalKind('signin')
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
          // AO breakdown - map to the shape the results page expects
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

        // The other half of the funnel. Fired on every success; PostHog's own
        // once-per-user analysis is what makes it "first", which is cheaper and
        // more reliable than deciding that here. Same event the essay-feedback
        // page fires, so the two marking surfaces are comparable.
        phCapture(PH_EVENTS.FIRST_ESSAY_SUBMITTED, {
          board,
          paper,
          questionType: questionLabel,
          surface: 'marking/submit',
          path: 'legacy',
        })

        router.push(`/marking/results/${id}`)
      } catch (err) {
        console.error('[marking/submit] fetch error', err)
        setError('Could not reach the marking server. Please check your connection and try again.')
        setIsSubmitting(false)
      }
    },
    [
      // `board` and `paper` are the raw select values, not the resolved
      // objects. They are here because saveMarkingDraft stashes them on a 401:
      // a stale closure would restore the wrong board after sign-in, which is
      // exactly the silent wrongness this page is being fixed for.
      board,
      paper,
      selectedBoard,
      selectedPaper,
      question,
      questionOptions,
      title,
      // Added 19 September 2026, and caught by lint rather than by a test.
      // `studiedText` is read inside this callback but is set by the URL
      // prefill effect AFTER mount, so without it here the callback would
      // close over the initial empty string and submit no studied text at
      // all - silently, with the field visibly populated. The same class of
      // stale-closure bug the comment above describes.
      studiedText,
      // The third of these, and caught the same way. `questionText` is seeded
      // by an effect after the question is chosen, so a callback closing over
      // the initial empty string would fall back to the dropdown label and
      // send the marker "Section A - Shakespeare extract (34 marks)" while the
      // student watched their own question sitting in the field. That is the
      // exact defect this change exists to remove, restored by a missing
      // dependency.
      questionText,
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

      {/* AI opt-out notice (Children's Code - GAP-12B) */}
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
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
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
                            : `${tx('marking.submit.coming_soon')} - mark scheme not yet available`
                        }
                        className={b.available ? undefined : 'text-muted-foreground'}
                      >
                        {b.available ? b.label : `${b.label} - ${tx('marking.submit.coming_soon')}`}
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
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25 disabled:opacity-50"
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

              {/* ── Unverified paper warning ────────────────
                  Nine of the twenty-one papers in the corpus have never been
                  checked against the board's published specification, and the
                  first audit of them found a mislabelled assessment objective
                  and a five-mark shortfall. The dropdown label says so, but a
                  label in a select is easy to miss and the reader here is
                  often a child, so the warning is repeated in the open. */}
              {selectedPaper && !isSpecVerified(selectedPaper.scheme.id) && (
                <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                  <p className="font-medium">
                    This paper has not been checked against the exam board&apos;s published
                    specification.
                  </p>
                  <p className="mt-1">
                    The questions and mark ranges we hold may not match your real paper, so any mark
                    you get back is a rough guide only. Check it against your own mark scheme, and
                    do not treat it as your grade.
                  </p>
                </div>
              )}

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
                  className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25 disabled:opacity-50"
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

              {/* ── The question itself ────────────────────── */}
              {/* The dropdown says WHICH question. This says what it ASKED,
                  which is the part a marker cannot work without. Seeded from
                  the scheme's task description and editable over the top, so a
                  student whose question is not in any scheme - a school's own
                  wording, a past paper, a teacher's title - can simply paste
                  it. */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="questionText" className="text-sm font-medium text-foreground">
                    {tx('marking.submit.label_question_text')}
                  </label>
                  <DictationButton
                    onText={(t) => {
                      setQuestionTextTouched(true)
                      setQuestionText((v) => (v ? v.trimEnd() + ' ' : '') + t)
                    }}
                    iconOnly
                  />
                </div>
                <textarea
                  id="questionText"
                  value={questionText}
                  onChange={(e) => {
                    setQuestionTextTouched(true)
                    setQuestionText(e.target.value)
                  }}
                  required
                  rows={2}
                  placeholder={tx('marking.submit.question_text_placeholder')}
                  className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
                />
                <p className="text-xs text-muted-foreground">
                  {tx('marking.submit.question_text_help')}
                </p>
              </div>

              {/* ── Title ──────────────────────────────────── */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="title" className="text-sm font-medium text-foreground">
                    {tx('marking.submit.label_title')}{' '}
                    <span className="text-xs font-normal text-muted-foreground">
                      {tx('marking.submit.label_title_optional')}
                    </span>
                  </label>
                  <DictationButton
                    onText={(t) => setTitle((v) => (v ? v.trimEnd() + ' ' : '') + t)}
                    iconOnly
                  />
                </div>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={tx('marking.submit.title_placeholder')}
                  className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
                />
              </div>

              {/* ── Essay body ─────────────────────────────── */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="essay" className="text-sm font-medium text-foreground">
                    {tx('marking.submit.label_essay')}
                  </label>
                  <DictationButton
                    onText={(t) => setEssay((v) => (v ? v.trimEnd() + ' ' : '') + t)}
                    iconOnly
                  />
                </div>
                <textarea
                  id="essay"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  placeholder={tx('marking.submit.essay_placeholder')}
                  required
                  rows={14}
                  className="w-full resize-y rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {wordCount}{' '}
                    {wordCount === 1 ? tx('marking.submit.word') : tx('marking.submit.words')}
                    {wordCount > 0 && wordCount < 50 && (
                      <span className="ms-1 text-destructive">{tx('marking.submit.min_50')}</span>
                    )}
                  </span>
                  <span>{tx('marking.submit.no_upper_limit')}</span>
                </div>
              </div>

              {/* ── Consent block, answerable in place ─────── */}
              {consentRefusal && !isSubmitting && (
                <InlineAIConsentPrompt
                  refusal={consentRefusal}
                  onResolved={() => {
                    setConsentRefusal(null)
                    void handleSubmit()
                  }}
                  onDismiss={() => setConsentRefusal(null)}
                />
              )}

              {/* ── Error banner ─────────────────────────────
                  A refusal a person can act on. Both branches carry the
                  server's own sentence and add the route out of it, which the
                  plain text div never did. */}
              {error && (
                <div
                  role="alert"
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    refusalKind
                      ? 'border-primary/30 bg-primary/5 text-foreground'
                      : 'border-destructive/30 bg-destructive/10 text-destructive'
                  }`}
                >
                  <p>{error}</p>
                  {refusalKind === 'upgrade' && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Link
                        href="/pricing?plan=student_monthly"
                        className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                      >
                        See plans
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        Student plans start at &pound;{PRICING.STUDENT_MONTHLY}/month, or &pound;
                        {PRICING.STUDENT_ANNUAL}/year.
                      </span>
                    </div>
                  )}
                  {refusalKind === 'signin' && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Link
                        href="/auth/login?redirect=%2Fmarking%2Fsubmit"
                        className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                      >
                        Sign in and come back
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        Your essay is saved on this device and will be here when you return.
                      </span>
                    </div>
                  )}
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
