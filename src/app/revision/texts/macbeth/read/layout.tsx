import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Macbeth Online | Annotated Text & Analysis',
  description:
    'Read Macbeth online act by act with annotated key scenes, character notes and theme tracking in an interactive reader built for GCSE English revision.',
  alternates: { canonical: '/revision/texts/macbeth/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
