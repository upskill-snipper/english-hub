import type { Metadata } from 'next'

// Private B2B dashboard for IELTS centres / tutors / schools. NOT indexable -
// it renders learner data behind teacher auth, so we set robots.index = false
// (and a self-canonical) rather than letting it surface in search.
export const metadata: Metadata = {
  title: 'IELTS Centre Dashboard - The English Hub',
  description:
    'Private dashboard for IELTS centres, tutors and schools to monitor their linked learners’ latest band scores across Listening, Reading, Writing and Speaking.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/centre' },
  robots: { index: false, follow: false },
}

export default function IeltsCentreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
