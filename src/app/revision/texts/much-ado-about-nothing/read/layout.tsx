import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Much Ado about Nothing Online, Free',
  description:
    'Read the full play of Much Ado about Nothing by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/much-ado-about-nothing/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
