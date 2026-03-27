import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Techniques',
  description:
    'Essential language and structural techniques for AQA GCSE English Language. Analysis methods, terminology, and exam-ready identification skills.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/techniques' },
  openGraph: {
    title: 'AQA English Language Techniques — The English Hub',
    description:
      'Essential language and structural techniques for AQA GCSE English Language. Analysis methods, terminology, and exam-ready identification skills.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
