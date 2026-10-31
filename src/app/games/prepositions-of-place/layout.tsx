import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prepositions Game | EAL English',
  description:
    "Choose the preposition a sentence needs: place, time, movement, transport, words like 'interested in', set phrases and dialogues. A free game for EAL learners.",
  alternates: { canonical: '/games/prepositions-of-place' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
