import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/unseen-poetry/approach' },
  title: '5-Step Approach - Edexcel IGCSE Unseen Poetry',
  description:
    'A 5-step method for unseen poetry in Edexcel IGCSE Literature: first impressions, annotation, language, structure, planning and writing under timed conditions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
