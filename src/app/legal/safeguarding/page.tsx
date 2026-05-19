import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description: 'The English Hub Safeguarding Policy has moved.',
  robots: { index: false, follow: true },
}

export default function SafeguardingPolicyMovedPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-semibold">Safeguarding Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This policy has moved to{' '}
        <Link href="/safeguarding" className="font-semibold underline">
          /safeguarding
        </Link>
        .
      </p>
    </div>
  )
}
