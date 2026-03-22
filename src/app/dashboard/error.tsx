'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-md w-full text-center space-y-4 p-8">
        <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-foreground">Failed to load dashboard</h2>
        <p className="text-muted-foreground">We had trouble loading your dashboard. Please try again.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-colors">
            Go Home
          </Link>
          <button onClick={reset} className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors">
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
