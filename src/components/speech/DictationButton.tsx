'use client'

// ─── DictationButton — drop-in "speak to type" mic ──────────────────────────
// Place next to any text field. On each finalised chunk it calls `onText(chunk)`
// — the caller appends to its own state (works with any controlled input):
//
//   <DictationButton onText={(t) => setValue((v) => (v ? v + ' ' : '') + t)} />
//
// Renders nothing where the browser has no SpeechRecognition (graceful), so the
// field stays usable by typing. Free + client-side (Web Speech API).
// ────────────────────────────────────────────────────────────────────────────

import { Mic, MicOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useDictation } from '@/lib/speech/use-dictation'
import { useT } from '@/lib/i18n/use-t'

export interface DictationButtonProps {
  /** Called with each finalised chunk of recognised text. */
  onText: (text: string) => void
  /** BCP-47 language for recognition (e.g. 'en-US', 'ar-SA'). */
  lang?: string
  /** Accessible/idle label. Defaults to "Dictate". */
  label?: string
  /** Hide the text label and show only the mic icon. */
  iconOnly?: boolean
  className?: string
}

export function DictationButton({
  onText,
  lang,
  label,
  iconOnly = false,
  className,
}: DictationButtonProps) {
  const t = useT()
  const { supported, listening, interim, toggle } = useDictation({
    lang,
    onFinal: onText,
  })

  // Graceful degradation: no mic where the browser can't do speech recognition.
  if (!supported) return null

  const idleLabel = label ?? t('speech.dictate')
  const listeningLabel = t('speech.listening')

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={listening}
      aria-label={listening ? t('speech.stop') : idleLabel}
      title={listening ? (interim ? `${listeningLabel} ${interim}` : listeningLabel) : idleLabel}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        listening
          ? 'animate-pulse border-red-500/40 bg-red-500/10 text-red-500'
          : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
        className,
      )}
    >
      {listening ? (
        <MicOff className="h-4 w-4" aria-hidden />
      ) : (
        <Mic className="h-4 w-4" aria-hidden />
      )}
      {!iconOnly && <span>{listening ? listeningLabel : idleLabel}</span>}
    </button>
  )
}
