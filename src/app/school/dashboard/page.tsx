'use client'

// ─── School portal dashboard ───────────────────────────────────────────────
// /school/dashboard
//
// REBUILT 12 OCTOBER 2026. What the old dashboard showed, so nobody brings
// it back:
//   * Every count came from the browser reading school_members and classes
//     with the user's own session. With production RLS recursing (42P17)
//     each read failed, the failure counted as zero, and a school saw no
//     pupils, no classes and a checklist telling it to start again.
//   * "Assignments this week" read a table that has never existed
//     (`assignments`), so it said 0 for ever.
//   * "Working At", "Predicted" and "On Track" were hard-coded to "--".
//   * "Hardest questions" listed quiz questions from the whole platform under
//     a heading that said they were this school's pupils'.
//   * A "View Demo Dashboard" card sent a paying school to sample data.
//   * The year-group and class filters changed nothing on the page.
//   * Quick actions sent teachers to admin pages that refuse them, and to an
//     importer that queries a table that does not exist.
// Everything now comes from GET /api/school/summary, read server-side and
// scoped: a teacher sees their own classes, school leaders the whole school.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  ClipboardCheck,
  LayoutDashboard,
  Mail,
  School,
  Target,
  Upload,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import type { SchoolSummary } from '@/app/api/school/summary/route'

/**
 * A school's last day of access as a calendar date. Provisioning stores the
 * END of that day in UTC (23:59:59Z), which a browser east of Greenwich
 * would show as the next day; noon UTC on the same date is that date in
 * every timezone a school is in.
 */
function lastDay(accessUntil: string): string {
  return `${accessUntil.slice(0, 10)}T12:00:00Z`
}

function Tile({ label, value, hint }: { label: string; value: number; hint?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export default function SchoolDashboardPage() {
  const t = useT()
  const fmt = useFormatDate()
  const [data, setData] = useState<SchoolSummary | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/school/summary', { cache: 'no-store' })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error ?? t('school.portal.dash.load_error'))
      }
      setData((await res.json()) as SchoolSummary)
    } catch (err) {
      setData(null)
      setError(err instanceof Error ? err.message : t('school.portal.dash.load_error'))
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    load()
  }, [load])

  if (loading) {
    return (
      <div className="space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-36 w-full rounded-xl" />
        <div className="grid gap-4 sm:grid-cols-3">
          <Skeleton className="h-28 rounded-xl" />
          <Skeleton className="h-28 rounded-xl" />
          <Skeleton className="h-28 rounded-xl" />
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div
        role="alert"
        className="flex flex-col items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5"
      >
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error ?? t('school.portal.dash.load_error')}
        </p>
        <Button variant="outline" size="sm" onClick={load}>
          {t('school.queue.retry')}
        </Button>
      </div>
    )
  }

  const isAdmin = data.viewer.role === 'admin'
  const wholeSchool = data.viewer.scope === 'school'
  const setupSteps = data.setup
    ? [
        {
          label: t('school.portal.dash.setup.staff'),
          done: data.setup.hasStaff,
          href: '/school/invite',
          adminOnly: true,
        },
        {
          label: t('school.portal.dash.setup.pupils'),
          done: data.setup.hasPupils,
          href: '/school/admin/bulk-upload',
          adminOnly: true,
        },
        {
          label: t('school.portal.dash.setup.classes'),
          done: data.setup.hasClasses,
          href: '/school/classes',
          adminOnly: false,
        },
        {
          label: t('school.portal.dash.setup.enrol'),
          done: data.setup.hasEnrolments,
          href: '/school/classes',
          adminOnly: false,
        },
      ]
    : []
  const setupIncomplete = setupSteps.some((s) => !s.done)

  const actions = [
    {
      href: '/school/marking',
      label: t('school.portal.nav.marking_queue'),
      icon: ClipboardCheck,
      show: true,
    },
    {
      href: '/school/analytics/marking',
      label: t('school.portal.nav.objectives'),
      icon: Target,
      show: true,
    },
    { href: '/school/classes', label: t('school.sidebar.classes'), icon: BookOpen, show: true },
    {
      href: '/school/invite',
      label: t('school.sidebar.invite_teachers'),
      icon: Mail,
      show: isAdmin,
    },
    {
      href: '/school/admin/bulk-upload',
      label: t('school.portal.nav.import_pupils'),
      icon: Upload,
      show: isAdmin,
    },
  ].filter((a) => a.show)

  return (
    <div className="space-y-8">
      <header>
        <div className="flex items-center gap-3">
          <LayoutDashboard className="h-7 w-7 text-primary" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-foreground">{t('school.dash.title')}</h1>
        </div>
        <p className="mt-1 flex items-center gap-2 text-muted-foreground">
          <School className="h-4 w-4" aria-hidden="true" />
          {data.school.name}
        </p>
        {data.school.accessUntil ? (
          <p className="mt-1 text-xs text-muted-foreground">
            {t('school.portal.dash.access_until').replace(
              '{date}',
              fmt(lastDay(data.school.accessUntil)),
            )}
          </p>
        ) : null}
      </header>

      {/* ── Marking: the part of the portal a teacher opens it for ─────── */}
      <section
        aria-labelledby="dash-marking"
        className="rounded-xl border border-primary/30 bg-primary/5 p-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2
              id="dash-marking"
              className="flex items-center gap-2 text-base font-semibold text-foreground"
            >
              <ClipboardCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              {t('school.portal.dash.marking_title')}
            </h2>
            <p className="mt-2 text-2xl font-bold tabular-nums text-foreground">
              {t('school.portal.dash.awaiting').replace('{n}', String(data.marking.awaitingReview))}
            </p>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex gap-2">
                <dt>{t('school.portal.dash.submitted_7d')}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {data.marking.submittedLast7Days}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt>{t('school.portal.dash.reviewed_7d')}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {data.marking.reviewedLast7Days}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt>{t('school.portal.dash.not_marked')}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {data.marking.notYetMarked}
                </dd>
              </div>
            </dl>
          </div>
          <Button render={<Link href="/school/marking" />}>
            {t('school.objectives.open_queue')}
          </Button>
        </div>
      </section>

      <section aria-label={t('school.dash.title')} className="grid gap-4 sm:grid-cols-3">
        <Tile
          label={t('school.portal.dash.pupils')}
          value={data.counts.pupils}
          hint={
            wholeSchool
              ? t('school.objectives.overall_school')
              : t('school.portal.dash.pupils_teacher_hint')
          }
        />
        <Tile label={t('school.sidebar.classes')} value={data.counts.classes} />
        {data.counts.staff !== null ? (
          <Tile label={t('school.portal.dash.staff')} value={data.counts.staff} />
        ) : null}
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <section aria-labelledby="dash-classes" className="space-y-3 lg:col-span-2">
          <h2 id="dash-classes" className="text-base font-semibold text-foreground">
            {wholeSchool ? t('school.sidebar.classes') : t('school.portal.dash.your_classes')}
          </h2>
          {data.classes.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              {wholeSchool
                ? t('school.portal.dash.no_classes_school')
                : t('school.queue.no_classes_body')}
            </p>
          ) : (
            <ul className="divide-y divide-border rounded-xl border border-border bg-card">
              {data.classes.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/school/classes/${c.id}`}
                    className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 hover:bg-accent/40"
                  >
                    <span className="font-medium text-foreground">
                      {c.name ?? t('school.queue.unnamed_class')}
                      <span className="ms-2 text-xs font-normal text-muted-foreground">
                        {[c.yearGroup, c.examBoard].filter(Boolean).join(' · ')}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {t('school.portal.dash.class_pupils').replace('{n}', String(c.pupils))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="space-y-6">
          {data.setup && setupIncomplete ? (
            <section
              aria-labelledby="dash-setup"
              className="rounded-xl border border-border bg-card p-5"
            >
              <h2 id="dash-setup" className="mb-3 text-base font-semibold text-foreground">
                {t('school.dash.setup.progress_title')}
              </h2>
              <ol className="space-y-3">
                {setupSteps.map((step, i) => {
                  const linkable = !step.done && (!step.adminOnly || isAdmin)
                  return (
                    <li key={step.label} className="flex items-center gap-3 text-sm">
                      {step.done ? (
                        <CheckCircle
                          className="h-5 w-5 shrink-0 text-green-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-border text-xs font-bold text-muted-foreground">
                          {i + 1}
                        </span>
                      )}
                      {linkable ? (
                        <Link href={step.href} className="font-medium text-primary hover:underline">
                          {step.label}
                        </Link>
                      ) : (
                        <span
                          className={
                            step.done ? 'text-muted-foreground line-through' : 'text-foreground'
                          }
                        >
                          {step.label}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ol>
            </section>
          ) : null}

          <section
            aria-labelledby="dash-actions"
            className="rounded-xl border border-border bg-card p-5"
          >
            <h2 id="dash-actions" className="mb-3 text-base font-semibold text-foreground">
              {t('school.dash.quick_actions.title')}
            </h2>
            <ul className="space-y-1">
              {actions.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-accent/40"
                  >
                    <a.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
