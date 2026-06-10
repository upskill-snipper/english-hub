import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Characters | GCSE English',
  description:
    'Revise 8 Jekyll and Hyde characters including Jekyll, Hyde, Utterson, Lanyon and Enfield, with key quotes, analysis and exam focus for GCSE English.',
  alternates: { canonical: '/revision/texts/jekyll-and-hyde/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
