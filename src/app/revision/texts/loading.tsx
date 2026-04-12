import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-8 w-24" />
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-40 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-10 w-56 sm:w-72" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-xl" />
        </div>
      </section>

      {/* Category sections */}
      {Array.from({ length: 3 }).map((_, catIdx) => (
        <section key={catIdx} className="space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-xl" />
            <div className="space-y-1.5">
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-3 w-64" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-xl" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <Skeleton className="h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-3/4" />
                <Skeleton className="mt-4 h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
