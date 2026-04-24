import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Teachers | AI Lesson Planning & Analytics',
  description:
    'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. Early Access from £6.99/month (Standard £11.99 from August 2026). 7-day free trial. Founding Schools £4,000/year — first 10 only.',
  alternates: { canonical: 'https://theenglishhub.app/for-teachers' },
  openGraph: {
    title: 'For Teachers | AI Lesson Planning & Analytics — The English Hub',
    description:
      'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. Early Access from £6.99/month (Standard £11.99 from August 2026). 7-day free trial. Founding Schools £4,000/year — first 10 only.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Teachers | AI Lesson Planning & Analytics — The English Hub',
    description:
      'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. Early Access from £6.99/month (Standard £11.99 from August 2026). 7-day free trial. Founding Schools £4,000/year — first 10 only.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-muted text-muted-foreground border-b py-2 text-center text-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-amber-700 mr-1.5">
          Early Access
        </span>
        Teacher plans from{' '}
        <Link
          href="/auth/register"
          className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
        >
          &pound;6.99/month
        </Link>{' '}
        <span className="hidden sm:inline text-muted-foreground/70">
          (Standard <span className="line-through">&pound;11.99</span> from August 2026)
        </span>{' '}
        <span className="mx-1 text-muted-foreground/50">·</span>{' '}
        <Link
          href="/for-schools"
          className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
        >
          Founding Schools &pound;4,000/year
        </Link>
      </div>
      {children}
    </>
  )
}
