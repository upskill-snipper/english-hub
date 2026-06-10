import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/if' },
  title: 'If- (Rudyard Kipling) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Kipling's 'If-' for the Edexcel IGCSE Literature anthology: stoicism, maturity and self-control, with key quotations, structure and tone.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
