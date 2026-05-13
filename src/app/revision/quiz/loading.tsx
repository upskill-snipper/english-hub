'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'

export default function Loading() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      <p className="sr-only" role="status" aria-live="polite">
        {t('loading.quiz.label')}
      </p>
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-8 w-24" />
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-10 w-48 sm:w-64" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-xl" />
        </div>
      </section>

      {/* Topic selector */}
      <section className="space-y-4">
        <Skeleton className="h-7 w-36" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-36 rounded-full" />
          ))}
        </div>
      </section>

      {/* Quiz mode cards */}
      <section className="space-y-4">
        <Skeleton className="h-7 w-32" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <div className="space-y-1.5">
                  <Skeleton className="h-5 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="mt-2 h-3 w-3/4" />
              <Skeleton className="mt-4 h-9 w-full rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats / history placeholder */}
      <section className="space-y-4">
        <Skeleton className="h-7 w-40" />
        <div className="grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-2xl" />
          ))}
        </div>
      </section>
    </div>
  )
}
