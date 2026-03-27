import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation Form',
  description:
    'Submit a cancellation request for your English Hub subscription. Online and printable cancellation forms available in compliance with UK consumer rights.',
  alternates: { canonical: 'https://theenglishhub.app/legal/cancellation-form' },
  openGraph: {
    title: 'Cancellation Form — The English Hub',
    description:
      'Submit a cancellation request for your English Hub subscription. Online and printable cancellation forms available in compliance with UK consumer rights.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
