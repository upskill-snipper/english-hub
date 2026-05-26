import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparison Essays - Edexcel IGCSE Essay Technique',
  description:
    'Write Grade 9 comparison essays for Edexcel IGCSE Literature: point-by-point structure, comparative thesis statements, paragraph frames and linking vocabulary.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
