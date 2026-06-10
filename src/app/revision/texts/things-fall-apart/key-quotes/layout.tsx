import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart Key Quotes | IGCSE English Revision',
  description:
    "22 key quotes from Things Fall Apart with part and chapter references, analysis of Achebe's language and links to key themes for IGCSE English revision.",
  alternates: { canonical: '/revision/texts/things-fall-apart/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
