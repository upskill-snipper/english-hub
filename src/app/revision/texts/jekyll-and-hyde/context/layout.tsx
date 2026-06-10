import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Context | GCSE English',
  description:
    "AO3 context for Jekyll and Hyde: Victorian repression, Darwin and evolution, the Gothic genre and London's dual city, explained for GCSE English essays.",
  alternates: { canonical: '/revision/texts/jekyll-and-hyde/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
