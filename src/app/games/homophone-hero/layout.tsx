import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homophone Hero | KS3 Spelling Game',
  description:
    "Pick the right homophone: their, there or they're, your or you're and more. A free spelling game for KS3 English and literacy practice.",
  alternates: { canonical: '/games/homophone-hero' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
