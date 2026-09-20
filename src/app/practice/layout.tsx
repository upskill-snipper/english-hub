import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Questions',
  description:
    'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
  alternates: { canonical: 'https://theenglishhub.app/practice' },
  openGraph: {
    title: 'Practice Questions - The English Hub',
    description:
      'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
    images: [
      {
        url: '/api/og?title=Practice+Questions+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Practice Questions - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
