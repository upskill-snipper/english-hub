import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Jane Eyre Online, Free',
  description:
    'Read the whole of Jane Eyre by Charlotte Brontë online, free: all 38 chapters, a chapter at a time.',
  alternates: { canonical: '/revision/texts/jane-eyre/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
