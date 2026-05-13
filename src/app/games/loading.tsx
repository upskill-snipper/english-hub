'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'

export default function Loading() {
  const t = useT()
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Visually-hidden, screen-reader-announced loading label. Mirrors the
          AR / EN cookie locale so AR users get a Khaleeji loading hint
          (e.g. "لحظة، نجيب الألعاب…") instead of a silent skeleton. */}
      <p className="sr-only" role="status" aria-live="polite">
        {t('loading.games.label')}
      </p>

      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-6 w-36 rounded-full" />
          <Skeleton className="h-10 w-52 sm:w-72" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-lg" />
        </div>
      </section>

      {/* Tab bar */}
      <div className="flex gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-28 rounded-md" />
        ))}
      </div>

      {/* Game cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-border/60 bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="space-y-1.5">
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-2/3" />
            <Skeleton className="mt-4 h-9 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
