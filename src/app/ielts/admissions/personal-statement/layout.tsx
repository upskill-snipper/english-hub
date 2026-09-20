import type { Metadata } from 'next'

// Leaf-route metadata for the Personal-Statement Coach. The page itself is a
// Client Component ('use client') and cannot export metadata, so this sibling
// server layout supplies the unique title + canonical for
// /ielts/admissions/personal-statement.
export const metadata: Metadata = {
  title: 'UCAS Personal Statement AI Coach - The English Hub',
  description:
    'Answer the three UCAS personal statement questions and get AI feedback on each: a rating, your strengths and three improvements for the next draft.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/admissions/personal-statement' },
}

export default function PersonalStatementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
