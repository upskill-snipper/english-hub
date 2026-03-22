import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Partners — Earn Money Sharing Education | The English Hub',
  description:
    'Join The English Hub affiliate program. Earn 20% recurring commission for every student you refer. Perfect for TikTok, YouTube, and Instagram creators.',
  openGraph: {
    title: 'Earn Money Sharing Education — The English Hub Creator Partners',
    description:
      'Join our affiliate program and earn 20% recurring commission on every student you refer. Perfect for student creators on TikTok, YouTube, and Instagram.',
    url: 'https://theenglishhub.app/creators',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn Money Sharing Education — The English Hub Creator Partners',
    description:
      'Join our affiliate program and earn 20% recurring commission on every student you refer.',
  },
}

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
