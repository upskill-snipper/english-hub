import type { Metadata } from 'next'
import AffiliateLayoutClient from './layout-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Affiliate Portal | The English Hub',
  description:
    'Manage your affiliate account, track earnings, and access resources.',
}

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AffiliateLayoutClient>{children}</AffiliateLayoutClient>
}
