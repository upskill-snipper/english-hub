'use client'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { statusInfo, type StatusTone } from './status'

const TONE: Record<StatusTone, string> = {
  attention: 'border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300',
  progress: 'border-primary/30 bg-primary/10 text-primary',
  good: 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400',
  returned: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  bad: 'border-destructive/30 bg-destructive/10 text-destructive',
  neutral: 'border-border bg-muted/50 text-muted-foreground',
}

/** A marking status in the words a teacher reads (see ./status.ts). */
export function StatusBadge({ status }: { status: string }) {
  const t = useT()
  const info = statusInfo(status)
  return (
    <Badge
      variant="outline"
      className={cn('h-auto whitespace-normal py-0.5 text-start leading-snug', TONE[info.tone])}
    >
      {t(info.labelKey)}
    </Badge>
  )
}
