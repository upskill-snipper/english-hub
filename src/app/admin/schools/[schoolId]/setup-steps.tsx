'use client'

/**
 * The four steps of a school's setup, for ./page.tsx.
 *
 *   AiAuthorisationStep  step 1: the statement in
 *                        src/lib/school/ai-authorisation.ts word for word, a
 *                        note saying where the school's written confirmation
 *                        is held, and a confirm button that needs both.
 *   SheetStep            steps 2 to 4: a sheet pasted (straight from Excel, or
 *                        as CSV) or loaded from a .csv file, sent to its route,
 *                        and the full answer shown by SetupResultView.
 *
 * In their own module, not the page, because a Next page may export only its
 * default; ./setup-steps.test.tsx renders them on the server.
 */

import { useRef, useState } from 'react'
import { Loader2, ShieldCheck, ShieldAlert, Upload, Play } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import {
  AI_AUTHORISATION_NOTE_MAX,
  AI_AUTHORISATION_STATEMENT,
} from '@/lib/school/ai-authorisation'
import type { OperatorSchoolSummary } from '@/lib/school/setup-result'

import { SetupResultView, type StepAnswer } from './setup-result-view'

const inputClass =
  'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50'

/** A fresh key for one pupil upload attempt, as the school's upload page makes. */
function newIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `operator-${crypto.randomUUID()}`
  }
  return `operator-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`
}

// ─── Step 1 ────────────────────────────────────────────────────────────────

export function AiAuthorisationStep({
  school,
  onRecorded,
}: {
  school: OperatorSchoolSummary
  onRecorded: () => Promise<void>
}) {
  const [confirmed, setConfirmed] = useState(false)
  const [note, setNote] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<string | null>(null)

  async function record() {
    setSubmitting(true)
    setError(null)
    setDone(null)
    try {
      const res = await fetch(`/api/admin/schools/${school.id}/ai-authorisation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ confirmed, note: note.trim() }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        aiAuthorisedAt?: string
        error?: string
        detail?: string
      }
      if (!res.ok) {
        setError(
          `${data.error ?? `Not recorded (HTTP ${res.status}).`}${data.detail ? ` (${data.detail})` : ''}`,
        )
        return
      }
      setDone(
        `Recorded${data.aiAuthorisedAt ? ` on ${formatDate(data.aiAuthorisedAt)}` : ''}, with the note.`,
      )
      setConfirmed(false)
      setNote('')
      await onRecorded()
    } catch {
      setError('Network error: it may or may not have been recorded. Refresh to check.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {school.ai_authorised_at ? (
            <ShieldCheck className="h-5 w-5 text-primary" />
          ) : (
            <ShieldAlert className="h-5 w-5 text-amber-500" />
          )}
          1. AI authorisation
        </CardTitle>
        <CardDescription>
          {school.ai_authorised_at
            ? `Recorded on ${formatDate(school.ai_authorised_at)}.`
            : 'Not recorded for this school yet.'}
          {school.ai_authorisation_note
            ? ` Confirmation held: ${school.ai_authorisation_note}`
            : ''}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-sm">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span className="text-foreground">{AI_AUTHORISATION_STATEMENT}</span>
        </label>
        <div className="space-y-1.5">
          <label htmlFor="ai-note" className="text-sm font-medium text-foreground">
            Where is the school&rsquo;s written confirmation held?
          </label>
          <textarea
            id="ai-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={`${inputClass} min-h-20`}
            maxLength={AI_AUTHORISATION_NOTE_MAX}
            placeholder="For example: the headteacher's email of 10 November 2026, saved in the school's folder."
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}
        {done && (
          <p role="status" className="text-sm text-primary">
            {done}
          </p>
        )}
        <Button onClick={() => void record()} disabled={!confirmed || !note.trim() || submitting}>
          {submitting && <Loader2 className="me-1.5 h-4 w-4 animate-spin" />}
          {school.ai_authorised_at ? 'Record it again' : "Record the school's authorisation"}
        </Button>
      </CardContent>
    </Card>
  )
}

// ─── Steps 2 to 4 ──────────────────────────────────────────────────────────

export function SheetStep({
  number,
  title,
  endpoint,
  headers,
  description,
  note,
  buttonLabel,
  pupils = false,
  onDone,
}: {
  number: number
  title: string
  endpoint: string
  headers: ReadonlyArray<string>
  description: string
  note: string
  buttonLabel: string
  pupils?: boolean
  onDone: () => Promise<void>
}) {
  const [csv, setCsv] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [running, setRunning] = useState(false)
  const [answer, setAnswer] = useState<StepAnswer | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  // One key per pupil upload attempt. Kept when a run is still in progress
  // (409 pending), replaced after a success or a failure that saved nothing,
  // exactly as the school's own upload page does.
  const keyRef = useRef<string | null>(null)

  async function chooseFile(file: File | undefined) {
    setFileError(null)
    if (!file) return
    if (!file.name.toLowerCase().endsWith('.csv')) {
      setFileError('Choose a .csv file, or paste the sheet instead.')
      return
    }
    try {
      setCsv(await file.text())
      setFileName(file.name)
    } catch {
      setFileError('That file could not be read.')
    }
  }

  async function run() {
    setRunning(true)
    setAnswer(null)
    try {
      if (pupils && !keyRef.current) keyRef.current = newIdempotencyKey()
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          pupils
            ? { csv, idempotencyKey: keyRef.current, fileName: fileName ?? undefined }
            : { csv },
        ),
      })
      const data = (await res.json().catch(() => ({}))) as StepAnswer & { jobStatus?: string }
      if (pupils && (res.ok || res.status >= 500 || data.jobStatus === 'failed')) {
        keyRef.current = null
      }
      setAnswer(
        res.ok ? data : { ...data, error: data.error ?? `The step failed (HTTP ${res.status}).` },
      )
      if (res.ok) await onDone()
    } catch {
      setAnswer({
        error: pupils
          ? 'Network error: the upload may still be running. Wait a minute, refresh, and check the counts before running it again.'
          : 'Network error: the step may or may not have run. Refresh and check before running it again.',
      })
    } finally {
      setRunning(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {number}. {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <p className="text-sm text-foreground">The sheet&rsquo;s header row:</p>
          <div className="flex flex-wrap gap-2">
            {headers.map((h) => (
              <Badge key={h} variant="secondary" className="font-mono">
                {h}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{note}</p>
        </div>

        <div className="space-y-1.5">
          <label htmlFor={`sheet-${number}`} className="text-sm font-medium text-foreground">
            Paste the {title} sheet, header row included
          </label>
          <textarea
            id={`sheet-${number}`}
            value={csv}
            onChange={(e) => {
              setCsv(e.target.value)
              setFileName(null)
            }}
            className={`${inputClass} min-h-36 font-mono text-xs`}
            spellCheck={false}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
            <Upload className="h-4 w-4" />
            <span className="underline underline-offset-2">or choose a .csv file</span>
            <input
              type="file"
              accept=".csv,text/csv"
              className="sr-only"
              onChange={(e) => void chooseFile(e.target.files?.[0])}
            />
          </label>
          {fileName && <span className="text-xs text-muted-foreground">Loaded {fileName}</span>}
          {fileError && <span className="text-xs text-red-400">{fileError}</span>}
        </div>

        <Button onClick={() => void run()} disabled={!csv.trim() || running}>
          {running ? (
            <Loader2 className="me-1.5 h-4 w-4 animate-spin" />
          ) : (
            <Play className="me-1.5 h-4 w-4" />
          )}
          {running ? 'Running' : buttonLabel}
        </Button>

        {answer && <SetupResultView answer={answer} />}
      </CardContent>
    </Card>
  )
}
