'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'

/**
 * Shared branded route fallback. Re-exported by every scaffolded
 * loading.tsx so the whole site shares one on-brand skeleton.
 * Token-based (bg-card / border-border) so it tracks the theme.
 * The sr-only status text is i18n'd (EN + Khaleeji) via useT().
 */
export function RouteLoading() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      <p className="sr-only" role="status" aria-live="polite">
        {t('action.loading')}
      </p>
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-6 w-48 rounded-full" />
          <Skeleton className="h-10 w-72 sm:w-96" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-xl" />
        </div>
      </section>
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
    </div>
  )
}

export default RouteLoading
