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

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
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
    quote: 'The thing is \u2014 fear can\u2019t hurt you any more than a dream.',
    speaker: 'Jack',
    chapter: 'Chapter 5 \u2014 Beast from Water',
    context: 'During the assembly where the boys debate whether the beast exists, Jack dismisses the littluns\u2019 fears.',
    analysis:
      'Jack\u2019s dismissal is ironic: he will later exploit the very fear he mocks, using the beast to consolidate power. The simile "any more than a dream" is undermined by the novel\u2019s events, where fear proves far more destructive than any physical threat. Golding shows that fear is not irrational \u2014 it is the catalyst for the boys\u2019 descent into savagery.',
    themes: ['Fear & the Beast', 'Power & Leadership'],
  },
  {
    id: 2,
    quote: 'Kill the pig. Cut her throat. Spill her blood.',
    speaker: 'Jack and the hunters (chant)',
    chapter: 'Chapter 4 \u2014 Painted Faces and Long Hair',
    context: 'The hunters return from their first successful kill, chanting and re-enacting the hunt.',
    analysis:
      'The imperative verbs create a ritualistic rhythm that strips killing of moral weight. The short, brutal sentences mirror the violence they describe. The chant will evolve and intensify throughout the novel, eventually replacing "pig" with human targets. Golding uses the chant\u2019s repetition to show how violence becomes normalised through ritual.',
    themes: ['Civilisation vs Savagery', 'Violence & Ritual', 'Loss of Innocence'],
  },
  {
    id: 3,
    quote: 'Ralph wept for the end of innocence, the darkness of man\u2019s heart, and the fall through the air of the true, wise friend called Piggy.',
    speaker: 'Narrator',
    chapter: 'Chapter 12 \u2014 Cry of the Hunters',
    context: 'The final paragraph of the novel. Ralph weeps as the naval officer arrives and the reality of what has happened overwhelms him.',
    analysis:
      'This is the novel\u2019s emotional and thematic climax. The tricolon moves from the abstract ("end of innocence") through the universal ("darkness of man\u2019s heart") to the painfully specific ("the true, wise friend called Piggy"). "Darkness of man\u2019s heart" encapsulates Golding\u2019s thesis: the beast is not external but internal. Ralph\u2019s tears represent the reader\u2019s own reckoning with the novel\u2019s argument.',
    themes: ['Loss of Innocence', 'Fear & the Beast', 'Civilisation vs Savagery'],
  },
  {
    id: 4,
    quote: 'Maybe there is a beast\u2026 maybe it\u2019s only us.',
    speaker: 'Simon',
    chapter: 'Chapter 5 \u2014 Beast from Water',
    context: 'Simon tentatively proposes that the beast is not an external creature but something within the boys themselves.',
    analysis:
      'This is the novel\u2019s central insight, spoken by its most perceptive character. The ellipsis captures Simon\u2019s hesitation \u2014 the truth is too disturbing to state confidently. "Only us" is devastating in its simplicity: the beast requires no supernatural explanation. The other boys\u2019 hostile response to this suggestion shows that they are not ready to confront their own capacity for evil.',
    themes: ['Fear & the Beast', 'Human Nature', 'Loss of Innocence'],
  },
  {
    id: 5,
    quote: 'We did everything adults would do. What went wrong?',
    speaker: 'Ralph',
    chapter: 'Chapter 11 \u2014 Castle Rock',
    context: 'Ralph reflects on the failure of their society after Piggy\u2019s death and the theft of the glasses.',
    analysis:
      'The question is naively rhetorical \u2014 Ralph assumes that imitating adult systems should guarantee civilised outcomes. Golding\u2019s irony is sharp: the novel exists to prove that adult civilisation is itself a fragile veneer over the same savagery. The naval officer\u2019s warship in the final chapter confirms this: the adults are fighting their own war.',
    themes: ['Civilisation vs Savagery', 'Loss of Innocence', 'Human Nature'],
  },
  {
    id: 6,
    quote: 'The conch exploded into a thousand white fragments and ceased to exist.',
    speaker: 'Narrator',
    chapter: 'Chapter 11 \u2014 Castle Rock',
    context: 'The boulder that kills Piggy also destroys the conch shell.',
    analysis:
      'The conch has symbolised democratic order throughout the novel; its destruction is the destruction of civilisation itself. "Ceased to exist" is absolute and final \u2014 there is no reforming or recovering what has been lost. Golding makes the symbol\u2019s destruction simultaneous with Piggy\u2019s death to show that reason and democracy die together.',
    themes: ['Civilisation vs Savagery', 'Power & Leadership'],
  },
  {
    id: 7,
    quote: 'Fancy thinking the Beast was something you could hunt and kill!',
    speaker: 'The Lord of the Flies (pig\u2019s head)',
    chapter: 'Chapter 8 \u2014 Gift for the Darkness',
    context: 'Simon\u2019s hallucinatory encounter with the pig\u2019s head on a stick.',
    analysis:
      'The pig\u2019s head articulates what Simon has already intuited: the beast cannot be killed because it is part of human nature. The exclamation mark conveys mockery \u2014 the beast laughs at the boys\u2019 attempts to externalise evil. Golding uses the hallucination to deliver the novel\u2019s thesis in the voice of evil itself.',
    themes: ['Fear & the Beast', 'Human Nature'],
  },
  {
    id: 8,
    quote: 'I\u2019m part of you. Close, close, close! I\u2019m the reason why it\u2019s no go. Why things are what they are.',
    speaker: 'The Lord of the Flies',
    chapter: 'Chapter 8 \u2014 Gift for the Darkness',
    context: 'The pig\u2019s head continues its address to Simon, claiming to be inseparable from humanity.',
    analysis:
      'The repetition of "close" creates claustrophobic intensity. "Part of you" eliminates any distance between the beast and the self. "Why things are what they are" dismisses the possibility of reform or progress \u2014 evil is not a problem to be solved but a condition to be acknowledged. Golding\u2019s pessimism is total.',
    themes: ['Fear & the Beast', 'Human Nature', 'Loss of Innocence'],
  },
  {
    id: 9,
    quote: 'The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness.',
    speaker: 'Narrator',
    chapter: 'Chapter 4 \u2014 Painted Faces and Long Hair',
    context: 'Jack paints his face with clay and charcoal before the first hunt.',
    analysis:
      'The mask allows Jack to abandon the restraints of civilisation. "Liberated" is deliberately ambiguous: liberation from shame is also liberation from morality. Golding shows that the removal of social identity enables savagery. The face paint functions as the novel\u2019s most concrete symbol of decivilisation.',
    themes: ['Civilisation vs Savagery', 'Loss of Innocence', 'Power & Leadership'],
  },
  {
    id: 10,
    quote: 'Which is better \u2014 to be a pack of painted savages like you are, or to be sensible like Ralph is?',
    speaker: 'Piggy',
    chapter: 'Chapter 11 \u2014 Castle Rock',
    context: 'Piggy\u2019s final speech before he is killed, pleading for reason and order.',
    analysis:
      'Piggy\u2019s binary question assumes that reason will triumph if stated clearly enough. The fact that he is murdered moments later is Golding\u2019s answer: savagery does not lose arguments; it eliminates the people who make them. "Painted savages" connects to the mask imagery \u2014 the boys have become unrecognisable.',
    themes: ['Civilisation vs Savagery', 'Power & Leadership', 'Human Nature'],
  },
  {
    id: 11,
    quote: 'He found himself understanding the wearisomeness of this life, where every path was an improvisation and a considerable part of one\u2019s waking life was spent watching one\u2019s feet.',
    speaker: 'Narrator (about Ralph)',
    chapter: 'Chapter 7 \u2014 Shadows and Tall Trees',
    context: 'Ralph becomes aware of how far they have fallen from civilised standards.',
    analysis:
      'The physical detail of watching one\u2019s feet conveys exhaustion and loss of purpose. "Improvisation" replaces the structured, planned existence of civilisation. Golding uses Ralph\u2019s gradual awareness to show that the loss of civilisation is not dramatic but grinding \u2014 a slow erosion of standards that is almost impossible to resist.',
    themes: ['Civilisation vs Savagery', 'Loss of Innocence'],
  },
  {
    id: 12,
    quote: 'Roger gathered a handful of stones and began to throw them at Henry, throwing to miss.',
    speaker: 'Narrator',
    chapter: 'Chapter 4 \u2014 Painted Faces and Long Hair',
    context: 'Roger throws stones near but not at a littlun, restrained by the memory of adult authority.',
    analysis:
      'The phrase "throwing to miss" reveals the fragility of civilisation. Roger wants to hurt Henry but is held back by the "taboo of the old life." This civilised restraint will erode completely by Chapter 11, when Roger drops the boulder that kills Piggy. Golding maps Roger\u2019s progression from throwing to miss to killing without hesitation.',
    themes: ['Civilisation vs Savagery', 'Human Nature', 'Loss of Innocence'],
  },
  {
    id: 13,
    quote: 'His mind was crowded with memories; memories of the knowledge that had come to them when they closed in on the struggling pig, knowledge that they had outwitted a living thing, imposed their will upon it, taken away its life like a long satisfying drink.',
    speaker: 'Narrator (about Jack)',
    chapter: 'Chapter 4 \u2014 Painted Faces and Long Hair',
    context: 'Jack\u2019s internal experience after his first successful kill.',
    analysis:
      'The simile "like a long satisfying drink" compares killing to physical pleasure, suggesting that violence fulfils a primal need. "Imposed their will" reveals that hunting is about power, not food. Golding shows that the thrill of domination is addictive \u2014 once experienced, it will be sought again, with escalating targets.',
    themes: ['Violence & Ritual', 'Civilisation vs Savagery', 'Power & Leadership'],
  },
  {
    id: 14,
    quote: 'The world, that understandable and lawful world, was slipping away.',
    speaker: 'Narrator (about Ralph)',
    chapter: 'Chapter 5 \u2014 Beast from Water',
    context: 'Ralph struggles to maintain order during an increasingly chaotic assembly.',
    analysis:
      'The adjectives "understandable" and "lawful" define civilisation as comprehensibility and structure. "Slipping away" conveys gradual, uncontrollable loss. Golding\u2019s use of Ralph\u2019s perspective creates sympathy for the civilising impulse while simultaneously showing its inadequacy against the force of human nature.',
    themes: ['Civilisation vs Savagery', 'Power & Leadership'],
  },
  {
    id: 15,
    quote: 'The desire to squeeze and hurt was over-mastering.',
    speaker: 'Narrator (about Ralph)',
    chapter: 'Chapter 7 \u2014 Shadows and Tall Trees',
    context: 'Ralph participates in the mock hunt of Robert and feels the thrill of violence.',
    analysis:
      'This is one of the novel\u2019s most disturbing moments because it happens to Ralph \u2014 the character who represents civilisation. "Over-mastering" suggests that the urge to violence is stronger than the will to resist it. Golding refuses to exempt any character from the darkness of human nature.',
    themes: ['Human Nature', 'Violence & Ritual', 'Loss of Innocence'],
  },
  {
    id: 16,
    quote: 'What are we? Humans? Or animals? Or savages?',
    speaker: 'Piggy',
    chapter: 'Chapter 5 \u2014 Beast from Water',
    context: 'Piggy appeals to the boys during the assembly, trying to restore order.',
    analysis:
      'Piggy\u2019s three-part question assumes a clear hierarchy: humans above animals above savages. The novel dismantles this hierarchy by showing that the categories collapse under pressure. The question also implies that "savage" is a chosen state \u2014 Golding argues it is a natural one, barely suppressed by civilisation.',
    themes: ['Civilisation vs Savagery', 'Human Nature'],
  },
  {
    id: 17,
    quote: 'He began to dance and his laughter became a bloodthirsty snarling.',
    speaker: 'Narrator (about Jack)',
    chapter: 'Chapter 4 \u2014 Painted Faces and Long Hair',
    context: 'Jack sees his reflection in the pool with his face painted.',
    analysis:
      'The transformation from laughter to snarling marks the moment Jack crosses from play to genuine menace. "Bloodthirsty" is applied to a child \u2014 Golding insists that savagery is not an adult failing but a human one. The dance prefigures the ritual dances that will culminate in Simon\u2019s murder.',
    themes: ['Civilisation vs Savagery', 'Violence & Ritual'],
  },
  {
    id: 18,
    quote: 'The rock struck Piggy a glancing blow from chin to knee; the conch exploded \u2026 Piggy fell forty feet and landed on his back across the square red rock in the sea.',
    speaker: 'Narrator',
    chapter: 'Chapter 11 \u2014 Castle Rock',
    context: 'Roger levers the boulder from the cliff, killing Piggy.',
    analysis:
      'The clinical, precise narration ("a glancing blow from chin to knee," "forty feet") contrasts with the enormity of the act. Golding deliberately avoids sensationalism: the flat reporting makes the violence more shocking, not less. The simultaneous destruction of Piggy and the conch confirms that reason and democracy are inseparable.',
    themes: ['Civilisation vs Savagery', 'Power & Leadership', 'Human Nature'],
  },
  {
    id: 19,
    quote: 'They looked at each other, baffled, in love and hate.',
    speaker: 'Narrator (about Ralph and Jack)',
    chapter: 'Chapter 12 \u2014 Cry of the Hunters',
    context: 'Ralph and Jack face each other during the final hunt.',
    analysis:
      'The oxymoron "love and hate" captures the complexity of their relationship. They are drawn to each other because they represent opposing but inseparable aspects of human nature: the civilising impulse and the will to dominate. Golding suggests that these forces are not enemies but twins.',
    themes: ['Power & Leadership', 'Human Nature', 'Civilisation vs Savagery'],
  },
  {
    id: 20,
    quote: 'A naval officer stood on the sand, looking down at Ralph in wary ceremonial surprise.',
    speaker: 'Narrator',
    chapter: 'Chapter 12 \u2014 Cry of the Hunters',
    context: 'The naval officer discovers the boys on the burning island.',
    analysis:
      '"Ceremonial" is loaded with irony: the officer represents civilised authority, but he is part of a warship engaged in the same violence the boys have enacted on a smaller scale. "Wary" suggests even the adult is uncertain. Golding\u2019s ending refuses to offer rescue \u2014 it merely transfers the boys from one theatre of human violence to another.',
    themes: ['Civilisation vs Savagery', 'Loss of Innocence', 'Human Nature'],
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function LOTFKeyQuotesPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Lord of the Flies", url: "https://theenglishhub.app/revision/texts/lord-of-the-flies" },
          { name: "Key Quotations", url: "https://theenglishhub.app/revision/texts/lord-of-the-flies/key-quotes" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Lord of the Flies" textType="novel" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/lord-of-the-flies"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Lord of the Flies
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
            Lord of the Flies &mdash; Key Quotes
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by William Golding &mdash; 1954
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
                Aim for 10&ndash;12 quotes you can analyse confidently. Choose
                quotes that cover multiple themes so each one earns maximum
                marks. For each quote, practise identifying the technique
                (imagery, symbolism, irony), explaining its effect, and linking
                it to Golding&rsquo;s views on human nature.
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
            Explore characters, themes, context and essay plans for Lord of the Flies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/lord-of-the-flies/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/lord-of-the-flies/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/lord-of-the-flies/context"
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
          <em>Lord of the Flies</em> by William Golding is published by Faber and
          Faber. Full text available from your school or local library.
        </p>
      </div>
    </div>
  )
}
