import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Twelfth Night Online, Free',
  description:
    'Read the full play of Twelfth Night by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/twelfth-night/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
