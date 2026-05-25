'use client'

// ─── useSpeak — free, browser-native text-to-speech (read-aloud) ────────────
// Wraps the Web Speech SpeechSynthesis API (free, broad browser support). Used
// for "read this aloud" affordances (feedback, content, accessibility). An
// optional Azure TTS backend (higher-quality, multi-voice) can be layered in
// later behind the same hook without touching call sites.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useState } from 'react'

export interface UseSpeakResult {
  supported: boolean
  speaking: boolean
  speak: (text: string, opts?: { lang?: string }) => void
  stop: () => void
}

export function useSpeak(): UseSpeakResult {
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const [speaking, setSpeaking] = useState(false)

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setSpeaking(false)
  }, [])

  const speak = useCallback((text: string, opts?: { lang?: string }) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const trimmed = text?.trim()
    if (!trimmed) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(trimmed)
    if (opts?.lang) utterance.lang = opts.lang
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }, [])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  return { supported, speaking, speak, stop }
}
