import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read If— Online, Free',
  description: 'Read the full poem of If— by Rudyard Kipling online, free.',
  alternates: { canonical: '/revision/texts/if/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
