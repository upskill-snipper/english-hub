import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lord of the Flies Essay Plans | GCSE English',
  description:
    "Six essay plans for Lord of the Flies covering Simon, the beast, Piggy's glasses and more, with thesis statements and key quotes for GCSE English exams.",
  alternates: { canonical: '/revision/texts/lord-of-the-flies/essay-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
