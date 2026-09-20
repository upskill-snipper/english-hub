import type { Metadata } from 'next'

// Leaf-route metadata for the Listening module. The page itself is a client
// component ('use client' can't export metadata), so this sibling server layout
// supplies the unique <title> and canonical URL.
export const metadata: Metadata = {
  title: 'IELTS Academic Listening Practice - The English Hub',
  description:
    'Original two-section IELTS Listening tests: form and note completion plus multiple choice, auto-marked with a predicted band and full transcripts.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/listening' },
}

export default function ListeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
