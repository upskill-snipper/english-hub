import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title:
      'On Finding a Small Fly Crushed in a Book - Charles Tennyson Turner | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title:
    'On Finding a Small Fly Crushed in a Book - Charles Tennyson Turner | Cambridge IGCSE 0475',
  description:
    "Study guide for 'On Finding a Small Fly Crushed in a Book' by Charles Tennyson Turner (1873). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/on-finding-a-small-fly-crushed-in-a-book',
  },
}

export default function OnFindingASmallFlyCrushedInABookPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="On Finding a Small Fly Crushed in a Book - Charles Tennyson Turner (Cambridge IGCSE 0475)"
        description="Study guide stub for 'On Finding a Small Fly Crushed in a Book' by Charles Tennyson Turner (1873). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4."
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
            name: 'On Finding a Small Fly Crushed in a Book',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/on-finding-a-small-fly-crushed-in-a-book',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-yellow-500/10">
            <BookOpen className="size-5 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              On Finding a Small Fly Crushed in a Book
            </h1>
            <p className="text-sm text-muted-foreground">
              Charles Tennyson Turner (1808&ndash;1879) &middot; First published 1873
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Cambridge IGCSE 0475
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Songs of Ourselves Vol 1 Part 4
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Public domain
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">At a glance</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Poet:</strong> Charles Tennyson Turner &mdash;
              English clergyman and sonneteer; born Somersby, Lincolnshire, 1808; died 1879. The
              elder brother of Alfred, Lord Tennyson, whose fame eclipsed his own throughout his
              lifetime.
            </p>
            <p>
              <strong className="text-foreground">Year:</strong> 1873
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong>{' '}
              <em>Sonnets, Lyrics and Translations</em> (Henry S. King &amp; Co., 1873). Turner
              published several hundred sonnets across his career, almost exclusively in this form.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> the accidental cruelty of human
              carelessness; the smallness of an insect&rsquo;s life weighed against the longevity of
              the printed page; the &lsquo;tomb&rsquo; of the book as both grave and memorial;
              meditation, conscience, and minor guilt; the Victorian taste for finding moral lessons
              in nature.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> a single 14-line
              Petrarchan sonnet. Octave-sestet division; iambic pentameter; a moral / reflective
              volta after the eighth line that turns from the discovery of the dead fly to the
              speaker&rsquo;s consideration of its strange immortality between the leaves.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              Turner specialised in the small Victorian observational sonnet: a fly, a swallow, a
              country churchyard, a frosted hedge. His poems often turn on a quietly comic premise
              &mdash; here, the accident of finding an insect that has been preserved between the
              pages of a book &mdash; and ask the reader to think harder about it than the situation
              seems to warrant. The sonnet uses a mock-tomb image: the book is the fly&rsquo;s
              sarcophagus, the printed page its monument.
            </p>
            <p>
              The poem&rsquo;s gentle conscience is characteristic of Turner. Where Tennyson reaches
              for grand mythic statement, Turner prefers the modest occasion: a small life, a small
              grief, a small reflection. This makes the poem an unusually effective comparison piece
              for Cambridge candidates, who can use it as a counterpoint to bigger-canvas anthology
              poems.
            </p>
            <p>
              Pairs effectively with: Hardy&rsquo;s <em>He Never Expected Much</em> (also low-key,
              modest stoicism); Hughes&rsquo;s <em>Hawk Roosting</em> (contrast: the hawk&rsquo;s
              casual cruelty vs. the human&rsquo;s accidental cruelty); and Atwood&rsquo;s{' '}
              <em>The City Planners</em> (small disquiet within an apparently ordered world).
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
            A line-by-line annotated reading with verified PD text, comparison paragraphs and
            AO-tagged essay plans is in production. Current Cambridge syllabus is{' '}
            <strong className="text-foreground">0475</strong>. Always confirm the active set list at{' '}
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Source attribution</CardTitle>
          <CardDescription>Cambridge IGCSE 0475 Songs of Ourselves Vol 1 Part 4</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          <p>
            <em>On Finding a Small Fly Crushed in a Book</em> by Charles Tennyson Turner (1873) is
            in the public domain (Turner died 1879; UK PD since 1950). Source for verification:{' '}
            <em>Sonnets, Lyrics and Translations</em> first edition / Wikisource. Anthology
            publisher: Cambridge University Press. Reproduced freely for educational use.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
