import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Call | Schools',
  description:
    'Book a 20-minute call with our schools team. Learn about the Founding Schools Programme, get a live walkthrough, and discuss pricing for your department.',
  alternates: { canonical: 'https://theenglishhub.app/for-schools/contact' },
  openGraph: {
    title: 'Book a Call | Schools | The English Hub',
    description:
      'Book a 20-minute call to learn about The English Hub for your school. No obligation, no sales deck.',
    images: [
      {
        url: '/api/og?title=Book+a+Call+%7C+Schools+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Book a Call | Schools | The English Hub',
      },
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
