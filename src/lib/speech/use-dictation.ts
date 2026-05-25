'use client'

// ─── useDictation — free, browser-native speech-to-text (dictation) ─────────
// Wraps the Web Speech API (SpeechRecognition / webkitSpeechRecognition), which
// ships free in Chrome, Edge and Safari — no API key, no per-use cost, real-time.
// `supported` is false where the API is absent (e.g. Firefox); callers should
// hide the mic and fall back to typing. An optional Azure STT backend can be
// layered behind the same hook later (premium accuracy / unsupported browsers)
// without changing any call site.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from 'react'

// Minimal typings — the Web Speech API is not in the standard TS DOM lib.
interface SpeechRecognitionAlternativeLike {
  transcript: string
}
interface SpeechRecognitionResultLike {
  readonly isFinal: boolean
  readonly length: number
  [index: number]: SpeechRecognitionAlternativeLike
}
interface SpeechRecognitionResultListLike {
  readonly length: number
  [index: number]: SpeechRecognitionResultLike
}
interface SpeechRecognitionEventLike {
  readonly resultIndex: number
  readonly results: SpeechRecognitionResultListLike
}
interface SpeechRecognitionErrorEventLike {
  readonly error: string
}
interface SpeechRecognitionLike {
  lang: string
  continuous: boolean
  interimResults: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null
  onend: (() => void) | null
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor
    webkitSpeechRecognition?: SpeechRecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export interface UseDictationOptions {
  /** BCP-47 language, e.g. 'en-US' or 'ar-SA'. Defaults to 'en-US'. */
  lang?: string
  /** Called with each finalised chunk of recognised text (caller appends). */
  onFinal?: (text: string) => void
  /** Called with the recognition error code, if any. */
  onError?: (error: string) => void
}

export interface UseDictationResult {
  /** Whether the browser supports dictation at all. */
  supported: boolean
  /** Whether the mic is currently listening. */
  listening: boolean
  /** Live (not-yet-final) partial transcript, for inline preview. */
  interim: string
  start: () => void
  stop: () => void
  toggle: () => void
}

/**
 * Free, browser-native dictation. Returns `supported: false` where unavailable
 * so the UI can degrade gracefully (hide the mic, keep typing).
 */
export function useDictation(options: UseDictationOptions = {}): UseDictationResult {
  const { lang = 'en-US', onFinal, onError } = options
  const [supported] = useState(() => getRecognitionCtor() !== null)
  const [listening, setListening] = useState(false)
  const [interim, setInterim] = useState('')
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)

  // Keep latest callbacks without resubscribing the recogniser.
  const onFinalRef = useRef(onFinal)
  const onErrorRef = useRef(onError)
  onFinalRef.current = onFinal
  onErrorRef.current = onError

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
    setListening(false)
    setInterim('')
  }, [])

  const start = useCallback(() => {
    const Ctor = getRecognitionCtor()
    if (!Ctor) return
    // Tear down any previous instance first.
    recognitionRef.current?.abort()

    const recognition = new Ctor()
    recognition.lang = lang
    recognition.continuous = true
    recognition.interimResults = true

    recognition.onresult = (event) => {
      let finalText = ''
      let interimText = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        const transcript = result[0]?.transcript ?? ''
        if (result.isFinal) finalText += transcript
        else interimText += transcript
      }
      if (finalText) onFinalRef.current?.(finalText)
      setInterim(interimText)
    }
    recognition.onerror = (event) => {
      onErrorRef.current?.(event.error)
      setListening(false)
    }
    recognition.onend = () => {
      setListening(false)
      setInterim('')
    }

    recognitionRef.current = recognition
    recognition.start()
    setListening(true)
  }, [lang])

  const toggle = useCallback(() => {
    if (listening) stop()
    else start()
  }, [listening, start, stop])

  // Clean up on unmount.
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
    }
  }, [])

  return { supported, listening, interim, start, stop, toggle }
}
