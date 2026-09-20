import type { Metadata } from 'next'

// Leaf-route metadata for /ielts/speaking. The page itself is a Client
// Component ('use client'), which cannot export `metadata`, so this sibling
// Server Component layout supplies the unique title + canonical URL.
export const metadata: Metadata = {
  title: 'IELTS Speaking Practice - AI Band Feedback - The English Hub',
  description:
    'Practise IELTS Speaking Parts 1 to 3: record yourself for private review, type what you said, then get a band estimate for all four criteria.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/speaking' },
}

export default function IeltsSpeakingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
