import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Theme Matcher | GCSE Set Texts Game',
  description:
    'Match themes to the GCSE set texts where they appear, from ambition to power. A free English Literature revision game covering major themes.',
  alternates: { canonical: '/games/theme-matcher' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
