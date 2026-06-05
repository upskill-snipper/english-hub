'use client'

// ─── Marker · Practice / calibration zone ────────────────────────────────────
// A formative tool: the examiner marks a SPECIMEN gold script blind, commits a
// mark, then sees the expert mark and the gap (per-AO too). Nothing is written;
// it's purely for calibrating a new examiner before they mark live.

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

interface PracticeItem {
  id: string
  exam_board: string | null
  paper: string | null
  question_type: string | null
  essay_title: string | null
  essay_text: string
  question_text: string | null
  studied_text: string | null
  ai_grade: string | null
  ai_score: number | null
  ai_max_marks: number | null
  ai_feedback: string | null
}

interface AoComparison {
  ao: string
  expected: number
  yours: number | null
  delta: number | null
}
interface Comparison {
  expectedMark: number | null
  yourMark: number | null
  markDelta: number | null
  absError: number | null
  expectedGrade: string | null
  yourGrade: string | null
  gradeMatch: boolean | null
  verdict: 'exact' | 'close' | 'off' | 'unknown'
  aoComparison: AoComparison[]
}

const VERDICT: Record<Comparison['verdict'], { label: string; cls: string }> = {
  exact: { label: 'Spot on — exact match', cls: 'text-green-700' },
  close: { label: 'Close — within 1 mark', cls: 'text-amber-700' },
  off: { label: 'Off — review the mark scheme', cls: 'text-red-700' },
  unknown: { label: 'Could not compare', cls: 'text-muted-foreground' },
}

export default function MarkerPracticePage() {
  const [items, setItems] = useState<PracticeItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cursor, setCursor] = useState(0)

  const [score, setScore] = useState('')
  const [grade, setGrade] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ comparison: Comparison } | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/marker/practice?limit=20', { cache: 'no-store' })
      if (res.status === 401 || res.status === 403) {
        setError('You must be an approved marker to use the practice zone.')
        return
      }
      if (!res.ok) {
        setError('Could not load practice scripts.')
        return
      }
      const data = (await res.json()) as { items: PracticeItem[] }
      setItems(data.items ?? [])
    } catch {
      setError('Could not load practice scripts.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const current = items[cursor] ?? null

  const submit = useCallback(async () => {
    if (!current) return
    const n = Number(score)
    if (!Number.isFinite(n) || n < 0) {
      setError('Enter a numeric mark.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/marker/practice/check', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ submissionId: current.id, score: n, grade: grade.trim() || null }),
      })
      if (!res.ok) {
        const b = (await res.json().catch(() => ({}))) as { error?: string }
        setError(b.error ?? 'Could not check your mark.')
        return
      }
      setResult((await res.json()) as { comparison: Comparison })
    } catch {
      setError('Could not check your mark.')
    } finally {
      setSubmitting(false)
    }
  }, [current, score, grade])

  const next = useCallback(() => {
    setResult(null)
    setScore('')
    setGrade('')
    setError(null)
    setCursor((c) => c + 1)
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Practice &amp; calibration
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Mark a specimen script, then reveal the expert mark to calibrate. Nothing here is saved.
          </p>
        </div>
        <Link
          href="/marker"
          className="shrink-0 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-muted"
        >
          Back to marking
        </Link>
      </div>

      {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

      {!loading && items.length === 0 && !error && (
        <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          No practice scripts available for your approved boards yet. Specimen scripts loaded by an
          admin will appear here.
        </div>
      )}

      {current && (
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Script {cursor + 1} of {items.length}
            {current.exam_board ? ` · ${current.exam_board}` : ''}
            {current.paper ? ` · ${current.paper}` : ''}
            {current.question_type ? ` · ${current.question_type}` : ''}
          </p>

          {current.question_text && (
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Question
              </p>
              <p className="whitespace-pre-wrap text-sm text-foreground">{current.question_text}</p>
            </div>
          )}

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Candidate response
            </p>
            <p className="max-h-80 overflow-y-auto whitespace-pre-wrap text-sm text-foreground">
              {current.essay_text}
            </p>
          </div>

          {!result ? (
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="mb-3 text-sm font-medium text-foreground">Your mark</p>
              <div className="flex flex-wrap items-end gap-3">
                <label className="text-sm">
                  <span className="mb-1 block text-xs text-muted-foreground">Mark (number)</span>
                  <input
                    type="number"
                    min={0}
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-28 rounded-md border border-border px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-xs text-muted-foreground">Grade (optional)</span>
                  <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-28 rounded-md border border-border px-2 py-1.5 text-sm"
                    placeholder="e.g. 7"
                  />
                </label>
                <button
                  onClick={() => void submit()}
                  disabled={submitting}
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                >
                  {submitting ? 'Checking…' : 'Reveal expert mark'}
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-4">
              <p className={`text-base font-semibold ${VERDICT[result.comparison.verdict].cls}`}>
                {VERDICT[result.comparison.verdict].label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <Stat label="Your mark" value={result.comparison.yourMark} />
                <Stat label="Expert mark" value={result.comparison.expectedMark} />
                <Stat label="Difference" value={result.comparison.markDelta} signed />
                {result.comparison.expectedGrade !== null && (
                  <Stat
                    label="Grade"
                    value={`${result.comparison.yourGrade ?? '–'} vs ${result.comparison.expectedGrade}${
                      result.comparison.gradeMatch ? ' ✓' : ''
                    }`}
                  />
                )}
              </div>

              {result.comparison.aoComparison.length > 0 && (
                <div className="mt-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Per-AO
                  </p>
                  <ul className="space-y-1 text-sm">
                    {result.comparison.aoComparison.map((a) => (
                      <li key={a.ao} className="flex items-center justify-between">
                        <span className="text-foreground">{a.ao}</span>
                        <span className="tabular-nums text-muted-foreground">
                          you {a.yours ?? '–'} · expert {a.expected}
                          {a.delta !== null ? ` (${a.delta > 0 ? '+' : ''}${a.delta})` : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={next}
                className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                Next script →
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && items.length > 0 && !current && (
        <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          You&apos;ve worked through all the practice scripts. Nicely done.
        </div>
      )}
    </div>
  )
}

function Stat({
  label,
  value,
  signed,
}: {
  label: string
  value: number | string | null
  signed?: boolean
}) {
  let display: string
  if (value === null || value === undefined) display = '–'
  else if (typeof value === 'number') display = signed && value > 0 ? `+${value}` : String(value)
  else display = value
  return (
    <div className="rounded-lg border border-border/60 bg-background/50 p-2.5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-semibold tabular-nums text-foreground">{display}</p>
    </div>
  )
}
