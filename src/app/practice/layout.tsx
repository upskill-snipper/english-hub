import type { Metadata } from 'next'
import { GeoFaq, REVISION_FAQS } from '@/components/seo/GeoFaq'

export const metadata: Metadata = {
  title: 'Practice Questions',
  description:
    'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
  alternates: { canonical: 'https://theenglishhub.app/practice' },
  openGraph: {
    title: 'Practice Questions - The English Hub',
    description:
      'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <GeoFaq faqs={REVISION_FAQS} heading="Practice & revision: common questions" />
      </div>
    </>
  )
}
