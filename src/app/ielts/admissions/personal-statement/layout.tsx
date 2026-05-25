import type { Metadata } from 'next'

// Leaf-route metadata for the Personal-Statement Coach. The page itself is a
// Client Component ('use client') and cannot export metadata, so this sibling
// server layout supplies the unique title + canonical for
// /ielts/admissions/personal-statement.
export const metadata: Metadata = {
  title: 'UCAS Personal Statement Coach — AI Feedback — The English Hub',
  description:
    'Paste your UCAS personal statement and get instant AI feedback on structure, motivation, evidence, reflection and English, with three concrete improvements for your next draft. Preparation guidance for UK university applicants — not an admissions guarantee.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/admissions/personal-statement' },
}

export default function PersonalStatementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
