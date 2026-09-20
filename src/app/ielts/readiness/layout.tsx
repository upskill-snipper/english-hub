import type { Metadata } from 'next'

// Section metadata for the Candidate Readiness Report - the headline IELTS
// £39-plan feature. The page itself is a Server Component (it does the
// hasIeltsAccess gate); this layout supplies its unique title/canonical.
export const metadata: Metadata = {
  title: 'UK Candidate Readiness Report - IELTS, UCAS & Visa',
  description:
    'A traffic-light readiness score across your English, UCAS application, visa and finance, and the move, with red flags and a 7/30/60-day action plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness' },
}

export default function IeltsReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
