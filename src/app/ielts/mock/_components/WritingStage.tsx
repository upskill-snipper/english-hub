'use client'

// ─── WritingStage ───────────────────────────────────────────────────────────
// The Writing section of the mock (60 min for BOTH tasks — one shared clock,
// just like the real exam). The candidate writes Task 1 and Task 2 in two
// textareas (with live word counts and the official minimums) and can tab
// between them. On submit OR timer expiry we POST EACH response to
// /api/ielts/writing-feedback (sending `task` + `track`) to obtain a band.
//
// Resilience (per spec): if the feedback call fails — network error, paywall
// (403), rate limit (429), over-length, or any non-OK status — the response is
// STILL recorded and the task is marked "submitted" (no band). The mock never
// blocks on AI availability. The Writing band reported up is the average of the
// task bands that scored; if neither scored, status is "submitted" with a note.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useRef, useState } from 'react'
import { PenLine, Check, Loader2, AlertTriangle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import StageHeader from './StageHeader'

type TaskTab = 'writing-task-1' | 'writing-task-2'

interface ScoredTask {
  band: Band | null
  criteria: CriterionFeedback[]
}

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
 * "submitted" attempt and returns a null band so the mock can continue.
 */
async function scoreTask(
  prompt: WritingPrompt,
  response: string,
  track: IeltsTrack,
): Promise<ScoredTask> {
  const trimmed = response.trim()
  // Too short for the API's 50-char floor → record, don't score.
  if (trimmed.length < 50) {
    persistSubmitted(prompt, trimmed)
    return { band: null, criteria: [] }
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
      persistSubmitted(prompt, trimmed)
      return { band: null, criteria: [] }
    }

    const data = (await res.json().catch(() => null)) as { feedback?: unknown } | null
    if (!data || !isTaskFeedback(data.feedback)) {
      persistSubmitted(prompt, trimmed)
      return { band: null, criteria: [] }
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
    return { band: fb.overallBand, criteria: fb.criteria }
  } catch {
    persistSubmitted(prompt, trimmed)
    return { band: null, criteria: [] }
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
  const [tab, setTab] = useState<TaskTab>('writing-task-1')
  const [response1, setResponse1] = useState('')
  const [response2, setResponse2] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const finishedRef = useRef(false)

  // Latest text held in refs so the timer's auto-submit always captures what is
  // on screen, even if it fires between renders.
  const r1Ref = useRef('')
  const r2Ref = useRef('')
  r1Ref.current = response1
  r2Ref.current = response2

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    setSubmitting(true)

    void (async () => {
      const [t1, t2] = await Promise.all([
        scoreTask(task1, r1Ref.current, track),
        scoreTask(task2, r2Ref.current, track),
      ])

      const scoredBands = [t1.band, t2.band].filter((b): b is Band => b !== null)
      const criteria = [...t1.criteria, ...t2.criteria]

      if (scoredBands.length === 0) {
        onComplete({
          skill: 'writing',
          status: 'submitted',
          band: null,
          criteria: [],
          note: 'Your Task 1 and Task 2 responses were recorded, but an AI band could not be generated this time (the feedback service may be unavailable, over its daily limit, or require a Premium subscription).',
        })
        return
      }

      const mean = scoredBands.reduce<number>((sum, b) => sum + b, 0) / scoredBands.length
      onComplete({
        skill: 'writing',
        status: 'scored',
        band: roundToBand(mean),
        criteria,
        note:
          scoredBands.length === 1
            ? 'Only one of your two tasks could be band-scored; the other was recorded as submitted.'
            : undefined,
      })
    })()
  }, [task1, task2, track, onComplete])

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
        title="Section 3 of 4 · Writing"
        stepLabel={`${stepLabel} · Task 1 + Task 2`}
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
            Submit Writing
          </Button>
        }
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-violet-500/25 bg-violet-500/[0.04] p-4">
          <PenLine className="mt-0.5 size-5 shrink-0 text-violet-400" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Writing — one hour for both tasks</p>
            <p className="mt-1">
              Spend about 20 minutes on Task 1 ({task1.minWords}+ words) and 40 minutes on Task 2 (
              {task2.minWords}+ words). Switch freely between the two. When you submit, or when the
              clock reaches zero, each response is sent for an AI band — and is saved either way.
            </p>
          </div>
        </div>

        <Tabs value={tab} onValueChange={(v) => setTab(v as TaskTab)}>
          <TabsList>
            <TabsTrigger value="writing-task-1">
              Task 1 {words1 > 0 ? `· ${words1}w` : ''}
            </TabsTrigger>
            <TabsTrigger value="writing-task-2">
              Task 2 {words2 > 0 ? `· ${words2}w` : ''}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <span className="mb-1.5 inline-block text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              {tab === 'writing-task-1' ? 'Writing Task 1' : 'Writing Task 2'}
            </span>
            <h2 className="font-heading text-base font-semibold text-foreground">{active.title}</h2>
            <div className="mt-3 whitespace-pre-line rounded-xl border border-border/60 bg-background/50 p-4 text-sm leading-relaxed text-foreground">
              {active.prompt}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mock-writing-response" className="text-sm font-medium text-foreground">
              Your response — {tab === 'writing-task-1' ? 'Task 1' : 'Task 2'}
            </label>
            <Textarea
              id="mock-writing-response"
              value={activeResponse}
              onChange={(e) => setActiveResponse(e.target.value)}
              placeholder={
                tab === 'writing-task-1' ? 'Write your report here…' : 'Write your essay here…'
              }
              rows={18}
              className="resize-y leading-relaxed"
              disabled={submitting}
            />
            <div className="flex items-center justify-between text-xs">
              <span className={meetsMin ? 'text-emerald-500' : 'text-muted-foreground'}>
                {activeWords} {activeWords === 1 ? 'word' : 'words'}
                {!meetsMin && (
                  <span className="ml-1 text-muted-foreground">
                    · aim for {active.minWords}+ ({Math.max(0, active.minWords - activeWords)} to
                    go)
                  </span>
                )}
                {meetsMin && <span className="ml-1">· minimum reached</span>}
              </span>
            </div>
          </div>
        </div>

        {submitting && (
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin text-primary" />
            Marking your writing… this can take a few seconds. Please wait.
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <span>
                Submitting marks both tasks and moves you on to Speaking. You cannot return to
                Writing.
              </span>
            </p>
            <Button size="lg" onClick={finish} disabled={submitting}>
              {submitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              Finish Writing &amp; start Speaking
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
