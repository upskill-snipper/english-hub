import type { Metadata } from 'next'

// Leaf-route metadata for /ielts/speaking. The page itself is a Client
// Component ('use client'), which cannot export `metadata`, so this sibling
// Server Component layout supplies the unique title + canonical URL.
export const metadata: Metadata = {
  title: 'IELTS Speaking Practice - AI Band Feedback - The English Hub',
  description:
    'Practise IELTS Academic Speaking Parts 1-3. Record yourself for private self-review, then get an AI band estimate for Fluency & Coherence, Lexical Resource, Grammatical Range and Pronunciation from your transcript.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/speaking' },
}

export default function IeltsSpeakingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
