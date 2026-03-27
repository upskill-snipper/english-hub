import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCSE English — The English Hub',
  description:
    'Comprehensive IGCSE English Language and Literature resources. Spec A and Spec B courses, past-paper practice and revision for top grades.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English — The English Hub',
    description:
      'Comprehensive IGCSE English Language and Literature resources. Spec A and Spec B courses, past-paper practice and revision for top grades.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
