'use client'

// ─── Examiner Marking Tool - root ───────────────────────────────────────────
//
// A teacher-facing tool for marking exactly as a senior examiner marks: pick
// the paper and question, load the series' mark scheme, supply the response
// as text or as photographs of the handwritten script, and either (a) work
// the best-fit gates by hand or (b) press one button to transcribe, check and
// mark with examiner commentary. A whole class can be marked from one scan.
//
// English-only interface, deliberately. Its users are adults marking in
// English against English-language boards, and its copy is dense examiner
// vocabulary that a machine translation would get wrong in ways that change
// marks. The entry cards that lead here are translated; the tool itself is
// not. Recorded as a follow-up in docs/HANDOVER.md.
// ────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpenCheck, ScanLine, Stamp, Archive } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { ExaminerPackSummary } from '@/lib/marking/examiner/types'
import { BulkPanel, type BulkOpenPayload } from './BulkPanel'
import { GatesPanel } from './GatesPanel'
import { RecordsPanel } from './RecordsPanel'
import { ReferencePanel } from './ReferencePanel'
import { RunPanel } from './RunPanel'
import { SchemePanel, type SchemeValue } from './SchemePanel'
import { ScriptPanel, type ScriptMode } from './ScriptPanel'
import { usePack, usePackList, useRuns, useSchemes } from './hooks'
import type { ScriptPage } from './lib/images'
import { CalibrationBadge, Notice, Panel } from './ui'

const PREFS_KEY = 'eh.examiner.prefs.v1'

interface Prefs {
  packId?: string
  questionId?: string
  enhance?: boolean
  verify?: boolean
}

function readPrefs(): Prefs {
  try {
    return JSON.parse(localStorage.getItem(PREFS_KEY) || '{}') as Prefs
  } catch {
    return {}
  }
}

function writePrefs(p: Prefs): void {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(p))
  } catch {
    /* storage unavailable */
  }
}

function groupByBoard(packs: ExaminerPackSummary[]): [string, ExaminerPackSummary[]][] {
  const map = new Map<string, ExaminerPackSummary[]>()
  for (const p of packs) {
    const key = p.board
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(p)
  }
  return Array.from(map.entries())
}

export function ExaminerTool() {
  const { packs, error: packsError } = usePackList()
  const [packId, setPackId] = useState<string | null>(null)
  const [questionId, setQuestionId] = useState<string | null>(null)
  const { pack, calibration, loading: packLoading, error: packError } = usePack(packId)
  const schemes = useSchemes(packId)
  const runs = useRuns()

  const [scheme, setScheme] = useState<SchemeValue>({ text: '', name: '', source: 'paste' })
  const [pages, setPages] = useState<ScriptPage[]>([])
  const [mode, setMode] = useState<ScriptMode>('text')
  const [response, setResponse] = useState('')
  const [notes, setNotes] = useState('')
  const [enhance, setEnhance] = useState(true)
  const [verify, setVerify] = useState(true)
  const [busy, setBusy] = useState(false)
  const [tab, setTab] = useState('mark')

  // Restore the last paper and settings once the pack list is known.
  useEffect(() => {
    if (!packs || packId) return
    const prefs = readPrefs()
    const first = packs.find((p) => p.id === prefs.packId) ?? packs[0]
    if (first) {
      setPackId(first.id)
      setQuestionId(
        first.questions.find((q) => q.id === prefs.questionId)?.id ??
          first.questions[0]?.id ??
          null,
      )
    }
    if (typeof prefs.enhance === 'boolean') setEnhance(prefs.enhance)
    if (typeof prefs.verify === 'boolean') setVerify(prefs.verify)
  }, [packs, packId])

  useEffect(() => {
    if (!packId) return
    writePrefs({ packId, questionId: questionId ?? undefined, enhance, verify })
  }, [packId, questionId, enhance, verify])

  const summary = useMemo(() => packs?.find((p) => p.id === packId) ?? null, [packs, packId])
  const question = useMemo(
    () => pack?.questions.find((q) => q.id === questionId) ?? null,
    [pack, questionId],
  )

  function choosePack(id: string) {
    setPackId(id)
    const s = packs?.find((p) => p.id === id)
    setQuestionId(s?.questions[0]?.id ?? null)
    setScheme({ text: '', name: '', source: 'paste' })
  }

  function openFromBulk(payload: BulkOpenPayload) {
    setResponse(payload.transcript)
    setNotes(payload.notes)
    setMode('photo')
    setTab('mark')
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <Link
            href="/dashboard/teacher"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Teacher hub
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Stamp className="h-7 w-7 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                Examiner marking tool
              </h1>
              <p className="mt-1 max-w-3xl text-lg text-muted-foreground">
                Mark as a senior examiner marks: best-fit level first, then position, then the exact
                mark, with commentary in the board's own voice. Photograph a handwritten script or
                paste the text; mark one response or a whole class from one scan.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <label
                className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                htmlFor="examiner-pack"
              >
                Board and paper
              </label>
              <select
                id="examiner-pack"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={packId ?? ''}
                onChange={(e) => choosePack(e.target.value)}
                disabled={!packs || busy}
              >
                {!packs && <option value="">Loading papers...</option>}
                {packs &&
                  groupByBoard(packs).map(([board, list]) => (
                    <optgroup key={board} label={board}>
                      {list.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.subject} · {p.paper} · {p.title}
                          {p.codes.length ? ` (${p.codes.join(', ')})` : ''}
                          {p.calibration === 'exemplar-derived'
                            ? ' · calibrated'
                            : p.calibration === 'unverified-grid'
                              ? ' · NOT VERIFIED'
                              : ''}
                        </option>
                      ))}
                    </optgroup>
                  ))}
              </select>
            </div>
            {summary && (
              <div className="flex items-end gap-2">
                <CalibrationBadge calibration={summary.calibration} />
                <Badge variant="outline" className="font-mono text-xs">
                  {summary.totalMarks} marks
                </Badge>
              </div>
            )}
          </div>

          {summary && (
            <div className="mt-4 flex flex-wrap gap-2">
              {summary.questions.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  disabled={busy}
                  onClick={() => setQuestionId(q.id)}
                  aria-pressed={q.id === questionId}
                  className={`rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
                    q.id === questionId
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  {q.label}
                  <span
                    className={`ms-1.5 text-xs font-normal ${q.id === questionId ? 'opacity-80' : 'text-muted-foreground'}`}
                  >
                    {q.max} marks
                  </span>
                </button>
              ))}
            </div>
          )}
          {(packsError || packError) && (
            <div className="mt-3">
              <Notice kind="error">{packsError || packError}</Notice>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <Tabs value={tab} onValueChange={(v) => setTab(String(v))}>
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="mark" className="px-3 py-1.5">
              <Stamp className="h-4 w-4" /> Mark one script
            </TabsTrigger>
            <TabsTrigger value="bulk" className="px-3 py-1.5">
              <ScanLine className="h-4 w-4" /> Mark a class
            </TabsTrigger>
            <TabsTrigger value="reference" className="px-3 py-1.5">
              <BookOpenCheck className="h-4 w-4" /> Grids and triggers
            </TabsTrigger>
            <TabsTrigger value="records" className="px-3 py-1.5">
              <Archive className="h-4 w-4" /> My records
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mark" className="mt-4">
            {packLoading || !pack ? (
              <p className="text-sm italic text-muted-foreground">Loading the paper...</p>
            ) : (
              <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-4">
                  <SchemePanel
                    packId={packId}
                    value={scheme}
                    onChange={setScheme}
                    library={schemes}
                    disabled={busy}
                  />
                  <ScriptPanel
                    mode={mode}
                    onModeChange={setMode}
                    pages={pages}
                    onPagesChange={setPages}
                    response={response}
                    onResponseChange={setResponse}
                    notes={notes}
                    enhance={enhance}
                    onEnhanceChange={setEnhance}
                    verify={verify}
                    onVerifyChange={setVerify}
                    disabled={busy}
                  />
                  <RunPanel
                    pack={pack}
                    question={question}
                    schemeText={scheme.text}
                    pages={mode === 'photo' ? pages : []}
                    response={response}
                    notes={notes}
                    enhance={enhance}
                    verify={verify}
                    onTranscript={(t, n) => {
                      setResponse(t)
                      setNotes(n)
                    }}
                    onBusyChange={setBusy}
                    runs={runs}
                  />
                </div>
                <div className="space-y-4">
                  <Panel title="Best-fit by hand">
                    <p className="text-sm text-muted-foreground">
                      Answer the gates in the order a senior examiner asks them. The engine computes
                      the level, the position and the mark, then drafts the commentary. Use it to
                      check the AI mark, or instead of it.
                    </p>
                  </Panel>
                  {question ? (
                    <GatesPanel spec={question} />
                  ) : (
                    <Notice kind="info">Choose a question above.</Notice>
                  )}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="bulk" className="mt-4">
            <BulkPanel
              pack={pack}
              question={question}
              schemeText={scheme.text}
              enhance={enhance}
              verify={verify}
              runs={runs}
              onOpen={openFromBulk}
            />
          </TabsContent>

          <TabsContent value="reference" className="mt-4">
            {pack ? (
              <ReferencePanel pack={pack} question={question} calibration={calibration} />
            ) : (
              <p className="text-sm italic text-muted-foreground">Loading the paper...</p>
            )}
          </TabsContent>

          <TabsContent value="records" className="mt-4">
            <RecordsPanel runs={runs} />
          </TabsContent>
        </Tabs>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          AI marking here is a second opinion to support your judgement, never the award, and it is
          labelled as AI everywhere it appears. Photographs and transcripts are sent to our AI
          provider to be read and marked, are never used to train models, and are not stored on our
          servers; only results you choose to save are kept, for 180 days. Read the paper's
          provenance on the Grids and triggers tab before relying on a boundary.
        </p>
      </div>
    </main>
  )
}
