import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Language Analysis - Edexcel IGCSE Unseen Poetry',
  description:
    'Analyse poetic language for Edexcel IGCSE Literature with What-How-Why: imagery, sound, word choice and how to write about effect, not just technique.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
