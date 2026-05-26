import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Out, Out- (Robert Frost) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Frost's 'Out, Out-' for the Edexcel IGCSE Literature anthology: mortality, childhood and indifference, with key quotations and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
