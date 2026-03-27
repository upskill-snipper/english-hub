import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAIE IGCSE Literature Exam Technique',
  description:
    'Exam technique guide for CAIE IGCSE English Literature. Question types, time management, essay structure, and strategies for top marks.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/exam-technique' },
  openGraph: {
    title: 'CAIE IGCSE Literature Exam Technique — The English Hub',
    description:
      'Exam technique guide for CAIE IGCSE English Literature. Question types, time management, essay structure, and strategies for top marks.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
