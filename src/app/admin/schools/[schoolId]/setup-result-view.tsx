/**
 * One setup step's answer, in full: every row created, updated, skipped and
 * failed, with the sheet's row number and what happened to it.
 *
 * Failures come first and are never folded away: a step that partly worked
 * must not read as one that worked. A row can appear twice, for example a
 * pupil created and then not placed in a class (src/lib/school/setup-result.ts).
 *
 * No hooks, so it renders on the server too; tested that way in
 * ./setup-result-view.test.tsx.
 */

import { AlertTriangle, CheckCircle2 } from 'lucide-react'

import type { SetupResult, SetupRow } from '@/lib/school/setup-result'

export interface StepAnswer extends Partial<SetupResult> {
  /** Set when the step was refused or stopped; the rows, if any, say why. */
  readonly error?: string
  readonly detail?: string | null
  /** The pupil step's upload, as listed in the school's upload log. */
  readonly jobId?: string
  /** The pupil step, when the same run was sent twice: the first run's counts. */
  readonly replayed?: {
    readonly created: number
    readonly updated: number
    readonly skipped: number
    readonly note: string
  }
}

const SECTIONS: ReadonlyArray<{
  key: 'failed' | 'created' | 'updated' | 'skipped'
  title: string
  tone: string
}> = [
  { key: 'failed', title: 'Failed: needs attention', tone: 'border-red-500/40 bg-red-500/5' },
  { key: 'created', title: 'Created', tone: 'border-border' },
  { key: 'updated', title: 'Updated', tone: 'border-border' },
  { key: 'skipped', title: 'Skipped', tone: 'border-border' },
]

function RowsTable({ rows }: { rows: ReadonlyArray<SetupRow> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-start text-muted-foreground">
            <th className="w-14 py-2 pe-3 text-start font-medium">Row</th>
            <th className="py-2 pe-3 text-start font-medium">Who or what</th>
            <th className="py-2 text-start font-medium">What happened</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={`${r.row ?? 'x'}-${r.subject}-${i}`} className="align-top text-foreground">
              <td className="py-2 pe-3 tabular-nums text-muted-foreground">{r.row ?? '-'}</td>
              <td className="break-all py-2 pe-3 font-mono text-xs">{r.subject}</td>
              <td className="py-2">{r.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SetupResultView({ answer }: { answer: StepAnswer }) {
  const counts = {
    created: answer.created?.length ?? 0,
    updated: answer.updated?.length ?? 0,
    skipped: answer.skipped?.length ?? 0,
    failed: answer.failed?.length ?? 0,
  }
  const clean = !answer.error && counts.failed === 0

  return (
    <div className="space-y-4">
      {answer.error ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div className="min-w-0">
            <p>{answer.error}</p>
            {answer.detail && (
              <p className="mt-1 break-words font-mono text-xs opacity-80">{answer.detail}</p>
            )}
          </div>
        </div>
      ) : (
        <p
          role="status"
          className={`flex items-center gap-2 text-sm font-medium ${clean ? 'text-primary' : 'text-foreground'}`}
        >
          {clean ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          )}
          {clean ? 'Done, with nothing failed.' : 'Done, but some rows failed: see below.'}
        </p>
      )}

      {answer.totalRows !== undefined && (
        <p className="text-sm text-muted-foreground">
          {answer.totalRows} row{answer.totalRows === 1 ? '' : 's'} read: {counts.created} created,{' '}
          {counts.updated} updated, {counts.skipped} skipped, {counts.failed} failed.
          {answer.jobId ? ` Upload ${answer.jobId}.` : ''}
        </p>
      )}

      {answer.replayed && (
        <p className="rounded-md border border-border p-3 text-sm text-foreground">
          {answer.replayed.note} First run: {answer.replayed.created} created,{' '}
          {answer.replayed.updated} updated, {answer.replayed.skipped} skipped.
        </p>
      )}

      {SECTIONS.map(({ key, title, tone }) => {
        const rows = answer[key]
        if (!rows || rows.length === 0) return null
        return (
          <section key={key} className={`rounded-lg border p-3 ${tone}`}>
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              {title} ({rows.length})
            </h4>
            <RowsTable rows={rows} />
          </section>
        )
      })}
    </div>
  )
}
