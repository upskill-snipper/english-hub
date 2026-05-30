import type { Metadata } from 'next'

// Section metadata for the Candidate Readiness Report - the headline IELTS
// £39-plan feature. The page itself is a Server Component (it does the
// hasIeltsAccess gate); this layout supplies its unique title/canonical.
export const metadata: Metadata = {
  title: 'UK Candidate Readiness Report - IELTS, UCAS, Visa & Transition',
  description:
    'Your exportable UK-study readiness report: a traffic-light score across English (IELTS bands vs target), your UCAS application, visa & finance, and academic transition - with red flags and a 7/30/60-day action plan. Part of the IELTS plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness' },
}

export default function IeltsReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
