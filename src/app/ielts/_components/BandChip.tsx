import { cn } from '@/lib/utils'
import { bandColour, bandBgColour, bandLabel } from '@/lib/ielts/bands'
import type { Band } from '@/lib/ielts/types'

// ─── BandChip ──────────────────────────────────────────────────────────────
// Small, dependency-free band display. Used for per-skill bands on the
// progress dashboard. Colours come straight from bands.ts so the whole IELTS
// surface stays consistent. Presentational only — safe in server or client.
// ────────────────────────────────────────────────────────────────────────────

export interface BandChipProps {
  /** Skill / metric label, e.g. "Listening" or "Overall". */
  label: string
  /** Optional single-letter or short marker shown in the icon tile. */
  short?: string
  /** The band value, or null when the skill has not been attempted yet. */
  band: Band | null
  /** How many attempts contributed to this band (shown as a sublabel). */
  attempts?: number
  className?: string
}

export function BandChip({ label, short, band, attempts, className }: BandChipProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-xl border p-4 transition-colors',
        bandBgColour(band),
        className,
      )}
    >
      {short ? (
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.06] font-mono text-sm font-semibold',
            bandColour(band),
          )}
          aria-hidden
        >
          {short}
        </span>
      ) : null}
      <div className="min-w-0">
        <p className="truncate font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className={cn('font-serif text-2xl font-medium leading-tight', bandColour(band))}>
          {bandLabel(band)}
        </p>
        {typeof attempts === 'number' ? (
          <p className="text-[11px] text-muted-foreground">
            {attempts === 0 ? 'Not attempted' : `${attempts} attempt${attempts === 1 ? '' : 's'}`}
          </p>
        ) : null}
      </div>
    </div>
  )
}
