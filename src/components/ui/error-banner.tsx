'use client'

interface ErrorBannerProps {
  message: string
  onDismiss?: () => void
  onRetry?: () => void
}

export function ErrorBanner({ message, onDismiss, onRetry }: ErrorBannerProps) {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm flex items-center justify-between">
      <span>{message}</span>
      <div className="flex gap-2">
        {onRetry && (
          <button onClick={onRetry} className="text-red-300 hover:text-red-200 underline text-xs">
            Retry
          </button>
        )}
        {onDismiss && (
          <button onClick={onDismiss} className="text-red-300 hover:text-red-200 text-xs">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
