import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, AlertTriangle, Info, BookOpen } from 'lucide-react'

import { SET_TEXTS, getSetText } from '@/lib/board/set-texts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StubStudyGuide } from '../../../texts/_components/stub-study-guide'

type Params = { slug: string }

const PEARSON_POEM_SLUGS = new Set(
  SET_TEXTS.filter(
    (t) => t.category === 'poetry-anthology' && t.boards.includes('edexcel-igcse-lang'),
  ).map((t) => t.slug),
)

export function generateStaticParams() {
  return Array.from(PEARSON_POEM_SLUGS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const text = getSetText(slug)
  if (!text) {
    return {
      title: 'Poem Not Found | The English Hub',
      description: 'The poem you are looking for could not be found.',
    }
  }
  return {
    title: `${text.title} — ${text.author} | Pearson IGCSE Poetry | The English Hub`,
    description: `Study notes for ${text.title} by ${text.author}. Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.`,
    alternates: {
      canonical: `https://theenglishhub.app/revision/poetry/pearson-igcse/${text.slug}`,
    },
  }
}

export default async function PearsonIgcsePoemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  if (!PEARSON_POEM_SLUGS.has(slug)) notFound()

  const text = getSetText(slug)
  if (!text) notFound()

  if (slug === 'the-bright-lights-of-sarajevo') {
    return <BrightLightsOfSarajevoStudyGuide />
  }

  return (
    <StubStudyGuide
      text={text}
      backHref="/revision/poetry/pearson-igcse"
      backLabel="Back to Pearson IGCSE Poetry"
    />
  )
}

/**
 * Dedicated study-guide page for Tony Harrison's "The Bright Lights of Sarajevo".
 *
 * Verified-content notes covered here:
 *  - Edexcel IGCSE Anthology Issue 2 prints extra stanza breaks not in the
 *    1995 Guardian text or the Bloodaxe collected edition. Students must
 *    revise from the anthology layout, not the original.
 *  - Bosnian War / Siege of Sarajevo (1992-95) historical context.
 *  - Bloodaxe Books rights notice for the poem.
 */
function BrightLightsOfSarajevoStudyGuide() {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/poetry/pearson-igcse" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Pearson IGCSE Poetry
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Poetry Anthology</Badge>
            <Badge variant="outline" className="text-muted-foreground">
              1995
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Edexcel IGCSE Language A (4EA1)
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Anthology Issue 2
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            The Bright Lights of Sarajevo
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">by Tony Harrison</p>

          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Harrison reports from besieged Sarajevo, where young couples flirt in the dark streets
            between sniper fire and shell craters — the persistence of ordinary life inside war.
            First published in <em>The Guardian</em> in 1995 while Harrison was working as a war
            correspondent.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {['War', 'Resilience', 'Love', 'Hope'].map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Critical anthology-version note */}
      <Card className="border-amber-500/40 bg-amber-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
              <AlertTriangle className="size-5 text-clay-600" />
            </div>
            <CardTitle className="text-heading-md font-heading">
              Anthology version — read this before discussing structure
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Anthology version:</strong> The Edexcel IGCSE
            Anthology <strong className="text-foreground">Issue 2</strong> prints this poem with{' '}
            <strong className="text-foreground">additional stanza breaks</strong> not present in
            Harrison&rsquo;s original 1995 <em>Guardian</em> publication or the Bloodaxe collected
            edition. Students preparing for Edexcel must use the{' '}
            <strong className="text-foreground">anthology layout</strong> when discussing structure
            — not the original layout (often reproduced online).
          </p>
          <p>
            If you compare a copy of the poem you have found online (or in an earlier Bloodaxe
            collection) with the Edexcel anthology, the line content will match but the{' '}
            <strong className="text-foreground">stanza breaks will not</strong>. Always quote line
            numbers and stanza positions from the anthology, and describe the structural effects
            (pause, white space, shifts of focus) using the breaks as the anthology prints them.
          </p>
        </CardContent>
      </Card>

      {/* Historical context */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
              <Info className="size-5 text-blue-700" />
            </div>
            <CardTitle className="text-heading-md font-heading">Historical context</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Siege of Sarajevo (1992-95):</strong> The poem is
            set during the longest siege of a capital city in modern warfare. After Bosnia and
            Herzegovina declared independence from the disintegrating Yugoslavia in 1992, the
            Bosnian Serb Army surrounded Sarajevo and bombarded it with artillery and sniper fire
            from the surrounding hills for nearly four years. Around 11,000 people were killed,
            including more than 1,500 children. Civilians queued for bread and water under fire;
            shell craters in the pavement (later filled with red resin and known as{' '}
            <em>Sarajevo Roses</em>) marked where mortar rounds had killed people.
          </p>
          <p>
            <strong className="text-foreground">Harrison as war correspondent:</strong> Tony
            Harrison (born 1937, Leeds) was sent to Sarajevo by <em>The Guardian</em> in 1995 to
            write poems as journalism, dispatched directly from the front. &ldquo;The Bright Lights
            of Sarajevo&rdquo; appeared in the paper alongside news copy. The poem deliberately
            blends reportage with lyric: the speaker has clearly walked the streets he describes,
            stepping over the same shell holes and watching the same young couples meeting in the
            blackout.
          </p>
        </CardContent>
      </Card>

      {/* Form & structure (Issue-2-aware) */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <BookOpen className="size-5 text-violet-700" />
            </div>
            <CardTitle className="text-heading-md font-heading">Form and structure</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            The poem is written in <strong className="text-foreground">rhyming couplets</strong>{' '}
            (largely loose iambic pentameter), giving the verse a steady, walking rhythm that
            mirrors the speaker&rsquo;s movement through the streets. The couplets sit awkwardly
            against the brutal subject matter — a reminder that Harrison wants the music of the poem
            to feel almost out of place in a war zone, the way the young couples themselves are.
          </p>
          <p>
            <strong className="text-foreground">Stanza layout:</strong> Use the{' '}
            <strong className="text-foreground">Edexcel Anthology Issue 2</strong> printing as your
            reference text. The anthology layout introduces stanza breaks that the original{' '}
            <em>Guardian</em> and earlier Bloodaxe printings do not have, so structural points
            (where a section ends, where the focus shifts from queueing for bread to the couples in
            the square, where the speaker pulls back to the stars) should be made against the
            anthology breaks. Do <strong className="text-foreground">not</strong> describe the poem
            as a single continuous block — the version you are examined on is segmented.
          </p>
          <p>
            Key structural effects to notice in the anthology layout: the shift from the daytime
            queues and shell-craters to the night-time meeting between the young man and woman; the
            way the white space between stanzas slows the reader before Harrison returns to the
            stars and the couple looking up; and the closing couplet&rsquo;s quiet hopefulness after
            the violence catalogued earlier.
          </p>
        </CardContent>
      </Card>

      {/* Rights notice */}
      <Card className="border-border/60 bg-muted/30">
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">Rights and attribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-body-xs text-muted-foreground">
          <p>
            &ldquo;The Bright Lights of Sarajevo&rdquo; by Tony Harrison was first published in{' '}
            <em>The Guardian</em> in 1995 and is collected in Harrison&rsquo;s work published by{' '}
            <strong className="text-foreground">Bloodaxe Books</strong>, who hold the rights. The
            poem is reproduced in the Edexcel IGCSE Anthology Issue 2 under licence. The English Hub
            does not reproduce the full text of the poem; quotation here is for the purposes of
            criticism and study only. Students should work from a licensed copy of the Edexcel
            anthology.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
