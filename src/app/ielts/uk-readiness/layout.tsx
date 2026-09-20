import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK Readiness Programme - English, Application & Visa',
  description:
    'An overview of the four-part UK readiness programme: your English, your application, visa and finance, and the move, plus the tool behind each one.',
  alternates: { canonical: '/ielts/uk-readiness' },
  robots: { index: true, follow: true },
}

export default function UkReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
