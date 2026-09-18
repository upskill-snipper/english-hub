'use client'

// ─── Examiner tool - question and mark scheme ───────────────────────────────
//
// The teacher supplies the series' published mark scheme (indicative content
// changes every series, so the pack alone is never enough). It can be pasted,
// or a PDF or Word file can be dropped in: the text is pulled out here in the
// browser and the file never leaves the machine. Every scheme is kept in the
// teacher's library so next time it is a dropdown.
// ────────────────────────────────────────────────────────────────────────────

import { useRef, useState, type DragEvent } from 'react'
import { FileUp, Save, Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type { useSchemes } from './hooks'
import { readDocx } from './lib/docx'
import { extractPdfText } from './lib/pdf'
import { rtfToText, safeName, schemeFileKind, tidyText } from './lib/text'
import { Notice, Panel } from './ui'

export type SchemeSource = 'pdf' | 'docx' | 'text' | 'paste'

export interface SchemeValue {
  text: string
  name: string
  source: SchemeSource
}

interface Props {
  packId: string | null
  value: SchemeValue
  onChange: (next: SchemeValue) => void
  library: ReturnType<typeof useSchemes>
  disabled?: boolean
}

export function SchemePanel({ packId, value, onChange, library, disabled }: Props) {
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [dragging, setDragging] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function importFile(file: File) {
    setBusy(`Reading ${file.name}`)
    setError('')
    setInfo('')
    try {
      const kind = schemeFileKind(file)
      let text = ''
      let source: SchemeSource = 'text'
      let warnings: string[] = []
      if (kind === 'pdf') {
        const r = await extractPdfText(await file.arrayBuffer())
        text = r.text
        warnings = r.warnings
        source = 'pdf'
      } else if (kind === 'docx') {
        const r = await readDocx(await file.arrayBuffer())
        text = r.text
        source = 'docx'
      } else if (kind === 'doc') {
        throw new Error(
          'Old-format .doc files cannot be read here. Open it in Word and use Save As to make a .docx or PDF, then upload that.',
        )
      } else if (kind === 'rtf') {
        text = tidyText(rtfToText(await file.text()))
      } else if (kind === 'text') {
        text = tidyText(await file.text())
      } else {
        throw new Error('Unsupported file type. Upload a PDF, a Word .docx, or a plain text file.')
      }
      if (!text || text.length < 20) {
        throw new Error(
          warnings[0] ??
            'No usable text could be read from that file. If it is a scan, paste the scheme text instead.',
        )
      }
      const name = safeName(file.name)
      onChange({ text, name, source })
      setInfo(
        `Read ${text.length.toLocaleString('en-GB')} characters from ${file.name}.${
          warnings.length ? ` ${warnings.join(' ')}` : ''
        } Cut it down to the question you are marking, then save it to your library.`,
      )
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy('')
    }
  }

  function onDrop(e: DragEvent<HTMLElement>) {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) void importFile(f)
  }

  async function saveToLibrary() {
    if (!value.text.trim()) return
    const name = value.name.trim() || `Scheme ${new Date().toLocaleDateString('en-GB')}`
    setBusy('Saving')
    setError('')
    try {
      const saved = await library.save(name, value.text, value.source)
      setSelectedId(saved.id)
      setInfo(`Saved "${saved.name}" to your library.`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save.')
    } finally {
      setBusy('')
    }
  }

  async function loadFromLibrary(id: string) {
    setSelectedId(id)
    if (!id) return
    setBusy('Loading')
    setError('')
    try {
      const s = await library.load(id)
      onChange({
        text: s.body,
        name: s.name,
        source: (s.source_kind as SchemeSource | null) ?? 'paste',
      })
      setInfo(`Loaded "${s.name}" (${s.char_count.toLocaleString('en-GB')} characters).`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load that scheme.')
    } finally {
      setBusy('')
    }
  }

  async function removeSelected() {
    if (!selectedId) return
    const s = library.schemes.find((x) => x.id === selectedId)
    if (!s || !window.confirm(`Delete "${s.name}" from your library?`)) return
    try {
      await library.remove(selectedId)
      setSelectedId('')
      setInfo(`Deleted "${s.name}".`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not delete.')
    }
  }

  return (
    <Panel
      title="1 · Question and mark scheme"
      action={
        value.text ? (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onChange({ text: '', name: '', source: 'paste' })}
            disabled={disabled}
          >
            <X className="h-3.5 w-3.5" /> Clear
          </Button>
        ) : null
      }
    >
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
          <select
            className="min-w-[220px] flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={selectedId}
            onChange={(e) => void loadFromLibrary(e.target.value)}
            disabled={disabled || !!busy}
            aria-label="Saved mark schemes"
          >
            <option value="">
              {library.signedOut
                ? 'Sign in to keep a library of schemes'
                : library.schemes.length
                  ? 'Choose a saved scheme for this paper'
                  : 'No saved schemes for this paper yet'}
            </option>
            {library.schemes.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} · {s.char_count.toLocaleString('en-GB')} chars
              </option>
            ))}
          </select>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.docx,.txt,.md,.rtf,application/pdf,text/plain"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void importFile(f)
              e.target.value = ''
            }}
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => fileRef.current?.click()}
            disabled={disabled || !!busy || !packId}
          >
            <FileUp className="h-3.5 w-3.5" /> Upload PDF or Word
          </Button>
          {selectedId && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => void removeSelected()}
              disabled={disabled}
              aria-label="Delete saved scheme"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Drop a PDF or .docx here, or paste the scheme below. The file is read in your browser and
          never uploaded. Cut the text down to the question you are marking: indicative content
          changes every series.
        </p>
      </div>

      {busy && <p className="mt-2 text-sm italic text-muted-foreground">{busy}...</p>}
      {error && (
        <div className="mt-2">
          <Notice kind="error">{error}</Notice>
        </div>
      )}
      {info && !error && (
        <div className="mt-2">
          <Notice kind="ok">{info}</Notice>
        </div>
      )}

      <Textarea
        className="mt-3 min-h-[180px] text-sm"
        placeholder="Paste the question and the published mark scheme for this series here: the levels grid and the indicative content for this question."
        value={value.text}
        onChange={(e) => onChange({ ...value, text: e.target.value })}
        disabled={disabled}
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <input
          className="min-w-[200px] flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-sm"
          placeholder="Name for your library, e.g. 4EA1 Paper 1 - June 2026"
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          disabled={disabled}
        />
        <Button
          size="sm"
          onClick={() => void saveToLibrary()}
          disabled={disabled || !!busy || !value.text.trim() || !packId || library.signedOut}
        >
          <Save className="h-3.5 w-3.5" /> Save to library
        </Button>
      </div>
    </Panel>
  )
}
