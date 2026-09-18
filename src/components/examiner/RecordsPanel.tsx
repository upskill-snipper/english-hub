'use client'

// ─── Examiner tool - saved results ──────────────────────────────────────────

import { useEffect, useState } from 'react'
import { Download, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SavedRunDetail, useRuns } from './hooks'
import { Notice, Panel, csvCell, downloadText } from './ui'

export function RecordsPanel({ runs }: { runs: ReturnType<typeof useRuns> }) {
  const [open, setOpen] = useState<SavedRunDetail | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (runs.runs === null) void runs.refresh()
  }, [runs])

  async function view(id: string) {
    try {
      setOpen(await runs.load(id))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load that result.')
    }
  }

  function exportCsv() {
    const rows = [
      [
        'Saved',
        'Paper',
        'Question',
        'Candidate',
        'Pages',
        'Mark',
        'Out of',
        'Detail',
        'Doubtful readings',
        'Unreadable stretches',
        'Expires',
      ],
    ]
    for (const r of runs.runs ?? []) {
      rows.push([
        new Date(r.created_at).toLocaleString('en-GB'),
        r.pack_id,
        r.question_id,
        r.candidate_label ?? '',
        String(r.page_count),
        r.mark === null ? '' : String(r.mark),
        r.max_mark === null ? '' : String(r.max_mark),
        r.mark_note ?? '',
        String(r.doubtful_readings),
        String(r.unreadable_stretches),
        new Date(r.expires_at).toLocaleDateString('en-GB'),
      ])
    }
    downloadText(
      'examiner-records.csv',
      rows.map((r) => r.map(csvCell).join(',')).join('\r\n'),
      'text/csv',
    )
  }

  const list = runs.runs ?? []

  return (
    <div className="space-y-4">
      <Panel
        title="Saved marking"
        action={
          list.length ? (
            <Button size="sm" variant="outline" onClick={exportCsv}>
              <Download className="h-3.5 w-3.5" /> CSV
            </Button>
          ) : null
        }
      >
        <p className="text-sm text-muted-foreground">
          Results you chose to save. They are kept for 180 days and then deleted; delete any earlier
          with the bin. Photographs of scripts are never stored.
        </p>
        {(runs.error || error) && (
          <div className="mt-2">
            <Notice kind="error">{runs.error || error}</Notice>
          </div>
        )}
        {runs.runs === null ? (
          <p className="mt-3 text-sm italic text-muted-foreground">Loading...</p>
        ) : list.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">Nothing saved yet.</p>
        ) : (
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-1 pr-2">Saved</th>
                <th className="py-1 pr-2">Paper</th>
                <th className="py-1 pr-2">Q</th>
                <th className="py-1 pr-2">Candidate</th>
                <th className="py-1 pr-2 text-right">Mark</th>
                <th className="py-1 pr-2 text-right">Flags</th>
                <th className="py-1"></th>
              </tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr key={r.id} className="border-t border-border">
                  <td className="py-2 pr-2 text-xs text-muted-foreground">
                    {new Date(r.created_at).toLocaleDateString('en-GB')}
                  </td>
                  <td className="py-2 pr-2 text-xs">{r.pack_id}</td>
                  <td className="py-2 pr-2">{r.question_id}</td>
                  <td className="py-2 pr-2">
                    {r.candidate_label || <span className="text-muted-foreground">-</span>}
                  </td>
                  <td className="py-2 pr-2 text-right font-serif font-semibold text-primary">
                    {r.mark ?? '-'}
                    {r.max_mark !== null && (
                      <span className="text-muted-foreground"> / {r.max_mark}</span>
                    )}
                  </td>
                  <td className="py-2 pr-2 text-right text-xs text-muted-foreground">
                    {r.doubtful_readings ? `${r.doubtful_readings}? ` : ''}
                    {r.unreadable_stretches ? `${r.unreadable_stretches} illegible` : ''}
                  </td>
                  <td className="py-2 text-right">
                    <Button size="sm" variant="ghost" onClick={() => void view(r.id)}>
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      aria-label="Delete"
                      onClick={() => {
                        if (window.confirm('Delete this saved result?')) void runs.remove(r.id)
                      }}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Panel>
      {open && (
        <Panel
          title={`${open.pack_id} · ${open.question_id}${open.candidate_label ? ` · ${open.candidate_label}` : ''}`}
          action={
            <Button size="sm" variant="ghost" onClick={() => setOpen(null)}>
              Close
            </Button>
          }
        >
          <p className="font-serif text-2xl font-bold text-primary">
            {open.mark ?? '-'}
            {open.max_mark !== null && (
              <span className="text-muted-foreground"> / {open.max_mark}</span>
            )}
            {open.mark_note && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {open.mark_note}
              </span>
            )}
          </p>
          {open.commentary && (
            <pre className="mt-3 whitespace-pre-wrap font-serif text-sm leading-relaxed">
              {open.commentary}
            </pre>
          )}
          {open.transcript && (
            <details className="mt-3">
              <summary className="cursor-pointer text-sm font-medium">Transcript</summary>
              <pre className="mt-2 whitespace-pre-wrap font-sans text-sm">{open.transcript}</pre>
              {open.transcript_notes && (
                <pre className="mt-2 whitespace-pre-wrap font-sans text-xs text-muted-foreground">
                  {open.transcript_notes}
                </pre>
              )}
            </details>
          )}
        </Panel>
      )}
    </div>
  )
}
