import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction, Scale } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'Hawk Roosting - Ted Hughes | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title: 'Hawk Roosting - Ted Hughes | Cambridge IGCSE 0475',
  description:
    "Study guide for 'Hawk Roosting' by Ted Hughes (1960). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/hawk-roosting',
  },
}

export default function HawkRoostingPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="Hawk Roosting - Ted Hughes (Cambridge IGCSE 0475)"
        description="Study guide stub for 'Hawk Roosting' by Ted Hughes (1960). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster."
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
            name: 'Hawk Roosting',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/hawk-roosting',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Hawk Roosting</h1>
            <p className="text-sm text-muted-foreground">
              Ted Hughes (1930&ndash;1998) &middot; First published 1960 in <em>Lupercal</em>
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
            <em>Hawk Roosting</em> by Ted Hughes is in copyright (Estate of Ted Hughes / Faber &amp;
            Faber). The full poem cannot be reproduced on this site. Pupils should consult the
            school-issued Cambridge anthology for the verified text.
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
              <strong className="text-foreground">Year:</strong> 1960
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong> <em>Lupercal</em>{' '}
              (Faber &amp; Faber, 1960) &mdash; Hughes&rsquo;s second collection. The book won the
              Hawthornden Prize.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> instinct and predation; the
              unselfconscious confidence of the natural world; power without conscience; the fascist
              or totalitarian reading of the hawk&rsquo;s monologue (an interpretation Hughes
              resisted but acknowledged); the indifference of nature to human moral categories.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> six four-line stanzas
              (quatrains); free verse with no fixed metre; first-person dramatic monologue spoken by
              the hawk throughout. Short, declarative sentences enact the bird&rsquo;s flat
              self-assurance; line breaks and end-stops create clipped, weighty pauses.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Verified opening</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
              &ldquo;I sit in the top of the wood, my eyes closed.&rdquo;
            </blockquote>
            <p>
              The first line of the poem. The hawk speaks in the first person. &lsquo;The top of the
              wood&rsquo; establishes hierarchical elevation; &lsquo;my eyes closed&rsquo; signals
              untroubled dominance &mdash; he does not need to look. The hawk is effortlessly at the
              apex of his world. The closed eye is also a deliberately unnerving image: power that
              does not need to watch is power that cannot be challenged.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              The dramatic monologue convention is crucial here. Hughes does not describe the hawk;
              he ventriloquises it. The reader is forced to inhabit a non-human, amoral
              consciousness for the duration of the poem. Hughes said in interview that he meant to
              give voice to a creature that had not been corrupted by human moral self-doubt &mdash;
              a clean, focused predator. Critics have read the bird as a fascist persona; Hughes
              insisted the bird was simply &lsquo;Nature thinking&rsquo;.
            </p>
            <p>
              Notice the way the hawk catalogues the world as services provided to him: the wood
              holds him, the air buoys him, the earth offers prey. The hawk experiences no doubt, no
              self-consciousness, no historical sense. The final stanza asserts a still-future of
              unchanging dominance.
            </p>
            <p>
              Within the Hughes cluster, this is the predator monologue. Pair it with{' '}
              <em>The Thought-Fox</em> (animal-as-imagination) and <em>Wind</em> (impersonal
              elemental power) to chart Hughes&rsquo;s shifting modes of writing about non-human
              force.
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
            A full annotated reading with stanza-by-stanza commentary, the fascism debate, and
            AO-tagged essay plans is in production. Because the poem is in copyright, the on-site
            reading is structured around short fair-dealing quotation rather than full reproduction.
            The verified text lives in your Cambridge anthology.
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
