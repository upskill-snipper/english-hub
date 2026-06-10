import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/an-unknown-girl' },
  title: 'An Unknown Girl (Moniza Alvi) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Moniza Alvi's 'An Unknown Girl' for the Edexcel IGCSE Literature anthology: identity, belonging and culture, with key quotations and imagery.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
