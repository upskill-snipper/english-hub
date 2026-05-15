import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'Rain — Edward Thomas | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title: 'Rain — Edward Thomas | Cambridge IGCSE 0475',
  description:
    "Study guide for 'Rain' by Edward Thomas (1916). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/rain',
  },
}

export default function RainPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="Rain — Edward Thomas (Cambridge IGCSE 0475)"
        description="Study guide stub for 'Rain' by Edward Thomas (1916). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4."
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
            name: 'Rain',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/rain',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <BookOpen className="size-5 text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Rain</h1>
            <p className="text-sm text-muted-foreground">
              Edward Thomas (1878&ndash;1917) &middot; Written 7 January 1916
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
              <strong className="text-foreground">Poet:</strong> Edward Thomas &mdash; English; born
              London 1878, killed at the Battle of Arras, 9 April 1917.
            </p>
            <p>
              <strong className="text-foreground">Written:</strong> 7 January 1916, while Thomas was
              training with the Artists Rifles at Hare Hall Camp.
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong> <em>Poems</em> by
              Edward Thomas (Selwyn &amp; Blount, 1917) under the pseudonym &lsquo;Edward
              Eastaway&rsquo;.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> isolation and solitude;
              foreboding and the closeness of death; the indifference of nature; the soldier&rsquo;s
              premonition; the dissolution of the self through love and loss.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> an 18-line
              single-stanza meditation in unrhymed iambic pentameter (blank verse). The lack of
              stanza breaks and the insistent repetition of &lsquo;rain&rsquo; create a continuous,
              sleepless rhythm.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Verified key quotations</h2>
        <Card>
          <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;Rain, midnight rain, nothing but the wild rain&rdquo;
              </blockquote>
              <p className="mt-2">
                The opening line. The triple repetition of &lsquo;rain&rsquo; surrounds the speaker;
                the rain is everything. &lsquo;Wild&rsquo; personifies the storm into something
                ungoverned. The line is self-enclosing &mdash; rain begins it, rain ends it &mdash;
                enacting the speaker&rsquo;s entrapment.
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;the bleak hut, and solitude, and me&rdquo;
              </blockquote>
              <p className="mt-2">
                The catalogue moves from external setting (the hut) to internal state (solitude) to
                identity (me). The flat conjunction &lsquo;and&rsquo; reduces the speaker to an item
                in a list, hinting at his sense of dissolution.
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;Remembering again that I shall die&rdquo;
              </blockquote>
              <p className="mt-2">
                A devastatingly direct statement of mortality. &lsquo;Again&rsquo; tells us this is
                not a new thought but a recurring one &mdash; the rain has triggered it before.
                Thomas would be killed in action in April 1917, fifteen months after the poem was
                written.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              Thomas wrote <em>Rain</em> at Hare Hall in Essex during officer training. He had
              volunteered in 1915 despite being thirty-seven, married, and a father; the poem
              captures the night-time foreboding of a man preparing for a war he expected not to
              survive. The hut, the solitude and the rain all belong to a real biographical moment,
              but Thomas refuses to specify the war &mdash; the poem speaks more broadly about
              mortality and sleeplessness.
            </p>
            <p>
              The famous final movement contemplates a love &lsquo;perfect and disappointing&rsquo;,
              in which the speaker recognises that he loves nothing now &mdash; an icy, almost
              mystical state of detachment. Critics often link the poem to Thomas&rsquo;s difficult
              marriage to Helen Thomas and to his broader psychological struggle with depression.
            </p>
            <p>
              Pairs effectively with Wilfred Owen&rsquo;s <em>Exposure</em> (also weather-as-enemy,
              also WWI), Hardy&rsquo;s <em>He Never Expected Much</em> (also stoic mortality), and
              Auden&rsquo;s <em>Funeral Blues</em> (the pull between private grief and the
              indifferent natural world).
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
            A line-by-line annotated reading with full PD text, comparison paragraph templates, and
            AO-tagged exam-style essay plans is in production. Current Cambridge syllabus is{' '}
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
            <em>Rain</em> by Edward Thomas (1916) is in the public domain (Thomas died 1917; UK PD
            since 1988). Source for verification: Project Gutenberg / Wikisource. Anthology
            publisher: Cambridge University Press. Reproduced freely for educational use.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
