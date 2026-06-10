import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prefix and Suffix Lab | KS3 Word Game',
  description:
    'Build new words with prefixes and suffixes, from un- to -tion. A free word-building game for KS3 English vocabulary and spelling revision.',
  alternates: { canonical: '/games/prefix-suffix-lab' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
