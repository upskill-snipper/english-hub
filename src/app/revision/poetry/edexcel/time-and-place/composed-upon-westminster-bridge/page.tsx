'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'

const westminsterBridge: PoemData = {
  title: 'Composed Upon Westminster Bridge, September 3, 1802',
  poet: 'William Wordsworth',
  lines: [
    {
      text: 'Earth has not any thing to show more fair:',
      annotations: [
        {
          type: 'Hyperbole',
          note: 'A grand opening claim. The whole earth contains nothing more beautiful than this scene. The hyperbolic statement immediately challenges Romantic expectations \u2014 a Romantic poet praising a city, not a mountain.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The opening declaration sets the tone for the whole sonnet. Wordsworth asks the reader to be as surprised as he is.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Dull would he be of soul who could pass by',
      annotations: [
        {
          type: 'Direct address',
          note: 'Wordsworth shifts to a hypothetical reader. Anyone unmoved by this view must be spiritually deadened \u2014 the failure is theirs, not the city\u2019s.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A sight so touching in its majesty:',
      annotations: [
        {
          type: 'Diction',
          note: '"Touching" (gentle, emotional) sits next to "majesty" (grand, regal). The pairing captures the unusual blend of intimacy and grandeur Wordsworth feels.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'This City now doth like a garment wear',
      annotations: [
        {
          type: 'Simile',
          note: 'The city wears the morning like clothing. The simile makes the city sound graceful, almost feminine, dressed up rather than industrially smoke-stained.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The beauty of the morning; silent, bare,',
      annotations: [
        {
          type: 'Caesura',
          note: 'The semicolon and comma create a hush in the line. The word "silent" is allowed to settle before "bare" \u2014 we can almost hear the early-morning quiet.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Ships, towers, domes, theatres, and temples lie',
      annotations: [
        {
          type: 'List',
          note: 'A sweeping list of London\u2019s landmarks. Wordsworth catalogues commerce ("ships"), government ("towers"), religion ("temples") and art ("theatres") all in one breath.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The line presents the city as a panorama \u2014 every kind of human endeavour visible in a single view.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Open unto the fields, and to the sky;',
      annotations: [
        {
          type: 'Boundary blur',
          note: 'In the dawn light, the boundary between city and countryside dissolves. The buildings open into fields and sky as if part of a single landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'All bright and glittering in the smokeless air.',
      annotations: [
        {
          type: 'Smokeless',
          note: '"Smokeless" is the key word. London at dawn before the factories started belching smoke is briefly clean. Wordsworth has caught a fragile, unrepeatable moment.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The end of the octave. The city\u2019s beauty depends entirely on the absence of industrial smoke \u2014 it cannot last.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Never did sun more beautifully steep',
      annotations: [
        {
          type: 'Volta',
          note: 'The sonnet\u2019s turn from the city to nature. The sestet shifts from listing buildings to comparing the dawn light with sunlight on landscape.',
          color: '#a855f7',
        },
        {
          type: 'Verb',
          note: '"Steep" suggests the sunlight is soaking the city like dye, saturating every surface. A gentle, immersive image.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'In his first splendour, valley, rock, or hill;',
      annotations: [
        {
          type: 'Romantic comparison',
          note: 'Wordsworth compares the cityscape to traditional Romantic subjects \u2014 valleys, rocks, hills \u2014 and finds the city equal to them. This is a remarkable concession from the great poet of nature.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'For a Romantic, this is heretical praise. Wordsworth ranks London above his beloved Lake District for one perfect moment.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Ne\u2019er saw I, never felt, a calm so deep!',
      annotations: [
        {
          type: 'Emotional climax',
          note: 'The exclamation marks the speaker\u2019s personal awe. He has never experienced such peace anywhere \u2014 city or country.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The river glideth at his own sweet will:',
      annotations: [
        {
          type: 'Personification',
          note: 'The Thames is given its "own sweet will" \u2014 it moves freely, gently, without command. Compare with Blake, where the river is "charter\u2019d".',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The river becomes a symbol of natural freedom inside the city. For Wordsworth, the city does not crush nature \u2014 it accommodates it.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Dear God! the very houses seem asleep;',
      annotations: [
        {
          type: 'Apostrophe',
          note: '"Dear God!" is an exclamation of awe, almost prayer. The personification continues: even the houses are asleep, as if the whole city were resting.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And all that mighty heart is lying still!',
      annotations: [
        {
          type: 'Closing personification',
          note: 'London is given a single beating "heart" \u2014 the whole city becomes a sleeping body. The exclamation mark seals the moment of awe.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The final line transforms the city into a living being. The "mighty heart" is at peace \u2014 but the word "mighty" reminds us that its noisy waking life is not far away.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Wordsworth (1770&ndash;1850)</h3>
    <p>Wordsworth was the leading poet of English Romanticism and a great celebrant of the natural world, particularly the Lake District. He believed nature was a source of moral and emotional truth, and spent most of his career writing about rural landscapes.</p>

    <h3>September 3, 1802</h3>
    <p>The exact date in the title matters. On 3 September 1802, Wordsworth was crossing Westminster Bridge in a coach with his sister Dorothy at dawn, on his way to Dover and France. Dorothy\u2019s journal records the same view: a "spectacle" with "no fog" and "the houses\u2026seemed insensible to it as the trees".</p>

    <h3>Romantic poet praising a city</h3>
    <p>It is genuinely surprising for a Romantic to write a love poem to London. Wordsworth\u2019s usual subject matter was nature; cities, in his other writing, are often associated with corruption and over-stimulation. The poem catches an exceptional, fleeting moment when the city looked as beautiful to him as a mountain valley.</p>

    <h3>Industrial London</h3>
    <p>By 1802, London was the largest city in Europe and the early stages of the Industrial Revolution had already transformed its skyline. Smoke from coal fires usually shrouded the buildings. The "smokeless air" Wordsworth describes is unique to early morning before the city woke up \u2014 a fragile, fleeting condition.</p>

    <h3>Time and Place in this poem</h3>
    <p>This is a perfect Time and Place poem because it depends so completely on a specific time (dawn, 3 September 1802) and a specific place (Westminster Bridge). The same view, an hour later, would have been entirely different. Wordsworth captures a unique encounter between a person and a place at a precise moment.</p>
  `,

  summary: `Octave (lines 1\u20138): Wordsworth opens with a hyperbolic claim: nothing on earth is more beautiful than the view from Westminster Bridge at dawn. Anyone unmoved must be spiritually dead. He describes the city wearing "the beauty of the morning" like a garment, listing the ships, towers, domes, theatres and temples that lie open to the fields and sky. The crucial detail is "smokeless air" \u2014 the factories have not yet started for the day.

Sestet (lines 9\u201314): The sonnet turns. Wordsworth says that no sunrise has ever lit up valley, rock or hill more beautifully than this dawn lights up the city. He has never experienced such peace anywhere. The Thames glides "at his own sweet will" \u2014 the river is free. Even the houses appear to be asleep. The poem ends with the city personified as a single sleeping body whose "mighty heart" is briefly at rest.

Overall meaning: Wordsworth captures one fleeting moment when London looked as beautiful as the natural landscapes he usually celebrated. The dawn, the silence and the absence of smoke briefly turn the city into something almost rural. The poem is a love letter to a place caught at the exact right time \u2014 a moment that, by definition, cannot last.`,

  formAndStructure: `Form: A Petrarchan (Italian) sonnet \u2014 14 lines divided into an octave (8 lines, ABBAABBA) and a sestet (6 lines, CDCDCD). The traditional form gives the poem an elevated, classical feel, suitable for the speaker\u2019s solemn awe.

Octave: The first eight lines establish the scene and Wordsworth\u2019s reaction. The rhyme scheme ABBAABBA creates a tight, balanced unit that gathers momentum towards the volta.

Volta: The turn comes at line 9 with "Never did sun more beautifully steep". The sonnet shifts from describing the cityscape to comparing it with rural landscapes \u2014 the speaker\u2019s usual subject matter \u2014 and finding the city equal to them.

Sestet: The final six lines focus on stillness and personification. The Thames is alive; the houses sleep; the city has a "mighty heart". The shift is from outer panorama to inner life.

Metre: Iambic pentameter (ten syllables per line). The metre is mostly regular, giving the poem a calm, steady pulse that matches the still dawn it describes.

Punctuation: Wordsworth uses a lot of commas, semicolons and exclamations. The pauses make us linger on each detail, slowing the reading pace to match the slow, hushed quality of the morning.

Personification: The poem builds towards an extended personification. The city wears morning like clothing, the river has its own will, the houses sleep, and the city itself has a "mighty heart". By the end, London is alive \u2014 just briefly resting.`,

  keyQuotes: [
    {
      quote: 'Earth has not any thing to show more fair',
      analysis:
        'A hyperbolic opening that immediately establishes the speaker\u2019s awe. Coming from Wordsworth, this praise of a city is genuinely shocking \u2014 the great poet of nature ranks London above the natural world. The line frames the entire sonnet as a moment of surprise.',
      themes: ['City', 'Beauty', 'Awe'],
    },
    {
      quote: 'Dull would he be of soul who could pass by',
      analysis:
        'Wordsworth turns to the reader and challenges them. Anyone who fails to be moved by this scene must be spiritually dead. The line transfers the test of beauty from the city to the observer \u2014 if you don\u2019t feel it, the failure is yours.',
      themes: ['Perception', 'Awe', 'Place'],
    },
    {
      quote: 'This City now doth like a garment wear / The beauty of the morning',
      analysis:
        'The city wears the morning like an item of clothing. The simile gives London grace and even femininity \u2014 dressed for the day rather than blackened by smoke. The word "now" reminds us that this is a temporary outfit.',
      themes: ['Beauty', 'Time', 'Transformation'],
    },
    {
      quote: 'All bright and glittering in the smokeless air',
      analysis:
        '"Smokeless" is the load-bearing word. The view is beautiful precisely because the factories are not yet running. Wordsworth has caught a unique, fragile moment that the rest of the day will destroy. The line silently acknowledges the industrial London he is choosing not to describe.',
      themes: ['Industry', 'Fragility', 'Time'],
    },
    {
      quote: 'Never did sun more beautifully steep / In his first splendour, valley, rock, or hill',
      analysis:
        'A startling statement: no Romantic landscape has ever looked more beautiful than this city. By comparing the city to the valleys and hills he usually praises, Wordsworth makes the highest possible concession to London. The verb "steep" suggests the sun soaking the buildings like dye.',
      themes: ['City vs nature', 'Beauty', 'Surprise'],
    },
    {
      quote: 'The river glideth at his own sweet will',
      analysis:
        'The Thames is personified as having its own free will, gliding gently through the city. Compare Blake\u2019s "charter\u2019d Thames" \u2014 the same river, but seen through a completely different political lens. For Wordsworth, the city does not contain the river; the river simply moves through it.',
      themes: ['Nature in city', 'Freedom', 'Place'],
    },
    {
      quote: 'Dear God! the very houses seem asleep',
      analysis:
        'The exclamation registers Wordsworth\u2019s awe; the personification continues. Even buildings have become living, resting things. The intimacy of "very houses" makes the city feel domestic, almost vulnerable.',
      themes: ['Stillness', 'Peace', 'Personification'],
    },
    {
      quote: 'And all that mighty heart is lying still',
      analysis:
        'The closing line gives the city a single beating heart \u2014 a stunning final personification. The word "mighty" reminds us how powerful and noisy the city normally is; "lying still" turns that power into a sleeping body. The exclamation seals the moment of perfect peace.',
      themes: ['City as living being', 'Stillness', 'Time'],
    },
  ],

  languageDevices: [
    {
      device: 'Hyperbole',
      example: 'Earth has not any thing to show more fair',
      effect:
        'The exaggerated opening claim sets the entire poem\u2019s tone. Wordsworth is not making a measured statement \u2014 he is overwhelmed. The hyperbole forces the reader to take the rest of the poem as a record of genuine awe rather than careful description.',
      lineRef: 0,
    },
    {
      device: 'Personification',
      example: 'The river glideth at his own sweet will / the very houses seem asleep / all that mighty heart',
      effect:
        'The poem builds an extended personification of the city as a living, resting being. The river has its own will, the houses sleep, the city has a heart. By the end, London is alive \u2014 a contrast with industrial views of the city as a dead machine.',
      lineRef: 11,
    },
    {
      device: 'Listing',
      example: 'Ships, towers, domes, theatres, and temples',
      effect:
        'The asyndetic list piles up landmarks in a single line. Commerce, government, religion and art are all visible at once. The list compresses the entire city into one sweeping panorama.',
      lineRef: 5,
    },
    {
      device: 'Petrarchan sonnet form',
      example: 'octave then sestet, with volta at line 9',
      effect:
        'The traditional sonnet form provides a solemn, classical container for Wordsworth\u2019s personal awe. The volta at line 9 lets him pivot from describing the cityscape to comparing it with the natural world \u2014 a structural argument for the city\u2019s beauty.',
      lineRef: 8,
    },
    {
      device: 'Caesura',
      example: 'The beauty of the morning; silent, bare',
      effect:
        'The semicolon and comma slow the line down, making the words "silent" and "bare" land separately. The reader is forced to pause \u2014 the pause itself feels like the silence the line describes.',
      lineRef: 4,
    },
    {
      device: 'Apostrophe',
      example: 'Dear God!',
      effect:
        'The brief outburst makes the poem feel spontaneous and personal. Wordsworth is not reciting a prepared speech \u2014 he is speaking out loud in the moment, almost in prayer. The exclamation lifts the speaker\u2019s emotion above ordinary description.',
      lineRef: 12,
    },
  ],
}

const comparisons = [
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/edexcel/time-and-place/london',
    reason:
      'Two poets describing the same city only a few years apart \u2014 with completely different reactions. Wordsworth finds beauty in the silent dawn; Blake finds suffering in every street. The contrast of "charter\u2019d Thames" with "river glideth at his own sweet will" is the heart of the comparison.',
    themes: ['City', 'Place', 'Perspective'],
  },
  {
    title: 'To Autumn',
    poet: 'John Keats',
    href: '/revision/poetry/edexcel/time-and-place/to-autumn',
    reason:
      'Both poems are Romantic celebrations of a single moment in a particular place. Keats celebrates a country autumn; Wordsworth celebrates a city dawn. Compare how each poet uses time to shape what they see.',
    themes: ['Beauty', 'Time', 'Romanticism'],
  },
  {
    title: 'Adlestrop',
    poet: 'Edward Thomas',
    href: '/revision/poetry/edexcel/time-and-place',
    reason:
      'Both poems describe a moment when an ordinary place suddenly feels significant. Wordsworth catches London at dawn; Thomas catches a tiny station in the heat. Compare how a single moment can transform a landscape.',
    themes: ['Place', 'Stillness', 'Time'],
  },
]

export default function WestminsterBridgePage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/time-and-place" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Time and Place cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Composed Upon Westminster Bridge
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Edexcel</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={westminsterBridge} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with Composed Upon Westminster Bridge from the Edexcel Time and Place cluster.
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;Composed Upon Westminster Bridge&rdquo; by William Wordsworth
          (1802) is in the public domain. All quotations on this page are used
          for the purpose of criticism, review and educational study under fair
          dealing (s.30 Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
