import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart Context | IGCSE English',
  description:
    "AO3 context for Things Fall Apart: pre colonial Igbo society, British colonialism in Nigeria, Yeats's title and Achebe's language choice, for IGCSE exams.",
  alternates: { canonical: '/revision/texts/things-fall-apart/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
