import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assessment Resources',
  description:
    'Free English assessment resources for teachers. Mark schemes, assessment criteria, and moderation support aligned to GCSE and IGCSE specifications.',
  alternates: { canonical: 'https://theenglishhub.app/resources/teaching/assessment' },
  openGraph: {
    title: 'Assessment Resources — The English Hub',
    description:
      'Free English assessment resources for teachers. Mark schemes, assessment criteria, and moderation support aligned to GCSE and IGCSE specifications.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
