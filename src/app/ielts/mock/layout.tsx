import type { Metadata } from 'next'

// Leaf-route metadata for the full IELTS Mock Test runner. The page itself is a
// Client Component ('use client') - it owns countdown timers, the section
// sequencer and live state - so it cannot export `metadata`; this sibling server
// layout supplies the unique title + canonical for /ielts/mock.
export const metadata: Metadata = {
  title: 'IELTS Mock Test - The English Hub',
  description:
    'A full, timed IELTS mock test across Listening, Reading, Writing Tasks 1 and 2, and Speaking, with auto-submit and a predicted band for each section.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/mock' },
}

export default function IeltsMockLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
