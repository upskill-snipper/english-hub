'use client'

// ─── Admin · Per-board AI↔Examiner agreement dashboard ───────────────────────
// Shows, per exam board, how closely the AI's predicted mark matches the
// examiner's final mark across the approved training corpus. Climbs as your
// examiners mark more — visible proof the calibration loop is working.
// Access is enforced by GET /api/admin/board-agreement (site-admin only).

import { useCallback, useEffect, useState } from 'react'

interface BoardAgreement {
  board: string
  n: number
  exactPct: number
  within1Pct: number
  meanAbsError: number
}

interface Payload {
  generatedAt: string
  storeAvailable: boolean
  note: string | null
  boards: BoardAgreement[]
  totalPairs: number
}

const BOARD_LABELS: Record<string, string> = {
  AQA: 'AQA GCSE',
  EDEXCEL: 'Edexcel GCSE',
  OCR: 'OCR GCSE',
  EDUQAS: 'Eduqas / WJEC',
  EDEXCEL_IGCSE: 'Edexcel IGCSE (4EA1 / 4ET1)',
  CAMBRIDGE_0500: 'Cambridge IGCSE 0500',
  CAMBRIDGE_0990: 'Cambridge IGCSE 0990',
  IELTS: 'IELTS',
  KS3: 'Key Stage 3',
  EAL: 'EAL',
}

function pctClass(pct: number): string {
  if (pct >= 85) return 'text-green-700'
  if (pct >= 70) return 'text-amber-700'
  return 'text-red-700'
}

export default function BoardAgreementPage() {
  const [data, setData] = useState<Payload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/board-agreement', { cache: 'no-store' })
      if (res.status === 401 || res.status === 403) {
        setError('You must be a platform administrator to view this page.')
        setData(null)
        return
      }
      if (!res.ok) {
        setError('Could not load board agreement metrics.')
        return
      }
      setData((await res.json()) as Payload)
    } catch {
      setError('Could not load board agreement metrics.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            AI ↔ Examiner agreement
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            How closely the AI&apos;s mark matches your examiners&apos; final mark, per board,
            across the approved training corpus. These figures climb as your examiners mark more —
            the calibration loop at work.
          </p>
        </div>
        <button
          onClick={() => void load()}
          className="shrink-0 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-muted"
        >
          Refresh
        </button>
      </div>

      {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}

      {!loading && !error && data && (
        <>
          {data.boards.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              No examiner-marked data yet. Once examiners approve marks for a board, agreement
              metrics will appear here.
              {data.note ? <span className="block mt-2">({data.note})</span> : null}
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2.5 font-medium">Board</th>
                    <th className="px-4 py-2.5 font-medium">Marked</th>
                    <th className="px-4 py-2.5 font-medium">Exact</th>
                    <th className="px-4 py-2.5 font-medium">Within 1</th>
                    <th className="px-4 py-2.5 font-medium">Mean error</th>
                  </tr>
                </thead>
                <tbody>
                  {data.boards.map((b) => (
                    <tr key={b.board} className="border-b border-border/60 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-foreground">
                        {BOARD_LABELS[b.board] ?? b.board}
                      </td>
                      <td className="px-4 py-2.5 tabular-nums text-muted-foreground">{b.n}</td>
                      <td
                        className={`px-4 py-2.5 tabular-nums font-semibold ${pctClass(b.exactPct)}`}
                      >
                        {b.exactPct}%
                      </td>
                      <td
                        className={`px-4 py-2.5 tabular-nums font-semibold ${pctClass(b.within1Pct)}`}
                      >
                        {b.within1Pct}%
                      </td>
                      <td className="px-4 py-2.5 tabular-nums text-muted-foreground">
                        {b.meanAbsError}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            {data.totalPairs} marked script{data.totalPairs === 1 ? '' : 's'} in the corpus ·
            generated {new Date(data.generatedAt).toLocaleString()}
          </p>
        </>
      )}
    </div>
  )
}
