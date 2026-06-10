import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Animal Farm Extract Walkthrough | GCSE Exam Practice',
  description:
    "Step by step walkthrough of Animal Farm's final scene as pigs become men, with AO2 analysis and zoom out points for the GCSE English extract question.",
  alternates: { canonical: '/revision/texts/animal-farm/extract-walkthrough' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
