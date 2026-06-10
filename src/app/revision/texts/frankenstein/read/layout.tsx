import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Frankenstein Online | Key Chapters with Analysis',
  description:
    "Read key chapters of Frankenstein online, from Walton's letters to the Creature's story and the novel's ending, with study notes for GCSE English revision.",
  alternates: { canonical: '/revision/texts/frankenstein/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
