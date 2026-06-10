import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'An Inspector Calls Context | GCSE English',
  description:
    "AO3 context for An Inspector Calls: the 1912 to 1945 gap, Priestley's socialism, Edwardian class and gender, plus Marxist and feminist critical readings.",
  alternates: { canonical: '/revision/texts/an-inspector-calls/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
