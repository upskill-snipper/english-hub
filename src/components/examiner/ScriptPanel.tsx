'use client'

// ─── Examiner tool - the candidate's response ───────────────────────────────
//
// Two modes. Typed: paste the response. Photographed: add one picture per page
// (or a scanned PDF), put them in the candidate's order, rotate any that are
// sideways, and the run panel transcribes them. The transcript appears here as
// editable text so the teacher can correct a reading before marking.
// ────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState, type DragEvent } from 'react'
import { ArrowLeft, ArrowRight, Camera, ImagePlus, RotateCw, Trash2, Type } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { transcriptStats } from '@/lib/marking/examiner/engine'
import { ensureThumb, filesToPages, invalidate, type ScriptPage } from './lib/images'
import { Notice, Panel } from './ui'

export type ScriptMode = 'text' | 'photo'

interface Props {
  mode: ScriptMode
  onModeChange: (m: ScriptMode) => void
  pages: ScriptPage[]
  onPagesChange: (pages: ScriptPage[]) => void
  response: string
  onResponseChange: (text: string) => void
  notes: string
  enhance: boolean
  onEnhanceChange: (v: boolean) => void
  verify: boolean
  onVerifyChange: (v: boolean) => void
  disabled?: boolean
}

export function ScriptPanel(p: Props) {
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [selected, setSelected] = useState(0)
  const fileRef = useRef<HTMLInputElement>(null)
  const cameraRef = useRef<HTMLInputElement>(null)
  const stats = transcriptStats(p.response)

  async function addFiles(files: Iterable<File>) {
    setBusy('Loading pages')
    setError('')
    const added = await filesToPages(files, (m) => setError(m))
    const next = [...p.pages, ...added]
    for (const pg of added) await ensureThumb(pg, p.enhance)
    p.onPagesChange(next)
    if (added.length) p.onModeChange('photo')
    setBusy('')
  }

  // Paste a photograph straight from the clipboard while in photo mode.
  useEffect(() => {
    if (p.mode !== 'photo') return
    function onPaste(e: ClipboardEvent) {
      const files = Array.from(e.clipboardData?.files ?? []).filter((f) =>
        f.type.startsWith('image/'),
      )
      if (!files.length) return
      e.preventDefault()
      void addFiles(files)
    }
    document.addEventListener('paste', onPaste)
    return () => document.removeEventListener('paste', onPaste)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.mode, p.pages, p.enhance])

  async function rotate(i: number) {
    const pg = p.pages[i]
    if (!pg) return
    pg.rot = (pg.rot + 90) % 360
    invalidate(pg)
    await ensureThumb(pg, p.enhance)
    p.onPagesChange([...p.pages])
  }
  function move(i: number, d: number) {
    const j = i + d
    if (j < 0 || j >= p.pages.length) return
    const next = [...p.pages]
    const t = next[i]!
    next[i] = next[j]!
    next[j] = t
    p.onPagesChange(next)
    setSelected(j)
  }
  function remove(i: number) {
    const next = p.pages.filter((_, k) => k !== i)
    p.onPagesChange(next)
    setSelected(Math.max(0, Math.min(selected, next.length - 1)))
  }
  async function toggleEnhance(on: boolean) {
    p.onEnhanceChange(on)
    setBusy('Re-processing pages')
    for (const pg of p.pages) {
      invalidate(pg)
      await ensureThumb(pg, on)
    }
    p.onPagesChange([...p.pages])
    setBusy('')
  }
  function onDrop(e: DragEvent<HTMLElement>) {
    e.preventDefault()
    setDragging(false)
    if (e.dataTransfer.files?.length) void addFiles(Array.from(e.dataTransfer.files))
  }

  const sel = p.pages[selected]

  return (
    <Panel
      title="2 · Candidate response"
      action={
        <div className="inline-flex overflow-hidden rounded-md border border-border text-xs">
          <button
            type="button"
            className={`px-3 py-1.5 ${p.mode === 'text' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
            onClick={() => p.onModeChange('text')}
            aria-pressed={p.mode === 'text'}
          >
            <Type className="me-1 inline h-3.5 w-3.5" /> Typed
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 ${p.mode === 'photo' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
            onClick={() => p.onModeChange('photo')}
            aria-pressed={p.mode === 'photo'}
          >
            <Camera className="me-1 inline h-3.5 w-3.5" /> Photographs
          </button>
        </div>
      }
    >
      {p.mode === 'photo' && (
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`rounded-lg border-2 border-dashed p-3 transition-colors ${dragging ? 'border-primary bg-primary/5' : 'border-border'}`}
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
            {/*
              UX-8 (19 September 2026). A SECOND input, not a `capture`
              attribute on the first one.

              `capture` tells the browser to go straight to the camera and,
              on most mobile browsers, removes the file-picker option
              entirely. Putting it on the only input would trade one missing
              route for another: a teacher with a scanned PDF already on the
              phone could no longer choose it. Two controls, two inputs.

              On desktop this opens the ordinary file chooser, so it costs
              nothing there. The demo the acceptance test is written around
              is photograph-driven, and until now the product had no camera
              control at all.
            */}
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture="environment"
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
              disabled={p.disabled || !!busy}
            >
              <ImagePlus className="h-3.5 w-3.5" /> Add pages
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => cameraRef.current?.click()}
              disabled={p.disabled || !!busy}
            >
              <Camera className="h-3.5 w-3.5" /> Take a photo
            </Button>
            <label className="flex items-center gap-1.5 text-xs">
              <input
                type="checkbox"
                checked={p.enhance}
                onChange={(e) => void toggleEnhance(e.target.checked)}
                disabled={p.disabled || !!busy}
              />
              Enhance faint ink
            </label>
            <label className="flex items-center gap-1.5 text-xs">
              <input
                type="checkbox"
                checked={p.verify}
                onChange={(e) => p.onVerifyChange(e.target.checked)}
                disabled={p.disabled}
              />
              Second checking pass
            </label>
            {p.pages.length > 0 && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => p.onPagesChange([])}
                disabled={p.disabled || !!busy}
              >
                Clear pages
              </Button>
            )}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            One picture per page (JPG or PNG), or a scanned PDF. Drop, paste or add them, put them
            in the candidate's order and rotate any that are sideways. Photographs go to the AI
            provider to be read and are not stored on our servers.
          </p>

          {p.pages.length > 0 && (
            <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1fr]">
              <div className="flex flex-wrap gap-2">
                {p.pages.map((pg, i) => (
                  <div
                    key={pg.id}
                    className={`w-[104px] rounded-md border p-1 ${i === selected ? 'border-primary ring-2 ring-primary/40' : 'border-border'}`}
                  >
                    {pg.thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={pg.thumb}
                        alt={`Page ${i + 1}`}
                        className="h-[74px] w-full cursor-pointer rounded-sm bg-white object-cover"
                        onClick={() => setSelected(i)}
                      />
                    ) : (
                      <div className="h-[74px] w-full animate-pulse rounded-sm bg-muted" />
                    )}
                    <p className="my-0.5 text-center text-[11px] text-muted-foreground">
                      page {i + 1}
                    </p>
                    <div className="flex justify-center gap-0.5">
                      <button
                        type="button"
                        className="rounded border border-border p-0.5"
                        title="Move left"
                        onClick={() => move(i, -1)}
                        disabled={i === 0}
                      >
                        <ArrowLeft className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        className="rounded border border-border p-0.5"
                        title="Rotate"
                        onClick={() => void rotate(i)}
                      >
                        <RotateCw className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        className="rounded border border-border p-0.5"
                        title="Move right"
                        onClick={() => move(i, 1)}
                        disabled={i === p.pages.length - 1}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        className="rounded border border-border p-0.5"
                        title="Remove"
                        onClick={() => remove(i)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-h-[420px] overflow-auto rounded-md border border-border bg-white">
                {sel?.thumb && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sel.proc ?? sel.src}
                    alt={`Page ${selected + 1} enlarged`}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {busy && <p className="mt-2 text-sm italic text-muted-foreground">{busy}...</p>}
      {error && (
        <div className="mt-2">
          <Notice kind="error">{error}</Notice>
        </div>
      )}

      <div className="mt-3">
        <div className="mb-1 flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {p.mode === 'photo'
              ? 'Transcript (check it against the pages before marking)'
              : 'Response'}
          </label>
          {p.response && (
            <span className="text-xs text-muted-foreground">
              {stats.words} words{stats.doubtful ? ` · ${stats.doubtful} doubtful` : ''}
              {stats.illegible ? ` · ${stats.illegible} unreadable` : ''}
            </span>
          )}
        </div>
        <Textarea
          className="min-h-[200px] text-sm"
          placeholder={
            p.mode === 'photo'
              ? 'The transcript will appear here after the pages are read. Doubtful words come back as [?word] and unreadable stretches as [illegible].'
              : "Paste the candidate's response exactly as written. Do not correct spelling or punctuation."
          }
          value={p.response}
          onChange={(e) => p.onResponseChange(e.target.value)}
          disabled={p.disabled}
        />
        {p.notes && (
          <details className="mt-2 rounded-md border border-border bg-muted/40 p-2 text-xs text-muted-foreground">
            <summary className="cursor-pointer font-medium">Transcriber's notes</summary>
            <pre className="mt-1 whitespace-pre-wrap font-sans">{p.notes}</pre>
          </details>
        )}
        {p.mode === 'photo' && p.response && (
          <p className="mt-2 text-xs text-muted-foreground">
            Spelling and punctuation are marked, so check doubtful readings against the photograph
            before settling that part of the mark. A transcript is an aid, not an authority.
          </p>
        )}
      </div>
    </Panel>
  )
}
