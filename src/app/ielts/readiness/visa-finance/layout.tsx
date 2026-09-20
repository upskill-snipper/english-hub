import type { Metadata } from 'next'

// Section metadata for the IELTS-10 Visa & Finance checklist. The page itself is
// a Server Component (it does the hasIeltsAccess gate); this layout supplies its
// unique title/canonical.
export const metadata: Metadata = {
  title: 'UK Student Visa & Finance Checklist - IELTS plan',
  description:
    'An interactive UK Student route checklist covering funds, the 28-day rule, CAS, TB test, ATAS and passport, giving a clear can-apply status. Check gov.uk.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness/visa-finance' },
}

export default function IeltsVisaFinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
