'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── Quote data ──────────────────────────────────────────────────────── */

type KeyQuote = {
  id: number
  quote: string
  speaker: string
  part: string
  context: string
  analysis: string
  themes: string[]
}

const quotes: KeyQuote[] = [
  {
    id: 1,
    quote: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 1',
    context: 'The opening pages, establishing Igbo culture before any colonial contact.',
    analysis:
      'Achebe\'s most quoted line establishes the sophistication of Igbo culture from the first page. The metaphor elevates speech to the status of a shared meal -- language is nourishment, and proverbs are its richest ingredient. The sentence is itself an example of the technique it describes: an elegant, proverbial statement about the value of proverbs.',
    themes: ['Language & Communication', 'Tradition vs Change'],
  },
  {
    id: 2,
    quote: '"When the moon is shining the cripple becomes hungry for a walk."',
    speaker: 'Narrator (Igbo proverb)',
    part: 'Part 1, Chapter 1',
    context: 'Describing the moonlit nights when the village gathers for storytelling.',
    analysis:
      'One of many Igbo proverbs Achebe embeds to demonstrate the culture\'s rhetorical richness. The proverb celebrates beauty\'s power to inspire even the most constrained. Achebe uses it to immerse the reader in an Igbo way of thinking -- poetic, metaphorical, rooted in observation of the natural world.',
    themes: ['Language & Communication', 'Tradition vs Change'],
  },
  {
    id: 3,
    quote: '"Okonkwo was clearly cut out for great things."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 1',
    context: 'Early description of Okonkwo\'s rise from poverty to prominence.',
    analysis:
      'The early promise that the novel systematically dismantles. Achebe sets up a trajectory of greatness only to show it collapse under the weight of Okonkwo\'s own rigidity and the colonial invasion. The reader invests in his success, making his destruction more painful.',
    themes: ['Fate & Chi', 'Masculinity & Fear'],
  },
  {
    id: 4,
    quote: '"He was afraid of being thought weak."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 2',
    context: 'The narrator identifies the psychological engine of Okonkwo\'s character.',
    analysis:
      'The novel\'s key character insight, stated with devastating simplicity. Achebe identifies fear -- not strength -- as the driving force behind Okonkwo\'s aggression. Every subsequent act of violence, from the beating of his wives to the killing of Ikemefuna, can be traced back to this single sentence.',
    themes: ['Masculinity & Fear'],
  },
  {
    id: 5,
    quote: '"His whole life was dominated by fear, the fear of failure and of weakness."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 2',
    context: 'Expanding on Okonkwo\'s psychological portrait.',
    analysis:
      'Achebe makes the diagnosis explicit. The repetition of "fear" hammers the point: Okonkwo\'s ambition is avoidance, not aspiration. He runs from his father\'s image rather than toward his own identity. His strength is reactive, not generative.',
    themes: ['Masculinity & Fear', 'Fate & Chi'],
  },
  {
    id: 6,
    quote: '"When a man says yes his chi says yes also."',
    speaker: 'Narrator (Igbo proverb)',
    part: 'Part 1, Chapter 4',
    context: 'The proverb establishing the relationship between human will and fate.',
    analysis:
      'The Igbo proverb suggests that willpower and destiny are aligned -- effort determines outcome. Achebe establishes this as Okonkwo\'s worldview, then spends the rest of the novel testing it to destruction. The proverb is both a statement of philosophy and a trap.',
    themes: ['Fate & Chi'],
  },
  {
    id: 7,
    quote: '"He could hardly imagine that Okonkwo was not his real father."',
    speaker: 'Narrator on Ikemefuna',
    part: 'Part 1, Chapter 4',
    context: 'Describing how fully Ikemefuna has been absorbed into Okonkwo\'s family.',
    analysis:
      'Achebe establishes the depth of the father-son bond to make its destruction devastating. The adoption is genuine on both sides. When Okonkwo kills Ikemefuna, the reader understands it as an act of self-mutilation -- he destroys what he loves most to avoid appearing weak.',
    themes: ['Masculinity & Fear', 'Tradition vs Change'],
  },
  {
    id: 8,
    quote: '"My father, they have killed me!"',
    speaker: 'Ikemefuna',
    part: 'Part 1, Chapter 7',
    context: 'Ikemefuna\'s last words as he is struck down in the forest.',
    analysis:
      'The novel\'s most devastating line. Five words concentrate trust, betrayal, love, and horror. Ikemefuna calls Okonkwo "father" at the moment of death -- the child trusts the man who kills him. Achebe\'s restraint makes the horror more effective: no elaboration is needed.',
    themes: ['Masculinity & Fear', 'Tradition vs Change', 'Justice & Power'],
  },
  {
    id: 9,
    quote: '"When did you become a shivering old woman?"',
    speaker: 'Okonkwo to himself',
    part: 'Part 1, Chapter 7',
    context: 'Okonkwo\'s internal monologue after Ikemefuna\'s death, as grief threatens to surface.',
    analysis:
      'Okonkwo genders his grief as feminine weakness. Achebe shows how toxic masculinity transforms legitimate emotion into shame. The self-addressed question reveals an internal dialogue Okonkwo can never win: his humanity is always at war with his idea of manhood.',
    themes: ['Masculinity & Fear'],
  },
  {
    id: 10,
    quote: '"She should have been a boy."',
    speaker: 'Okonkwo on Ezinma',
    part: 'Part 1, Chapter 8',
    context: 'Okonkwo reflects on his favourite daughter\'s boldness and intelligence.',
    analysis:
      'Okonkwo\'s highest compliment reveals his deepest limitation. He can only value Ezinma by imagining her as male. Achebe exposes the logical dead-end of a worldview that devalues femininity: Okonkwo loves what Ezinma is but cannot say so within his own framework.',
    themes: ['Masculinity & Fear'],
  },
  {
    id: 11,
    quote: '"If the Oracle said that my son should be killed, I would neither dispute it nor be the one to do it."',
    speaker: 'Obierika',
    part: 'Part 1, Chapter 8',
    context: 'Obierika discussing Ikemefuna\'s death with Okonkwo.',
    analysis:
      'Obierika finds a moral middle ground that Okonkwo cannot imagine. He respects tradition without abandoning his conscience. Achebe\'s subtle argument: Igbo culture has space for ethical nuance, but Okonkwo is too rigid to occupy it.',
    themes: ['Tradition vs Change', 'Justice & Power'],
  },
  {
    id: 12,
    quote: '"The clan was like a lizard; if it lost its tail it soon grew another."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 13',
    context: 'Describing the clan\'s resilience after setbacks.',
    analysis:
      'Achebe uses an Igbo metaphor to describe cultural adaptability. The proverb suggests the clan can absorb loss and regenerate. But the colonial intrusion will prove to be an amputation the lizard cannot survive -- a loss too deep for regrowth.',
    themes: ['Tradition vs Change', 'Fate & Chi'],
  },
  {
    id: 13,
    quote: '"The world has no end, and what is good among one people is an abomination with others."',
    speaker: 'Uchendu',
    part: 'Part 2, Chapter 15',
    context: 'Uchendu counsels Okonkwo during his exile in Mbanta.',
    analysis:
      'Uchendu articulates cultural relativism from within Igbo thought itself. Achebe uses an elder to show that the culture already possesses the intellectual tools to understand difference -- countering the colonial claim that only Europeans possess philosophical sophistication.',
    themes: ['Tradition vs Change', 'Colonialism & Cultural Destruction'],
  },
  {
    id: 14,
    quote: '"He felt a relief within as the hymn poured into his parched soul."',
    speaker: 'Narrator on Nwoye',
    part: 'Part 2, Chapter 16',
    context: 'Nwoye\'s first encounter with the Christian missionaries and their music.',
    analysis:
      'Nwoye\'s conversion is sensory and emotional, not intellectual. "Parched" implies long deprivation -- his father\'s rigidity has left him spiritually starving. Achebe shows that Christianity succeeds by offering emotional sustenance to those Igbo culture has wounded.',
    themes: ['Religion', 'Tradition vs Change'],
  },
  {
    id: 15,
    quote: '"Living fire begets cold, impotent ash."',
    speaker: 'Narrator on Okonkwo\'s view of Nwoye',
    part: 'Part 2, Chapter 17',
    context: 'Okonkwo\'s bitter assessment of his son after Nwoye\'s conversion.',
    analysis:
      'Okonkwo sees his son as proof of hereditary failure. The irony is that Okonkwo\'s own "fire" -- his violence and contempt -- is what created the "ash." Achebe shows how fear of producing weakness produces the very alienation feared. The metaphor is self-fulfilling prophecy.',
    themes: ['Masculinity & Fear', 'Religion'],
  },
  {
    id: 16,
    quote: '"He has put a knife on the things that held us together and we have fallen apart."',
    speaker: 'Okonkwo',
    part: 'Part 3, Chapter 20',
    context: 'Okonkwo reflects on the impact of colonialism after returning from exile.',
    analysis:
      'Okonkwo echoes the novel\'s title. The "knife" metaphor suggests deliberate cutting -- colonialism is not an accident but an act of violence. Achebe gives Okonkwo the correct diagnosis but shows that his only response is more violence, which is precisely what the colonisers want.',
    themes: ['Colonialism & Cultural Destruction', 'Tradition vs Change'],
  },
  {
    id: 17,
    quote: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
    speaker: 'Obierika',
    part: 'Part 3, Chapter 20',
    context: 'Obierika analyses the colonial strategy with Okonkwo.',
    analysis:
      'The most precise diagnosis of the divide-and-rule strategy in the novel. Achebe uses Obierika\'s intelligence to show that the Igbo understood what was happening but lacked the collective will to resist once the community was already fragmented.',
    themes: ['Colonialism & Cultural Destruction'],
  },
  {
    id: 18,
    quote: '"Does the white man understand our custom about land?"',
    speaker: 'Obierika',
    part: 'Part 3, Chapter 20',
    context: 'Obierika questions the legitimacy of the colonial court system.',
    analysis:
      'The rhetorical question exposes the fundamental absurdity of colonial justice: foreigners who do not understand local customs are adjudicating disputes rooted in generations of tradition. The answer is no -- and the colonisers have no interest in learning.',
    themes: ['Justice & Power', 'Colonialism & Cultural Destruction'],
  },
  {
    id: 19,
    quote: '"He saw things as black and white. And black was evil."',
    speaker: 'Narrator on Reverend Smith',
    part: 'Part 3, Chapter 22',
    context: 'Describing the fundamentalism of Mr Brown\'s successor.',
    analysis:
      'Achebe uses the colour metaphor to expose the racism embedded in missionary theology. "Black" operates on both literal and figurative levels -- Smith cannot see Igbo culture as anything other than darkness to be dispelled. The sentence structure is deliberately simple, mirroring Smith\'s simplistic worldview.',
    themes: ['Colonialism & Cultural Destruction', 'Religion'],
  },
  {
    id: 20,
    quote: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
    speaker: 'Obierika to the District Commissioner',
    part: 'Part 3, Chapter 25',
    context: 'Obierika\'s accusation after Okonkwo\'s body is discovered.',
    analysis:
      'Obierika delivers the novel\'s moral verdict. He reclaims Okonkwo\'s death from the colonial record and places blame where it belongs. The accusation is direct, simple, and unanswerable. Achebe uses Obierika to insist that Okonkwo\'s life matters on its own terms.',
    themes: ['Colonialism & Cultural Destruction', 'Masculinity & Fear'],
  },
  {
    id: 21,
    quote: '"One could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph."',
    speaker: 'District Commissioner',
    part: 'Part 3, Chapter 25',
    context: 'The Commissioner considers how much space Okonkwo\'s story deserves in his book.',
    analysis:
      'The Commissioner reduces a human tragedy to a matter of editorial length. Achebe uses this casual calculation to show that colonialism\'s deepest violence is narrative: the power to decide whose story matters and how much space it deserves.',
    themes: ['Colonialism & Cultural Destruction', 'Language & Communication'],
  },
  {
    id: 22,
    quote: '"The Pacification of the Primitive Tribes of the Lower Niger."',
    speaker: 'District Commissioner\'s book title',
    part: 'Part 3, Chapter 25',
    context: 'The novel\'s final line -- the title of the Commissioner\'s planned book.',
    analysis:
      'Every word is loaded: "Pacification" disguises violence as peace; "Primitive" denies the culture\'s complexity; "Tribes" reduces a civilisation to an ethnographic category; "Lower Niger" erases specificity. Achebe\'s entire novel exists as a refutation of this title.',
    themes: ['Colonialism & Cultural Destruction', 'Language & Communication', 'Justice & Power'],
  },
]

/* ── Organise by theme ───────────────────────────────────────────────── */

const themeGroups = [
  'Language & Communication',
  'Masculinity & Fear',
  'Fate & Chi',
  'Tradition vs Change',
  'Religion',
  'Colonialism & Cultural Destruction',
  'Justice & Power',
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function KeyQuotesPage() {
  return (
    <div className="space-y-10 bg-cream-50 pb-16">
      {/* Study Tools */}
      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-clay-400/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-ochre-400/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/things-fall-apart" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Things Fall Apart
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="mr-1 size-3 text-clay-500" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              IGCSE Edexcel
            </Badge>
          </div>

          <h1 className="font-serif text-display-sm text-foreground sm:text-display">
            Key Quotes Bank
          </h1>
          <p className="mt-2 text-body-lg italic text-clay-600">
            Things Fall Apart by Chinua Achebe
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty-two essential quotations organised by theme. Each quote
            includes speaker, part reference, context, detailed analysis, and
            thematic links for exam revision.
          </p>
        </div>
      </section>

      {/* Jump to theme */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 font-serif text-heading-md text-foreground">
              Jump to a Theme
            </h2>
            <div className="flex flex-wrap gap-2">
              {themeGroups
                .filter((t) => quotes.some((q) => q.themes[0] === t))
                .map((t) => (
                  <a
                    key={t}
                    href={`#theme-${t.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/40"
                  >
                    <BookOpen className="size-3.5 text-clay-500" />
                    {t}
                    <span className="text-xs text-muted-foreground">
                      ({quotes.filter((q) => q.themes[0] === t).length})
                    </span>
                  </a>
                ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by theme */}
      {themeGroups.map((theme) => {
        const themeQuotes = quotes.filter((q) => q.themes[0] === theme)
        if (themeQuotes.length === 0) return null
        return (
          <section
            key={theme}
            id={`theme-${theme.toLowerCase().replace(/[\s&]+/g, '-')}`}
            className="scroll-mt-8 space-y-5"
          >
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay-400/10 text-lg font-bold text-clay-600">
                {themeQuotes.length}
              </div>
              <h2 className="font-serif text-heading-lg text-foreground">
                {theme}
              </h2>
            </div>

            <div className="grid gap-4">
              {themeQuotes.map((q) => (
                <Card key={q.id}>
                  <CardContent className="space-y-4 p-5 sm:p-6">
                    {/* Quote */}
                    <div className="rounded-lg border-l-4 border-l-clay-500 bg-cream-100 p-4">
                      <p className="font-serif text-body-md font-medium italic text-foreground">
                        {q.quote}
                      </p>
                      <p className="mt-2 text-xs font-mono text-clay-600">
                        {q.speaker} -- {q.part}
                      </p>
                    </div>

                    {/* Context */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        Context
                      </h4>
                      <p className="text-body-sm text-muted-foreground">
                        {q.context}
                      </p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        Language Analysis
                      </h4>
                      <p className="text-body-sm text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>

                    {/* Themes */}
                    <div>
                      <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        Thematic Links
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {q.themes.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-clay-200/30 px-2.5 py-0.5 text-[11px] font-medium text-clay-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* Fair dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for criticism and review. Full
        text available from your school or local library.
      </p>
    </div>
  )
}
