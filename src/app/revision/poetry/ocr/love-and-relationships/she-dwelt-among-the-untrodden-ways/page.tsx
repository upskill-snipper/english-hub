'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

const sheDweltAmongTheUntroddenWays: PoemData = {
  title: 'She Dwelt Among the Untrodden Ways',
  poet: 'William Wordsworth',
  lines: [
    {
      text: 'She dwelt among the untrodden ways',
      annotations: [
        {
          type: 'Setting',
          note: '"Untrodden ways" -- the paths no one walks. Lucy lives in remote, isolated countryside, far from civilisation. The opening establishes her invisibility to the wider world.',
          color: '#a855f7',
        },
        {
          type: 'Diction',
          note: '"Dwelt" is a slightly old-fashioned word for "lived" -- it carries a fairy-tale quality, suggesting she belongs to a different, more natural world.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Beside the springs of Dove,',
      annotations: [
        {
          type: 'Place',
          note: 'The "springs of Dove" likely refers to the River Dove in the Lake District, where Wordsworth lived. The location is real but also symbolic -- a "dove" is associated with peace and innocence.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'A Maid whom there were none to praise',
      annotations: [
        {
          type: 'Theme of obscurity',
          note: '"None to praise" -- no one ever celebrated her. She lived and died unnoticed by the world. Wordsworth\'s point is that her unrecognised quality makes her loss more poignant, not less.',
          color: '#ef4444',
        },
        {
          type: 'Capitalisation',
          note: '"Maid" is capitalised, elevating her into something archetypal -- almost mythic. She becomes a symbol as well as a person.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And very few to love:',
      annotations: [
        {
          type: 'Key quote',
          note: '"Very few to love" -- only a handful of people loved her. The understatement is crucial: her value was real but private, known only to those few.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'A violet by a mossy stone',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Lucy is compared to a small wild flower hidden by a stone. Violets are modest, easily missed, but quietly beautiful. The "mossy stone" suggests time and obscurity -- something half-forgotten.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The poem\'s most famous image. Lucy\'s entire being -- delicate, modest, easy to overlook -- is captured in this single metaphor.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Half hidden from the eye!',
      annotations: [
        {
          type: 'Imagery',
          note: '"Half hidden" -- not completely invisible, but not clearly seen. You have to look carefully to notice her. The exclamation mark expresses both delight (at finding her) and sadness (at her obscurity).',
          color: '#10b981',
        },
      ],
    },
    {
      text: '— Fair as a star, when only one',
      annotations: [
        {
          type: 'Simile',
          note: 'A second comparison: now Lucy is like a star. The image is paradoxical: in the previous stanza she was small and hidden; now she is "fair as a star". The two metaphors capture both her humility and her uniqueness.',
          color: '#10b981',
        },
        {
          type: 'Symbolism',
          note: '"When only one" -- the only star in the sky. To the few who loved her, she was the only thing they could see; she filled the entire sky.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Is shining in the sky.',
      annotations: [
        {
          type: 'Imagery',
          note: 'A solitary star against an empty sky. The image emphasises both her brightness (within her own world) and her isolation. To the few who knew her, nothing else mattered.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'She lived unknown, and few could know',
      annotations: [
        {
          type: 'Anaphora-like structure',
          note: 'Wordsworth restates her obscurity. "She lived unknown" -- the world had no idea she existed. The sentence is plain, even blunt, almost matter-of-fact.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'When Lucy ceased to be;',
      annotations: [
        {
          type: 'Naming',
          note: 'Her name is finally revealed: Lucy. Saved until the penultimate stanza, the name carries weight. "Ceased to be" is a gentle euphemism for death -- she did not violently die, she simply stopped existing.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'A line that combines obscurity ("few could know") with finality ("ceased to be"). She passed almost without anyone noticing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'But she is in her grave, and, oh,',
      annotations: [
        {
          type: 'Volta',
          note: 'The poem turns. After eleven lines of restrained description, the speaker breaks down with "oh". The interjection is the emotional climax of the poem -- a single sigh that contains all the grief.',
          color: '#a855f7',
        },
        {
          type: 'Caesura',
          note: 'The commas around "oh" create a stuttering pause -- the speaker can hardly continue. The plain syntax contains overwhelming feeling.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The difference to me!',
      annotations: [
        {
          type: 'Closure',
          note: 'The poem ends abruptly. After all the restraint, this final exclamation says everything: her death has changed his entire world. The contrast between the simplicity of the words and the weight of the feeling is devastating.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'One of the most famous endings in English poetry. The whole poem points to this moment: the world barely noticed her, but to the speaker she was everything.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Wordsworth (1770--1850)</h3>
    <p>William Wordsworth is one of the founding figures of English Romanticism. With Coleridge he co-authored <em>Lyrical Ballads</em> (1798), the book that helped launch the Romantic movement. He believed poetry should be written in the "real language of men" and should focus on ordinary lives, nature, and deep personal feeling.</p>

    <h3>The Lucy Poems</h3>
    <p>"She Dwelt Among the Untrodden Ways" is one of five short lyrics known as the <strong>"Lucy Poems"</strong>, all written between 1798 and 1801. They are about a young woman named Lucy who lives in the countryside and dies young. Scholars still argue about whether Lucy was real, imagined, or based on Wordsworth\'s sister Dorothy. The poems were written while Wordsworth was visiting Germany, far from England, which may explain their tone of distant longing.</p>

    <h3>The Romantic ideal of obscurity</h3>
    <p>The poem reflects a key Romantic value: the belief that ordinary, hidden lives matter just as much as famous ones. Wordsworth deliberately chooses someone the world ignored ("none to praise / And very few to love") to argue that all human lives have profound worth. This was a radical idea in an era when poetry usually celebrated kings, soldiers and great thinkers.</p>

    <h3>Form and the lyric tradition</h3>
    <p>The poem is a short lyric in ballad form, drawing on traditional folk songs about lost love. Wordsworth deliberately uses simple language and stanza form to make the poem feel timeless and universal -- like a song everyone has always known.</p>
  `,

  summary: `Stanza 1: The speaker introduces a woman who lived in a remote part of the English countryside ("the springs of Dove"). She was so isolated that there was almost no one to praise her, and only a few people loved her. Wordsworth establishes her obscurity as the central fact of her life.

Stanza 2: The speaker gives two contradictory images of her. First, she is "a violet by a mossy stone" -- a small, easily overlooked wild flower. Then she is "fair as a star, when only one / Is shining in the sky" -- the brightest, only thing in an empty universe. The two images capture both her humility (to the world) and her preciousness (to those who loved her).

Stanza 3: The poem reveals that she has died: "When Lucy ceased to be." Her name is given for the first time -- Lucy. The poem ends with the speaker breaking down: "But she is in her grave, and, oh, / The difference to me!" After the careful restraint of the previous stanzas, the final lines express all the grief.

Overall meaning: The poem is a quiet elegy for an obscure woman whose death has devastated the speaker. Wordsworth\'s argument is that ordinary lives matter -- that someone the world barely noticed can be the most important person in another person\'s world.`,

  formAndStructure: `Form: Three stanzas of four lines each (quatrains), with an alternating rhyme scheme (ABAB). The form is borrowed from the traditional folk ballad -- simple, song-like, easy to remember. This deliberately humble form reflects the humble subject.

Metre: The poem alternates iambic tetrameter (four feet) and iambic trimeter (three feet). This is the classic ballad metre, and gives the poem a gentle, lulling, song-like rhythm.

Three-stanza structure: Each stanza serves a different purpose. Stanza 1 introduces Lucy and her obscurity. Stanza 2 uses two metaphors (violet and star) to capture her dual nature. Stanza 3 reveals her death and the speaker\'s grief.

Volta: The turn happens in the last two lines: "But she is in her grave, and, oh, / The difference to me!" After the calm description of stanzas 1 and 2, the speaker finally allows his feelings to break through.

Restraint and release: Most of the poem is restrained, almost matter-of-fact. The emotion is held back. Only at the very end, with the interjection "oh", does the speaker\'s grief finally escape. This pent-up release is what gives the poem its power.

Simple diction: Wordsworth deliberately uses plain, everyday words. There are no learned references, no Latinate vocabulary -- just simple English. This simplicity makes the loss feel real and universal.`,

  keyQuotes: [
    {
      quote: 'A Maid whom there were none to praise / And very few to love',
      analysis:
        'The bleak fact at the heart of the poem: the world barely noticed her. "None to praise" is absolute -- no one celebrated her at all. "Very few to love" is the gentlest of mitigations. The understatement makes her obscurity feel even more poignant.',
      themes: ['Obscurity', 'Hidden value', 'Loneliness'],
    },
    {
      quote: 'A violet by a mossy stone / Half hidden from the eye!',
      analysis:
        'The poem\'s most famous metaphor. A violet is small, modest, and easily missed -- particularly when half-hidden behind a stone. Wordsworth captures Lucy\'s entire character in this image: delicate, beautiful, but invisible to anyone who is not looking carefully. The exclamation mark expresses surprise and tenderness at the discovery.',
      themes: ['Hidden beauty', 'Nature imagery', 'Modesty'],
    },
    {
      quote: 'Fair as a star, when only one / Is shining in the sky',
      analysis:
        'The second metaphor reverses the first. Now Lucy is not small but vast -- she fills the entire sky. The paradox is the heart of the poem: to the world she was tiny, but to those who loved her she was everything. The "only one" is crucial: when no other star is shining, the single star becomes the universe.',
      themes: ['Uniqueness', 'Devotion', 'Subjective value'],
    },
    {
      quote: 'She lived unknown, and few could know / When Lucy ceased to be',
      analysis:
        'Her death is given the gentlest possible euphemism: "ceased to be". She did not violently die -- she simply stopped existing. The fact that "few could know" she had died compounds the tragedy: even her death was unrecorded by the world. Her name, finally revealed here, takes on a quiet weight.',
      themes: ['Death', 'Obscurity', 'Quiet tragedy'],
    },
    {
      quote: 'But she is in her grave, and, oh, / The difference to me!',
      analysis:
        'After eleven lines of restraint, the speaker finally breaks down. The single interjection "oh" is the emotional climax of the poem. "The difference to me" -- the world is unchanged by her death, but for him, everything has changed. The contrast between the simplicity of the words and the weight of feeling makes this one of the most quietly devastating endings in English poetry.',
      themes: ['Grief', 'Loss', 'Subjective experience'],
    },
  ],

  languageDevices: [
    {
      device: 'Metaphor',
      example: 'A violet by a mossy stone / Half hidden from the eye',
      effect:
        'Lucy is compared to a small, modest wild flower partly hidden behind a stone. The metaphor captures her entire being: delicate, beautiful, but invisible to anyone not paying attention. It is the poem\'s most famous image.',
      lineRef: 4,
    },
    {
      device: 'Simile',
      example: 'Fair as a star, when only one / Is shining in the sky',
      effect:
        'Lucy is compared to the only star in the sky -- bright, lonely, and completely dominating the speaker\'s view. The simile captures her uniqueness to those who loved her: in their universe, she was the only light.',
      lineRef: 6,
    },
    {
      device: 'Juxtaposition',
      example: 'violet (small) vs star (vast)',
      effect:
        'The two main metaphors of stanza 2 are deliberately contradictory. Lucy is both tiny (a hidden flower) and immense (the only star). Wordsworth uses the contradiction to capture how the same person can be insignificant to the world and everything to one person.',
      lineRef: 4,
    },
    {
      device: 'Caesura',
      example: 'But she is in her grave, and, oh,',
      effect:
        'The commas around "oh" create a stuttering pause that mimics the speaker\'s catching breath. Grammatically, the line is broken; emotionally, the speaker is breaking down.',
      lineRef: 10,
    },
    {
      device: 'Euphemism',
      example: 'when Lucy ceased to be',
      effect:
        'Her death is described gently and indirectly. Wordsworth avoids harsh words like "died" or "killed" -- she just "ceased to be". The euphemism makes her death feel quiet and unobtrusive, like the rest of her life.',
      lineRef: 9,
    },
    {
      device: 'Understatement',
      example: 'The difference to me',
      effect:
        'After all the restraint, the speaker simply says her death has made "the difference" to him. He does not say his world has shattered; he just says she is the difference. The understatement is more powerful than any wail of grief could be.',
      lineRef: 11,
    },
    {
      device: 'Plain diction',
      example: 'the entire poem',
      effect:
        'Wordsworth uses simple, ordinary language throughout -- no Latinate vocabulary, no learned references. This plainness reflects Lucy\'s humble life and Wordsworth\'s belief that poetry should be written in "the real language of men".',
      lineRef: 0,
    },
  ],
}

const comparisons = [
  {
    title: 'Browse all poems',
    poet: 'Love and Relationships cluster',
    href: '/revision/poetry/ocr/love-and-relationships',
    reason:
      'See the full OCR Love and Relationships anthology for more poems that pair well with Wordsworth\'s quiet lament for Lucy.',
    themes: ['Loss', 'Love', 'Wordsworth'],
  },
]

export default function SheDweltPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love and Relationships
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              She Dwelt Among the Untrodden Ways
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth &middot; Love and Relationships cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">OCR</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={sheDweltAmongTheUntroddenWays} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;She Dwelt Among the Untrodden Ways&rdquo; is in the public domain.
          All annotations and critical commentary on this page are original to english-hub and
          are provided for private study and educational purposes under the fair dealing
          provisions of the Copyright, Designs and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for the OCR Love and Relationships cluster.
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
