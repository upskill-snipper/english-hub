import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Themes | GCSE English',
  description:
    'Explore 7 themes in A Christmas Carol including redemption, social responsibility, greed and family, with key quotes and analysis for GCSE English essays.',
  alternates: { canonical: '/revision/texts/a-christmas-carol/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
