'use client'

// ─── Examiner tool - small shared UI pieces ─────────────────────────────────

import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import type { ExaminerCalibration } from '@/lib/marking/examiner/types'

export function Panel({
  title,
  children,
  className = '',
  action,
}: {
  title: string
  children: ReactNode
  className?: string
  action?: ReactNode
}) {
  return (
    <section className={`rounded-xl border border-border bg-card p-4 shadow-soft ${className}`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {title}
        </h3>
        {action}
      </div>
      {children}
    </section>
  )
}

export function MarkOut({
  mark,
  max,
  note,
}: {
  mark: number | null
  max: number | null
  note?: string
}) {
  return (
    <div className="mt-3 border-t border-border pt-3">
      <div className="font-serif text-3xl font-bold tabular-nums text-primary">
        {mark ?? '-'}
        {max !== null && <span className="text-muted-foreground"> / {max}</span>}
      </div>
      {note && <div className="text-sm text-muted-foreground">{note}</div>}
    </div>
  )
}

export function Notice({
  kind,
  children,
}: {
  kind: 'ok' | 'warn' | 'error' | 'info'
  children: ReactNode
}) {
  const styles: Record<typeof kind, string> = {
    ok: 'border-emerald-500/40 bg-emerald-500/10',
    warn: 'border-amber-500/40 bg-amber-500/10',
    error: 'border-destructive/40 bg-destructive/10 text-destructive',
    info: 'border-border bg-muted/40 text-muted-foreground',
  }
  return <div className={`rounded-md border px-3 py-2 text-sm ${styles[kind]}`}>{children}</div>
}

export function CalibrationBadge({ calibration }: { calibration: ExaminerCalibration }) {
  if (calibration === 'exemplar-derived') {
    return (
      <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
        Calibrated to exemplar commentaries
      </Badge>
    )
  }
  if (calibration === 'published-grid') {
    return <Badge variant="outline">Checked against the board&apos;s spec</Badge>
  }
  // Unverified. Deliberately the loudest badge on the page: for nine of the
  // twenty-one papers the grid has never been put beside the board's own
  // specification, and a teacher must not read a mark from one as authoritative.
  return (
    <Badge className="border-destructive/40 bg-destructive/10 text-destructive">
      Not verified against the board&apos;s spec
    </Badge>
  )
}

export function copyText(text: string): void {
  try {
    void navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
    } catch {
      /* clipboard unavailable */
    }
    ta.remove()
  }
}

export function downloadText(name: string, text: string, type = 'text/plain'): void {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([text], { type: `${type};charset=utf-8` }))
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(a.href), 4000)
}

export function csvCell(v: unknown): string {
  return `"${String(v ?? '').replace(/"/g, '""')}"`
}
