import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Placement Test — Estimate Your Band in 10 Minutes',
  description:
    'Take a short IELTS Academic placement diagnostic: mini Reading and Listening sets are auto-marked, with a quick honest self-estimate for Writing and Speaking. Get an indicative band per skill and a personalised study plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/diagnostic' },
}

export default function IeltsDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
