import type { Metadata } from 'next'

// Leaf-route metadata for the student-visa basics sub-page. Supplies a unique
// title + canonical for /ielts/admissions/student-visa. The page is a Server
// Component; this layout keeps the canonical explicit and consistent with the
// rest of the admissions tree.
export const metadata: Metadata = {
  title: 'UK Student Visa Basics for Gulf Students - The English Hub',
  description:
    'A plain-English overview of the UK Student visa for Gulf students with a university offer: the CAS, evidence of funds, the English-language (IELTS) requirement, and when to apply. General preparation information, not immigration advice.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/admissions/student-visa' },
}

export default function StudentVisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
