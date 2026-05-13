import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Clock, GraduationCap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { getAllLessonPlans, getLessonPlan, type LessonPlan } from '@/lib/lesson-plans/list'
import { tMany } from '@/lib/i18n/t'

const SITE_URL = 'https://theenglishhub.app'
const LESSON_PLANS_URL = `${SITE_URL}/resources/teaching/lesson-plans`

type RouteParams = { slug: string }

type PageProps = {
  params: Promise<RouteParams>
}

export function generateStaticParams(): RouteParams[] {
  return getAllLessonPlans().map((plan) => ({ slug: plan.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const plan = getLessonPlan(slug)

  if (!plan) {
    return {
      title: 'Lesson plan not found — The English Hub',
      robots: { index: false, follow: false },
    }
  }

  const url = `${LESSON_PLANS_URL}/${plan.slug}`
  const title = `${plan.title} — Free ${plan.educationalLevel} English lesson plan`
  const description = plan.description

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'The English Hub',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function LessonPlanPage({ params }: PageProps) {
  const { slug } = await params
  const plan = getLessonPlan(slug)

  if (!plan) notFound()

  const url = `${LESSON_PLANS_URL}/${plan.slug}`

  const [bcResources, bcTeaching, bcLessonPlans, comingSoonPill, objectivesH2, tbaBody] =
    await tMany([
      'resources.teaching.lp.idx.bc.resources',
      'resources.teaching.lp.idx.bc.teaching',
      'resources.teaching.lp.detail.bc.lesson_plans',
      'resources.teaching.lp.detail.coming_soon_pill',
      'resources.teaching.lp.detail.objectives_h2',
      'resources.teaching.lp.detail.tba.body',
    ])

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Resources', url: `${SITE_URL}/resources` },
          { name: 'Teaching', url: `${SITE_URL}/resources/teaching` },
          { name: 'Lesson plans', url: LESSON_PLANS_URL },
          { name: plan.title, url },
        ]}
      />
      <LearningResourceJsonLd
        name={plan.title}
        description={plan.description}
        educationalLevel={plan.educationalLevel}
        learningResourceType="LessonPlan"
        about={plan.text}
        audienceRole="teacher"
        url={url}
        isAccessibleForFree
      />

      <article>
        <header className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/resources" className="hover:text-foreground transition-colors">
                    {bcResources}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/resources/teaching"
                    className="hover:text-foreground transition-colors"
                  >
                    {bcTeaching}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/resources/teaching/lesson-plans"
                    className="hover:text-foreground transition-colors"
                  >
                    {bcLessonPlans}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground" aria-current="page">
                  {plan.title}
                </li>
              </ol>
            </nav>

            <MetaPills plan={plan} />

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {plan.title}
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
              {plan.description}
            </p>

            {plan.status === 'coming-soon' ? (
              <p className="mt-4 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                {comingSoonPill}
              </p>
            ) : null}
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          {plan.learningObjectives.length > 0 ? (
            <section aria-labelledby="learning-objectives" className="mb-10">
              <h2
                id="learning-objectives"
                className="font-heading text-xl font-semibold tracking-tight"
              >
                {objectivesH2}
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/90">
                {plan.learningObjectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {plan.content.trim().length > 0 ? (
            <section className="prose prose-neutral max-w-none dark:prose-invert">
              <MDXRemote source={plan.content} />
            </section>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-sm text-muted-foreground">{tbaBody}</p>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 flex justify-center"></div>
        </div>
      </article>
    </main>
  )
}

function MetaPills({ plan }: { plan: LessonPlan }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
        {plan.educationalLevel}
      </span>
      {plan.examBoard ? (
        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground">
          {plan.examBoard}
        </span>
      ) : null}
      {plan.text ? (
        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground">
          {plan.text}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {plan.duration}
      </span>
      {plan.yearGroup ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          {plan.yearGroup}
        </span>
      ) : null}
    </div>
  )
}
