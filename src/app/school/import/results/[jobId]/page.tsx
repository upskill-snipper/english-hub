'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Download,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowLeft,
  Users,
  FileSpreadsheet,
  Loader2,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// ── Types ─────────────────────────────────────────────────────────────────────

type JobStatus = 'loading' | 'complete' | 'processing' | 'failed'

interface ImportUser {
  name: string
  email: string
  role: string
  year_group: string
  class_name: string
  status: 'created' | 'error' | 'duplicate'
  error_message?: string
}

interface ImportError {
  row: number
  email: string
  error: string
}

interface ImportJob {
  job_id: string
  status: 'complete' | 'processing' | 'failed'
  import_type: 'students' | 'teachers' | 'mixed'
  total: number
  success: number
  duplicates: number
  error_count: number
  completed_at: string | null
  errors: ImportError[]
  users: ImportUser[]
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDateTime(iso: string | null): string {
  if (!iso) return 'Unknown'
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function importTypeLabel(type: string): string {
  if (type === 'teachers') return 'Teachers'
  if (type === 'mixed') return 'Students & Teachers'
  return 'Students'
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: ImportUser['status'] }) {
  const tx = useT()
  if (status === 'created') {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
        <CheckCircle className="size-4 shrink-0" />
        {tx('school.b15.import_results.status_created')}
      </span>
    )
  }
  if (status === 'duplicate') {
    return (
      <span className="inline-flex items-center gap-1.5 text-clay-600 text-sm font-medium">
        <AlertCircle className="size-4 shrink-0" />
        {tx('school.b15.import_results.status_duplicate')}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-red-400 text-sm font-medium">
      <XCircle className="size-4 shrink-0" />
      {tx('school.b15.import_results.status_error')}
    </span>
  )
}

function AccountsTable({ users }: { users: ImportUser[] }) {
  const tx = useT()
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900">
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import_results.col_name')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import_results.col_email')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import_results.col_role')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import_results.col_year')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import_results.col_status')}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={idx}
              className={[
                'border-b border-zinc-800/60 last:border-0 transition-colors',
                user.status === 'error'
                  ? 'bg-red-950/20'
                  : user.status === 'duplicate'
                    ? 'bg-amber-950/10'
                    : 'hover:bg-zinc-800/20',
              ].join(' ')}
            >
              <td className="px-3 py-2.5 text-zinc-200 font-medium">{user.name || '--'}</td>
              <td className="px-3 py-2.5 text-zinc-400">{user.email}</td>
              <td className="px-3 py-2.5">
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 border-zinc-700 capitalize text-xs"
                >
                  {user.role}
                </Badge>
              </td>
              <td className="px-3 py-2.5 text-zinc-400">{user.year_group || '--'}</td>
              <td className="px-3 py-2.5">
                <StatusBadge status={user.status} />
                {user.status === 'error' && user.error_message && (
                  <p className="mt-0.5 text-xs text-red-400/80">{user.error_message}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ImportResultsPage() {
  const tx = useT()
  const params = useParams()
  const router = useRouter()
  const jobId = params.jobId as string

  const [status, setStatus] = useState<JobStatus>('loading')
  const [job, setJob] = useState<ImportJob | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  // ── Fetch on mount ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (!jobId) return

    async function fetchJob() {
      setStatus('loading')
      setFetchError(null)

      try {
        const res = await fetch(`/api/school/import/${jobId}`)

        if (!res.ok) {
          const body = await res.json().catch(() => ({ error: 'Unknown error' }))
          setFetchError(body.error ?? `Error ${res.status}`)
          setStatus('failed')
          return
        }

        const data: ImportJob = await res.json()
        setJob(data)

        if (data.status === 'processing') {
          setStatus('processing')
          // Poll every 2 seconds while still processing
          const timer = setTimeout(fetchJob, 2000)
          return () => clearTimeout(timer)
        } else if (data.status === 'failed') {
          setStatus('failed')
        } else {
          setStatus('complete')
        }
      } catch {
        setFetchError('Failed to load import results. Please try again.')
        setStatus('failed')
      }
    }

    fetchJob()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId])

  // ── Download handler ────────────────────────────────────────────────────────

  async function handleDownload() {
    if (isDownloading) return
    setIsDownloading(true)
    try {
      const url = `/api/school/export/logins?job_id=${encodeURIComponent(jobId)}`
      const res = await fetch(url)
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Download failed' }))
        alert(body.error ?? 'Download failed. Please try again.')
        return
      }
      const blob = await res.blob()
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.setAttribute('download', 'login-details.csv')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(objectUrl)
    } catch {
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  // ── Loading state ───────────────────────────────────────────────────────────

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-zinc-400">
          <Loader2 className="size-10 animate-spin text-indigo-400" />
          <p className="text-sm">{tx('school.b15.import_results.loading')}</p>
        </div>
      </div>
    )
  }

  // ── Error state ─────────────────────────────────────────────────────────────

  if (status === 'failed' && !job) {
    return (
      <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
        <div className="space-y-6">
          <button
            onClick={() => router.push('/school/import')}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="size-4" />
            {tx('school.b15.import_results.back')}
          </button>
          <Card className="border-red-900/50 bg-red-950/20">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-3">
                <XCircle className="size-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-300 text-lg">
                    {tx('school.b15.import_results.error_title')}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {fetchError ?? tx('school.b15.import_results.error_fallback')}
                  </p>
                  <Button
                    onClick={() => router.push('/school/import')}
                    variant="outline"
                    className="mt-4 gap-2"
                  >
                    <ArrowLeft className="size-4" />
                    {tx('school.b15.import_results.btn_back_error')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // ── Processing state ────────────────────────────────────────────────────────

  if (status === 'processing') {
    return (
      <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
        <div className="space-y-6">
          <button
            onClick={() => router.push('/school/import')}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="size-4" />
            {tx('school.b15.import_results.back')}
          </button>
          <Card className="border-indigo-900/50 bg-indigo-950/20">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="size-10 animate-spin text-indigo-400" />
                <div>
                  <p className="text-xl font-bold text-zinc-100">
                    {tx('school.b15.import_results.processing_title')}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {tx('school.b15.import_results.processing_desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // ── Complete state ──────────────────────────────────────────────────────────

  if (!job) return null

  const hasErrors = job.error_count > 0
  const hasDuplicates = job.duplicates > 0
  const isFullSuccess = job.success > 0 && !hasErrors

  // Enrich user rows with error messages from errors array when status is error
  const enrichedUsers: ImportUser[] = job.users.map((u) => {
    // Mark duplicates based on API flag
    if (u.status === 'duplicate') return u
    return u
  })

  // Also build error-only rows from job.errors that have no matching user entry
  // (rows that were rejected before user creation)
  const errorOnlyRows: ImportUser[] = job.errors
    .filter((e) => !job.users.some((u) => u.email === e.email))
    .map((e) => ({
      name: '--',
      email: e.email,
      role: '--',
      year_group: '',
      class_name: '',
      status: 'error' as const,
      error_message: e.error,
    }))

  const allRows: ImportUser[] = [...enrichedUsers, ...errorOnlyRows]

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="space-y-8">
        {/* ── Back nav ── */}
        <button
          onClick={() => router.push('/school/import')}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <ArrowLeft className="size-4" />
          {tx('school.b15.import_results.back')}
        </button>

        {/* ── Header status ── */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            {isFullSuccess ? (
              <CheckCircle className="size-9 text-emerald-400 shrink-0" />
            ) : hasErrors ? (
              <AlertCircle className="size-9 text-clay-600 shrink-0" />
            ) : (
              <XCircle className="size-9 text-red-400 shrink-0" />
            )}
            <h1
              className={[
                'text-3xl font-bold tracking-tight',
                isFullSuccess
                  ? 'text-emerald-300'
                  : hasErrors && job.success > 0
                    ? 'text-amber-700'
                    : 'text-red-300',
              ].join(' ')}
            >
              {job.success === 0 && hasErrors
                ? tx('school.b15.import_results.title_failed')
                : tx('school.b15.import_results.title_success')}
            </h1>
          </div>
          <p className="text-zinc-400 text-sm pl-12">
            {tx('school.b15.import_results.completed_at')} {formatDateTime(job.completed_at)}
          </p>
        </div>

        {/* ── Stats summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">{job.success}</p>
            <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
              {tx('school.b15.import_results.stat_created')}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl font-bold text-red-400">{job.error_count - job.duplicates}</p>
            <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
              {tx('school.b15.import_results.stat_errors')}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl font-bold text-clay-600">{job.duplicates}</p>
            <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
              {tx('school.b15.import_results.stat_duplicates')}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5">
              <Users className="size-4 text-indigo-400" />
              <p className="text-sm font-semibold text-zinc-200">
                {job.import_type === 'teachers'
                  ? tx('school.b15.import_results.import_type_teachers')
                  : job.import_type === 'mixed'
                    ? tx('school.b15.import_results.import_type_mixed')
                    : tx('school.b15.import_results.import_type_students')}
              </p>
            </div>
            <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
              {tx('school.b15.import_results.stat_import_type')}
            </p>
          </div>
        </div>

        {/* ── DOWNLOAD SECTION (prominent) ── */}
        {job.success > 0 && (
          <Card className="border-emerald-800/50 bg-emerald-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-zinc-100">
                <FileSpreadsheet className="size-5 text-emerald-400" />
                {tx('school.b15.import_results.download_title')}
              </CardTitle>
              <CardDescription className="text-zinc-400">
                {tx('school.b15.import_results.download_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Warning box */}
              <div className="flex items-start gap-3 rounded-lg border border-amber-800/50 bg-amber-950/20 px-4 py-3">
                <AlertCircle className="size-4 shrink-0 mt-0.5 text-clay-600" />
                <p className="text-sm text-amber-700 font-medium">
                  {tx('school.b15.import_results.download_warning')}
                </p>
              </div>

              {/* Big download button */}
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                size="lg"
                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 disabled:opacity-60 text-base h-12"
              >
                {isDownloading ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Download className="size-5" />
                )}
                {isDownloading
                  ? tx('school.b15.import_results.btn_preparing')
                  : tx('school.b15.import_results.btn_download')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ── Created accounts table ── */}
        {allRows.length > 0 && (
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-zinc-100">
                {tx('school.b15.import_results.accounts_title')} ({allRows.length})
              </CardTitle>
              <CardDescription className="text-zinc-400">
                {tx('school.b15.import_results.accounts_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccountsTable users={allRows} />
            </CardContent>
          </Card>
        )}

        {/* ── Error details section ── */}
        {hasErrors && (
          <Card className="border-red-900/40 bg-red-950/10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-red-300">
                <XCircle className="size-4 text-red-400" />
                {tx('school.b15.import_results.errors_title')} ({job.error_count})
              </CardTitle>
              <CardDescription className="text-zinc-400">
                {tx('school.b15.import_results.errors_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {job.errors.map((err, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-red-900/30 bg-zinc-950/50 px-4 py-3"
                  >
                    <XCircle className="size-4 shrink-0 mt-0.5 text-red-400" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-zinc-500">
                          {tx('school.b15.import_results.row_prefix')} {err.row}
                        </span>
                        {err.email && (
                          <span className="text-sm text-zinc-300 font-mono">{err.email}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-red-400">{err.error}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => router.push('/school/import')}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="size-4" />
                {tx('school.b15.import_results.btn_reimport')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ── Duplicate details ── */}
        {hasDuplicates && (
          <Card className="border-amber-900/30 bg-amber-950/10">
            <CardContent className="pt-5 pb-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 shrink-0 mt-0.5 text-clay-600" />
                <div>
                  <p className="font-semibold text-amber-700">
                    {job.duplicates}{' '}
                    {job.duplicates !== 1
                      ? tx('school.b15.import_results.duplicates_title_plural')
                      : tx('school.b15.import_results.duplicates_title')}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {tx('school.b15.import_results.duplicates_desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Next steps ── */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-4">
            <CardTitle className="text-base text-zinc-100">
              {tx('school.b15.import_results.next_steps_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <ul className="space-y-3">
              {[
                tx('school.b15.import_results.next1'),
                tx('school.b15.import_results.next2'),
                tx('school.b15.import_results.next3'),
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400 text-xs font-bold">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-zinc-800">
              <Button
                onClick={() => router.push('/school/classes')}
                className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                <Users className="size-4" />
                {tx('school.b15.import_results.btn_classes')}
              </Button>
              <p className="mt-2 text-xs text-zinc-500">
                {tx('school.b15.import_results.btn_classes_desc')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
