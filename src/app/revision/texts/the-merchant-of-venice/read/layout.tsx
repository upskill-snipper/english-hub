import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Merchant of Venice Online, Free',
  description:
    'Read the full play of The Merchant of Venice by William Shakespeare online, free. Quotations, themes, language and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/the-merchant-of-venice/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
