import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction, Scale } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Wind — Ted Hughes | Cambridge IGCSE 0475',
  description:
    "Study guide for 'Wind' by Ted Hughes (1957). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/wind',
  },
}

export default function WindPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="Wind — Ted Hughes (Cambridge IGCSE 0475)"
        description="Study guide stub for 'Wind' by Ted Hughes (1957). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster."
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
            name: 'Wind',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/wind',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10">
            <BookOpen className="size-5 text-sky-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Wind</h1>
            <p className="text-sm text-muted-foreground">
              Ted Hughes (1930&ndash;1998) &middot; First published 1957 in{' '}
              <em>The Hawk in the Rain</em>
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Cambridge IGCSE 0475
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Hughes cluster
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                In copyright (Faber)
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
            <em>Wind</em> by Ted Hughes is in copyright (Estate of Ted Hughes / Faber &amp; Faber).
            The full poem cannot be reproduced on this site. Pupils should consult the school-issued
            Cambridge anthology for the verified text.
          </p>
          <p>
            Short quotations on this page are fair-dealing extracts used for criticism and review
            under UK CDPA s.30.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">At a glance</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Poet:</strong> Ted Hughes &mdash; English poet,
              born Mytholmroyd, West Yorkshire, 1930; Poet Laureate from 1984 until his death in
              1998.
            </p>
            <p>
              <strong className="text-foreground">Year:</strong> 1957
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong>{' '}
              <em>The Hawk in the Rain</em> (Faber &amp; Faber, 1957) &mdash; Hughes&rsquo;s debut
              collection.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> elemental power and human
              fragility; the house under siege from weather; the smallness of human relationships
              compared with nature; fear, endurance and isolation; the Yorkshire moorland landscape
              that shaped Hughes&rsquo;s imagination.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> six quatrains; loose
              iambic pentameter; ABBA rhyme scheme that loosens to half-rhyme and pararhyme. The
              poem moves from the house at night, through morning, into a description of the
              wind&rsquo;s violent action, and ends with two human figures sitting by a fire, unable
              to speak. The form holds &mdash; just &mdash; while everything inside it is being
              battered.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Verified opening</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
              &ldquo;This house has been far out at sea all night&rdquo;
            </blockquote>
            <p>
              The first line is one of Hughes&rsquo;s most famous extended metaphors. The static
              house is recast as a ship in heavy weather: it has been &lsquo;far out at sea&rsquo;
              for the duration of the night. The simple, declarative sentence forces the reader to
              accept the metaphor as a stated fact rather than as an image. The night becomes a
              voyage; the house, a vessel; the wind, an ocean.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <em>Wind</em> is rooted in Hughes&rsquo;s Yorkshire moorland landscape. The poem
              dramatises a remote farmhouse battered by a gale: branches break, hills booming,
              fields strain, and eventually the speaker and a companion sit immobilised at the
              fireside. The wind is the dominant agent throughout; the human figures are passive,
              almost reduced to the level of objects in a domestic scene that has been overwhelmed.
            </p>
            <p>
              The closing stanzas often surprise students: there is no relief, no sunrise, no calm.
              The poem ends with the two figures in silent endurance, watching the fire, unable to
              read or speak. Hughes refuses consolation. The wind&rsquo;s power has not abated; it
              has merely become the new condition of their lives.
            </p>
            <p>
              Within the Hughes cluster, this is the elemental poem. Pair it with{' '}
              <em>Hawk Roosting</em> (predator&rsquo;s monologue) and <em>The Thought-Fox</em>{' '}
              (animal-as-imagination) to study how Hughes positions human beings in relation to
              natural forces that exceed and ignore them.
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
            A full annotated reading with stanza-by-stanza commentary, comparison paragraphs across
            the Hughes cluster, and AO-tagged essay plans is in production. Because the poem is in
            copyright, the on-site reading is structured around short fair-dealing quotation rather
            than full reproduction. The verified text lives in your Cambridge anthology.
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Source attribution</CardTitle>
          <CardDescription>
            Cambridge IGCSE 0475 Songs of Ourselves Vol 1 (Hughes cluster)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          <p>
            Anthology publisher: Cambridge University Press. The poem is in copyright to the Estate
            of Ted Hughes / Faber &amp; Faber. Permissions queries: cambridge.org/permissions and
            faber.co.uk/permissions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
