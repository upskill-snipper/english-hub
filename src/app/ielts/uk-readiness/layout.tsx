import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK Readiness Programme — English, Application, Visa & Transition | The English Hub',
  description:
    'A single overview of the four-domain UK Readiness programme: English readiness, application readiness, visa & finance readiness and academic transition — with the tools that build your Readiness Report.',
  alternates: { canonical: '/ielts/uk-readiness' },
  robots: { index: true, follow: true },
}

export default function UkReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
