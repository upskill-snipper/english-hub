import type { Metadata } from 'next'

// Leaf-route metadata for the Listening module. The page itself is a client
// component ('use client' can't export metadata), so this sibling server layout
// supplies the unique <title> and canonical URL.
export const metadata: Metadata = {
  title: 'IELTS Academic Listening Practice - The English Hub',
  description:
    'Practise IELTS Academic Listening with original two-section tests: form and note completion plus multiple choice, instant auto-marking, a predicted band score, and full transcripts with explanations in the review.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/listening' },
}

export default function ListeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
