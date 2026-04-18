'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type QuoteEntry = {
  id: number
  quote: string
  speaker: string
  chapter: string
  context: string
  analysis: string
  themes: string[]
}

const QUOTES: QuoteEntry[] = [
  {
    id: 1,
    quote: 'All animals are equal but some animals are more equal than others.',
    speaker: 'The Commandments (altered by the pigs)',
    chapter: 'Chapter 10',
    context: 'The final, sole commandment remaining on the barn wall after years of gradual alteration by the pigs.',
    analysis:
      'This is the novel\u2019s most famous line and its most devastating paradox. The oxymoron "more equal" is logically impossible, which is precisely Orwell\u2019s point: totalitarian language does not need to make sense, it only needs to go unchallenged. The sentence structurally mirrors how the revolution has been corrupted \u2014 the original principle ("all animals are equal") still appears, but its meaning has been inverted by the qualifier. Orwell shows that tyranny does not abolish ideals; it redefines them.',
    themes: ['Power & Corruption', 'Language & Propaganda', 'Class & Inequality'],
  },
  {
    id: 2,
    quote: 'Four legs good, two legs bad.',
    speaker: 'The Sheep (taught by Snowball)',
    chapter: 'Chapter 3',
    context: 'Snowball reduces the Seven Commandments to a single slogan for the less intelligent animals.',
    analysis:
      'The binary slogan replaces complex principles with mindless repetition. Orwell shows that simplification of ideology is the first step toward its corruption. The sheep\u2019s inability to think beyond the slogan makes them perfect instruments of propaganda. When later changed to "Four legs good, two legs better," the ease of the switch reveals how hollow the original was.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
  },
  {
    id: 3,
    quote: 'Napoleon is always right.',
    speaker: 'Boxer',
    chapter: 'Chapter 5',
    context: 'Boxer adopts this as his second personal maxim after Snowball\u2019s expulsion.',
    analysis:
      'This is the most disturbing line in the novel because it comes from the most sympathetic character. Boxer\u2019s blind loyalty is not presented as stupidity but as misplaced trust. The absolute "always" eliminates the possibility of critical thought. Orwell shows that totalitarian power depends not just on propaganda and force but on the voluntary submission of good people.',
    themes: ['Power & Corruption', 'Loyalty & Exploitation'],
  },
  {
    id: 4,
    quote: 'I will work harder.',
    speaker: 'Boxer',
    chapter: 'Chapter 3 (repeated throughout)',
    context: 'Boxer\u2019s personal motto, his response to every difficulty on the farm.',
    analysis:
      'The repetition of this maxim throughout the novel creates an increasingly painful dramatic irony. The reader watches Boxer\u2019s selfless devotion being exploited by the pigs who give nothing in return. Orwell presents hard work without political awareness as a form of self-destruction. The motto is admirable in isolation but tragic in context.',
    themes: ['Loyalty & Exploitation', 'Class & Inequality'],
  },
  {
    id: 5,
    quote: 'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
    speaker: 'Narrator',
    chapter: 'Chapter 10',
    context: 'The novel\u2019s final image: animals watch through the farmhouse window as pigs and humans play cards and quarrel.',
    analysis:
      'The circular structure is Orwell\u2019s most powerful device. The pigs have become indistinguishable from the humans they overthrew, completing the revolution\u2019s failure. The repetitive syntax ("from pig to man, and from man to pig") mirrors the interchangeability of oppressors. "Already" suggests the transformation is complete and irreversible.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
  },
  {
    id: 6,
    quote: 'Man is the only creature that consumes without producing.',
    speaker: 'Old Major',
    chapter: 'Chapter 1',
    context: 'Old Major\u2019s speech to the assembled animals, outlining the case for revolution.',
    analysis:
      'Old Major\u2019s Marxist critique identifies exploitation as the defining feature of human rule. The irony is that the pigs will replicate this exact behaviour: consuming without producing. Orwell uses Old Major\u2019s speech to establish the ideals against which Napoleon\u2019s corruption will be measured.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
  },
  {
    id: 7,
    quote: 'Whatever goes upon two legs is an enemy. Whatever goes upon four legs, or has wings, is a friend.',
    speaker: 'Old Major',
    chapter: 'Chapter 1',
    context: 'Old Major\u2019s foundational principle for Animalism.',
    analysis:
      'This binary classification will be systematically violated by the pigs, who walk on two legs, wear clothes and trade with humans. The simplicity of the original principle makes its betrayal more visible. Orwell shows that revolutions fail not because their ideals are wrong but because power corrupts those entrusted to uphold them.',
    themes: ['Revolution & Betrayal', 'Power & Corruption'],
  },
  {
    id: 8,
    quote: 'Surely, comrades, you do not want Jones back?',
    speaker: 'Squealer',
    chapter: 'Chapter 5 (repeated throughout)',
    context: 'Squealer\u2019s standard response when animals question the pigs\u2019 privileges.',
    analysis:
      'This rhetorical question is the pigs\u2019 most effective propaganda tool. It replaces reasoned argument with fear, deflecting every criticism by invoking the spectre of the previous regime. Orwell shows that propaganda does not need to be convincing \u2014 it only needs to make the alternative seem worse. The repetition throughout the novel demonstrates how a single technique can sustain tyranny indefinitely.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
  },
  {
    id: 9,
    quote: 'No animal shall sleep in a bed with sheets.',
    speaker: 'The Commandments (altered)',
    chapter: 'Chapter 6',
    context: 'The animals discover the Fourth Commandment has been changed. Squealer explains that the original always included "with sheets."',
    analysis:
      'The addition of two words transforms a prohibition into a permission. Orwell makes the physical act of altering the commandments visible \u2014 Squealer is later found at the barn wall with paint and a ladder. This is propaganda made concrete: the deliberate, manual rewriting of truth.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
  },
  {
    id: 10,
    quote: 'All that year the animals worked like slaves.',
    speaker: 'Narrator',
    chapter: 'Chapter 6',
    context: 'Description of the animals\u2019 labour during the building of the windmill.',
    analysis:
      'The simile is devastating in its irony. The revolution was fought to end slavery, yet the animals are now compared to the very thing they sought to escape. Orwell\u2019s narrator is not ironic by accident \u2014 the word "slaves" forces the reader to confront the revolution\u2019s failure.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
  },
  {
    id: 11,
    quote: 'The only good human being is a dead one.',
    speaker: 'Snowball (paraphrasing Old Major)',
    chapter: 'Chapter 4',
    context: 'Snowball\u2019s comment after the Battle of the Cowshed.',
    analysis:
      'This chilling absolutism reveals how revolutionary ideals can harden into violent dogma. Snowball, the most intellectual pig, reduces a nuanced critique of exploitation into a call for extermination. Orwell suggests that even well-intentioned revolutionaries can be consumed by the violence they deploy.',
    themes: ['Revolution & Betrayal', 'Power & Corruption'],
  },
  {
    id: 12,
    quote: 'Fools! Fools! Do you not see what is written on the side of that van?',
    speaker: 'Benjamin',
    chapter: 'Chapter 9',
    context: 'Benjamin reads the lettering on the van taking Boxer away: "Alfred Simmonds, Horse Slaughterer."',
    analysis:
      'Benjamin\u2019s outburst is the novel\u2019s most agonising moment. He has always been able to read but has chosen silence. His cry comes too late to save Boxer. Orwell\u2019s sharpest critique is reserved not for the powerful but for the educated who refuse to act until it is too late.',
    themes: ['Loyalty & Exploitation', 'Education & Awareness'],
  },
  {
    id: 13,
    quote: 'The milk and the windfall apples should be reserved for the pigs alone.',
    speaker: 'Squealer',
    chapter: 'Chapter 3',
    context: 'Squealer justifies the pigs\u2019 first act of privilege, claiming they need the nutrition for "brainwork."',
    analysis:
      'The milk and apples are the first material sign of inequality on Animal Farm. Orwell places this incident early to show that corruption begins with small privileges, not grand betrayals. The scientific-sounding justification ("brainwork") parodies Soviet rhetoric about the intellectual superiority of the ruling class.',
    themes: ['Power & Corruption', 'Language & Propaganda', 'Class & Inequality'],
  },
  {
    id: 14,
    quote: 'He had seemed to oppose the windmill, simply as a manoeuvre to get rid of Snowball.',
    speaker: 'Narrator',
    chapter: 'Chapter 5',
    context: 'Napoleon announces the windmill will be built after all \u2014 despite having opposed it when Snowball proposed it.',
    analysis:
      'This is one of Orwell\u2019s clearest parallels with Stalin, who adopted Trotsky\u2019s industrialisation programme after exiling him. The sentence reveals that Napoleon\u2019s opposition was never ideological but purely strategic. Power, not policy, is what matters.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
  },
  {
    id: 15,
    quote: 'They had come to a time when no one dared speak his mind, when fierce, growling dogs roamed everywhere.',
    speaker: 'Narrator',
    chapter: 'Chapter 7',
    context: 'Description of the farm\u2019s atmosphere after Napoleon\u2019s show trials and executions.',
    analysis:
      'The dogs are Orwell\u2019s equivalent of the NKVD \u2014 Stalin\u2019s secret police. "No one dared speak his mind" describes the defining characteristic of totalitarianism: the elimination of free thought through fear. The passive construction ("had come to a time") suggests the change was gradual and thus harder to resist.',
    themes: ['Power & Corruption', 'Language & Propaganda'],
  },
  {
    id: 16,
    quote: 'If she herself had had any picture of the future, it had been of a society of animals set free from hunger and the whip, all equal, each working according to his capacity.',
    speaker: 'Narrator (about Clover)',
    chapter: 'Chapter 7',
    context: 'Clover reflects on the revolution\u2019s failure after the public executions.',
    analysis:
      'This passage is the emotional heart of the novel. Clover\u2019s vision is modest, humane and reasonable, which makes its betrayal more painful. Orwell gives the most moving articulation of revolutionary hope to an inarticulate cart-horse, not to the intellectual pigs. The pathos lies in the distance between Clover\u2019s simple dream and the brutal reality.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
  },
  {
    id: 17,
    quote: 'Beasts of England, beasts of Ireland, / Beasts of every land and clime.',
    speaker: 'Old Major (teaching the song)',
    chapter: 'Chapter 1',
    context: 'Old Major teaches the animals the revolutionary anthem that will inspire the rebellion.',
    analysis:
      '"Beasts of England" functions as the Internationale of Animal Farm. Its later banning by Napoleon (Chapter 7) signals the point at which the revolution officially repudiates its own origins. Orwell shows that totalitarian regimes must suppress their own founding ideals once those ideals become inconvenient.',
    themes: ['Revolution & Betrayal', 'Language & Propaganda'],
  },
  {
    id: 18,
    quote: 'Comrade Napoleon, Father of All Animals, Terror of Mankind, Protector of the Sheepfold, Ducklings\u2019 Friend.',
    speaker: 'Narrator (listing Napoleon\u2019s titles)',
    chapter: 'Chapter 8',
    context: 'Napoleon acquires an ever-growing list of honorific titles.',
    analysis:
      'The accumulation of absurd titles parodies the personality cult of Stalin. "Father of All Animals" echoes "Father of the Peoples," Stalin\u2019s official epithet. The contradiction between "Terror of Mankind" and "Ducklings\u2019 Friend" reveals the incoherence that personality cults require the public to accept without question.',
    themes: ['Power & Corruption', 'Language & Propaganda'],
  },
  {
    id: 19,
    quote: 'Twelve voices were shouting in anger, and they were all alike.',
    speaker: 'Narrator',
    chapter: 'Chapter 10',
    context: 'The pigs and farmers quarrel over a card game in the final scene.',
    analysis:
      'The final confrontation is between two groups of oppressors, not between oppressor and oppressed. The animals are reduced to spectators. "All alike" is Orwell\u2019s final condemnation: the revolution has not failed because of one bad leader but because the structure of power itself produces identical outcomes regardless of who holds it.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
  },
  {
    id: 20,
    quote: 'The commandments were written on the tarred wall in great white letters that could be read thirty yards away.',
    speaker: 'Narrator',
    chapter: 'Chapter 2',
    context: 'After the rebellion, Snowball paints the Seven Commandments on the barn wall.',
    analysis:
      'The commandments are visible to all but readable by few \u2014 most animals are illiterate. Orwell creates a precise image of how constitutions function under tyranny: the law exists on paper, but only the powerful can interpret it. The physical visibility of the commandments makes their later alteration even more disturbing.',
    themes: ['Language & Propaganda', 'Education & Awareness', 'Power & Corruption'],
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function AnimalFarmKeyQuotesPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Animal Farm" textType="novella" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/animal-farm"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
          </a>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
              <Quote className="size-3" />
              Key Quotes
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/20 px-3 py-1 text-xs text-teal-600">
              <Sparkles className="size-3" />
              AO1 / AO2
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Animal Farm &mdash; Key Quotes
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by George Orwell &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Twenty essential quotations with speaker, chapter reference, detailed
            analysis and thematic links for GCSE English Literature.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">How to use these quotes</p>
              <p>
                You do not need to memorise all twenty. Aim for 10&ndash;12
                that you can analyse in depth and that cover multiple themes.
                For each quote, practise identifying the technique, explaining
                its effect, and linking it to Orwell&rsquo;s allegorical
                purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Quote cards */}
        <section className="mt-10 space-y-6">
          {QUOTES.map((q) => (
            <div
              key={q.id}
              className="rounded-xl border border-teal-400/15 bg-cream-100/60 p-5"
            >
              {/* Quote text */}
              <div className="flex items-start gap-3 mb-3">
                <Quote className="mt-1 size-5 shrink-0 text-clay-400" />
                <p className="font-serif text-lg font-semibold leading-snug text-ink-900">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>

              {/* Speaker & chapter */}
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-ink-500">
                <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 font-medium text-teal-700">
                  {q.speaker}
                </span>
                <span className="rounded-full border border-ink-100 px-2.5 py-0.5">
                  {q.chapter}
                </span>
              </div>

              {/* Context */}
              <p className="mb-3 text-sm italic text-ink-500">{q.context}</p>

              {/* Analysis */}
              <div className="mb-3 rounded-lg border border-teal-400/10 bg-teal-500/5 p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-700">
                  Analysis
                </p>
                <p className="text-sm leading-relaxed text-ink-600">
                  {q.analysis}
                </p>
              </div>

              {/* Themes */}
              <div className="flex flex-wrap gap-1.5">
                {q.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-clay-300/30 bg-clay-200/10 px-2.5 py-0.5 text-xs font-medium text-clay-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, context and essay plans for Animal Farm.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/animal-farm/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/animal-farm/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/animal-farm/context"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Context
            </a>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-ink-100 pt-4 text-xs text-ink-400">
          Short quotations (&le;15 words each) reproduced under the fair dealing
          provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism, review and educational study.{' '}
          <em>Animal Farm</em> by George Orwell is published by Penguin Books.
          Full text available from your school or local library.
        </p>
      </div>
    </div>
  )
}
