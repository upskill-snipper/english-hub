'use client'

import * as React from 'react'
import { useT } from '@/lib/i18n/use-t'

interface Props {
  /** What to render normally */
  children: React.ReactNode
  /** Fallback UI when an error is caught (defaults to small inline notice) */
  fallback?: React.ReactNode
  /** Optional callback when an error is caught */
  onError?: (error: Error, info: React.ErrorInfo) => void
  /** Optional label used in the default fallback */
  label?: string
}

/**
 * Default fallback UI. Split out as a function component so the class
 * boundary above can stay a class (needed for componentDidCatch) while
 * the fallback itself uses the `useT()` client hook for i18n.
 */
function DefaultFallback({ label, onRetry }: { label?: string; onRetry: () => void }) {
  const t = useT()
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-2 text-xs text-red-700">
      <span>{label || t('error.boundary_default')}</span>
      <button onClick={onRetry} className="font-medium underline hover:no-underline">
        {t('action.retry')}
      </button>
    </div>
  )
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Local React error boundary.
 *
 * Wrap any subtree that you don't want to take down the whole route when it
 * throws during render or in a lifecycle method. Promise rejections from
 * event handlers do NOT trigger error boundaries -- those still need their
 * own try/catch -- but anything that crashes the React render of a child
 * will be contained here instead of bubbling up to `app/error.tsx`.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Always log so issues are visible in the console
    // (Sentry is wired up at the route boundary, not here, to avoid noise)
    if (typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error('[ErrorBoundary] caught:', error, info)
    }
    this.props.onError?.(error, info)
  }

  reset = () => this.setState({ hasError: false, error: null })

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) return this.props.fallback
      return <DefaultFallback label={this.props.label} onRetry={this.reset} />
    }
    return this.props.children
  }
}

export default ErrorBoundary
