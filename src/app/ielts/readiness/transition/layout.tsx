import type { Metadata } from 'next'

// Section metadata for the IELTS-11 Academic-transition modules. The page itself
// is a Server Component (it does the hasIeltsAccess gate); this layout supplies
// its unique title/canonical.
export const metadata: Metadata = {
  title: 'UK University Transition Modules - IELTS plan',
  description:
    'Short, self-guided modules to prepare for UK university life: academic writing and referencing, lectures and independent study, budgeting and UK bank accounts, and accommodation. Each module includes a quick self-check that feeds your UK Candidate Readiness Report. Part of the IELTS plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness/transition' },
}

export default function IeltsTransitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
