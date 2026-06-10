import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In the Classroom Vocabulary Game | EAL',
  description:
    'Name classroom objects and say where things are in English. A free beginner vocabulary game for EAL learners and newcomers to UK school life.',
  alternates: { canonical: '/games/classroom-objects' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
