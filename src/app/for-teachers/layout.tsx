import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'English teacher tools and AI marking',
  description:
    'AI lesson plans, AI essay marking, classroom analytics and a growing library of resources - built around your exam board specification.',
  alternates: { canonical: 'https://theenglishhub.app/for-teachers' },
  openGraph: {
    title: 'English teacher tools and AI marking - The English Hub',
    description:
      'AI lesson plans, AI essay marking, classroom analytics and a growing library of resources - built around your exam board specification.',
    images: [
      {
        url: '/api/og?title=English+department+tools&subtitle=AI+marking+%2B+lesson+planning+%2B+analytics',
        width: 1200,
        height: 630,
        alt: 'English department tools - AI marking, lesson planning and analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English teacher tools and AI marking - The English Hub',
    description:
      'AI lesson plans, AI essay marking, classroom analytics and a growing library of resources - built around your exam board specification.',
    images: [
      '/api/og?title=English+department+tools&subtitle=AI+marking+%2B+lesson+planning+%2B+analytics',
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'For Teachers', url: 'https://theenglishhub.app/for-teachers' },
        ]}
      />
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
