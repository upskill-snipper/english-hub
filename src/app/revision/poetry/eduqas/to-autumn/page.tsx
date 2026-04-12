'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

const toAutumn: PoemData = {
  title: 'To Autumn',
  poet: 'John Keats',
  lines: [
    {
      text: 'Season of mists and mellow fruitfulness,',
      annotations: [
        {
          type: 'Opening',
          note: 'The famous opening line is an apostrophe (direct address) to autumn personified. "Mellow" suggests softness and ripeness; "fruitfulness" introduces the theme of abundance.',
          color: '#10b981',
        },
        {
          type: 'Sibilance',
          note: 'The "s" and "m" sounds create a soft, hushed atmosphere - the gentle quality of autumn.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Close bosom-friend of the maturing sun;',
      annotations: [
        {
          type: 'Personification',
          note: 'Autumn is personified as the "bosom-friend" of the sun. They work together intimately to ripen the harvest. The sun is "maturing" - active, productive.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Conspiring with him how to load and bless',
      annotations: [
        {
          type: 'Diction',
          note: '"Conspiring" is unusual - it suggests a friendly plot, the secret collaboration of nature. Both "load" and "bless" suggest abundance and benediction.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'With fruit the vines that round the thatch-eves run;',
      annotations: [
        {
          type: 'Imagery',
          note: 'The vines climbing the thatched roofs create a pastoral image of an English countryside cottage. Autumn brings fruit even to humble dwellings.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'To bend with apples the moss\'d cottage-trees,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Bend with apples" - the trees are weighed down by their abundance. Even old "moss\'d" (mossy) trees produce fruit. Nature provides for all.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And fill all fruit with ripeness to the core;',
      annotations: [
        {
          type: 'Key quote',
          note: 'Total ripeness "to the core" - perfect maturity. This is the moment when fruit is most beautiful, just before decay. Keats captures the fleeting peak of autumn.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'To swell the gourd, and plump the hazel shells',
      annotations: [
        {
          type: 'Verbs',
          note: '"Swell" and "plump" - active, sensory verbs that emphasise ripeness and fullness. The poem feels physically rich, almost overflowing.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'With a sweet kernel; to set budding more,',
      annotations: [
        {
          type: 'Diction',
          note: '"Sweet kernel" - even inside the shell, autumn brings sweetness. Nothing is wasted. "Set budding more" - autumn keeps producing.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And still more, later flowers for the bees,',
      annotations: [
        {
          type: 'Repetition',
          note: '"More, / And still more" - the abundance keeps coming. Even late in the season there are flowers for the bees.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Until they think warm days will never cease,',
      annotations: [
        {
          type: 'Foreshadowing',
          note: 'The bees believe summer will last forever - but the reader knows it won\'t. There is gentle dramatic irony here. The illusion of permanence sets up the seasonal change.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'For summer has o\'er-brimm\'d their clammy cells.',
      annotations: [
        {
          type: 'Imagery',
          note: '"O\'er-brimm\'d" - overflowing. The honeycombs are so full they spill over. "Clammy cells" - the wax cells of the hive are sticky with honey. Total abundance.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The first stanza ends with absolute fullness. There is nothing more to give. The peak has been reached.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Who hath not seen thee oft amid thy store?',
      annotations: [
        {
          type: 'Direct address',
          note: 'The second stanza opens with a rhetorical question to the personified Autumn. Keats imagines us all having seen autumn at work. The intimate, conversational tone draws us in.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Sometimes whoever seeks abroad may find',
      annotations: [
        {
          type: 'Diction',
          note: '"Seeks abroad" - if you go outside looking, you\'ll find autumn personified. Keats encourages active engagement with the natural world.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thee sitting careless on a granary floor,',
      annotations: [
        {
          type: 'Personification',
          note: '"Careless" - relaxed, unworried. Autumn sits casually after the harvest. The image is of a worker resting after good labour.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Thy hair soft-lifted by the winnowing wind;',
      annotations: [
        {
          type: 'Imagery',
          note: 'A beautiful, sensual image. Autumn personified as a figure with hair gently lifted by the wind. The "winnowing wind" separates grain from chaff - autumn is associated with productive labour.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Or on a half-reap\'d furrow sound asleep,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Autumn falls asleep on the half-reaped field. The work is paused, mid-task. Time has slowed. The image is peaceful and dreamy.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Drows\'d with the fume of poppies, while thy hook',
      annotations: [
        {
          type: 'Allusion',
          note: '"Fume of poppies" - poppies were a source of opium. Autumn is drowsy as if drugged. The reapers hook (sickle) lies idle. Even tools rest.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Spares the next swath and all its twined flowers:',
      annotations: [
        {
          type: 'Imagery',
          note: 'The hook "spares" the next row of grain - it has not cut down the wildflowers. Keats notices that autumn allows beauty to remain even amid harvest.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And sometimes like a gleaner thou dost keep',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a gleaner" - autumn is compared to a poor person picking up leftover grain after the harvest. Keats notices ordinary working life - gleaning was a vital activity for the rural poor.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Steady thy laden head across a brook;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Laden head" - the gleaner balances a heavy basket on her head as she crosses a brook. A graceful image of patient, careful labour.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Or by a cyder-press, with patient look,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Patient look" - autumn waits. The cyder-press (cider press) slowly extracts juice from apples. This is the slow, deliberate labour of harvest.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Thou watchest the last oozings hours by hours.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Last oozings" - the final drops of cider. "Hours by hours" - time stretched out. The slow, patient ending of the harvest. This is the calm before the next stanza\'s elegiac conclusion.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Where are the songs of Spring? Ay, where are they?',
      annotations: [
        {
          type: 'Volta',
          note: 'The third stanza opens with a turn. The rhetorical question contrasts autumn with spring. The speaker seems briefly nostalgic but then dismisses the longing.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Think not of them, thou hast thy music too,—',
      annotations: [
        {
          type: 'Reassurance',
          note: '"Think not of them" - Keats addresses autumn directly. Autumn doesn\'t need the songs of spring. It has its own beauty. This is the philosophical heart of the poem: every season has value.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'A gentle, consoling line. Keats accepts each season for what it is. Implicitly, he is reconciled to mortality and change.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'While barred clouds bloom the soft-dying day,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Barred clouds bloom" - sunset clouds spread across the sky like flowers. "Soft-dying day" - the day dies gently, beautifully. Death is not violent here.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And touch the stubble-plains with rosy hue;',
      annotations: [
        {
          type: 'Imagery',
          note: 'Sunset light gives the cleared fields ("stubble-plains") a rosy glow. The fields are bare from harvest, but in this light they are beautiful.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Then in a wailful choir the small gnats mourn',
      annotations: [
        {
          type: 'Imagery',
          note: '"Wailful choir" - even tiny gnats produce music, though it is mournful. Keats elevates the small and overlooked. Nature has its own musicians.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Among the river sallows, borne aloft',
      annotations: [
        {
          type: 'Diction',
          note: '"Sallows" are willow trees. The gnats hover over the river willows. The image is delicate, atmospheric.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Or sinking as the light wind lives or dies;',
      annotations: [
        {
          type: 'Imagery',
          note: 'The gnats rise and fall as the wind lives and dies. "Lives or dies" introduces the central theme: life and death together. The wind itself has a brief existence.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And full-grown lambs loud bleat from hilly bourn;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Full-grown lambs" - the spring lambs are now adult sheep. The seasons have passed. Time moves on without our noticing.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Hedge-crickets sing; and now with treble soft',
      annotations: [
        {
          type: 'Sound',
          note: '"Hedge-crickets sing" - more music from small creatures. "Treble soft" - high, gentle notes. The whole stanza is a catalogue of nature\'s music.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The red-breast whistles from a garden-croft;',
      annotations: [
        {
          type: 'Imagery',
          note: 'A robin sings from the garden. The robin is associated with autumn and winter. Even as the year ends, song continues.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And gathering swallows twitter in the skies.',
      annotations: [
        {
          type: 'Closing image',
          note: 'The poem ends with swallows gathering to migrate south. Their imminent departure marks the end of summer, but the image is peaceful, not sad. Keats accepts the cycle.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The famous closing line. The swallows are leaving, but the poem ends with their music, not their absence. Acceptance, not grief.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Keats (1795-1821)</h3>
    <p>Keats was one of the major English Romantic poets, alongside Wordsworth, Shelley, and Byron. He trained as a surgeon before turning to poetry. He died of tuberculosis at just 25, having written some of the greatest poems in English in only a few years.</p>

    <h3>Composition (1819)</h3>
    <p>"To Autumn" was written on 19 September 1819, after Keats took an evening walk near Winchester. He described the experience in a letter: "How beautiful the season is now... I never lik\'d stubble fields so much as now". It is the last great ode he completed.</p>

    <h3>The Romantic Ode</h3>
    <p>An <strong>ode</strong> is a formal lyric poem addressed to a person, place, or abstract idea. The Romantic odes (by Keats, Wordsworth, Shelley) are some of the greatest achievements of English poetry. Keats wrote a series of odes in 1819 - "Ode to a Nightingale", "Ode on a Grecian Urn", "Ode on Melancholy", and "To Autumn".</p>

    <h3>Personal Context</h3>
    <p>By 1819, Keats had nursed his brother Tom through fatal tuberculosis and was beginning to show symptoms of the disease himself. He knew he was unlikely to live long. "To Autumn" can be read as a quiet acceptance of death and the passing of time - the speaker finds beauty in the season of endings.</p>

    <h3>Pastoral Tradition</h3>
    <p>The poem belongs to the <strong>pastoral</strong> tradition - poetry idealising rural life. Keats describes English country labour (gleaning, cider-pressing, harvest) with affectionate detail. He celebrates ordinary working people alongside the beauty of nature.</p>

    <h3>Negative Capability</h3>
    <p>Keats developed the idea of <strong>negative capability</strong> - the ability to accept uncertainty, mystery, and doubt without trying to resolve them. "To Autumn" embodies this: the speaker accepts the passing of summer without protest or longing.</p>
  `,

  summary: `Stanza 1 - Abundance: Autumn is personified and addressed directly. It "conspires" with the sun to ripen the harvest. Vines, apples, gourds, hazelnuts, flowers - everything is full to overflowing. Even the bees are deceived into thinking summer will never end.

Stanza 2 - Personification: The speaker imagines seeing Autumn personified at work in the rural landscape. Autumn sits on the granary floor, falls asleep in a half-reaped field "drowsed with the fume of poppies", crosses a brook like a gleaner, watches the last drops oozing from a cider-press. Time slows.

Stanza 3 - Music and acceptance: The third stanza opens with a question - "Where are the songs of Spring?" - but immediately dismisses it. Autumn has its own music: wailing gnats, bleating sheep, singing hedge-crickets, whistling robins, twittering swallows. The day dies softly. The swallows gather to migrate south. The poem ends in acceptance.

Overall meaning: "To Autumn" celebrates the beauty of the season of ripeness and decay. It moves from total abundance (stanza 1) to slow, dreamy labour (stanza 2) to acceptance of endings (stanza 3). The poem is a meditation on time, mortality, and the value of every stage of life - read by many as Keats\'s response to his own approaching death.`,

  formAndStructure: `Form: Three stanzas of 11 lines each. The poem is an <strong>ode</strong> - a formal address to a personified subject (Autumn).

Rhyme scheme: Each stanza follows a complex pattern: ABABCDEDCCE in stanzas 2-3 (slightly different in stanza 1). The intricate rhyme creates a sense of careful craft - this is a deliberate, formal poem, not a spontaneous outpouring.

Metre: Iambic pentameter throughout. The regular metre creates a steady, calm pace that mirrors the leisurely passage of autumn. Some lines are deliberately slowed by long vowels and soft consonants.

Three-stanza structure: The stanzas trace a progression - from morning abundance, to afternoon repose, to evening acceptance. This mirrors the structure of a single autumn day, and also the larger movement from peak harvest to the year\'s end.

Personification: Autumn is personified throughout - as a "bosom-friend" of the sun, a worker on a granary floor, a gleaner, a watcher at the cider-press. This direct address gives the poem its intimate, conversational quality.

Sensory imagery: Each stanza emphasises a different sense. Stanza 1 is visual and tactile (fruit, ripeness, bursting cells). Stanza 2 is languid and dreamy (sleep, drowsiness, slow oozing). Stanza 3 is auditory (the music of autumn).

Volta: The structural turn comes at the start of stanza 3 - "Where are the songs of Spring?" The speaker seems briefly nostalgic but quickly accepts that autumn has its own music. This is the moment of philosophical acceptance.

Closing image: The poem ends with swallows gathering to leave - the very symbol of seasonal change. But the focus is on their music, not their absence. Keats finds beauty in transience.`,

  keyQuotes: [
    {
      quote: 'Season of mists and mellow fruitfulness',
      analysis:
        'The famous opening line introduces autumn through soft, sensual sounds. "Mellow" suggests ripeness and softness; "fruitfulness" is a key word - autumn is productive, generous. The sibilance and "m" sounds create a hushed, almost reverent atmosphere.',
      themes: ['Abundance', 'Sensory beauty', 'Personification'],
    },
    {
      quote: 'Conspiring with him how to load and bless / With fruit',
      analysis:
        '"Conspiring" makes the autumn-sun partnership feel like a friendly secret plot. "Load and bless" combines abundance (load) with religious benediction (bless). Nature is generous and almost holy.',
      themes: ['Abundance', 'Nature', 'Generosity'],
    },
    {
      quote: 'fill all fruit with ripeness to the core',
      analysis:
        'Total ripeness penetrates everything. "To the core" suggests perfection - this is the peak moment, just before decay. Keats captures the fleeting fullness of autumn before the inevitable decline.',
      themes: ['Ripeness', 'Perfection', 'Transience'],
    },
    {
      quote: 'Drows\'d with the fume of poppies, while thy hook / Spares the next swath',
      analysis:
        'Autumn falls asleep among the harvest, drugged by poppy fumes (poppies produce opium). The reaper\'s hook lies idle. Even labour pauses. The image is dreamy and pastoral, capturing the lazy, hot afternoons of harvest time.',
      themes: ['Slowness of time', 'Pastoral life', 'Personification'],
    },
    {
      quote: 'Where are the songs of Spring? Ay, where are they? / Think not of them',
      analysis:
        'The volta. The speaker briefly asks where spring\'s songs are, then immediately tells autumn (and himself) not to think about them. This is the philosophical heart of the poem: each season has its own value. Don\'t mourn what is gone.',
      themes: ['Acceptance', 'Time', 'Philosophy'],
    },
    {
      quote: 'thou hast thy music too',
      analysis:
        'A gentle, reassuring statement. Autumn doesn\'t need spring\'s music - it has its own. The line implicitly applies to mortality: every stage of life has its own beauty. Read in light of Keats\'s impending death, this is profoundly moving.',
      themes: ['Acceptance', 'Beauty', 'Equality of seasons'],
    },
    {
      quote: 'soft-dying day',
      analysis:
        'The day "dies" but softly. Death is not violent or tragic but gentle and beautiful. The pairing of "soft" with "dying" captures Keats\'s reconciled view - endings can be peaceful and lovely.',
      themes: ['Death', 'Acceptance', 'Beauty in endings'],
    },
    {
      quote: 'gathering swallows twitter in the skies',
      analysis:
        'The famous closing line. The swallows are gathering to migrate south - the end of summer, the year\'s decline. But the focus is on their twittering (their music), not their departure. The poem ends with sound, not silence. Beauty continues right to the edge of the ending.',
      themes: ['Time', 'Acceptance', 'Music of nature'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'Close bosom-friend of the maturing sun ... Thee sitting careless on a granary floor',
      effect:
        'Autumn is personified throughout, addressed as "thou" and described as a worker resting in the fields. This makes the season intimate and tangible, transforming an abstract idea into a companion. It is the central technique of the poem.',
      lineRef: 2,
    },
    {
      device: 'Sensory imagery',
      example: 'mists and mellow fruitfulness / Drows\'d with the fume of poppies',
      effect:
        'Each stanza emphasises a different sense. Stanza 1 is visual and tactile (ripe fruit). Stanza 2 is languid and dreamy (drowsiness, slow movement). Stanza 3 is auditory (songs and music). The poem becomes a total sensory experience of autumn.',
      lineRef: 1,
    },
    {
      device: 'Sibilance',
      example: 'Season of mists ... Conspiring with him ... soft-dying day',
      effect:
        'The "s" sounds create a soft, hushed quality throughout. The poem feels whispered rather than spoken. This sibilance evokes the gentle stillness of autumn afternoons - the calm of the season.',
      lineRef: 1,
    },
    {
      device: 'Apostrophe',
      example: 'Who hath not seen thee oft amid thy store? ... thou hast thy music too',
      effect:
        'The poem is an extended apostrophe - a direct address to autumn personified. This conventions of the ode form give the poem its conversational, intimate quality, as if Keats is talking directly to a friend.',
      lineRef: 11,
    },
    {
      device: 'Volta',
      example: 'Where are the songs of Spring? Ay, where are they?',
      effect:
        'The third stanza opens with a turn - a brief moment of nostalgia for spring. But it is immediately dismissed. The volta marks the philosophical climax: acceptance of the seasonal cycle.',
      lineRef: 22,
    },
    {
      device: 'Cataloguing',
      example: 'gnats mourn ... lambs loud bleat ... crickets sing ... red-breast whistles ... swallows twitter',
      effect:
        'The third stanza catalogues the music of autumn. Each creature has its own song, building up to a full chorus. The catalogue suggests that autumn is rich with sound, not silent.',
      lineRef: 25,
    },
    {
      device: 'Diction',
      example: 'mellow ... swell ... plump ... ripeness ... laden',
      effect:
        'Keats\'s word choices throughout emphasise fullness, weight, and ripeness. The language itself feels heavy with abundance, mirroring the season\'s overflow.',
      lineRef: 1,
    },
  ],
}

const comparisons = [
  {
    title: 'The Prelude: stealing the boat',
    poet: 'William Wordsworth',
    href: '/revision/poetry/eduqas/the-prelude',
    reason:
      'Both Romantic poems present nature as a powerful force. Keats sees nature as gentle, abundant, and consoling; Wordsworth shows it as sublime and threatening. A perfect contrast in Romantic visions.',
    themes: ['Nature', 'Romantic poetry', 'Awe'],
  },
  {
    title: 'Sonnet 43',
    poet: 'Elizabeth Barrett Browning',
    href: '/revision/poetry/eduqas/sonnet-43',
    reason:
      'Both poems use rich, sensual language to celebrate something precious. Keats celebrates autumn; EBB celebrates love. Both use the formal lyric tradition to express deeply felt emotion.',
    themes: ['Celebration', 'Lyrical form', 'Devotion'],
  },
]

export default function ToAutumnEduqasPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              To Autumn
            </h1>
            <p className="text-body-sm text-muted-foreground">
              John Keats &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={toAutumn} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving To Autumn.
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and
        Patents Act 1988, s.30). No commercial use is intended. All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
