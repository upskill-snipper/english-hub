'use client'

// ─── ReadAloudButton — drop-in "read this aloud" speaker ────────────────────
// Reads the supplied `text` with the browser's free SpeechSynthesis. Renders
// nothing where unsupported. Useful for AI feedback, content and accessibility.
//
//   <ReadAloudButton text={feedback.overallComment} />
// ────────────────────────────────────────────────────────────────────────────

import { Volume2, Square } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSpeak } from '@/lib/speech/use-speak'

export interface ReadAloudButtonProps {
  /** The text to read aloud. */
  text: string
  /** BCP-47 language (e.g. 'en-US', 'ar-SA'). */
  lang?: string
  /** Idle label. Defaults to "Read aloud". */
  label?: string
  iconOnly?: boolean
  className?: string
}

export function ReadAloudButton({
  text,
  lang,
  label = 'Read aloud',
  iconOnly = false,
  className,
}: ReadAloudButtonProps) {
  const { supported, speaking, speak, stop } = useSpeak()

  if (!supported || !text?.trim()) return null

  return (
    <button
      type="button"
      onClick={() => (speaking ? stop() : speak(text, { lang }))}
      aria-pressed={speaking}
      aria-label={speaking ? 'Stop reading' : label}
      title={label}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground',
        className,
      )}
    >
      {speaking ? (
        <Square className="h-4 w-4" aria-hidden />
      ) : (
        <Volume2 className="h-4 w-4" aria-hidden />
      )}
      {!iconOnly && <span>{speaking ? 'Stop' : label}</span>}
    </button>
  )
}
