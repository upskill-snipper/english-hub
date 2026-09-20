import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Placement Test - Estimate Your Band in 10 Minutes',
  description:
    'A short IELTS Academic placement test: auto-marked Reading and Listening plus a Writing and Speaking self-check, giving a band per skill and a plan.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/diagnostic' },
}

export default function IeltsDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
