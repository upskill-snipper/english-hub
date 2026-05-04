import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, GraduationCap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { getAllLessonPlans, type LessonPlan } from '@/lib/lesson-plans/list'

const PAGE_URL = 'https://theenglishhub.app/resources/teaching/lesson-plans'
const PAGE_TITLE = 'Free GCSE & IGCSE English lesson plans — The English Hub'
const PAGE_DESCRIPTION =
  'Free, classroom-ready lesson plans for GCSE and IGCSE English. Learning objectives, activities, and timings teachers can pick up and teach.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: 'The English Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

export default function LessonPlansIndexPage() {
  const lessonPlans = getAllLessonPlans()

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          { name: 'Teaching', url: 'https://theenglishhub.app/resources/teaching' },
          { name: 'Lesson plans', url: PAGE_URL },
        ]}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/resources/teaching"
                  className="hover:text-foreground transition-colors"
                >
                  Teaching
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">
                Lesson plans
              </li>
            </ol>
          </nav>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Free lesson plans for GCSE & IGCSE English
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Classroom-ready plans with learning objectives, activities, and timings. Pick a plan,
            tweak it for your class, teach it tomorrow.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {lessonPlans.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lessonPlans.map((plan) => (
              <li key={plan.slug}>
                <LessonPlanCard plan={plan} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

function LessonPlanCard({ plan }: { plan: LessonPlan }) {
  const isComingSoon = plan.status === 'coming-soon'
  const href = `/resources/teaching/lesson-plans/${plan.slug}`

  const inner = (
    <Card className="h-full transition-all group-hover:border-primary/40 group-hover:shadow-md">
      <CardContent className="flex h-full flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {plan.educationalLevel}
          </span>
          {plan.examBoard ? (
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {plan.examBoard}
            </span>
          ) : null}
          {isComingSoon ? (
            <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              Coming soon
            </span>
          ) : null}
        </div>

        <h2 className="font-heading text-lg font-semibold leading-tight tracking-tight">
          {plan.title}
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{plan.excerpt}</p>

        <dl className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Duration</dt>
            <dd>{plan.duration}</dd>
          </div>
          {plan.yearGroup ? (
            <div className="inline-flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              <dt className="sr-only">Year group</dt>
              <dd>{plan.yearGroup}</dd>
            </div>
          ) : null}
          {plan.text ? (
            <div className="inline-flex items-center">
              <dt className="sr-only">Text</dt>
              <dd className="font-medium">{plan.text}</dd>
            </div>
          ) : null}
        </dl>
      </CardContent>
    </Card>
  )

  if (isComingSoon) {
    return (
      <div className="group block h-full opacity-70" aria-disabled="true">
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {inner}
    </Link>
  )
}

function EmptyState() {
  return (
    <Card>
      <CardContent className="py-10 text-center">
        <h2 className="font-heading text-lg font-semibold">Lesson plans are on the way</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;re publishing free, classroom-ready plans for GCSE and IGCSE English. Check back
          soon.
        </p>
      </CardContent>
    </Card>
  )
}
