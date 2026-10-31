import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In the Classroom Vocabulary Game | EAL',
  description:
    'Name classroom objects, find the school word that fits a sentence or a dialogue, and say where things are. A free EAL vocabulary game for UK school life.',
  alternates: { canonical: '/games/classroom-objects' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
