import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart Notes | IGCSE & A-Level',
  description:
    "Revise Achebe's Things Fall Apart for IGCSE and A-Level: plot, Okonkwo's character arc, themes, key quotations, Igbo culture and post-colonial context.",
  alternates: { canonical: '/resources/revision-notes/things-fall-apart' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
