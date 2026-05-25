import type { Metadata } from 'next'

// Section-level metadata for the /ielts/admissions tree - the IELTS → UK
// university admissions track. The hub page is a Server Component but takes its
// title + canonical from here so all leaf routes (personal-statement,
// student-visa) sit under one consistent section, each supplying its own unique
// title/canonical via its own sibling layout where needed.
export const metadata: Metadata = {
  title: 'IELTS to UK University Admissions - UCAS, Bands & Visa Guide',
  description:
    'A preparation guide for Gulf students applying to UK universities: how UCAS works and when to apply, the IELTS Academic bands typically required by course type, writing a standout personal statement, and student-visa basics. Independent IELTS / UK-study preparation.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/admissions' },
}

export default function IeltsAdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
