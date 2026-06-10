import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dictionary Skills Game | KS3 English',
  description:
    'Practise alphabetical order, guide words and finding definitions fast. A free dictionary skills game for KS3 English and literacy practice.',
  alternates: { canonical: '/games/dictionary-skills' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
