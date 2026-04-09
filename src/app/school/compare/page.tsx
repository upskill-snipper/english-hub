import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ClassComparison } from '@/components/school/ClassComparison'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Compare Classes | The English Hub',
  description:
    'Compare 2-4 classes side by side. Analyse average scores, completion rates, engagement, skill breakdowns, grade distributions, and trends.',
  robots: { index: false, follow: false },
}

function ComparisonFallback() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export default function CompareClassesPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <Suspense fallback={<ComparisonFallback />}>
        <ClassComparison />
      </Suspense>
    </div>
  )
}
