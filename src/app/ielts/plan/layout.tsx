import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My IELTS Study Plan - Weakest Skills First',
  description:
    'Your personalised IELTS study plan: set a target band, compare your current estimate per skill, and follow a prioritised, weakest-first route.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/plan' },
}

export default function IeltsPlanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
