'use client'

interface ErrorBannerProps {
  message: string
  onDismiss?: () => void
  onRetry?: () => void
}

export function ErrorBanner({ message, onDismiss, onRetry }: ErrorBannerProps) {
  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-6 text-destructive text-sm flex items-center justify-between">
      <span>{message}</span>
      <div className="flex gap-2">
        {onRetry && (
          <button onClick={onRetry} className="text-destructive/80 hover:text-destructive underline text-xs">
            Retry
          </button>
        )}
        {onDismiss && (
          <button onClick={onDismiss} aria-label="Dismiss error" className="text-destructive/80 hover:text-destructive text-xs">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
