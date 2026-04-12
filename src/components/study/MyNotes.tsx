'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface MyNotesProps {
  /** Page slug used as localStorage key */
  slug: string
  /** Optional display title for the section */
  title?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function storageKey(slug: string) {
  return `english-hub-notes-${slug}`
}

function timestampKey(slug: string) {
  return `english-hub-notes-ts-${slug}`
}

function wordCount(text: string): number {
  const trimmed = text.trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

function formatTimestamp(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

// ─── Component ───────────────────────────────────────────────────────────────

export function MyNotes({ slug, title = 'My Notes' }: MyNotesProps) {
  const [notes, setNotes] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [lastSaved, setLastSaved] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const initialLoadDone = useRef(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey(slug))
      const ts = localStorage.getItem(timestampKey(slug))
      if (saved) {
        setNotes(saved)
        setIsOpen(true) // expand if notes exist
      }
      if (ts) {
        setLastSaved(Number(ts))
      }
    } catch {
      // localStorage unavailable
    }
    initialLoadDone.current = true
  }, [slug])

  // Save to localStorage
  const saveNotes = useCallback(
    (text: string) => {
      try {
        const now = Date.now()
        localStorage.setItem(storageKey(slug), text)
        localStorage.setItem(timestampKey(slug), String(now))
        setLastSaved(now)
      } catch {
        // localStorage full or unavailable
      }
    },
    [slug]
  )

  // Debounced auto-save after 2 seconds of inactivity
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setNotes(value)

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      saveNotes(value)
    }, 2000)
  }

  // Save on blur
  const handleBlur = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
    if (initialLoadDone.current) {
      saveNotes(notes)
    }
  }

  // Clear notes with confirmation
  const handleClear = () => {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    setNotes('')
    setLastSaved(null)
    setConfirmClear(false)
    try {
      localStorage.removeItem(storageKey(slug))
      localStorage.removeItem(timestampKey(slug))
    } catch {
      // ignore
    }
  }

  // Copy notes to clipboard
  const handleCopy = async () => {
    if (!notes.trim()) return
    try {
      await navigator.clipboard.writeText(notes)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable
    }
  }

  // Reset confirm-clear when user does anything else
  useEffect(() => {
    if (confirmClear) {
      const t = setTimeout(() => setConfirmClear(false), 3000)
      return () => clearTimeout(t)
    }
  }, [confirmClear])

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const count = wordCount(notes)

  return (
    <section className="rounded-lg border border-border bg-card">
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-foreground hover:bg-card/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 font-medium">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`}
            aria-hidden="true"
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {title}
          {count > 0 && (
            <span className="text-xs text-muted-foreground font-normal">
              ({count} {count === 1 ? 'word' : 'words'})
            </span>
          )}
        </span>
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="border-t border-border px-4 pb-4 pt-3 space-y-3">
          <textarea
            value={notes}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your notes here..."
            rows={6}
            className="w-full resize-y rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-border"
          />

          {/* Footer bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>{count} {count === 1 ? 'word' : 'words'}</span>
              {lastSaved && (
                <span>Saved {formatTimestamp(lastSaved)}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Export / copy button */}
              <button
                type="button"
                onClick={handleCopy}
                disabled={!notes.trim()}
                className="rounded px-2 py-1 text-xs border border-border text-foreground hover:bg-card/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {copied ? 'Copied!' : 'Copy to clipboard'}
              </button>

              {/* Clear button */}
              <button
                type="button"
                onClick={handleClear}
                disabled={!notes.trim() && !confirmClear}
                className="rounded px-2 py-1 text-xs border border-border text-foreground hover:bg-card/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {confirmClear ? 'Confirm clear?' : 'Clear notes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
