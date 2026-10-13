'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Bot, Loader2 } from 'lucide-react'
import { fill, fillText } from '@/components/games/fill'
import { InlineAIConsentPrompt } from '@/components/consent/InlineAIConsentPrompt'
import {
  isAiOptOutRefusal,
  readConsentRefusal,
  type AIConsentRefusal,
} from '@/components/consent/ai-consent-refusal'
import type { CoachReport } from '@/lib/game-results/coach'

type T = (key: string) => string

export interface CoachState {
  latest: { report: CoachReport; createdAt: string; answersUsed: number } | null
  planned: boolean
  minAnswers: number
  cooldownHours: number
}

const when = (iso: string) =>
  new Date(iso).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

/**
 * The AI coach card in the student's hub (POST /api/games/coach).
 *
 * Shown only with suggestions switched on; GameAnalyticsView leaves it out
 * otherwise, and the switch with its explanation stands in its place. For an
 * account with no plan or school it says plainly that the coach is part of a
 * plan, and that the results above stay free: no countdown, no pressure, for
 * an audience of children (CAP Code section 5).
 *
 * Every report carries the same label as AI marking: written by AI, checked by
 * nobody, and not a prediction of any exam result. The report itself has
 * already been held to the rules in src/lib/game-results/coach.ts.
 */
export function CoachCard({
  state,
  answered,
  t,
  onWritten,
}: {
  state: CoachState
  answered: number
  t: T
  onWritten: () => void
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refusal, setRefusal] = useState<AIConsentRefusal | null>(null)
  const [fresh, setFresh] = useState<CoachState['latest']>(null)
  const shown = fresh ?? state.latest

  const ask = async () => {
    setBusy(true)
    setError(null)
    setRefusal(null)
    try {
      const res = await fetch('/api/games/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: '{}',
      })
      const body = (await res.json().catch(() => null)) as Record<string, unknown> | null
      if (res.ok && body?.report) {
        setFresh({
          report: body.report as CoachReport,
          createdAt: String(body.createdAt),
          answersUsed: Number(body.answersUsed),
        })
        onWritten()
        return
      }
      const consent = readConsentRefusal(res.status, body)
      if (consent) {
        setRefusal(consent)
        return
      }
      if (isAiOptOutRefusal(res.status, body)) {
        setError(String(body?.error ?? ''))
        return
      }
      if (body?.code === 'cooldown' && typeof body.nextAvailableAt === 'string') {
        setError(fillText(t('ga.coach.cooldown'), { time: when(body.nextAvailableAt) }))
        return
      }
      setError(typeof body?.error === 'string' ? body.error : t('ga.coach.failed'))
    } catch {
      setError(t('ga.coach.failed'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="rounded-xl border border-primary/30 bg-card p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
        <Bot className="size-4 text-primary" aria-hidden="true" />
        {t('ga.coach.title')}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{t('ga.coach.lead')}</p>

      {!state.planned ? (
        <p className="mt-4 text-sm text-foreground">
          {t('ga.coach.needs_plan')}{' '}
          <Link href="/pricing" className="font-medium underline underline-offset-2">
            {t('ga.coach.plans')}
          </Link>
        </p>
      ) : (
        <>
          {shown && <CoachReportView entry={shown} t={t} />}

          {refusal && (
            <InlineAIConsentPrompt
              refusal={refusal}
              onResolved={() => void ask()}
              onDismiss={() => setRefusal(null)}
              className="mt-4"
            />
          )}

          {answered < state.minAnswers ? (
            <p className="mt-4 text-sm text-muted-foreground">
              {fill(t('ga.coach.too_few'), { n: state.minAnswers, have: answered })}
            </p>
          ) : (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => void ask()}
                disabled={busy}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {busy && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                {shown ? t('ga.coach.again') : t('ga.coach.ask')}
              </button>
              {busy && (
                <span className="text-xs text-muted-foreground" role="status">
                  {t('ga.coach.writing')}
                </span>
              )}
            </div>
          )}
          {error && (
            <p role="alert" className="mt-3 text-sm text-red-700">
              {error}
            </p>
          )}
        </>
      )}
    </section>
  )
}

function CoachReportView({ entry, t }: { entry: NonNullable<CoachState['latest']>; t: T }) {
  const r = entry.report
  return (
    <div className="mt-4 space-y-4 text-sm">
      <p className="text-foreground">{r.summary}</p>
      {r.strengths.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('ga.coach.strengths')}
          </h3>
          <ul className="mt-2 space-y-2">
            {r.strengths.map((s, n) => (
              <li key={n}>
                <span className="font-medium text-foreground">{s.title}.</span>{' '}
                <span className="text-muted-foreground">{s.evidence}</span> {s.why}
              </li>
            ))}
          </ul>
        </div>
      )}
      {r.workOn.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('ga.coach.work_on')}
          </h3>
          <ul className="mt-2 space-y-2">
            {r.workOn.map((w, n) => (
              <li key={n}>
                <span className="font-medium text-foreground">{w.title}.</span>{' '}
                <span className="text-muted-foreground">{w.evidence}</span> {w.how}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t('ga.coach.next')}
        </h3>
        <ul className="mt-2 space-y-2">
          {r.nextSteps.map((s, n) => (
            <li key={n} className="rounded-lg border border-border/60 p-3">
              <p className="text-foreground">{s.action}</p>
              <p className="mt-1 text-muted-foreground">{s.why}</p>
              <Link
                href={s.link}
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {t('ga.coach.go')} <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-border/60 pt-3 text-xs text-muted-foreground">
        {fill(t('ga.coach.label'), { date: when(entry.createdAt), n: entry.answersUsed })}
      </p>
    </div>
  )
}
