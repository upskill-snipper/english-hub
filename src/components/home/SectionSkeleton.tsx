export default function SectionSkeleton() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-64 bg-muted/30 rounded-lg animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-muted/20 rounded-lg animate-pulse" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-muted/10 rounded-xl border border-border/20 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
