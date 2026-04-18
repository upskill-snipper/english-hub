'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import DOMPurify from 'dompurify'
import { ReadingProgressTracker } from './ReadingProgressTracker'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Annotation {
  type: 'context' | 'quote' | 'language' | 'theme' | 'character'
  text: string
  note: string
}

interface TextSection {
  id: string
  title: string
  content: string
  annotations?: Annotation[]
}

interface CharacterInfo {
  name: string
  description: string
  keyQuotes: string[]
}

interface ThemeInfo {
  name: string
  description: string
  evidence: string[]
}

interface TextData {
  title: string
  author: string
  type: 'play' | 'novel' | 'novella'
  sections: TextSection[]
  characters: CharacterInfo[]
  themes: ThemeInfo[]
  contextNotes: string
}

type ReadingMode = 'close' | 'speed' | 'analytical'
type OverlayType = Annotation['type']

interface InteractiveTextViewerProps {
  data: TextData
  /** Unique key for localStorage persistence (e.g. "macbeth" or "christmas-carol") */
  storageKey: string
  className?: string
}

// ─── Constants ───────────────────────────────────────────────────────────────

const OVERLAY_CONFIG: Record<OverlayType, { label: string; color: string; bg: string; border: string }> = {
  context: {
    label: 'Context',
    color: 'text-blue-700',
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/40',
  },
  quote: {
    label: 'Key Quotes',
    color: 'text-amber-700',
    bg: 'bg-amber-500/20',
    border: 'border-amber-500/40',
  },
  language: {
    label: 'Language',
    color: 'text-purple-700',
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/40',
  },
  theme: {
    label: 'Themes',
    color: 'text-emerald-700',
    bg: 'bg-emerald-500/20',
    border: 'border-emerald-500/40',
  },
  character: {
    label: 'Characters',
    color: 'text-rose-700',
    bg: 'bg-rose-500/20',
    border: 'border-rose-500/40',
  },
}

const READING_MODES: { key: ReadingMode; label: string; description: string }[] = [
  { key: 'close', label: 'Close Reading', description: 'All annotations visible' },
  { key: 'speed', label: 'Speed Reading', description: 'Clean text only' },
  { key: 'analytical', label: 'Analytical', description: 'Themes + quotes' },
]

/** Average reading speed for GCSE students (words per minute) */
const READING_WPM = 200

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getStorageKey(storageKey: string, suffix: string): string {
  return `itv_${storageKey}_${suffix}`
}

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage(key: string, value: unknown): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage full or blocked — silently fail
  }
}

function countWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return text ? text.split(' ').length : 0
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function CheckCircleIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function BookOpenIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function ListIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function XMarkIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function EyeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  )
}

// ─── Annotation tooltip ──────────────────────────────────────────────────────

function AnnotationTooltip({
  annotation,
  children,
}: {
  annotation: Annotation
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false)
  const cfg = OVERLAY_CONFIG[annotation.type]

  return (
    <span
      className="relative inline cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      role="button"
      aria-label={`${cfg.label} note: ${annotation.note}`}
    >
      <span className={`rounded-sm px-0.5 ${cfg.bg} border-b-2 ${cfg.border}`}>
        {children}
      </span>
      {show && (
        <span
          className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg border border-border bg-card p-3 shadow-elevated animate-fade-in"
          role="tooltip"
        >
          <span className={`mb-1 block text-xs font-semibold uppercase tracking-wider ${cfg.color}`}>
            {cfg.label}
          </span>
          <span className="block text-sm leading-relaxed text-foreground">
            {annotation.note}
          </span>
          {/* Arrow */}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-border" />
        </span>
      )}
    </span>
  )
}

// ─── Text renderer with inline annotations ───────────────────────────────────

function AnnotatedContent({
  html,
  annotations,
  activeOverlays,
}: {
  html: string
  annotations: Annotation[]
  activeOverlays: Set<OverlayType>
}) {
  const rendered = useMemo(() => {
    // Filter annotations to only those with active overlays
    const active = annotations.filter((a) => activeOverlays.has(a.type))

    if (active.length === 0) {
      return <div className="prose-reader" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
    }

    // Parse the HTML to plain text for matching, then rebuild with annotations
    // We use a simple approach: strip tags, find annotation positions, then reconstruct
    const stripped = html.replace(/<[^>]*>/g, '')

    // Find all annotation matches and their positions
    type Match = { start: number; end: number; annotation: Annotation }
    const matches: Match[] = []

    for (const ann of active) {
      const escaped = escapeRegExp(ann.text)
      const regex = new RegExp(escaped, 'gi')
      let m: RegExpExecArray | null
      while ((m = regex.exec(stripped)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, annotation: ann })
      }
    }

    // Sort by position, then by length (longer first for overlapping)
    matches.sort((a, b) => a.start - b.start || b.end - a.end)

    // Remove overlapping matches (keep first/longest)
    const filtered: Match[] = []
    let lastEnd = -1
    for (const match of matches) {
      if (match.start >= lastEnd) {
        filtered.push(match)
        lastEnd = match.end
      }
    }

    // Build segments
    const segments: React.ReactNode[] = []
    let cursor = 0

    for (let i = 0; i < filtered.length; i++) {
      const { start, end, annotation } = filtered[i]

      // Text before this annotation
      if (cursor < start) {
        segments.push(
          <span key={`t-${i}`}>{stripped.slice(cursor, start)}</span>
        )
      }

      // The annotated text
      segments.push(
        <AnnotationTooltip key={`a-${i}`} annotation={annotation}>
          {stripped.slice(start, end)}
        </AnnotationTooltip>
      )

      cursor = end
    }

    // Remaining text
    if (cursor < stripped.length) {
      segments.push(<span key="t-end">{stripped.slice(cursor)}</span>)
    }

    return <div className="prose-reader whitespace-pre-line">{segments}</div>
  }, [html, annotations, activeOverlays])

  return rendered
}

// ─── Section navigation sidebar (desktop) ────────────────────────────────────

function SectionSidebar({
  sections,
  activeSectionId,
  completedSections,
  onSelect,
}: {
  sections: TextSection[]
  activeSectionId: string
  completedSections: Set<string>
  onSelect: (id: string) => void
}) {
  return (
    <nav
      className="hidden lg:flex flex-col gap-0.5 overflow-y-auto border-r border-border bg-card p-3"
      aria-label="Section navigation"
    >
      <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Contents
      </h2>
      {sections.map((section) => {
        const isActive = section.id === activeSectionId
        const isComplete = completedSections.has(section.id)

        return (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={[
              'flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors',
              isActive
                ? 'bg-brand-accent/10 text-brand-accent font-medium'
                : 'text-muted-foreground hover:bg-surface-raised hover:text-foreground',
            ].join(' ')}
          >
            {isComplete ? (
              <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-brand-accent" />
            ) : (
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? 'bg-brand-accent' : 'bg-muted-foreground/40'
                  }`}
                />
              </span>
            )}
            <span className="truncate">{section.title}</span>
          </button>
        )
      })}
    </nav>
  )
}

// ─── Section dropdown (mobile) ───────────────────────────────────────────────

function SectionDropdown({
  sections,
  activeSectionId,
  completedSections,
  onSelect,
}: {
  sections: TextSection[]
  activeSectionId: string
  completedSections: Set<string>
  onSelect: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const active = sections.find((s) => s.id === activeSectionId)

  return (
    <div className="relative lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
      >
        <span className="flex items-center gap-2 truncate">
          <ListIcon />
          {active?.title ?? 'Select section'}
        </span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 mt-1 max-h-64 overflow-y-auto rounded-lg border border-border bg-card shadow-elevated animate-fade-in">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId
            const isComplete = completedSections.has(section.id)

            return (
              <button
                key={section.id}
                onClick={() => {
                  onSelect(section.id)
                  setOpen(false)
                }}
                className={[
                  'flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors',
                  isActive
                    ? 'bg-brand-accent/10 text-brand-accent font-medium'
                    : 'text-muted-foreground hover:bg-surface-raised hover:text-foreground',
                ].join(' ')}
              >
                {isComplete && <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-brand-accent" />}
                <span className="truncate">{section.title}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── Overlay toggle pills ────────────────────────────────────────────────────

function OverlayToggles({
  activeOverlays,
  onToggle,
}: {
  activeOverlays: Set<OverlayType>
  onToggle: (type: OverlayType) => void
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {(Object.entries(OVERLAY_CONFIG) as [OverlayType, typeof OVERLAY_CONFIG[OverlayType]][]).map(
        ([type, cfg]) => {
          const isActive = activeOverlays.has(type)
          return (
            <button
              key={type}
              onClick={() => onToggle(type)}
              className={[
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all',
                isActive
                  ? `${cfg.bg} ${cfg.color} ring-1 ring-inset ${cfg.border}`
                  : 'bg-surface-raised text-muted-foreground hover:text-foreground hover:bg-surface-overlay',
              ].join(' ')}
              aria-pressed={isActive}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isActive ? cfg.bg.replace('/20', '') : 'bg-muted-foreground/40'
                }`}
              />
              {cfg.label}
            </button>
          )
        }
      )}
    </div>
  )
}

// ─── Reading mode selector ───────────────────────────────────────────────────

function ReadingModeSelector({
  mode,
  onChange,
}: {
  mode: ReadingMode
  onChange: (mode: ReadingMode) => void
}) {
  return (
    <div className="flex rounded-lg border border-border bg-card p-0.5">
      {READING_MODES.map((m) => (
        <button
          key={m.key}
          onClick={() => onChange(m.key)}
          title={m.description}
          className={[
            'rounded-md px-3 py-1.5 text-xs font-medium transition-all',
            mode === m.key
              ? 'bg-brand-accent text-brand-bg shadow-glow-sm'
              : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}

// ─── Info panel (characters / themes / context) ──────────────────────────────

function InfoPanel({
  data,
  show,
  onClose,
}: {
  data: TextData
  show: 'characters' | 'themes' | 'context' | null
  onClose: () => void
}) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close panel"
      />

      {/* Panel */}
      <div className="relative z-10 h-full w-full max-w-md overflow-y-auto border-l border-border bg-card p-6 shadow-elevated animate-slide-in-right">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground capitalize">{show}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-raised hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {show === 'characters' && (
          <div className="flex flex-col gap-4">
            {data.characters.map((char) => (
              <div key={char.name} className="rounded-xl border border-border bg-surface-raised p-4">
                <h3 className="text-sm font-bold text-foreground">{char.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {char.description}
                </p>
                {char.keyQuotes.length > 0 && (
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-amber-700">Key Quotes</span>
                    {char.keyQuotes.map((q, i) => (
                      <blockquote
                        key={i}
                        className="border-l-2 border-amber-500/40 pl-3 text-xs italic text-muted-foreground"
                      >
                        {q}
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {show === 'themes' && (
          <div className="flex flex-col gap-4">
            {data.themes.map((theme) => (
              <div key={theme.name} className="rounded-xl border border-border bg-surface-raised p-4">
                <h3 className="text-sm font-bold text-emerald-700">{theme.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>
                {theme.evidence.length > 0 && (
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-muted-foreground">Evidence</span>
                    {theme.evidence.map((e, i) => (
                      <p key={i} className="text-xs text-muted-foreground">
                        &bull; {e}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {show === 'context' && (
          <div className="rounded-xl border border-border bg-surface-raised p-4">
            <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {data.contextNotes}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

function InteractiveTextViewer({
  data,
  storageKey,
  className = '',
}: InteractiveTextViewerProps) {
  // ── Persisted state ──────────────────────────────────────────────────────
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    () => new Set(loadFromStorage<string[]>(getStorageKey(storageKey, 'completed'), []))
  )

  const [activeSectionId, setActiveSectionId] = useState<string>(
    () => loadFromStorage<string>(getStorageKey(storageKey, 'active'), data.sections[0]?.id ?? '')
  )

  // ── UI state ─────────────────────────────────────────────────────────────
  const [readingMode, setReadingMode] = useState<ReadingMode>('close')
  const [activeOverlays, setActiveOverlays] = useState<Set<OverlayType>>(
    new Set<OverlayType>(['context', 'quote', 'language', 'theme', 'character'])
  )
  const [infoPanel, setInfoPanel] = useState<'characters' | 'themes' | 'context' | null>(null)

  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  // ── Derived overlays from reading mode ───────────────────────────────────
  const effectiveOverlays = useMemo(() => {
    if (readingMode === 'speed') return new Set<OverlayType>()
    if (readingMode === 'analytical') {
      const result = new Set<OverlayType>()
      if (activeOverlays.has('theme')) result.add('theme')
      else result.add('theme') // always show themes in analytical
      if (activeOverlays.has('quote')) result.add('quote')
      else result.add('quote') // always show quotes in analytical
      return result
    }
    // Close reading — respect user toggles
    return activeOverlays
  }, [readingMode, activeOverlays])

  // ── Word counts and timing ───────────────────────────────────────────────
  const sectionWordCounts = useMemo(
    () => data.sections.map((s) => ({ id: s.id, words: countWords(s.content) })),
    [data.sections]
  )

  const totalWords = useMemo(
    () => sectionWordCounts.reduce((sum, s) => sum + s.words, 0),
    [sectionWordCounts]
  )

  const wordsRead = useMemo(
    () =>
      sectionWordCounts
        .filter((s) => completedSections.has(s.id))
        .reduce((sum, s) => sum + s.words, 0),
    [sectionWordCounts, completedSections]
  )

  const percentage = totalWords > 0 ? (wordsRead / totalWords) * 100 : 0
  const remainingMinutes = (totalWords - wordsRead) / READING_WPM

  // ── Persist completed sections ───────────────────────────────────────────
  useEffect(() => {
    saveToStorage(getStorageKey(storageKey, 'completed'), Array.from(completedSections))
  }, [completedSections, storageKey])

  // ── Persist active section ───────────────────────────────────────────────
  useEffect(() => {
    saveToStorage(getStorageKey(storageKey, 'active'), activeSectionId)
  }, [activeSectionId, storageKey])

  // ── Scroll-based section completion detection ────────────────────────────
  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    function handleScroll() {
      if (!container) return

      // Check each section's scroll position
      sectionRefs.current.forEach((el, sectionId) => {
        const rect = el.getBoundingClientRect()
        const containerRect = container!.getBoundingClientRect()

        // Section is considered "read" when bottom is visible (within 100px of container bottom)
        if (rect.bottom <= containerRect.bottom + 100 && rect.top < containerRect.bottom) {
          setCompletedSections((prev) => {
            if (prev.has(sectionId)) return prev
            const next = new Set(prev)
            next.add(sectionId)
            return next
          })
        }
      })
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Section navigation ───────────────────────────────────────────────────
  const navigateToSection = useCallback(
    (sectionId: string) => {
      setActiveSectionId(sectionId)
      const el = sectionRefs.current.get(sectionId)
      if (el && contentRef.current) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    []
  )

  // ── Overlay toggle ───────────────────────────────────────────────────────
  const toggleOverlay = useCallback((type: OverlayType) => {
    setActiveOverlays((prev) => {
      const next = new Set(prev)
      if (next.has(type)) {
        next.delete(type)
      } else {
        next.add(type)
      }
      return next
    })
  }, [])

  // ── Reading mode change ──────────────────────────────────────────────────
  const handleModeChange = useCallback((mode: ReadingMode) => {
    setReadingMode(mode)
  }, [])

  // ── Active section ───────────────────────────────────────────────────────
  const activeSection = data.sections.find((s) => s.id === activeSectionId) ?? data.sections[0]

  return (
    <div
      className={[
        'flex flex-col rounded-2xl border border-border bg-brand-bg overflow-hidden',
        'shadow-soft',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="border-b border-border bg-card px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Title */}
          <div className="flex items-center gap-3">
            <BookOpenIcon className="h-5 w-5 text-brand-accent flex-shrink-0" />
            <div>
              <h1 className="text-base font-bold text-foreground sm:text-lg">
                {data.title}
              </h1>
              <p className="text-xs text-muted-foreground">
                {data.author} &middot;{' '}
                <span className="capitalize">{data.type}</span> &middot;{' '}
                {data.sections.length} {data.type === 'play' ? 'scenes' : 'chapters'}
              </p>
            </div>
          </div>

          {/* Quick info buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setInfoPanel('characters')}
              className="rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-rose-500/40 transition-colors"
            >
              Characters
            </button>
            <button
              onClick={() => setInfoPanel('themes')}
              className="rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors"
            >
              Themes
            </button>
            <button
              onClick={() => setInfoPanel('context')}
              className="rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-colors"
            >
              Context
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <ReadingProgressTracker
            percentage={percentage}
            sectionsCompleted={completedSections.size}
            totalSections={data.sections.length}
            estimatedMinutesRemaining={remainingMinutes}
            variant="bar"
          />
        </div>
      </header>

      {/* ── Toolbar ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 border-b border-border bg-card px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* Reading mode selector */}
        <ReadingModeSelector mode={readingMode} onChange={handleModeChange} />

        {/* Overlay toggles (hidden in speed mode) */}
        {readingMode !== 'speed' && (
          <div className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <OverlayToggles activeOverlays={activeOverlays} onToggle={toggleOverlay} />
          </div>
        )}
      </div>

      {/* ── Mobile section dropdown ─────────────────────────────────────── */}
      <div className="border-b border-border bg-card px-4 py-3 lg:hidden">
        <SectionDropdown
          sections={data.sections}
          activeSectionId={activeSectionId}
          completedSections={completedSections}
          onSelect={navigateToSection}
        />
      </div>

      {/* ── Body: sidebar + reader ──────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="w-64 flex-shrink-0 overflow-hidden">
          <SectionSidebar
            sections={data.sections}
            activeSectionId={activeSectionId}
            completedSections={completedSections}
            onSelect={navigateToSection}
          />
        </div>

        {/* Reading area */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 md:px-12 lg:px-16"
          style={{ maxHeight: '70vh' }}
        >
          {data.sections.map((section) => (
            <section
              key={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el)
              }}
              className="mb-12"
              id={`section-${section.id}`}
            >
              {/* Section header */}
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-heading-md text-foreground">
                  {section.title}
                </h2>
                {completedSections.has(section.id) && (
                  <CheckCircleIcon className="h-5 w-5 text-brand-accent flex-shrink-0" />
                )}
              </div>

              {/* Section word count */}
              <p className="mb-4 text-xs text-muted-foreground">
                {countWords(section.content).toLocaleString()} words &middot;{' '}
                ~{Math.ceil(countWords(section.content) / READING_WPM)} min read
              </p>

              {/* Content */}
              <div className="text-body-lg text-foreground/90 leading-relaxed">
                <AnnotatedContent
                  html={section.content}
                  annotations={section.annotations ?? []}
                  activeOverlays={effectiveOverlays}
                />
              </div>

              {/* Section divider */}
              <hr className="mt-10 border-border" />
            </section>
          ))}

          {/* End of text */}
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircleIcon className="h-8 w-8 text-brand-accent" />
            <p className="text-sm font-semibold text-foreground">
              End of {data.type === 'play' ? 'play' : 'text'}
            </p>
            <p className="text-xs text-muted-foreground">
              {completedSections.size} of {data.sections.length} sections completed
            </p>
          </div>
        </div>
      </div>

      {/* ── Info panel overlay ───────────────────────────────────────────── */}
      <InfoPanel data={data} show={infoPanel} onClose={() => setInfoPanel(null)} />
    </div>
  )
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export {
  InteractiveTextViewer,
  type InteractiveTextViewerProps,
  type TextData,
  type TextSection,
  type Annotation,
  type CharacterInfo,
  type ThemeInfo,
  type ReadingMode,
  type OverlayType,
}
