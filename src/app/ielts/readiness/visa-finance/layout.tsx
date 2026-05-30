import type { Metadata } from 'next'

// Section metadata for the IELTS-10 Visa & Finance checklist. The page itself is
// a Server Component (it does the hasIeltsAccess gate); this layout supplies its
// unique title/canonical.
export const metadata: Metadata = {
  title: 'UK Student Visa & Finance Checklist - IELTS plan',
  description:
    'An interactive UK Student visa and maintenance-funds readiness checklist: maintenance amounts, the 28-day rule, CAS stage, TB test, ATAS and passport. Get a clear can-apply / not-yet / blocked status that feeds your UK Candidate Readiness Report. Preparation guidance only - check gov.uk. Part of the IELTS plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness/visa-finance' },
}

export default function IeltsVisaFinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
