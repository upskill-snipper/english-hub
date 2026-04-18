'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */
/* NOTE: "Half-Caste" by John Agard is IN COPYRIGHT.                 */
/* Only short extracts (key phrases, ≤15 words per annotation) are   */
/* used here for the purpose of criticism, review and study under    */
/* fair dealing (Copyright, Designs and Patents Act 1988, s.30).     */

const poem: PoemData = {
  title: 'Half-Caste',
  poet: 'John Agard',
  lines: [
    {
      text: 'Excuse me',
      annotations: [
        {
          type: 'Tone',
          note: 'The poem opens with mock politeness. "Excuse me" is ironic — the speaker is not really apologising, but challenging the listener to justify themselves. The exaggerated courtesy highlights how absurd it is that the speaker should have to explain or excuse his identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'standing on one leg',
      annotations: [
        {
          type: 'Key phrase',
          note: '"Standing on one leg" — the speaker mockingly performs the literal meaning of "half". If he is only half a person, then he can only stand on one leg. This physical absurdity exposes the absurdity of the label "half-caste".',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I\'m half-caste',
      annotations: [
        {
          type: 'Irony',
          note: 'The speaker adopts the offensive term to dismantle it. By claiming the label himself, he can show how ridiculous it is. The whole poem is an act of reclaiming and dismantling a word used to diminish mixed-race people.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: Explain yuself / wha yu mean]',
      annotations: [
        {
          type: 'Direct address',
          note: 'The repeated demand "Explain yuself" turns the tables on the listener. Instead of the mixed-race speaker having to justify himself, the person who used the term must explain what they mean. The Caribbean dialect spelling asserts cultural identity.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: Picasso mix red an green]',
      annotations: [
        {
          type: 'Analogy — Art',
          note: 'Agard argues that when Picasso mixed colours on canvas, nobody called the painting "half-caste". Mixing is seen as creative genius in art but as something lesser in human beings. This exposes the double standard.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Extract: Tchaikovsky mix a black key / wid a white key]',
      annotations: [
        {
          type: 'Analogy — Music',
          note: 'A second analogy: Tchaikovsky combined black and white piano keys to create beautiful music. Nobody calls a symphony "half-caste". Agard shows that mixing is natural and beautiful in every field except racial identity, where prejudice distorts our judgement.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Extract: England weather / nearly always half-caste]',
      annotations: [
        {
          type: 'Analogy — Weather',
          note: 'A third, humorous analogy: English weather is a mix of sun and cloud. Is the weather "half-caste"? The bathos of comparing racial prejudice to weather is deliberately comic, making the term look silly and small.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: I half-caste human being / cast half-a-shadow]',
      annotations: [
        {
          type: 'Literalisation',
          note: 'Agard takes "half" literally: if he is only half a person, he casts half a shadow. The physical impossibility exposes the linguistic cruelty of the word. The technique of literalising the metaphor runs throughout the poem.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Extract: half-a-dream / half-a-eye]',
      annotations: [
        {
          type: 'Accumulation',
          note: 'The speaker lists more "halves" — half a dream, half an eye, half an ear. The list accumulates until the idea becomes obviously absurd. This rhetorical strategy of piling up examples overwhelms the reader with the foolishness of the term.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: come back tomorrow / wid de whole of yu eye]',
      annotations: [
        {
          type: 'Key phrase',
          note: '"Come back tomorrow / wid de whole of yu eye" — the poem ends with a challenge. The speaker tells the listener to return with their full humanity — whole eye, whole ear, whole mind — and then the speaker will tell them "de other half / of my story". The implication: you can only understand me when you see me as a whole person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Extract: de other half / of my story]',
      annotations: [
        {
          type: 'Final reversal',
          note: 'The final lines cleverly reverse "half". Now it is the listener who is incomplete — seeing with half an eye, hearing with half an ear. The speaker has a whole story; it is the listener who is only offering half their attention. The power has shifted entirely.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Agard (b. 1949)</h3>
    <p>John Agard is a Guyanese-British poet, playwright and children's writer. He was born in British Guiana (now Guyana) and moved to England in 1977. His work frequently explores themes of <strong>cultural identity</strong>, <strong>race</strong> and <strong>language</strong>. He writes in both Standard English and Caribbean Creole, often mixing them within a single poem. In 2012 he won the Queen's Gold Medal for Poetry.</p>

    <h3>The term "half-caste"</h3>
    <p>The word "caste" comes from the Portuguese/Spanish <em>casta</em>, meaning "race" or "lineage". "Half-caste" was historically used to describe people of mixed racial heritage, implying they were <strong>incomplete</strong> or <strong>lesser</strong> — literally "half" a person. The term is now widely regarded as offensive. Agard wrote this poem to dismantle the word and expose its cruelty.</p>

    <h3>Multicultural Britain</h3>
    <p>The poem was written in the context of <strong>multicultural Britain</strong> in the late twentieth century. Immigration from the Caribbean (the "Windrush generation" from 1948 onwards) brought new communities to Britain, but also racial tension, discrimination and casual prejudice. Agard's poem confronts everyday racism — not violent attacks, but the thoughtless use of labels that diminish people.</p>

    <h3>Language and power</h3>
    <p>Agard deliberately writes in <strong>Caribbean Creole English</strong> — "yu", "wid", "dem", "wha". This is a political choice. Standard English is the language of the colonial power that once ruled Guyana. By writing in Creole, Agard asserts the value and beauty of his own linguistic heritage. The dialect IS the argument: mixing languages, like mixing races, produces something richer, not lesser.</p>

    <h3>Performance poetry</h3>
    <p>"Half-Caste" is a <strong>performance poem</strong> — written to be spoken aloud. Agard is a celebrated performer, and the poem's rhythms, repetitions and direct address all work best when heard. The confrontational "Explain yuself" is addressed to a live audience, making every listener feel the challenge personally.</p>
  `,

  summary: `The poem opens with mock politeness — "Excuse me / standing on one leg / I'm half-caste". The speaker adopts the offensive label in order to dismantle it, performing its literal meaning to show how absurd it is.

The speaker then demands that the listener explain what they mean by "half-caste". This demand — "Explain yuself / wha yu mean" — is repeated throughout the poem as a refrain, turning the burden of explanation onto the person who used the word.

Agard uses three analogies to show that mixing is valued everywhere except in racial identity. Picasso mixed red and green paint — nobody called his art "half-caste". Tchaikovsky mixed black and white piano keys — nobody called his music "half-caste". English weather mixes sun and cloud — nobody calls the sky "half-caste".

The speaker then literalises the metaphor of "half". If he is only half a person, he must cast half a shadow, dream half a dream, see with half an eye, listen with half an ear. The accumulation of physical impossibilities makes the term look increasingly stupid.

The poem ends with a powerful challenge. The speaker tells the listener to "come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind". Only when the listener approaches as a whole, unprejudiced person will the speaker share "de other half / of my story". The reversal is complete: it is the listener, not the speaker, who has been incomplete all along.

Overall meaning: "Half-Caste" is a poem that uses humour, irony and Caribbean dialect to confront racial prejudice. Agard reclaims an offensive word, exposes its absurdity through analogies and literalisation, and ultimately shifts power from the labeller to the labelled.`,

  formAndStructure: `Form: Free verse — no regular metre, no rhyme scheme. The poem is written as a continuous dramatic monologue addressed directly to a listener. This suits its origins as a performance poem and its conversational, confrontational tone.

Line length: Lines are short and punchy, often just a few words. This creates a staccato, insistent rhythm — like the speaker jabbing a finger at the listener. The shortness also mimics speech patterns.

Dialect: The poem is written in Caribbean Creole English throughout — "yu", "wid", "dem", "wha". This is a structural choice, not decoration. The dialect asserts cultural identity and resists the dominance of Standard English. The mixing of languages mirrors the mixing of races that the poem celebrates.

Repetition: "Explain yuself / wha yu mean" is repeated as a refrain, creating a sense of relentless demand. The word "half" is repeated dozens of times, each repetition making it sound more ridiculous.

Structure — three movements:
• Movement 1 (opening): The speaker introduces himself with mock humility and announces the topic.
• Movement 2 (middle): Three analogies — Picasso, Tchaikovsky, English weather — each showing that mixing is valued in art, music and nature.
• Movement 3 (ending): Literalisation of "half" (half a shadow, half a dream, half an eye) and the final challenge to the listener.

Tone: Mock-polite, ironic, confrontational, humorous, angry. The humour is essential — Agard makes the listener laugh at the absurdity of the term, then feel the anger beneath the laughter.

No punctuation or capitalisation: The poem uses minimal punctuation and no capital letters (except for proper nouns). This removes the hierarchies of Standard English grammar — another act of linguistic resistance.

Enjambment: Lines flow into each other without stops, creating a sense of rapid, unstoppable speech. The speaker will not be silenced or interrupted.`,

  keyQuotes: [
    {
      quote: 'Excuse me / standing on one leg / I\'m half-caste',
      analysis:
        'The opening is brilliantly ironic. "Excuse me" is mock-polite — the speaker pretends to apologise for existing. "Standing on one leg" literalises "half" immediately, showing that if the term were true, the speaker would be physically incomplete. The absurdity is deliberate and sets the tone for the whole poem.',
      themes: ['Identity', 'Irony', 'Absurdity'],
    },
    {
      quote: 'Explain yuself / wha yu mean',
      analysis:
        'The repeated demand turns the power dynamic around. Normally, mixed-race people are expected to explain or justify their identity. Here, the speaker demands that the person who used the term explain themselves. The Caribbean Creole spelling ("yuself", "wha yu") asserts the speaker\'s linguistic identity as valid and powerful.',
      themes: ['Power', 'Language', 'Challenge'],
    },
    {
      quote: 'when Picasso mix red an green / is a half-caste canvas?',
      analysis:
        'The first of three analogies. When a great artist mixes colours, the result is celebrated as genius. Nobody calls a Picasso painting "half-caste". The analogy exposes the double standard: mixing is valued in art but denigrated in human identity. The rhetorical question demands the listener confront their own inconsistency.',
      themes: ['Art', 'Double standards', 'Mixing'],
    },
    {
      quote: 'when Tchaikovsky / mix a black key / wid a white key',
      analysis:
        'The musical analogy is particularly sharp because it uses "black" and "white" — the very colours of racial categorisation — applied to piano keys. Nobody calls a chord "half-caste". The pun on black/white exposes how arbitrary racial categories are when applied to harmony.',
      themes: ['Music', 'Race', 'Harmony'],
    },
    {
      quote: 'I half-caste human being / cast half-a-shadow',
      analysis:
        'The literalisation of "half" reaches its most powerful point. If the speaker is truly half a person, he would cast half a shadow — a physical impossibility. By making the metaphor literal, Agard reveals it as nonsense. The image is both comic and chilling: to call someone "half-caste" is to deny them their full humanity.',
      themes: ['Dehumanisation', 'Literalisation', 'Identity'],
    },
    {
      quote: 'half-a-dream / half-a-eye / half-a-ear',
      analysis:
        'The accumulation of "halves" builds to a crescendo of absurdity. Half a dream, half an eye, half an ear — each image is more ridiculous than the last. The list overwhelms the listener with evidence that the concept of "half" a person makes no sense. The technique is rhetorically powerful: quantity becomes quality.',
      themes: ['Accumulation', 'Absurdity', 'Rhetoric'],
    },
    {
      quote: 'come back tomorrow / wid de whole of yu eye',
      analysis:
        'The command to "come back tomorrow" turns the tables completely. Now it is the listener who is incomplete — they have been looking with half an eye, listening with half an ear. The speaker will only share his full story when the listener brings their full, unprejudiced attention. The challenge is direct, confident and empowering.',
      themes: ['Challenge', 'Wholeness', 'Power reversal'],
    },
    {
      quote: 'de other half / of my story',
      analysis:
        'The final words reclaim "half" one last time. The speaker has a complete identity — a whole story — but the listener has only heard half of it because they have been too prejudiced to listen properly. The poem ends with a promise and a challenge: there is more to the speaker than a label. The listener must earn the right to hear it.',
      themes: ['Identity', 'Completeness', 'Empowerment'],
    },
  ],

  languageDevices: [
    {
      device: 'Literalisation of metaphor',
      example: 'standing on one leg... cast half-a-shadow',
      effect:
        'Agard takes the word "half" literally: if "half-caste" is true, the speaker can only stand on one leg, cast half a shadow, dream half a dream. By making the metaphor literal, the poet exposes it as absurd and cruel. This is the poem\'s central technique.',
      lineRef: 1,
    },
    {
      device: 'Analogy',
      example: 'Picasso mix red an green... Tchaikovsky mix a black key wid a white key',
      effect:
        'Three analogies (art, music, weather) show that mixing is celebrated everywhere except race. Each analogy adds another layer of evidence that the term "half-caste" is intellectually bankrupt. The analogies move from high culture (Picasso, Tchaikovsky) to everyday life (weather), showing that the principle applies universally.',
      lineRef: 6,
    },
    {
      device: 'Caribbean Creole dialect',
      example: 'Explain yuself / wha yu mean / wid',
      effect:
        'Writing in Creole English is itself a political act. Standard English represents colonial power; Creole represents Caribbean identity. By refusing Standard English, Agard asserts the value of his heritage. The dialect also makes the poem feel spoken, direct and personal — a real voice, not a literary exercise.',
      lineRef: 4,
    },
    {
      device: 'Repetition / Refrain',
      example: 'Explain yuself / wha yu mean (repeated)',
      effect:
        'The refrain "Explain yuself" is repeated throughout the poem, creating a relentless, insistent demand. Each repetition becomes more forceful. The word "half" is also repeated obsessively, each use making the term sound more absurd. The repetition mimics the way prejudice is itself repetitive — the same lazy label applied again and again.',
      lineRef: 4,
    },
    {
      device: 'Rhetorical questions',
      example: 'is a half-caste canvas?... is a half-caste symphony?',
      effect:
        'The rhetorical questions force the listener to answer "no" — of course a painting isn\'t "half-caste". Each "no" builds the logical case that a person isn\'t "half-caste" either. The questions are unanswerable, which is the point: the term cannot be defended.',
      lineRef: 6,
    },
    {
      device: 'Direct address and imperative verbs',
      example: 'Excuse me... Explain yuself... come back tomorrow',
      effect:
        'The poem is addressed directly to "yu" — the person who used the term. This makes the poem feel confrontational and personal. The imperatives ("explain", "come back") are commands, not requests. The speaker takes authority over the conversation, reversing the power dynamic that the label tried to impose.',
      lineRef: 0,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'The Tyger',
    poet: 'William Blake',
    href: '/igcse/edexcel/poetry/the-tyger',
    reason:
      'Both poems use questions as their primary technique — Blake asks unanswered questions about creation, Agard asks rhetorical questions that dismantle a racial label. Compare how each poet uses questions to different purposes: Blake to express awe, Agard to express anger.',
    themes: ['Questions', 'Challenge', 'Identity'],
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    href: '/igcse/edexcel/poetry/piano',
    reason:
      'Both poems explore identity and belonging. Lawrence mourns a lost childhood self; Agard defends a present adult self. Compare how each speaker\'s sense of identity is shaped by their past — Lawrence by memory, Agard by cultural heritage.',
    themes: ['Identity', 'Belonging', 'Memory'],
  },
  {
    title: 'If',
    poet: 'Rudyard Kipling',
    href: '/igcse/edexcel/poetry/if',
    reason:
      'Both poems are directly addressed to a listener. Kipling instructs his son in how to be a man; Agard instructs his listener in how to see a whole person. Compare the contrasting views of British identity — Kipling\'s imperial confidence and Agard\'s postcolonial challenge.',
    themes: ['British identity', 'Direct address', 'Power'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function HalfCastePage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
            <BookOpen className="size-5 text-orange-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Half-Caste
            </h1>
            <p className="text-body-sm text-muted-foreground">
              John Agard &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      {/* Fair dealing notice */}
      <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Copyright notice:</strong> &quot;Half-Caste&quot;
          by John Agard is in copyright. Only short extracts (key phrases) are reproduced here
          for the purpose of criticism, review and study, in accordance with fair dealing
          provisions (Copyright, Designs and Patents Act 1988, s.30). For the full text, refer
          to your Edexcel IGCSE anthology.
        </p>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Half-Caste" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another
          from the anthology. These are strong pairings for Half-Caste.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
