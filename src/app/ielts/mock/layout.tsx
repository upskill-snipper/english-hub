import type { Metadata } from 'next'

// Leaf-route metadata for the full IELTS Mock Test runner. The page itself is a
// Client Component ('use client') - it owns countdown timers, the section
// sequencer and live state - so it cannot export `metadata`; this sibling server
// layout supplies the unique title + canonical for /ielts/mock.
export const metadata: Metadata = {
  title: 'IELTS Mock Test - The English Hub',
  description:
    'Sit a full, timed IELTS mock test under realistic exam conditions: Listening, Reading, Writing (Task 1 + Task 2) and Speaking, each strictly timed with auto-submit, then a predicted band report for every section and an overall band. For IELTS preparation.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/mock' },
}

export default function IeltsMockLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
