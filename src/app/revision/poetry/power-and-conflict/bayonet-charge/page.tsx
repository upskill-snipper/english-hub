import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import type { Metadata } from 'next'

/* ── SEO ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Bayonet Charge -- Ted Hughes -- The English Hub',
  description:
    'Interactive study guide for Bayonet Charge by Ted Hughes. Annotations, key quotes, language analysis, form & structure, and poem comparisons for GCSE English Literature.',
}

/* ── Poem data ───────────────────────────────────────────────────── */

const BAYONET_CHARGE: PoemData = {
  title: 'Bayonet Charge',
  poet: 'Ted Hughes',
  lines: [
    // ── Stanza 1 ──
    {
      text: 'Suddenly he awoke and was running - raw',
      annotations: [
        { type: 'In medias res', note: 'The poem begins mid-action with "Suddenly", plunging the reader into chaos without context or preparation — mirroring the soldier\'s disorientation.', color: '#f59e0b' },
        { type: 'Enjambment', note: '"raw" carries over to the next line, creating breathlessness and momentum that mirrors the soldier\'s desperate sprint.', color: '#a855f7' },
      ],
    },
    {
      text: 'In raw-seamed hot khaki, his sweat heavy,',
      annotations: [
        { type: 'Tactile imagery', note: '"Raw-seamed hot khaki" — the rough, chafing uniform emphasises physical discomfort and the reality of war, far from any romantic ideal.', color: '#22c55e' },
      ],
    },
    {
      text: 'Stumbling across a field of clods towards a green hedge',
      annotations: [
        { type: 'Verbs', note: '"Stumbling" conveys clumsiness and lack of control — the soldier is not heroic but desperate and uncoordinated.', color: '#22c55e' },
      ],
    },
    {
      text: 'That dazzled with rifle fire, he lugged a rifle numb',
      annotations: [
        { type: 'Contrast', note: '"Dazzled" creates a jarring beauty amid violence. "Numb" shows emotional and physical shutdown.', color: '#3b82f6' },
      ],
    },
    {
      text: 'As blind as a smashed arm, and he sweat and he sweat –',
    },
    {
      text: 'Almost stopped –',
    },
    { text: '' },
    // ── Stanza 2 ──
    {
      text: 'The patriotic tear that had brimmed in his eye',
      annotations: [
        { type: 'Irony', note: '"The patriotic tear" is presented as something that once motivated him, but is now meaningless in the face of real combat.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Sweating like molten iron from the centre of his chest, –',
      annotations: [
        { type: 'Simile', note: '"Like molten iron" — an industrial, painful image suggesting patriotism has become a burning, destructive force inside him.', color: '#22c55e' },
      ],
    },
    { text: '' },
    {
      text: 'In bewilderment then he almost stopped –',
      annotations: [
        { type: 'Caesura', note: 'The dash creates a pause, mirroring the soldier\'s hesitation as he questions why he is fighting.', color: '#a855f7' },
      ],
    },
    {
      text: 'In what cold clockwork of the stars and the nations',
      annotations: [
        { type: 'Metaphor', note: '"Cold clockwork" suggests the war machine is impersonal and mechanical — soldiers are just cogs.', color: '#22c55e' },
      ],
    },
    {
      text: 'Was he the hand pointing that second? He was running',
      annotations: [
        { type: 'Rhetorical question', note: 'The soldier questions his place in a vast, indifferent system — a moment of existential doubt.', color: '#3b82f6' },
      ],
    },
    {
      text: 'Like a man who has jumped up in the dark and runs',
    },
    {
      text: 'Listening between his footfalls for the reason',
      annotations: [
        { type: 'Simile', note: 'Comparing himself to a man waking in darkness — he acts instinctively but searches desperately for meaning or reason.', color: '#22c55e' },
      ],
    },
    {
      text: 'Of his still running, and his foot hung like',
    },
    {
      text: 'Statuary in mid-stride. Then the shot-slashed furrows',
      annotations: [
        { type: 'Imagery', note: '"Statuary in mid-stride" freezes the soldier like a monument — a powerful image of paralysis between thought and action.', color: '#22c55e' },
      ],
    },
    { text: '' },
    // ── Stanza 3 ──
    {
      text: 'Threw up a yellow hare that rolled like a flame',
      annotations: [
        { type: 'Symbolism', note: 'The hare represents innocent nature caught in human conflict — its suffering is vivid and purposeless.', color: '#f59e0b' },
        { type: 'Simile', note: '"Rolled like a flame" — the hare\'s agony is compared to fire, linking it to the destruction of war.', color: '#22c55e' },
      ],
    },
    {
      text: 'And crawled in a threshing circle, his mouth wide',
    },
    {
      text: 'Open silent, its eyes standing out.',
    },
    {
      text: 'He plunged past with his bayonet toward the green hedge,',
    },
    {
      text: 'King, honour, human dignity, etcetera',
      annotations: [
        { type: 'Listing / Tricolon', note: 'Abstract patriotic ideals are listed dismissively. "Etcetera" reduces them to meaningless words — a devastating anti-war statement.', color: '#f59e0b' },
        { type: 'Bathos', note: '"Etcetera" deflates the grand concepts that came before, showing the soldier\'s disillusionment.', color: '#3b82f6' },
      ],
    },
    {
      text: 'Dropped like luxuries in a yelling alarm',
      annotations: [
        { type: 'Simile', note: 'Patriotic ideals are compared to luxuries — unnecessary extras abandoned when survival is at stake.', color: '#22c55e' },
      ],
    },
    {
      text: 'To get out of that blue crackling air',
      annotations: [
        { type: 'Synaesthesia / Onomatopoeia', note: '"Blue crackling air" blends colour and sound to evoke the terrifying sensory overload of a battlefield under fire.', color: '#22c55e' },
      ],
    },
    {
      text: 'His terror\'s survey, he ran, and his survey',
    },
    {
      text: 'As a survey of heat – to get out –',
    },
    {
      text: 'Of the survey of pain.',
    },
  ],

  /* ── Context ──────────────────────────────────────────────────── */

  context: `<p><strong>Ted Hughes</strong> (1930–1998) was one of Britain's most celebrated poets and served as Poet Laureate from 1984 until his death. He is renowned for his visceral depictions of nature and violence.</p>
<p><strong>Bayonet Charge</strong> was published in Hughes's first collection, <em>The Hawk in the Rain</em> (1957). Although Hughes did not fight in either World War, his <strong>father, William Hughes, served in the First World War</strong> at Gallipoli and in France. William rarely spoke of his experiences, but Hughes grew up acutely aware of the trauma his father carried. The poem draws on these inherited memories.</p>
<p>The soldier in the poem is deliberately <strong>unnamed and universal</strong> — referred to only as "he". This makes him an everyman figure, representing any soldier in any conflict. Hughes strips away the glory and romance traditionally associated with warfare to present <strong>raw, terrifying reality</strong>.</p>
<p>The poem is fundamentally <strong>anti-war</strong>. It challenges patriotic propaganda by showing how abstract ideals like "King, honour, human dignity" become meaningless when a soldier faces death. Hughes was influenced by the <strong>First World War poets</strong> (Owen, Sassoon) and the existentialist idea that war reduces humans to mere bodies acting on survival instinct.</p>
<p>Published in <strong>1957</strong>, twelve years after WWII and during the early Cold War, the poem reflects a society still reckoning with the cost of conflict and suspicious of the rhetoric used to justify it.</p>`,

  /* ── Summary ──────────────────────────────────────────────────── */

  summary: `The poem follows an unnamed soldier during a bayonet charge across a battlefield. It captures a single, intense moment of combat.

Stanza 1: The poem opens in medias res — the soldier is already running across a field under fire. Hughes focuses on raw physical sensations: the heat, the sweat, the weight of the rifle. The soldier is not heroic but clumsy and overwhelmed.

Stanza 2: The action slows as the soldier's thoughts take over. He questions why he is fighting and what patriotism really means when faced with the reality of death. He is caught between instinct and reason, nearly stopping as he searches for meaning. The stanza captures a frozen moment of existential crisis.

Stanza 3: A yellow hare, injured and writhing in the crossfire, jolts the soldier back to action. Confronted by this image of innocent suffering, he abandons all abstract ideals — "King, honour, human dignity, etcetera" — and charges forward driven purely by terror and the survival instinct to escape the "blue crackling air" of the battlefield.

The poem's arc moves from action to thought and back to action, but the final action is fundamentally different: it is no longer motivated by patriotism but by primal fear.`,

  /* ── Form & Structure ─────────────────────────────────────────── */

  formAndStructure: `Structure: Three stanzas of roughly equal length, following a clear arc:
• Stanza 1 (action) — the physical reality of the charge
• Stanza 2 (thought) — the soldier's internal questioning
• Stanza 3 (action) — return to action, but now driven by terror, not patriotism

Opening: The poem begins in medias res with "Suddenly he awoke and was running", throwing the reader straight into the chaos without introduction or context.

No regular rhyme scheme or metre: The lack of a fixed pattern reflects the chaos and disorder of battle. Lines vary in length, mirroring the soldier's erratic movements and thoughts.

Enjambment: Used extensively throughout (e.g. "raw / In raw-seamed hot khaki"), creating a breathless, urgent pace that mirrors the soldier running. The reader is pulled forward just as the soldier is.

Caesura: Dashes and mid-line pauses (e.g. "Almost stopped –", "In bewilderment then he almost stopped –") create moments of hesitation, reflecting the soldier's doubt and near-paralysis.

Dramatic monologue perspective: Written in third person but with intimate access to the soldier's thoughts. This creates both closeness and universality — we feel his terror but he could be any soldier.

Cyclical movement: The poem ends with the same desperate running it began with, but the motivation has shifted from patriotic duty to raw survival — showing war strips away idealism.`,

  /* ── Key Quotes ────────────────────────────────────────────────── */

  keyQuotes: [
    {
      quote: 'Suddenly he awoke and was running',
      analysis:
        'The in medias res opening plunges the reader into action. "Suddenly" creates shock and disorientation. "Awoke" suggests the soldier has been jolted from the dream of patriotic idealism into the nightmare of reality.',
      themes: ['Reality of conflict', 'Fear', 'Loss of innocence'],
    },
    {
      quote: 'raw-seamed hot khaki, his sweat heavy',
      analysis:
        'Visceral tactile imagery emphasises physical suffering. "Raw-seamed" suggests chafing and pain; the uniform that represents duty is literally hurting him. The accumulation of uncomfortable detail strips war of romance.',
      themes: ['Reality of conflict', 'Suffering', 'Power of nature'],
    },
    {
      quote: 'The patriotic tear that had brimmed in his eye',
      analysis:
        'Ironic reference to the emotional patriotism that once motivated enlistment. The past tense "had brimmed" shows this feeling is already gone — replaced by terror. Patriotism is presented as naive and manipulative.',
      themes: ['Patriotism vs reality', 'Loss of innocence', 'Power'],
    },
    {
      quote: 'In what cold clockwork of the stars and the nations',
      analysis:
        'A metaphor for the impersonal machinery of war and politics. "Cold clockwork" reduces human conflict to a mechanical, predetermined process. The soldier is merely a cog — his individual suffering is irrelevant to those in power.',
      themes: ['Power', 'Individual vs state', 'Helplessness'],
    },
    {
      quote: 'King, honour, human dignity, etcetera',
      analysis:
        'The dismissive listing of patriotic abstractions, punctuated by "etcetera", is Hughes\'s most devastating anti-war line. These grand ideals are reduced to a meaningless list — luxuries the soldier cannot afford in the face of death.',
      themes: ['Patriotism vs reality', 'Loss of innocence', 'Anti-war'],
    },
    {
      quote: 'a yellow hare that rolled like a flame',
      analysis:
        'The hare symbolises innocent nature destroyed by human conflict. "Rolled like a flame" creates a vivid, agonised image. The hare\'s pointless suffering mirrors the soldier\'s own — both are victims of forces beyond their control.',
      themes: ['Power of nature', 'Suffering', 'Innocence'],
    },
    {
      quote: 'blue crackling air',
      analysis:
        'Synaesthesia blending colour and sound creates a surreal, nightmarish battlefield atmosphere. "Crackling" is onomatopoeic, evoking gunfire. The sensory overload reflects the soldier\'s overwhelmed state.',
      themes: ['Reality of conflict', 'Fear', 'Sensory experience'],
    },
    {
      quote: 'Dropped like luxuries in a yelling alarm',
      analysis:
        'A simile comparing patriotic ideals to luxuries — nice to have in peacetime but instantly abandoned in crisis. "Yelling alarm" suggests panic and urgency. Ideals cannot survive the reality of combat.',
      themes: ['Patriotism vs reality', 'Fear', 'Anti-war'],
    },
  ],

  /* ── Language Devices ──────────────────────────────────────────── */

  languageDevices: [
    {
      device: 'In medias res',
      example: 'Suddenly he awoke and was running',
      effect:
        'The poem begins mid-action, immersing the reader in chaos without warning. This mirrors the soldier\'s own disorientation — there is no preparation, no context, just the raw terror of combat.',
      lineRef: 0,
    },
    {
      device: 'Simile',
      example: 'Sweating like molten iron from the centre of his chest',
      effect:
        'Compares patriotic feeling to molten iron — something once forged with purpose is now a burning, destructive weight. The industrial imagery dehumanises the soldier, making him part of the war machine.',
      lineRef: 8,
    },
    {
      device: 'Listing / Tricolon',
      example: 'King, honour, human dignity, etcetera',
      effect:
        'Three grand abstract nouns are listed then brutally dismissed with "etcetera". The listing initially builds gravitas, but "etcetera" collapses it — showing how meaningless these ideals are in combat.',
      lineRef: 22,
    },
    {
      device: 'Caesura',
      example: 'Almost stopped –',
      effect:
        'The abrupt dash and short line create a physical pause, mirroring the soldier\'s hesitation on the battlefield. It dramatises the tension between the instinct to flee and the impulse to stop and think.',
      lineRef: 5,
    },
    {
      device: 'Violent imagery',
      example: 'shot-slashed furrows',
      effect:
        'The compound adjective "shot-slashed" combines the violence of bullets with the agricultural image of ploughed furrows, showing how war destroys the natural landscape. The harsh consonants create an aggressive sonic quality.',
      lineRef: 17,
    },
    {
      device: 'Onomatopoeia / Synaesthesia',
      example: 'blue crackling air',
      effect:
        '"Crackling" mimics the sound of gunfire while "blue" adds a visual dimension, creating synaesthesia. This sensory overload conveys the overwhelming, nightmarish quality of the battlefield.',
      lineRef: 25,
    },
    {
      device: 'Symbolism',
      example: 'a yellow hare that rolled like a flame',
      effect:
        'The hare symbolises nature and innocence caught in human violence. Its suffering — silent, wide-eyed, purposeless — mirrors the soldier\'s own. It becomes the catalyst that strips away his last patriotic illusions.',
      lineRef: 19,
    },
    {
      device: 'Metaphor',
      example: 'cold clockwork of the stars and the nations',
      effect:
        'War is presented as a vast, impersonal mechanism. "Cold" removes any human warmth; "clockwork" implies predetermined, mechanical forces. The soldier is reduced to a component in a machine he cannot understand or control.',
      lineRef: 11,
    },
  ],
}

/* ── Comparisons ─────────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Exposure',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/power-and-conflict/exposure',
    points: [
      'Both present the brutal physical reality of war, stripping away romantic ideals.',
      'Owen focuses on the slow, grinding suffering of waiting; Hughes captures the explosive terror of a charge.',
      'Both use nature as a hostile force — Owen\'s freezing cold vs Hughes\'s "shot-slashed furrows".',
      'Both poems question why soldiers fight: Owen asks "What are we doing here?" while Hughes\'s soldier searches for "the reason".',
    ],
  },
  {
    poem: 'Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    href: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
    points: [
      'Both depict a military charge, but with completely opposing perspectives on war.',
      'Tennyson glorifies the soldiers\' obedience and sacrifice; Hughes shows a terrified individual driven by survival instinct.',
      'Tennyson uses a regular, galloping rhythm to celebrate the charge; Hughes uses irregular lines and enjambment to convey chaos.',
      'Tennyson\'s soldiers are noble ("Theirs not to reason why"); Hughes\'s soldier desperately searches for reason and finds none.',
    ],
  },
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    href: '/revision/poetry/power-and-conflict/remains',
    points: [
      'Both explore the psychological impact of combat on individual soldiers.',
      'Hughes captures terror in the moment of action; Armitage shows the lasting trauma afterwards (PTSD).',
      'Both use a single, unnamed/everyman soldier to universalise the experience of war.',
      'Both challenge the idea that soldiers are heroic — instead presenting them as vulnerable, frightened humans.',
    ],
  },
]

/* ── Theme tokens ────────────────────────────────────────────────── */

const THEMES = [
  'Power of nature',
  'Reality of conflict',
  'Loss of innocence',
  'Fear',
  'Individual vs state',
  'Anti-war',
  'Patriotism vs reality',
  'Suffering',
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function BayonetChargePage() {
  return (
    <div className="space-y-8">
      {/* ── Back nav ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power &amp; Conflict
        </Button>

        <h1 className="text-heading-lg font-heading text-foreground">
          Bayonet Charge
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Ted Hughes &middot; <em>The Hawk in the Rain</em> (1957)
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {theme}
          </span>
        ))}
      </div>

      {/* ── Interactive viewer ────────────────────────────────────── */}
      <InteractivePoemViewer poem={BAYONET_CHARGE} />

      {/* ── Comparisons ──────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Compare with other poems
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.poem}
              className="rounded-xl border border-border bg-card p-5 space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {c.poem}
                </h3>
                <p className="text-xs text-muted-foreground">{c.poet}</p>
              </div>

              <ul className="space-y-1.5">
                {c.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-xs leading-relaxed text-card-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                render={<Link href={c.href} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
