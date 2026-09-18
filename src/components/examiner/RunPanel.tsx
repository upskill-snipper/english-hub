'use client'

// ─── Examiner tool - one button: transcribe, check, mark ────────────────────

import { useRef, useState } from 'react'
import { Copy, Download, Play, Save, Square } from 'lucide-react'
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
import { base64Of, ensureProcessed, type ScriptPage } from './lib/images'
import { emptyUsage, estimateUsd, markResponse, transcribeScript, type Usage } from './lib/run'
import { MarkOut, Notice, Panel, copyText, downloadText } from './ui'
import Link from 'next/link'

interface Step {
  key: string
  label: string
  state: 'pending' | 'run' | 'done' | 'fail'
  detail: string
}

interface Props {
  pack: ExaminerPack | null
  question: ExaminerQuestionSpec | null
  schemeText: string
  pages: ScriptPage[]
  response: string
  notes: string
  enhance: boolean
  verify: boolean
  onTranscript: (text: string, notes: string) => void
  onBusyChange: (busy: boolean) => void
  runs: ReturnType<typeof useRuns>
}

export function RunPanel(p: Props) {
  const [steps, setSteps] = useState<Step[]>([])
  const [stream, setStream] = useState('')
  const [commentary, setCommentary] = useState('')
  const [mark, setMark] = useState<ExtractedMark | null>(null)
  const [failure, setFailure] = useState<ToolFailure | null>(null)
  const [active, setActive] = useState(false)
  const [done, setDone] = useState(false)
  const [usage, setUsage] = useState<Usage>(emptyUsage)
  const [models, setModels] = useState<{ transcribe?: string; mark?: string }>({})
  const [label, setLabel] = useState('')
  const [saved, setSaved] = useState('')
  const abortRef = useRef<AbortController | null>(null)

  const hasPages = p.pages.length > 0
  const canRun = !!p.pack && !!p.question && (hasPages || p.response.trim().length > 0) && !active

  function setStep(key: string, state: Step['state'], detail?: string) {
    setSteps((prev) =>
      prev.map((s) => (s.key === key ? { ...s, state, detail: detail ?? s.detail } : s)),
    )
  }

  async function run(forceTranscribe = false) {
    if (!p.pack || !p.question) return
    const doTranscribe = hasPages && (forceTranscribe || !p.response.trim())
    const initial: Step[] = []
    if (doTranscribe) {
      initial.push({
        key: 'prep',
        label: `Preparing ${p.pages.length} page${p.pages.length === 1 ? '' : 's'}`,
        state: 'pending',
        detail: '',
      })
      initial.push({ key: 't1', label: 'Reading the handwriting', state: 'pending', detail: '' })
      if (p.verify)
        initial.push({
          key: 't2',
          label: 'Checking the transcript against the pages',
          state: 'pending',
          detail: '',
        })
    }
    initial.push({
      key: 'mark',
      label: 'Marking against the mark scheme',
      state: 'pending',
      detail: '',
    })
    setSteps(initial)
    setStream('')
    setCommentary('')
    setMark(null)
    setFailure(null)
    setDone(false)
    setSaved('')
    setActive(true)
    p.onBusyChange(true)
    const ctrl = new AbortController()
    abortRef.current = ctrl
    const u = emptyUsage()
    let response = p.response
    let notes = p.notes
    let transcribeModel: string | undefined
    try {
      if (doTranscribe) {
        setStep('prep', 'run')
        const images: string[] = []
        for (const pg of p.pages) images.push(base64Of(await ensureProcessed(pg, p.enhance)))
        setStep('prep', 'done')
        setStep('t1', 'run')
        const r = await transcribeScript({
          packId: p.pack.id,
          pages: images,
          verify: p.verify,
          usage: u,
          signal: ctrl.signal,
          onProgress: (labelText, streamed) => {
            setStream(streamed)
            const key = /Checking/.test(labelText) ? 't2' : 't1'
            if (key === 't2') setStep('t1', 'done')
            setStep(key, 'run', `${streamed.length} characters`)
          },
        })
        setStep('t1', 'done', `${r.stats.words} words`)
        if (p.verify) {
          setStep(
            't2',
            r.verified ? 'done' : 'fail',
            r.verified
              ? `${r.changedInVerify ? 'corrected' : 'no changes'} · ${r.stats.doubtful} doubtful, ${r.stats.illegible} unreadable`
              : 'the checking pass did not run; the first transcript stands - check it against the pages',
          )
        }
        response = r.text
        notes = r.notes
        transcribeModel = r.model
        p.onTranscript(r.text, r.notes)
        if (r.truncated) {
          setFailure({
            kind: 'message',
            message:
              'The transcript was cut off before it finished. Mark what is there, or transcribe fewer pages at once.',
          })
        }
      }
      setStep('mark', 'run')
      setStream('')
      const m = await markResponse({
        packId: p.pack.id,
        questionId: p.question.id,
        schemeText: p.schemeText,
        response,
        notes,
        pageCount: hasPages ? p.pages.length : 0,
        usage: u,
        signal: ctrl.signal,
        onProgress: (streamed) => {
          setCommentary(streamed)
          setStep('mark', 'run', `${streamed.length} characters`)
        },
      })
      setCommentary(m.commentary)
      setMark(m.mark)
      setModels({ transcribe: transcribeModel, mark: m.model })
      setStep('mark', 'done')
      setDone(true)
    } catch (err) {
      setSteps((prev) => prev.map((s) => (s.state === 'run' ? { ...s, state: 'fail' } : s)))
      setFailure(describeFailure(err))
    } finally {
      setUsage({ ...u })
      setActive(false)
      p.onBusyChange(false)
      abortRef.current = null
    }
  }

  async function saveRecord() {
    if (!p.pack || !p.question) return
    const st = transcriptStats(p.response)
    try {
      await p.runs.save({
        packId: p.pack.id,
        questionId: p.question.id,
        candidateLabel: label.trim() || undefined,
        pageCount: hasPages ? p.pages.length : 0,
        transcript: p.response || undefined,
        transcriptNotes: p.notes || undefined,
        commentary: commentary || undefined,
        mark: mark?.mark ?? null,
        maxMark: p.question.max,
        markNote: mark?.note || undefined,
        doubtfulReadings: st.doubtful,
        unreadableStretches: st.illegible,
        modelTranscribe: models.transcribe,
        modelMark: models.mark,
      })
      setSaved('Saved to your records. Saved results are kept for 180 days.')
    } catch (err) {
      setFailure(describeFailure(err))
    }
  }

  const stepIcon = (s: Step['state']) =>
    s === 'done' ? '✓' : s === 'run' ? '▸' : s === 'fail' ? '✕' : '·'
  const costModel = models.mark ?? 'claude-opus-5'

  return (
    <Panel title="3 · Run it" className="border-s-4 border-s-primary">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg" onClick={() => void run(false)} disabled={!canRun}>
          <Play className="h-4 w-4" />
          {hasPages && !p.response.trim() ? 'Transcribe and mark' : 'Mark this response'}
        </Button>
        {hasPages && p.response.trim() && (
          <Button variant="outline" onClick={() => void run(true)} disabled={!canRun}>
            Re-read the pages first
          </Button>
        )}
        {active && (
          <Button variant="ghost" onClick={() => abortRef.current?.abort()}>
            <Square className="h-4 w-4" /> Stop
          </Button>
        )}
      </div>
      <p
        className={`mt-2 text-xs ${
          p.pack && p.pack.calibration === 'unverified-grid'
            ? 'font-medium text-destructive'
            : 'text-muted-foreground'
        }`}
      >
        {p.pack?.calibration === 'exemplar-derived'
          ? 'Marks against the published grids and the exemplar-derived gates for this paper, plus the scheme you supplied.'
          : p.pack?.calibration === 'published-grid'
            ? 'Marks against the grids for this paper, which have been checked against the board’s published specification, plus the scheme you supplied. The result is a second opinion for you to check against the gates on the right, not the award.'
            : 'This paper’s structure and grids have NOT been checked against the board’s published specification, so the tariffs may not match the paper in front of you. Any mark is indicative only — check it against your own mark scheme before using it, and do not report it to a pupil as a grade.'}
      </p>

      {steps.length > 0 && (
        <ol className="mt-4 space-y-1.5 text-sm">
          {steps.map((s) => (
            <li
              key={s.key}
              className={`flex gap-2 ${s.state === 'done' ? 'text-emerald-700 dark:text-emerald-300' : s.state === 'fail' ? 'text-destructive' : s.state === 'run' ? 'font-medium' : 'text-muted-foreground'}`}
            >
              <span className="w-4 text-center">{stepIcon(s.state)}</span>
              <span>
                {s.label}
                {s.detail && <span className="ms-1 text-xs text-muted-foreground">{s.detail}</span>}
              </span>
            </li>
          ))}
        </ol>
      )}
      {active && stream && (
        <pre className="mt-3 max-h-[130px] overflow-auto whitespace-pre-wrap rounded-md border border-border bg-muted/40 p-2 font-mono text-xs text-muted-foreground">
          {stream}
        </pre>
      )}

      {failure?.kind === 'consent' && (
        <div className="mt-3">
          <InlineAIConsentPrompt
            refusal={failure.refusal}
            onResolved={() => {
              setFailure(null)
              void run(false)
            }}
            onDismiss={() => setFailure(null)}
          />
        </div>
      )}
      {failure?.kind === 'upgrade' && (
        <div className="mt-3">
          <Notice kind="warn">
            {failure.message}{' '}
            <Link href="/pricing" className="underline">
              See plans
            </Link>
          </Notice>
        </div>
      )}
      {failure?.kind === 'signin' && (
        <div className="mt-3">
          <Notice kind="warn">
            {failure.message}{' '}
            <Link href="/auth/login?next=/toolkit/examiner" className="underline">
              Sign in
            </Link>
          </Notice>
        </div>
      )}
      {(failure?.kind === 'message' || failure?.kind === 'ceiling') && (
        <div className="mt-3">
          <Notice kind="error">{failure.message}</Notice>
        </div>
      )}

      {(commentary || done) && (
        <div className="mt-4">
          {mark ? (
            <MarkOut
              mark={mark.mark}
              max={mark.max ?? p.question?.max ?? null}
              note={mark.note || 'extracted from the commentary'}
            />
          ) : done ? (
            <Notice kind="warn">
              The mark could not be read off the commentary. Read the final line and enter it
              yourself.
            </Notice>
          ) : null}
          <div className="mt-3 whitespace-pre-wrap rounded-md border border-border bg-background p-3 font-serif text-sm leading-relaxed">
            {commentary}
          </div>
          {done && (
            <>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => copyText(commentary)}>
                  <Copy className="h-3.5 w-3.5" /> Copy commentary
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    downloadText(
                      `marking-${p.pack?.id ?? 'paper'}-${p.question?.id ?? 'q'}.txt`,
                      `${p.pack?.board ?? ''} ${p.pack?.paper ?? ''} ${p.question?.label ?? ''}\n${mark ? `${mark.mark} / ${mark.max ?? ''} ${mark.note}` : ''}\n\n${commentary}\n\n--- RESPONSE ---\n${p.response}${p.notes ? `\n\n--- TRANSCRIBER'S NOTES ---\n${p.notes}` : ''}`,
                    )
                  }
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
                <input
                  className="min-w-[180px] flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-sm"
                  placeholder="Candidate label for your records (optional)"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
                <Button size="sm" onClick={() => void saveRecord()} disabled={!!saved}>
                  <Save className="h-3.5 w-3.5" /> Save to my records
                </Button>
              </div>
              {saved && (
                <div className="mt-2">
                  <Notice kind="ok">{saved}</Notice>
                </div>
              )}
              <p className="mt-3 text-xs text-muted-foreground">
                Still check it: the transcript against the photograph (spelling and punctuation are
                marked) and the mark against the gates and anchors. It is a second opinion, not the
                award.
              </p>
            </>
          )}
          {usage.calls > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {usage.calls} call{usage.calls === 1 ? '' : 's'} ·{' '}
              {(usage.input + usage.cacheRead + usage.cacheWrite).toLocaleString('en-GB')} tokens in
              {usage.cacheRead > 0 &&
                `, ${Math.round((100 * usage.cacheRead) / Math.max(1, usage.input + usage.cacheRead + usage.cacheWrite))}% from cache`}{' '}
              · {usage.output.toLocaleString('en-GB')} out · roughly $
              {estimateUsd(usage, costModel).toFixed(2)} at list price
            </p>
          )}
        </div>
      )}
    </Panel>
  )
}
