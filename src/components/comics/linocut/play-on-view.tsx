'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import type { ReactNode } from 'react'

const noop = () => () => {}

/**
 * How long a piece that has scrolled into view waits for its drawing before it
 * plays anyway, so that its caption and quotation are never held back for
 * long by a slow connection. A 60 KB plate at 50 KB/s, a poor phone signal,
 * takes about 1.6 seconds.
 */
export const PLATE_WAIT_MS = 2500

/** Set by PlayOnView for the LazyPlate inside it: see useHoldMotion. */
const HoldMotion = createContext<((on: boolean) => void) | null>(null)

/**
 * For LazyPlate: while `waiting` (its drawing has not arrived), the piece it
 * sits in stays armed rather than playing, for at most PLATE_WAIT_MS once it
 * is in view. Does nothing outside a PlayOnView.
 */
export function useHoldMotion(waiting: boolean) {
  const hold = useContext(HoldMotion)
  useEffect(() => {
    if (!hold || !waiting) return
    hold(true)
    return () => hold(false)
  }, [hold, waiting])
}

/**
 * Plays a linocut piece's motion when it first scrolls into view, once.
 *
 * It adds one class to a wrapper and nothing else. The piece inside is a frame
 * with a LazyPlate, which inlines the drawing's file when it is fetched; the
 * class reaches the inlined drawing because it is part of the page, so the
 * motion rules apply to it whether it arrived before the class did or after.
 *
 * THREE STATES, AND WHY. The server HTML has no class, which is the finished
 * print: with scripts off, or before hydration, a reader sees the whole
 * picture. After hydration, a piece still off screen is `lc-armed`, which
 * holds every animation at its first frame; when it arrives it becomes
 * `lc-play`. Without the armed state the motion would either run unseen at
 * page load, or the finished print would vanish and then redraw itself in
 * front of the reader. A piece mounted after hydration (the next moment in the
 * player) is armed from its first paint, so it never flashes the final frame.
 *
 * WAITING FOR THE DRAWING (26 September 2026). Since the drawings became files
 * fetched when they are about to be seen (lazy-plate.tsx), a piece can scroll
 * into view before its drawing has arrived: on a first visit straight to the
 * player, when a reader skips past the moment fetched ahead of them, or on a
 * slow connection. It used to play at once regardless. Measured at 50 KB/s,
 * the frame's wipe and the caption and quotation played over an empty sheet,
 * and 1.3 seconds later the drawing appeared whole, its own motion out of step
 * with the frame's. Now the LazyPlate inside holds the piece armed while its
 * drawing is on its way (useHoldMotion), so the piece plays once, with its
 * drawing, as it always did when the drawing was in the page. The hold is
 * released when the drawing arrives, when it fails (the image element the
 * LazyPlate shows until then plays instead), or PLATE_WAIT_MS after the piece
 * came into view, whichever is first.
 *
 * prefers-reduced-motion needs nothing here: the stylesheet switches every
 * animation off under it, whatever the class, so an armed piece is already
 * the finished print.
 */
export function PlayOnView({ children, className }: { children: ReactNode; className?: string }) {
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  )
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [holds, setHolds] = useState(0)
  const [waitedOut, setWaitedOut] = useState(false)
  const [played, setPlayed] = useState(false)
  const hold = useCallback((on: boolean) => setHolds((n) => n + (on ? 1 : -1)), [])
  const waiting = holds > 0

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inView])

  // In view, drawing still on its way: wait for it, but not for ever.
  useEffect(() => {
    if (!inView || !waiting || played) return
    const id = window.setTimeout(() => setWaitedOut(true), PLATE_WAIT_MS)
    return () => window.clearTimeout(id)
  }, [inView, waiting, played])

  // Once played, a piece stays played, whatever arrives after.
  const ready = inView && (!waiting || waitedOut)
  useEffect(() => {
    if (ready && !played) setPlayed(true)
  }, [ready, played])

  const state = !hydrated ? '' : played || ready ? 'lc-play' : 'lc-armed'
  return (
    <HoldMotion.Provider value={hold}>
      <div ref={ref} className={[className, state].filter(Boolean).join(' ') || undefined}>
        {children}
      </div>
    </HoldMotion.Provider>
  )
}
