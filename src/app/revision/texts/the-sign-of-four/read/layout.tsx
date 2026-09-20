import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Sign of Four Online, Free',
  description:
    'Read the full novel of The Sign of Four by Arthur Conan Doyle online, free. Quotations and themes highlighted inline.',
  alternates: { canonical: '/revision/texts/the-sign-of-four/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
