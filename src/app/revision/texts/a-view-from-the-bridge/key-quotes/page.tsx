import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Drama,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'A View from the Bridge — Key Quotes | The English Hub',
  description:
    'Twenty essential quotations from A View from the Bridge by Arthur Miller with speaker, context and detailed analysis.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/key-quotes',
  },
}

/* ── Quote data ────────────────────────────────────────────────────────── */

type KeyQuote = {
  id: number
  text: string
  speaker: string
  context: string
  analysis: string
  themes: string[]
}

const KEY_QUOTES: KeyQuote[] = [
  {
    id: 1,
    text: '"Most of the time now we settle for half, and I like it better."',
    speaker: 'Alfieri',
    context: 'Opening monologue',
    analysis:
      'The play\'s thesis statement. Alfieri defines civilisation as the willingness to compromise. Eddie\'s tragedy is his refusal to settle for anything less than total possession. Miller frames the entire play as a test of this principle.',
    themes: ['Justice vs law', 'Tragedy'],
  },
  {
    id: 2,
    text: '"You can quicker get back a million dollars that was stole than a word that you gave away."',
    speaker: 'Eddie',
    context: 'Act 1 — warning about informers',
    analysis:
      'Eddie states the community\'s code of silence. Miller uses dramatic irony: the audience will remember this line when Eddie makes his phone call, making his betrayal doubly devastating.',
    themes: ['Betrayal', 'Immigration'],
  },
  {
    id: 3,
    text: '"She\'s a baby."',
    speaker: 'Eddie',
    context: 'Act 1 — on Catherine, repeated',
    analysis:
      'Eddie\'s refusal to see Catherine as an adult. Miller uses the repetition to show that this is not observation but compulsion — Eddie needs Catherine to remain a child to justify his possessiveness.',
    themes: ['Love and obsession', 'Masculinity'],
  },
  {
    id: 4,
    text: '"I want my name!"',
    speaker: 'Eddie',
    context: 'Act 2 — final confrontation with Marco',
    analysis:
      'Eddie\'s last demand. Reputation is the only currency he values, and he has destroyed it himself. Miller concentrates the entire tragedy into four words.',
    themes: ['Masculinity', 'Betrayal'],
  },
  {
    id: 5,
    text: '"He allowed himself to be wholly known."',
    speaker: 'Alfieri',
    context: 'Closing monologue',
    analysis:
      'Alfieri\'s troubled eulogy. Miller suggests that Eddie\'s self-destruction made him fully transparent — terrible and, in some formal sense, admirable. The play refuses simple moral judgment.',
    themes: ['Tragedy', 'Love and obsession'],
  },
  {
    id: 6,
    text: '"You don\'t know anything."',
    speaker: 'Catherine to Eddie',
    context: 'Act 2',
    analysis:
      'Catherine\'s declaration of independence. Miller gives her the line that reverses the power dynamic: she is no longer the child seeking approval.',
    themes: ['Love and obsession', 'Masculinity'],
  },
  {
    id: 7,
    text: '"In my country he would be dead now."',
    speaker: 'Marco',
    context: 'Act 2 — to Alfieri in jail',
    analysis:
      'Marco invokes the Sicilian code. Miller shows that the "old world" justice system has no room for mercy or delay — it is immediate and absolute.',
    themes: ['Justice vs law', 'Immigration'],
  },
  {
    id: 8,
    text: '"You want somethin\' else, Eddie, and you can never have her."',
    speaker: 'Beatrice',
    context: 'Act 2 — confrontation',
    analysis:
      'The play\'s most shocking line. Beatrice names the desire everyone else has only hinted at. Miller gives the truth to the wife, making it an act of love, anger and desperation.',
    themes: ['Love and obsession', 'Betrayal'],
  },
  {
    id: 9,
    text: '"His eyes were like tunnels."',
    speaker: 'Alfieri',
    context: 'Act 1 — describing Eddie',
    analysis:
      'Alfieri sees Eddie\'s obsession narrowing his vision. Miller uses the metaphor to show that fixation eliminates peripheral awareness — Eddie can see only Catherine.',
    themes: ['Love and obsession', 'Tragedy'],
  },
  {
    id: 10,
    text: '"The law is only a word for what has a right to happen."',
    speaker: 'Alfieri',
    context: 'Act 2',
    analysis:
      'Alfieri admits the law\'s limitations. Miller uses this to bridge formal law and natural justice, validating Marco\'s position without endorsing his violence.',
    themes: ['Justice vs law'],
  },
  {
    id: 11,
    text: '"He\'s like a weird... he ain\'t right."',
    speaker: 'Eddie on Rodolpho',
    context: 'Act 1',
    analysis:
      'Eddie cannot articulate his objection because it is not really about Rodolpho. Miller shows that prejudice fills the space where self-knowledge should be.',
    themes: ['Masculinity', 'Love and obsession'],
  },
  {
    id: 12,
    text: '"When am I gonna be a wife again, Eddie?"',
    speaker: 'Beatrice',
    context: 'Act 1',
    analysis:
      'Beatrice names the absence at the centre of their marriage. Miller uses the question to show that Eddie\'s fixation on Catherine has displaced his wife from her own home.',
    themes: ['Love and obsession', 'Masculinity'],
  },
  {
    id: 13,
    text: '"It is my fault, Eddie."',
    speaker: 'Rodolpho',
    context: 'Act 2 — before Eddie\'s death',
    analysis:
      'Rodolpho offers reconciliation. Miller shows that the younger generation is capable of the compromise Alfieri values. Eddie cannot accept it, and that inability kills him.',
    themes: ['Betrayal', 'The American Dream'],
  },
  {
    id: 14,
    text: '"Animal! You go on your knees to me!"',
    speaker: 'Marco',
    context: 'Act 2 — public accusation',
    analysis:
      'Marco publicly strips Eddie of his humanity. Miller reverses the dehumanising language Eddie has used against Rodolpho, making the victim the judge.',
    themes: ['Justice vs law', 'Masculinity'],
  },
  {
    id: 15,
    text: '"Paper Doll they call him. Blondie."',
    speaker: 'Eddie',
    context: 'Act 1',
    analysis:
      'Eddie feminises Rodolpho through nicknames. Miller shows how language polices gender boundaries and disguises jealousy as moral concern.',
    themes: ['Masculinity'],
  },
  {
    id: 16,
    text: '"He degraded my brother. My blood."',
    speaker: 'Marco',
    context: 'Act 2',
    analysis:
      'Marco frames the betrayal as a crime against family honour. Miller shows that for Marco, personal and collective identity are inseparable.',
    themes: ['Betrayal', 'Immigration'],
  },
  {
    id: 17,
    text: '"I\'m not gonna be a baby any more!"',
    speaker: 'Catherine',
    context: 'Act 2',
    analysis:
      'Catherine directly contradicts Eddie\'s "she\'s a baby." Miller tracks her growth through language that deliberately echoes and rejects Eddie\'s framing.',
    themes: ['Love and obsession'],
  },
  {
    id: 18,
    text: '"It\'s your fault, Eddie. Everything."',
    speaker: 'Beatrice',
    context: 'Act 2',
    analysis:
      'Beatrice assigns moral responsibility with painful simplicity. Miller lets her plain speech carry the weight that Alfieri\'s legal reasoning cannot.',
    themes: ['Betrayal', 'Tragedy'],
  },
  {
    id: 19,
    text: '"I could see every step coming."',
    speaker: 'Alfieri',
    context: 'Act 1 narration',
    analysis:
      'Alfieri tells the audience the tragedy is inevitable. Miller creates tension not from surprise but from the agony of watching someone walk toward destruction.',
    themes: ['Tragedy'],
  },
  {
    id: 20,
    text: '"Marco goes around shakin\' hands."',
    speaker: 'Louis',
    context: 'Act 2 — community reaction',
    analysis:
      'A single line showing how quickly Eddie\'s betrayal becomes public knowledge. Miller uses community gossip to demonstrate that Eddie\'s reputation is already destroyed.',
    themes: ['Betrayal', 'Immigration'],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function AViewFromTheBridgeKeyQuotesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "A View from the Bridge", url: "https://theenglishhub.app/revision/texts/a-view-from-the-bridge" },
          { name: "Key Quotations", url: "https://theenglishhub.app/revision/texts/a-view-from-the-bridge/key-quotes" },
        ]}
      />
      <StudyTools textName="A View from the Bridge" textType="play" />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/a-view-from-the-bridge" />}>
            <ArrowLeft className="size-3.5" /> Back to A View from the Bridge
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><Drama className="mr-1 size-3 text-violet-400" />Modern Text — Play</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Key Quotations</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">A View from the Bridge by Arthur Miller</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty essential quotations for exam revision. Each quote is 15 words or fewer, with speaker, context, analysis and theme tags for quick reference.
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">20 Key Quotes</h2>
        </div>
        <div className="grid gap-4">
          {KEY_QUOTES.map((q) => (
            <Card key={q.id}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                  <span className="shrink-0 flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">{q.id}</span>
                </div>
                <p className="text-caption uppercase tracking-wide text-primary">{q.speaker} — {q.context}</p>
                <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {q.themes.map((theme) => (
                    <span key={theme} className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">{theme}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
