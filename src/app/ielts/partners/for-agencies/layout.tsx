import type { Metadata } from 'next'

// Leaf-route metadata for the education-agency partnership landing page.
// Overrides the section defaults from ../layout.tsx. Server component.
//
// COMPLIANCE: see ../layout.tsx. This page must not imply The English Hub is an
// accredited UCAS / university recruitment agent or an official British Council
// or IELTS partner — those are routes we are pursuing, described on the
// /ielts/partners overview.
export const metadata: Metadata = {
  title: 'IELTS Preparation for Education Agencies — The English Hub',
  description:
    'Get the students you place IELTS-ready. The English Hub gives education agencies bulk access to AI-marked IELTS Academic preparation, predicted band evidence, bilingual English / Arabic delivery, and a roadmap aligned to British Council and IELTS standards.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/partners/for-agencies' },
  keywords: [
    'IELTS preparation for education agencies',
    'IELTS for student recruitment agents',
    'IELTS band readiness applicants',
    'bilingual IELTS Gulf agencies',
    'study abroad IELTS preparation',
  ],
}

export default function IeltsPartnersForAgenciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
