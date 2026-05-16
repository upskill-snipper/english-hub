'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Count-up animated figure for hero KPIs (the "premium" motion cue).
 * Eases to `value` on mount/changes; honours prefers-reduced-motion
 * (renders the final value instantly). Uses requestAnimationFrame.
 */
export function AnimatedNumber({
  value,
  duration = 900,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const [display, setDisplay] = useState(0)
  const fromRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || duration <= 0) {
      setDisplay(value)
      return
    }
    const from = fromRef.current
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(from + (value - from) * eased)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = value
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      fromRef.current = value
    }
  }, [value, duration])

  const formatted = display.toLocaleString('en-GB', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
