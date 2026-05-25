'use client'

// ─── IELTS Speaking · audio Recorder (self-review only) ─────────────────────
// Records the learner's spoken answer via getUserMedia + MediaRecorder so they
// can play it back and self-assess while they type their transcript. In Wave 1
// the audio is NEVER uploaded - it stays in the browser (an in-memory object
// URL) and is discarded on unmount or when a new recording starts. Live
// auto-transcription and real pronunciation scoring are Phase 2.
//
// Defensive by design:
//   • Unsupported browser (no mediaDevices / MediaRecorder) → friendly notice,
//     the transcript path still works.
//   • Permission denied → friendly notice, the transcript path still works.
//   • On unmount (and before each new recording) we stop all media tracks and
//     revoke the object URL so there are no leaks and the mic light goes off.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from 'react'
import { Mic, Square, Play, Pause, AlertTriangle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'

type RecorderState = 'idle' | 'recording' | 'recorded'

/** Detect MediaRecorder + getUserMedia support without throwing at module load. */
function isRecordingSupported(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  return (
    typeof navigator.mediaDevices !== 'undefined' &&
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    typeof window.MediaRecorder !== 'undefined'
  )
}

function formatElapsed(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export interface RecorderProps {
  /** Optional soft ceiling (seconds) - recording auto-stops here (e.g. 120 for Part 2). */
  maxSeconds?: number
  /** Notifies the page when recording starts/stops, so it can pause its own timers if needed. */
  onRecordingChange?: (recording: boolean) => void
  className?: string
}

export function Recorder({ maxSeconds, onRecordingChange, className }: RecorderProps) {
  const t = useT()
  const [supported, setSupported] = useState<boolean>(true)
  const [state, setState] = useState<RecorderState>('idle')
  const [elapsed, setElapsed] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  // Mirror the latest object URL in a ref so unmount cleanup always revokes the
  // current one without re-subscribing the effect on every state change.
  const audioUrlRef = useRef<string | null>(null)

  // Feature-detect on mount (client only - avoids SSR/hydration mismatch).
  useEffect(() => {
    setSupported(isRecordingSupported())
  }, [])

  const stopTracks = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const revokeAudioUrl = useCallback(() => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
  }, [])

  // ── Cleanup on unmount: stop mic, clear timer, revoke URL ────────────────
  useEffect(() => {
    return () => {
      clearTimer()
      stopTracks()
      try {
        mediaRecorderRef.current?.state !== 'inactive' && mediaRecorderRef.current?.stop()
      } catch {
        // recorder may already be inactive - safe to ignore
      }
      revokeAudioUrl()
    }
  }, [clearTimer, stopTracks, revokeAudioUrl])

  const stopRecording = useCallback(() => {
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop() // fires `onstop` → builds the blob/URL
      }
    } catch {
      // ignore - onstop cleanup below still runs
    }
    clearTimer()
    onRecordingChange?.(false)
  }, [clearTimer, onRecordingChange])

  const startRecording = useCallback(async () => {
    setError(null)

    if (!isRecordingSupported()) {
      setSupported(false)
      return
    }

    // Starting fresh - drop any previous take.
    revokeAudioUrl()
    setAudioUrl(null)
    setElapsed(0)
    chunksRef.current = []

    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err) {
      const name = (err as { name?: string } | null)?.name
      if (
        name === 'NotAllowedError' ||
        name === 'SecurityError' ||
        name === 'PermissionDeniedError'
      ) {
        setError(t('ielts.speaking.recorder.error.denied'))
      } else if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        setError(t('ielts.speaking.recorder.error.no_mic'))
      } else {
        setError(t('ielts.speaking.recorder.error.generic'))
      }
      return
    }

    streamRef.current = stream

    let recorder: MediaRecorder
    try {
      recorder = new MediaRecorder(stream)
    } catch {
      stopTracks()
      setError(t('ielts.speaking.recorder.error.unsupported'))
      return
    }
    mediaRecorderRef.current = recorder

    recorder.ondataavailable = (event: BlobEvent) => {
      if (event.data && event.data.size > 0) {
        chunksRef.current.push(event.data)
      }
    }

    recorder.onstop = () => {
      stopTracks()
      const type = recorder.mimeType || 'audio/webm'
      const blob = new Blob(chunksRef.current, { type })
      if (blob.size > 0) {
        const url = URL.createObjectURL(blob)
        audioUrlRef.current = url
        setAudioUrl(url)
        setState('recorded')
      } else {
        setState('idle')
      }
    }

    try {
      recorder.start()
    } catch {
      stopTracks()
      setError(t('ielts.speaking.recorder.error.generic'))
      return
    }

    setState('recording')
    onRecordingChange?.(true)

    // Elapsed-time ticker; auto-stop at maxSeconds when provided.
    timerRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1
        if (maxSeconds && next >= maxSeconds) {
          stopRecording()
        }
        return next
      })
    }, 1000)
  }, [maxSeconds, onRecordingChange, revokeAudioUrl, stopRecording, stopTracks, t])

  const discardRecording = useCallback(() => {
    setIsPlaying(false)
    revokeAudioUrl()
    setAudioUrl(null)
    setElapsed(0)
    setState('idle')
  }, [revokeAudioUrl])

  const togglePlayback = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    if (el.paused) {
      void el.play()
      setIsPlaying(true)
    } else {
      el.pause()
      setIsPlaying(false)
    }
  }, [])

  // ── Unsupported browser ──────────────────────────────────────────────────
  if (!supported) {
    return (
      <div
        className={cn(
          'rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-700',
          className,
        )}
      >
        <div className="flex items-start gap-2">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" />
          <div>
            <p className="font-medium">{t('ielts.speaking.recorder.unsupported.title')}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('ielts.speaking.recorder.unsupported.body')}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ── Normal recorder UI ─────────────────────────────────────────────────────
  return (
    <div className={cn('rounded-xl border border-border/60 bg-card p-4', className)}>
      <div className="flex flex-wrap items-center gap-3">
        {state !== 'recording' ? (
          <Button type="button" variant="default" size="sm" onClick={() => void startRecording()}>
            <Mic className="size-4" />
            {state === 'recorded'
              ? t('ielts.speaking.recorder.btn.record_again')
              : t('ielts.speaking.recorder.btn.record')}
          </Button>
        ) : (
          <Button type="button" variant="destructive" size="sm" onClick={stopRecording}>
            <Square className="size-4" />
            {t('ielts.speaking.recorder.btn.stop')}
          </Button>
        )}

        {audioUrl && state !== 'recording' && (
          <>
            <Button type="button" variant="outline" size="sm" onClick={togglePlayback}>
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
              {isPlaying
                ? t('ielts.speaking.recorder.btn.pause')
                : t('ielts.speaking.recorder.btn.play')}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={discardRecording}
            >
              <Trash2 className="size-3.5" />
              {t('ielts.speaking.recorder.btn.discard')}
            </Button>
          </>
        )}

        {/* Elapsed time / recording indicator */}
        <div className="ml-auto flex items-center gap-2 text-sm tabular-nums text-muted-foreground">
          {state === 'recording' && (
            <span
              className="inline-flex size-2.5 animate-pulse rounded-full bg-red-500"
              aria-hidden
            />
          )}
          <span aria-live="polite">
            {formatElapsed(elapsed)}
            {maxSeconds ? ` / ${formatElapsed(maxSeconds)}` : ''}
          </span>
        </div>
      </div>

      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
          className="mt-3 w-full"
          controls
        />
      )}

      {error && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-700">
          <AlertTriangle className="mt-0.5 size-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        {t('ielts.speaking.recorder.note')}
      </p>
    </div>
  )
}

export default Recorder
