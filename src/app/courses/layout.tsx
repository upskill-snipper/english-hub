import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses — The English Hub',
  description:
    'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  alternates: { canonical: 'https://theenglishhub.app/courses' },
  openGraph: {
    title: 'Courses — The English Hub',
    description:
      'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
