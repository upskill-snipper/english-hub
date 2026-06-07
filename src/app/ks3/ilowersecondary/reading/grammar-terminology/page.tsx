import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  QUESTION_TYPES,
  YEAR9_CODES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grammar terminology reference - iLowerSecondary English',
    description:
      'A precise, plain-English glossary of every word class, sentence type, clause and punctuation term tested by the “underline the word / verb class” question, with original examples and a 15-item self-test.',
  },
  title: 'Grammar terminology reference - iLowerSecondary English',
  description:
    'A precise, plain-English glossary of every word class, sentence type, clause and punctuation term tested by the “underline the word / verb class” question, with original examples and a 15-item self-test.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/reading/grammar-terminology',
  },
}

const RAO3 = ASSESSMENT_OBJECTIVES.RAO3
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const UNDERLINE_Q = QUESTION_TYPES.find((q) => q.id === 'underline-word-class')!
const W93J = YEAR9_CODES.find((c) => c.code === 'W9.3J')!

type Term = {
  term: string
  definition: string
  examples: string[]
  /** Optional 5-second spotting tip for tricky exam terms. */
  tip?: string
}

type Group = {
  heading: string
  intro: string
  terms: Term[]
}

const GROUPS: Group[] = [
  {
    heading: 'Nouns',
    intro:
      'A noun names a person, place, thing, idea or group. The four sub-types below are all still nouns - the label just tells you what kind of thing is being named.',
    terms: [
      {
        term: 'Common noun',
        definition:
          'A general, everyday name for a type of thing - not a specific name. It is not given a capital letter unless it begins a sentence.',
        examples: [
          'The kettle boiled while the dog slept by the door.',
          'A storm flattened the wheat in the field.',
        ],
      },
      {
        term: 'Proper noun',
        definition:
          'The specific name of one particular person, place, organisation, day or title. It always takes a capital letter.',
        examples: [
          'Priya caught the early train from Leeds on Tuesday.',
          'The lighthouse on Ravensgate Point was built in 1871.',
        ],
      },
      {
        term: 'Abstract noun',
        definition:
          'Names something you cannot touch, see or hear - a feeling, quality, state or idea.',
        examples: [
          'Her courage during the rescue surprised everyone.',
          'The silence carried a strange sense of dread.',
        ],
      },
      {
        term: 'Collective noun',
        definition:
          'A single word that names a whole group of people, animals or things considered as one unit.',
        examples: [
          'A flock of geese rose from the marsh at dawn.',
          'The committee voted to repair the village hall.',
        ],
      },
    ],
  },
  {
    heading: 'Pronouns',
    intro:
      'A pronoun stands in for a noun so a writer does not have to repeat it. The type depends on the job the pronoun is doing in the sentence.',
    terms: [
      {
        term: 'Personal pronoun',
        definition:
          'Replaces a noun that refers to a person or thing - for example I, you, he, she, it, we, they (and the object forms me, him, her, us, them).',
        examples: [
          'When the dancers finished, they bowed and the crowd cheered them.',
          'I left the parcel on the step because it was raining.',
        ],
      },
      {
        term: 'Possessive pronoun',
        definition:
          'Shows ownership and replaces a noun entirely - mine, yours, his, hers, ours, theirs. (Words like my or our are possessive determiners, not pronouns, because they sit in front of a noun.)',
        examples: [
          'That umbrella is not yours; the red one is mine.',
          'Their garden is tidy, but ours has the taller sunflowers.',
        ],
      },
      {
        term: 'Relative pronoun',
        definition:
          'Introduces a relative clause and links it to a noun - who, whom, whose, which or that.',
        examples: [
          'The mechanic who fixed the brakes also checked the tyres.',
          'We climbed the hill that overlooks the harbour.',
        ],
      },
    ],
  },
  {
    heading: 'Verbs',
    intro:
      'A verb expresses an action, a process or a state of being. Verbs are the part most often tested, so the sub-types below are worth knowing precisely.',
    terms: [
      {
        term: 'Regular verb',
        definition: 'Forms its past tense and past participle by simply adding -ed (or -d).',
        examples: [
          'Yesterday the volunteers painted the fence and tidied the yard.',
          'She walked home and waited under the bridge.',
        ],
      },
      {
        term: 'Irregular verb',
        definition:
          'Does not add -ed for the past tense; instead the word itself changes (go → went, swim → swam, bring → brought).',
        examples: [
          'He swam to the buoy, then went back for his goggles.',
          'They brought blankets and kept the campfire alight.',
        ],
        tip: 'Put the verb into the past tense in your head. If it does NOT end in -ed (it changes its spelling instead), it is irregular: “teach” → “taught”, not “teached”.',
      },
      {
        term: 'Auxiliary verb',
        definition:
          'A “helping” verb (be, have, do) used in front of a main verb to form a tense, a question or a negative.',
        examples: [
          'The engineers have finished the survey.',
          'She was running when the alarm rang.',
        ],
        tip: 'Look for a small helper verb (a form of be, have or do) sitting just before the main verb that carries the real meaning: in “is sleeping”, “is” is the auxiliary and “sleeping” is the main verb.',
      },
      {
        term: 'Modal verb',
        definition:
          'A special auxiliary that shows possibility, ability, permission or obligation - can, could, may, might, shall, should, will, would, must.',
        examples: [
          'You must wear a helmet, but you may remove your gloves.',
          'The bridge could collapse if the river rises further.',
        ],
        tip: 'There are only nine common modals - can, could, may, might, shall, should, will, would, must. Memorise the list; if the word is on it and sits before another verb, it is a modal.',
      },
      {
        term: 'Imperative verb',
        definition:
          'A verb used to give a command, an instruction or firm advice. The subject (“you”) is understood, not stated, so the verb usually starts the sentence or clause.',
        examples: [
          'Close the gate and lock it behind you.',
          'Stir the mixture gently, then pour it into the tin.',
        ],
        tip: 'Ask: “Is this sentence telling someone to do something, with no named subject in front of the verb?” If you could add the word “you” before it and it still works as an order, it is imperative: “(You) Stop.”',
      },
      {
        term: 'Infinitive',
        definition:
          'The base form of a verb, usually with the word “to” in front of it (to run, to decide). It names the action without tying it to a tense or subject.',
        examples: [
          'She wanted to explore the abandoned mill.',
          'To win the prize, the team had to finish before noon.',
        ],
      },
    ],
  },
  {
    heading: 'Adjectives and adverbs',
    intro: 'These two classes describe other words. The difference is what they describe.',
    terms: [
      {
        term: 'Adjective',
        definition:
          'Describes or modifies a noun (or pronoun), telling us which one, what kind or how many.',
        examples: [
          'A narrow, crooked lane led to the ancient farmhouse.',
          'The frightened kitten hid behind the heavy curtain.',
        ],
      },
      {
        term: 'Adverb',
        definition:
          'Modifies a verb, an adjective or another adverb, telling us how, when, where or to what degree. Many (but not all) end in -ly.',
        examples: [
          'She spoke quietly, then left the room immediately.',
          'The kite climbed extremely high before it dipped.',
        ],
      },
    ],
  },
  {
    heading: 'Prepositions',
    intro: 'A small but important class that shows relationships between words.',
    terms: [
      {
        term: 'Preposition',
        definition:
          'Shows the relationship - usually of place, time or direction - between a noun (or pronoun) and the rest of the sentence: in, on, under, before, between, towards, during.',
        examples: [
          'The cat slept under the table during the storm.',
          'We walked towards the lighthouse after lunch.',
        ],
      },
    ],
  },
  {
    heading: 'Conjunctions and connectives',
    intro:
      'A conjunction joins words, phrases or clauses. The mark scheme also uses the broader word “connective” for any word or phrase that links ideas. The sub-types below describe what kind of join is being made.',
    terms: [
      {
        term: 'Coordinating conjunction',
        definition:
          'Joins two parts of equal grammatical weight (two main clauses, or two like words). The common ones are remembered as FANBOYS: for, and, nor, but, or, yet, so.',
        examples: [
          'The path was steep, but the view was worth it.',
          'Pack a torch and bring spare batteries.',
        ],
      },
      {
        term: 'Subordinating conjunction',
        definition:
          'Begins a subordinate clause and shows how it depends on the main clause - because, although, while, if, when, since, unless, until.',
        examples: [
          'Although it was late, the workers stayed until the wall was finished.',
          'The match continued because the rain had stopped.',
        ],
      },
      {
        term: 'Complex connective',
        definition:
          'A linking word or phrase (often more than one word) that signals a sophisticated relationship between ideas - such as a contrast, a result or a sequence: however, therefore, on the other hand, as a result, consequently, in addition.',
        examples: [
          'The plan was expensive; however, the council approved it.',
          'The river had burst its banks. Consequently, the road was closed.',
        ],
      },
    ],
  },
  {
    heading: 'Determiners',
    intro: 'A determiner comes before a noun and pins down which or how much is meant.',
    terms: [
      {
        term: 'Determiner',
        definition:
          'Introduces a noun and shows whether it is specific, general or quantified. It includes the articles (a, an, the), demonstratives (this, that, these, those), possessive determiners (my, your, our, their) and quantifiers (some, many, three, every).',
        examples: [
          'The librarian found those missing books on every shelf.',
          'My brother borrowed three pencils and some paper.',
        ],
      },
    ],
  },
  {
    heading: 'Sentence types',
    intro: 'A sentence type is classified by how many clauses it has and how they are joined.',
    terms: [
      {
        term: 'Simple sentence',
        definition:
          'Contains one main clause: a single subject and verb expressing one complete idea.',
        examples: ['The bell rang.', 'The exhausted runners crossed the finish line.'],
      },
      {
        term: 'Compound sentence',
        definition:
          'Two (or more) main clauses of equal weight joined by a coordinating conjunction (or a semicolon). Either clause could stand alone.',
        examples: [
          'The sun set and the temperature dropped sharply.',
          'I knocked twice, but nobody answered.',
        ],
      },
      {
        term: 'Complex sentence',
        definition:
          'A main clause joined to at least one subordinate clause, which cannot stand alone.',
        examples: [
          'Because the lift was broken, we climbed the stairs.',
          'The dog, which had been missing for a week, returned at dawn.',
        ],
      },
      {
        term: 'Minor sentence',
        definition:
          'A grammatically incomplete unit used deliberately for effect - it lacks a finite verb but works as a sentence (often a single word, phrase or exclamation).',
        examples: ['No way.', 'Silence. Then a single, distant knock.'],
      },
    ],
  },
  {
    heading: 'Clauses',
    intro:
      'A clause is a group of words built around a verb. The type depends on whether it can stand alone and what job it does.',
    terms: [
      {
        term: 'Main clause',
        definition:
          'A clause that contains a subject and verb and makes complete sense on its own. (Also called an independent clause.)',
        examples: [
          'The tide came in quickly.',
          '“She locked the door before she left.” - “She locked the door” is the main clause.',
        ],
      },
      {
        term: 'Subordinate clause',
        definition:
          'A clause that adds information to a main clause but cannot stand alone. It usually begins with a subordinating conjunction.',
        examples: [
          '“When the music stopped, everyone turned round.” - “When the music stopped” is the subordinate clause.',
          '“We waited until the storm passed.” - “until the storm passed” is the subordinate clause.',
        ],
      },
      {
        term: 'Relative clause',
        definition:
          'A type of subordinate clause that gives extra information about a noun. It begins with a relative pronoun (who, which, that, whose).',
        examples: [
          '“The scientist who discovered the leak alerted the team.” - “who discovered the leak” is the relative clause.',
          '“The bridge, which was rebuilt last year, is safe again.” - “which was rebuilt last year” is the relative clause.',
        ],
      },
    ],
  },
  {
    heading: 'Punctuation terms',
    intro:
      'The exam may ask you to identify a punctuation mark by name or by the job it is doing. The apostrophe in particular has two completely different jobs.',
    terms: [
      {
        term: 'Apostrophe (possession)',
        definition:
          'Shows that something belongs to someone or something. It goes before the s for a singular owner and after the s for a plural owner.',
        examples: [
          'The teacher’s desk was tidy. (one teacher)',
          'The players’ kit was muddy. (more than one player)',
        ],
      },
      {
        term: 'Apostrophe (omission)',
        definition:
          'Marks the place where one or more letters have been left out to form a contraction.',
        examples: [
          'It’s late, and they haven’t arrived yet. (it is / have not)',
          'We’ll go if you can’t wait. (we will / cannot)',
        ],
      },
      {
        term: 'Colon',
        definition:
          'Introduces something that follows on directly - usually a list, an explanation or an example - after a clause that could stand alone.',
        examples: [
          'Pack three things: a torch, water and a map.',
          'The reason was simple: nobody had checked the lock.',
        ],
      },
      {
        term: 'Semicolon',
        definition:
          'Joins two closely related main clauses without a conjunction, or separates items in a list when those items already contain commas.',
        examples: [
          'The garden was overgrown; nobody had tended it for years.',
          'We visited Cairo, Egypt; Lima, Peru; and Oslo, Norway.',
        ],
      },
      {
        term: 'Dash',
        definition:
          'Marks a sharp break, an afterthought or added information. A pair of dashes works like a pair of brackets to enclose extra detail.',
        examples: [
          'She opened the box - and froze.',
          'The hall - cold, dim and dusty - had not been used for years.',
        ],
      },
      {
        term: 'Brackets (parentheses)',
        definition:
          'Enclose extra, non-essential information that could be removed without breaking the sentence.',
        examples: [
          'The festival (now in its tenth year) attracts huge crowds.',
          'Bring your ticket (printed or on a phone) to the gate.',
        ],
      },
      {
        term: 'Ellipsis',
        definition:
          'Three dots that show words have been left out, a sentence trails off, or a deliberate pause is created for tension.',
        examples: [
          'She reached for the handle … and stopped.',
          '“I thought you said …” His voice faded.',
        ],
      },
    ],
  },
]

type SelfTest = {
  sentence: string
  /** The target word or phrase, shown emphasised in the sentence. */
  target: string
  answer: string
}

const SELF_TEST: SelfTest[] = [
  {
    sentence: 'The exhausted hikers reached the summit at last.',
    target: 'exhausted',
    answer: 'Adjective - it describes the noun “hikers”.',
  },
  {
    sentence: 'Switch off the lights before you leave the lab.',
    target: 'Switch',
    answer: 'Imperative verb - it gives a command with an understood subject “you”.',
  },
  {
    sentence: 'A swarm of bees settled on the old apple tree.',
    target: 'swarm',
    answer: 'Collective noun - it names a whole group of bees as one unit.',
  },
  {
    sentence: 'You must finish the report before Friday.',
    target: 'must',
    answer: 'Modal verb - it shows obligation and is on the nine-modal list.',
  },
  {
    sentence: 'The detective walked towards the locked warehouse.',
    target: 'towards',
    answer: 'Preposition - it shows the direction relating “walked” to “warehouse”.',
  },
  {
    sentence: 'Honesty mattered more to her than winning.',
    target: 'Honesty',
    answer: 'Abstract noun - it names a quality you cannot touch or see.',
  },
  {
    sentence: 'They had repaired the roof before the rain returned.',
    target: 'had',
    answer: 'Auxiliary verb - a form of “have” helping the main verb “repaired”.',
  },
  {
    sentence: 'Although it was freezing, the match went ahead.',
    target: 'Although',
    answer: 'Subordinating conjunction - it begins the subordinate clause.',
  },
  {
    sentence: 'The novelist who wrote that mystery lives nearby.',
    target: 'who',
    answer: 'Relative pronoun - it introduces the relative clause about “novelist”.',
  },
  {
    sentence: 'She quickly sealed the envelope and posted it.',
    target: 'quickly',
    answer: 'Adverb - it modifies the verb “sealed”, telling us how.',
  },
  {
    sentence: 'That red bicycle is mine, not yours.',
    target: 'mine',
    answer: 'Possessive pronoun - it replaces the noun and shows ownership.',
  },
  {
    sentence: 'The team flew to Tokyo for the championship.',
    target: 'flew',
    answer: 'Irregular verb - the past of “fly” changes spelling instead of adding -ed.',
  },
  {
    sentence: 'Every passenger showed a ticket at the barrier.',
    target: 'Every',
    answer: 'Determiner - a quantifier introducing and limiting the noun “passenger”.',
  },
  {
    sentence: 'He hoped to travel across the desert by spring.',
    target: 'to travel',
    answer: 'Infinitive - the base verb with “to”, naming the action untensed.',
  },
  {
    sentence: 'The committee met on Thursday in Manchester.',
    target: 'Manchester',
    answer: 'Proper noun - the specific name of one place, so capitalised.',
  },
]

function highlight(sentence: string, target: string) {
  const idx = sentence.indexOf(target)
  if (idx === -1) return sentence
  return (
    <>
      {sentence.slice(0, idx)}
      <strong className="text-foreground underline decoration-primary decoration-2 underline-offset-2">
        {target}
      </strong>
      {sentence.slice(idx + target.length)}
    </>
  )
}

export default async function GrammarTerminologyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Reading skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading',
          },
          {
            name: 'Grammar terminology',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading/grammar-terminology',
          },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.bc.reading_skills')}</span>
        <span> · </span>
        <span>{await t('ks3.page.reading.grammar_terminology.bc')}</span>
      </p>

      <h1>Grammar terminology reference</h1>
      <p className="lead">
        One marked question on the reading paper asks you to underline a word and label its class -
        and it rewards exact terminology. This page defines every term that question can use, with
        original example sentences written by The English Hub, plus quick spotting tips for the
        terms students most often confuse.
      </p>

      {/* ── Why this matters ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>Why the exact word matters</h2>
        <p>
          The “{UNDERLINE_Q.name}” question is a closed item worth {UNDERLINE_Q.typicalMarks} mark.{' '}
          {UNDERLINE_Q.format} It assesses {RAO3.code} and {RAO4.code}:
        </p>
        <ul>
          <li>
            <strong>{RAO3.code}</strong> - {RAO3.descriptor}
          </li>
          <li>
            <strong>{RAO4.code}</strong> - {RAO4.descriptor}
          </li>
        </ul>
        <p>
          It maps directly to Year 9 objective{' '}
          <span className="font-mono text-sm text-primary">{W93J.code}</span>:{' '}
          {W93J.descriptor.toLowerCase()} The instruction to examiners is simple - “
          {UNDERLINE_Q.howToAnswer}” In short: name the class with the correct technical word, and
          underline only the word the question asks for.
        </p>
      </section>

      {/* ── Glossary groups ──────────────────────────────────────── */}
      {GROUPS.map((group) => (
        <section key={group.heading} className="my-10">
          <h2>{group.heading}</h2>
          <p>{group.intro}</p>
          <div className="not-prose mt-4 space-y-3">
            {group.terms.map((term) => (
              <div key={term.term} className="rounded-xl border border-border/60 bg-card p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-primary mb-2">
                  {term.term}
                </p>
                <p className="text-sm text-foreground leading-relaxed">{term.definition}</p>
                <ul className="mt-3 space-y-1.5">
                  {term.examples.map((ex) => (
                    <li key={ex} className="text-sm text-muted-foreground italic leading-relaxed">
                      {ex}
                    </li>
                  ))}
                </ul>
                {term.tip ? (
                  <div className="mt-4 rounded-lg border border-primary/40 bg-primary/[0.04] p-3">
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                      Spot it in 5 seconds
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{term.tip}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── Self-test ────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Self-test: name the word class</h2>
        <p>
          For each sentence, decide the class of the{' '}
          <strong className="underline decoration-primary decoration-2 underline-offset-2">
            underlined
          </strong>{' '}
          word, then check the answer. These fifteen sentences are original and are not taken from
          any past paper.
        </p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  #
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Sentence
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Answer
                </th>
              </tr>
            </thead>
            <tbody>
              {SELF_TEST.map((item, i) => (
                <tr key={item.sentence} className="border-b border-border/40 align-top">
                  <td className="p-3 font-mono text-xs text-primary">{i + 1}</td>
                  <td className="p-3 text-foreground">{highlight(item.sentence, item.target)}</td>
                  <td className="p-3 text-muted-foreground">{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────── */}
      <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground leading-relaxed">
        {SPEC_ATTRIBUTION}
      </footer>
    </>
  )
}
