import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My IELTS Study Plan - Weakest Skills First',
  description:
    'Your personalised IELTS Academic study plan. Set a target band, see your current estimate versus target for each skill, and get a prioritised, weakest-first plan with concrete next steps for Reading, Listening, Writing and Speaking.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/plan' },
}

export default function IeltsPlanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
