'use client'

import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

interface ErrorBannerProps {
  message: string
  onDismiss?: () => void
  onRetry?: () => void
  className?: string
}

export function ErrorBanner({ message, onDismiss, onRetry, className }: ErrorBannerProps) {
  const t = useT()
  return (
    <div
      data-slot="error-banner"
      role="alert"
      className={cn(
        'flex items-center justify-between gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive',
        className,
      )}
    >
      <span>{message}</span>
      <div className="flex shrink-0 items-center gap-2">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="text-xs text-destructive/80 underline transition-colors hover:text-destructive"
          >
            {t('ui.error.retry')}
          </button>
        )}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={t('ui.error.dismiss')}
            className="rounded-md p-0.5 text-destructive/80 transition-colors hover:text-destructive"
          >
            <XIcon className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}
