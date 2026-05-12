'use client'

import { useT } from '@/lib/i18n/use-t'

/* ─── Types ──────────────────────────────────────────────────── */

type SpinnerSize = 'sm' | 'md' | 'lg'

interface LoadingSpinnerProps {
  /** Size of the spinner. Defaults to "md". */
  size?: SpinnerSize
  /** Optional label shown below the spinner. */
  label?: string
  /** Additional CSS classes. */
  className?: string
}

/* ─── Size mapping ───────────────────────────────────────────── */

const SIZE_CLASSES: Record<SpinnerSize, string> = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
}

/* ─── Component ──────────────────────────────────────────────── */

export function LoadingSpinner({ size = 'md', label, className = '' }: LoadingSpinnerProps) {
  const t = useT()
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`animate-spin rounded-full border-primary border-t-transparent ${SIZE_CLASSES[size]}`}
        aria-hidden="true"
      />
      {label ? (
        <p className="text-sm text-muted-foreground">{label}</p>
      ) : (
        <span className="sr-only">{t('action.loading')}</span>
      )}
    </div>
  )
}
