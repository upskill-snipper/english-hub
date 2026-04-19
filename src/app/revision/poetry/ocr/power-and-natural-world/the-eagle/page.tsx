'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const theEagle: PoemData = {
  title: 'The Eagle',
  poet: 'Alfred Lord Tennyson',
  lines: [
    {
      text: 'He clasps the crag with crooked hands;',
      annotations: [
        {
          type: 'Personification',
          note: '"Hands" -- the eagle\'s talons are described as hands. From the very first word "He", Tennyson treats the eagle as a person, giving it dignity and character.',
          color: '#10b981',
        },
        {
          type: 'Alliteration',
          note: '"Clasps", "crag", "crooked" -- the harsh "c" sounds mimic the eagle\'s sharp, hooked talons gripping the rock. The sound enacts the meaning.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'The opening line is dense with technique. The eagle is presented as both noble (hands) and predatory (crooked claws on a crag).',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Close to the sun in lonely lands,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Close to the sun" -- the eagle is at such a high altitude that it almost reaches the sun. This places him above the human world entirely.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Lonely lands" -- the eagle is alone in a desolate place. He is not pitied for being alone; rather, his solitude is part of his power. He is too majestic for company.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Ringed with the azure world, he stands.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Ringed with the azure world" -- the blue sky surrounds him completely. He is at the centre of his own kingdom, a king crowned by the heavens.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Azure" -- a deep, luxurious word for blue. It elevates the description beyond ordinary "blue sky" into something royal and grand.',
          color: '#3b82f6',
        },
        {
          type: 'Stillness',
          note: '"He stands" -- short, declarative, full stop. The eagle is utterly still and dominant. This stillness sets up the dramatic contrast in the second stanza.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The wrinkled sea beneath him crawls;',
      annotations: [
        {
          type: 'Personification',
          note: '"Wrinkled sea" makes the ocean seem old and worn. "Crawls" makes it seem feeble, slow, lowly. From the eagle\'s height, even the mighty sea is reduced to something pitiful.',
          color: '#10b981',
        },
        {
          type: 'Perspective',
          note: 'The poem suddenly shifts from looking at the eagle to looking through his eyes. We see what he sees: a wrinkled, crawling sea far below.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'A devastating image of perspective. The sea -- normally vast and powerful -- is made small and slow by the eagle\'s height. Power is relative.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'He watches from his mountain walls,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Mountain walls" -- the cliffs are like the walls of a castle or fortress. The eagle is a king watching over his domain from his fortified palace.',
          color: '#10b981',
        },
        {
          type: 'Stillness',
          note: '"He watches" -- patient, controlled, completely in command. The verb is calm but full of latent threat.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And like a thunderbolt he falls.',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a thunderbolt" -- a sudden, devastating, divine weapon. Thunderbolts were associated with Zeus, king of the gods. The simile makes the eagle\'s dive god-like in its speed and power.',
          color: '#10b981',
        },
        {
          type: 'Volta',
          note: 'After five lines of stillness, the eagle suddenly moves. The contrast is electric: the calmness of the previous lines makes the strike feel even more sudden.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'One of the most famous final lines in English poetry. After all the careful description, the action explodes in a single line. The poem ends with a strike, not a settling.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Alfred Lord Tennyson (1809--1892)</h3>
    <p>Alfred, Lord Tennyson, was the dominant poet of the Victorian era and served as Poet Laureate for over 40 years. He wrote about everything from grand public subjects (war, empire, religion) to small, observed moments in nature. He was a master of sound and image, and "The Eagle" is one of his most condensed displays of both.</p>

    <h3>Composition (1851)</h3>
    <p>"The Eagle" was published in <strong>1851</strong> in a revised edition of Tennyson\'s collected <em>Poems</em>. He subtitled it "A Fragment", suggesting it might once have been intended as part of a longer work. At only six lines, it is one of the shortest poems Tennyson ever published.</p>

    <h3>Romantic and Victorian nature poetry</h3>
    <p>Tennyson is part of a long tradition of writing about nature with reverence and detail. The Romantic poets (Wordsworth, Shelley, Keats) had taught the Victorians to see nature as sublime and powerful. Tennyson takes this further: in "The Eagle" he gives a single bird the dignity of a king and the destructive power of a god.</p>

    <h3>The eagle as symbol</h3>
    <p>Eagles have long been symbols of <strong>power, majesty, and empire</strong>. The Roman Empire, the Holy Roman Empire, the Russian Tsars, the Habsburg Empire, the United States and Napoleonic France all used eagles as imperial symbols. By choosing the eagle, Tennyson is invoking centuries of associations with rulership and dominance.</p>
  `,

  summary: `Stanza 1: The poem opens with the eagle perched at the top of a cliff. He grips the rock with his "crooked hands" (talons), high enough to be "close to the sun in lonely lands". The blue sky surrounds him completely. He is utterly still and utterly in command of his world.

Stanza 2: The perspective shifts to what the eagle sees. Far below him, the sea is "wrinkled" and "crawls" -- it looks small and feeble from this height. The eagle watches everything from his "mountain walls" like a king from his fortress. Then, suddenly and explosively, "like a thunderbolt he falls" -- diving down to strike.

Overall meaning: In just six lines, Tennyson creates a portrait of pure power. The eagle is presented as solitary, majestic, and devastating. The contrast between the stillness of the first stanza and the explosive movement of the final line makes the strike feel like an act of divine violence. The poem celebrates the awe-inspiring power of nature and the predator at its peak.`,

  formAndStructure: `Form: Two stanzas of three lines each (tercets), each with the same monorhyme scheme (AAA / BBB). Each stanza\'s three lines all rhyme together. This is highly unusual and gives the poem a chant-like, almost incantatory quality.

Metre: Iambic tetrameter -- four iambs per line, eight syllables. The metre is regular and steady, like a controlled heartbeat. It mirrors the patient stillness of the eagle.

Brevity: At just six lines, the poem is extraordinarily compact. Tennyson packs an entire scene -- description, perspective shift, and explosive action -- into a tiny space. Every word is doing work.

Two-stanza structure: The two stanzas mirror each other. Stanza 1 is about stillness (the eagle perched). Stanza 2 begins with stillness (watching) but ends with explosive movement (falling). The structure builds tension across the poem and releases it in the final line.

Volta: The turn happens in the very last line. After five lines of stillness, the eagle dives "like a thunderbolt". The sudden movement after the patient watching is the poem\'s most dramatic moment.

Sound: The poem is full of harsh, hard consonants -- "clasps", "crag", "crooked", "rings", "crawls", "thunderbolt". These sounds reinforce the eagle\'s sharpness and power. The alliteration in line 1 is particularly striking.

Personification throughout: The eagle is referred to as "he" from the start. He has "hands", he "stands", he "watches", he "falls". The personification gives the bird the dignity of a person and the authority of a king.`,

  keyQuotes: [
    {
      quote: 'He clasps the crag with crooked hands',
      analysis:
        'The opening line packs personification, alliteration and imagery into nine words. "He" and "hands" make the eagle a person. The harsh "c" alliteration ("clasps", "crag", "crooked") echoes the sharp talons gripping the rock -- you can almost hear the claws scraping. The eagle is both noble (hands) and predatory (crooked claws).',
      themes: ['Power', 'Personification', 'Predator imagery'],
    },
    {
      quote: 'Close to the sun in lonely lands',
      analysis:
        'The eagle\'s height places him almost at the sun -- he is closer to the heavens than to the earth. "Lonely lands" emphasises his isolation, but loneliness here is not pitiful; it is part of his majesty. He is so far above the world that no other creature can reach him.',
      themes: ['Solitude', 'Height', 'Majesty'],
    },
    {
      quote: 'Ringed with the azure world, he stands',
      analysis:
        '"Ringed" suggests both surrounding (the sky encircles him) and crowning (a king is ringed with a crown). "Azure" is a luxurious word for blue, elevating the description beyond ordinary speech. "He stands" is short and emphatic -- the eagle is utterly still, master of all he surveys.',
      themes: ['Royalty', 'Stillness', 'Dominance'],
    },
    {
      quote: 'The wrinkled sea beneath him crawls',
      analysis:
        'A devastating image of perspective. The sea -- normally vast, powerful and frightening -- is made to seem old ("wrinkled") and feeble ("crawls"). From the eagle\'s height, even the mighty ocean is reduced. Power is relative: the eagle is so high that the world\'s greatest force looks pitiful. This is one of the most famous lines in Victorian poetry.',
      themes: ['Perspective', 'Power', 'Personification'],
    },
    {
      quote: 'And like a thunderbolt he falls',
      analysis:
        'The poem\'s explosive ending. "Thunderbolt" links the eagle to Zeus, king of the gods, who hurled thunderbolts. The simile makes the dive both godlike and weapon-like. After five lines of stillness, the sudden action is electric. The full stop closes the poem like a strike: no aftermath, no consequence -- just the moment of devastation.',
      themes: ['Sudden action', 'Divine power', 'Predation'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'He clasps the crag with crooked hands',
      effect:
        'The eagle is consistently personified as "he" with "hands". This gives the bird the dignity and authority of a person -- specifically, a king or god -- rather than reducing him to mere animal.',
      lineRef: 0,
    },
    {
      device: 'Alliteration',
      example: 'clasps the crag with crooked',
      effect:
        'The hard "c" sounds enact the action. Each repeated "c" feels like a talon scraping against rock. The sound mirrors the meaning so closely that the line is almost onomatopoeic.',
      lineRef: 0,
    },
    {
      device: 'Simile',
      example: 'like a thunderbolt he falls',
      effect:
        'The eagle is compared to a thunderbolt -- the weapon of Zeus, king of the gods. This simile makes the dive both supernaturally fast and divinely destructive. It is the perfect ending: explosive, mythological, final.',
      lineRef: 5,
    },
    {
      device: 'Imagery (visual)',
      example: 'Close to the sun in lonely lands',
      effect:
        'The image places the eagle at extreme height, in a desolate landscape. "Close to the sun" implies he is above ordinary life entirely. The visual establishes him as a creature of the sky, not the earth.',
      lineRef: 1,
    },
    {
      device: 'Personification',
      example: 'wrinkled sea... crawls',
      effect:
        'The sea is given human qualities -- it is old ("wrinkled") and slow ("crawls"). By personifying the sea this way, Tennyson makes it seem feeble compared to the eagle. The mighty ocean is just a wrinkled, crawling old man from this height.',
      lineRef: 3,
    },
    {
      device: 'Contrast',
      example: 'stillness (lines 1--5) vs sudden movement (line 6)',
      effect:
        'The poem builds tension through five lines of patient stillness, then releases it in a single line of explosive action. The contrast makes the dive feel even more sudden and devastating.',
      lineRef: 5,
    },
    {
      device: 'Diction',
      example: 'azure / mountain walls / thunderbolt',
      effect:
        'Tennyson chooses elevated, almost regal vocabulary. "Azure" instead of "blue", "mountain walls" instead of "cliffs", "thunderbolt" instead of "lightning". Every word elevates the eagle into something royal or divine.',
      lineRef: 2,
    },
  ],
}

const comparisons = [
  {
    title: 'Browse all poems',
    poet: 'Power and the Natural World cluster',
    href: '/revision/poetry/ocr/power-and-natural-world',
    reason:
      'See the full OCR Power and the Natural World anthology for more poems that pair well with Tennyson\'s taut portrait of the eagle.',
    themes: ['Power of nature', 'Wildness', 'Imagery'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'te-1', question: 'What does the poem describe?', type: 'multiple-choice', options: ['A caged bird', 'An eagle perched on a cliff before diving to catch prey — a brief, vivid snapshot of power', 'A flock of birds', 'A bird singing'], correctIndex: 1, explanation: 'The poem captures an eagle on a mountain crag surveying the world below, then plunging downward. It is a snapshot of natural power and majesty.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'te-2', question: 'What does "He clasps the crag with crooked hands" suggest?', type: 'multiple-choice', options: ['The eagle is gentle', 'The eagle\'s talons are personified as "hands", giving it human power and authority — "clasps" shows firm grip', 'The eagle is falling', 'The rock is smooth'], correctIndex: 1, explanation: '"Clasps" and "hands" personify the eagle, giving it human-like authority. "Crooked" suggests predatory nature. The alliterative hard "c" sounds create a harsh, powerful tone.', topic: 'Language', difficulty: 'foundation' },
  { id: 'te-3', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'Just six lines in two tercets with AAA BBB rhyme — extreme brevity for maximum impact', 'Free verse', 'A ballad'], correctIndex: 1, explanation: 'Only six lines in two rhyming tercets. The extreme brevity mirrors the eagle\'s swift, decisive action — no wasted words, like no wasted movement.', topic: 'Structure', difficulty: 'foundation' },
  { id: 'te-4', question: 'What does "like a thunderbolt he falls" suggest?', type: 'multiple-choice', options: ['The eagle is dying', 'The eagle\'s dive is compared to lightning — sudden, powerful, unstoppable natural force', 'Thunder is nearby', 'The eagle is clumsy'], correctIndex: 1, explanation: 'The thunderbolt simile presents the eagle\'s dive as an elemental force of nature — as sudden and devastating as lightning. The eagle is not just a bird but a force.', topic: 'Language', difficulty: 'higher' },
  { id: 'te-5', question: 'Who wrote The Eagle and when?', type: 'multiple-choice', options: ['Byron in 1814', 'Alfred Lord Tennyson, published in 1851', 'Keats in 1819', 'Wordsworth in 1802'], correctIndex: 1, explanation: 'Written by Tennyson, published in 1851. The poem\'s subtitle is "A Fragment", suggesting it captures a single moment rather than a complete narrative.', topic: 'Context', difficulty: 'foundation' },
  { id: 'te-6', question: 'How does Tennyson use the word "ringed"?', type: 'multiple-choice', options: ['The eagle wears a ring', '"Ringed with the azure world" — the eagle is encircled by the blue sky, placing it at the centre of everything', 'The sky has rings', 'It describes a circus'], correctIndex: 1, explanation: 'The eagle is "ringed" (encircled) by the blue sky — it sits at the very centre of the natural world, like a king on a throne. Everything revolves around it.', topic: 'Language', difficulty: 'higher' },
  { id: 'te-7', question: 'What is the effect of the personification throughout?', type: 'multiple-choice', options: ['It makes the eagle seem weak', 'Personifying the eagle with "hands", "he", and "stands" elevates it to almost human status — a figure of power and authority', 'It makes the eagle a pet', 'No personification exists'], correctIndex: 1, explanation: 'By giving the eagle human attributes — hands, standing, masculine pronoun — Tennyson elevates it from mere bird to a symbol of power, authority, and mastery over the natural world.', topic: 'Language', difficulty: 'higher' },
  { id: 'te-8', question: 'How does the brevity contribute to the poem\'s effect?', type: 'multiple-choice', options: ['Tennyson ran out of ideas', 'Six lines capture a single, perfect moment — like the eagle\'s own swift, decisive action, nothing is wasted', 'It should be longer', 'Brevity weakens the poem'], correctIndex: 1, explanation: 'The six-line form is perfectly suited to content: a snapshot of power. Like the eagle itself, the poem wastes nothing — every word is precise and essential.', topic: 'Structure', difficulty: 'grade-9' },
  { id: 'te-9', question: 'What does "the wrinkled sea beneath him crawls" achieve?', type: 'multiple-choice', options: ['The sea is dirty', 'The sea — vast and powerful itself — is made to seem small and slow from the eagle\'s elevated perspective', 'The sea is frozen', 'Waves are described'], correctIndex: 1, explanation: 'From the eagle\'s height, the vast ocean appears wrinkled and crawling — tiny and insignificant. This reversal of scale emphasises the eagle\'s supreme position above everything.', topic: 'Language', difficulty: 'grade-9' },
  { id: 'te-10', question: 'What theme does the eagle best represent?', type: 'multiple-choice', options: ['Weakness', 'The sublime power of nature — majesty, authority, and the sudden violence of the natural world', 'Domestication', 'Friendship'], correctIndex: 1, explanation: 'The eagle represents nature\'s sublime power — majestic, authoritative, and capable of sudden, devastating action. It embodies the Romantic fascination with nature\'s overwhelming force.', topic: 'Themes', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'The Eagle celebrates the sublime power of nature through a brief, vivid snapshot of majesty and predatory force.', keyPoints: ['Power and authority — the eagle commands its domain', 'The sublime — awe at nature\'s overwhelming force', 'Perspective — the eagle diminishes even the sea', 'Sudden violence — "like a thunderbolt he falls"'] },
  { topic: 'Language & Imagery', summary: 'Tennyson uses personification, alliteration, simile, and reversal of scale to present the eagle as a figure of supreme power.', keyPoints: ['"Clasps the crag with crooked hands" — alliterative power', '"Ringed with the azure world" — the eagle at the centre', '"The wrinkled sea beneath him crawls" — the sea made small', '"Like a thunderbolt he falls" — elemental force'] },
  { topic: 'Structure & Form', summary: 'Six lines in two tercets with AAA BBB rhyme — extreme brevity mirrors the eagle\'s swift, decisive nature.', keyPoints: ['Six lines only — nothing wasted', 'AAA BBB rhyme — strong, emphatic closures', 'Stanza 1: stillness and observation', 'Stanza 2: sudden, explosive action'] },
]

const ESSAY_PROMPTS = [
  'How does Tennyson present the power of nature in The Eagle?',
  'Compare how an animal or natural force is presented in The Eagle and one other poem from the anthology.',
  'How does Tennyson use brevity and imagery to create a powerful impression of the eagle?',
]

export default function TheEaglePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Eagle by Alfred, Lord Tennyson — Analysis & Annotations"
        description="Line-by-line analysis of The Eagle with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Poetry", url: "https://theenglishhub.app/revision/poetry" },
          { name: "OCR Poetry", url: "https://theenglishhub.app/revision/poetry/ocr" },
          { name: "The Eagle", url: "https://theenglishhub.app/revision/poetry/ocr/the-eagle" },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/power-and-natural-world" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power and the Natural World
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">The Eagle</h1>
            <p className="text-body-sm text-muted-foreground">
              Alfred Lord Tennyson &middot; Power and the Natural World cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">OCR</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="The Eagle"
        textType="poem"
        examBoard="OCR"
        cluster="Power and the Natural World"
        variant="compact"
      />
      <InlineStudyEngine
        textName="The Eagle"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={theEagle} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;The Eagle&rdquo; is in the public domain. All annotations and
          critical commentary on this page are original to english-hub and are provided for
          private study and educational purposes under the fair dealing provisions of the
          Copyright, Designs and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for the OCR Power and the Natural World cluster.
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
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
