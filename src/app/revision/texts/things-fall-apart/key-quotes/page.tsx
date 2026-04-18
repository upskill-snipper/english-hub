import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Things Fall Apart — Key Quotes | The English Hub',
  description:
    'Twenty essential quotations from Things Fall Apart by Chinua Achebe with speaker, context and detailed analysis.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/things-fall-apart/key-quotes',
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
    text: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
    speaker: 'Narrator',
    context: 'Chapter 1 — opening pages',
    analysis:
      'Achebe establishes the sophistication of Igbo culture before any colonial contact. Language is not primitive but artful — the metaphor of palm-oil elevates speech to the status of a shared meal. The sentence is itself an example of the technique it describes.',
    themes: ['Tradition vs change', 'Language'],
  },
  {
    id: 2,
    text: '"Okonkwo was clearly cut out for great things."',
    speaker: 'Narrator',
    context: 'Chapter 1',
    analysis:
      'Early promise that the novel will systematically dismantle. Achebe opens with the confident trajectory of a self-made man, making the collapse more painful because the reader has invested in his success.',
    themes: ['Fate vs free will', 'Fear and identity'],
  },
  {
    id: 3,
    text: '"He was afraid of being thought weak."',
    speaker: 'Narrator on Okonkwo',
    context: 'Chapter 2',
    analysis:
      'The novel\'s key character insight. Achebe identifies fear — not strength — as the engine of Okonkwo\'s aggression. Every subsequent act of violence can be traced back to this sentence.',
    themes: ['Masculinity', 'Fear and identity'],
  },
  {
    id: 4,
    text: '"His whole life was dominated by fear, the fear of failure and of weakness."',
    speaker: 'Narrator',
    context: 'Chapter 2',
    analysis:
      'Achebe makes the diagnosis explicit. Okonkwo\'s ambition is avoidance, not aspiration — he runs from his father\'s image rather than toward his own identity. The repetition of "fear" hammers the point.',
    themes: ['Fear and identity', 'Masculinity'],
  },
  {
    id: 5,
    text: '"When a man says yes his chi also affirms."',
    speaker: 'Narrator',
    context: 'Chapter 4',
    analysis:
      'The Igbo proverb suggests that will and destiny are aligned. Achebe establishes Okonkwo\'s worldview — personal effort determines fate — then spends the rest of the novel testing it to destruction.',
    themes: ['Fate vs free will'],
  },
  {
    id: 6,
    text: '"My father, they have killed me!"',
    speaker: 'Ikemefuna',
    context: 'Chapter 7 — his death',
    analysis:
      'The novel\'s most devastating line. Ikemefuna calls Okonkwo "father" as the blow falls, concentrating trust, betrayal and love in five words. Achebe makes the reader feel the horror Okonkwo refuses to acknowledge.',
    themes: ['Masculinity', 'Tradition vs change'],
  },
  {
    id: 7,
    text: '"When did you become a shivering old woman?"',
    speaker: 'Okonkwo to himself',
    context: 'Chapter 7 — after Ikemefuna\'s death',
    analysis:
      'Okonkwo genders his grief as weakness. Achebe shows how toxic masculinity transforms legitimate emotion into shame, preventing the self-reflection that might have saved him.',
    themes: ['Masculinity', 'Fear and identity'],
  },
  {
    id: 8,
    text: '"She should have been a boy."',
    speaker: 'Okonkwo on Ezinma',
    context: 'Chapter 8',
    analysis:
      'Okonkwo\'s highest compliment reveals his deepest limitation. He can value Ezinma only by imagining her as male. Achebe exposes the logical dead-end of devaluing femininity.',
    themes: ['Masculinity'],
  },
  {
    id: 9,
    text: '"The world has no end, and what is good among one people is an abomination with others."',
    speaker: 'Uchendu',
    context: 'Chapter 15 — to Okonkwo in exile',
    analysis:
      'Uchendu articulates cultural relativism within Igbo thought. Achebe uses an elder to show that the culture itself contains the intellectual tools to understand difference — countering the colonial claim that only Europeans possess philosophical sophistication.',
    themes: ['Colonialism', 'Tradition vs change'],
  },
  {
    id: 10,
    text: '"He felt a relief within as the hymn poured into his parched soul."',
    speaker: 'Narrator on Nwoye',
    context: 'Chapter 16',
    analysis:
      'Nwoye\'s conversion is sensory and emotional, not intellectual. Achebe shows that Christianity succeeds by offering emotional sustenance to those the traditional religion has wounded.',
    themes: ['Religion', 'Tradition vs change'],
  },
  {
    id: 11,
    text: '"Living fire begets cold, impotent ash."',
    speaker: 'Narrator on Okonkwo\'s view of Nwoye',
    context: 'Chapter 17',
    analysis:
      'Okonkwo sees his son as proof of hereditary failure. Achebe shows how the fear of producing weakness produces the very alienation Okonkwo dreads. The metaphor is self-fulfilling.',
    themes: ['Masculinity', 'Fear and identity'],
  },
  {
    id: 12,
    text: '"He has put a knife on the things that held us together and we have fallen apart."',
    speaker: 'Okonkwo',
    context: 'Chapter 20',
    analysis:
      'Okonkwo echoes the novel\'s title. Achebe gives him the correct diagnosis but shows that Okonkwo has no tools except violence — and violence is what the colonisers want, because it justifies their intervention.',
    themes: ['Colonialism', 'Tradition vs change'],
  },
  {
    id: 13,
    text: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
    speaker: 'Obierika',
    context: 'Chapter 20',
    analysis:
      'The most precise diagnosis of the colonial strategy in the novel. Achebe uses Obierika\'s intelligence to show that understanding the threat is not sufficient to stop it when the community is already divided.',
    themes: ['Colonialism'],
  },
  {
    id: 14,
    text: '"Does the white man understand our custom about land?"',
    speaker: 'Okonkwo',
    context: 'Chapter 20',
    analysis:
      'Okonkwo\'s question exposes the colonial refusal to understand what it destroys. Achebe shows that ignorance of local culture is not accidental but functional — understanding would require respect, and respect would prevent exploitation.',
    themes: ['Colonialism', 'Tradition vs change'],
  },
  {
    id: 15,
    text: '"A frontal attack on it would not succeed."',
    speaker: 'Narrator on Mr Brown\'s strategy',
    context: 'Chapter 21',
    analysis:
      'Mr Brown\'s patience is more effective than force. Achebe shows that the most dangerous form of colonialism is the one that presents itself as benevolence.',
    themes: ['Colonialism', 'Religion'],
  },
  {
    id: 16,
    text: '"He saw things as black and white. And black was evil."',
    speaker: 'Narrator on Reverend Smith',
    context: 'Chapter 22',
    analysis:
      'Achebe uses the colour binary to expose the racism at the heart of missionary theology. The sentence works on two levels: theological dualism and racial prejudice are shown to be inseparable.',
    themes: ['Colonialism', 'Religion'],
  },
  {
    id: 17,
    text: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
    speaker: 'Obierika to the District Commissioner',
    context: 'Chapter 25',
    analysis:
      'Obierika\'s accusation reclaims Okonkwo\'s death from the colonial record. Achebe uses his friend to insist that Okonkwo\'s life matters on its own terms, not as a footnote in a European narrative.',
    themes: ['Colonialism', 'Fear and identity'],
  },
  {
    id: 18,
    text: '"The Pacification of the Primitive Tribes of the Lower Niger."',
    speaker: 'District Commissioner',
    context: 'Chapter 25 — final paragraph',
    analysis:
      'The colonial book title turns Okonkwo\'s tragedy into a paragraph. Achebe ends the novel with its sharpest irony: the man who "was clearly cut out for great things" is reduced to an anecdote by the violence of colonial storytelling.',
    themes: ['Colonialism'],
  },
  {
    id: 19,
    text: '"He could hardly imagine that Okonkwo was not his real father."',
    speaker: 'Narrator on Ikemefuna',
    context: 'Chapter 4',
    analysis:
      'Achebe establishes the genuine depth of the father-son bond to make its destruction more devastating. The adoption is real on both sides, which makes the killing an act of self-mutilation.',
    themes: ['Tradition vs change', 'Masculinity'],
  },
  {
    id: 20,
    text: '"The clan was like a lizard; if it lost its tail it soon grew another."',
    speaker: 'Narrator',
    context: 'Chapter 18',
    analysis:
      'Achebe describes the clan\'s resilience using an Igbo metaphor. The proverb suggests that the culture can absorb loss — but the colonial intrusion will prove to be an amputation the lizard cannot survive.',
    themes: ['Tradition vs change', 'Fate vs free will'],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ThingsFallApartKeyQuotesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/things-fall-apart" />}>
            <ArrowLeft className="size-3.5" /> Back to Things Fall Apart
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-violet-400" />Modern Text — Novel</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Key Quotations</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Things Fall Apart by Chinua Achebe</p>
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
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
