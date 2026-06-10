import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'An Inspector Calls Themes | GCSE English',
  description:
    'Explore 7 themes in An Inspector Calls, from social responsibility and class to gender, power and generational change, with quotes and analysis for GCSE.',
  alternates: { canonical: '/revision/texts/an-inspector-calls/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
