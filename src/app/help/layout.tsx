import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Centre | The English Hub',
  description:
    'Find answers to common questions about The English Hub. Get help with courses, mock exams, practice questions, your account, billing, and more.',
  openGraph: {
    title: 'Help Centre | The English Hub',
    description:
      'Find answers to common questions about The English Hub. Get help with courses, mock exams, practice questions, your account, billing, and more.',
    url: 'https://theenglishhub.app/help',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Centre | The English Hub',
    description:
      'Find answers to common questions about The English Hub. Get help with courses, mock exams, practice questions, your account, billing, and more.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/help',
  },
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
