import type { Metadata } from 'next'

// Leaf-route metadata for the schools & exam-centre partnership landing page.
// Overrides the section defaults from ../layout.tsx with a focused title,
// description and canonical. Server component.
//
// COMPLIANCE: see ../layout.tsx - partnership/accreditation references on this
// page are intent and alignment, never held affiliations.
export const metadata: Metadata = {
  title: 'IELTS Prep for Schools & Exam Centres - The English Hub',
  description:
    'Add an AI-marked IELTS Academic pathway to your school or exam-prep centre: bulk learner access, a centre dashboard and instant band feedback.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/partners/for-schools' },
  keywords: [
    'IELTS preparation for schools',
    'IELTS for international schools',
    'IELTS exam-prep centre platform',
    'IELTS pathway sixth form',
    'bilingual IELTS Gulf schools',
  ],
}

export default function IeltsPartnersForSchoolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
