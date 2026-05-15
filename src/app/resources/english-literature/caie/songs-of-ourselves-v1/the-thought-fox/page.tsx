import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction, Scale } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'The Thought-Fox — Ted Hughes | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title: 'The Thought-Fox — Ted Hughes | Cambridge IGCSE 0475',
  description:
    "Study guide for 'The Thought-Fox' by Ted Hughes (1957). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/the-thought-fox',
  },
}

export default function TheThoughtFoxPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="The Thought-Fox — Ted Hughes (Cambridge IGCSE 0475)"
        description="Study guide stub for 'The Thought-Fox' by Ted Hughes (1957). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Hughes cluster."
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
            name: 'The Thought-Fox',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/the-thought-fox',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
            <BookOpen className="size-5 text-orange-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">The Thought-Fox</h1>
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
            <em>The Thought-Fox</em> by Ted Hughes is in copyright (Estate of Ted Hughes / Faber
            &amp; Faber). The full poem cannot be reproduced on this site. Pupils should consult the
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
              <strong className="text-foreground">Poet:</strong> Ted (Edward James) Hughes &mdash;
              English poet, born Mytholmroyd, West Yorkshire, 1930; Poet Laureate from 1984 until
              his death in 1998.
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
              <strong className="text-foreground">Themes:</strong> the act of writing as the arrival
              of an animal; the relationship between imagination and the natural world; solitude and
              the writer&rsquo;s desk at midnight; precision and instinct; the animal
              &lsquo;other&rsquo; as muse.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> six quatrains; loose
              iambic line; ABAB-style rhyme that loosens and reasserts itself; the poem moves from
              blank page and silence at the start to a finished sentence on the page at the close.
              The structure enacts the poem&rsquo;s subject: the fox arrives, and so does the poem.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Verified opening</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
              &ldquo;I imagine this midnight moment&rsquo;s forest&rdquo;
            </blockquote>
            <p>
              The first line places the reader inside the speaker&rsquo;s imagination at the precise
              moment of midnight. &lsquo;Imagine&rsquo; admits the imaginative act; &lsquo;this
              midnight moment&rsquo;s forest&rsquo; binds time and place into a single possessive
              construction. The poem is about a forest the speaker has summoned into being while
              sitting alone at his desk.
            </p>
            <p>
              The famous closing turn &mdash; the page is printed; the fox has entered the head
              &mdash; converts the poem from animal sighting into ars poetica. Hughes is writing
              about writing, but he refuses to make the act of composition cerebral: it is sensory,
              prowling, animal.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <em>The Thought-Fox</em> is the most-discussed poem in Hughes&rsquo;s first book and
              one of the most famous poems about the writing process in English. The fox does not
              arrive at the desk as metaphor first &mdash; it arrives as smell, footprint, then
              form. Hughes treats inspiration as something external, alert and bodily, rather than
              internal and intellectual.
            </p>
            <p>
              The poem&rsquo;s closing transformation &mdash; the fox stepping into the head, the
              page printing, the clock ticking &mdash; is one of the great endings in 20th-century
              English poetry. The animal&rsquo;s appearance and the poem&rsquo;s appearance are the
              same event.
            </p>
            <p>
              Within the Hughes cluster, this is the &lsquo;writer&rsquo;s&rsquo; poem: cool,
              watchful, indoor. Pair it with <em>Hawk Roosting</em> (predator&rsquo;s monologue) and{' '}
              <em>Wind</em> (storm-house) to show Hughes&rsquo;s range of animal and elemental
              modes.
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
