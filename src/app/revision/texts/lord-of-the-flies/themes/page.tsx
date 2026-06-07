import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Quote, Flame, Shield, Skull, Eye } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Lord of the Flies Themes & Symbolism | The English Hub',
    description:
      'In-depth analysis of themes and symbols in Lord of the Flies by William Golding: civilisation vs savagery, power, innocence, fear, the conch, fire, beast and pig',
  },
  title: 'Lord of the Flies Themes & Symbolism',
  description:
    "In-depth analysis of themes and symbols in Lord of the Flies by William Golding: civilisation vs savagery, power, innocence, fear, the conch, fire, beast and pig's head.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/lord-of-the-flies/themes',
  },
}

type ThemeData = {
  title: string
  overview: string
  keyPoints: string[]
  keyQuotes: { text: string; speaker: string; relevance: string }[]
  writersMethods: string[]
}

type SymbolData = {
  name: string
  meaning: string
  development: string[]
  keyQuote: { text: string; speaker: string }
}

const themes: ThemeData[] = [
  {
    title: 'Civilisation vs Savagery',
    overview:
      "The novel's central conflict. Golding strips away the comforting assumption that civilisation is natural to human beings, especially well-bred English boys. Instead he shows that order, democracy and moral behaviour are fragile constructions that collapse under pressure. The island becomes a laboratory for testing whether rules survive when there is no authority to enforce them.",
    keyPoints: [
      "Ralph's insistence on rules, shelters and the signal fire represents the civilised impulse; Jack's hunting, face-paint and ritual chanting represent the savage counter-pull.",
      "The shift is gradual and cumulative: missed fires, broken shelters, face-paint, mock hunts, real hunts, Simon's murder, Piggy's death, the burning island.",
      'Golding deliberately chose English schoolboys -- the Victorian archetype of civilised youth -- to make the collapse more shocking.',
      'The naval officer at the end is himself part of a civilisation at war, suggesting that adult society is no more "civilised" than the boys\' island.',
      'Even Ralph, the democratic leader, experiences bloodlust in Chapter 7 when he wounds a boar, proving savagery is universal.',
    ],
    keyQuotes: [
      {
        text: '"We\'ve got to have rules and obey them. After all, we\'re not savages."',
        speaker: 'Jack -- Ch. 2',
        relevance: 'Deeply ironic: Jack will become the chief agent of savagery.',
      },
      {
        text: '"Bollocks to the rules! We\'re strong -- we hunt!"',
        speaker: 'Jack -- Ch. 5',
        relevance: 'The explicit rejection of civilised order in favour of primal strength.',
      },
      {
        text: '"The world, that understandable and lawful world, was slipping away."',
        speaker: 'Narrator -- Ch. 5',
        relevance: "Ralph's growing awareness that order is collapsing irreversibly.",
      },
    ],
    writersMethods: [
      "Golding uses the progressive deterioration of clothing and appearance to mirror the boys' moral decline.",
      'The conch and the painted face function as opposing symbols of civilisation and savagery throughout.',
      'The structure of the novel mirrors the descent: each chapter escalates the violence incrementally.',
    ],
  },
  {
    title: 'Power and Leadership',
    overview:
      "Lord of the Flies explores how power is gained, held and abused. Ralph wins the initial election through charisma and the conch; Jack seizes power through fear, spectacle and the promise of meat. Golding contrasts democratic leadership (persuasion, rules, consent) with authoritarian leadership (violence, ritual, coercion) and shows the latter winning when civilisation's safeguards are absent.",
    keyPoints: [
      "Ralph's authority rests on the conch, the signal fire and the promise of rescue -- abstract, future-oriented goals.",
      "Jack's authority rests on immediate gratification: meat, excitement, belonging and the thrill of the hunt.",
      'Roger represents power without conscience -- by Chapter 11 he wields "a nameless authority" based purely on the capacity for violence.',
      'Piggy has intellectual authority but no physical or social power; his ideas are ignored because of his body and accent.',
      'The novel warns that in the absence of institutions, power flows to whoever best exploits fear.',
    ],
    keyQuotes: [
      {
        text: '"I ought to be chief... because I\'m chapter chorister and head boy."',
        speaker: 'Jack -- Ch. 1',
        relevance:
          "Jack's claim rests on institutional rank, which becomes meaningless on the island.",
      },
      {
        text: '"Which is better -- law and rescue, or hunting and breaking things up?"',
        speaker: 'Piggy -- Ch. 11',
        relevance:
          'Piggy frames the central political question, but reason cannot compete with force.',
      },
      {
        text: '"Roger advanced upon them as one wielding a nameless authority."',
        speaker: 'Narrator -- Ch. 12',
        relevance: 'Power reduced to its most primitive form: the ability to inflict pain.',
      },
    ],
    writersMethods: [
      'Golding stages the power struggle as a series of assemblies that become progressively more chaotic and less democratic.',
      "The theft of Piggy's glasses is the pivotal power shift: whoever controls fire controls the island.",
      'Castle Rock replaces the assembly platform, physically embodying the shift from democracy to fortress.',
    ],
  },
  {
    title: 'Loss of Innocence',
    overview:
      'The boys arrive on the island as schoolchildren in uniforms and leave it as painted, near-naked hunters who have committed murder. Golding tracks the destruction of childhood innocence with unflinching precision, arguing that the capacity for evil is not learned but revealed. The island does not corrupt the boys -- it removes the constraints that kept their darkness hidden.',
    keyPoints: [
      "The early chapters present the island as an adventure: swimming, exploring, no adults. This mirrors classic boys' adventure stories that Golding is deliberately subverting.",
      "Innocence erodes in stages: the first kill, the face-paint, the mock hunt that turns violent, Simon's murder, Piggy's death.",
      "The littluns' nightmares about the beast show innocence already under threat from the boys' own fears.",
      "Simon's death is the point of no return -- after that, even Ralph and Piggy are complicit.",
      "Ralph's final tears are for the loss of a belief -- that children (and by extension humanity) are fundamentally good.",
    ],
    keyQuotes: [
      {
        text: '"Ralph wept for the end of innocence, the darkness of man\'s heart."',
        speaker: 'Narrator -- Ch. 12',
        relevance: "The novel's closing moral statement: innocence is irrecoverable.",
      },
      {
        text: '"Roger gathered a handful of stones and began to throw them."',
        speaker: 'Narrator -- Ch. 4',
        relevance:
          'Cruelty begins as play; the "taboo of the old life" is the only thing preventing worse.',
      },
      {
        text: '"Kill the beast! Cut his throat! Spill his blood!"',
        speaker: 'The boys -- Ch. 9',
        relevance:
          "The chant that accompanies Simon's murder, where play-acting becomes real killing.",
      },
    ],
    writersMethods: [
      "Golding alludes to R.M. Ballantyne's The Coral Island, a Victorian adventure where stranded boys remain cheerful and moral, to emphasise his darker vision.",
      "The physical deterioration of the boys' clothing and hygiene parallels the moral deterioration.",
      'The naval officer\'s expectation of "a better show" from "British boys" voices the myth Golding is destroying.',
    ],
  },
  {
    title: 'Fear and the Beast',
    overview:
      "Fear is the engine that drives the novel's plot. The littluns' terror of a \"beast\" -- first a snake-thing, then a creature from the sea, then from the air -- spreads until it dominates the island. Golding's central argument is that the beast is not external but internal: it is the darkness within human nature. Only Simon understands this, and he is killed for trying to reveal the truth.",
    keyPoints: [
      'The beast evolves: snake-thing (Ch. 2), beast from water (Ch. 5), beast from air (Ch. 6), the Lord of the Flies (Ch. 8). Each stage makes it harder to dismiss.',
      'The dead parachutist provides a "real" beast that the boys can see but not identify, fuelling their terror.',
      "Jack exploits fear to consolidate power, offering protection and ritual as alternatives to Ralph's reason.",
      "Simon's insight -- \"maybe it's only us\" -- is the novel's thesis, but the other boys are incapable of accepting it.",
      'The boys project their own violence outward onto the beast, avoiding confrontation with their own nature.',
    ],
    keyQuotes: [
      {
        text: '"Maybe there is a beast... maybe it\'s only us."',
        speaker: 'Simon -- Ch. 5',
        relevance: "The novel's thesis in eight words: evil is internal.",
      },
      {
        text: '"Fancy thinking the Beast was something you could hunt and kill!"',
        speaker: 'Lord of the Flies -- Ch. 8',
        relevance:
          "The pig's head confirms Simon's insight: the beast cannot be destroyed because it lives inside them.",
      },
      {
        text: '"However Simon thought of the beast, there rose before his inward sight the picture of a human."',
        speaker: 'Narrator -- Ch. 6',
        relevance: 'Golding explicitly equates the beast with human nature.',
      },
    ],
    writersMethods: [
      'Golding uses the progression of "beast" names (snake-thing, beast from water, beast from air) to show fear mutating and growing.',
      "The Lord of the Flies scene in Chapter 8 uses hallucinatory, almost surreal prose to stage Simon's confrontation with evil.",
      "Darkness, storms and firelight are used throughout to distort perception and feed the boys' terror.",
    ],
  },
]

const symbols: SymbolData[] = [
  {
    name: 'The Conch',
    meaning:
      'Democracy, order and the right to speak. Whoever holds the conch has the floor at assemblies. Its authority mirrors parliamentary procedure and civilised debate.',
    development: [
      "Found in Chapter 1 by Ralph and Piggy; its sound summons the boys and establishes Ralph's leadership.",
      'Throughout the early chapters it maintains order at meetings -- "the conch counts here."',
      'Its power weakens as Jack increasingly ignores it: "And you shut up! Who are you, anyway?"',
      'It is carried to Castle Rock in Chapter 11 as a last appeal to justice.',
      'It shatters into "a thousand white fragments" when Piggy is killed, marking the death of democracy on the island.',
    ],
    keyQuote: {
      text: '"The conch exploded into a thousand white fragments."',
      speaker: 'Narrator -- Ch. 11',
    },
  },
  {
    name: 'The Signal Fire',
    meaning:
      "Hope of rescue and connection to civilisation. Maintaining the fire is Ralph's chief priority and the measure of the boys' commitment to being saved.",
    development: [
      "Lit in Chapter 2 using Piggy's glasses, it represents the boys' initial cooperation and hope.",
      'It goes out in Chapter 4 when Jack takes the fire-watchers hunting -- the first major failure of order.',
      "After Jack's split, fire becomes a weapon: Jack steals Piggy's glasses to control fire-making.",
      'In Chapter 12, Jack sets the island ablaze to smoke Ralph out, perverting rescue fire into a hunting tool.',
      'Ironically, this destructive fire is what attracts the naval officer, achieving rescue through savagery.',
    ],
    keyQuote: {
      text: '"The fire is the most important thing on the island."',
      speaker: 'Ralph -- Ch. 2',
    },
  },
  {
    name: 'The Beast',
    meaning:
      'The darkness within human nature. The boys imagine an external monster, but the beast is a projection of their own fear and violence. Only Simon understands its true nature.',
    development: [
      'First mentioned in Chapter 2 by a littlun who sees a "snake-thing" in the jungle.',
      'In Chapter 5, the beast becomes a topic of serious debate; Simon suggests it is internal.',
      'The dead parachutist in Chapter 6 gives the beast a physical form the boys cannot explain.',
      'In Chapter 8, the Lord of the Flies confirms to Simon that the beast is "part of you."',
      "After Simon's death, the beast is never questioned again -- fear has triumphed over understanding.",
    ],
    keyQuote: {
      text: '"Maybe there is a beast... maybe it\'s only us."',
      speaker: 'Simon -- Ch. 5',
    },
  },
  {
    name: "The Lord of the Flies (Pig's Head)",
    meaning:
      'The physical manifestation of innate evil. The name translates from Hebrew "Beelzebub" (Lord of the Flies), a name for the Devil. It represents the darkness that Golding argues lives inside every human being.',
    development: [
      'Created in Chapter 8 when Jack\'s hunters mount a sow\'s head on a sharpened stake as a "gift for the beast."',
      'Simon encounters it in his secret clearing and hallucinates a conversation with it.',
      "The head tells Simon that the beast is not something external: \"I'm part of you... I'm the reason why it's no go.\"",
      'It warns Simon that trying to share this truth will result in his death -- a prophecy fulfilled in Chapter 9.',
      "The Lord of the Flies is both literal (rotting pig's head covered in flies) and symbolic (the devil within).",
    ],
    keyQuote: {
      text: '"Fancy thinking the Beast was something you could hunt and kill!"',
      speaker: 'Lord of the Flies -- Ch. 8',
    },
  },
]

export default async function LotFThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  const tKeyPoints = await t('rev.texts.common.key_points')
  const tWritersMethods = await t('rev.texts.common.writers_methods')
  const tMeaning = await t('rev.texts.common.meaning')
  const tKeyQuotation = await t('rev.texts.common.key_quotation')
  const tDevelopment = await t('rev.texts.lotf.themes.development')

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Lord of the Flies',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
          },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies/themes',
          },
        ]}
      />
      <Breadcrumb
        items={[
          { label: await t('rev.texts.common.crumb_revision'), href: '/revision' },
          { label: await t('rev.texts.common.crumb_set_texts'), href: '/revision/texts' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies' },
          { label: await t('rev.texts.common.themes') },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/lord-of-the-flies" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.texts.lotf.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Lightbulb className="mr-1 size-3 text-clay-600" />
              {await t('rev.texts.lotf.themes.badge')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.lotf.themes.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {await t('rev.texts.lotf.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts.lotf.themes.intro')}
          </p>
        </div>
      </section>

      {/* ── THEMES ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.texts.common.key_themes')}
          </h2>
        </div>
      </section>

      {themes.map((theme) => (
        <section key={theme.title} id={theme.title.toLowerCase().replace(/\s+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <Flame className="size-5 text-clay-600" />
            <h2 className="text-heading-lg font-heading text-foreground">{theme.title}</h2>
          </div>

          <div className="space-y-4">
            {/* Overview */}
            <Card>
              <CardContent className="p-6 sm:p-8 text-body-sm text-muted-foreground">
                <p>{theme.overview}</p>
              </CardContent>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Key Points */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                    <Shield className="size-4 text-blue-400" />
                    {tKeyPoints}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  {theme.keyPoints.map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-blue-400/60" />
                      <p>{p}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Writer's Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                    <Eye className="size-4 text-emerald-400" />
                    {tWritersMethods}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  {theme.writersMethods.map((m, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                      <p>{m}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Key Quotations */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {theme.keyQuotes.map((q, i) => (
                <Card key={i} className="border-primary/20 bg-primary/[0.03]">
                  <CardContent className="space-y-2 p-5">
                    <p className="text-body-sm font-medium italic text-foreground">{q.text}</p>
                    <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                    <p className="text-body-sm text-muted-foreground">{q.relevance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── SYMBOLISM ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Skull className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.texts.common.key_symbols')}
          </h2>
        </div>
        <p className="mb-6 text-body-sm text-muted-foreground max-w-2xl">
          Golding threads four central symbols through the novel. Each evolves across the twelve
          chapters, gaining and losing meaning as civilisation rises and falls.
        </p>
      </section>

      {symbols.map((sym) => (
        <section key={sym.name} id={sym.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <Skull className="size-5 text-violet-400" />
            <h2 className="text-heading-lg font-heading text-foreground">{sym.name}</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Meaning & Development */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{tMeaning}</CardTitle>
                <CardDescription>{sym.meaning}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                <p className="text-sm font-semibold text-foreground mb-2">{tDevelopment}</p>
                {sym.development.map((d, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-violet-400/60" />
                    <p>{d}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Quote */}
            <Card className="border-primary/20 bg-primary/[0.03]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Quote className="size-4 text-primary" />
                  {tKeyQuotation}
                </CardTitle>
                <CardDescription>{sym.keyQuote.speaker}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-md font-medium italic text-foreground">
                  {sym.keyQuote.text}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts.lotf.fair_dealing')}
      </p>
    </div>
  )
}
