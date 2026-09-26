'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'

const noop = () => () => {}

/**
 * Plays a linocut piece's motion when it first scrolls into view, once.
 *
 * The art is server-rendered and passed in as children; this adds one class
 * to a wrapper and nothing else, so no drawing reaches the client bundle.
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
 * prefers-reduced-motion needs nothing here: the stylesheet switches every
 * animation off under it, whatever the class.
 */
export function PlayOnView({ children, className }: { children: ReactNode; className?: string }) {
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  )
  const ref = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || playing) return
    if (typeof IntersectionObserver === 'undefined') {
      setPlaying(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlaying(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [playing])

  const state = !hydrated ? '' : playing ? 'lc-play' : 'lc-armed'
  return (
    <div ref={ref} className={[className, state].filter(Boolean).join(' ') || undefined}>
      {children}
    </div>
  )
}
