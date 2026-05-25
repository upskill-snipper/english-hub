'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, Pause, Square, RotateCcw, Volume2, VolumeX, Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'

// ─── AudioPlayer (Wave 1 TTS stand-in) ─────────────────────────────────────
// Plays a Listening section's `transcript` aloud using the browser's Web Speech
// API (window.speechSynthesis + SpeechSynthesisUtterance). This is a deliberate
// Wave 1 substitute for recorded audio — see the module page / report for the
// Phase 2 plan to swap in real `audioSrc` assets.
//
// Behaviour:
//   • Play  → speak from the start.
//   • Pause / Resume → toggle the current utterance.
//   • Stop  → cancel and reset to the start.
//   • Replay → real IELTS plays each recording once; we allow replay so learners
//     can practise. (The page can still mark a single listen if it wants.)
//   • Graceful degradation → if the API is missing (e.g. some mobile browsers,
//     or SSR), we hide the controls and offer a "read the script instead"
//     fallback so the section is never a dead end.
//   • Cleanup → speechSynthesis is global and keeps talking across route
//     changes, so we cancel on unmount and whenever the transcript changes.
//
// IMPORTANT: during the test the transcript stays HIDDEN. The only way to see it
// here is the fallback reveal shown when TTS is unavailable. The full transcript
// is exposed by the parent page in the post-submit review.
// ────────────────────────────────────────────────────────────────────────────

type PlaybackState = 'idle' | 'playing' | 'paused'

interface AudioPlayerProps {
  /** The section's transcript — spoken aloud. */
  transcript: string
  /** Human label for the section, used in the status line. */
  sectionTitle: string
  /**
   * Reset signal: when this value changes (e.g. the parent moved to a new
   * section), playback is cancelled and the player returns to idle. Pass the
   * section id.
   */
  resetKey: string
}

/** Feature-detect the Web Speech synthesis API in a SSR-safe way. */
function speechSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof window.SpeechSynthesisUtterance !== 'undefined'
  )
}

export default function AudioPlayer({ transcript, sectionTitle, resetKey }: AudioPlayerProps) {
  // Resolve support after mount only — this avoids a hydration mismatch, since
  // the server can't know whether the client has the API.
  const [supported, setSupported] = useState<boolean | null>(null)
  const [state, setState] = useState<PlaybackState>('idle')
  const [showFallback, setShowFallback] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    setSupported(speechSupported())
  }, [])

  // Hard stop: cancel any queued/active speech and drop our utterance handle.
  const stop = useCallback(() => {
    if (speechSupported()) {
      try {
        window.speechSynthesis.cancel()
      } catch {
        // non-fatal — some browsers throw if synthesis is mid-teardown
      }
    }
    utteranceRef.current = null
    setState('idle')
  }, [])

  // Cancel speech on unmount AND whenever the section changes, so audio never
  // bleeds from one section/route into the next.
  useEffect(() => {
    return () => {
      if (speechSupported()) {
        try {
          window.speechSynthesis.cancel()
        } catch {
          // ignore
        }
      }
    }
  }, [])

  useEffect(() => {
    // resetKey change == new section: stop playback and re-hide the fallback.
    stop()
    setShowFallback(false)
  }, [resetKey, stop])

  const play = useCallback(() => {
    if (!speechSupported()) return
    const synth = window.speechSynthesis
    // Always start clean so Replay / re-Play don't stack utterances.
    synth.cancel()

    const utterance = new SpeechSynthesisUtterance(transcript)
    utterance.rate = 0.95 // a touch slower than default — closer to exam pace
    utterance.pitch = 1
    utterance.lang = 'en-GB'
    utterance.onend = () => {
      utteranceRef.current = null
      setState('idle')
    }
    utterance.onerror = () => {
      utteranceRef.current = null
      setState('idle')
    }
    utteranceRef.current = utterance
    synth.speak(utterance)
    setState('playing')
  }, [transcript])

  const pause = useCallback(() => {
    if (!speechSupported()) return
    try {
      window.speechSynthesis.pause()
      setState('paused')
    } catch {
      // ignore
    }
  }, [])

  const resume = useCallback(() => {
    if (!speechSupported()) return
    try {
      window.speechSynthesis.resume()
      setState('playing')
    } catch {
      // ignore
    }
  }, [])

  // ─── Render: pre-mount (support unknown) ──────────────────────────────────
  // Render a stable skeleton so server and first client paint match.
  if (supported === null) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Volume2 className="size-4" />
          <span>Preparing audio…</span>
        </div>
      </div>
    )
  }

  // ─── Render: TTS unavailable → reading fallback ───────────────────────────
  if (!supported) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
        <div className="flex items-start gap-3">
          <VolumeX className="size-5 shrink-0 text-amber-500" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground">
              Audio playback isn’t available in this browser
            </p>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Your browser doesn’t support text-to-speech, so you can read the script for{' '}
              {sectionTitle} instead and answer the questions from the text.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => setShowFallback((v) => !v)}
              aria-expanded={showFallback}
            >
              {showFallback ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
              {showFallback ? 'Hide script' : 'Read the script instead'}
            </Button>
            {showFallback && (
              <div className="mt-3 max-h-72 overflow-y-auto rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="whitespace-pre-line text-body-sm leading-relaxed text-foreground">
                  {transcript}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ─── Render: full player ──────────────────────────────────────────────────
  const statusLabel =
    state === 'playing' ? 'Playing' : state === 'paused' ? 'Paused' : 'Ready to play'

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
              state === 'playing' ? 'bg-sky-500/15 text-sky-500' : 'bg-muted text-muted-foreground'
            }`}
            aria-hidden="true"
          >
            <Volume2 className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">{sectionTitle} audio</p>
            <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
              {statusLabel}
            </p>
          </div>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          {state === 'idle' && (
            <Button variant="default" size="sm" onClick={play}>
              <Play className="size-3.5" />
              Play
            </Button>
          )}
          {state === 'playing' && (
            <Button variant="secondary" size="sm" onClick={pause}>
              <Pause className="size-3.5" />
              Pause
            </Button>
          )}
          {state === 'paused' && (
            <Button variant="default" size="sm" onClick={resume}>
              <Play className="size-3.5" />
              Resume
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={stop}
            disabled={state === 'idle'}
            aria-label="Stop playback"
          >
            <Square className="size-3.5" />
            Stop
          </Button>

          <Button variant="outline" size="sm" onClick={play} aria-label="Replay from the start">
            <RotateCcw className="size-3.5" />
            Replay
          </Button>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Spoken by your browser’s built-in voice. In the real test the recording plays{' '}
        <span className="font-medium text-foreground">once</span> — try a single listen first, then
        use Replay only to practise. The script stays hidden until you submit.
      </p>
    </div>
  )
}
