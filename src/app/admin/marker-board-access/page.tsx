'use client'

// ─── Admin · Marker Board Access & Calibration ─────────────────────────────
// /admin/marker-board-access
//
// Two jobs in one screen (site-admin only; the APIs enforce verifyAdmin):
//   1. APPROVALS — the queue of pending per-board access requests from
//      examiners; approve or reject each, seeing their credentials.
//   2. CALIBRATION — per board, run the train-the-ML calibration and (when
//      green) promote it. Shows the agreement metric + per-check gate breakdown.
//
// Plain fetch + useState, matching the other admin pages. All mutations go
// through the Stage B / Stage E APIs; this page renders their results.

import { useCallback, useEffect, useState } from 'react'

interface PendingRow {
  id: string
  markerId: string
  board: string
  markerName: string | null
  markerEmail: string | null
  markerQualification: string | null
  qualificationNote: string | null
  requestedAt: string
}

// Result of GET /api/admin/marker-cv?markerId=… — the applicant's credentials.
interface MarkerCredentials {
  found: boolean
  url?: string
  linkedinUrl: string | null
  marketingConsent: boolean
}

interface GateCheck {
  check: string
  passed: boolean
  message: string
}

interface CalibrationResult {
  areaKey: string
  board: string | null
  metric: string
  scriptsConsidered: number
  pairsUsed: number
  headlineAgreement: number
  exactAgreement: number | null
  green: boolean
  checks: GateCheck[]
  promoted: boolean
  baselineStatus: string | null
}

const BOARDS = [
  'AQA',
  'EDEXCEL',
  'OCR',
  'EDUQAS',
  'EDEXCEL_IGCSE',
  'CAMBRIDGE_0500',
  'CAMBRIDGE_0990',
  'IELTS',
  'KS3',
  'EAL',
]

export default function MarkerBoardAccessAdminPage() {
  const [pending, setPending] = useState<PendingRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)

  // Per-marker credentials (CV signed URL + LinkedIn + consent), loaded on
  // demand when an admin clicks "View credentials". Keyed by markerId.
  const [creds, setCreds] = useState<Record<string, MarkerCredentials>>({})
  const [credsBusy, setCredsBusy] = useState<string | null>(null)
  const [credsError, setCredsError] = useState<Record<string, string>>({})

  // Calibration panel
  const [calBoard, setCalBoard] = useState('IELTS')
  const [calPromote, setCalPromote] = useState(false)
  const [calRunning, setCalRunning] = useState(false)
  const [calResult, setCalResult] = useState<CalibrationResult | null>(null)
  const [calError, setCalError] = useState<string | null>(null)

  const loadPending = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/marker-board-access', { cache: 'no-store' })
      if (!res.ok) {
        const b = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(b.error ?? 'Could not load pending requests.')
      }
      const data = (await res.json()) as { pending: PendingRow[] }
      setPending(data.pending ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load pending requests.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadPending()
  }, [loadPending])

  const decide = useCallback(async (accessId: string, decision: 'approved' | 'rejected') => {
    setBusyId(accessId)
    try {
      const res = await fetch('/api/admin/marker-board-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessId, decision }),
      })
      if (!res.ok) {
        const b = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(b.error ?? 'Decision failed.')
      }
      // Drop the row optimistically.
      setPending((prev) => prev.filter((p) => p.id !== accessId))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decision failed.')
    } finally {
      setBusyId(null)
    }
  }, [])

  // Load (or refresh) a marker's credentials. The CV signed URL it returns is
  // short-lived (10 min), so we fetch on demand and open it immediately.
  const loadCredentials = useCallback(
    async (markerId: string): Promise<MarkerCredentials | null> => {
      setCredsBusy(markerId)
      setCredsError((prev) => {
        const next = { ...prev }
        delete next[markerId]
        return next
      })
      try {
        const res = await fetch(`/api/admin/marker-cv?markerId=${encodeURIComponent(markerId)}`, {
          cache: 'no-store',
        })
        if (!res.ok) {
          const b = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(b.error ?? 'Could not load credentials.')
        }
        const data = (await res.json()) as MarkerCredentials
        setCreds((prev) => ({ ...prev, [markerId]: data }))
        return data
      } catch (err) {
        setCredsError((prev) => ({
          ...prev,
          [markerId]: err instanceof Error ? err.message : 'Could not load credentials.',
        }))
        return null
      } finally {
        setCredsBusy(null)
      }
    },
    [],
  )

  // Fetch a fresh signed URL and open the CV in a new tab.
  const openCv = useCallback(
    async (markerId: string) => {
      const data = await loadCredentials(markerId)
      if (data?.found && data.url) {
        window.open(data.url, '_blank', 'noopener,noreferrer')
      }
    },
    [loadCredentials],
  )

  const runCalibration = useCallback(async () => {
    setCalRunning(true)
    setCalError(null)
    setCalResult(null)
    try {
      const res = await fetch('/api/admin/calibration/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ board: calBoard, promote: calPromote }),
      })
      const data = (await res.json()) as CalibrationResult & { error?: string }
      if (!res.ok) throw new Error(data.error ?? 'Calibration failed.')
      setCalResult(data)
    } catch (err) {
      setCalError(err instanceof Error ? err.message : 'Calibration failed.')
    } finally {
      setCalRunning(false)
    }
  }, [calBoard, calPromote])

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-1 text-2xl font-bold text-foreground">Marker boards &amp; calibration</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Approve examiners per board, and run each board&apos;s ML calibration.
      </p>

      {/* ── Approvals ─────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Pending board-access requests</h2>
          <button
            onClick={() => void loadPending()}
            className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted"
          >
            Refresh
          </button>
        </div>

        {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {!loading && !error && pending.length === 0 && (
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            No pending requests.
          </p>
        )}

        <div className="space-y-3">
          {pending.map((p) => (
            <div
              key={p.id}
              className="flex flex-col gap-3 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {p.board}
                  </span>
                  <span className="font-medium text-foreground">{p.markerName ?? 'Unknown'}</span>
                  {p.markerEmail && (
                    <span className="text-xs text-muted-foreground">{p.markerEmail}</span>
                  )}
                </div>
                {(p.markerQualification || p.qualificationNote) && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.qualificationNote ?? p.markerQualification}
                  </p>
                )}

                {/* Credentials: CV (signed URL on demand), LinkedIn, consent. */}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <button
                    type="button"
                    disabled={credsBusy === p.markerId}
                    onClick={() => void openCv(p.markerId)}
                    className="rounded-md border border-border px-2 py-1 font-medium hover:bg-muted disabled:opacity-50"
                  >
                    {credsBusy === p.markerId ? 'Loading…' : 'View CV'}
                  </button>

                  {(() => {
                    const c = creds[p.markerId]
                    if (!c) return null
                    return (
                      <>
                        {c.found === false && (
                          <span className="text-muted-foreground">No CV uploaded</span>
                        )}
                        {c.linkedinUrl ? (
                          <a
                            href={c.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-border px-2 py-1 font-medium text-primary hover:bg-muted"
                          >
                            LinkedIn ↗
                          </a>
                        ) : (
                          <span className="text-muted-foreground">No LinkedIn</span>
                        )}
                        <span
                          className={
                            c.marketingConsent
                              ? 'rounded-md bg-green-600/10 px-2 py-1 font-medium text-green-700'
                              : 'rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground'
                          }
                        >
                          {c.marketingConsent ? 'Marketing consent ✓' : 'No marketing consent'}
                        </span>
                      </>
                    )
                  })()}

                  {credsError[p.markerId] && (
                    <span className="text-destructive">{credsError[p.markerId]}</span>
                  )}
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  disabled={busyId === p.id}
                  onClick={() => void decide(p.id, 'approved')}
                  className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  disabled={busyId === p.id}
                  onClick={() => void decide(p.id, 'rejected')}
                  className="rounded-md border border-destructive/40 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calibration ───────────────────────────────────────────────────── */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">Run calibration</h2>
        <div className="rounded-lg border border-border p-4">
          <div className="flex flex-wrap items-end gap-3">
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Board</span>
              <select
                value={calBoard}
                onChange={(e) => setCalBoard(e.target.value)}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
              >
                {BOARDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={calPromote}
                onChange={(e) => setCalPromote(e.target.checked)}
              />
              <span>Promote if green (go live)</span>
            </label>
            <button
              disabled={calRunning}
              onClick={() => void runCalibration()}
              className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {calRunning ? 'Running…' : 'Run'}
            </button>
          </div>

          {calError && <p className="mt-3 text-sm text-destructive">{calError}</p>}

          {calResult && (
            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <span>
                  <span className="text-muted-foreground">Pairs used:</span>{' '}
                  <span className="font-semibold tabular-nums">{calResult.pairsUsed}</span> of{' '}
                  {calResult.scriptsConsidered}
                </span>
                <span>
                  <span className="text-muted-foreground">{calResult.metric}:</span>{' '}
                  <span className="font-semibold tabular-nums">
                    {(calResult.headlineAgreement * 100).toFixed(1)}%
                  </span>
                </span>
                {calResult.exactAgreement != null && (
                  <span>
                    <span className="text-muted-foreground">exact:</span>{' '}
                    <span className="font-semibold tabular-nums">
                      {(calResult.exactAgreement * 100).toFixed(1)}%
                    </span>
                  </span>
                )}
              </div>
              <div
                className={
                  calResult.green
                    ? 'font-semibold text-green-600 dark:text-green-400'
                    : 'font-semibold text-amber-600 dark:text-amber-400'
                }
              >
                {calResult.green ? '✓ GREEN — gate passed' : '✗ Not green — see checks'}
                {calResult.promoted ? ' · promoted (live baseline)' : ''}
              </div>
              <ul className="space-y-1">
                {(calResult.checks ?? []).map((c, i) => (
                  <li key={i} className={c.passed ? 'text-muted-foreground' : 'text-destructive'}>
                    {c.passed ? '✓' : '✗'} {c.check}: {c.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
