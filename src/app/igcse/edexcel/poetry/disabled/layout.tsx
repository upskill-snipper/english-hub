import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disabled (Wilfred Owen) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Wilfred Owen's 'Disabled' for the Edexcel IGCSE Literature anthology: the cost of war, loss and regret, with key quotations, contrast and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
