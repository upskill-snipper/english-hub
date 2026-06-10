import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Marking Demo | AI-Assisted Feedback',
  description:
    'See AI-assisted essay marking from the teacher view: rubric-aligned feedback, grades and moderation. An interactive demo with sample essays.',
  alternates: { canonical: '/demo/teacher/essays' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
