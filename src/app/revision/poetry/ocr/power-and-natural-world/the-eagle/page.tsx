'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

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
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    href: '/revision/poetry/ocr/power-and-natural-world/storm-on-the-island',
    reason:
      'Both poems present nature as a powerful, threatening force. Tennyson celebrates the eagle\'s controlled power; Heaney shows nature\'s uncontrolled wildness. Both use vivid imagery to make natural forces feel dangerous and alive.',
    themes: ['Power of nature', 'Predation', 'Wildness'],
  },
  {
    title: 'Ode to the West Wind',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/ocr/power-and-natural-world/ode-to-the-west-wind',
    reason:
      'Both poems are studies of natural power. Shelley addresses the wind directly with awe; Tennyson observes the eagle from a distance. Both find in nature a force that humbles human pretensions.',
    themes: ['Natural power', 'Awe', 'Romantic imagery'],
  },
  {
    title: 'Inversnaid',
    poet: 'Gerard Manley Hopkins',
    href: '/revision/poetry/ocr/power-and-natural-world/inversnaid',
    reason:
      'Both poems are short, intensely visual descriptions of wild nature. Tennyson focuses on a single creature; Hopkins on a wild stream. Both pack enormous energy into a tiny number of lines, and both use sound to evoke the natural world.',
    themes: ['Wild nature', 'Brevity and intensity', 'Sound'],
  },
]

export default function TheEaglePage() {
  return (
    <div className="space-y-8">
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

      <InteractivePoemViewer poem={theEagle} />

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
