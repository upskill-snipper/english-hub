'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Sound and vibration for the quest player, made in the browser (Web Audio),
 * so there are no sound files to download.
 *
 * OFF UNTIL THE STUDENT TURNS IT ON. Students play in lessons and on shared
 * screens, and a game that makes noise unasked is a game a teacher closes.
 * The choice is remembered in this browser only.
 */

export type Sound = 'right' | 'wrong' | 'tap' | 'complete' | 'star'

const KEY = 'teh-quest:sfx'

/** Notes as [frequency in Hz, start in seconds, length in seconds]. */
const NOTES: Record<Sound, [number, number, number][]> = {
  right: [
    [659.25, 0, 0.12],
    [987.77, 0.08, 0.2],
  ],
  wrong: [
    [196, 0, 0.18],
    [174.61, 0.12, 0.24],
  ],
  tap: [[880, 0, 0.04]],
  complete: [
    [523.25, 0, 0.14],
    [659.25, 0.12, 0.14],
    [783.99, 0.24, 0.14],
    [1046.5, 0.36, 0.4],
  ],
  star: [[1318.51, 0, 0.18]],
}

const BUZZ: Partial<Record<Sound, number | number[]>> = {
  right: 18,
  wrong: [30, 40, 30],
  complete: [20, 60, 20, 60, 40],
}

let context: AudioContext | null = null

function audio(): AudioContext | null {
  if (typeof window === 'undefined') return null
  try {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    context ??= new Ctor()
    if (context.state === 'suspended') void context.resume()
    return context
  } catch {
    return null
  }
}

function playNotes(sound: Sound) {
  const ctx = audio()
  if (!ctx) return
  const now = ctx.currentTime
  for (const [freq, start, len] of NOTES[sound]) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = sound === 'wrong' ? 'triangle' : 'sine'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, now + start)
    gain.gain.exponentialRampToValueAtTime(sound === 'tap' ? 0.05 : 0.12, now + start + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + len)
    osc.connect(gain).connect(ctx.destination)
    osc.start(now + start)
    osc.stop(now + start + len + 0.02)
  }
}

function readOn(): boolean {
  try {
    return window.localStorage.getItem(KEY) === 'on'
  } catch {
    return false
  }
}

export function useSfx() {
  // Off on the server and on the first render, so both agree.
  const [on, setOn] = useState(false)
  const onRef = useRef(false)
  useEffect(() => {
    const v = readOn()
    setOn(v)
    onRef.current = v
  }, [])

  const toggle = useCallback(() => {
    setOn((was) => {
      const next = !was
      onRef.current = next
      try {
        window.localStorage.setItem(KEY, next ? 'on' : 'off')
      } catch {
        // Kept for the page only.
      }
      if (next) playNotes('tap')
      return next
    })
  }, [])

  const play = useCallback((sound: Sound) => {
    if (!onRef.current) return
    playNotes(sound)
    const buzz = BUZZ[sound]
    if (buzz !== undefined) {
      try {
        navigator.vibrate?.(buzz)
      } catch {
        // Not every browser lets a page vibrate.
      }
    }
  }, [])

  return { on, toggle, play }
}
