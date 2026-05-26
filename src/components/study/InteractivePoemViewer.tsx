'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import DOMPurify from 'dompurify'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import type { Locale } from '@/lib/i18n/dictionary'

/* ── Locale helper (mirrors useT()'s cookie read) ──────────────── */
function readLocaleCookie(): Locale {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  return match?.[1] === 'ar' ? 'ar' : 'en'
}

function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => {
    setLocale(readLocaleCookie())
    function onLangChange() {
      setLocale(readLocaleCookie())
    }
    window.addEventListener('eh-lang-change', onLangChange)
    return () => window.removeEventListener('eh-lang-change', onLangChange)
  }, [])
  return locale
}

/* ── Types ──────────────────────────────────────────────────────── */

export interface PoemAnnotation {
  type: string
  note: string
  color?: string
}

export interface PoemLine {
  text: string
  annotations?: PoemAnnotation[]
}

export interface KeyQuote {
  quote: string
  analysis: string
  themes: string[]
  // Khaleeji-leaning AR commentary on the quote (quote itself stays in EN).
  analysisAr?: string
  themesAr?: string[]
}

export interface LanguageDevice {
  device: string
  example: string
  effect: string
  lineRef: number
  // Khaleeji-leaning AR commentary on the device's effect.
  // `device` term and `example` (EN quotation) stay in EN.
  effectAr?: string
}

/**
 * Per-poem analysis content.
 *
 * AR variants (Khaleeji-leaning literary explanatory prose) are
 * optional. When the user is in `ar` locale and the AR variant
 * exists, the viewer renders it; otherwise it falls back to EN.
 *
 * Convention: technical terms (volta, enjambment, caesura,
 * sibilance, plosive) stay in Latin or transliterated; English
 * quotations stay in English; poet names stay in Latin.
 */
export interface PoemData {
  title: string
  poet: string
  lines: PoemLine[]
  context: string
  summary: string
  formAndStructure: string
  keyQuotes: KeyQuote[]
  languageDevices: LanguageDevice[]
  // AR variants for the prose-string fields. Keep optional so the
  // bulk of the anthology (translation-pending) stays type-clean.
  contextAr?: string
  summaryAr?: string
  formAndStructureAr?: string
}

/* ── Analysis panel types ───────────────────────────────────────── */

type AnalysisTab = 'context' | 'summary' | 'form' | 'quotes' | 'language'

const TABS: {
  key: AnalysisTab
  labelKey: string
  color: string
  bgActive: string
  bgHighlight: string
}[] = [
  {
    key: 'context',
    labelKey: 'poem_viewer.tab_context',
    color: 'text-blue-700',
    bgActive: 'bg-blue-500/20 border-blue-500/50 text-blue-700',
    bgHighlight: 'bg-blue-500/15',
  },
  {
    key: 'summary',
    labelKey: 'poem_viewer.tab_summary',
    color: 'text-foreground',
    bgActive: 'bg-muted border-border text-foreground',
    bgHighlight: '',
  },
  {
    key: 'form',
    labelKey: 'poem_viewer.tab_form',
    color: 'text-purple-700',
    bgActive: 'bg-purple-500/20 border-purple-500/50 text-purple-700',
    bgHighlight: 'bg-purple-500/15',
  },
  {
    key: 'quotes',
    labelKey: 'poem_viewer.tab_quotes',
    color: 'text-amber-700',
    bgActive: 'bg-amber-500/20 border-amber-500/50 text-amber-700',
    bgHighlight: 'bg-amber-500/15',
  },
  {
    key: 'language',
    labelKey: 'poem_viewer.tab_language',
    color: 'text-emerald-700',
    bgActive: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-700',
    bgHighlight: 'bg-emerald-500/15',
  },
]

/* ── Line popover ───────────────────────────────────────────────── */

function LinePopover({
  annotations,
  onClose,
  anchorRef,
}: {
  annotations: PoemAnnotation[]
  onClose: () => void
  anchorRef: HTMLElement | null
}) {
  const t = useT()
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        anchorRef &&
        !anchorRef.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose, anchorRef])

  if (!anchorRef) return null

  return (
    <div
      ref={popoverRef}
      className="absolute left-0 right-0 z-30 mt-1 animate-fade-in rounded-lg border border-border bg-popover p-3 shadow-elevated"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t('poem_viewer.annotations')}
        </span>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm leading-none px-1"
          aria-label={t('poem_viewer.close_annotations')}
        >
          &times;
        </button>
      </div>
      <div className="space-y-2">
        {annotations.map((a, i) => (
          <div key={i} className="text-sm">
            <span
              className="inline-block rounded px-1.5 py-0.5 text-xs font-medium mr-2"
              style={{
                backgroundColor: a.color ? `${a.color}22` : 'hsl(var(--muted))',
                color: a.color || 'hsl(var(--muted-foreground))',
              }}
            >
              {a.type}
            </span>
            <span className="text-popover-foreground">{a.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Analysis panels ────────────────────────────────────────────── */

function ContextPanel({ html }: { html: string }) {
  return (
    <div
      className="prose prose-sm max-w-none text-sm leading-relaxed text-card-foreground"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  )
}

function SummaryPanel({ text }: { text: string }) {
  return (
    <div className="text-sm leading-relaxed text-card-foreground whitespace-pre-wrap">{text}</div>
  )
}

function FormPanel({ text }: { text: string }) {
  return (
    <div className="text-sm leading-relaxed text-card-foreground whitespace-pre-wrap">{text}</div>
  )
}

function QuotesPanel({ quotes, locale }: { quotes: KeyQuote[]; locale: Locale }) {
  return (
    <div className="space-y-4">
      {quotes.map((q, i) => {
        // Quotation itself always renders in English (per editorial policy).
        const analysis = locale === 'ar' && q.analysisAr ? q.analysisAr : q.analysis
        const themes = locale === 'ar' && q.themesAr ? q.themesAr : q.themes
        return (
          <div key={i} className="rounded-md border border-amber-500/20 bg-amber-500/5 p-3">
            <p className="text-sm font-medium text-amber-700 italic mb-1.5" dir="ltr" lang="en">
              &ldquo;{q.quote}&rdquo;
            </p>
            <p className="text-sm text-card-foreground mb-2">{analysis}</p>
            <div className="flex flex-wrap gap-1.5">
              {themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-clay-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function LanguagePanel({ devices, locale }: { devices: LanguageDevice[]; locale: Locale }) {
  return (
    <div className="space-y-3">
      {devices.map((d, i) => {
        // Device label (volta, enjambment…) and the English example
        // always render in Latin / English.
        const effect = locale === 'ar' && d.effectAr ? d.effectAr : d.effect
        return (
          <div key={i} className="rounded-md border border-emerald-500/20 bg-emerald-500/5 p-3">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-medium text-emerald-700" dir="ltr">
                {d.device}
              </span>
              <span className="text-xs text-muted-foreground">Line {d.lineRef + 1}</span>
            </div>
            <p className="text-sm text-card-foreground italic mb-1" dir="ltr" lang="en">
              &ldquo;{d.example}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground">{effect}</p>
          </div>
        )
      })}
    </div>
  )
}

/* ── Main component ─────────────────────────────────────────────── */

export function InteractivePoemViewer({ poem }: { poem: PoemData }) {
  const t = useT()
  const locale = useLocale()
  const [activeTabs, setActiveTabs] = useState<Set<AnalysisTab>>(new Set())
  const [popoverLine, setPopoverLine] = useState<number | null>(null)
  const lineRefs = useRef<Map<number, HTMLElement>>(new Map())

  const toggleTab = useCallback((tab: AnalysisTab) => {
    setActiveTabs((prev) => {
      const next = new Set(prev)
      if (next.has(tab)) {
        next.delete(tab)
      } else {
        next.add(tab)
      }
      return next
    })
  }, [])

  const handleLineClick = useCallback((lineIndex: number, annotations?: PoemAnnotation[]) => {
    if (!annotations || annotations.length === 0) return
    setPopoverLine((prev) => (prev === lineIndex ? null : lineIndex))
  }, [])

  /* Determine per-line highlights based on active tabs */
  const getLineHighlights = useCallback(
    (lineIndex: number): string[] => {
      const classes: string[] = []

      if (activeTabs.has('quotes')) {
        const isQuoteLine = poem.keyQuotes.some(
          (q) =>
            poem.lines[lineIndex]?.text.includes(q.quote) ||
            q.quote.includes(poem.lines[lineIndex]?.text?.trim()),
        )
        if (isQuoteLine) classes.push('bg-amber-500/15')
      }

      if (activeTabs.has('language')) {
        const isDeviceLine = poem.languageDevices.some((d) => d.lineRef === lineIndex)
        if (isDeviceLine) classes.push('bg-emerald-500/15')
      }

      if (activeTabs.has('form')) {
        // Highlight stanza breaks and structurally notable lines (first/last of stanzas)
        const line = poem.lines[lineIndex]
        if (line && line.text.trim() === '') {
          classes.push('bg-purple-500/10')
        }
      }

      if (activeTabs.has('context')) {
        // Context highlights annotation-bearing lines
        const line = poem.lines[lineIndex]
        if (line?.annotations && line.annotations.length > 0) {
          classes.push('bg-blue-500/15')
        }
      }

      return classes
    },
    [activeTabs, poem],
  )

  const hasAnyActive = activeTabs.size > 0

  /* Which panel to show on the right - the most recently toggled, or first active */
  const activePanelTab = (() => {
    const ordered: AnalysisTab[] = ['context', 'summary', 'form', 'quotes', 'language']
    return ordered.find((t) => activeTabs.has(t)) ?? null
  })()

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="border-b border-border px-4 py-4 sm:px-6">
        <h2 className="text-heading-md text-foreground">{poem.title}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          {t('poem_viewer.by')} {poem.poet}
        </p>
      </div>

      {/* Toggle bar */}
      <div className="border-b border-border px-4 py-2.5 sm:px-6 flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = activeTabs.has(tab.key)
          return (
            <button
              key={tab.key}
              onClick={() => toggleTab(tab.key)}
              aria-pressed={isActive}
              className={cn(
                'rounded-md border px-3 py-1.5 text-xs font-medium transition-all duration-150',
                isActive
                  ? tab.bgActive
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50',
              )}
            >
              {t(tab.labelKey)}
            </button>
          )
        })}
      </div>

      {/* Body: poem + optional panel */}
      <div className={cn('flex flex-col', hasAnyActive && 'lg:flex-row')}>
        {/* Poem text */}
        <div
          className={cn(
            'flex-1 overflow-x-auto px-4 py-5 sm:px-6',
            hasAnyActive && 'lg:border-r lg:border-border',
          )}
        >
          <div className="font-serif">
            {poem.lines.map((line, idx) => {
              const highlights = getLineHighlights(idx)
              const hasAnnotations = line.annotations && line.annotations.length > 0
              const isBlank = line.text.trim() === ''

              return (
                <div key={idx} className="relative">
                  <div
                    ref={(el) => {
                      if (el) lineRefs.current.set(idx, el)
                    }}
                    onClick={() => handleLineClick(idx, line.annotations)}
                    role={hasAnnotations ? 'button' : undefined}
                    tabIndex={hasAnnotations ? 0 : undefined}
                    aria-label={
                      hasAnnotations
                        ? `${t('poem_viewer.line')} ${idx + 1}: ${t('poem_viewer.show')} ${line.annotations!.length} ${line.annotations!.length > 1 ? t('poem_viewer.annotation_plural') : t('poem_viewer.annotation_singular')}`
                        : undefined
                    }
                    aria-expanded={hasAnnotations ? popoverLine === idx : undefined}
                    onKeyDown={(e) => {
                      if (hasAnnotations && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault()
                        handleLineClick(idx, line.annotations)
                      }
                    }}
                    className={cn(
                      'group flex items-baseline gap-4 rounded-sm px-2 py-0.5 transition-colors duration-100',
                      isBlank ? 'h-5' : '',
                      hasAnnotations && 'cursor-pointer hover:bg-muted/40',
                      ...highlights,
                    )}
                  >
                    {/* Line number */}
                    <span className="w-6 shrink-0 select-none text-right text-xs tabular-nums text-muted-foreground/50">
                      {isBlank ? '' : idx + 1}
                    </span>

                    {/* Line text */}
                    <span
                      className={cn(
                        'text-sm sm:text-base leading-7 text-foreground',
                        hasAnnotations &&
                          'underline decoration-dotted decoration-muted-foreground/30 underline-offset-4',
                      )}
                    >
                      {line.text}
                    </span>

                    {/* Annotation indicator */}
                    {hasAnnotations && (
                      <span className="ml-auto shrink-0 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {line.annotations!.length}{' '}
                        {line.annotations!.length > 1
                          ? t('poem_viewer.note_plural')
                          : t('poem_viewer.note_singular')}
                      </span>
                    )}
                  </div>

                  {/* Popover */}
                  {popoverLine === idx && hasAnnotations && (
                    <LinePopover
                      annotations={line.annotations!}
                      onClose={() => setPopoverLine(null)}
                      anchorRef={lineRefs.current.get(idx) ?? null}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Analysis panel (desktop: right, mobile: below) */}
        {hasAnyActive && activePanelTab && (
          <div className="w-full border-t border-border lg:border-t-0 lg:w-[380px] xl:w-[420px] shrink-0 animate-fade-in">
            {/* Panel tab switcher (when multiple active) */}
            {activeTabs.size > 1 && (
              <div className="flex border-b border-border px-3 pt-2 gap-1 overflow-x-auto">
                {TABS.filter((tab) => activeTabs.has(tab.key)).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      /* Cycle focus by toggling all others off then back on,
                         or simpler: just re-order by removing & re-adding */
                      setActiveTabs((prev) => {
                        const next = new Set<AnalysisTab>()
                        // Put the clicked tab first
                        next.add(tab.key)
                        prev.forEach((tk) => {
                          if (tk !== tab.key) next.add(tk)
                        })
                        return next
                      })
                    }}
                    className={cn(
                      'px-2.5 py-1.5 text-xs font-medium rounded-t-md border-b-2 transition-colors',
                      activePanelTab === tab.key
                        ? `${tab.color} border-current`
                        : 'text-muted-foreground border-transparent hover:text-foreground',
                    )}
                  >
                    {t(tab.labelKey)}
                  </button>
                ))}
              </div>
            )}

            {/* Panel title */}
            <div className="px-4 pt-4 pb-2 sm:px-5">
              <h3
                className={cn(
                  'text-sm font-semibold',
                  TABS.find((tab) => tab.key === activePanelTab)?.color,
                )}
              >
                {(() => {
                  const labelKey = TABS.find((tab) => tab.key === activePanelTab)?.labelKey
                  return labelKey ? t(labelKey) : null
                })()}
              </h3>
            </div>

            {/* Panel content */}
            <div className="px-4 pb-5 sm:px-5 overflow-y-auto max-h-[60vh] lg:max-h-[calc(100vh-280px)]">
              {activePanelTab === 'context' && (
                <ContextPanel
                  html={locale === 'ar' && poem.contextAr ? poem.contextAr : poem.context}
                />
              )}
              {activePanelTab === 'summary' && (
                <SummaryPanel
                  text={locale === 'ar' && poem.summaryAr ? poem.summaryAr : poem.summary}
                />
              )}
              {activePanelTab === 'form' && (
                <FormPanel
                  text={
                    locale === 'ar' && poem.formAndStructureAr
                      ? poem.formAndStructureAr
                      : poem.formAndStructure
                  }
                />
              )}
              {activePanelTab === 'quotes' && (
                <QuotesPanel quotes={poem.keyQuotes} locale={locale} />
              )}
              {activePanelTab === 'language' && (
                <LanguagePanel devices={poem.languageDevices} locale={locale} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
