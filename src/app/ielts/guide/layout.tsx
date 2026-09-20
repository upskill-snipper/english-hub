import type { Metadata } from 'next'

// Section-level metadata for the /ielts/guide route - the authoritative IELTS
// exam reference page. A standalone SEO surface (indexable) that explains the
// test structure, scoring and where candidates struggle, all rendered from the
// single source of truth in `@/lib/ielts/exam-facts`. The page itself is a
// Server Component with exactly one <h1>; its title + canonical live here.
export const metadata: Metadata = {
  title: 'IELTS Exam Guide: Sections, Timings & Band Scores',
  description:
    'How IELTS works: the four sections and their timings, the 0-9 band scale, where candidates lose marks, and the route from registration to results.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/guide' },
}

export default function IeltsGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
