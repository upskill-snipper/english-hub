import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction, Scale } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'The City Planners - Margaret Atwood | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title: 'The City Planners - Margaret Atwood | Cambridge IGCSE 0475',
  description:
    "Study guide for 'The City Planners' by Margaret Atwood. Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/the-city-planners',
  },
}

export default function TheCityPlannersPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="The City Planners - Margaret Atwood (Cambridge IGCSE 0475)"
        description="Study guide stub for 'The City Planners' by Margaret Atwood. Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          {
            name: 'English Literature',
            url: 'https://theenglishhub.app/resources/english-literature',
          },
          {
            name: 'Cambridge IGCSE',
            url: 'https://theenglishhub.app/resources/english-literature/caie',
          },
          {
            name: 'Songs of Ourselves Vol 1',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1',
          },
          {
            name: 'The City Planners',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/the-city-planners',
          },
        ]}
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/resources/english-literature/caie/songs-of-ourselves-v1" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Songs of Ourselves Vol 1
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">The City Planners</h1>
            <p className="text-sm text-muted-foreground">
              Margaret Atwood (1939&ndash; ) &middot; First published 1966 in{' '}
              <em>The Circle Game</em>
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Cambridge IGCSE 0475
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Songs of Ourselves Vol 1 Part 4
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                In copyright
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Card className="border-blue-500/40 bg-blue-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
              <Scale className="size-5 text-blue-700" />
            </div>
            <CardTitle className="text-base">UK rights notice</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <em>The City Planners</em> by Margaret Atwood is in copyright. The poem is reproduced
            under licence in the Cambridge anthology and cannot be reproduced in full on this site.
            Pupils should consult the school-issued anthology for the verified poem text.
          </p>
          <p>
            Quotations on this page are short fair-dealing extracts used for criticism and review
            under UK CDPA s.30, where included.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">At a glance</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Poet:</strong> Margaret Atwood (Canadian; b. 1939)
            </p>
            <p>
              <strong className="text-foreground">Year:</strong> 1966
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong>{' '}
              <em>The Circle Game</em> (Contact Press, Toronto, 1966)
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> the artificiality of suburbia;
              conformity and order; the unease beneath surface respectability; nature versus
              planning; entropy and decay.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> free verse; uneven
              stanzas; a build from observed detail (neat houses, mown lawns) toward a more uneasy,
              prophetic close that imagines the suburb&rsquo;s eventual collapse.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              Atwood positions a watchful speaker observing a Sunday-afternoon suburb. The
              vocabulary of order &mdash; sanitary, levelled, planned &mdash; sits against small
              disquieting details that suggest cracks in the facade. The poem belongs to
              Atwood&rsquo;s broader ecological and political concern with North-American consumer
              modernity.
            </p>
            <p>
              When comparing in Paper 1, this poem pairs effectively with <em>The Planners</em> by
              Boey Kim Cheng (also CAIE) on urbanisation and erasure of the natural world.
            </p>
          </CardContent>
        </Card>
      </section>

      <Card className="border-amber-500/40 bg-amber-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
              <Construction className="size-5 text-amber-700" />
            </div>
            <CardTitle className="text-base">Full study guide in production</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            We are writing a full annotated study guide for this poem. Because the text is in
            copyright (Margaret Atwood / Oxford University Press anthology licence), the on-site
            analysis will be built around short fair-dealing extracts and structural commentary
            rather than a full reproduction.
          </p>
          <p>
            Current Cambridge syllabus is <strong className="text-foreground">0475</strong>. Always
            confirm the active set list at{' '}
            <a
              href="https://www.cambridgeinternational.org/syllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridgeinternational.org
            </a>
            .
          </p>
          <p className="pt-2">
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/resources/english-literature/caie/songs-of-ourselves-v1" />}
            >
              Back to anthology overview
            </Button>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Source attribution</CardTitle>
          <CardDescription>Cambridge IGCSE 0475 Songs of Ourselves Vol 1 Part 4</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          <p>
            Anthology publisher: Cambridge University Press. The poem is in copyright to Margaret
            Atwood / her literary estate. Permissions queries: cambridge.org/permissions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
