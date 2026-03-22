import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Creators — The English Hub',
  description:
    'Join The English Hub as a content creator. Publish courses, earn revenue and reach thousands of students preparing for GCSE and IGCSE English exams.',
  openGraph: {
    title: 'For Creators — The English Hub',
    description:
      'Join The English Hub as a content creator. Publish courses, earn revenue and reach thousands of students preparing for GCSE and IGCSE English exams.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
