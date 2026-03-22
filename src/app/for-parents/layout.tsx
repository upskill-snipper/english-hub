import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Parents — The English Hub',
  description:
    'Help your child succeed in English with guided courses, progress reports and expert revision tools tailored to GCSE, IGCSE and KS3 exams.',
  openGraph: {
    title: 'For Parents — The English Hub',
    description:
      'Help your child succeed in English with guided courses, progress reports and expert revision tools tailored to GCSE, IGCSE and KS3 exams.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
