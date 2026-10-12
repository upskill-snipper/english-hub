'use client'

/**
 * Site-admin: every school, and the way into each one's setup.
 *
 * A school is created at /admin/school-provisioning, which makes the school
 * and its administrator. Everything after that, from the spreadsheet the
 * school returns, happens on /admin/schools/[schoolId]: AI authorisation,
 * staff, classes, pupils. This page lists the schools with what each has so
 * far, read from GET /api/admin/schools.
 *
 * Like the other admin pages it is a client page whose real gate is its API:
 * a 401 sends the visitor to sign in and a 403 to their dashboard. A count the
 * API could not read arrives as null and is shown as unknown, with the reason,
 * never as 0.
 */

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Loader2,
  RefreshCw,
  School,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Plus,
} from 'lucide-react'

import { useAuthStore } from '@/store/auth-store'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import type { OperatorSchoolSummary } from '@/lib/school/setup-result'

const ACCESS_LABEL: Record<string, string> = {
  paid: 'Paid',
  trial: 'Trial',
  founder: 'Founder',
  expired: 'Expired',
}

function countText(n: number | null): string {
  return n === null ? 'unknown' : n.toLocaleString('en-GB')
}

export default function AdminSchoolsPage() {
  const router = useRouter()
  const { user } = useAuthStore()

  const [schools, setSchools] = useState<OperatorSchoolSummary[] | null>(null)
  const [problems, setProblems] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/schools')
      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/schools')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      const data = (await res.json().catch(() => ({}))) as {
        schools?: OperatorSchoolSummary[]
        problems?: string[]
        error?: string
        detail?: string | null
      }
      if (!res.ok || !Array.isArray(data.schools)) {
        setError(
          data.error
            ? `${data.error}${data.detail ? `: ${data.detail}` : ''}`
            : `Could not load the schools (HTTP ${res.status}).`,
        )
        return
      }
      setSchools(data.schools)
      setProblems(data.problems ?? [])
    } catch {
      setError('Network error. Check your connection, then refresh.')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/schools')
      return
    }
    if (user) void load()
  }, [user, router, load])

  if (!schools && !error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to admin
        </Link>

        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <School className="h-7 w-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Schools</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => void load()} disabled={loading}>
              <RefreshCw className={`me-1.5 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button render={<Link href="/admin/school-provisioning" />}>
              <Plus className="me-1.5 h-4 w-4" />
              Provision a school
            </Button>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Set a school up from the spreadsheet it returns: record its AI authorisation, then load
          its staff, classes and pupils, in that order. A school is created first at School
          provisioning.
        </p>

        {error && (
          <div
            role="alert"
            className="mb-6 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {problems.length > 0 && (
          <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-foreground">
            {problems.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}

        {schools && schools.length === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>No schools yet</CardTitle>
              <CardDescription>
                Provision a school first; it then appears here to be set up.
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        <div className="space-y-4">
          {schools?.map((s) => (
            <Card key={s.id}>
              <CardHeader>
                <CardTitle className="text-lg">{s.name}</CardTitle>
                <CardDescription>
                  {ACCESS_LABEL[s.access_type ?? ''] ?? s.access_type ?? 'No access type'}
                  {s.access_until ? `, until ${formatDate(s.access_until)}` : ', no end date'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center gap-2 text-sm">
                  {s.ai_authorised_at ? (
                    <>
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      AI marking authorised on {formatDate(s.ai_authorised_at)}
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="h-4 w-4 text-amber-500" />
                      AI marking not authorised yet
                    </>
                  )}
                </p>
                <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  <div>
                    <dt className="text-muted-foreground">Staff</dt>
                    <dd className="font-semibold text-foreground">
                      {countText(s.counts.members)}
                      {s.counts.pendingInvites
                        ? ` (${s.counts.pendingInvites} not yet accepted)`
                        : ''}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Classes</dt>
                    <dd className="font-semibold text-foreground">{countText(s.counts.classes)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Pupils</dt>
                    <dd className="font-semibold text-foreground">{countText(s.counts.pupils)}</dd>
                  </div>
                </dl>
                {s.problems.length > 0 && (
                  <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-2 text-xs text-foreground">
                    {s.problems.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                <Button render={<Link href={`/admin/schools/${s.id}`} />}>
                  Set up this school
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
