import type { Metadata } from 'next'

// Leaf-route metadata for the student-visa basics sub-page. Supplies a unique
// title + canonical for /ielts/admissions/student-visa. The page is a Server
// Component; this layout keeps the canonical explicit and consistent with the
// rest of the admissions tree.
export const metadata: Metadata = {
  title: 'UK Student Visa Basics for Gulf Students - The English Hub',
  description:
    'How the UK Student visa fits your journey: four steps from offer to visa, and a CAS, funds, English and passport checklist. Not immigration advice.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/admissions/student-visa' },
}

export default function StudentVisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
