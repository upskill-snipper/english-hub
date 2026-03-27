import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Writing Skills',
  description:
    'Master writing skills for AQA GCSE English Language. Creative writing, transactional writing, and persuasive techniques with examiner insights.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/writing-skills' },
  openGraph: {
    title: 'AQA English Language Writing Skills — The English Hub',
    description:
      'Master writing skills for AQA GCSE English Language. Creative writing, transactional writing, and persuasive techniques with examiner insights.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
