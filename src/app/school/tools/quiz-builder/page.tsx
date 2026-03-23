import type { Metadata } from 'next'
import { QuizBuilder } from '@/components/school/QuizBuilder'

export const metadata: Metadata = {
  title: 'Quiz Builder | The English Hub',
  description:
    'Create custom quizzes for your English classes with multiple question types, templates, and sharing options.',
  robots: { index: false, follow: false },
}

export default function QuizBuilderPage() {
  return <QuizBuilder />
}
