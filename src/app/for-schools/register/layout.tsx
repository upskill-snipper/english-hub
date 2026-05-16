import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Book a call to discuss the Founding Schools Programme. Tailored pricing, priority onboarding, and full platform access for your school.',
  alternates: { canonical: 'https://theenglishhub.app/for-schools/register' },
  openGraph: {
    title: 'Book a Call | The English Hub for Schools',
    description:
      'Founding Schools Programme: book a call to discuss tailored pricing for your department.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            The English Hub
          </Link>
          <Link href="/for-schools" className="text-sm text-muted-foreground hover:text-foreground">
            &larr; Back to school plans
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}
