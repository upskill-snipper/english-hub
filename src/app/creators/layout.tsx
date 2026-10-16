import type { Metadata } from 'next'

// Until 16 October 2026 this said creators could "publish courses, earn revenue
// and reach thousands of students". /creators is the referral programme: a
// creator shares a link and earns one commission per subscriber. Nobody
// publishes courses through it, and the site publishes no user numbers.
const DESCRIPTION =
  'Join The English Hub creator programme: share the site with your audience and earn a commission for each student who subscribes through your link.'

export const metadata: Metadata = {
  title: 'For Creators',
  description: DESCRIPTION,
  alternates: { canonical: 'https://theenglishhub.app/creators' },
  openGraph: {
    title: 'For Creators - The English Hub',
    description: DESCRIPTION,
    images: [
      {
        url: '/api/og?title=For+Creators+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'For Creators - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
