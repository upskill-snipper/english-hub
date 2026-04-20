import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Teachers | AI Lesson Planning & Analytics',
  description:
    'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. From £7.99/month with a 7-day free trial. School plans available -- book a call.',
  alternates: { canonical: 'https://theenglishhub.app/for-teachers' },
  openGraph: {
    title: 'For Teachers | AI Lesson Planning & Analytics — The English Hub',
    description:
      'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. From £7.99/month with a 7-day free trial. School plans available -- book a call.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Teachers | AI Lesson Planning & Analytics — The English Hub',
    description:
      'Save 5+ hours/week with AI lesson planning, student analytics, and 300+ ready resources. From £7.99/month with a 7-day free trial. School plans available -- book a call.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-muted text-muted-foreground border-b py-2 text-center text-sm">
        Individual plans from{' '}
        <Link
          href="/auth/register"
          className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
        >
          &pound;7.99/month
        </Link>{' '}
        or{' '}
        <Link
          href="/for-schools"
          className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
        >
          join the Founding Schools Programme
        </Link>
      </div>
      {children}
    </>
  )
}
