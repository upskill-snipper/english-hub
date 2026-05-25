import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

// ─── LoopStep ──────────────────────────────────────────────────────────────
// A single node in the IELTS learning-loop stepper on the hub page:
// Diagnose → Plan → Practise → AI feedback → Mock → Predict band.
// Presentational; the chevron connector between steps is rendered by the
// parent so it can be hidden on the last step / on small screens.
// ────────────────────────────────────────────────────────────────────────────

export interface LoopStepProps {
  /** 1-based position, shown in the node. */
  index: number
  /** Localised step label (from ielts.loop.* keys). */
  label: string
  icon: LucideIcon
  /** One short, original line explaining the step. */
  detail: string
  className?: string
}

export function LoopStep({ index, label, icon: Icon, detail, className }: LoopStepProps) {
  return (
    <li
      className={cn(
        'relative flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-center',
        className,
      )}
    >
      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 font-mono text-[10px] font-bold text-primary-foreground">
        {index}
      </span>
      <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <p className="font-serif text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{detail}</p>
    </li>
  )
}
