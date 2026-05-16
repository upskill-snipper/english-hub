import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Parents',
  description:
    'Help your child succeed in English with guided courses, progress reports and expert revision tools tailored to GCSE, IGCSE and KS3 exams.',
  alternates: { canonical: 'https://theenglishhub.app/for-parents' },
  openGraph: {
    title: 'For Parents — The English Hub',
    description:
      'Help your child succeed in English with guided courses, progress reports and expert revision tools tailored to GCSE, IGCSE and KS3 exams.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
