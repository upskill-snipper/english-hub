'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'

const toAutumn: PoemData = {
  title: 'To Autumn',
  poet: 'John Keats',
  lines: [
    {
      text: 'Season of mists and mellow fruitfulness,',
      annotations: [
        {
          type: 'Apostrophe',
          note: 'The poem opens by directly addressing autumn as if it were a person. This is the first move in personifying the season throughout the ode.',
          color: '#a855f7',
        },
        {
          type: 'Sound',
          note: '"Mists and mellow" pairs sibilance with the soft "m" sound, creating a hushed, gentle opening. The line itself sounds drowsy.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'One of the most famous opening lines in English poetry. Keats establishes the abundant, soft mood that defines the whole ode.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Close bosom-friend of the maturing sun;',
      annotations: [
        {
          type: 'Personification',
          note: 'Autumn and the sun are imagined as close friends working together to ripen the fruit. The image is intimate, almost domestic.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Conspiring with him how to load and bless',
      annotations: [
        {
          type: 'Verb',
          note: '"Conspiring" is a slightly unsettling word \u2014 conspiracy is usually negative. Keats uses it playfully: autumn and the sun are plotting together to overload the world with fruit.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'With fruit the vines that round the thatch-eves run;',
      annotations: [
        {
          type: 'Setting',
          note: 'The English cottage detail \u2014 vines around the thatched eaves \u2014 anchors the poem in a specific rural place. Keats wrote the ode after a walk near Winchester.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To bend with apples the moss\u2019d cottage-trees,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The branches are weighed down ("bend") with so much fruit. "Moss\u2019d" suggests the trees are old and well-loved \u2014 part of the landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And fill all fruit with ripeness to the core;',
      annotations: [
        {
          type: 'Abundance',
          note: '"To the core" implies total saturation. The ripeness goes all the way through every fruit \u2014 nothing is shallow or partial.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Keats packs the line with sensory richness. The whole stanza is about overflow, fullness, and the season at its absolute peak.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'To swell the gourd, and plump the hazel shells',
      annotations: [
        {
          type: 'Verb choices',
          note: '"Swell" and "plump" are verbs of expansion. Keats makes us feel the fruit physically growing larger, almost ready to burst.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'With a sweet kernel; to set budding more,',
      annotations: [
        {
          type: 'Excess',
          note: 'Even at autumn\u2019s peak, the season is still creating new buds. Keats hints that the abundance has gone beyond natural limits.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And still more, later flowers for the bees,',
      annotations: [
        {
          type: 'Repetition',
          note: '"Still more" emphasises the unstoppable generosity of the season. The bees will keep finding new flowers \u2014 nature seems endless.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Until they think warm days will never cease,',
      annotations: [
        {
          type: 'Irony',
          note: '"Will never cease" \u2014 but they will. The bees, fooled by the abundance, do not realise winter is coming. Keats hints at the fragility of the moment.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'For Summer has o\u2019er-brimm\u2019d their clammy cells.',
      annotations: [
        {
          type: 'Tactile',
          note: '"Clammy cells" is a precise, slightly damp tactile image. The honeycomb is overflowing \u2014 the season cannot hold any more.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The end of stanza one. The world is so full it spills over. This is the absolute peak before any decline begins.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Who hath not seen thee oft amid thy store?',
      annotations: [
        {
          type: 'Personification',
          note: 'Autumn is now imagined as a person sitting amid stored grain. The rhetorical question makes the personified figure feel familiar \u2014 we have all glimpsed her.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Sometimes whoever seeks abroad may find',
      annotations: [
        {
          type: 'Indefiniteness',
          note: 'Keats uses vague, drifting language: "sometimes", "whoever", "may find". The mood of stanza two is dreamy and indefinite, fitting the lull of the harvest.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thee sitting careless on a granary floor,',
      annotations: [
        {
          type: 'Image',
          note: 'Autumn is now an idle figure resting on the granary floor. The harvest is in; there is nothing more to do but rest. "Careless" means free of care, not negligent.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The personification crystallises into a single visual portrait. Autumn becomes a real, almost paintable person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Thy hair soft-lifted by the winnowing wind;',
      annotations: [
        {
          type: 'Sensory',
          note: 'The winnowing wind separates grain from chaff. Keats turns this practical farm image into something almost erotic: hair gently lifted by the breeze.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Or on a half-reap\u2019d furrow sound asleep,',
      annotations: [
        {
          type: 'Sleep',
          note: 'Autumn falls asleep mid-task, in a "half-reap\u2019d furrow". The image suggests the season\u2019s drowsy peacefulness, but also a quiet warning: time is passing while she sleeps.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Drows\u2019d with the fume of poppies, while thy hook',
      annotations: [
        {
          type: 'Drugged',
          note: 'Poppies were associated with opium. Autumn is in a kind of narcotic sleep \u2014 the season itself is dreamy and slowed down.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Spares the next swath and all its twined flowers:',
      annotations: [
        {
          type: 'Pause',
          note: 'The reaping has paused. The flowers among the grain are spared because the worker is asleep. A moment of suspended time.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And sometimes like a gleaner thou dost keep',
      annotations: [
        {
          type: 'Working figure',
          note: 'The gleaner is a poor labourer who picks up grain left after the harvest. Autumn becomes a humble, working figure \u2014 not a queen but a peasant.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Steady thy laden head across a brook;',
      annotations: [
        {
          type: 'Balance',
          note: 'The image of carrying a heavy basket across a stream is delicate and precise. Autumn must hold "steady" \u2014 the moment of balance is fragile.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Or by a cyder-press, with patient look,',
      annotations: [
        {
          type: 'Patience',
          note: 'The cider press squeezes apples slowly. "Patient" suggests acceptance of slow time, of waiting for the season to finish.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thou watchest the last oozings hours by hours.',
      annotations: [
        {
          type: 'Time',
          note: '"Hours by hours" stretches time. The "last oozings" of cider are slow, drop by drop \u2014 a gentle but unmistakable image of the season ending.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The end of stanza two. Time is now visibly passing. "Last" is the first hint that this season cannot last forever.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Where are the songs of spring? Ay, where are they?',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'The third stanza opens with a question about absence. Spring\u2019s music is gone. The line momentarily seems to mourn what is lost.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Think not of them, thou hast thy music too,\u2014',
      annotations: [
        {
          type: 'Volta',
          note: 'Keats answers his own question. Don\u2019t mourn spring \u2014 autumn has its own music. The dash extends the moment, opening into the new soundscape that follows.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'The turning point of the ode. Autumn is given equal status with spring \u2014 every season has its own value.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'While barred clouds bloom the soft-dying day,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Bloom" is the verb used for spring flowers, but here it describes evening clouds. Keats applies spring\u2019s vocabulary to autumn\u2019s sky \u2014 the seasons are united.',
          color: '#10b981',
        },
        {
          type: 'Oxymoron',
          note: '"Soft-dying" yokes gentleness with death. Autumn is dying, but softly, beautifully \u2014 not a tragedy but a quiet end.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And touch the stubble-plains with rosy hue;',
      annotations: [
        {
          type: 'Colour',
          note: 'The "stubble-plains" \u2014 fields after the harvest \u2014 are touched with rosy light. Even bareness is beautiful in this golden hour.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Then in a wailful choir the small gnats mourn',
      annotations: [
        {
          type: 'Sound',
          note: '"Wailful choir" personifies the gnats as a singing chorus mourning the day. Even the smallest creatures contribute to autumn\u2019s music.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Among the river sallows, borne aloft',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Sallows" are willow trees by the river. The specific botanical word grounds the elevated music in a real landscape.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Or sinking as the light wind lives or dies;',
      annotations: [
        {
          type: 'Image',
          note: 'The gnats rise and fall with the breeze. The image is visual and aural at once \u2014 the music of autumn moves with the air itself.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And full-grown lambs loud bleat from hilly bourn;',
      annotations: [
        {
          type: 'Time marker',
          note: '"Full-grown lambs" \u2014 the lambs of spring are now fully grown. The phrase quietly reminds us how much time has passed since the previous season.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Hedge-crickets sing; and now with treble soft',
      annotations: [
        {
          type: 'Music',
          note: 'Crickets join the autumn choir. The sound becomes layered \u2014 like an actual musical composition with different voices.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The red-breast whistles from a garden-croft;',
      annotations: [
        {
          type: 'Bird',
          note: 'The robin (red-breast) is traditionally associated with autumn and winter in England. Keats lets the robin add a clear, bright note to the soundscape.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And gathering swallows twitter in the skies.',
      annotations: [
        {
          type: 'Final image',
          note: 'Swallows gather to migrate \u2014 they are about to leave for winter. The poem ends with departure and movement, but the tone is calm rather than tragic.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The closing line is bittersweet. Autumn ends with the swallows leaving, but the music and beauty of the season are complete in themselves.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Keats (1795&ndash;1821)</h3>
    <p>Keats was a second-generation Romantic poet, alongside Byron and Shelley. He died of tuberculosis at the age of just 25, having produced an extraordinary body of work in the last few years of his life. He was deeply attentive to sensory experience and to the relationship between beauty and mortality.</p>

    <h3>September 1819</h3>
    <p>Keats wrote "To Autumn" on 19 September 1819, the day after a walk near Winchester. He described the walk in a letter: "How beautiful the season is now \u2014 How fine the air. A temperate sharpness about it... I never lik\u2019d stubble fields so much as now... somehow a stubble plain looks warm \u2014 in the same way that some pictures look warm."</p>

    <h3>One of the great odes</h3>
    <p>"To Autumn" is the last of Keats\u2019s great odes, following "Ode to a Nightingale", "Ode on a Grecian Urn" and "Ode on Melancholy". Many critics regard it as the most perfectly achieved poem of his short career.</p>

    <h3>Romantic context</h3>
    <p>Romantic poets celebrated the natural world and direct sensory experience. "To Autumn" is unusual among Keats\u2019s odes in that it stays entirely outside, in the world, with no abstract questioning. It is a poem of acceptance \u2014 of the season, of time and of mortality.</p>

    <h3>Time and Place in this poem</h3>
    <p>For the Edexcel Time and Place cluster, "To Autumn" is essential because it captures a single specific time (a few days in mid-September 1819) in a single specific place (the countryside outside Winchester). The poem is rooted in a real walk on a real day \u2014 yet it manages to feel universal.</p>
  `,

  summary: `Stanza 1 \u2014 the harvest at its peak: Keats addresses autumn directly. He describes the season conspiring with the sun to ripen and overload the world with fruit. Vines hang heavy around cottage eaves, apple branches bend, gourds swell, hazel shells plump up, and bees fill their honeycombs. Everything is overflowing.

Stanza 2 \u2014 autumn personified: Autumn is imagined as a person, glimpsed in different rural scenes. She sits "careless" on a granary floor with her hair lifted by the wind. She sleeps in a half-reaped field, drowsed by poppies. She works as a gleaner crossing a brook with a heavy load. She watches cider drip from a press, hour by hour. The mood is dreamy and slow.

Stanza 3 \u2014 the music of autumn: Keats begins by asking about the songs of spring, then immediately answers his own question: autumn has its own music. He describes the sounds of evening: gnats wailing, lambs bleating from the hills, crickets singing, a robin whistling, and gathering swallows twittering as they prepare to migrate. The poem ends with the swallows in the sky \u2014 about to leave, but still here.

Overall meaning: An ode of pure acceptance. Where most poems about autumn mourn the coming of winter, Keats refuses to mourn. He celebrates the season\u2019s abundance, its quiet labour, and its own particular music. The poem is about the value of one specific time of year in one specific place \u2014 and, by extension, about accepting time itself.`,

  formAndStructure: `Form: Three eleven-line stanzas. Each stanza has a slightly different rhyme scheme but they share an overall pattern (ABAB CDEDCCE in stanza 1; ABAB CDECDDE in stanzas 2 and 3). The form is unique to this ode \u2014 Keats invented a new shape for it.

Three-stage structure: The three stanzas correspond to three stages of autumn. Stanza 1 is the peak of harvest abundance. Stanza 2 is the slow, drowsy middle of harvest, with autumn personified. Stanza 3 is the late evening of the season, dominated by sound rather than sight.

Time progression: The ode moves from morning ripening (stanza 1), through afternoon resting (stanza 2), to evening music (stanza 3). The reader experiences not just an autumn day but the whole arc of the season compressed into three stanzas.

Volta: The turn comes at the start of stanza 3: "Where are the songs of spring? Ay, where are they? / Think not of them, thou hast thy music too." Keats refuses to mourn what is past and instead celebrates what is here.

Iambic pentameter: The lines are mostly in regular iambic pentameter, giving the ode a stately, almost classical pulse. The metre is calm and unhurried \u2014 the form itself is in no rush.

Apostrophe: The whole poem addresses autumn directly, as "thee" and "thou". This sustained personification is what gives the ode its intimacy: Keats is in conversation with the season, not just describing it.

Sound: Keats packs the poem with assonance, alliteration and rich vowel sounds ("mists and mellow fruitfulness", "soft-lifted by the winnowing wind"). The poem is meant to be felt in the mouth as well as understood by the mind.`,

  keyQuotes: [
    {
      quote: 'Season of mists and mellow fruitfulness',
      analysis:
        'One of the most famous opening lines in English poetry. The sibilant "s" sounds and soft "m" sounds create a hushed, drowsy atmosphere from the very first phrase. "Fruitfulness" (an unusual abstract noun) sums up the entire stanza\u2019s focus on abundance.',
      themes: ['Abundance', 'Time', 'Season'],
    },
    {
      quote: 'Conspiring with him how to load and bless / With fruit',
      analysis:
        '"Conspiring" is a slightly unsettling word \u2014 conspiracies are usually negative \u2014 but Keats uses it playfully. Autumn and the sun are working together, almost plotting, to overload the world. The pairing of "load" and "bless" suggests both physical weight and spiritual generosity.',
      themes: ['Personification', 'Abundance', 'Generosity'],
    },
    {
      quote: 'Until they think warm days will never cease',
      analysis:
        'A quietly devastating line. The bees, lulled by the abundance, do not realise winter is coming. The phrase "will never cease" sounds optimistic, but Keats has framed it inside the bees\u2019 deluded perspective \u2014 we know better.',
      themes: ['Time', 'Illusion', 'Mortality'],
    },
    {
      quote: 'Thee sitting careless on a granary floor',
      analysis:
        'The personification of autumn becomes a single visual portrait: a figure resting amid stored grain. "Careless" means free of care, not negligent \u2014 the season is at peace because the work is done. Keats turns autumn into a real, paintable being.',
      themes: ['Personification', 'Stillness', 'Harvest'],
    },
    {
      quote: 'Drows\u2019d with the fume of poppies',
      analysis:
        'Poppies were associated with opium and sleep. Autumn is in a kind of narcotic dream, slowed almost to a stop. The image is sensual but also slightly dangerous \u2014 oblivion is close to the surface of the season.',
      themes: ['Sleep', 'Slowness', 'Sensuality'],
    },
    {
      quote: 'Where are the songs of spring? Ay, where are they?',
      analysis:
        'The volta. For a moment Keats seems to mourn the lost spring. But the next line refuses to: "Think not of them, thou hast thy music too." The ode\u2019s great act of acceptance is to refuse the temptation of nostalgia and turn fully to the present.',
      themes: ['Acceptance', 'Time', 'Music'],
    },
    {
      quote: 'While barred clouds bloom the soft-dying day',
      analysis:
        '"Bloom" is the verb used for spring flowers, here applied to evening clouds. Keats borrows spring\u2019s vocabulary for autumn\u2019s sky. "Soft-dying" yokes gentleness with death \u2014 the day is ending, but beautifully, without struggle.',
      themes: ['Beauty', 'Death', 'Time'],
    },
    {
      quote: 'And gathering swallows twitter in the skies',
      analysis:
        'The closing line. Swallows gather before migrating \u2014 they are about to leave for winter. The poem ends not with departure itself but with the moment just before. Autumn is complete; what comes next is implied but not described. The ode ends in stillness.',
      themes: ['Departure', 'Migration', 'Time'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'Thee sitting careless on a granary floor',
      effect:
        'Autumn is personified throughout the ode as a woman: working, resting, watching. The sustained personification turns the season into a companion the speaker knows. The whole poem is essentially an address to her.',
      lineRef: 13,
    },
    {
      device: 'Sensory imagery',
      example: 'mists and mellow fruitfulness / plump the hazel shells / clammy cells',
      effect:
        'Keats packs the ode with tactile, visual and even tasteable details. The reader can almost feel the swelling fruit and the damp honeycomb. Romantic poetry valued direct sensory experience as a route to truth.',
      lineRef: 0,
    },
    {
      device: 'Sound patterning',
      example: 'soft-lifted by the winnowing wind',
      effect:
        'Alliteration ("soft", "lifted"), assonance ("soft", "winnowing"), and the gentle "w" sounds combine to make the line itself feel like a soft breeze. The form imitates the content.',
      lineRef: 14,
    },
    {
      device: 'Three-stage structure',
      example: 'stanza 1 ripening, stanza 2 resting, stanza 3 evening',
      effect:
        'Each stanza marks a different stage of the season and a different time of day. The reader experiences a whole autumn in three movements. The structure carries the meaning: time is passing, gently but inevitably.',
      lineRef: 11,
    },
    {
      device: 'Volta',
      example: 'Where are the songs of spring? Ay, where are they? / Think not of them, thou hast thy music too',
      effect:
        'The turn at the start of stanza 3 refuses nostalgia. Keats opens the door to mourning spring and then closes it again. The ode\u2019s philosophical move is this refusal \u2014 a celebration of the present in its own right.',
      lineRef: 23,
    },
    {
      device: 'Apostrophe',
      example: 'Season of mists... thou hast thy music too',
      effect:
        'The whole poem is addressed to autumn. Apostrophe (direct address to an absent or non-human being) gives the ode its intimate, conversational tone. Autumn is not just observed \u2014 she is spoken to.',
      lineRef: 24,
    },
  ],
}

const comparisons = [
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
    reason:
      'Both poems are Romantic celebrations of a specific time in a specific place. Wordsworth captures a city dawn; Keats captures a country autumn. Compare how each poet uses an exact, fleeting moment to create a wider feeling.',
    themes: ['Beauty', 'Time', 'Romanticism'],
  },
  {
    title: 'Adlestrop',
    poet: 'Edward Thomas',
    href: '/revision/poetry/edexcel/time-and-place',
    reason:
      'Both poems describe an English landscape at a moment of stillness. Keats\u2019s autumn afternoon and Thomas\u2019s hot summer station share a sense of suspended, almost holy quietness.',
    themes: ['Place', 'Stillness', 'Nature'],
  },
  {
    title: 'I started Early \u2013 Took my Dog',
    poet: 'Emily Dickinson',
    href: '/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog',
    reason:
      'Both poems give nature an almost human personality. Keats personifies autumn as a peaceful figure; Dickinson personifies the sea as an aggressive suitor. Compare the very different relationships each speaker has with the natural world.',
    themes: ['Personification', 'Nature', 'Encounter'],
  },
]

export default function ToAutumnPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">To Autumn</h1>
            <p className="text-body-sm text-muted-foreground">
              John Keats &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Edexcel</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={toAutumn} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with To Autumn from the Edexcel Time and Place cluster.
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
