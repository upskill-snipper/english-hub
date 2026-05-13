'use client'

import { useT } from '@/lib/i18n/use-t'

export default function CourseDetailLoading() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <p className="sr-only" role="status" aria-live="polite">
        {t('loading.course_detail.label')}
      </p>
      {/* Header skeleton */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6 h-5 w-24 animate-pulse rounded bg-muted" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              {/* Badges */}
              <div className="mb-3 flex items-center gap-2">
                <div className="h-6 w-14 animate-pulse rounded-md bg-muted" />
                <div className="h-6 w-20 animate-pulse rounded-md bg-muted" />
              </div>
              {/* Title */}
              <div className="h-10 w-80 animate-pulse rounded bg-muted" />
              {/* Subtitle */}
              <div className="mt-2 h-6 w-64 animate-pulse rounded bg-muted" />
              {/* Stats */}
              <div className="mt-6 flex gap-5">
                <div className="h-5 w-20 animate-pulse rounded bg-muted" />
                <div className="h-5 w-24 animate-pulse rounded bg-muted" />
                <div className="h-5 w-20 animate-pulse rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1 space-y-6">
            {/* About card */}
            <div className="rounded-lg border border-border p-6 sm:p-8">
              <div className="mb-4 h-7 w-48 animate-pulse rounded bg-muted" />
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              </div>
            </div>

            {/* Module list */}
            <div className="rounded-lg border border-border p-6 sm:p-8">
              <div className="mb-6 h-7 w-48 animate-pulse rounded bg-muted" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-border px-4 py-3.5"
                  >
                    <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-muted" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-4 w-48 animate-pulse rounded bg-muted" />
                      <div className="h-3 w-20 animate-pulse rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar skeleton */}
          <aside className="hidden w-80 shrink-0 lg:block">
            <div className="rounded-lg border border-border p-6">
              <div className="h-12 w-full animate-pulse rounded-lg bg-muted" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-5 w-full animate-pulse rounded bg-muted" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
