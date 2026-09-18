'use client'

// ─── Examiner tool - a whole class from one scan ────────────────────────────
//
// Drop the scanned batch (a multi-page PDF or all the photographs at once), let
// the tool work out where each candidate's script starts, correct anything it
// got wrong, then mark the lot. Nothing is marked until the teacher has seen
// the grouping. Sequential on purpose: it keeps inside rate limits and it is
// what makes the cache pay - the briefing and the scheme are written once by
// the first candidate and read back by every candidate after.
// ────────────────────────────────────────────────────────────────────────────

import { useRef, useState, type DragEvent } from 'react'
import { Download, ImagePlus, Play, RotateCw, Square, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InlineAIConsentPrompt } from '@/components/consent/InlineAIConsentPrompt'
import type {
  ExaminerPack,
  ExaminerQuestionSpec,
  ExtractedMark,
} from '@/lib/marking/examiner/types'
import { transcriptStats } from '@/lib/marking/examiner/engine'
import type { useRuns } from './hooks'
import { describeFailure, type ToolFailure } from './lib/errors'
import {
  base64Of,
  ensureProcessed,
  ensureThumb,
  filesToPages,
  invalidate,
  type ScriptPage,
  type SplitDetect,
} from './lib/images'
import { emptyUsage, estimateUsd, markResponse, transcribeScript, type Usage } from './lib/run'
import { postJson } from './lib/sse'
import { Notice, Panel, copyText, csvCell, downloadText } from './ui'

type SplitMode = 'detect' | 'fixed' | 'manual'

interface Group {
  index: number
  start: number
  end: number
  pages: ScriptPage[]
  name: string
  number: string
  confidence: number | null
}

interface Result {
  index: number
  label: string
  pages: number
  range: string
  status: 'waiting' | 'running' | 'done' | 'failed'
  step: string
  transcript: string
  notes: string
  commentary: string
  mark: ExtractedMark | null
  error: string
  modelTranscribe?: string
  modelMark?: string
}

export interface BulkOpenPayload {
  transcript: string
  notes: string
  commentary: string
  mark: ExtractedMark | null
}

interface Props {
  pack: ExaminerPack | null
  question: ExaminerQuestionSpec | null
  schemeText: string
  enhance: boolean
  verify: boolean
  runs: ReturnType<typeof useRuns>
  onOpen: (payload: BulkOpenPayload) => void
}

function groupsFrom(pages: ScriptPage[]): Group[] {
  const raw: { start: number; end: number; pages: ScriptPage[] }[] = []
  pages.forEach((p, i) => {
    if (i === 0 || p.boundary) raw.push({ start: i, end: i, pages: [p] })
    else {
      const last = raw[raw.length - 1]!
      last.end = i
      last.pages.push(p)
    }
  })
  return raw.map((g, n) => {
    const d = pages[g.start]!.detect
    return {
      index: n,
      start: g.start,
      end: g.end,
      pages: g.pages,
      name: d?.candidate_name ?? '',
      number: d?.candidate_number ?? '',
      confidence: d ? d.confidence : null,
    }
  })
}

function labelFor(g: Group): string {
  if (g.name && g.number) return `${g.name} (${g.number})`
  if (g.name) return g.name
  if (g.number) return `Candidate ${g.number}`
  return `Candidate ${g.index + 1}`
}

export function BulkPanel(p: Props) {
  const [pages, setPages] = useState<ScriptPage[]>([])
  const [split, setSplit] = useState<SplitMode>('detect')
  const [fixedN, setFixedN] = useState(3)
  const [results, setResults] = useState<Result[]>([])
  const [busy, setBusy] = useState('')
  const [running, setRunning] = useState(false)
  const [failure, setFailure] = useState<ToolFailure | null>(null)
  const [openRes, setOpenRes] = useState<number | null>(null)
  const [usage, setUsage] = useState<Usage>(emptyUsage)
  const [dragging, setDragging] = useState(false)
  const [savedAll, setSavedAll] = useState('')
  const cancelRef = useRef(false)
  const abortRef = useRef<AbortController | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const groups = groupsFrom(pages)

  function applySplit(mode: SplitMode, list: ScriptPage[], n = fixedN) {
    if (mode === 'fixed') {
      const k = Math.max(1, n)
      list.forEach((pg, i) => {
        pg.boundary = i > 0 && i % k === 0
      })
    } else if (mode === 'detect') {
      list.forEach((pg, i) => {
        pg.boundary = i > 0 && !!pg.detect?.starts_new_script
      })
    }
    // manual leaves the boundaries exactly as set
  }

  async function addFiles(files: Iterable<File>) {
    setBusy('Loading pages')
    setFailure(null)
    const added = await filesToPages(files, (m) => setFailure({ kind: 'message', message: m }))
    for (const pg of added) await ensureThumb(pg, p.enhance)
    const next = [...pages, ...added]
    applySplit(split, next)
    setPages(next)
    setBusy('')
  }

  async function detectSplits() {
    if (!pages.length) return
    setBusy('Looking for where each script starts')
    setFailure(null)
    cancelRef.current = false
    try {
      for (let i = 0; i < pages.length; i++) {
        if (cancelRef.current) break
        setBusy(`Looking for where each script starts: page ${i + 1} of ${pages.length}`)
        const pg = pages[i]!
        const res = await postJson('/api/examiner/split', {
          page: base64Of(await ensureProcessed(pg, p.enhance)),
        })
        const { detect } = (await res.json()) as { detect: SplitDetect }
        pg.detect = detect
        if (i === 0) pg.detect.starts_new_script = true
      }
      setSplit('detect')
      applySplit('detect', pages)
      setPages([...pages])
    } catch (err) {
      setFailure(describeFailure(err))
    } finally {
      setBusy('')
    }
  }

  function toggleBoundary(i: number) {
    if (i === 0 || running) return
    pages[i]!.boundary = !pages[i]!.boundary
    setSplit('manual')
    setPages([...pages])
  }

  async function rotate(i: number) {
    const pg = pages[i]!
    pg.rot = (pg.rot + 90) % 360
    invalidate(pg)
    await ensureThumb(pg, p.enhance)
    setPages([...pages])
  }

  function removePage(i: number) {
    const next = pages.filter((_, k) => k !== i)
    if (next[0]) next[0].boundary = false
    setPages(next)
  }

  async function runBulk(onlyFailed = false) {
    if (!p.pack || !p.question || running) return
    const gs = groupsFrom(pages)
    if (!gs.length) return
    setRunning(true)
    cancelRef.current = false
    setFailure(null)
    setSavedAll('')
    const ctrl = new AbortController()
    abortRef.current = ctrl
    const u = { ...usage }
    let res: Result[] =
      onlyFailed && results.length === gs.length
        ? results
        : gs.map((g) => ({
            index: g.index,
            label: labelFor(g),
            pages: g.pages.length,
            range: `${g.start + 1}-${g.end + 1}`,
            status: 'waiting',
            step: '',
            transcript: '',
            notes: '',
            commentary: '',
            mark: null,
            error: '',
          }))
    setResults([...res])
    const update = (i: number, patch: Partial<Result>) => {
      res = res.map((r, k) => (k === i ? { ...r, ...patch } : r))
      setResults(res)
    }
    for (const g of gs) {
      if (cancelRef.current) break
      const r = res[g.index]
      if (!r) continue
      if (onlyFailed && r.status !== 'failed') continue
      update(g.index, {
        status: 'running',
        error: '',
        step: `preparing ${g.pages.length} page${g.pages.length === 1 ? '' : 's'}`,
      })
      try {
        const images: string[] = []
        for (const pg of g.pages) images.push(base64Of(await ensureProcessed(pg, p.enhance)))
        const t = await transcribeScript({
          packId: p.pack.id,
          pages: images,
          verify: p.verify,
          usage: u,
          signal: ctrl.signal,
          onProgress: (label, streamed) =>
            update(g.index, { step: `${label.toLowerCase()} - ${streamed.length} characters` }),
        })
        update(g.index, {
          transcript: t.text,
          notes: t.notes,
          modelTranscribe: t.model,
          step: 'marking against the scheme',
        })
        const m = await markResponse({
          packId: p.pack.id,
          questionId: p.question.id,
          schemeText: p.schemeText,
          response: t.text,
          notes: t.notes,
          pageCount: g.pages.length,
          usage: u,
          signal: ctrl.signal,
          onProgress: (streamed) =>
            update(g.index, { step: `marking - ${streamed.length} characters` }),
        })
        update(g.index, {
          commentary: m.commentary,
          mark: m.mark,
          modelMark: m.model,
          status: 'done',
          step: '',
        })
      } catch (err) {
        const f = describeFailure(err)
        update(g.index, {
          status: 'failed',
          error: f.kind === 'consent' ? 'consent required' : f.message || 'failed',
          step: '',
        })
        // A consent, sign-in, plan or ceiling problem applies to every
        // remaining candidate, so stop rather than fail each one in turn.
        if (f.kind !== 'message') {
          setFailure(f)
          break
        }
      }
      setUsage({ ...u })
    }
    setRunning(false)
    abortRef.current = null
  }

  function stop() {
    cancelRef.current = true
    abortRef.current?.abort()
  }

  function csv() {
    const rows = [
      [
        'Candidate',
        'Pages',
        'Mark',
        'Out of',
        'Detail',
        'Doubtful readings',
        'Unreadable stretches',
        'Status',
        'Commentary',
      ],
    ]
    for (const r of results) {
      const st = transcriptStats(r.transcript)
      rows.push([
        r.label,
        r.range,
        r.mark ? String(r.mark.mark) : '',
        r.mark?.max ? String(r.mark.max) : '',
        r.mark?.note ?? '',
        String(st.doubtful),
        String(st.illegible),
        r.status === 'done' ? 'marked' : r.status === 'failed' ? `failed: ${r.error}` : r.status,
        r.commentary.replace(/\s+/g, ' ').trim(),
      ])
    }
    return rows.map((r) => r.map(csvCell).join(',')).join('\r\n')
  }

  function allText() {
    return results
      .map(
        (r) =>
          `${'='.repeat(66)}\n${r.label}  ·  pages ${r.range}  ·  ${
            r.mark
              ? `${r.mark.mark}${r.mark.max ? ` / ${r.mark.max}` : ''}${r.mark.note ? `  (${r.mark.note})` : ''}`
              : r.status
          }\n${'='.repeat(66)}\n\n${r.commentary || r.error}\n\n--- TRANSCRIPT ---\n${r.transcript}${
            r.notes ? `\n\n--- TRANSCRIBER'S NOTES ---\n${r.notes}` : ''
          }\n`,
      )
      .join('\n\n')
  }

  async function saveAll() {
    if (!p.pack || !p.question) return
    const batchId = crypto.randomUUID()
    let n = 0
    try {
      for (const r of results) {
        if (r.status !== 'done') continue
        const st = transcriptStats(r.transcript)
        await p.runs.save({
          packId: p.pack.id,
          questionId: p.question.id,
          batchId,
          candidateLabel: r.label,
          pageCount: r.pages,
          transcript: r.transcript,
          transcriptNotes: r.notes || undefined,
          commentary: r.commentary,
          mark: r.mark?.mark ?? null,
          maxMark: p.question.max,
          markNote: r.mark?.note || undefined,
          doubtfulReadings: st.doubtful,
          unreadableStretches: st.illegible,
          modelTranscribe: r.modelTranscribe,
          modelMark: r.modelMark,
        })
        n++
      }
      setSavedAll(`Saved ${n} result${n === 1 ? '' : 's'} to your records (kept for 180 days).`)
    } catch (err) {
      setFailure(describeFailure(err))
    }
  }

  const doneCount = results.filter((r) => r.status === 'done').length
  const ready = !!p.pack && !!p.question && groups.length > 0 && !running && !busy

  return (
    <div className="space-y-4">
      <Panel title="How to bulk-mark">
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          <li>Load the scheme once on the Mark tab. It is used for every candidate here.</li>
          <li>
            Drop the scanned batch below: a multi-page PDF, or all the photographs at once, in
            order.
          </li>
          <li>Split it into candidates, check the grouping, then mark the lot.</li>
        </ol>
      </Panel>

      <Panel title="Scanned pages">
        <div
          onDragOver={(e: DragEvent<HTMLElement>) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e: DragEvent<HTMLElement>) => {
            e.preventDefault()
            setDragging(false)
            if (e.dataTransfer.files?.length) void addFiles(Array.from(e.dataTransfer.files))
          }}
          className={`rounded-lg border-2 border-dashed p-3 ${dragging ? 'border-primary bg-primary/5' : 'border-border'}`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/*,.pdf,application/pdf"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.length) void addFiles(Array.from(e.target.files))
                e.target.value = ''
              }}
            />
            <Button
              size="sm"
              variant="outline"
              onClick={() => fileRef.current?.click()}
              disabled={running || !!busy}
            >
              <ImagePlus className="h-3.5 w-3.5" /> Add the scan
            </Button>
            {pages.length > 0 && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setPages([])
                  setResults([])
                }}
                disabled={running || !!busy}
              >
                Clear
              </Button>
            )}
            <span className="text-xs text-muted-foreground">
              {pages.length} page{pages.length === 1 ? '' : 's'} · {groups.length} candidate
              {groups.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>

        {pages.length > 0 && (
          <>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Split
              </span>
              <Button
                size="sm"
                variant={split === 'detect' ? 'default' : 'outline'}
                onClick={() => void detectSplits()}
                disabled={running || !!busy}
              >
                Find the breaks automatically
              </Button>
              <Button
                size="sm"
                variant={split === 'fixed' ? 'default' : 'outline'}
                onClick={() => {
                  setSplit('fixed')
                  applySplit('fixed', pages)
                  setPages([...pages])
                }}
                disabled={running || !!busy}
              >
                Every
              </Button>
              <input
                type="number"
                min={1}
                max={40}
                className="w-16 rounded-md border border-input bg-background px-2 py-1 text-sm"
                value={fixedN}
                onChange={(e) => {
                  const n = Math.max(1, Number(e.target.value) || 1)
                  setFixedN(n)
                  if (split === 'fixed') {
                    applySplit('fixed', pages, n)
                    setPages([...pages])
                  }
                }}
                disabled={running}
              />
              <span className="text-xs text-muted-foreground">
                pages · or click the square on any page to start a candidate there
              </span>
            </div>
            {busy && <p className="mt-2 text-sm italic text-muted-foreground">{busy}...</p>}
            <div className="mt-3 space-y-2">
              {groups.map((g) => (
                <div key={g.index} className="rounded-md border border-border bg-muted/30 p-2">
                  <div className="flex flex-wrap items-baseline gap-2 text-sm">
                    <b>{labelFor(g)}</b>
                    <span className="text-xs text-muted-foreground">
                      pages {g.start + 1}-{g.end + 1}
                    </span>
                    {g.confidence !== null && g.confidence < 0.7 && (
                      <span
                        className="rounded-full bg-amber-500 px-1.5 text-[10px] font-bold text-white"
                        title="Low confidence - check this break"
                      >
                        ?
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {g.pages.map((pg) => {
                      const i = pages.indexOf(pg)
                      return (
                        <div
                          key={pg.id}
                          className="w-[88px] rounded-md border border-border bg-card p-1"
                        >
                          {pg.thumb ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={pg.thumb}
                              alt={`Page ${i + 1}`}
                              className="h-[62px] w-full rounded-sm bg-white object-cover"
                            />
                          ) : (
                            <div className="h-[62px] animate-pulse rounded-sm bg-muted" />
                          )}
                          <p className="text-center text-[10px] text-muted-foreground">p{i + 1}</p>
                          <div className="flex justify-center gap-0.5">
                            <button
                              type="button"
                              title={
                                i === 0
                                  ? 'The first page always starts a candidate'
                                  : pg.boundary
                                    ? 'Starts a new candidate - click to merge with the previous'
                                    : 'Click to start a new candidate here'
                              }
                              className={`h-5 w-5 rounded border text-[10px] ${pg.boundary || i === 0 ? 'border-amber-500 bg-amber-500 text-white' : 'border-border'}`}
                              onClick={() => toggleBoundary(i)}
                              disabled={i === 0 || running}
                            >
                              ▪
                            </button>
                            <button
                              type="button"
                              className="h-5 w-5 rounded border border-border"
                              title="Rotate"
                              onClick={() => void rotate(i)}
                              disabled={running}
                            >
                              <RotateCw className="mx-auto h-3 w-3" />
                            </button>
                            <button
                              type="button"
                              className="h-5 w-5 rounded border border-border"
                              title="Remove"
                              onClick={() => removePage(i)}
                              disabled={running}
                            >
                              <Trash2 className="mx-auto h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Panel>

      {pages.length > 0 && (
        <Panel title="Mark the class" className="border-l-4 border-l-primary">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="lg" onClick={() => void runBulk(false)} disabled={!ready}>
              <Play className="h-4 w-4" /> Mark {groups.length} candidate
              {groups.length === 1 ? '' : 's'}
            </Button>
            {results.some((r) => r.status === 'failed') && !running && (
              <Button variant="outline" onClick={() => void runBulk(true)} disabled={!ready}>
                Retry failed
              </Button>
            )}
            {running && (
              <Button variant="ghost" onClick={stop}>
                <Square className="h-4 w-4" /> Stop after this candidate
              </Button>
            )}
          </div>
          {!p.schemeText.trim() && (
            <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
              No mark scheme is loaded. Marking will use the pack's grids only. Load this series'
              scheme on the Mark tab for indicative content.
            </p>
          )}
          {failure?.kind === 'consent' && (
            <div className="mt-3">
              <InlineAIConsentPrompt
                refusal={failure.refusal}
                onResolved={() => setFailure(null)}
                onDismiss={() => setFailure(null)}
              />
            </div>
          )}
          {failure && failure.kind !== 'consent' && (
            <div className="mt-3">
              <Notice kind={failure.kind === 'upgrade' ? 'warn' : 'error'}>
                {failure.message}
              </Notice>
            </div>
          )}

          {results.length > 0 && (
            <>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-1 pr-2">Candidate</th>
                    <th className="py-1 pr-2">Pages</th>
                    <th className="py-1 pr-2 text-right">Mark</th>
                    <th className="py-1 pr-2 text-right">Flags</th>
                    <th className="py-1 pr-2">Status</th>
                    <th className="py-1"></th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => {
                    const st = transcriptStats(r.transcript)
                    return (
                      <>
                        <tr
                          key={r.index}
                          className={`border-t border-border ${r.status === 'running' ? 'bg-primary/5' : ''}`}
                        >
                          <td className="py-2 pr-2 font-medium">{r.label}</td>
                          <td className="py-2 pr-2 text-xs text-muted-foreground">{r.range}</td>
                          <td className="py-2 pr-2 text-right font-serif text-lg font-bold text-primary">
                            {r.mark ? (
                              <>
                                {r.mark.mark}
                                {r.mark.max && (
                                  <span className="text-sm font-normal text-muted-foreground">
                                    {' '}
                                    / {r.mark.max}
                                  </span>
                                )}
                              </>
                            ) : (
                              '-'
                            )}
                          </td>
                          <td className="py-2 pr-2 text-right text-xs text-muted-foreground">
                            {st.doubtful ? `${st.doubtful}? ` : ''}
                            {st.illegible ? `${st.illegible} illegible` : ''}
                          </td>
                          <td className="py-2 pr-2 text-xs">
                            {r.status === 'running' ? (
                              r.step
                            ) : r.status === 'failed' ? (
                              <span className="text-destructive">{r.error}</span>
                            ) : (
                              r.status
                            )}
                          </td>
                          <td className="py-2 text-right">
                            {r.status === 'done' && (
                              <>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => setOpenRes(openRes === i ? null : i)}
                                >
                                  {openRes === i ? 'Hide' : 'View'}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() =>
                                    p.onOpen({
                                      transcript: r.transcript,
                                      notes: r.notes,
                                      commentary: r.commentary,
                                      mark: r.mark,
                                    })
                                  }
                                >
                                  Open in Mark
                                </Button>
                              </>
                            )}
                          </td>
                        </tr>
                        {openRes === i && (
                          <tr key={`${r.index}-open`}>
                            <td colSpan={6} className="bg-muted/30 p-3">
                              <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed">
                                {r.commentary}
                              </pre>
                              <div className="mt-2 flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => copyText(r.commentary)}
                                >
                                  Copy commentary
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => copyText(r.transcript)}
                                >
                                  Copy transcript
                                </Button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    )
                  })}
                </tbody>
              </table>
              {doneCount > 0 && !running && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadText('marks.csv', csv(), 'text/csv')}
                  >
                    <Download className="h-3.5 w-3.5" /> Marks as CSV
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadText('marks-and-commentaries.txt', allText())}
                  >
                    <Download className="h-3.5 w-3.5" /> All commentaries
                  </Button>
                  <Button size="sm" onClick={() => void saveAll()} disabled={!!savedAll}>
                    Save all to my records
                  </Button>
                  {savedAll && (
                    <span className="text-xs text-emerald-700 dark:text-emerald-300">
                      {savedAll}
                    </span>
                  )}
                </div>
              )}
              {usage.calls > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {usage.calls} calls ·{' '}
                  {(usage.input + usage.cacheRead + usage.cacheWrite).toLocaleString('en-GB')}{' '}
                  tokens in
                  {usage.cacheRead > 0 &&
                    `, ${Math.round((100 * usage.cacheRead) / Math.max(1, usage.input + usage.cacheRead + usage.cacheWrite))}% from cache`}{' '}
                  · {usage.output.toLocaleString('en-GB')} out · roughly $
                  {estimateUsd(
                    usage,
                    results.find((r) => r.modelMark)?.modelMark ?? 'claude-opus-5',
                  ).toFixed(2)}{' '}
                  at list price
                </p>
              )}
            </>
          )}
        </Panel>
      )}
    </div>
  )
}
