'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'

export default function Loading() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      <p className="sr-only" role="status" aria-live="polite">
        {t('loading.revision.label')}
      </p>
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-6 w-48 rounded-full" />
          <Skeleton className="h-10 w-72 sm:w-96" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-xl" />
          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Study plan CTA */}
      <Skeleton className="h-36 rounded-2xl" />

      {/* Section heading */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-7 w-44" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Section cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <div className="space-y-1.5">
                  <Skeleton className="h-5 w-28" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="mt-2 h-3 w-2/3" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
