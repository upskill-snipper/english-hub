import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Study Planner - The English Hub',
  description:
    'Plan backwards from your IELTS exam date: a week-by-week schedule that front-loads your weakest skills and mixes lessons, practice and a full mock.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/planner' },
}

export default function IeltsPlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
