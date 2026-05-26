import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curious Incident: Key Quotes - Edexcel IGCSE Literature',
  description:
    'Key quotations from The Curious Incident of the Dog in the Night-Time for Edexcel IGCSE Literature, with analysis of truth, trust and difference.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
