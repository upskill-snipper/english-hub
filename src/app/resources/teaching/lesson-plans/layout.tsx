import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Lesson Plans',
  description:
    'Ready-made English lesson plans for KS3 and GCSE. Differentiated activities, learning objectives, and curriculum-aligned resources for teachers.',
  alternates: { canonical: 'https://theenglishhub.app/resources/teaching/lesson-plans' },
  openGraph: {
    title: 'English Lesson Plans — The English Hub',
    description:
      'Ready-made English lesson plans for KS3 and GCSE. Differentiated activities, learning objectives, and curriculum-aligned resources for teachers.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
