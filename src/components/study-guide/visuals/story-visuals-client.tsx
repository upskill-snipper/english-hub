'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent, RefObject } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Pause, Play, Sparkles, Users } from 'lucide-react'

import { partOf, showsPartChips } from '@/lib/study-guides/parts'
import type { GuideMoment, GuideRelationship } from '@/lib/study-guides/types'

/**
 * The animated half of a study guide: a tension arc that draws itself, a scene
 * player that steps through the key moments, and a character map that lights
 * up whoever is in the current moment.
 *
 * WHY THESE THREE. They are the three things a student is asked to hold in their
 * head about a whole text and usually cannot see: its shape, its sequence and
 * its web of relationships. Each is drawn from verified guide data
 * (src/data/study-guides), so no animation shows a scene the guide does not.
 *
 * MOTION IS OPTIONAL, CONTENT IS NOT. The text of every moment is in the server
 * HTML: the first scene card, and a screen-reader list of all of them. The arc
 * and the map are drawn once they are scrolled into view, so with JavaScript off
 * those two drawings stay blank while the words do not. A student with reduced
 * motion switched on gets the finished drawings at once, with no line-drawing,
 * sliding or autoplay. Autoplay never starts on its own: moving content has to
 * be started by the reader and can always be paused.
 */

export type StoryVisualsLabels = {
  arcTitle: string
  arcDesc: string
  arcNote: string
  scenesTitle: string
  mapTitle: string
  mapHint: string
  play: string
  pause: string
  previous: string
  next: string
  momentOf: string
  of: string
  setting: string
  who: string
  why: string
  tension: string
  allThemes: string
  themeFilter: string
  parts: string
}

type Props = {
  timeline: GuideMoment[]
  relationships: GuideRelationship[]
  themes: string[]
  labels: StoryVisualsLabels
  /** Scene player only, for an act or chapter page: no whole-text arc or map. */
  scenesOnly?: boolean
}

/** Whether the reader has asked for less motion. False on the server. */
function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    setReduce(mq.matches)
    const on = (e: MediaQueryListEvent) => setReduce(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduce
}

/** True once the element has been scrolled into view, and stays true. */
function useSeen<T extends Element>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [seen])
  return [ref, seen]
}

function initials(name: string): string {
  const words = name
    .replace(/^(the|mr|mrs|miss|ms|dr|sir|lady|lord|king|queen|prince)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
  return (words[0]?.[0] ?? '?').toUpperCase() + (words[1]?.[0] ?? '').toUpperCase()
}

/** A smooth curve through points: Catmull-Rom, converted to cubic Beziers. */
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length === 0) return ''
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export function StoryVisualsClient({
  timeline,
  relationships,
  themes,
  labels,
  scenesOnly = false,
}: Props) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [theme, setTheme] = useState<string | null>(null)
  const [person, setPerson] = useState<string | null>(null)
  const uid = useId()
  const current = timeline[index]

  const go = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(timeline.length - 1, i))),
    [timeline.length],
  )

  // Autoplay: reader-started, pausable, stops at the last moment, never runs
  // for a reader who has asked for reduced motion.
  useEffect(() => {
    if (!playing || reduce) return
    if (index >= timeline.length - 1) {
      setPlaying(false)
      return
    }
    const id = window.setTimeout(() => setIndex((i) => i + 1), 7000)
    return () => window.clearTimeout(id)
  }, [playing, reduce, index, timeline.length])

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPlaying(false)
      go(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPlaying(false)
      go(index - 1)
    }
  }

  // ── The arc ─────────────────────────────────────────────────────────────
  const W = 1000
  const H = 240
  const PAD_X = 40
  const PAD_Y = 30
  const points = useMemo(
    () =>
      timeline.map((m, i) => ({
        x: timeline.length === 1 ? W / 2 : PAD_X + (i * (W - 2 * PAD_X)) / (timeline.length - 1),
        y: H - PAD_Y - ((m.tension - 1) / 4) * (H - 2 * PAD_Y),
      })),
    [timeline],
  )
  const path = useMemo(() => smoothPath(points), [points])
  const [arcRef, arcSeen] = useSeen<SVGSVGElement>()
  const drawn = reduce || arcSeen

  // ── The map ─────────────────────────────────────────────────────────────
  const cast = useMemo(() => {
    const names: string[] = []
    for (const r of relationships)
      for (const n of [r.from, r.to]) if (!names.includes(n)) names.push(n)
    return names
  }, [relationships])
  const MAP = 520
  const R = cast.length <= 4 ? 150 : 190
  // Most set texts centre on one person, and a ring with that person at the
  // top sends every one of their edges through the labels of the others. So
  // the best-connected character goes in the middle when they are linked to at
  // least half the cast, and everyone else sits on the ring around them.
  const nodes = useMemo(() => {
    const degree = new Map(cast.map((n) => [n, 0]))
    for (const r of relationships) {
      degree.set(r.from, (degree.get(r.from) ?? 0) + 1)
      degree.set(r.to, (degree.get(r.to) ?? 0) + 1)
    }
    const hub = [...cast].sort((a, b) => (degree.get(b) ?? 0) - (degree.get(a) ?? 0))[0]
    const centred = cast.length >= 4 && (degree.get(hub) ?? 0) >= (cast.length - 1) / 2
    const ring = centred ? cast.filter((n) => n !== hub) : cast
    const placed = ring.map((name, i) => {
      const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2
      return { name, x: MAP / 2 + R * Math.cos(a), y: MAP / 2 + R * Math.sin(a) }
    })
    return centred ? [{ name: hub, x: MAP / 2, y: MAP / 2 }, ...placed] : placed
  }, [cast, R, relationships])
  // ── The parts ───────────────────────────────────────────────────────────
  // Acts, chapters or staves, in the order the timeline meets them, each with
  // the index of its first moment. The chips that jump between them appear
  // only when there is more than one part and few enough to be a menu rather
  // than a second progress bar.
  const parts = useMemo(() => {
    const out: { name: string; first: number }[] = []
    timeline.forEach((m, i) => {
      const name = partOf(m.where)
      if (!out.some((p) => p.name === name)) out.push({ name, first: i })
    })
    return out
  }, [timeline])
  const showParts = showsPartChips(timeline.map((m) => m.where))
  const currentPart = current ? partOf(current.where) : null

  const [mapRef, mapSeen] = useSeen<SVGSVGElement>()
  const mapDrawn = reduce || mapSeen
  const inScene = new Set(current?.who ?? [])
  const selectedEdges = person
    ? relationships.filter((r) => r.from === person || r.to === person)
    : []

  if (timeline.length === 0) return null

  return (
    <div className="space-y-10">
      {/* ── Tension arc ─────────────────────────────────────────────── */}
      {!scenesOnly && (
        <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-heading-sm text-foreground">{labels.arcTitle}</h3>
            <p className="text-body-xs text-muted-foreground">{labels.arcDesc}</p>
          </div>

          {themes.length > 0 && (
            <div
              className="mb-4 flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label={labels.themeFilter}
            >
              <button
                type="button"
                onClick={() => setTheme(null)}
                aria-pressed={theme === null}
                className={`rounded-full px-3 py-1 text-body-xs font-medium transition-colors ${
                  theme === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {labels.allThemes}
              </button>
              {themes.map((th) => (
                <button
                  key={th}
                  type="button"
                  onClick={() => setTheme(theme === th ? null : th)}
                  aria-pressed={theme === th}
                  className={`rounded-full px-3 py-1 text-body-xs font-medium transition-colors ${
                    theme === th
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {th}
                </button>
              ))}
            </div>
          )}

          <div className="overflow-x-auto">
            <svg ref={arcRef} viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[520px]">
              <title id={`${uid}-arc-title`}>{labels.arcTitle}</title>
              <desc id={`${uid}-arc-desc`}>
                {timeline
                  .map(
                    (m, i) =>
                      `${i + 1}. ${m.title}: ${labels.tension} ${m.tension} ${labels.of} 5.`,
                  )
                  .join(' ')}
              </desc>
              {[1, 2, 3, 4, 5].map((lvl) => {
                const y = H - PAD_Y - ((lvl - 1) / 4) * (H - 2 * PAD_Y)
                return (
                  <line
                    key={lvl}
                    x1={PAD_X}
                    x2={W - PAD_X}
                    y1={y}
                    y2={y}
                    className="stroke-border"
                    strokeWidth={1}
                    strokeDasharray="4 6"
                  />
                )
              })}
              <path
                d={path}
                fill="none"
                className="stroke-primary"
                strokeWidth={3}
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={drawn ? 0 : 1}
                style={{
                  transition: reduce
                    ? 'none'
                    : 'stroke-dashoffset 2.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
              {points.map((p, i) => {
                const m = timeline[i]
                const lit = theme === null || m.themes.includes(theme)
                const active = i === index
                return (
                  <g
                    key={`${m.where}-${m.title}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${labels.momentOf} ${i + 1}: ${m.title}. ${labels.tension} ${m.tension} ${labels.of} 5.`}
                    aria-pressed={active}
                    onClick={() => {
                      setPlaying(false)
                      go(i)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setPlaying(false)
                        go(i)
                      }
                    }}
                    className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-ring"
                    style={{
                      opacity: drawn ? (lit ? 1 : 0.25) : 0,
                      transition: reduce
                        ? 'none'
                        : `opacity 0.4s ease ${drawn && !arcSeen ? 0 : 0.3 + i * 0.12}s`,
                    }}
                  >
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={active ? 17 : 13}
                      className={
                        active ? 'fill-primary stroke-background' : 'fill-card stroke-primary'
                      }
                      strokeWidth={3}
                      style={{ transition: reduce ? 'none' : 'r 0.25s ease' }}
                    />
                    <text
                      x={p.x}
                      y={p.y + 5}
                      textAnchor="middle"
                      className={`pointer-events-none text-[15px] font-semibold ${active ? 'fill-primary-foreground' : 'fill-foreground'}`}
                    >
                      {i + 1}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
          <p className="mt-2 text-body-xs italic text-muted-foreground">{labels.arcNote}</p>
        </div>
      )}

      {/* ── Scene player ────────────────────────────────────────────── */}
      <div
        className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 sm:p-6"
        onKeyDown={onKey}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-heading text-heading-sm text-foreground">{labels.scenesTitle}</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setPlaying(false)
                go(index - 1)
              }}
              disabled={index === 0}
              aria-label={labels.previous}
              className="rounded-full border border-border/60 p-2 text-foreground transition hover:bg-muted disabled:opacity-40"
            >
              <ChevronLeft className="size-4" />
            </button>
            {!reduce && (
              <button
                type="button"
                onClick={() => {
                  if (!playing && index >= timeline.length - 1) setIndex(0)
                  setPlaying((p) => !p)
                }}
                aria-pressed={playing}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-body-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                {playing ? labels.pause : labels.play}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setPlaying(false)
                go(index + 1)
              }}
              disabled={index === timeline.length - 1}
              aria-label={labels.next}
              className="rounded-full border border-border/60 p-2 text-foreground transition hover:bg-muted disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {showParts && (
          <div className="mb-4 flex flex-wrap gap-1.5" role="group" aria-label={labels.parts}>
            {parts.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => {
                  setPlaying(false)
                  go(p.first)
                }}
                aria-pressed={currentPart === p.name}
                className={`rounded-md border px-2.5 py-1 text-body-xs font-medium transition-colors ${
                  currentPart === p.name
                    ? 'border-primary/40 bg-primary/10 text-primary'
                    : 'border-border/60 text-muted-foreground hover:text-foreground'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {/* Progress: one segment per moment, the current one filling. */}
        <div className="mb-5 flex gap-1" aria-hidden="true">
          {timeline.map((m, i) => (
            <div
              key={`${m.where}-${m.title}`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full bg-primary"
                style={{
                  width: i <= index ? '100%' : '0%',
                  transition: i === index && playing && !reduce ? 'width 7s linear' : 'none',
                  transformOrigin: 'left',
                }}
              />
            </div>
          ))}
        </div>

        {current && (
          <article
            key={index}
            aria-live="polite"
            className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 motion-safe:duration-500"
          >
            <p className="font-mono text-body-xs uppercase tracking-wider text-primary">
              {labels.momentOf} {index + 1} {labels.of} {timeline.length} &middot; {current.where}
            </p>
            <h4 className="mt-1 font-heading text-heading-md text-foreground">{current.title}</h4>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-body-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                <span className="sr-only">{labels.setting}: </span>
                {current.setting}
              </span>
              <span
                className="inline-flex items-center gap-1.5"
                aria-label={`${labels.tension} ${current.tension} ${labels.of} 5`}
              >
                <span aria-hidden="true">{labels.tension}</span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`h-2 w-4 rounded-sm ${n <= current.tension ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </span>
              </span>
            </div>

            <p className="mt-4 text-body-md leading-relaxed text-foreground/90">
              {current.summary}
            </p>

            {current.quote && (
              <blockquote className="mt-4 border-s-4 border-primary/60 ps-4 font-heading text-body-lg italic leading-snug text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200 motion-safe:fill-mode-both">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            )}

            {current.who.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 inline-flex items-center gap-1.5 text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Users className="size-3.5" aria-hidden="true" />
                  {labels.who}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {current.who.map((w, i) => (
                    <li
                      key={w}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background py-1 pe-3 ps-1 text-body-xs font-medium text-foreground motion-safe:animate-in motion-safe:zoom-in-90 motion-safe:fade-in motion-safe:fill-mode-both"
                      style={{ animationDelay: reduce ? undefined : `${250 + i * 90}ms` }}
                    >
                      <span
                        className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary"
                        aria-hidden="true"
                      >
                        {initials(w)}
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-5 rounded-xl bg-muted/50 p-4">
              <p className="inline-flex items-center gap-1.5 text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {labels.why}
              </p>
              <p className="mt-1 text-body-sm leading-relaxed text-foreground/90">
                {current.significance}
              </p>
              {current.themes.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {current.themes.map((th) => (
                    <span
                      key={th}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                    >
                      {th}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        )}

        {/* Every moment as text, for the server HTML and for screen readers. */}
        <ol className="sr-only">
          {timeline.map((m) => (
            <li key={`${m.where}-${m.title}`}>
              {m.where}: {m.title}. {m.summary} {m.quote ? `"${m.quote}"` : ''} {m.significance}
            </li>
          ))}
        </ol>
      </div>

      {/* ── Character map ───────────────────────────────────────────── */}
      {!scenesOnly && cast.length >= 2 && (
        <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-heading-sm text-foreground">{labels.mapTitle}</h3>
            <p className="text-body-xs text-muted-foreground">{labels.mapHint}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <svg
              ref={mapRef}
              viewBox={`0 0 ${MAP} ${MAP}`}
              className="mx-auto h-auto w-full max-w-[520px]"
            >
              <title id={`${uid}-map-title`}>{labels.mapTitle}</title>
              {relationships.map((r, i) => {
                const a = nodes.find((n) => n.name === r.from)
                const b = nodes.find((n) => n.name === r.to)
                if (!a || !b) return null
                const hot = person !== null && (r.from === person || r.to === person)
                const dim = person !== null && !hot
                return (
                  <line
                    key={`${r.from}-${r.to}-${i}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    pathLength={1}
                    strokeDasharray={1}
                    strokeDashoffset={mapDrawn ? 0 : 1}
                    className={hot ? 'stroke-primary' : 'stroke-muted-foreground'}
                    strokeWidth={hot ? 3 : 1.5}
                    style={{
                      opacity: dim ? 0.12 : hot ? 1 : 0.45,
                      transition: reduce
                        ? 'none'
                        : `stroke-dashoffset 1s ease ${0.2 + i * 0.08}s, opacity 0.3s ease, stroke-width 0.3s ease`,
                    }}
                  />
                )
              })}
              {nodes.map((n, i) => {
                const selected = person === n.name
                const present = inScene.has(n.name)
                return (
                  <g
                    key={n.name}
                    role="button"
                    tabIndex={0}
                    aria-pressed={selected}
                    aria-label={n.name}
                    onClick={() => setPerson(selected ? null : n.name)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setPerson(selected ? null : n.name)
                      }
                    }}
                    className="cursor-pointer outline-none"
                    style={{
                      opacity: mapDrawn ? 1 : 0,
                      transform: mapDrawn ? 'scale(1)' : 'scale(0.6)',
                      transformOrigin: `${n.x}px ${n.y}px`,
                      transition: reduce
                        ? 'none'
                        : `opacity 0.4s ease ${i * 0.07}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.07}s`,
                    }}
                  >
                    {present && (
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={34}
                        fill="none"
                        className="stroke-primary motion-safe:animate-pulse"
                        strokeWidth={2}
                      />
                    )}
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={26}
                      className={selected ? 'fill-primary' : 'fill-muted stroke-border'}
                      strokeWidth={1.5}
                    />
                    <text
                      x={n.x}
                      y={n.y + 4}
                      textAnchor="middle"
                      className={`pointer-events-none text-[13px] font-bold ${selected ? 'fill-primary-foreground' : 'fill-foreground'}`}
                    >
                      {initials(n.name)}
                    </text>
                    <text
                      x={n.x}
                      y={n.y + 46}
                      textAnchor="middle"
                      className="pointer-events-none fill-muted-foreground text-[12px] font-medium"
                    >
                      {n.name.length > 22 ? `${n.name.slice(0, 21)}...` : n.name}
                    </text>
                  </g>
                )
              })}
            </svg>

            <ul className="space-y-3 self-center">
              {(person ? selectedEdges : relationships).map((r, i) => (
                <li
                  key={`${r.from}-${r.to}-${i}`}
                  className="rounded-xl border border-border/60 bg-background p-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both"
                  style={{ animationDelay: reduce ? undefined : `${i * 60}ms` }}
                >
                  <p className="text-body-sm font-semibold text-foreground">
                    {r.from}{' '}
                    <span className="font-normal text-muted-foreground">
                      &middot; {r.kind} &middot;
                    </span>{' '}
                    {r.to}
                  </p>
                  <p className="mt-1 text-body-xs leading-relaxed text-muted-foreground">
                    {r.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
