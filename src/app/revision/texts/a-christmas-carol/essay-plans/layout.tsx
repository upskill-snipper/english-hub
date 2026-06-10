import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Essay Plans | GCSE English',
  description:
    'Eight essay plans for A Christmas Carol covering the ghosts, poverty, redemption, family, structure and symbolism, with quotes and tips for GCSE exams.',
  alternates: { canonical: '/revision/texts/a-christmas-carol/essay-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
