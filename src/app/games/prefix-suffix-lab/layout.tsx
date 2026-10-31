import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prefix and Suffix Lab | KS3 Word Game',
  description:
    'Build words with prefixes and suffixes, spell them where they join, and say what an affix does in real lines. A free word-building game for KS3 English.',
  alternates: { canonical: '/games/prefix-suffix-lab' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
