'use client'

// ─── WritingStage ───────────────────────────────────────────────────────────
// The Writing section of the mock (60 min for BOTH tasks - one shared clock,
// just like the real exam). The candidate writes Task 1 and Task 2 in two
// textareas (with live word counts and the official minimums) and can tab
// between them. On submit OR timer expiry we POST EACH response to
// /api/ielts/writing-feedback (sending `task` + `track`) to obtain a band.
//
// Resilience (per spec): if the feedback call fails - network error, paywall
// (403), rate limit (429), over-length, or any non-OK status - the response is
// STILL recorded and the task is marked "submitted" (no band). The mock never
// blocks on AI availability. The Writing band reported up is the average of the
// task bands that scored; if neither scored, status is "submitted" with a note.
//
// The one exception is a refusal the candidate can answer: a 403 carrying a
// consent code. Until 12 October 2026 it was swallowed like the rest, and the
// report blamed an unavailable service or a missing Premium plan. The route
// checks the IELTS plan BEFORE consent, so these candidates had the plan, and
// could be missing nothing but a date of birth (73% of signed-in accounts had
// none on file on 12 October 2026), yet lost the band for a 60-minute section.
// The stage now holds, offers the consent step in place, and marks the same
// answers once it is answered. Finishing the section without it records them
// unscored.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useRef, useState } from 'react'
import { PenLine, Check, Loader2, AlertTriangle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InlineAIConsentPrompt } from '@/components/consent/InlineAIConsentPrompt'
import {
  isAiOptOutRefusal,
  readConsentRefusal,
  type AIConsentRefusal,
} from '@/components/consent/ai-consent-refusal'
import type {
  Band,
  CriterionFeedback,
  IeltsTrack,
  TaskFeedback,
  WritingPrompt,
} from '@/lib/ielts/types'
import { roundToBand } from '@/lib/ielts/bands'
import { genId, saveAttempt } from '@/lib/ielts/store'

import type { TaskResult } from '../mock-types'
import { SECTION_SECONDS } from '../mock-types'
import { useMockT } from '../use-mock-t'
import StageHeader from './StageHeader'

type TaskTab = 'writing-task-1' | 'writing-task-2'

/**
 * What came back for one task. 'refused' is a 403 with a consent code, and is
 * deliberately NOT recorded yet: the stage asks again once the consent step is
 * answered, and recording it here as well would save the same answer twice.
 */
type TaskOutcome =
  | { kind: 'scored'; band: Band; criteria: CriterionFeedback[] }
  | { kind: 'unscored'; nextStep?: 'signin' | 'plans'; consentSkipped?: boolean }
  | { kind: 'refused'; refusal: AIConsentRefusal }

type ScoredOutcome = Extract<TaskOutcome, { kind: 'scored' }>
type RefusedOutcome = Extract<TaskOutcome, { kind: 'refused' }>

function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length
}

/** Validate that an unknown payload is a usable TaskFeedback. */
function isTaskFeedback(value: unknown): value is TaskFeedback {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    typeof v.overallBand === 'number' &&
    Array.isArray(v.criteria) &&
    Array.isArray(v.strengths) &&
    Array.isArray(v.improvements)
  )
}

/**
 * Score one writing task via the feedback API. Always resolves (never throws):
 * on any non-OK / network / parse problem it persists the response as a
 * "submitted" attempt and returns 'unscored' so the mock can continue. A
 * consent refusal is returned as 'refused', unrecorded, for the stage to
 * answer.
 */
async function scoreTask(
  prompt: WritingPrompt,
  response: string,
  track: IeltsTrack,
): Promise<TaskOutcome> {
  const trimmed = response.trim()
  // Too short for the API's 50-char floor → record, don't score.
  if (trimmed.length < 50) {
    persistSubmitted(prompt, trimmed)
    return { kind: 'unscored' }
  }

  try {
    const res = await fetch('/api/ielts/writing-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task: prompt.task,
        promptText: prompt.prompt,
        response: trimmed,
        promptId: prompt.id,
        track,
      }),
    })

    if (!res.ok) {
      // Switched on the machine-readable code, never on the 403 alone,
      // which is also the IELTS-plan paywall.
      const body: unknown = await res.json().catch(() => null)
      const refusal = readConsentRefusal(res.status, body)
      if (refusal) return { kind: 'refused', refusal }
      persistSubmitted(prompt, trimmed)
      if (res.status === 401) return { kind: 'unscored', nextStep: 'signin' }
      // The AI opt-out (code ai_opted_out) is never offered a plan.
      if (res.status === 403 && isAiOptOutRefusal(res.status, body)) return { kind: 'unscored' }
      if (res.status === 403) return { kind: 'unscored', nextStep: 'plans' }
      return { kind: 'unscored' }
    }

    const data = (await res.json().catch(() => null)) as { feedback?: unknown } | null
    if (!data || !isTaskFeedback(data.feedback)) {
      persistSubmitted(prompt, trimmed)
      return { kind: 'unscored' }
    }

    const fb = data.feedback
    // Persist the scored attempt to the shared store (progress + dashboard).
    try {
      saveAttempt({
        id: genId('wr'),
        skill: 'writing',
        taskType: prompt.task,
        promptId: prompt.id,
        responseText: trimmed,
        band: fb.overallBand,
        criteria: fb.criteria,
        date: new Date().toISOString(),
      })
    } catch {
      /* non-fatal */
    }
    return { kind: 'scored', band: fb.overallBand, criteria: fb.criteria }
  } catch {
    persistSubmitted(prompt, trimmed)
    return { kind: 'unscored' }
  }
}

/** Record an un-scored ("submitted") writing attempt so the work is never lost. */
function persistSubmitted(prompt: WritingPrompt, response: string): void {
  if (response.length === 0) return
  try {
    saveAttempt({
      id: genId('wr'),
      skill: 'writing',
      taskType: prompt.task,
      promptId: prompt.id,
      responseText: response,
      band: 0,
      criteria: [],
      date: new Date().toISOString(),
    })
  } catch {
    /* non-fatal */
  }
}

export default function WritingStage({
  task1,
  task2,
  track,
  stepLabel,
  onComplete,
}: {
  task1: WritingPrompt
  task2: WritingPrompt
  track: IeltsTrack
  stepLabel: string
  onComplete: (result: TaskResult) => void
}) {
  const t = useMockT()
  const [tab, setTab] = useState<TaskTab>('writing-task-1')
  const [response1, setResponse1] = useState('')
  const [response2, setResponse2] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const finishedRef = useRef(false)
  // Held on a consent refusal: the answers are final and the clock is paused
  // (submitting stays true) while the candidate answers it or moves on.
  const [held, setHeld] = useState<{
    outcomes: [TaskOutcome, TaskOutcome]
    refusal: AIConsentRefusal
  } | null>(null)

  // Latest text held in refs so the timer's auto-submit always captures what is
  // on screen, even if it fires between renders.
  const r1Ref = useRef('')
  const r2Ref = useRef('')
  r1Ref.current = response1
  r2Ref.current = response2

  // The section result the report reads, from the two task outcomes.
  const report = useCallback(
    (outcomes: [TaskOutcome, TaskOutcome]) => {
      const scored = outcomes.filter((o): o is ScoredOutcome => o.kind === 'scored')

      if (scored.length === 0) {
        const nextStep = outcomes
          .map((o) => (o.kind === 'unscored' ? o.nextStep : undefined))
          .find((step) => step !== undefined)
        // The catch-all note guesses at an outage or a missing plan. Neither
        // is true of a candidate who chose to carry on past the consent step,
        // and a signed-out candidate is told the actual reason.
        const consentSkipped = outcomes.some((o) => o.kind === 'unscored' && o.consentSkipped)
        let note: string | undefined = t('ielts.mock.writing.note_none_scored')
        if (consentSkipped) note = undefined
        else if (nextStep === 'signin') note = t('ielts.writing.error.401')
        onComplete({
          skill: 'writing',
          status: 'submitted',
          band: null,
          criteria: [],
          note,
          nextStep,
        })
        return
      }

      const mean = scored.reduce<number>((sum, o) => sum + o.band, 0) / scored.length
      onComplete({
        skill: 'writing',
        status: 'scored',
        band: roundToBand(mean),
        criteria: scored.flatMap((o) => o.criteria),
        note: scored.length === 1 ? t('ielts.mock.writing.note_one_scored') : undefined,
      })
    },
    [onComplete, t],
  )

  // Scores whichever tasks still need it. A band already returned is kept, so a
  // retry after the consent step never sends, or saves, a task twice.
  const settle = useCallback(
    async (previous?: [TaskOutcome, TaskOutcome]) => {
      const outcomes: [TaskOutcome, TaskOutcome] = await Promise.all([
        previous && previous[0].kind !== 'refused'
          ? previous[0]
          : scoreTask(task1, r1Ref.current, track),
        previous && previous[1].kind !== 'refused'
          ? previous[1]
          : scoreTask(task2, r2Ref.current, track),
      ])
      const refused = outcomes.find((o): o is RefusedOutcome => o.kind === 'refused')
      if (refused) {
        setHeld({ outcomes, refusal: refused.refusal })
        return
      }
      report(outcomes)
    },
    [task1, task2, track, report],
  )

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    setSubmitting(true)
    void settle()
  }, [settle])

  // Finishing the section without the consent step. The refused answers are
  // recorded now, as any other unscored answer is.
  const carryOn = useCallback(() => {
    if (!held) return
    const skip = (o: TaskOutcome, prompt: WritingPrompt, text: string): TaskOutcome => {
      if (o.kind !== 'refused') return o
      persistSubmitted(prompt, text.trim())
      return { kind: 'unscored', consentSkipped: true }
    }
    setHeld(null)
    report([
      skip(held.outcomes[0], task1, r1Ref.current),
      skip(held.outcomes[1], task2, r2Ref.current),
    ])
  }, [held, task1, task2, report])

  const active = tab === 'writing-task-1' ? task1 : task2
  const activeResponse = tab === 'writing-task-1' ? response1 : response2
  const setActiveResponse = tab === 'writing-task-1' ? setResponse1 : setResponse2

  const words1 = countWords(response1)
  const words2 = countWords(response2)
  const activeWords = tab === 'writing-task-1' ? words1 : words2
  const meetsMin = activeWords >= active.minWords

  return (
    <div className="min-h-screen bg-background">
      <StageHeader
        title={t('ielts.mock.stage.title', { n: 3, skill: 'Writing' })}
        stepLabel={t('ielts.mock.stage.step_writing', { skill: stepLabel })}
        seconds={SECTION_SECONDS.writing}
        onExpire={finish}
        paused={submitting}
        action={
          <Button size="sm" onClick={finish} disabled={submitting}>
            {submitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Check className="size-4" />
            )}
            {t('ielts.mock.writing.submit')}
          </Button>
        }
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-violet-500/25 bg-violet-500/[0.04] p-4">
          <PenLine className="mt-0.5 size-5 shrink-0 text-violet-400" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{t('ielts.mock.writing.intro_title')}</p>
            <p className="mt-1">
              {t('ielts.mock.writing.intro_body', {
                min1: task1.minWords,
                min2: task2.minWords,
              })}
            </p>
          </div>
        </div>

        <Tabs value={tab} onValueChange={(v) => setTab(v as TaskTab)}>
          <TabsList>
            <TabsTrigger value="writing-task-1">
              {t('ielts.mock.writing.tab_task1')}{' '}
              {words1 > 0 ? t('ielts.mock.writing.tab_words', { n: words1 }) : ''}
            </TabsTrigger>
            <TabsTrigger value="writing-task-2">
              {t('ielts.mock.writing.tab_task2')}{' '}
              {words2 > 0 ? t('ielts.mock.writing.tab_words', { n: words2 }) : ''}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <span className="mb-1.5 inline-block text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              {tab === 'writing-task-1'
                ? t('ielts.mock.writing.eyebrow_task1')
                : t('ielts.mock.writing.eyebrow_task2')}
            </span>
            <h2 className="font-heading text-base font-semibold text-foreground">{active.title}</h2>
            <div className="mt-3 whitespace-pre-line rounded-xl border border-border/60 bg-background/50 p-4 text-sm leading-relaxed text-foreground">
              {active.prompt}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mock-writing-response" className="text-sm font-medium text-foreground">
              {t('ielts.mock.writing.response_label', {
                task: tab === 'writing-task-1' ? 'Task 1' : 'Task 2',
              })}
            </label>
            <Textarea
              id="mock-writing-response"
              value={activeResponse}
              onChange={(e) => setActiveResponse(e.target.value)}
              placeholder={
                tab === 'writing-task-1'
                  ? t('ielts.mock.writing.placeholder_task1')
                  : t('ielts.mock.writing.placeholder_task2')
              }
              rows={18}
              className="resize-y leading-relaxed"
              disabled={submitting}
            />
            <div className="flex items-center justify-between text-xs">
              <span className={meetsMin ? 'text-emerald-500' : 'text-muted-foreground'}>
                {activeWords === 1
                  ? t('ielts.mock.writing.word_one', { n: activeWords })
                  : t('ielts.mock.writing.word_other', { n: activeWords })}
                {!meetsMin && (
                  <span className="ms-1 text-muted-foreground">
                    {' '}
                    {t('ielts.mock.writing.aim_for', {
                      min: active.minWords,
                      remaining: Math.max(0, active.minWords - activeWords),
                    })}
                  </span>
                )}
                {meetsMin && (
                  <span className="ms-1">{t('ielts.mock.writing.minimum_reached')}</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {submitting && !held && (
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin text-primary" />
            {t('ielts.mock.writing.marking_notice')}
          </div>
        )}

        {/* Answered in place; once it is, the same two answers are marked. */}
        {held && (
          <InlineAIConsentPrompt
            refusal={held.refusal}
            onResolved={() => {
              const previous = held.outcomes
              setHeld(null)
              void settle(previous)
            }}
          />
        )}

        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* "Submitting marks both tasks" is not true while held: the
                button below then moves on without marking. */}
            {!held && (
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
                <span>{t('ielts.mock.writing.finish_warning')}</span>
              </p>
            )}
            <Button size="lg" onClick={held ? carryOn : finish} disabled={submitting && !held}>
              {submitting && !held ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              {t('ielts.mock.writing.finish')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
