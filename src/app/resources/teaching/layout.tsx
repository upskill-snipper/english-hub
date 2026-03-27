import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teaching Resources',
  description:
    'Free teaching resources for English teachers. Lesson plans, assessment materials, printable worksheets, and curriculum-aligned content for KS3 to IGCSE.',
  alternates: { canonical: 'https://theenglishhub.app/resources/teaching' },
  openGraph: {
    title: 'Teaching Resources — The English Hub',
    description:
      'Free teaching resources for English teachers. Lesson plans, assessment materials, printable worksheets, and curriculum-aligned content for KS3 to IGCSE.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
