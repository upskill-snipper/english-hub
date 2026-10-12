'use client'

// ─── Teacher marking queue ─────────────────────────────────────────────────
// /school/marking
//
// Every essay a pupil submits for marking reaches their class teacher here,
// with the AI's mark for each assessment objective. The teacher approves it
// or adjusts it. Pupils see the AI's feedback straight away; the teacher's
// review follows (Calum's decision, 12 October 2026).
//
// REBUILT 12 OCTOBER 2026. What the old page did wrong, so nobody puts it
// back:
//   * It was not in the portal's sidebar, so no teacher could find it.
//   * "AI band marks" read marking_submissions.ai_band_marks, which nothing
//     writes, so every essay said "No band-level marks recorded". The marks
//     are in ai_ao_breakdown (ObjectiveMarksEditor).
//   * A teacher could not correct a single objective, so
//     teacher_moderations.ao_corrections stayed empty (review-body.ts).
//   * Its API read through the teacher's own session and returned an empty
//     list on any failure, and named every pupil "Student"
//     (/api/school/marking).
//   * After a decision it put the review route's response straight into the
//     table. That response looks the pupil up as school_members.id =
//     student_id, which never matches a pupil's auth id, so every reviewed
//     row was renamed "Student". The page now reloads the essay from its own
//     scoped route instead.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AlertTriangle, ClipboardCheck, GraduationCap, Loader2, Search, X } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { StatusBadge } from '@/components/school/marking/StatusBadge'
import { ReviewPanel } from '@/components/school/marking/ReviewPanel'
import { statusInfo, type QueueBucket } from '@/components/school/marking/status'
import type { ReviewBody, ReviewDecision } from '@/components/school/marking/review-body'
import type { QueueResponse, QueueRow } from '@/app/api/school/marking/route'
import type { SubmissionDetail } from '@/app/api/school/marking/[submissionId]/route'

type BucketFilter = QueueBucket | 'all'

const BUCKETS: { value: BucketFilter; labelKey: string }[] = [
  { value: 'awaiting', labelKey: 'school.queue.filter.awaiting' },
  { value: 'done', labelKey: 'school.queue.filter.done' },
  { value: 'not_marked', labelKey: 'school.queue.filter.not_marked' },
  { value: 'all', labelKey: 'school.queue.filter.all' },
]

async function readError(res: Response, fallback: string): Promise<string> {
  const body = (await res.json().catch(() => ({}))) as { error?: string }
  return body.error ?? fallback
}

export default function SchoolMarkingPage() {
  const t = useT()
  const fmt = useFormatDate()

  const [queue, setQueue] = useState<QueueResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [bucket, setBucket] = useState<BucketFilter>('awaiting')
  const [classId, setClassId] = useState<string>('all')
  const [search, setSearch] = useState('')

  const [activeId, setActiveId] = useState<string | null>(null)
  const [detail, setDetail] = useState<SubmissionDetail | null>(null)
  const [detailError, setDetailError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setLoadError(null)
    try {
      const res = await fetch('/api/school/marking', { cache: 'no-store' })
      if (!res.ok) throw new Error(await readError(res, t('school.queue.load_error')))
      setQueue((await res.json()) as QueueResponse)
    } catch (err) {
      setQueue(null)
      setLoadError(err instanceof Error ? err.message : t('school.queue.load_error'))
    } finally {
      setLoading(false)
    }
  }, [t])

  useEffect(() => {
    load()
    // A pupil's page links here with ?open=<submissionId> to open one essay,
    // and a class page with ?class=<classId> to show that class. Read from
    // location rather than useSearchParams, which would need a Suspense
    // boundary of its own.
    const params = new URLSearchParams(window.location.search)
    const open = params.get('open')
    if (open) setActiveId(open)
    const cls = params.get('class')
    if (cls) {
      setClassId(cls)
      setBucket('all')
    }
    // Load once; `t` changes identity when a locale file arrives.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchDetail = useCallback(
    async (id: string): Promise<SubmissionDetail> => {
      const res = await fetch(`/api/school/marking/${id}`, { cache: 'no-store' })
      if (!res.ok) throw new Error(await readError(res, t('school.queue.drawer.load_error')))
      return ((await res.json()) as { submission: SubmissionDetail }).submission
    },
    [t],
  )

  useEffect(() => {
    if (!activeId) {
      setDetail(null)
      setDetailError(null)
      return
    }
    let cancelled = false
    setDetail(null)
    setDetailError(null)
    fetchDetail(activeId)
      .then((d) => {
        if (!cancelled) setDetail(d)
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setDetailError(err instanceof Error ? err.message : t('school.queue.drawer.load_error'))
        }
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])

  const rows = useMemo(() => queue?.submissions ?? [], [queue])

  const counts = useMemo(() => {
    const c: Record<BucketFilter, number> = {
      awaiting: 0,
      done: 0,
      not_marked: 0,
      all: rows.length,
    }
    for (const r of rows) {
      const b = statusInfo(r.status).bucket
      if (b) c[b] += 1
    }
    return c
  }, [rows])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return rows.filter((r) => {
      if (bucket !== 'all' && statusInfo(r.status).bucket !== bucket) return false
      if (classId !== 'all' && r.classId !== classId) return false
      if (!q) return true
      return (
        (r.studentName ?? '').toLowerCase().includes(q) ||
        (r.title ?? '').toLowerCase().includes(q) ||
        (r.className ?? '').toLowerCase().includes(q)
      )
    })
  }, [rows, bucket, classId, search])

  async function handleDecision(decision: ReviewDecision, body: ReviewBody) {
    if (!activeId) return
    const res = await fetch(`/api/marking/${activeId}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(await readError(res, t('school_marking_review.submit_failed')))

    // Reload from the scoped route rather than trusting the review route's
    // echo, whose pupil and class names are wrong (see header).
    const fresh = await fetchDetail(activeId).catch(() => null)
    if (fresh) {
      setQueue((prev) =>
        prev
          ? {
              ...prev,
              submissions: prev.submissions.map(
                (r): QueueRow =>
                  r.id === fresh.id
                    ? {
                        ...r,
                        status: fresh.status,
                        finalGrade: fresh.finalGrade,
                        reviewedAt: fresh.reviewedAt,
                        lastDecision: fresh.history[0]
                          ? { decision: fresh.history[0].decision, at: fresh.history[0].at }
                          : r.lastDecision,
                      }
                    : r,
              ),
            }
          : prev,
      )
    } else {
      // The decision was saved; only the refresh failed. Reload the list so
      // the row does not go on showing its old status.
      void load()
    }
    toast.success(t('school_marking_review.saved'))
    if (decision === 'correct' && fresh) setDetail(fresh)
    else setActiveId(null)
  }

  const scopeNote =
    queue?.scope === 'school'
      ? t('school.queue.subtitle_school')
      : t('school.queue.subtitle_teacher')

  return (
    <div className="min-h-screen bg-background">
      <div className="px-0 py-2 sm:px-2">
        <header className="mb-6">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t('school.queue.title')}
            </h1>
          </div>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{scopeNote}</p>
          <p className="mt-2 max-w-3xl text-xs text-muted-foreground">
            {t('school.queue.ai_first_note')}
          </p>
        </header>

        {loading ? (
          <div className="space-y-2" aria-busy="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full rounded-lg" />
            ))}
          </div>
        ) : loadError ? (
          <div
            role="alert"
            className="flex flex-col items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5"
          >
            <p className="flex items-center gap-2 text-sm text-destructive">
              <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {loadError}
            </p>
            <Button variant="outline" size="sm" onClick={load}>
              {t('school.queue.retry')}
            </Button>
          </div>
        ) : queue && !queue.hasClasses ? (
          <EmptyState
            title={t('school.queue.no_classes_title')}
            body={t('school.queue.no_classes_body')}
          />
        ) : rows.length === 0 ? (
          <EmptyState title={t('school.queue.empty_title')} body={t('school.queue.empty_body')} />
        ) : (
          <>
            <div
              className="mb-4 flex flex-wrap items-center gap-2"
              role="group"
              aria-label={t('school.queue.filter.label')}
            >
              {BUCKETS.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setBucket(b.value)}
                  aria-pressed={bucket === b.value}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                    bucket === b.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(b.labelKey)} <span className="tabular-nums">({counts[b.value]})</span>
                </button>
              ))}
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="relative min-w-[12rem] max-w-sm flex-1">
                <Search
                  className="pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('school.queue.search_placeholder')}
                  aria-label={t('school.queue.search_placeholder')}
                  className="ps-8"
                />
              </div>
              {(queue?.classes.length ?? 0) > 1 ? (
                <select
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                  aria-label={t('school.queue.filter.class_label')}
                  className="h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground"
                >
                  <option value="all">{t('school.queue.filter.class_all')}</option>
                  {queue?.classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name ?? t('school.queue.unnamed_class')}
                    </option>
                  ))}
                </select>
              ) : null}
              {search || classId !== 'all' ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearch('')
                    setClassId('all')
                  }}
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  {t('school.queue.clear')}
                </Button>
              ) : null}
            </div>

            {queue?.truncated.open ? (
              <p className="mb-3 text-xs text-amber-800 dark:text-amber-300">
                {t('school.queue.open_truncated').replace('{n}', String(queue.truncated.open))}
              </p>
            ) : null}
            {queue?.truncated.done && bucket !== 'awaiting' && bucket !== 'not_marked' ? (
              <p className="mb-3 text-xs text-muted-foreground">
                {t('school.queue.done_truncated').replace('{n}', String(queue.truncated.done))}
              </p>
            ) : null}

            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border py-12 text-center">
                <p className="text-sm text-muted-foreground">{t('school.queue.filter_empty')}</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">{t('school.queue.title')}</caption>
                    <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                      <tr>
                        <th scope="col" className="px-3 py-2.5 text-start font-medium">
                          {t('school.queue.col.pupil')}
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-start font-medium">
                          {t('school.queue.col.essay')}
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-start font-medium">
                          {t('school.queue.col.ai_mark')}
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-start font-medium">
                          {t('school.queue.col.submitted')}
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-start font-medium">
                          {t('school.queue.col.status')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filtered.map((r) => (
                        <tr
                          key={r.id}
                          className={cn(
                            'transition-colors hover:bg-accent/40',
                            activeId === r.id && 'bg-accent/30',
                          )}
                        >
                          <td className="px-3 py-2.5 align-top">
                            <button
                              type="button"
                              onClick={() => setActiveId(r.id)}
                              className="text-start font-medium text-foreground hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            >
                              {r.studentName ?? t('school.queue.unnamed_pupil')}
                            </button>
                            <span className="block text-xs text-muted-foreground">
                              {r.className ?? t('school.queue.no_class')}
                            </span>
                          </td>
                          <td className="max-w-[20rem] px-3 py-2.5 align-top text-muted-foreground">
                            <span className="line-clamp-2 text-foreground">
                              {r.title ?? t('school.queue.untitled')}
                            </span>
                            <span className="block text-xs">
                              {[
                                r.examBoard,
                                t('school.queue.words').replace('{n}', String(r.wordCount)),
                              ]
                                .filter(Boolean)
                                .join(' · ')}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-2.5 align-top tabular-nums text-foreground">
                            {r.aiScore !== null && r.aiMaxMarks !== null
                              ? `${r.aiScore} / ${r.aiMaxMarks}`
                              : '-'}
                          </td>
                          <td className="whitespace-nowrap px-3 py-2.5 align-top text-muted-foreground">
                            {fmt(r.submittedAt)}
                          </td>
                          <td className="px-3 py-2.5 align-top">
                            <StatusBadge status={r.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <Sheet
        open={activeId !== null}
        onOpenChange={(open) => {
          if (!open) setActiveId(null)
        }}
      >
        {/* The sheet's own classes cap a right-hand drawer at max-w-sm (384px)
            and three-quarters of a phone. The review form needs the room, so
            these carry the same data-[side=right] modifiers, which
            tailwind-merge lets win. */}
        <SheetContent
          side="right"
          className="flex flex-col gap-0 overflow-hidden data-[side=right]:w-full data-[side=right]:sm:max-w-2xl"
        >
          <SheetHeader>
            <SheetTitle className="flex flex-wrap items-center gap-x-2">
              {detail ? (
                <>
                  <span>{detail.studentName ?? t('school.queue.unnamed_pupil')}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {detail.className ?? t('school.queue.no_class')}
                  </span>
                </>
              ) : (
                <span>{t('school.queue.title')}</span>
              )}
            </SheetTitle>
            <SheetDescription>
              {detail
                ? [detail.title ?? t('school.queue.untitled'), detail.examBoard, detail.paper]
                    .filter(Boolean)
                    .join(' · ')
                : ' '}
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto border-t border-border p-4">
            {detailError ? (
              <p role="alert" className="text-sm text-destructive">
                {detailError}
              </p>
            ) : detail ? (
              <ReviewPanel detail={detail} onDecision={handleDecision} />
            ) : (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                {t('school.queue.drawer.loading')}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-4 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <GraduationCap className="h-7 w-7 text-primary" aria-hidden="true" />
      </div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">{title}</h2>
      <p className="max-w-md text-sm text-muted-foreground">{body}</p>
    </div>
  )
}
