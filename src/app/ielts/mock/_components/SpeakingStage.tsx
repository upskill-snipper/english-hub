'use client'

// ─── SpeakingStage ──────────────────────────────────────────────────────────
// The Speaking section of the mock (~14 min). It walks the candidate through the
// three parts of a real IELTS Speaking interview under one overall clock:
//   • Part 1 - short interview questions (familiar topics).
//   • Part 2 - the "long turn": a 60s preparation countdown then up to 120s of
//     speaking from a cue card (an inner sub-timer, paced within the 14 min).
//   • Part 3 - a two-way discussion of more abstract ideas.
// Recording is optional and for self-review only (noted to the candidate); the
// scored artefact is a TYPED transcript per part, matching the Wave-1 Speaking
// feedback contract.
//
// On submit OR expiry the three transcripts are combined and POSTed to
// /api/ielts/speaking-feedback. Resilience (per spec): any non-OK / network /
// parse failure still records the response and reports a "submitted" result so
// the mock completes regardless of AI availability.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from 'react'
import { Mic, Check, Loader2, Timer, AlertTriangle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type {
  Band,
  CriterionFeedback,
  IeltsTaskType,
  SpeakingCue,
  TaskFeedback,
} from '@/lib/ielts/types'
import { genId, saveAttempt } from '@/lib/ielts/store'

import type { TaskResult } from '../mock-types'
import { SECTION_SECONDS } from '../mock-types'
import { useMockT, type TFn } from '../use-mock-t'
import StageHeader from './StageHeader'
import { formatClock } from './CountdownTimer'

interface SpeakingStageProps {
  part1: SpeakingCue
  part2: SpeakingCue
  part3: SpeakingCue
  stepLabel: string
  onComplete: (result: TaskResult) => void
}

type PartKey = 'p1' | 'p2' | 'p3'

function countWords(text: string): number {
  const t = text.trim()
  return t ? t.split(/\s+/).length : 0
}

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

export default function SpeakingStage({
  part1,
  part2,
  part3,
  stepLabel,
  onComplete,
}: SpeakingStageProps) {
  const t = useMockT()
  const [t1, setT1] = useState('')
  const [t2, setT2] = useState('')
  const [t3, setT3] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const finishedRef = useRef(false)

  const transcriptRefs = useRef<Record<PartKey, string>>({ p1: '', p2: '', p3: '' })
  transcriptRefs.current = { p1: t1, p2: t2, p3: t3 }

  // ── Part 2 long-turn sub-timer (prep 60s → speak ≤120s) ───────────────────
  const prepSeconds = part2.prepSeconds ?? 60
  const speakSeconds = part2.speakSeconds ?? 120
  type LongTurnPhase = 'idle' | 'prep' | 'speaking' | 'done'
  const [phase, setPhase] = useState<LongTurnPhase>('idle')
  const [subLeft, setSubLeft] = useState(0)
  const subTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearSub = useCallback(() => {
    if (subTimerRef.current !== null) {
      clearInterval(subTimerRef.current)
      subTimerRef.current = null
    }
  }, [])

  // Tidy the sub-timer on unmount.
  useEffect(() => () => clearSub(), [clearSub])

  const runSub = useCallback(
    (duration: number, next: LongTurnPhase, then?: () => void) => {
      clearSub()
      setSubLeft(duration)
      subTimerRef.current = setInterval(() => {
        setSubLeft((prev) => {
          if (prev <= 1) {
            clearSub()
            setPhase(next)
            then?.()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    },
    [clearSub],
  )

  const startPrep = useCallback(() => {
    setPhase('prep')
    runSub(prepSeconds, 'speaking', () => runSub(speakSeconds, 'done'))
  }, [prepSeconds, speakSeconds, runSub])

  const startSpeakingNow = useCallback(() => {
    setPhase('speaking')
    runSub(speakSeconds, 'done')
  }, [speakSeconds, runSub])

  const stopLongTurn = useCallback(() => {
    clearSub()
    setPhase('done')
    setSubLeft(0)
  }, [clearSub])

  // ── Finish: combine transcripts, POST, persist, report up ─────────────────
  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    clearSub()
    setSubmitting(true)

    const parts = transcriptRefs.current
    const combined = [
      `${part1.title}\n${parts.p1.trim()}`,
      `${part2.title}\n${parts.p2.trim()}`,
      `${part3.title}\n${parts.p3.trim()}`,
    ].join('\n\n')

    const promptText = [
      `${part1.title}\n${part1.prompts.join('\n')}`,
      `${part2.title}\n${part2.prompts.join('\n')}`,
      `${part3.title}\n${part3.prompts.join('\n')}`,
    ].join('\n\n')

    const recordSubmitted = (note: string) => {
      // Persist what we have so the work is never lost, then report up.
      try {
        if (combined.trim().length > 0) {
          saveAttempt({
            id: genId('sp'),
            skill: 'speaking',
            // Part 2 (the long turn) best represents a holistic speaking sample.
            taskType: 'speaking-part-2' as IeltsTaskType,
            promptId: part2.id,
            responseText: combined,
            band: 0,
            criteria: [],
            date: new Date().toISOString(),
          })
        }
      } catch {
        /* non-fatal */
      }
      onComplete({ skill: 'speaking', status: 'submitted', band: null, criteria: [], note })
    }

    void (async () => {
      // Not enough typed to score (API floor is 20 chars) → record only.
      if (combined.trim().length < 20) {
        recordSubmitted(t('ielts.mock.speaking.note_too_short'))
        return
      }

      try {
        const res = await fetch('/api/ielts/speaking-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            part: 'speaking-part-2',
            promptText,
            transcript: combined.trim().slice(0, 8000),
            promptId: part2.id,
          }),
        })

        if (!res.ok) {
          recordSubmitted(t('ielts.mock.speaking.note_service_unavailable'))
          return
        }

        const data = (await res.json().catch(() => null)) as { feedback?: unknown } | null
        if (!data || !isTaskFeedback(data.feedback)) {
          recordSubmitted(t('ielts.mock.speaking.note_unreadable'))
          return
        }

        const fb = data.feedback
        const band: Band = fb.overallBand
        const criteria: CriterionFeedback[] = fb.criteria
        try {
          saveAttempt({
            id: genId('sp'),
            skill: 'speaking',
            taskType: 'speaking-part-2' as IeltsTaskType,
            promptId: part2.id,
            responseText: combined,
            band,
            criteria,
            date: new Date().toISOString(),
          })
        } catch {
          /* non-fatal */
        }
        onComplete({ skill: 'speaking', status: 'scored', band, criteria })
      } catch {
        recordSubmitted(t('ielts.mock.speaking.note_network_failed'))
      }
    })()
  }, [clearSub, part1, part2, part3, onComplete, t])

  return (
    <div className="min-h-screen bg-background">
      <StageHeader
        title={t('ielts.mock.stage.title', { n: 4, skill: 'Speaking' })}
        stepLabel={t('ielts.mock.stage.step_speaking', { skill: stepLabel })}
        seconds={SECTION_SECONDS.speaking}
        onExpire={finish}
        paused={submitting}
        action={
          <Button size="sm" onClick={finish} disabled={submitting}>
            {submitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Check className="size-4" />
            )}
            {t('ielts.mock.speaking.submit')}
          </Button>
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/25 bg-rose-500/[0.04] p-4">
          <Mic className="mt-0.5 size-5 shrink-0 text-rose-400" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{t('ielts.mock.speaking.intro_title')}</p>
            <p className="mt-1">{t('ielts.mock.speaking.intro_body')}</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Part 1 */}
          <PartBlock
            t={t}
            badge={t('ielts.mock.speaking.badge_part1')}
            title={part1.title}
            value={t1}
            onChange={setT1}
            disabled={submitting}
          >
            <ol className="mb-3 space-y-2">
              {part1.prompts.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-foreground">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-[11px] font-semibold text-rose-400">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </PartBlock>

          {/* Part 2 - long turn with prep/speak sub-timer */}
          <PartBlock
            t={t}
            badge={t('ielts.mock.speaking.badge_part2')}
            title={part2.title}
            value={t2}
            onChange={setT2}
            disabled={submitting}
          >
            <div className="mb-3 space-y-1.5 text-sm text-foreground">
              <p className="font-medium">{part2.prompts[0]}</p>
              <ul className="ml-1 space-y-1">
                {part2.prompts.slice(1).map((p, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    {i > 0 && <span className="text-rose-400">•</span>}
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-3">
              <div className="flex items-center gap-2 text-sm">
                <Timer
                  className={phase === 'speaking' ? 'size-4 text-rose-400' : 'size-4 text-sky-400'}
                />
                <span className="font-medium text-foreground">
                  {phase === 'idle' && t('ielts.mock.speaking.longturn_idle')}
                  {phase === 'prep' &&
                    t('ielts.mock.speaking.longturn_prep', { time: formatClock(subLeft) })}
                  {phase === 'speaking' &&
                    t('ielts.mock.speaking.longturn_speaking', { time: formatClock(subLeft) })}
                  {phase === 'done' && t('ielts.mock.speaking.longturn_done')}
                </span>
              </div>
              <div className="ml-auto flex gap-2">
                {phase === 'idle' && (
                  <Button type="button" size="sm" variant="outline" onClick={startPrep}>
                    <Timer className="size-3.5" />
                    {t('ielts.mock.speaking.start_prep')}
                  </Button>
                )}
                {phase === 'prep' && (
                  <Button type="button" size="sm" onClick={startSpeakingNow}>
                    {t('ielts.mock.speaking.start_speaking')}
                  </Button>
                )}
                {(phase === 'prep' || phase === 'speaking') && (
                  <Button type="button" size="sm" variant="ghost" onClick={stopLongTurn}>
                    {t('ielts.mock.speaking.stop')}
                  </Button>
                )}
              </div>
            </div>
          </PartBlock>

          {/* Part 3 */}
          <PartBlock
            t={t}
            badge={t('ielts.mock.speaking.badge_part3')}
            title={part3.title}
            value={t3}
            onChange={setT3}
            disabled={submitting}
          >
            <ol className="mb-3 space-y-2">
              {part3.prompts.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-foreground">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-[11px] font-semibold text-rose-400">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </PartBlock>
        </div>

        {submitting && (
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin text-primary" />
            {t('ielts.mock.speaking.marking_notice')}
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <span>
                {t('ielts.mock.speaking.finish_warning', {
                  n: countWords([t1, t2, t3].join(' ')),
                })}
              </span>
            </p>
            <Button size="lg" onClick={finish} disabled={submitting}>
              {submitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              {t('ielts.mock.speaking.finish')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PartBlock({
  t,
  badge,
  title,
  value,
  onChange,
  disabled,
  children,
}: {
  t: TFn
  badge: string
  title: string
  value: string
  onChange: (v: string) => void
  disabled: boolean
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-border/60 bg-card p-5">
      <span className="mb-1.5 inline-block text-[0.65rem] uppercase tracking-wide text-muted-foreground">
        {badge}
      </span>
      <h2 className="mb-3 font-heading text-base font-semibold text-foreground">{title}</h2>
      {children}
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('ielts.mock.speaking.part_placeholder')}
        rows={4}
        className="mt-2 resize-y"
        disabled={disabled}
      />
    </section>
  )
}
