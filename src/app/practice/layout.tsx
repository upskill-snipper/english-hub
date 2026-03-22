import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Questions — The English Hub',
  description:
    'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
  openGraph: {
    title: 'Practice Questions — The English Hub',
    description:
      'Sharpen your English skills with exam-style practice questions for GCSE, IGCSE and KS3. Timed drills, instant feedback and board-specific content.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
