'use client'

/**
 * Parent dashboard - rebuilt August 2026 on the Prisma parent-linking spine.
 *
 * Data sources (both real, both role-gated server-side on Prisma
 * User.role === 'PARENT'):
 *
 *   GET  /api/parent/link      -> linked students for the signed-in parent
 *   POST /api/parent/link      -> redeem a child's 8-character invite code
 *   DELETE /api/parent/link    -> remove a link
 *   GET  /api/parent-reports   -> persisted WeeklyReport rows per child
 *
 * Deliberately absent: predicted grades, working-at grades, reading ages,
 * exam-readiness scores, year groups and time-on-platform minutes. None of
 * those are measured by the platform, so none of them are shown. Every
 * figure on this page comes straight from a database row.
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Link2, Loader2, LogIn, ShieldAlert, Unlink, Users } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useT } from '@/lib/i18n/use-t'

// ─── Types (mirror the API responses) ───────────────────────────────────

interface LinkedStudent {
  id: string
  firstName: string
  lastName: string
  school: string | null
  linkedAt: string
  hasActiveSubscription: boolean
}

interface WeeklyReportRow {
  id: string
  studentId: string
  studentFirstName: string
  weekStarting: string
  essaysCompleted: number
  // totalTimeMinutes is returned by the API but deliberately NOT rendered:
  // it is derived from essay counts (essays x 20), not measured time.
  totalTimeMinutes: number
  averageScore: number | null
  strengths: string[]
  focusAreas: string[]
  suggestions: string[]
  sentAt: string | null
}

type ViewState = 'loading' | 'signedOut' | 'notParent' | 'error' | 'ready'

// ─── Page ───────────────────────────────────────────────────────────────

export default function ParentDashboardPage() {
  const t = useT()

  const [view, setView] = useState<ViewState>('loading')
  const [students, setStudents] = useState<LinkedStudent[]>([])
  const [reports, setReports] = useState<WeeklyReportRow[]>([])
  const [reportsFailed, setReportsFailed] = useState(false)

  const [inviteCode, setInviteCode] = useState('')
  const [linking, setLinking] = useState(false)
  const [linkError, setLinkError] = useState('')
  const [linkSuccess, setLinkSuccess] = useState('')
  const [unlinkingId, setUnlinkingId] = useState<string | null>(null)
  const [unlinkError, setUnlinkError] = useState('')

  const load = useCallback(async () => {
    setView('loading')
    setReportsFailed(false)
    try {
      const res = await fetch('/api/parent/link')

      if (res.status === 401) {
        setView('signedOut')
        return
      }
      if (res.status === 403) {
        setView('notParent')
        return
      }
      if (!res.ok) {
        setView('error')
        return
      }

      const data = (await res.json()) as { students?: LinkedStudent[] }
      const linked = data.students ?? []
      setStudents(linked)

      if (linked.length > 0) {
        try {
          const reportsRes = await fetch('/api/parent-reports?limit=24')
          if (reportsRes.ok) {
            const reportsData = (await reportsRes.json()) as { data?: WeeklyReportRow[] }
            setReports(reportsData.data ?? [])
          } else {
            setReportsFailed(true)
          }
        } catch {
          setReportsFailed(true)
        }
      } else {
        setReports([])
      }

      setView('ready')
    } catch {
      setView('error')
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleLink(e: React.FormEvent) {
    e.preventDefault()
    setLinkError('')
    setLinkSuccess('')

    const code = inviteCode.trim().toUpperCase()
    if (!code) {
      setLinkError(t('dashboard.parent.link_code_required'))
      return
    }

    setLinking(true)
    try {
      const res = await fetch('/api/parent/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inviteCode: code }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setLinkError(
          typeof data?.error === 'string' ? data.error : t('dashboard.parent.link_failed'),
        )
        return
      }

      setInviteCode('')
      setLinkSuccess(t('dashboard.parent.link_success'))
      await load()
    } catch {
      setLinkError(t('dashboard.parent.link_failed'))
    } finally {
      setLinking(false)
    }
  }

  async function handleUnlink(studentId: string) {
    setUnlinkError('')
    if (!window.confirm(t('dashboard.parent.unlink_confirm'))) return

    setUnlinkingId(studentId)
    try {
      const res = await fetch('/api/parent/link', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setUnlinkError(
          typeof data?.error === 'string' ? data.error : t('dashboard.parent.unlink_failed'),
        )
        return
      }
      await load()
    } catch {
      setUnlinkError(t('dashboard.parent.unlink_failed'))
    } finally {
      setUnlinkingId(null)
    }
  }

  // ─── States ───────────────────────────────────────────────────────────

  if (view === 'loading') {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <div className="flex items-center justify-center gap-2 py-24 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>{t('dashboard.parent.loading')}</span>
        </div>
      </main>
    )
  }

  if (view === 'signedOut') {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8 space-y-4">
            <LogIn className="mx-auto h-10 w-10 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              {t('dashboard.parent.signin_title')}
            </h1>
            <p className="text-muted-foreground">{t('dashboard.parent.signin_body')}</p>
            <div className="flex flex-col items-center gap-2 pt-2">
              <Button render={<Link href="/auth/login?redirect=/dashboard/parent" />}>
                {t('dashboard.parent.signin_cta')}
              </Button>
              <Button variant="link" render={<Link href="/auth/register?role=parent" />}>
                {t('dashboard.parent.signin_register_cta')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    )
  }

  if (view === 'notParent') {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <Card>
          <CardContent className="pt-8 pb-8 space-y-4 text-center">
            <ShieldAlert className="mx-auto h-10 w-10 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              {t('dashboard.parent.not_parent_title')}
            </h1>
            <p className="text-muted-foreground">{t('dashboard.parent.not_parent_body')}</p>
            <div className="flex flex-col items-center gap-2 pt-2">
              <Button render={<Link href="/auth/register?role=parent" />}>
                {t('dashboard.parent.not_parent_cta')}
              </Button>
              <Button variant="link" render={<Link href="/dashboard" />}>
                {t('dashboard.parent.not_parent_student_cta')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    )
  }

  if (view === 'error') {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8 space-y-4">
            <p className="text-muted-foreground">{t('dashboard.parent.error_generic')}</p>
            <Button onClick={() => load()}>{t('dashboard.parent.retry')}</Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  // ─── Ready ────────────────────────────────────────────────────────────

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-foreground">{t('dashboard.parent.h1')}</h1>
        <p className="mt-1 text-muted-foreground">{t('dashboard.parent.intro')}</p>
      </header>

      {students.length === 0 ? (
        <LinkChildCard
          title={t('dashboard.parent.link_title')}
          inviteCode={inviteCode}
          setInviteCode={setInviteCode}
          linking={linking}
          linkError={linkError}
          linkSuccess={linkSuccess}
          onSubmit={handleLink}
        />
      ) : (
        <>
          {unlinkError && (
            <Alert variant="destructive">
              <AlertDescription>{unlinkError}</AlertDescription>
            </Alert>
          )}

          {reportsFailed && (
            <Alert>
              <AlertDescription>{t('dashboard.parent.reports_load_failed')}</AlertDescription>
            </Alert>
          )}

          {students.map((student) => (
            <ChildCard
              key={student.id}
              student={student}
              reports={reports.filter((r) => r.studentId === student.id)}
              unlinking={unlinkingId === student.id}
              onUnlink={() => handleUnlink(student.id)}
            />
          ))}

          <LinkChildCard
            title={t('dashboard.parent.link_another_title')}
            inviteCode={inviteCode}
            setInviteCode={setInviteCode}
            linking={linking}
            linkError={linkError}
            linkSuccess={linkSuccess}
            onSubmit={handleLink}
          />
        </>
      )}
    </main>
  )
}

// ─── Link-your-child panel ──────────────────────────────────────────────

function LinkChildCard(props: {
  title: string
  inviteCode: string
  setInviteCode: (v: string) => void
  linking: boolean
  linkError: string
  linkSuccess: string
  onSubmit: (e: React.FormEvent) => void
}) {
  const t = useT()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-primary" />
          {props.title}
        </CardTitle>
        <CardDescription>{t('dashboard.parent.link_body')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={props.onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="parent-invite-code">{t('dashboard.parent.link_code_label')}</Label>
            <Input
              id="parent-invite-code"
              value={props.inviteCode}
              onChange={(e) => props.setInviteCode(e.target.value.toUpperCase())}
              placeholder="e.g. ABCD2345"
              maxLength={20}
              className="font-mono tracking-widest text-lg"
              aria-invalid={!!props.linkError}
            />
            {props.linkError && <p className="text-sm text-destructive">{props.linkError}</p>}
            {props.linkSuccess && <p className="text-sm text-primary">{props.linkSuccess}</p>}
          </div>
          <Button type="submit" disabled={props.linking || !props.inviteCode.trim()}>
            {props.linking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('dashboard.parent.link_linking')}
              </>
            ) : (
              t('dashboard.parent.link_submit')
            )}
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">{t('dashboard.parent.link_hint')}</p>
      </CardContent>
    </Card>
  )
}

// ─── Per-child card (real data only) ────────────────────────────────────

function ChildCard(props: {
  student: LinkedStudent
  reports: WeeklyReportRow[]
  unlinking: boolean
  onUnlink: () => void
}) {
  const t = useT()
  const { student, reports } = props

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            {student.firstName} {student.lastName}
          </CardTitle>
          <CardDescription className="mt-1 space-x-2">
            {student.school && <span>{student.school}</span>}
            <span>
              {student.hasActiveSubscription
                ? t('dashboard.parent.badge_active_sub')
                : t('dashboard.parent.badge_no_sub')}
            </span>
          </CardDescription>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={props.onUnlink}
          disabled={props.unlinking}
          className="shrink-0"
        >
          <Unlink className="mr-1.5 h-4 w-4" />
          {props.unlinking ? t('dashboard.parent.unlinking') : t('dashboard.parent.unlink_btn')}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">
          {t('dashboard.parent.reports_title')}
        </h3>

        {reports.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t('dashboard.parent.no_reports')}</p>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <ReportBlock key={report.id} report={report} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ReportBlock({ report }: { report: WeeklyReportRow }) {
  const t = useT()
  const weekLabel = new Date(report.weekStarting).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <p className="text-sm font-medium text-foreground">
        {t('dashboard.parent.report_week_of')} {weekLabel}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
        <span>
          {t('dashboard.parent.report_essays')}: {report.essaysCompleted}
        </span>
        {typeof report.averageScore === 'number' && (
          <span>
            {t('dashboard.parent.report_avg')}: {Math.round(report.averageScore)}%
          </span>
        )}
      </div>
      {report.strengths.length > 0 && (
        <ReportList label={t('dashboard.parent.report_strengths')} items={report.strengths} />
      )}
      {report.focusAreas.length > 0 && (
        <ReportList label={t('dashboard.parent.report_focus')} items={report.focusAreas} />
      )}
      {report.suggestions.length > 0 && (
        <ReportList label={t('dashboard.parent.report_suggestions')} items={report.suggestions} />
      )}
    </div>
  )
}

function ReportList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <ul className="mt-1 list-disc pl-5 text-sm text-foreground space-y-0.5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
