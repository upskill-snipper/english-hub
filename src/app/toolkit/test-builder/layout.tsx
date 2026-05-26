import type { Metadata } from 'next'

// Client page can't export metadata - this sibling layout gives the route
// its own unique title/description (was inheriting the site-default title,
// part of the duplicate-title cluster the SEO audit flagged).
export const metadata: Metadata = {
  title: 'Test Builder - Custom GCSE English Practice',
  description:
    'Build a custom GCSE English practice test: pick the exam board, paper and question types, then mark your answers against the AO criteria.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/test-builder' },
}

export default function TestBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
