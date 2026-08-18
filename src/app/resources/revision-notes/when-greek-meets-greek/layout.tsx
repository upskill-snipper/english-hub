import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Greek Meets Greek Revision Notes | Edexcel IGCSE',
  description:
    "Revise Sam Selvon's When Greek Meets Greek for Edexcel IGCSE: plot, Ram and Chan, creole narrative voice, Windrush context, key phrases and exam questions.",
  alternates: { canonical: '/resources/revision-notes/when-greek-meets-greek' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
