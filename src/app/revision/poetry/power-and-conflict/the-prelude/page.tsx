'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  InteractivePoemViewer,
  type PoemData,
} from '@/components/study'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ─────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'Extract from The Prelude: Stealing the Boat',
  poet: 'William Wordsworth',

  lines: [
    {
      text: 'One summer evening (led by her) I found',
      annotations: [
        { type: 'Personification', note: 'Nature is personified as a female guide ("her"), suggesting a nurturing, maternal force leading the young Wordsworth.', color: '#f59e0b' },
        { type: 'Context', note: 'The parenthetical "(led by her)" implies nature has agency and purpose, a key Romantic idea.', color: '#3b82f6' },
      ],
    },
    {
      text: 'A little boat tied to a willow tree',
      annotations: [
        { type: 'Imagery', note: 'The pastoral setting with the willow tree creates a sense of calm innocence before the dramatic shift.', color: '#10b981' },
      ],
    },
    {
      text: 'Within a rocky cave, its usual home.',
      annotations: [
        { type: 'Setting', note: 'The boat has a "usual home" -- it belongs to someone else. This foreshadows the transgression of stealing it.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Straight I unloosed her chain, and stepping in',
    },
    {
      text: 'Pushed from the shore. It was an act of stealth',
      annotations: [
        { type: 'Moral awareness', note: '"Act of stealth" shows Wordsworth knows this is wrong -- he is conscious of his transgression against nature.', color: '#ef4444' },
      ],
    },
    {
      text: 'And troubled pleasure. She was an elfin pinnace;',
      annotations: [
        { type: 'Oxymoron', note: '"Troubled pleasure" reveals internal conflict -- excitement mixed with guilt. This duality drives the extract.', color: '#f59e0b' },
        { type: 'Personification', note: 'The boat is called "she" and described as an "elfin pinnace" (fairy-like small boat), maintaining the magical, almost supernatural tone.', color: '#10b981' },
      ],
    },
    {
      text: 'Lustily I dipped my oars into the lake,',
      annotations: [
        { type: 'Adverb', note: '"Lustily" conveys youthful energy, enthusiasm, and physical confidence. The boy feels powerful and in control.', color: '#f59e0b' },
      ],
    },
    {
      text: 'And, as I rose upon the stroke, my boat',
    },
    {
      text: 'Went heaving through the water like a swan;',
      annotations: [
        { type: 'Simile', note: 'The swan simile suggests grace, elegance, and harmony with nature. The boy feels at one with his surroundings.', color: '#10b981' },
      ],
    },
    {
      text: 'The horizon\'s utmost boundary; far above',
    },
    {
      text: 'Was nothing but the stars and the grey sky.',
    },
    {
      text: 'She was an elfin pinnace; lustily',
      annotations: [
        { type: 'Repetition', note: 'The repetition of "elfin pinnace" and "lustily" reinforces the dreamy, enchanted mood before the volta.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'I dipped my oars into the silent lake,',
      annotations: [
        { type: 'Adjective', note: '"Silent" creates an ominous, expectant atmosphere -- the calm before the terrifying encounter.', color: '#ef4444' },
      ],
    },
    {
      text: 'And, as I rose upon the stroke, my boat',
    },
    {
      text: 'Went heaving through the water like a swan.',
    },
    {
      text: 'When, from behind that craggy steep till then',
      annotations: [
        { type: 'Volta', note: 'This marks the dramatic turning point. "When" signals the sudden, unexpected encounter with the mountain.', color: '#ef4444' },
      ],
    },
    {
      text: 'The horizon\'s bound, a huge peak, black and huge,',
      annotations: [
        { type: 'Repetition', note: '"Huge" is repeated for emphasis, stressing the overwhelming scale of the mountain. The adjective "black" adds menace.', color: '#f59e0b' },
        { type: 'Sublime', note: 'This is the moment of the Romantic sublime -- an encounter with something so vast and terrifying it overwhelms human understanding.', color: '#3b82f6' },
      ],
    },
    {
      text: 'As if with voluntary power instinct,',
      annotations: [
        { type: 'Personification', note: 'The mountain is given "voluntary power" -- it seems to have its own will and consciousness, making it deeply threatening.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Upreared its head. With measured motion like a living thing,',
      annotations: [
        { type: 'Personification', note: '"Upreared its head" makes the mountain seem like a giant creature rising up. The mountain becomes a living, purposeful being.', color: '#f59e0b' },
        { type: 'Simile', note: '"Like a living thing" makes the comparison explicit -- the mountain appears animate and threatening.', color: '#10b981' },
      ],
    },
    {
      text: 'Strode after me. With trembling oars I turned,',
      annotations: [
        { type: 'Personification', note: '"Strode after me" gives the mountain human movement -- it seems to pursue the boy like a predator.', color: '#f59e0b' },
        { type: 'Contrast', note: '"Trembling oars" contrasts sharply with the earlier "lustily I dipped" -- confidence has been replaced by terror.', color: '#ef4444' },
      ],
    },
    {
      text: 'And through the silent water stole my way',
      annotations: [
        { type: 'Verb choice', note: '"Stole" echoes the earlier "act of stealth" -- the boy is now the one sneaking away, his power reversed.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Back to the covert of the willow tree;',
    },
    {
      text: 'There in her mooring-place I left my bark, --',
    },
    {
      text: 'And through the meadows homeward went, in grave',
      annotations: [
        { type: 'Adjective', note: '"Grave" suggests seriousness and a weighty, solemn mood -- the boy has been profoundly changed by the experience.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'And serious mood; but after I had seen',
    },
    {
      text: 'That spectacle, for many days, my brain',
      annotations: [
        { type: 'Enjambment', note: 'The enjambment across these lines mirrors the way the experience lingers and spills over into the boy\'s everyday thoughts.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Worked with a dim and undetermined sense',
    },
    {
      text: 'Of unknown modes of being; o\'er my thoughts',
      annotations: [
        { type: 'Abstract language', note: '"Unknown modes of being" suggests the boy has glimpsed something beyond human comprehension -- a spiritual or transcendent power in nature.', color: '#3b82f6' },
      ],
    },
    {
      text: 'There hung a darkness, call it solitude',
      annotations: [
        { type: 'Metaphor', note: 'Darkness "hung" over his thoughts like a physical weight. Nature\'s power has left a lasting psychological imprint.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Or blank desertion. No familiar shapes',
      annotations: [
        { type: 'Imagery', note: '"Blank desertion" and "No familiar shapes" convey a loss of certainty -- the comforting, familiar world has been stripped away.', color: '#ef4444' },
      ],
    },
    {
      text: 'Remained, no pleasant images of trees,',
    },
    {
      text: 'Of sea, or sky, no colours of green fields;',
      annotations: [
        { type: 'Listing', note: 'The list of absent natural images emphasises what has been lost. Previously comforting pastoral scenes can no longer reassure.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'But huge and mighty forms, that do not live',
      annotations: [
        { type: 'Contrast', note: '"Huge and mighty forms" replace "pleasant images" -- nature is no longer comforting but overwhelming and unknowable.', color: '#ef4444' },
      ],
    },
    {
      text: 'Like living men, moved slowly through the mind,',
      annotations: [
        { type: 'Simile', note: 'The forms move "like living men" through his consciousness, suggesting the experience has become part of his inner life permanently.', color: '#10b981' },
      ],
    },
    {
      text: 'By day, and were a trouble to my dreams.',
      annotations: [
        { type: 'Time', note: '"By day" and "dreams" -- the experience haunts him both awake and asleep, showing its total psychological impact.', color: '#8b5cf6' },
      ],
    },
  ],

  context: `<p><strong>William Wordsworth</strong> (1770--1850) was one of the founders of the <strong>Romantic movement</strong> in English poetry. He grew up in the <strong>Lake District</strong>, and the natural landscapes of Cumbria profoundly shaped his writing and philosophy.</p>
<p><em>The Prelude</em> is Wordsworth's epic <strong>autobiographical poem</strong>, tracing the growth of his mind from childhood to adulthood. He began writing it in <strong>1799</strong>, revised it extensively (the 1805 version in 13 books; the final 1850 version in 14 books), and it was published after his death. The AQA extract comes from <strong>Book I</strong>, recounting a childhood experience on Ullswater.</p>
<p>The Romantics valued <strong>emotion over reason</strong>, celebrated the <strong>power and beauty of nature</strong>, and explored the concept of <strong>the sublime</strong> -- the idea that encounters with vast, powerful, or terrifying natural phenomena could produce awe, wonder, and even spiritual transformation.</p>
<p>In this extract, the young Wordsworth steals a boat and rows across a lake at night. A mountain appears to rise up and pursue him, filling him with existential terror. The experience permanently changes his understanding of nature from something nurturing to something vast and unknowable.</p>`,

  summary: `CONFIDENCE AND FREEDOM (Lines 1--11)
The speaker recalls a summer evening when, guided by nature ("led by her"), he found a small boat and impulsively took it out onto a lake. He rows with energy and confidence ("lustily I dipped my oars"), feeling at one with the natural world. The boat moves gracefully, compared to a swan, and the scene is calm and beautiful.

THE ENCOUNTER WITH THE MOUNTAIN (Lines 12--19)
The mood shifts dramatically at the volta. A huge, black mountain peak appears from behind the horizon. It seems to have its own will ("voluntary power") and rises up like a living creature ("upreared its head"). The mountain appears to stride after the boy, transforming from scenery into a terrifying, purposeful force.

FEAR AND RETREAT (Lines 19--23)
Terrified, the boy turns back with "trembling oars" -- a stark contrast to his earlier confidence. He "stole" his way back across the silent water and returned the boat. The verb "stole" mirrors the earlier "stealth", but now the boy is the one cowering, not adventuring.

LASTING PSYCHOLOGICAL IMPACT (Lines 24--35)
The final section describes the aftermath. For many days the boy's mind is troubled by "a dim and undetermined sense / Of unknown modes of being." The familiar, comforting images of nature (trees, sky, green fields) are replaced by "huge and mighty forms" that haunt his thoughts by day and trouble his dreams. The experience has permanently altered his relationship with the natural world.`,

  formAndStructure: `BLANK VERSE
Written in unrhymed iambic pentameter (blank verse), giving the poem a natural, conversational rhythm that mirrors the flow of memory and thought. The lack of rhyme allows Wordsworth to build long, flowing sentences that carry the reader forward.

ENJAMBMENT
Extensive enjambment throughout the extract creates a sense of momentum and urgency. Lines spill into each other, mirroring both the movement of the boat through water and the way memories and emotions overflow boundaries. Key examples: "my boat / Went heaving" and "my brain / Worked with a dim and undetermined sense".

CAESURA
Caesura is used at pivotal moments to create pauses that disrupt the flow: "And troubled pleasure." forces the reader to stop and reflect on the oxymoron. "Upreared its head." creates a dramatic full stop at the moment of greatest terror.

FIRST PERSON RETROSPECTIVE
The poem is written in the first person, looking back on a childhood experience from an adult perspective. This dual viewpoint allows Wordsworth to convey both the immediate sensations of the boy and the mature understanding of the man reflecting on their significance.

VOLTA / TURNING POINT
The dramatic turning point occurs around line 16 with "When, from behind that craggy steep". The mood shifts from confidence and pleasure to awe and terror. The structure mirrors a journey: outward (confidence) --> encounter (sublime fear) --> return (retreat) --> aftermath (reflection).

SINGLE VERSE PARAGRAPH
The extract is one continuous block of text with no stanza breaks, reflecting the unbroken flow of memory and the way the experience consumed his consciousness entirely.`,

  keyQuotes: [
    {
      quote: 'One summer evening (led by her)',
      analysis:
        'Nature is personified as a guiding female figure. The parenthetical aside suggests this is something the adult narrator now understands -- that nature was leading him towards a formative experience.',
      themes: ['Power of nature', 'Memory', 'The sublime'],
    },
    {
      quote: 'lustily I dipped my oars',
      analysis:
        'The adverb "lustily" conveys youthful energy, physical confidence, and enthusiasm. The boy feels powerful and in control of his environment -- a confidence that will be dramatically overturned.',
      themes: ['Youth', 'Confidence', 'Growing up'],
    },
    {
      quote: 'troubled pleasure',
      analysis:
        'This oxymoron captures the duality of the experience: excitement mixed with guilt about stealing the boat. It foreshadows the deeper "trouble" to come and suggests that transgression and growth are linked.',
      themes: ['Guilt', 'Growing up', 'The sublime'],
    },
    {
      quote: 'a huge peak, black and huge',
      analysis:
        'The repetition of "huge" emphasises the overwhelming scale of the mountain. "Black" adds menace and darkness. The inversion of the normal adjective order creates a sense of the mountain growing larger as the boy stares at it.',
      themes: ['Power of nature', 'The sublime', 'Fear'],
    },
    {
      quote: 'Upreared its head',
      analysis:
        'The mountain is personified as a creature rising up. "Upreared" suggests something rearing back, like a horse or serpent, giving the mountain animal-like threat. The mountain seems to assert its dominance over the boy.',
      themes: ['Power of nature', 'The sublime', 'Fear'],
    },
    {
      quote: 'measured motion like a living thing',
      analysis:
        'The simile makes the mountain seem animate and purposeful. "Measured motion" suggests slow, deliberate pursuit -- the mountain is not chaotic but controlled and powerful, which makes it more terrifying.',
      themes: ['Power of nature', 'The sublime', 'Personification'],
    },
    {
      quote: 'unknown modes of being',
      analysis:
        'This abstract phrase suggests the boy has glimpsed something beyond human comprehension -- perhaps a spiritual or divine power within nature. The experience opens his mind to forces that cannot be rationally understood.',
      themes: ['The sublime', 'Spirituality', 'Growing up'],
    },
    {
      quote: 'huge and mighty forms, that do not live / Like living men',
      analysis:
        'The final haunting image. The "forms" are not human but they move through his mind as if alive. Nature has permanently altered his consciousness -- it is no longer a backdrop but an active, overwhelming presence in his inner life.',
      themes: ['Power of nature', 'Memory', 'The sublime'],
    },
    {
      quote: 'No familiar shapes / Remained',
      analysis:
        'The negation of everything familiar shows how completely the experience has transformed his perception. The comforting pastoral world has been replaced by something vast and unknowable.',
      themes: ['Loss of innocence', 'The sublime', 'Growing up'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'Upreared its head ... Strode after me',
      effect:
        'The mountain is given human and animal qualities -- rising up and striding after the boy like a predator. This transforms nature from a passive setting into an active, terrifying force with its own will and purpose.',
      lineRef: 18,
    },
    {
      device: 'Sublime imagery',
      example: 'a huge peak, black and huge, / As if with voluntary power instinct',
      effect:
        'The mountain embodies the Romantic sublime: something so vast and powerful it overwhelms human understanding. The encounter fills the boy with awe and terror, forcing him to confront his own insignificance.',
      lineRef: 16,
    },
    {
      device: 'Sibilance',
      example: 'silent ... stole ... stealth',
      effect:
        'The repeated "s" sounds create a hushed, secretive atmosphere throughout the extract. They link the boy\'s initial act of theft with his fearful retreat, bookending the experience with guilt and secrecy.',
      lineRef: 12,
    },
    {
      device: 'Enjambment',
      example: 'my brain / Worked with a dim and undetermined sense',
      effect:
        'Lines spill into each other without pause, mirroring both the physical momentum of the boat and the way the experience overflows into the boy\'s consciousness, refusing to be contained.',
      lineRef: 25,
    },
    {
      device: 'Contrast',
      example: '"lustily I dipped" vs "trembling oars I turned"',
      effect:
        'The dramatic contrast between the boy\'s confident outward journey and his terrified return underscores nature\'s power to humble and transform. His physical control gives way to emotional vulnerability.',
      lineRef: 19,
    },
    {
      device: 'Simile',
      example: 'Went heaving through the water like a swan',
      effect:
        'The swan simile evokes grace, beauty, and harmony with nature during the confident phase of the journey. It also carries connotations of elegance that contrast sharply with the violent imagery of the mountain encounter.',
      lineRef: 8,
    },
    {
      device: 'Oxymoron',
      example: 'troubled pleasure',
      effect:
        'Combines contradictory emotions -- pleasure in the adventure, trouble from the guilt. This compression captures the complexity of the boy\'s emotional state and foreshadows the deeper psychological disturbance to come.',
      lineRef: 5,
    },
    {
      device: 'Metaphor',
      example: 'There hung a darkness, call it solitude / Or blank desertion',
      effect:
        'Darkness becomes a metaphor for psychological transformation. It "hangs" over his thoughts like a physical weight, suggesting the experience has permanently clouded his understanding of the world.',
      lineRef: 28,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────── */

const COMPARE_WITH = [
  {
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/power-and-conflict/storm-on-the-island',
    points: [
      'Both explore the terrifying power of nature and humanity\'s vulnerability',
      'Both use first-person speakers who shift from confidence to fear',
      'Heaney\'s storm is literal and present; Wordsworth\'s mountain is remembered and internalised',
    ],
    themes: ['Power of nature', 'Fear', 'The sublime'],
  },
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    link: '/revision/poetry/power-and-conflict/exposure',
    points: [
      'Both show nature as an overwhelming, hostile force that dwarfs human power',
      'Owen\'s soldiers are physically destroyed by nature; Wordsworth\'s boy is psychologically transformed',
      'Both use repetition and sensory imagery to convey nature\'s relentless presence',
    ],
    themes: ['Power of nature', 'Suffering', 'Fear'],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    link: '/revision/poetry/power-and-conflict/ozymandias',
    points: [
      'Both are Romantic poems exploring the limits of human power against greater forces',
      'Ozymandias shows time and nature destroying human arrogance; The Prelude shows nature humbling youthful confidence',
      'Both use imagery of vast scale to diminish human significance',
    ],
    themes: ['Power of nature', 'Hubris', 'Transience of power'],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function ThePreludePage() {
  return (
    <div className="space-y-8">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Prelude: Stealing the Boat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
          </div>
        </div>
      </div>

      {/* ── Interactive poem viewer ─────────────────────────────── */}
      <StudyTools
        textName="The Prelude: Stealing the Boat"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />
      <InteractivePoemViewer poem={POEM} />

      {/* ── Compare with ───────────────────────────────────────── */}
      <section>
        <h2 className="text-heading-md font-heading text-foreground mb-4">
          Compare with
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARE_WITH.map((cmp) => (
            <div
              key={cmp.title}
              className="rounded-xl border border-border bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {cmp.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{cmp.poet}</p>

              <ul className="space-y-1.5 mb-4 flex-1">
                {cmp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-1.5 before:size-1 before:rounded-full before:bg-muted-foreground/40"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {cmp.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs text-rose-400"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cmp.link} />}
              >
                Study {cmp.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from The Prelude by William Wordsworth reproduced freely.
      </p>
    </div>
  )
}
