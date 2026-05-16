'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RotateCcw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Shared branded route error boundary. Re-exported by every
 * scaffolded error.tsx. Client component with a reset()
 * handler, on-brand tokens (destructive / foreground / muted).
 */
export function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Route error:', error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangle className="size-8" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Something went wrong</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          We hit an unexpected error loading this page. Try again, or head back home.
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="mr-2 size-4" /> Try again
        </Button>
        <Button render={<Link href="/" />}>
          <Home className="mr-2 size-4" /> Go home
        </Button>
      </div>
    </div>
  )
}

export default RouteError
