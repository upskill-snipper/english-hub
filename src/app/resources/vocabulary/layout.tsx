import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary Builder',
  description:
    'Build your English vocabulary for GCSE exams. Academic, analytical, and descriptive word banks with definitions, examples, and practice exercises.',
  alternates: { canonical: 'https://theenglishhub.app/resources/vocabulary' },
  openGraph: {
    title: 'Vocabulary Builder — The English Hub',
    description:
      'Build your English vocabulary for GCSE exams. Academic, analytical, and descriptive word banks with definitions, examples, and practice exercises.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
