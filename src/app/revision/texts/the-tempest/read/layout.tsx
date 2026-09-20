import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Tempest Online, Free',
  description:
    'Read the full play of The Tempest by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/the-tempest/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
