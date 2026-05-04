import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Lesson plan not found — The English Hub',
  robots: { index: false, follow: false },
}

export default function LessonPlanNotFound() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          404 — lesson plan not found
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          We couldn&apos;t find that lesson plan
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          The lesson plan you&apos;re looking for doesn&apos;t exist or may have moved. Browse the
          full library to find what you need.
        </p>

        <Card className="mt-8">
          <CardContent className="py-6">
            <h2 className="font-heading text-lg font-semibold">Where to next?</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/teaching/lesson-plans"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  Browse all lesson plans
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/teaching"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  Teaching resources hub
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  All resources
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Link
            href="/resources/teaching/lesson-plans"
            className={buttonVariants({ variant: 'default' })}
          >
            Back to lesson plans
          </Link>
        </div>
      </div>
    </main>
  )
}
