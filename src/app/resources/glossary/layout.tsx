import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Glossary',
  description:
    'Comprehensive glossary of English literary and linguistic terms for GCSE and IGCSE students. Definitions, examples, and exam-relevant terminology explained.',
  alternates: { canonical: 'https://theenglishhub.app/resources/glossary' },
  openGraph: {
    title: 'English Glossary — The English Hub',
    description:
      'Comprehensive glossary of English literary and linguistic terms for GCSE and IGCSE students. Definitions, examples, and exam-relevant terminology explained.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
