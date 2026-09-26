'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { EnglishText } from '@/components/i18n/EnglishText'
import { sanitiseHtml } from '@/lib/html/sanitise'
import { ReadingProgressTracker } from './ReadingProgressTracker'
import { BLOCK_TAGS, decodeEntities, parseSectionHtml, type HtmlNode } from './section-html'
import { useT } from '@/lib/i18n/use-t'

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
  /** The scene's setting line, where the edition prints one. */
  setting?: string
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
  type: 'play' | 'novel' | 'novella' | 'poem'
  sections: TextSection[]
  /**
   * Authored analysis, all three OPTIONAL since 19 September 2026.
   *
   * WHY. Twelve public-domain plays were added as full text - the real text,
   * copied from a published edition rather than reproduced from memory, because
   * a model retyping Shakespeare would introduce errors no reviewer would
   * catch. Character notes, theme notes and context are a different kind of
   * thing: they are written by somebody, and generating twelve sets to fill a
   * required field would be exactly the invention this work exists to avoid.
   *
   * So a text may carry the play and no commentary. The panels below render
   * only what is actually there, and the tabs for what is not are not offered.
   */
  characters?: CharacterInfo[]
  themes?: ThemeInfo[]
  contextNotes?: string
}

type ReadingMode = 'close' | 'speed' | 'analytical'
type OverlayType = Annotation['type']

interface InteractiveTextViewerProps {
  data: TextData
  /** Unique key for localStorage persistence (e.g. "macbeth" or "christmas-carol") */
  storageKey: string
  className?: string
  /**
   * The heading level for the viewer's own title bar.
   *
   * 'h1' when this component IS the page's heading, which is how
   * /revision/texts/macbeth/read uses it. 'h2' when the page already has one
   * above it: FullTextReader renders a display h1 with the same text and then
   * mounts this, so the other 26 read pages were serving two h1s carrying the
   * identical string. Measured across all 1,329 sitemap URLs on 20 September
   * 2026; they were the only pages on the site with more than one.
   */
  titleAs?: 'h1' | 'h2'
}

// ─── Constants ───────────────────────────────────────────────────────────────

const OVERLAY_CONFIG: Record<
  OverlayType,
  { labelKey: string; color: string; bg: string; border: string }
> = {
  context: {
    labelKey: 'text_viewer.overlay_context',
    color: 'text-blue-700',
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/40',
  },
  quote: {
    labelKey: 'text_viewer.overlay_quotes',
    color: 'text-amber-700',
    bg: 'bg-amber-500/20',
    border: 'border-amber-500/40',
  },
  language: {
    labelKey: 'text_viewer.overlay_language',
    color: 'text-purple-700',
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/40',
  },
  theme: {
    labelKey: 'text_viewer.overlay_themes',
    color: 'text-emerald-700',
    bg: 'bg-emerald-500/20',
    border: 'border-emerald-500/40',
  },
  character: {
    labelKey: 'text_viewer.overlay_characters',
    color: 'text-rose-700',
    bg: 'bg-rose-500/20',
    border: 'border-rose-500/40',
  },
}

const READING_MODES: { key: ReadingMode; labelKey: string; descriptionKey: string }[] = [
  {
    key: 'close',
    labelKey: 'text_viewer.mode_close',
    descriptionKey: 'text_viewer.mode_close_desc',
  },
  {
    key: 'speed',
    labelKey: 'text_viewer.mode_speed',
    descriptionKey: 'text_viewer.mode_speed_desc',
  },
  {
    key: 'analytical',
    labelKey: 'text_viewer.mode_analytical',
    descriptionKey: 'text_viewer.mode_analytical_desc',
  },
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
    // Storage full or blocked - silently fail
  }
}

function countWords(html: string): number {
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text ? text.split(' ').length : 0
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function CheckCircleIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

function BookOpenIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

function ListIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}

function XMarkIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function EyeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  )
}

// ─── Annotation tooltip ──────────────────────────────────────────────────────

/**
 * Which overlay's colour a span wears when several apply to it.
 *
 * A key quotation usually also carries a theme, and often a language note about
 * the same words. They are different readings of one line, not three lines.
 */
const FACET_ORDER: OverlayType[] = ['quote', 'theme', 'language', 'character', 'context']

function AnnotationTooltip({
  annotations,
  continued = false,
  children,
}: {
  /** Every authored note on this exact span, one per overlay. */
  annotations: Annotation[]
  /**
   * The span carries on here from an earlier paragraph, or from outside the
   * element it began in. It is highlighted and shows its note on hover, but
   * only the first part is a control, so a screen reader meets the note once.
   */
  continued?: boolean
  children: React.ReactNode
}) {
  const t = useT()
  const [show, setShow] = useState(false)
  const ordered = [...annotations].sort(
    (a, b) => FACET_ORDER.indexOf(a.type) - FACET_ORDER.indexOf(b.type),
  )
  const cfg = OVERLAY_CONFIG[ordered[0].type]

  return (
    <span
      className="relative inline cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      {...(continued
        ? {}
        : {
            tabIndex: 0,
            role: 'button',
            'aria-label': ordered
              .map(
                (a) =>
                  `${t(OVERLAY_CONFIG[a.type].labelKey)} ${t('text_viewer.note_label')}: ${a.note}`,
              )
              .join('. '),
          })}
    >
      <span className={`rounded-sm px-0.5 ${cfg.bg} border-b-2 ${cfg.border}`}>{children}</span>
      {show && (
        <span
          className="absolute bottom-full left-1/2 z-50 mb-2 w-72 -translate-x-1/2 rounded-lg border border-border bg-card p-3 shadow-elevated animate-fade-in"
          role="tooltip"
        >
          {ordered.map((a, i) => {
            const c = OVERLAY_CONFIG[a.type]
            return (
              <span
                key={a.type}
                className={i > 0 ? 'mt-2 block border-t border-border pt-2' : 'block'}
              >
                <span
                  className={`mb-1 block text-xs font-semibold uppercase tracking-wider ${c.color}`}
                >
                  {t(c.labelKey)}
                </span>
                <span className="block text-sm leading-relaxed text-foreground">{a.note}</span>
              </span>
            )
          })}
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
      return (
        <div className={READER_CLASS} dangerouslySetInnerHTML={{ __html: sanitiseHtml(html) }} />
      )
    }

    // The notes are found in the plain text (tags deleted, entities decoded,
    // which is what they are cut from), and the highlights are then laid into
    // the HTML itself: see ./section-html.ts for what printing the plain text
    // instead cost. Each note's span is decoded the same way below, so a span
    // cut from the escaped HTML still finds its place.
    const { nodes, plain: stripped } = parseSectionHtml(html)

    // Find all annotation matches and their positions
    type Match = { start: number; end: number; annotation: Annotation }
    const matches: Match[] = []

    for (const ann of active) {
      const escaped = escapeRegExp(decodeEntities(ann.text))
      const regex = new RegExp(escaped, 'gi')
      let m: RegExpExecArray | null
      while ((m = regex.exec(stripped)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, annotation: ann })
      }
    }

    // Merge annotations that land on EXACTLY the same span before anything is
    // discarded. A key quotation typically carries a theme as well, and often a
    // language note about the same words; the overlap rule below would have
    // kept one of them and thrown the others away, so a student with every
    // overlay on - the default - saw one note where three were written.
    const bySpan = new Map<string, { start: number; end: number; annotations: Annotation[] }>()
    for (const m of matches) {
      const key = `${m.start}-${m.end}`
      const entry = bySpan.get(key)
      if (entry) entry.annotations.push(m.annotation)
      else bySpan.set(key, { start: m.start, end: m.end, annotations: [m.annotation] })
    }

    // Sort by position, then by length (longer first for overlapping)
    const merged = [...bySpan.values()].sort((a, b) => a.start - b.start || b.end - a.end)

    // Remove genuinely overlapping spans (keep first/longest). Two annotations
    // on the same span are no longer a conflict; two on different, crossing
    // spans still are, because a nested highlight cannot be rendered.
    const filtered: { start: number; end: number; annotations: Annotation[] }[] = []
    let lastEnd = -1
    for (const match of merged) {
      if (match.start >= lastEnd) {
        filtered.push(match)
        lastEnd = match.end
      }
    }

    return <div className={READER_CLASS}>{withHighlights(nodes, filtered)}</div>
  }, [html, annotations, activeOverlays])

  return rendered
}

/**
 * The text's own container, the same with notes and without.
 *
 * `space-y-4` puts a line of space between paragraphs, speeches and stanzas.
 * The page's CSS reset takes every margin off a <p>, so a chapter without
 * notes ran its paragraphs together and a poem its stanzas, while the old
 * plain-text rendering of a section with notes showed a gap only because it
 * printed the blank line between them. A play's speeches already carry mb-4
 * from set-play-for-the-viewer.ts; the two margins collapse into one.
 */
const READER_CLASS = 'prose-reader space-y-4'

type Highlight = { start: number; end: number; annotations: Annotation[] }

/**
 * The section's HTML as React elements, with each highlight laid over the text
 * it covers.
 *
 * A highlight often runs over more than one piece of HTML: a quotation of two
 * verse lines covers the text, the <br> between them and the text after it.
 * Consecutive pieces inside one highlight are wrapped together, so it is one
 * highlight, and the <br> still breaks the line inside it. A paragraph is
 * never wrapped (a <p> inside a <span> is not HTML, and React would refuse to
 * hydrate it), so a highlight that crosses from one speech to the next is
 * drawn in each, and only its first part is the control (see
 * AnnotationTooltip's `continued`).
 */
function withHighlights(nodes: HtmlNode[], highlights: Highlight[]): React.ReactNode[] {
  const drawn = new Set<number>()
  const within = (pos: number) => highlights.findIndex((h) => h.start <= pos && pos < h.end)

  /** A piece of the list, drawn only when its turn comes, in document order. */
  type Piece = { highlight: number; draw: () => React.ReactNode }
  const holdsBlocks = (list: HtmlNode[]) =>
    list.some((c) => c.kind === 'element' && BLOCK_TAGS.has(c.tag))

  function render(list: HtmlNode[], key: string): React.ReactNode[] {
    // White space between two blocks is not part of any line, so it is never
    // highlighted: a highlight there would draw a stray mark between speeches.
    const betweenBlocks = holdsBlocks(list)
    const pieces: Piece[] = []
    list.forEach((node, n) => {
      const k = `${key}.${n}`
      if (node.kind === 'text') {
        // Cut the text wherever a highlight starts or ends inside it.
        const end = node.start + node.text.length
        const cuts = new Set([node.start, end])
        for (const h of highlights) {
          if (h.start > node.start && h.start < end) cuts.add(h.start)
          if (h.end > node.start && h.end < end) cuts.add(h.end)
        }
        const at = [...cuts].sort((a, b) => a - b)
        for (let i = 0; i < at.length - 1; i++) {
          const text = node.text.slice(at[i] - node.start, at[i + 1] - node.start)
          pieces.push({
            highlight: betweenBlocks && !text.trim() ? -1 : within(at[i]),
            draw: () => <React.Fragment key={`${k}.${i}`}>{text}</React.Fragment>,
          })
        }
        return
      }
      if (node.tag === 'br') {
        // Inside a highlight when the highlight runs on past it.
        const h = within(node.start)
        const inside = h !== -1 && highlights[h].start < node.start
        pieces.push({ highlight: inside ? h : -1, draw: () => <br key={k} /> })
        return
      }
      const h = within(node.start)
      const whole =
        !BLOCK_TAGS.has(node.tag) &&
        h !== -1 &&
        node.end > node.start &&
        node.end <= highlights[h].end
      pieces.push({
        highlight: whole ? h : -1,
        draw: () =>
          React.createElement(
            node.tag,
            { key: k, className: node.className },
            ...(whole ? plainly(node.children, k) : render(node.children, k)),
          ),
      })
    })

    // Wrap each run of pieces inside one highlight. Drawn in order, so the
    // first part of a highlight is the one met first.
    const out: React.ReactNode[] = []
    for (let i = 0; i < pieces.length; ) {
      const h = pieces[i].highlight
      if (h === -1) {
        out.push(pieces[i++].draw())
        continue
      }
      const continued = drawn.has(h)
      drawn.add(h)
      const run: React.ReactNode[] = []
      const first = i
      while (i < pieces.length && pieces[i].highlight === h) run.push(pieces[i++].draw())
      out.push(
        <AnnotationTooltip
          key={`${key}.h${first}`}
          annotations={highlights[h].annotations}
          continued={continued}
        >
          {run}
        </AnnotationTooltip>,
      )
    }
    return out
  }

  /** An element wholly inside a highlight: its children, with none of their own. */
  function plainly(list: HtmlNode[], key: string): React.ReactNode[] {
    return list.map((node, n) =>
      node.kind === 'text' ? (
        <React.Fragment key={`${key}.${n}`}>{node.text}</React.Fragment>
      ) : node.tag === 'br' ? (
        <br key={`${key}.${n}`} />
      ) : (
        React.createElement(
          node.tag,
          { key: `${key}.${n}`, className: node.className },
          ...plainly(node.children, `${key}.${n}`),
        )
      ),
    )
  }

  return render(nodes, 'n')
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
  const t = useT()
  return (
    <nav
      className="hidden lg:flex min-h-full flex-col gap-0.5 border-e border-border bg-card p-3"
      aria-label={t('text_viewer.section_nav_label')}
    >
      <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t('text_viewer.contents')}
      </h2>
      {sections.map((section) => {
        const isActive = section.id === activeSectionId
        const isComplete = completedSections.has(section.id)

        return (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={[
              'flex items-center gap-2 rounded-lg px-3 py-2 text-start text-sm transition-colors',
              isActive
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            ].join(' ')}
          >
            {isComplete ? (
              <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-primary" />
            ) : (
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? 'bg-primary' : 'bg-muted-foreground/40'
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
  const t = useT()
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
          {active?.title ?? t('text_viewer.select_section')}
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
                  'flex w-full items-center gap-2 px-4 py-2.5 text-start text-sm transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                ].join(' ')}
              >
                {isComplete && <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-primary" />}
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

/**
 * Only the overlays this text can actually show.
 *
 * REPORTED FROM THE LIVE SITE. All five rendered on every text - Context, Key
 * Quotes, Language, Themes, Characters - and every one of the twenty-six full
 * texts carried zero annotations, so all five were controls for nothing. A
 * toggle that highlights nothing when you press it is indistinguishable from a
 * toggle that is broken.
 *
 * `available` is derived from the annotations present, so a text gains a pill
 * when it gains the content behind it and never before.
 */
function OverlayToggles({
  activeOverlays,
  available,
  onToggle,
}: {
  activeOverlays: Set<OverlayType>
  available: Set<OverlayType>
  onToggle: (type: OverlayType) => void
}) {
  const t = useT()
  return (
    <div className="flex flex-wrap gap-1.5">
      {(Object.entries(OVERLAY_CONFIG) as [OverlayType, (typeof OVERLAY_CONFIG)[OverlayType]][])
        .filter(([type]) => available.has(type))
        .map(([type, cfg]) => {
          const isActive = activeOverlays.has(type)
          return (
            <button
              key={type}
              onClick={() => onToggle(type)}
              className={[
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all',
                isActive
                  ? `${cfg.bg} ${cfg.color} ring-1 ring-inset ${cfg.border}`
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80',
              ].join(' ')}
              aria-pressed={isActive}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isActive ? cfg.bg.replace('/20', '') : 'bg-muted-foreground/40'
                }`}
              />
              {t(cfg.labelKey)}
            </button>
          )
        })}
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
  const t = useT()
  return (
    <div className="flex rounded-lg border border-border bg-card p-0.5">
      {READING_MODES.map((m) => (
        <button
          key={m.key}
          onClick={() => onChange(m.key)}
          title={t(m.descriptionKey)}
          className={[
            'rounded-md px-3 py-1.5 text-xs font-medium transition-all',
            mode === m.key
              ? 'bg-primary text-primary-foreground shadow-glow-sm'
              : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
        >
          {t(m.labelKey)}
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
  const t = useT()
  if (!show) return null

  const panelTitle =
    show === 'characters'
      ? t('text_viewer.panel_characters')
      : show === 'themes'
        ? t('text_viewer.panel_themes')
        : t('text_viewer.panel_context')

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label={t('text_viewer.close_panel')}
      />

      {/* Panel */}
      <div className="relative z-10 h-full w-full max-w-md overflow-y-auto border-s border-border bg-card p-6 shadow-elevated animate-slide-in-right">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">{panelTitle}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label={t('marking.close')}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {show === 'characters' && (
          <div className="flex flex-col gap-4">
            {(data.characters ?? []).map((char) => (
              <div key={char.name} className="rounded-xl border border-border bg-muted/30 p-4">
                <h3 className="text-sm font-bold text-foreground">{char.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {char.description}
                </p>
                {char.keyQuotes.length > 0 && (
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-amber-700">
                      {t('text_viewer.key_quotes_label')}
                    </span>
                    {char.keyQuotes.map((q, i) => (
                      <blockquote
                        key={i}
                        className="border-s-2 border-amber-500/40 ps-3 text-xs italic text-muted-foreground"
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
            {(data.themes ?? []).map((theme) => (
              <div key={theme.name} className="rounded-xl border border-border bg-muted/30 p-4">
                <h3 className="text-sm font-bold text-emerald-700">{theme.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>
                {theme.evidence.length > 0 && (
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {t('text_viewer.evidence_label')}
                    </span>
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
          <div className="rounded-xl border border-border bg-muted/30 p-4">
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
  titleAs: TitleTag = 'h1',
}: InteractiveTextViewerProps) {
  const t = useT()
  // ── Persisted state ──────────────────────────────────────────────────────
  // Both start as the server renders them (nothing read, the first section)
  // and are restored from this browser's storage after mount, below.
  //
  // THE DEFECT, found 26 September 2026: they were read from localStorage in
  // the useState initialisers. The server has no storage, so for anyone who
  // had read before, its "0% complete" and the browser's first render
  // disagreed, React threw a hydration error and rebuilt the whole reader in
  // the browser, on every reader page. The restored section was also only
  // highlighted in the contents while the text opened at the start.
  const [completedSections, setCompletedSections] = useState<Set<string>>(() => new Set())
  const [activeSectionId, setActiveSectionId] = useState<string>(data.sections[0]?.id ?? '')
  /** False until storage has been read, so the defaults are never saved over it. */
  const [restored, setRestored] = useState(false)

  // ── UI state ─────────────────────────────────────────────────────────────
  const [readingMode, setReadingMode] = useState<ReadingMode>('close')
  const [activeOverlays, setActiveOverlays] = useState<Set<OverlayType>>(
    new Set<OverlayType>(['context', 'quote', 'language', 'theme', 'character']),
  )
  const [infoPanel, setInfoPanel] = useState<'characters' | 'themes' | 'context' | null>(null)

  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  /**
   * True while the reader itself is scrolling to a section. A section counts as
   * read when its end scrolls into view, so a jump from the contents, or a
   * chapter guide's deep link, swept every chapter before the target into view
   * and ticked them all as read (found 26 September 2026: opening Chapter VII
   * marked II to VI complete).
   */
  const jumping = useRef(false)

  /** Which overlay types this text has any annotation for. */
  const availableOverlays = useMemo(
    () =>
      new Set<OverlayType>(data.sections.flatMap((s) => s.annotations ?? []).map((a) => a.type)),
    [data.sections],
  )

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
    // Close reading - respect user toggles
    return activeOverlays
  }, [readingMode, activeOverlays])

  // ── Word counts and timing ───────────────────────────────────────────────
  const sectionWordCounts = useMemo(
    () => data.sections.map((s) => ({ id: s.id, words: countWords(s.content) })),
    [data.sections],
  )

  const totalWords = useMemo(
    () => sectionWordCounts.reduce((sum, s) => sum + s.words, 0),
    [sectionWordCounts],
  )

  const wordsRead = useMemo(
    () =>
      sectionWordCounts
        .filter((s) => completedSections.has(s.id))
        .reduce((sum, s) => sum + s.words, 0),
    [sectionWordCounts, completedSections],
  )

  const percentage = totalWords > 0 ? (wordsRead / totalWords) * 100 : 0
  const remainingMinutes = (totalWords - wordsRead) / READING_WPM

  // ── Persist completed sections ───────────────────────────────────────────
  useEffect(() => {
    if (!restored) return
    saveToStorage(getStorageKey(storageKey, 'completed'), Array.from(completedSections))
  }, [completedSections, storageKey, restored])

  // ── Persist active section ───────────────────────────────────────────────
  useEffect(() => {
    if (!restored) return
    saveToStorage(getStorageKey(storageKey, 'active'), activeSectionId)
  }, [activeSectionId, storageKey, restored])

  // ── Scroll-based section completion detection ────────────────────────────
  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    function handleScroll() {
      if (!container || jumping.current) return

      // Check each section's scroll position
      sectionRefs.current.forEach((el, sectionId) => {
        const rect = el.getBoundingClientRect()
        const containerRect = container!.getBoundingClientRect()

        // Section is considered "read" when its end is visible: within 100px of
        // the container's bottom and not already scrolled away above its top.
        // Without the second half, every section above the view counted, so any
        // jump down the text ticked everything it passed.
        if (
          rect.bottom <= containerRect.bottom + 100 &&
          rect.bottom >= containerRect.top &&
          rect.top < containerRect.bottom
        ) {
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
  const navigateToSection = useCallback((sectionId: string) => {
    setActiveSectionId(sectionId)
    const el = sectionRefs.current.get(sectionId)
    if (el && contentRef.current) {
      // Nothing passed on the way counts as read (see `jumping`). The flag
      // clears when the reader's own scroll box stops (not the window's, which
      // settles first), or after 1.5 seconds where scrollend is unsupported or
      // the box did not need to move.
      const box = contentRef.current
      jumping.current = true
      const done = () => {
        jumping.current = false
        box.removeEventListener('scrollend', done)
      }
      box.addEventListener('scrollend', done, { once: true })
      window.setTimeout(done, 1500)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Restore this browser's progress after mount (see the persisted state
  // above). A returning reader opens where they left off: the reader's own box
  // is scrolled to that section, without moving the page, and nothing passed
  // on the way is ticked. A ?section= link wins, below. Once per text: callers
  // rebuild `data` when they render, and a second run would pull the reader
  // back to where they started.
  const restoredFor = useRef<string | null>(null)
  useEffect(() => {
    if (restoredFor.current === storageKey) return
    restoredFor.current = storageKey
    setCompletedSections(
      new Set(loadFromStorage<string[]>(getStorageKey(storageKey, 'completed'), [])),
    )
    const last = loadFromStorage<string>(getStorageKey(storageKey, 'active'), '')
    const wanted = new URLSearchParams(window.location.search).get('section')
    const linked = data.sections.some((s) => s.id === wanted)
    const box = contentRef.current
    const el = sectionRefs.current.get(last)
    if (!linked && last && last !== data.sections[0]?.id && el && box) {
      setActiveSectionId(last)
      jumping.current = true
      box.scrollTop += el.getBoundingClientRect().top - box.getBoundingClientRect().top
      window.setTimeout(() => {
        jumping.current = false
      }, 300)
    }
    setRestored(true)
  }, [storageKey, data.sections])

  // A chapter guide's "Read this chapter in full" links to ?section=section-5.
  // Read after mount, so the server render and the first client render agree,
  // and only a section that exists overrides where the reader last left off. It
  // navigates as a click in the contents does: setting the active section alone
  // highlighted Chapter VII in the contents while the text still showed Chapter I.
  // Once only, for the same reason as the restore above; the flag is set when
  // the jump happens, so a cancelled frame (React's development double run)
  // does not use it up.
  const followedLink = useRef(false)
  useEffect(() => {
    if (followedLink.current) return
    const wanted = new URLSearchParams(window.location.search).get('section')
    if (!wanted || !data.sections.some((s) => s.id === wanted)) return
    const frame = requestAnimationFrame(() => {
      followedLink.current = true
      navigateToSection(wanted)
    })
    return () => cancelAnimationFrame(frame)
  }, [data.sections, navigateToSection])

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
        'flex flex-col rounded-2xl border border-border bg-background overflow-hidden',
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
              <TitleTag className="text-base font-bold text-foreground sm:text-lg">
                {data.title}
              </TitleTag>
              <p className="text-xs text-muted-foreground">
                {data.author} &middot; <span>{t(`text_viewer.type_${data.type}`)}</span> &middot;{' '}
                {data.sections.length}{' '}
                {data.type === 'play'
                  ? t('text_viewer.scenes')
                  : data.type === 'poem'
                    ? t('text_viewer.stanzas')
                    : t('text_viewer.chapters')}
              </p>
            </div>
          </div>

          {/* Quick info buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setInfoPanel('characters')}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-rose-500/40 transition-colors"
            >
              {t('text_viewer.panel_characters')}
            </button>
            <button
              onClick={() => setInfoPanel('themes')}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors"
            >
              {t('text_viewer.panel_themes')}
            </button>
            <button
              onClick={() => setInfoPanel('context')}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-colors"
            >
              {t('text_viewer.panel_context')}
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

        {/* Overlay toggles (hidden in speed mode, and hidden entirely for a
            text that carries no annotations - see OverlayToggles). */}
        {readingMode !== 'speed' && availableOverlays.size > 0 && (
          <div className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <OverlayToggles
              activeOverlays={activeOverlays}
              available={availableOverlays}
              onToggle={toggleOverlay}
            />
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

      {/* ── Body: sidebar + reader ──────────────────────────────────────────
          THE DEFECT, found 26 September 2026 and there since 10 April. The
          sidebar's wrapper was a fixed w-64 at every width while the list
          inside it is hidden below lg, so on a 390px phone 256px of empty
          column sat beside the text, which got 68px: one word to a line, cut
          off at the edge, on every reader. And the 70vh cap was on the text
          alone while a long contents list set the height of the row, so on a
          computer the text stopped two thirds of the way down its box above an
          empty band. The wrapper now exists only from lg, and the cap is on
          the row: the text fills it, and a long contents list scrolls in it. */}
      <div className="flex flex-1 overflow-hidden" style={{ maxHeight: '70vh' }}>
        {/* Desktop sidebar (the dropdown above serves narrower screens) */}
        <div className="hidden w-64 flex-shrink-0 overflow-y-auto lg:block">
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
          data-reader-text=""
          className="min-w-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 md:px-12 lg:px-16"
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
                {/* A11Y-5: the work's own words. "Act 1, Scene 3" read with
                    Arabic pronunciation rules on /ar is not an accent, it is
                    unintelligible. The word count below is interface copy and
                    is deliberately NOT marked. */}
                <EnglishText as="h2" className="text-heading-md text-foreground">
                  {section.title}
                </EnglishText>
                {completedSections.has(section.id) && (
                  <CheckCircleIcon className="h-5 w-5 text-brand-accent flex-shrink-0" />
                )}
              </div>

              {/* Section word count */}
              <p className="mb-4 text-xs text-muted-foreground">
                {countWords(section.content).toLocaleString()} {t('text_viewer.words')} &middot; ~
                {Math.ceil(countWords(section.content) / READING_WPM)} {t('text_viewer.min_read')}
              </p>

              {/* Content */}
              <EnglishText className="text-body-lg text-foreground/90 leading-relaxed">
                <AnnotatedContent
                  html={section.content}
                  annotations={section.annotations ?? []}
                  activeOverlays={effectiveOverlays}
                />
              </EnglishText>

              {/* Section divider */}
              <hr className="mt-10 border-border" />
            </section>
          ))}

          {/* End of text */}
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircleIcon className="h-8 w-8 text-brand-accent" />
            <p className="text-sm font-semibold text-foreground">
              {data.type === 'play'
                ? t('text_viewer.end_of_play')
                : data.type === 'poem'
                  ? t('text_viewer.end_of_poem')
                  : t('text_viewer.end_of_text')}
            </p>
            <p className="text-xs text-muted-foreground">
              {completedSections.size} {t('text_viewer.of')} {data.sections.length}{' '}
              {t('text_viewer.sections_completed')}
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
