'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompareArrows, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'

/* ── Poem data ─────────────────────────────────────────────────── */

const kamikazeData: PoemData = {
  title: 'Kamikaze',
  poet: 'Beatrice Garland',
  lines: [
    // Stanza 1
    { text: 'Her father embarked at sunrise', annotations: [
      { type: 'Narrative voice', note: 'Third-person narration -- the daughter tells the story, distancing herself from the events.', color: '#60a5fa' },
      { type: 'Imagery', note: '"sunrise" suggests hope, a new beginning -- ironic given the mission is one of death.', color: '#f59e0b' },
    ]},
    { text: 'with a flask of water, a samurai sword' , annotations: [
      { type: 'Juxtaposition', note: 'The ordinary "flask of water" is placed alongside the ceremonial "samurai sword", blending the domestic with the militaristic.', color: '#a78bfa' },
    ]},
    { text: 'in the cockpit, a sheath of purpose,' , annotations: [
      { type: 'Metaphor', note: '"sheath of purpose" is ambiguous -- it could refer to the sword\'s sheath or a metaphorical wrapping of duty and determination.', color: '#34d399' },
    ]},
    { text: 'tilting into the sun' , annotations: [
      { type: 'Symbolism', note: 'The sun is a key symbol of Japan (the Rising Sun flag). "Tilting into" suggests both flight path and devotion to the nation.', color: '#f59e0b' },
    ]},
    { text: 'and he flew into the sun' },
    { text: 'and he flew into the sun.' },
    { text: '' },
    // Stanza 2
    { text: 'But half way there, the fish' },
    { text: 'swivelled their silver bodies' , annotations: [
      { type: 'Nature imagery', note: 'Sibilance in "swivelled" and "silver" creates a flowing, mesmerising sound that mirrors the beauty of the natural world.', color: '#34d399' },
    ]},
    { text: 'in the morning current and wood pigeons' },
    { text: 'were fanning out their tails' },
    { text: 'over the mountain passes.' , annotations: [
      { type: 'Turning point', note: 'The natural beauty of Japan -- fish, birds, mountains -- begins to pull the pilot away from his mission. Nature represents life over death.', color: '#60a5fa' },
    ]},
    { text: '' },
    // Stanza 3
    { text: 'And then, the boats came back' , annotations: [
      { type: 'Structure', note: '"And then" is conversational, reflecting oral storytelling. The daughter is recounting what she was told.', color: '#a78bfa' },
    ]},
    { text: 'trembling, silver in the morning light,' , annotations: [
      { type: 'Colour imagery', note: '"silver" recurs -- linking the fish and the boats, connecting the natural world with human industry.', color: '#f59e0b' },
    ]},
    { text: 'and the boats came back from the island' },
    { text: '' },
    // Stanza 4
    { text: 'And somehow, he must have looked far down' , annotations: [
      { type: 'Perspective', note: '"far down" -- the pilot gains literal and figurative perspective, seeing the world from above, reconsidering his mission.', color: '#60a5fa' },
    ]},
    { text: 'at the little fish' , annotations: [
      { type: 'Diminutive', note: '"little" makes the fish seem vulnerable and precious, contrasting with the enormity of the suicide mission.', color: '#34d399' },
    ]},
    { text: 'inking the sea between them' },
    { text: '' },
    // Stanza 5
    { text: 'like a shower of dark, metallic rain,' , annotations: [
      { type: 'Simile', note: 'The fish are compared to "dark, metallic rain" -- beautiful yet the adjectives "dark" and "metallic" foreshadow the military imagery and death.', color: '#34d399' },
    ]},
    { text: 'of black shoals' },
    { text: 'nudging towards the shore,' },
    { text: 'and remembered how' , annotations: [
      { type: 'Memory', note: 'The shift to memory -- the pilot recalls childhood experiences of fishing with his father, connecting past and present.', color: '#60a5fa' },
    ]},
    { text: 'his brothers too had fished from boats' },
    { text: 'rocking in the green-blue translucent sea.' , annotations: [
      { type: 'Colour imagery', note: '"green-blue translucent" is vivid and beautiful, evoking the sensory richness of life that the pilot would sacrifice.', color: '#f59e0b' },
    ]},
    { text: '' },
    // Stanza 6
    { text: 'And on this day, the weights and selvedges' },
    { text: 'of the ocean, wood pigeons' },
    { text: 'the cloud-marked mackerel, told him' },
    { text: 'the dark shoals' , annotations: [
      { type: 'Double meaning', note: '"shoals" means both groups of fish and shallow, dangerous waters -- reflecting the pilot\'s dangerous situation.', color: '#a78bfa' },
    ]},
    { text: 'of fishes flashing silver' , annotations: [
      { type: 'Colour imagery', note: '"silver" appears for the third time, creating a motif of natural beauty that opposes the darkness of war.', color: '#f59e0b' },
    ]},
    { text: 'as their bellies' },
    { text: 'swivelled towards the sun' , annotations: [
      { type: 'Contrast', note: 'The fish "swivelled towards the sun" echoes the pilot\'s earlier flight "into the sun" -- but the fish turn towards life and light, not death.', color: '#34d399' },
    ]},
    { text: 'and then he thought' },
    { text: '' },
    // Stanza 7 -- shift to first person / italicised in original
    { text: 'he must have wondered' , annotations: [
      { type: 'Shift', note: 'The speculative "must have" reminds us this is the daughter\'s reconstruction -- she can never truly know her father\'s thoughts.', color: '#a78bfa' },
    ]},
    { text: 'which had been the better way to die.' , annotations: [
      { type: 'Irony', note: 'The question is not whether to die, but how -- yet by turning back, the father chooses a kind of social death instead of a physical one.', color: '#60a5fa' },
    ]},
    { text: '' },
    // Final section -- daughter's direct speech / reflection
    { text: 'They treated him' , annotations: [
      { type: 'Perspective shift', note: 'The poem shifts from the father\'s experience to the family\'s response. "They" -- his own family -- becomes the agent of punishment.', color: '#a78bfa' },
    ]},
    { text: 'as though he no longer existed,' , annotations: [
      { type: 'Social death', note: 'The family enacts a living death -- he is physically present but socially erased, which may be worse than the kamikaze death.', color: '#60a5fa' },
    ]},
    { text: 'as though he had never returned,' },
    { text: 'so that his children and grandchildren' },
    { text: 'learned not to speak of him' },
    { text: 'treated him as though he had never existed.' },
    { text: '' },
    { text: 'And sometimes, she said, he must have wondered' },
    { text: 'which had been the better way to die.' , annotations: [
      { type: 'Cyclical ending', note: 'The final line repeats the earlier question, creating a cyclical structure. The poem offers no answer -- the ambiguity is the point.', color: '#a78bfa' },
      { type: 'Irony', note: 'By choosing life, the pilot condemned himself to a different kind of death: social erasure by his own family.', color: '#f59e0b' },
    ]},
  ],

  context: `<p><strong>Beatrice Garland</strong> is a contemporary British poet and NHS researcher. <em>Kamikaze</em> was published in her 2013 collection <em>The Inventory of Good News</em>.</p>
<p>The poem is inspired by the <strong>Japanese kamikaze pilots</strong> of World War II -- young men who flew suicide missions, deliberately crashing their planes into Allied warships. The word <em>kamikaze</em> translates as <strong>"divine wind"</strong>, referencing a typhoon that saved Japan from Mongol invasion in 1281.</p>
<p>In Japanese culture, the kamikaze missions were bound up with <strong>honour, duty, and sacrifice</strong>. Pilots were celebrated as heroes; their deaths were seen as the ultimate act of loyalty to the Emperor. To refuse or fail in a mission brought profound <strong>shame</strong> (<em>haji</em>) -- not just on the individual, but on the entire family.</p>
<p>Garland has said she was fascinated by accounts of the very few pilots who <strong>turned back</strong> from their missions. These men were shunned by their families and communities, treated as if they were already dead. The poem explores the impossible choice between <strong>duty to country</strong> and the <strong>instinct to live</strong>, and asks whether survival can be worse than death.</p>
<p>The poem connects to broader themes of <strong>conflict, identity, and the power of nature</strong> to remind us of what matters most.</p>`,

  summary: `The poem tells the story of a Japanese kamikaze pilot during World War II who sets out on his suicide mission at sunrise but turns back before reaching his target. The daughter narrates the story in third person, piecing together what she has been told.

As the pilot flies, he looks down and sees the natural beauty below -- fish gleaming silver in the sea, wood pigeons over mountain passes. These images trigger memories of his childhood: fishing with his brothers and father in the "green-blue translucent sea."

The beauty of the natural world and the pull of memory overwhelm his sense of military duty. He turns the plane around and returns home.

However, his survival brings no relief. His family, bound by the culture of honour and shame, treat him as if he no longer exists. His children and grandchildren learn never to speak of him. He becomes a ghost in his own home -- physically alive but socially dead.

The poem ends with a devastating, unanswered question: "which had been the better way to die" -- the quick death of the kamikaze mission, or the slow, living death of being erased by his own family?`,

  formAndStructure: `FORM:
- Free verse with no regular rhyme scheme, reflecting the fragmented, retold nature of the story
- The poem is a dramatic monologue delivered by the pilot's daughter, though it reads more like a narrative
- Enjambment is used extensively throughout, creating a flowing, continuous movement that mirrors the pilot's flight and the unstoppable pull of memory

STRUCTURE:
- 7 stanzas of varying length, moving from the mission to memories to consequences
- The poem begins in third person ("Her father") and shifts perspective throughout
- Stanzas 1-6 describe the pilot's journey and the natural imagery that changes his mind
- The final section shifts to the family's response and the consequences of his return
- The italicised section in the original text marks a shift to a more intimate, internal voice
- Cyclical structure: the poem ends where it begins emotionally, with the unanswered question about "the better way to die"

KEY STRUCTURAL FEATURES:
- Enjambment across stanza breaks (e.g. "the fish / swivelled") creates continuous motion and mirrors the pilot's unbroken thought process
- Caesura is used sparingly but effectively, e.g. "And sometimes, she said" -- the inserted "she said" reminds us this is a secondhand account
- The shift from narrative to direct reflection in the final lines creates emotional impact
- No speech marks are used, blurring the boundary between the daughter's voice and the father's experience`,

  keyQuotes: [
    {
      quote: 'a sheath of purpose',
      analysis: 'Metaphor combining the samurai sword imagery with a sense of determined intent. "Sheath" suggests the purpose is contained, wrapped tightly -- but also that it can be unsheathed or abandoned.',
      themes: ['Duty', 'Conflict', 'Identity'],
    },
    {
      quote: 'the fish swivelled their silver bodies',
      analysis: 'Nature imagery with sibilance creates a hypnotic, beautiful sound. The fish represent the vitality of the natural world -- their movement is free and instinctive, contrasting with the rigid, prescribed path of the kamikaze mission.',
      themes: ['Nature', 'Freedom', 'Beauty vs Death'],
    },
    {
      quote: 'dark, metallic rain',
      analysis: 'Simile comparing the fish to rain. "Dark" and "metallic" introduce sinister, military connotations into the natural imagery, blurring the line between beauty and destruction.',
      themes: ['Nature', 'Conflict', 'Ambiguity'],
    },
    {
      quote: 'green-blue translucent sea',
      analysis: 'Rich colour imagery evoking the vivid beauty of the Japanese coastline. "Translucent" suggests clarity and openness -- the opposite of the murky moral situation the pilot faces.',
      themes: ['Nature', 'Memory', 'Beauty vs Death'],
    },
    {
      quote: 'the cloud-marked mackerel',
      analysis: 'A precise, tender detail from the natural world. The specificity of "cloud-marked" shows the pilot truly seeing the world around him, reconnecting with life rather than death.',
      themes: ['Nature', 'Memory', 'Identity'],
    },
    {
      quote: 'as though he no longer existed',
      analysis: 'The family enacts a social death -- the pilot is physically present but treated as invisible. The simile "as though" emphasises that this is a deliberate, chosen act of erasure.',
      themes: ['Shame', 'Family', 'Identity'],
    },
    {
      quote: 'learned not to speak of him',
      analysis: 'The verb "learned" is devastating -- the silence is not natural but taught. Children are actively trained to erase their own father, showing how cultural expectations override family bonds.',
      themes: ['Shame', 'Family', 'Power'],
    },
    {
      quote: 'which had been the better way to die',
      analysis: 'The poem\'s final, unanswered question. The word "better" is bitterly ironic -- neither option offers a good outcome. The pilot must choose between physical death and social death.',
      themes: ['Conflict', 'Identity', 'Shame'],
    },
  ],

  languageDevices: [
    {
      device: 'Nature imagery',
      example: 'fish swivelled their silver bodies... wood pigeons were fanning out their tails',
      effect: 'The natural world is presented as beautiful, free, and alive -- a direct contrast to the death-mission. Nature becomes the force that pulls the pilot back to life, representing everything he would lose.',
      lineRef: 8,
    },
    {
      device: 'Colour imagery',
      example: 'silver... green-blue translucent... dark',
      effect: 'Garland uses a palette of colours to contrast life and death. "Silver" and "green-blue" evoke beauty and vitality, while "dark" introduces threat. The recurring "silver" creates a motif linking nature to hope.',
      lineRef: 14,
    },
    {
      device: 'Simile',
      example: 'like a shower of dark, metallic rain',
      effect: 'The fish are compared to rain, but the adjectives "dark" and "metallic" introduce military connotations. This simile sits at the boundary between beauty and violence, mirroring the poem\'s central tension.',
      lineRef: 22,
    },
    {
      device: 'Metaphor',
      example: 'a sheath of purpose',
      effect: 'The pilot\'s determination is compared to a sword sheath -- containing something dangerous, purposeful, and ready to be drawn. It also links to the samurai sword, connecting personal resolve to cultural tradition.',
      lineRef: 2,
    },
    {
      device: 'Shift in perspective',
      example: 'From "Her father embarked" to "she said" to "he must have wondered"',
      effect: 'The poem moves between the daughter\'s narration, reported speech, and speculative reconstruction of the father\'s thoughts. This layering of perspectives shows how the story has been passed down, fragmented and incomplete.',
      lineRef: 38,
    },
    {
      device: 'Contrast',
      example: 'Sunrise mission vs social death; beauty of nature vs duty to die',
      effect: 'The poem is structured around contrasts: life vs death, duty vs instinct, honour vs shame. These oppositions create the moral tension at the heart of the poem and resist simple resolution.',
      lineRef: 0,
    },
    {
      device: 'Repetition',
      example: 'and he flew into the sun / and he flew into the sun',
      effect: 'The repeated line creates a ritual, incantatory quality, echoing the repetitive propaganda that drove kamikaze pilots. The repetition also suggests the pilot trying to steel himself for the mission.',
      lineRef: 4,
    },
    {
      device: 'Enjambment',
      example: 'the fish / swivelled... the weights and selvedges / of the ocean',
      effect: 'Lines run into each other without pause, creating a flowing, continuous movement. This mirrors the pilot\'s unbroken train of thought and the relentless pull of memory and nature.',
      lineRef: 7,
    },
  ],
}

/* ── Comparison poems ──────────────────────────────────────────── */

const comparisons = [
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    link: '/revision/poetry/power-and-conflict/remains',
    points: [
      'Both explore the psychological aftermath of conflict and the lasting impact on individuals',
      'Both use a narrative, storytelling structure with a first/third-person speaker recounting events',
      'Remains shows a soldier haunted by killing; Kamikaze shows a pilot haunted by not dying',
      'Both poems question whether survival is truly better than death',
    ],
  },
  {
    poem: 'Poppies',
    poet: 'Jane Weir',
    link: '/revision/poetry/power-and-conflict/poppies',
    points: [
      'Both explore the impact of conflict on family relationships',
      'Both are told from a domestic, personal perspective rather than the battlefield',
      'Poppies focuses on a mother\'s grief; Kamikaze on a family\'s shame and rejection',
      'Both use sensory imagery to convey emotional pain',
    ],
  },
  {
    poem: 'The Emigree',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    points: [
      'Both explore the tension between personal identity and external pressures',
      'Both use light imagery ("sunlight" in The Emigree, "sun" in Kamikaze) as symbols of hope and belonging',
      'The Emigree\'s speaker clings to memory of a homeland; the kamikaze pilot\'s memories pull him away from duty',
      'Both poems show how individuals can be caught between two worlds with no easy resolution',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────── */

const themes = [
  { label: 'Conflict', color: 'bg-red-500/15 text-red-400 border-red-500/25' },
  { label: 'Power', color: 'bg-orange-500/15 text-orange-400 border-orange-500/25' },
  { label: 'Identity', color: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
  { label: 'Nature', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  { label: 'Family', color: 'bg-pink-500/15 text-pink-400 border-pink-500/25' },
  { label: 'Shame & Honour', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  { label: 'Memory', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
  { label: 'Death', color: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/25' },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function KamikazePage() {
  return (
    <div className="space-y-8">
      {/* Back nav */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power and Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Kamikaze</h1>
            <p className="text-body-sm text-muted-foreground">
              Beatrice Garland &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
          </div>
        </div>
      </div>

      {/* Theme tokens */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Tag className="size-3.5" />
          <span className="font-medium">Key Themes</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <span
              key={t.label}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive poem viewer */}
      <InteractivePoemViewer poem={kamikazeData} />

      {/* Comparisons */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <GitCompareArrows className="size-4 text-muted-foreground" />
          <h2 className="text-heading-md font-heading text-foreground">
            Compare with Other Poems
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div
              key={c.poem}
              className="rounded-xl border border-border bg-card p-5 space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <p className="text-xs text-muted-foreground">by {c.poet}</p>
              </div>
              <ul className="space-y-1.5">
                {c.points.map((p, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-snug flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
