'use client'

import React, { useState, useEffect } from 'react'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ───────────────────────────────────────────────────────────────────

interface MyQuoteBankProps {
  /** Page slug used as localStorage key */
  slug: string
  /** Optional display title for the section */
  title?: string
}

interface SavedQuote {
  id: string
  text: string
  annotation: string
  savedAt: number
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function storageKey(slug: string) {
  return `english-hub-quotes-${slug}`
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, {
    dateStyle: 'medium',
  })
}

function loadQuotes(slug: string): SavedQuote[] {
  try {
    const raw = localStorage.getItem(storageKey(slug))
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function persistQuotes(slug: string, quotes: SavedQuote[]) {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(quotes))
  } catch {
    // localStorage full or unavailable
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function MyQuoteBank({ slug, title }: MyQuoteBankProps) {
  const t = useT()
  const resolvedTitle = title ?? t('quotebank.title')
  const [quotes, setQuotes] = useState<SavedQuote[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [quoteText, setQuoteText] = useState('')
  const [annotation, setAnnotation] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [showForm, setShowForm] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadQuotes(slug)
    setQuotes(saved)
    if (saved.length > 0) {
      setIsOpen(true)
    }
  }, [slug])

  // Save a new quote
  const handleSaveQuote = () => {
    const trimmedText = quoteText.trim()
    if (!trimmedText) return

    const newQuote: SavedQuote = {
      id: generateId(),
      text: trimmedText,
      annotation: annotation.trim(),
      savedAt: Date.now(),
    }

    const updated = [newQuote, ...quotes]
    setQuotes(updated)
    persistQuotes(slug, updated)
    setQuoteText('')
    setAnnotation('')
    setShowForm(false)
  }

  // Delete a quote
  const handleDelete = (id: string) => {
    if (deleteConfirm !== id) {
      setDeleteConfirm(id)
      return
    }
    const updated = quotes.filter((q) => q.id !== id)
    setQuotes(updated)
    persistQuotes(slug, updated)
    setDeleteConfirm(null)
  }

  // Reset delete confirmation after timeout
  useEffect(() => {
    if (deleteConfirm) {
      const t = setTimeout(() => setDeleteConfirm(null), 3000)
      return () => clearTimeout(t)
    }
  }, [deleteConfirm])

  // Export all quotes as formatted text to clipboard
  const handleExport = async () => {
    if (quotes.length === 0) return

    const lines = quotes.map((q, i) => {
      let entry = `${i + 1}. "${q.text}"`
      if (q.annotation) {
        entry += `\n   ${t('quotebank.export_note_label')}: ${q.annotation}`
      }
      entry += `\n   ${t('quotebank.export_saved_label')}: ${formatDate(q.savedAt)}`
      return entry
    })

    const formatted = `${t('quotebank.export_heading')}\n${'='.repeat(40)}\n\n${lines.join('\n\n')}`

    try {
      await navigator.clipboard.writeText(formatted)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable
    }
  }

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
          {resolvedTitle}
          {quotes.length > 0 && (
            <span className="text-xs text-muted-foreground font-normal">
              ({quotes.length}{' '}
              {quotes.length === 1 ? t('quotebank.quote_singular') : t('quotebank.quote_plural')})
            </span>
          )}
        </span>
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="border-t border-border px-4 pb-4 pt-3 space-y-3">
          {/* Add quote form toggle */}
          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="rounded px-3 py-1.5 text-sm border border-border text-foreground hover:bg-card/80 transition-colors"
            >
              + {t('quotebank.save_a_quote')}
            </button>
          ) : (
            <div className="space-y-2 rounded-md border border-border p-3">
              <textarea
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                placeholder={t('quotebank.quote_placeholder')}
                rows={2}
                className="w-full resize-y rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-border"
              />
              <input
                type="text"
                value={annotation}
                onChange={(e) => setAnnotation(e.target.value)}
                placeholder={t('quotebank.annotation_placeholder')}
                className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-border"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveQuote}
                  disabled={!quoteText.trim()}
                  className="rounded px-3 py-1.5 text-sm border border-border text-foreground hover:bg-card/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {t('quotebank.save_quote')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setQuoteText('')
                    setAnnotation('')
                  }}
                  className="rounded px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('action.cancel')}
                </button>
              </div>
            </div>
          )}

          {/* Saved quotes list */}
          {quotes.length > 0 && (
            <ul className="space-y-2">
              {quotes.map((q) => (
                <li key={q.id} className="rounded-md border border-border p-3 space-y-1">
                  <p className="text-sm text-foreground italic">&ldquo;{q.text}&rdquo;</p>
                  {q.annotation && <p className="text-xs text-muted-foreground">{q.annotation}</p>}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">{formatDate(q.savedAt)}</span>
                    <button
                      type="button"
                      onClick={() => handleDelete(q.id)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {deleteConfirm === q.id ? t('quotebank.confirm_delete') : t('action.delete')}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {quotes.length === 0 && (
            <p className="text-sm text-muted-foreground">{t('quotebank.empty_state')}</p>
          )}

          {/* Export button */}
          {quotes.length > 0 && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleExport}
                className="rounded px-2 py-1 text-xs border border-border text-foreground hover:bg-card/80 transition-colors"
              >
                {copied ? t('notes.copied') : t('quotebank.export_all')}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
