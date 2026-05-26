import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'He Never Expected Much - Thomas Hardy | Cambridge IGCSE 0475',
    description: 'Study guide for ',
  },
  title: 'He Never Expected Much - Thomas Hardy | Cambridge IGCSE 0475',
  description:
    "Study guide for 'He Never Expected Much' by Thomas Hardy (1928). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/he-never-expected-much',
  },
}

export default function HeNeverExpectedMuchPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="He Never Expected Much - Thomas Hardy (Cambridge IGCSE 0475)"
        description="Study guide stub for 'He Never Expected Much' by Thomas Hardy (1928). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4."
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
            name: 'He Never Expected Much',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/he-never-expected-much',
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-stone-500/10">
            <BookOpen className="size-5 text-stone-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              He Never Expected Much
            </h1>
            <p className="text-sm text-muted-foreground">
              Thomas Hardy (1840&ndash;1928) &middot; Subtitle:{' '}
              <em>or, A Consideration on My Eighty-Sixth Birthday</em>
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
              <strong className="text-foreground">Poet:</strong> Thomas Hardy &mdash; English
              novelist and poet, born Higher Bockhampton, Dorset, 1840; died Max Gate, Dorchester,
              11 January 1928.
            </p>
            <p>
              <strong className="text-foreground">Year:</strong> Drafted around Hardy&rsquo;s 86th
              birthday (June 1926); first published 1928.
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong>{' '}
              <em>Winter Words in Various Moods and Metres</em> (Macmillan, October 1928), the
              posthumous collection prepared by Hardy in his final months.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> stoicism and acceptance; modest
              expectations as a defence against disappointment; old age and looking back; the
              address of the World as a personified figure; the consoling power of low expectations.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> three stanzas, each
              combining a short opening &lsquo;Well&rsquo; line of address with a longer pentameter
              passage. The World speaks to the speaker as a child, repeatedly counselling him not to
              expect too much. Strict end-rhyme in each stanza; ballad-like simplicity that suits
              the conversational frame.
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
                &ldquo;Well, World, you have kept faith with me&rdquo;
              </blockquote>
              <p className="mt-2">
                The opening line. Hardy addresses the World directly as a companion he has known all
                his life. &lsquo;Kept faith&rsquo; is the language of human relationship and
                contract &mdash; the speaker treats the World as a friend who has lived up to its
                promises, low as those promises were.
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;Twas then you said, and since have said&hellip;&rdquo;
              </blockquote>
              <p className="mt-2">
                The World&rsquo;s message is recurrent &mdash; not a single lesson but a pattern of
                warnings the speaker has heard since childhood. The repetition of the message
                reinforces the stoical, quiet wisdom of the poem.
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;Just neutral-tinted haps and such&rdquo;
              </blockquote>
              <p className="mt-2">
                A characteristic Hardy phrase. &lsquo;Neutral-tinted haps&rsquo; &mdash; events of
                no special colour, neither tragic nor joyous. The line shrinks the World&rsquo;s
                offerings to a careful, modest middle range, which is exactly what the speaker says
                he was promised and (importantly) did receive.
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
                &ldquo;Take what is given me here&rdquo;
              </blockquote>
              <p className="mt-2">
                The speaker&rsquo;s acquiescence. He accepts the modest gifts of the World rather
                than rage at what was withheld. The line summarises Hardy&rsquo;s late, hard-won
                philosophy: a low bar makes for a quieter life.
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
              Hardy wrote this poem near the end of his life. By 1926 he was in his mid-eighties,
              living quietly at Max Gate with his second wife Florence. He had outlived most of his
              contemporaries, his first wife Emma, and the Victorian world that produced him.
              <em>Winter Words</em> is full of valedictory poems; this is one of the gentlest.
            </p>
            <p>
              The personification of the World is at the heart of the poem: the World is given a
              voice, a memory of past statements, and a steady, parental tone. Hardy converts an
              abstract pessimism (life will disappoint) into a domestic conversation between old
              friends who have come to accept each other&rsquo;s limits.
            </p>
            <p>
              Pairs effectively with: Edward Thomas&rsquo;s <em>Rain</em> (also stoic mortality);
              Tennyson Turner&rsquo;s <em>On Finding a Small Fly Crushed in a Book</em> (small
              creatures, small consolations); and Auden&rsquo;s <em>Funeral Blues</em> for a
              contrasting refusal to accept disappointment with equanimity.
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
            A line-by-line annotated reading with full PD text and AO-tagged essay plans is in
            production. Current Cambridge syllabus is{' '}
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
            <em>He Never Expected Much</em> by Thomas Hardy (1928) is in the public domain (Hardy
            died January 1928; UK PD since 1999). Source for verification: <em>Winter Words</em>{' '}
            first edition / Wikisource. Anthology publisher: Cambridge University Press. Reproduced
            freely for educational use.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
