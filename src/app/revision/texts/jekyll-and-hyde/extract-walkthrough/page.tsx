'use client'

import Link from 'next/link'
import { ArrowLeft, Eye, MessageSquareQuote, Telescope, BookOpen } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

/* ─── Extract chunks (public domain - Stevenson, 1886) ─────────────────────
 * Source: The Strange Case of Dr Jekyll and Mr Hyde, Chapter 1
 * "Story of the Door" - Enfield's recollection to Utterson.
 * Quoted in full; the novella has been in the public domain for over a century.
 * ────────────────────────────────────────────────────────────────────────── */

type Chunk = {
  id: string
  text: string
  notice: string
  say: string
  zoomOut: string
}

const CHUNKS: Chunk[] = [
  {
    id: 'chunk-1',
    // VERIFIED: Gutenberg #43, Ch.1 "Story of the Door" - Enfield's narration.
    // Opening clause restored; "Street after street and all the folks asleep" has no comma in Stevenson.
    text: '"I was coming home from some place at the end of the world, about three o\'clock of a black winter morning, and my way lay through a part of town where there was literally nothing to be seen but lamps. Street after street and all the folks asleep - street after street, all lighted up as if for a procession and all as empty as a church - till at last I got into that state of mind when a man listens and listens and begins to long for the sight of a policeman."',
    notice:
      'Gothic atmosphere is established before any human appears. The colour adjective "black" fuses winter, morning and moral darkness; the anaphoric "street after street" mimics weary footfall and an unending labyrinth. The simile "empty as a church" is doubly loaded - the church is the seat of Victorian morality, yet here it stands deserted, a hollow icon. Stevenson primes us for transgression by removing every witness.',
    say: 'Stevenson exploits the "small hours" - the fin-de-siècle Gothic\'s favourite chronotope - to suspend the social codes that normally restrain the bourgeois subject. The "lamps", emblems of urban progress, are reduced to ornament: light without sight. The longing for "a policeman" registers a pre-emptive moral panic; Enfield senses, before the event, that the deserted street has become a moral vacuum in which something repressed is about to surface.',
    zoomOut:
      "This deserted-streets opening exemplifies the urban Gothic relocation that defines late-Victorian fiction (compare Stoker, Wilde, Machen). Civilisation's infrastructure is intact - pavements, gas-lamps, churches - but its supervisory gaze has gone home to bed. That ungoverned interval is precisely where Hyde, the unsupervised id, can do his work.",
  },
  {
    id: 'chunk-2',
    // VERIFIED: Gutenberg #43, Ch.1 "Story of the Door" - Enfield's narration.
    text: '"All at once, I saw two figures: one a little man who was stumping along eastward at a good walk, and the other a girl of maybe eight or ten who was running as hard as she was able down a cross street. Well, sir, the two ran into one another naturally enough at the corner; and then came the horrible part of the thing; for the man trampled calmly over the child\'s body and left her screaming on the ground."',
    notice:
      'The composition is deliberately cinematic: two perpendicular lines of motion converge at "the corner". The collision is excused as "naturally enough" - but what follows is unnatural. The verb "trampled" is the centre of gravity: it does not denote a stumble or a push, it denotes the deliberate downward force of a foot upon a body, repeated. Worse, it is governed by the adverb "calmly". The juxtaposition of violent verb and serene adverb produces moral whiplash.',
    say: 'Stevenson stages a sacrificial tableau: an adult male crushes a female child whose only fault is to "run as hard as she was able" - that is, to be alive and in motion. The adverb "calmly" is the most damning word in the sentence; it tells us Hyde acts without affect, without conscience, without the moral interrupt that a normally socialised human carries inside them. "Screaming on the ground" leaves her at floor-level, dehumanised by Hyde\'s indifference.',
    zoomOut:
      'The trampling is the novella\'s primal scene of the id\'s relation to the social: Hyde does not negotiate with the child, he overrides her. Read alongside Jekyll\'s later "Statement", the corner becomes a microcosm of the whole moral architecture Stevenson is critiquing - a society in which respectable men carry, in their unsupervised "second self", an appetite for harm so pure it can walk right over a child without breaking stride.',
  },
  {
    id: 'chunk-3',
    // VERIFIED: Gutenberg #43, Ch.1 "Story of the Door" - Enfield's narration. "damned" lower-case, "Juggernaut" capitalised.
    text: '"It sounds nothing to hear, but it was hellish to see. It wasn\'t like a man; it was like some damned Juggernaut."',
    notice:
      'Enfield\'s speech collapses into negation. "Sounds nothing… hellish to see" is a deliberate failure of language - as elsewhere in the novella, Hyde resists description and witnesses fall back on simile. "It wasn\'t like a man" performs a literal dehumanisation in real time. The shift from "man" to "Juggernaut" is the key transformation: a noun denoting a human person is replaced by a noun denoting an unstoppable, crushing thing.',
    say: 'The "Juggernaut" simile is a piece of imperial vocabulary - the word entered English from accounts of the festival of Jagannath in Puri, where the chariot of the deity was rumoured (in colonial reportage) to crush devotees beneath its wheels. Stevenson is borrowing the empire\'s own myth of the savage East and folding it back inside a respectable London street. Hyde is foreign, machinic, unstoppable; "damned" baptises him in theological language even as the simile makes him profane.',
    zoomOut:
      "This simile is the apex of the extract's dehumanisation arc: man → little man → it → Juggernaut. By the end of three short chunks, Hyde has slipped out of the human category entirely. Stevenson is not just describing a violent man; he is letting us watch language fail to contain what has emerged from beneath the respectable Dr Jekyll - the troglodytic, atavistic self that Victorian repression has incubated and then released into a deserted street.",
  },
]

const MODEL_PARAGRAPH = `Stevenson stages this trampling as the novella's primal scene of duality, and every linguistic choice tightens the indictment of Victorian respectability. The "black winter morning" and the streets "empty as a church" do not merely set a Gothic mood; they evacuate the urban scene of moral supervision so that Jekyll's "second self" can act unwitnessed. Crucially, the violence is delivered through a single dissonant pairing - Hyde "trampled calmly". The brutal monosyllabic verb is yoked to an adverb of serene self-possession, and the result is a grammar of pure id: appetite without affect, force without conscience. As Enfield's language fails him ("hellish to see… It wasn't like a man"), Hyde is dehumanised first to a thing and then, in the extract's climactic simile, to "some damned Juggernaut" - a piece of imperial mythology that recodes Hyde as foreign, machinic and unstoppable, even as he walks a London pavement. This is duality made visible: the troglodytic, atavistic self that the respectable doctor has chemically liberated, doing in a deserted street what the polite drawing-room forbids. Read against the fin-de-siècle anxieties of 1886 - Darwinian regression, urban degeneration, the pre-Freudian intuition that the civilised self is a thin veneer over instinct - the trampling functions less as an aberration than as a diagnosis. The "damned Juggernaut" is not an outsider crashing into Victorian London; it is what Victorian London has been carrying, half-acknowledged, inside the locked back door of its own respectable houses all along - and the deserted street simply gives that buried self the unsupervised inch it needs to step out in plain sight.`

const wordCount = MODEL_PARAGRAPH.trim().split(/\s+/).length

export default function JekyllExtractWalkthroughPage() {
  const tr = useT()
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Dr Jekyll and Mr Hyde',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
          },
          {
            name: 'Extract walkthrough',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde/extract-walkthrough',
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/revision/texts/jekyll-and-hyde"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {tr('rev.texts.common.back_to_text').replace('{text}', 'Jekyll and Hyde')}
        </Link>

        <header className="mb-10 border-b border-border/60 pb-8">
          <Badge variant="secondary" className="mb-3">
            Chapter 1 - Story of the Door
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            {tr('rev.texts2.jh.extract.title')}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A close reading of Enfield's recollection - from{' '}
            <em>"I was coming home from some place at the end of the world…"</em> to{' '}
            <em>"…like some damned Juggernaut."</em> Each chunk is unpacked in three layers:{' '}
            <strong>Notice</strong> what the language does, <strong>Say</strong> what it means, then{' '}
            <strong>Zoom Out</strong> to context and theme. A grade-9 model paragraph follows.
          </p>
        </header>

        <section aria-labelledby="walkthrough-heading" className="space-y-10">
          <h2 id="walkthrough-heading" className="sr-only">
            {tr('rev.texts2.common.walkthrough')}
          </h2>

          {CHUNKS.map((chunk, index) => (
            <article key={chunk.id} className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">
                  {tr('rev.texts2.common.chunk_n').replace('{n}', String(index + 1))}
                </h3>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Stevenson, 1886
                </span>
              </div>

              <blockquote className="border-l-4 border-primary/60 bg-muted/30 px-5 py-4 italic text-foreground/90 rounded-r-md">
                {chunk.text}
              </blockquote>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-amber-200/40 dark:border-amber-700/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                      <Eye className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      {tr('rev.texts2.common.notice')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-foreground/80">
                    {chunk.notice}
                  </CardContent>
                </Card>

                <Card className="border-blue-200/40 dark:border-blue-700/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                      <MessageSquareQuote className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      {tr('rev.texts2.common.say')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-foreground/80">
                    {chunk.say}
                  </CardContent>
                </Card>

                <Card className="border-emerald-200/40 dark:border-emerald-700/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                      <Telescope className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      {tr('rev.texts2.common.zoom_out')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-foreground/80">
                    {chunk.zoomOut}
                  </CardContent>
                </Card>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="model-heading" className="mt-16">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2
              id="model-heading"
              className="text-2xl font-semibold tracking-tight flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5 text-primary" />
              {tr('rev.texts2.common.model_paragraph')}
            </h2>
            <Badge variant="outline" className="text-xs">
              {tr('rev.texts2.common.words_count').replace('{n}', String(wordCount))}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Linking the trampling to the duality of human nature and Victorian fin-de-siècle
            anxieties (Darwinian regression, urban degeneration, the pre-Freudian unconscious).
          </p>
          <Card>
            <CardContent className="prose prose-sm sm:prose-base dark:prose-invert max-w-none pt-6 leading-relaxed">
              <p>{MODEL_PARAGRAPH}</p>
            </CardContent>
          </Card>
        </section>

        <p className="text-xs text-muted-foreground mt-12 border-t border-border/60 pt-4">
          <em>The Strange Case of Dr Jekyll and Mr Hyde</em>
          {tr('rev.texts2.jh.extract.notice')}
        </p>
      </main>
    </>
  )
}
