import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Study Planner — The English Hub',
  description:
    'Build a dated IELTS study plan that works backwards from your exam date. Set a target band, exam date and current level, then get a week-by-week schedule that front-loads your weakest skills, mixes learning, practice and a full mock, plus a time-aware "what can I do right now?" suggestion.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/planner' },
}

export default function IeltsPlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
