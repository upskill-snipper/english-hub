import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCSE English — The English Hub',
  description:
    'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English — The English Hub',
    description:
      'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
