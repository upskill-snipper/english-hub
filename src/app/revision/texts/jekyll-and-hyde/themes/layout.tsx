import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Themes | GCSE English',
  description:
    'Explore 6 themes in Jekyll and Hyde, from duality and repression to science, secrecy and violence, with key quotes and analysis for GCSE English essays.',
  alternates: { canonical: '/revision/texts/jekyll-and-hyde/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
