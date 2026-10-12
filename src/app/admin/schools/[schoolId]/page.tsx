'use client'

/**
 * Site-admin: set one school up from the spreadsheet it returned.
 *
 * Four steps, in order:
 *   1. AI authorisation. The statement in src/lib/school/ai-authorisation.ts,
 *      word for word, a note saying where the school's written confirmation
 *      is held, and a confirm button.
 *   2. Staff. The Staff sheet: each person is invited (or, with an account
 *      already, added) as the school's portal invites them.
 *   3. Classes. The Classes sheet: each class created or updated, with its
 *      teacher, who must have been through step 2.
 *   4. Pupils. The Pupils sheet: accounts made, linked to the school, placed
 *      in their classes from step 3, and emailed a temporary password.
 * Each step takes the sheet pasted (straight from Excel, or as CSV) or a .csv
 * file, and shows the API's full answer, row by row. The steps are in
 * ./setup-steps.tsx; this page loads the school and lays them out.
 *
 * Like the other admin pages it is a client page whose real gate is its API
 * (verifyAdmin on every /api/admin/schools route); 401 and 403 redirect. The
 * school is the one in the URL, and every route checks that it exists.
 */

import { useCallback, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2, School, AlertTriangle } from 'lucide-react'

import { useAuthStore } from '@/store/auth-store'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import {
  STAFF_SHEET_HEADERS,
  CLASSES_SHEET_HEADERS,
  PUPILS_SHEET_HEADERS,
} from '@/lib/school/setup-sheets'
import type { OperatorSchoolSummary } from '@/lib/school/setup-result'

import { AiAuthorisationStep, SheetStep } from './setup-steps'

function count(n: number | null): string {
  return n === null ? 'unknown' : String(n)
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function SchoolSetupPage() {
  const router = useRouter()
  const params = useParams<{ schoolId: string }>()
  const schoolId = typeof params?.schoolId === 'string' ? params.schoolId : ''
  const { user } = useAuthStore()

  const [school, setSchool] = useState<OperatorSchoolSummary | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  const load = useCallback(async () => {
    setLoadError(null)
    try {
      const res = await fetch('/api/admin/schools')
      if (res.status === 401) {
        router.push(`/auth/login?redirect=/admin/schools/${schoolId}`)
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      const data = (await res.json().catch(() => ({}))) as {
        schools?: OperatorSchoolSummary[]
        error?: string
        detail?: string | null
      }
      if (!res.ok || !Array.isArray(data.schools)) {
        setLoadError(
          data.error
            ? `${data.error}${data.detail ? `: ${data.detail}` : ''}`
            : `Could not load the school (HTTP ${res.status}).`,
        )
        return
      }
      setSchool(data.schools.find((s) => s.id === schoolId) ?? null)
    } catch {
      setLoadError('Network error. Check your connection, then refresh.')
    } finally {
      setLoaded(true)
    }
  }, [router, schoolId])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push(`/auth/login?redirect=/admin/schools/${schoolId}`)
      return
    }
    if (user) void load()
  }, [user, router, load, schoolId])

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link
          href="/admin/schools"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All schools
        </Link>

        {loadError && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{loadError}</p>
          </div>
        )}

        {!loadError && !school && (
          <Card>
            <CardHeader>
              <CardTitle>School not found</CardTitle>
              <CardDescription>
                No school has the id in this address. Choose one from the list of schools.
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        {school && (
          <>
            <header>
              <div className="mb-2 flex items-center gap-3">
                <School className="h-7 w-7 text-primary" />
                <h1 className="text-3xl font-bold text-foreground">{school.name}</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Staff {count(school.counts.members)}
                {school.counts.pendingInvites
                  ? ` (${school.counts.pendingInvites} not yet accepted)`
                  : ''}
                , classes {count(school.counts.classes)}, pupils {count(school.counts.pupils)}.
                {school.access_until ? ` Access until ${formatDate(school.access_until)}.` : ''}
              </p>
              {school.problems.length > 0 && (
                <div className="mt-2 rounded-md border border-amber-500/40 bg-amber-500/10 p-2 text-xs text-foreground">
                  {school.problems.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </header>

            <AiAuthorisationStep school={school} onRecorded={load} />

            <SheetStep
              number={2}
              title="Staff"
              endpoint={`/api/admin/schools/${school.id}/staff`}
              headers={STAFF_SHEET_HEADERS}
              description="Each person is invited to the school by email, with a link that lasts 7 days. Someone who already has an English Hub account is added straight away and told. Nobody already accepted at another school is invited. Running this again re-sends the invitation to anyone who has not accepted it yet."
              note={`Role is "Head of department" or "Teacher". The "Classes taught" column is not used here: each class's teacher comes from the Classes sheet.`}
              buttonLabel="Invite the staff"
              onDone={load}
            />

            <SheetStep
              number={3}
              title="Classes"
              endpoint={`/api/admin/schools/${school.id}/classes`}
              headers={CLASSES_SHEET_HEADERS}
              description="Each class is created, or updated if the school already has a class with that code. Its teacher is the member of staff with the email given, so run the Staff step first."
              note="Exam board is AQA, Edexcel, OCR or Eduqas."
              buttonLabel="Create or update the classes"
              onDone={load}
            />

            <SheetStep
              number={4}
              title="Pupils"
              endpoint={`/api/admin/schools/${school.id}/pupils`}
              headers={PUPILS_SHEET_HEADERS}
              description="Each new pupil gets an account, is added to the school and placed in their class, and is emailed a temporary password to change on first sign-in. A pupil who already has an account is added and placed, with no email. A class code must match a class from step 3. Up to 500 pupils at a time; a large sheet can take two minutes, so keep the page open."
              note="This sends emails to pupils. Check the sheet first."
              buttonLabel="Create the pupils' accounts"
              pupils
              onDone={load}
            />
          </>
        )}
      </div>
    </div>
  )
}
