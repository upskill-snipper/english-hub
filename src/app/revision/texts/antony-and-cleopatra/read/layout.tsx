import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Antony and Cleopatra Online, Free',
  description:
    'Read the full play of Antony and Cleopatra by William Shakespeare online, free. Quotations and themes highlighted inline.',
  alternates: { canonical: '/revision/texts/antony-and-cleopatra/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
