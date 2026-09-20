import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Sign of Four Online, Free',
  description:
    'Read The Sign of Four by Arthur Conan Doyle in full, free. The complete public-domain novel, chapter by chapter, with quotation and theme notes.',
  alternates: { canonical: '/revision/texts/the-sign-of-four/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
