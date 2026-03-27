import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with The English Hub. Reach our support team for help with courses, accounts, billing, school enquiries, partnerships, or feedback.',
  alternates: { canonical: 'https://theenglishhub.app/contact' },
  openGraph: {
    title: 'Contact Us — The English Hub',
    description:
      'Get in touch with The English Hub. Reach our support team for help with courses, accounts, billing, school enquiries, partnerships, or feedback.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
