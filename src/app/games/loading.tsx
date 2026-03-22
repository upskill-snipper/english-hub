export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="h-8 w-44 animate-pulse rounded bg-muted mb-2" />
      <div className="h-4 w-64 animate-pulse rounded bg-muted mb-8" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 animate-pulse rounded-lg bg-muted" />
              <div>
                <div className="h-5 w-28 animate-pulse rounded bg-muted mb-1" />
                <div className="h-3 w-16 animate-pulse rounded bg-muted" />
              </div>
            </div>
            <div className="h-3 w-full animate-pulse rounded bg-muted mb-2" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-muted mb-4" />
            <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
