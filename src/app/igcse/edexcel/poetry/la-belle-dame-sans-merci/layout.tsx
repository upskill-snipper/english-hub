import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Belle Dame sans Merci (Keats) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Keats's 'La Belle Dame sans Merci' for the Edexcel IGCSE anthology: love, enchantment and death, with key quotations, ballad form and imagery.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
