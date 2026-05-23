import type { Metadata } from 'next'
import { QUALIFICATION } from '@/lib/ilowersecondary/spec'

/**
 * Metadata shell for /ks3/ilowersecondary/quiz.
 *
 * The quiz page itself is a Client Component (it runs the interactive
 * quiz in the browser) and so cannot export `metadata`. Without this
 * layout the route would fall back to the iLowerSecondary layout's
 * `title.default`, colliding with another page in the subtree. This
 * gives the quiz route its own unique title (composed via the parent
 * `%s · iLowerSecondary English · The English Hub` template) and a
 * distinct meta description.
 */
export const metadata: Metadata = {
  title: 'Readiness quiz',
  description:
    `Free ${QUALIFICATION.subjectCode} readiness quiz: 80 original multiple-choice ` +
    'questions for the iLowerSecondary English achievement test, with instant feedback.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/quiz',
  },
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children
}
