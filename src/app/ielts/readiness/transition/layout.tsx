import type { Metadata } from 'next'

// Section metadata for the IELTS-11 Academic-transition modules. The page itself
// is a Server Component (it does the hasIeltsAccess gate); this layout supplies
// its unique title/canonical.
export const metadata: Metadata = {
  title: 'UK University Transition Modules - IELTS plan',
  description:
    'Four short modules on UK university life: academic writing, lectures and independent study, budgeting and banking, and accommodation, each with a self-check.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/readiness/transition' },
}

export default function IeltsTransitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
