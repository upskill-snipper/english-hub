import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10">
        <div className="relative space-y-4">
          <Skeleton className="h-8 w-24" />
          {/* Board badge + change link */}
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-36 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-10 w-64 sm:w-80" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-xl" />
        </div>
      </section>

      {/* Cluster cards */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <div className="space-y-1.5">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
