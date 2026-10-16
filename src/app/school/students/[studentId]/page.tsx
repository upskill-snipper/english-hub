'use client'

// ─── One pupil ──────────────────────────────────────────────────────────────
// /school/students/[studentId]
//
// REBUILT 12 OCTOBER 2026. The page crashed for every pupil. It spread
// `student.modules`, but /api/school/students/[studentId] returns
// `{ analytics, enrolments, module_progress, ... }`: the page had been
// written against a shape no API has ever returned (modules, quizHistory,
// mockExamResults, examReadiness, predictedGrade and more), so `modules` was
// undefined and `[...undefined]` threw. Alongside that it carried:
//   * a "Predicted Grade" hero and an "exam readiness" gauge, which the API
//     derived by mapping a quiz average onto a GCSE grade;
//   * a "Generate Study Plan" button that was an alert();
//   * teacher notes kept in the browser's localStorage, which another
//     teacher, or the same teacher on another computer, could never see;
//   * "Contact parent", which opened an email to the PUPIL's own address
//     beginning "Dear Parent/Guardian".
// All of those are gone. The page now shows what the API really returns:
// the pupil, their strongest and weakest assessment objectives across their
// marked essays (the promise in the pilot proposal), their essays, and their
// course progress, with no grade invented from a quiz.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AlertTriangle, ArrowLeft, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { StatusBadge } from '@/components/school/marking/StatusBadge'
import { PupilStrengths } from '@/components/school/objectives/PupilStrengths'
import { PupilGamesPanel } from '@/components/school/games/PupilGamesPanel'
import type { PupilResponse } from '@/app/api/school/students/[studentId]/route'

type LoadState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'not_found'; message: string }
  | { kind: 'ready'; data: PupilResponse }

export default function PupilPage() {
  const t = useT()
  const fmt = useFormatDate()
  const params = useParams()
  const studentId = String(params.studentId ?? '')
  const [state, setState] = useState<LoadState>({ kind: 'loading' })

  const load = useCallback(async () => {
    setState({ kind: 'loading' })
    try {
      const res = await fetch(`/api/school/students/${studentId}`, { cache: 'no-store' })
      const body = (await res.json().catch(() => ({}))) as PupilResponse & { error?: string }
      if (res.status === 404 || res.status === 403) {
        setState({ kind: 'not_found', message: body.error ?? t('school.pupil.not_found') })
        return
      }
      if (!res.ok) throw new Error(body.error ?? t('school.pupil.load_error'))
      setState({ kind: 'ready', data: body })
    } catch (err) {
      setState({
        kind: 'error',
        message: err instanceof Error ? err.message : t('school.pupil.load_error'),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId])

  useEffect(() => {
    if (studentId) load()
  }, [studentId, load])

  if (state.kind === 'loading') {
    return (
      <div className="space-y-4" aria-busy="true">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-28 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    )
  }

  if (state.kind !== 'ready') {
    return (
      <div className="space-y-6">
        <Link
          href="/school/classes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('school.pupil.back_to_classes')}
        </Link>
        <div
          role="alert"
          className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6"
        >
          <p className="flex items-center gap-2 text-sm text-foreground">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            {state.message}
          </p>
          {state.kind === 'error' ? (
            <Button variant="outline" size="sm" onClick={load}>
              {t('school.queue.retry')}
            </Button>
          ) : null}
        </div>
      </div>
    )
  }

  const { data } = state
  const { pupil, analytics } = data
  const firstClass = pupil.classes[0]

  return (
    <div className="space-y-6 print:text-black">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href={firstClass ? `/school/classes/${firstClass.id}` : '/school/classes'}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {firstClass
            ? t('school.pupil.back_to_class').replace(
                '{class}',
                firstClass.name ?? t('school.queue.unnamed_class'),
              )
            : t('school.pupil.back_to_classes')}
        </Link>
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          {t('school.pupil.print')}
        </Button>
      </div>

      <GlassPanel className="p-5 sm:p-6">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {pupil.name ?? pupil.email ?? t('school.queue.unnamed_pupil')}
        </h1>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {pupil.yearGroup ? <span>{pupil.yearGroup}</span> : null}
          {pupil.classes.length > 0 ? (
            <span>
              {pupil.classes.map((c) => c.name ?? t('school.queue.unnamed_class')).join(', ')}
            </span>
          ) : null}
          <span>
            {data.lastActivityAt
              ? t('school.pupil.last_active').replace('{date}', fmt(data.lastActivityAt))
              : t('school.pupil.no_activity')}
          </span>
        </p>
      </GlassPanel>

      <GlassPanel className="p-5 sm:p-6">
        <PanelEyebrow>{t('school.pupil.objectives_title')}</PanelEyebrow>
        <p className="mb-4 text-xs text-muted-foreground">{t('school.pupil.objectives_hint')}</p>
        <PupilStrengths objectives={data.objectives} />
      </GlassPanel>

      <GlassPanel className="p-5 sm:p-6">
        <PanelEyebrow>{t('school.pupil.essays_title')}</PanelEyebrow>
        {data.essays.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">{t('school.pupil.no_essays')}</p>
        ) : (
          <ul className="mt-3 divide-y divide-border/60">
            {data.essays.map((e) => (
              <li key={e.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm text-foreground">
                    {e.title ?? t('school.queue.untitled')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {[e.className, fmt(e.submittedAt)].filter(Boolean).join(' · ')}
                  </p>
                </div>
                <span className="text-sm tabular-nums text-foreground">
                  {e.aiScore !== null && e.aiMaxMarks !== null
                    ? `${e.aiScore} / ${e.aiMaxMarks}`
                    : ''}
                </span>
                <StatusBadge status={e.status} />
                <Link
                  href={`/school/marking?open=${e.id}`}
                  className="text-xs text-primary hover:underline print:hidden"
                >
                  {t('school.pupil.open_in_queue')}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </GlassPanel>

      <GlassPanel className="p-5 sm:p-6">
        <PanelEyebrow>{t('school.pupil.progress_title')}</PanelEyebrow>
        <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              label: t('school.pupil.modules_completed'),
              value: `${analytics.modules_completed} / ${analytics.total_modules}`,
            },
            {
              label: t('school.pupil.quiz_average'),
              value: data.module_progress.some(
                (m) => m.quiz_score !== null && m.quiz_score !== undefined,
              )
                ? `${analytics.avg_quiz_score}%`
                : t('school.pupil.quiz_average_none'),
            },
            {
              label: t('school.pupil.practice_sessions'),
              value: String(analytics.practice_sessions_count),
            },
            { label: t('school.pupil.certificates'), value: String(analytics.certificates_count) },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border/60 bg-background/40 p-3">
              <dt className="text-xs text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums text-foreground">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-muted-foreground">{t('school.pupil.quiz_note')}</p>
      </GlassPanel>

      {/* 16 October 2026: the pupil's game results, from the day they joined. */}
      <PupilGamesPanel studentId={studentId} />
    </div>
  )
}
