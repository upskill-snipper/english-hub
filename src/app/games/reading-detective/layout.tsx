import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reading Detective | KS3 Comprehension Game',
  description:
    'Read short passages, then retrieve facts and make inferences. A free reading comprehension game for KS3 English and early GCSE skills.',
  alternates: { canonical: '/games/reading-detective' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
