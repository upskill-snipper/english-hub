'use client'

import { useT } from '@/lib/i18n/use-t'

export default function Loading() {
  const t = useT()
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="sr-only" role="status" aria-live="polite">
        {t('loading.courses.label')}
      </p>
      <div className="h-8 w-48 animate-pulse rounded bg-muted mb-6" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted mb-3" />
            <div className="h-3 w-full animate-pulse rounded bg-muted mb-2" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-muted mb-4" />
            <div className="h-8 w-24 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
