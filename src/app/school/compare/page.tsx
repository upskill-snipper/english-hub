import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ClassComparison } from '@/components/school/ClassComparison'
import { Skeleton } from '@/components/ui/skeleton'
import { t } from '@/lib/i18n/t'

// SEO metadata stays in English — Google's English crawl is canonical for this
// admin-only page (robots: noindex anyway). User-facing chrome below is wired
// through useT/t for the Khaleeji-AR toggle.
export const metadata: Metadata = {
  openGraph: {
    title: 'Compare Classes | The English Hub',
    description:
      'Compare 2-4 classes side by side. Analyse average scores, completion rates, engagement, skill breakdowns, grade distributions, and trends.',
  },
  alternates: { canonical: 'https://theenglishhub.app/school/compare' },
  title: 'Compare Classes',
  description:
    'Compare 2-4 classes side by side. Analyse average scores, completion rates, engagement, skill breakdowns, grade distributions, and trends.',
  robots: { index: false, follow: false },
}

async function ComparisonFallback() {
  const loadingLabel = await t('school.comparison.loading')
  const pageTitle = await t('school.comparison.page_title')
  const pageSubtitle = await t('school.comparison.page_subtitle')
  return (
    <div className="space-y-6" role="status" aria-live="polite" aria-label={loadingLabel}>
      <span className="sr-only">{pageTitle}</span>
      <span className="sr-only">{pageSubtitle}</span>
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

export default async function CompareClassesPage() {
  const fallback = await ComparisonFallback()
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <Suspense fallback={fallback}>
        <ClassComparison />
      </Suspense>
    </div>
  )
}
