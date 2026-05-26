import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Lesson plan not found - The English Hub',
  robots: { index: false, follow: false },
}

export default async function LessonPlanNotFound() {
  const [eyebrow, title, body, whereNext, browseAll, teachingHub, allResources, back] = await tMany(
    [
      'not_found.lesson_plan.eyebrow',
      'not_found.lesson_plan.title',
      'not_found.lesson_plan.body',
      'not_found.lesson_plan.where_next',
      'not_found.lesson_plan.browse_all',
      'not_found.lesson_plan.teaching_hub',
      'not_found.lesson_plan.all_resources',
      'not_found.lesson_plan.back',
    ],
  )

  return (
    <main className="min-h-screen px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{body}</p>

        <Card className="mt-8">
          <CardContent className="py-6">
            <h2 className="font-heading text-lg font-semibold">{whereNext}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/teaching/lesson-plans"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  {browseAll}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/teaching"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  {teachingHub}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                >
                  {allResources}
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
            {back}
          </Link>
        </div>
      </div>
    </main>
  )
}
