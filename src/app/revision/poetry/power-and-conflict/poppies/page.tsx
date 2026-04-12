'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  InteractivePoemViewer,
  type PoemData,
} from '@/components/study'

/* ── Poem data ─────────────────────────────────────────────────── */

const poppiesData: PoemData = {
  title: 'Poppies',
  poet: 'Jane Weir',
  lines: [
    // Stanza 1
    { text: 'Three days before Armistice Sunday', annotations: [
      { type: 'Context', note: 'Armistice Sunday commemorates the end of World War I on 11 November. Setting the poem three days before places us in the anticipatory grief of Remembrance.', color: '#60a5fa' },
    ] },
    { text: 'and poppies had already been placed', annotations: [
      { type: 'Symbolism', note: 'Poppies are the universal symbol of remembrance for fallen soldiers, originating from the fields of Flanders in WWI.', color: '#f59e0b' },
    ] },
    { text: 'on individual white crosses in the graveyard.' },
    { text: 'Before you left, I pinned one', annotations: [
      { type: 'Domestic imagery', note: 'The intimate, maternal act of pinning — typically associated with school uniforms — blurs the boundary between sending a child to school and sending a soldier to war.', color: '#a78bfa' },
    ] },
    { text: 'onto your lapel, crimped petals,' },
    { text: 'trembling, slowly melting' },
    { text: '' },
    // Stanza 2
    { text: 'on my tongue. All my words', annotations: [
      { type: 'Enjambment', note: 'The enjambment across the stanza break enacts the mother\'s loss of control — her words literally spill over the boundary.', color: '#34d399' },
    ] },
    { text: 'flattened, rolled, turned into felt,' },
    { text: '' },
    { text: 'slowly melting. I pinned one', annotations: [
      { type: 'Repetition', note: 'The repeated phrase "I pinned one" and "slowly melting" create a cyclical, obsessive quality — the mother replays the memory.', color: '#f472b6' },
    ] },
    { text: 'onto your lapel, crimped petals,' },
    { text: 'spasms of paper red, paper red', annotations: [
      { type: 'Tactile imagery', note: '"Spasms" suggests involuntary, painful movement — the artificial poppy\'s crepe paper becomes a metaphor for the mother\'s convulsive grief. The repetition of "paper red" mimics the stuttering of someone in distress.', color: '#f59e0b' },
    ] },
    { text: '' },
    // Stanza 3
    { text: 'blockade of yellow bias binding around your blazer.' },
    { text: '' },
    { text: 'I made you play at being Eskimos', annotations: [
      { type: 'Domestic language', note: 'The childhood game reinforces the mother\'s perspective — she still sees her child through memories of innocence and play.', color: '#a78bfa' },
    ] },
    { text: 'like a treasure chest to me,' },
    { text: 'its blown, exhausted, yawning mouth.' },
    { text: '' },
    { text: 'After you\'d gone I went outside,' },
    { text: 'paused, then released a song bird from its cage.', annotations: [
      { type: 'Metaphor', note: 'The songbird released from its cage symbolises the mother letting her child go — an act that is both liberating and painful. It may also represent the child\'s spirit or the mother\'s suppressed emotions finally finding release.', color: '#60a5fa' },
    ] },
    { text: '' },
    // Stanza 4
    { text: 'Later a single dove flew out from the pear tree,' },
    { text: 'and this dove threw me for a second — in my chest' },
    { text: 'as it were,' },
    { text: 'as if pulling at the wishbone' },
    { text: 'of my war-Loss nerves, my stomach busy' },
    { text: 'making tucks, darts, pleats, hat-Loss, heart-Loss,' },
    { text: 'and the world overflowing', annotations: [
      { type: 'Sensory detail', note: '"The world overflowing" conveys the overwhelming nature of grief — emotions flood beyond containment, mirroring the enjambment that runs throughout the poem.', color: '#34d399' },
    ] },
    { text: 'like a treasure chest to me,' },
    { text: 'your, its, our fire, ball of hair, its only treasure' },
    { text: '' },
    { text: 'I traced the diary dates with my finger, longing' },
    { text: 'to graze my nose across the top of your head,' },
    { text: 'to breathe you in, to taste' },
    { text: '' },
    { text: 'the graze of your skin, playground voice.' },
    { text: 'my hair\u2014Loss nerves. All you\u2014' },
    { text: '' },
    { text: 'I think I\u2014' },
    { text: '' },
    { text: 'And now it rains.' },
    { text: 'And the dove flew' },
    { text: 'And I leaned against it like a bird.', annotations: [
      { type: 'Simile', note: 'The mother leans against the war memorial "like a bird" — fragile, small, seeking shelter. The bird imagery connects back to the released songbird and the dove, creating a network of avian symbolism representing freedom, peace, and vulnerability.', color: '#60a5fa' },
    ] },
    { text: 'I listened, hoping to hear' },
    { text: 'your playground voice catching on the wind.' },
  ],

  context: `<p><strong>Jane Weir</strong> is a British poet born in 1963 who grew up in Manchester and has also lived in Italy. She works as a textile designer, and the influence of textiles — stitching, weaving, fabric — runs throughout her poetry.</p>
<p><strong>"Poppies"</strong> was published in 2009 as part of a collection commissioned by Carol Ann Duffy (then Poet Laureate) to mark modern conflict. The poem is written from the perspective of a <strong>mother</strong> whose son has gone to war, though Weir has said it could apply to any mother sending a child away.</p>
<p>The poem is set around <strong>Remembrance Day</strong> (Armistice Sunday, 11 November) and draws on the symbolism of <strong>poppies</strong> — the flowers that grew on the battlefields of Flanders in World War I and have since become the universal emblem of remembrance.</p>
<p>Unlike many war poems written from a soldier's perspective, "Poppies" focuses on the <strong>domestic, emotional cost</strong> of conflict — the grief, anxiety, and loss experienced by those left behind. The poem deliberately blurs time periods: it could be set during WWI, WWII, or any modern conflict, making the mother's experience timeless and universal.</p>
<p>Key contextual threads include the tension between the <strong>domestic world</strong> (pinning lapels, school blazers, playground voices) and the <strong>military world</strong> (Armistice Sunday, war graves, poppies), and the way <strong>textile imagery</strong> — felt, bias binding, tucks, darts, pleats — weaves throughout as a metaphor for the mother stitching together fragments of memory and grief.</p>`,

  summary: `"Poppies" traces a mother's experience of letting her son go to war, structured around the rituals of Remembrance Day. The poem opens three days before Armistice Sunday, with the mother pinning a poppy to her son's lapel — an act that merges the domestic ritual of preparing a child for school with the formal act of military remembrance.

As the son departs, the mother is left with fragments of memory: childhood games, the texture of his hair, his playground voice. The poem moves between past and present, blurring the timeline so that the child leaving for school and the soldier leaving for war become indistinguishable.

After her son has gone, the mother releases a songbird from its cage — a symbolic act of letting go. She visits the war memorial, where she leans against it "like a bird," listening for her son's voice on the wind. The poem ends with this image of desperate, fragile hope — the mother still searching for connection to her absent child.

Throughout, Weir uses textile imagery (felt, bias binding, tucks, darts, pleats) to convey the mother's attempt to hold things together, and sensory, tactile language to express grief that is physical and overwhelming rather than abstract.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme or metre. The lack of formal structure mirrors the mother's emotional state — uncontained, unpredictable, and resistant to neat resolution. The poem is written in the first person, giving us direct access to the mother's interior world.

STRUCTURE: The poem moves associatively rather than chronologically, drifting between past memories and present grief. Long, flowing sentences run across line and stanza breaks through extensive enjambment, enacting the way memories and emotions spill uncontrollably from one moment to the next.

ENJAMBMENT: This is the poem's most important structural feature. Lines break mid-phrase ("I pinned one / onto your lapel"), mid-clause, and even mid-word-group, creating a sense of breathlessness and emotional overflow. The enjambment across stanza breaks is particularly powerful — thoughts refuse to be contained within neat boundaries.

SENTENCE LENGTH: Weir uses long, complex sentences that mirror the mother's stream of consciousness. Lists ("tucks, darts, pleats") accumulate details obsessively. The contrast between these flowing sentences and the short, broken fragments near the end ("I think I—") conveys the mother's increasing emotional fragmentation.

STANZAS: The poem's four uneven stanzas (of varying length) reject regularity. There is no neat pattern — the poem's shape on the page is itself disrupted and asymmetric, reflecting the disruption of loss.

TENSE SHIFTS: The poem shifts between past and present tense, blurring the boundary between memory and the present moment. This temporal instability suggests the mother is trapped between past happiness and present grief.`,

  keyQuotes: [
    {
      quote: 'three days before Armistice Sunday',
      analysis: 'The specific temporal marker grounds the poem in the rituals of remembrance. "Three days before" creates anticipation and dread — the mother is already preparing for the formal acknowledgment of loss. The reference to Armistice Sunday connects individual grief to collective, national mourning.',
      themes: ['Loss and absence', 'Memory', 'War and conflict'],
    },
    {
      quote: 'spasms of paper red',
      analysis: 'The word "spasms" transforms the artificial poppy into something visceral and bodily — it suggests involuntary pain, convulsions, even death throes. "Paper red" is a transferred epithet: the redness belongs to blood and poppies, but is applied to paper, collapsing the boundary between the symbolic poppy and real bloodshed.',
      themes: ['War and conflict', 'Grief', 'Symbolism'],
    },
    {
      quote: 'I pinned one onto your lapel',
      analysis: 'The tender, domestic act of pinning a poppy carries enormous weight. It evokes a mother pinning a name badge on a school blazer, but also the formal ritual of wearing a poppy for Remembrance. The verb "pinned" suggests both attachment and the sharp pain of a pin — love and hurt are inseparable.',
      themes: ['Loss and absence', 'Family', 'Domestic vs military'],
    },
    {
      quote: 'released a song bird from its cage',
      analysis: 'A central metaphor for letting go. The caged bird represents the child held safe at home; releasing it symbolises the mother allowing her son to leave for war. The "song bird" implies beauty and fragility, while the cage suggests both protection and confinement. The act is both generous and devastating.',
      themes: ['Loss and absence', 'Freedom', 'Family'],
    },
    {
      quote: 'the world overflowing',
      analysis: 'This phrase captures the mother\'s sense of being overwhelmed — her grief is so vast that it cannot be contained. "Overflowing" connects to the enjambment throughout the poem: emotions, like the verse itself, refuse to stay within boundaries. It also suggests abundance — the world is full of things that remind her of her son.',
      themes: ['Grief', 'Memory', 'Nature'],
    },
    {
      quote: 'leaned against it like a bird',
      analysis: 'The simile compares the mother to a bird — small, fragile, vulnerable. She leans against the war memorial seeking support, just as a bird might press against a branch for shelter. The bird imagery connects to the earlier songbird and dove, creating a symbolic thread: the mother, like the birds, is caught between freedom and loss.',
      themes: ['Loss and absence', 'Vulnerability', 'Nature'],
    },
    {
      quote: 'to graze my nose across the top of your head',
      analysis: 'Intensely physical and intimate. The verb "graze" is tactile — it suggests the lightest possible touch, a gesture of tenderness. This sensory memory (smell, touch) conveys a mother\'s love more powerfully than any abstract statement could. The specificity of "the top of your head" makes the absence achingly concrete.',
      themes: ['Family', 'Memory', 'Grief'],
    },
    {
      quote: 'your playground voice catching on the wind',
      analysis: 'The final image of the poem. "Playground voice" collapses the son back into childhood — he is not a soldier but a playing child. "Catching on the wind" suggests something barely audible, fleeting, almost lost. The mother strains to hear a voice that may no longer exist, an image of hope and despair in equal measure.',
      themes: ['Loss and absence', 'Memory', 'Childhood vs adulthood'],
    },
  ],

  languageDevices: [
    {
      device: 'Tactile / sensory imagery',
      example: 'crimped petals, trembling, slowly melting on my tongue',
      effect: 'Weir saturates the poem with physical sensation — touch, taste, texture. Grief in this poem is not abstract but felt in the body. The "crimped petals" are both the poppy and the mother\'s crumpled emotions; "melting on my tongue" suggests words dissolving before they can be spoken.',
      lineRef: 4,
    },
    {
      device: 'Metaphor — textile imagery',
      example: 'tucks, darts, pleats',
      effect: 'The sewing terminology reflects Weir\'s background as a textile designer and becomes a metaphor for the mother\'s attempt to hold herself together. "Tucks, darts, pleats" are techniques for shaping fabric — the mother is trying to shape and contain her unravelling grief, but the list\'s accumulation suggests the effort is overwhelming.',
      lineRef: 26,
    },
    {
      device: 'Symbolism — poppies',
      example: 'poppies had already been placed on individual white crosses',
      effect: 'The poppy operates on multiple symbolic levels: it represents remembrance of the war dead, the blood of sacrifice, the fragility of life (petals fall easily), and the mother\'s own bleeding grief. The "white crosses" reinforce the association with death and graves.',
      lineRef: 1,
    },
    {
      device: 'Domestic language',
      example: 'blockade of yellow bias binding around your blazer',
      effect: '"Bias binding" is a sewing term, and "blazer" belongs to school uniform. This domestic vocabulary pulls the poem away from the battlefield and into the home, reinforcing that this is a mother\'s perspective. The word "blockade" — a military term — intrudes into the domestic scene, showing how war infiltrates everyday life.',
      lineRef: 14,
    },
    {
      device: 'Enjambment',
      example: 'I pinned one / onto your lapel',
      effect: 'The line break between "one" and "onto" forces the reader to pause, then continue — mimicking the mother\'s hesitation and emotional catch. Enjambment throughout the poem creates a breathless, flowing quality that mirrors the uncontrollable stream of memory and grief.',
      lineRef: 3,
    },
    {
      device: 'Sensory detail — smell and taste',
      example: 'to breathe you in, to taste the graze of your skin',
      effect: 'The mother\'s longing is expressed through the most intimate senses — smell and taste. "Breathe you in" and "taste" suggest she wants to absorb her son completely, to possess him again through the body. These are primal, almost animal instincts of maternal connection.',
      lineRef: 33,
    },
    {
      device: 'Transferred epithet',
      example: 'war-Loss nerves',
      effect: 'The compound "war-Loss" transfers the concept of military loss directly into the mother\'s body. Her nerves are not just anxious — they are specifically damaged by war and loss. The hyphenated compound fuses the public (war) and the private (nerves) into a single term.',
      lineRef: 25,
    },
    {
      device: 'Fragmentation',
      example: 'I think I—',
      effect: 'The dash and incomplete sentence near the poem\'s end enact the mother\'s emotional breakdown. She literally cannot finish her thought. This fragmentation contrasts with the poem\'s earlier long, flowing sentences, showing how grief eventually overwhelms even the attempt to articulate it.',
      lineRef: 37,
    },
  ],
}

/* ── Comparison poems ──────────────────────────────────────────── */

interface ComparisonPoem {
  title: string
  poet: string
  href: string
  similarities: string[]
  differences: string[]
}

const comparisons: ComparisonPoem[] = [
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/revision/poetry/power-and-conflict/war-photographer',
    similarities: [
      'Both explore the emotional aftermath of war on those who are not soldiers',
      'Both use domestic settings (the darkroom, the home) as spaces where the impact of conflict is processed',
      'Both poems feature a central figure who is isolated in their grief or trauma',
    ],
    differences: [
      'War Photographer uses a detached, controlled form (regular stanzas, near-rhyme) whereas Poppies uses free verse that mirrors emotional overflow',
      'Duffy focuses on a professional observer; Weir focuses on a mother — the relationship to the conflict is fundamentally different',
      'War Photographer critiques public indifference; Poppies is entirely personal and private in its grief',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    href: '/revision/poetry/power-and-conflict/kamikaze',
    similarities: [
      'Both poems explore the impact of war on family relationships',
      'Both are told from the perspective of someone left behind — a mother in Poppies, a daughter in Kamikaze',
      'Both use nature imagery (birds, the sea) as a counterpoint to military violence',
    ],
    differences: [
      'Kamikaze explores shame and social rejection; Poppies explores grief and longing',
      'Kamikaze uses a third-person narrative frame; Poppies is entirely first-person, giving more direct emotional access',
      'In Kamikaze, the soldier returns and is punished; in Poppies, the son leaves and may not return at all',
    ],
  },
  {
    title: 'The Emigree',
    poet: 'Carol Rumens',
    href: '/revision/poetry/power-and-conflict/the-emigree',
    similarities: [
      'Both poems are dominated by memory and longing for someone or something lost',
      'Both use sensory, tactile imagery to make the absent feel present',
      'Both feature a female speaker processing loss through personal, emotional language',
    ],
    differences: [
      'The Emigree focuses on loss of a homeland; Poppies focuses on loss of a child to war',
      'The Emigree maintains an idealised, sunlit memory; Poppies allows memory to fragment and collapse',
      'The Emigree is more defiant and resistant; Poppies is more vulnerable and grief-stricken',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────── */

const themes = [
  { label: 'Loss and absence', color: 'bg-red-500/15 text-red-400 border-red-500/30' },
  { label: 'Memory', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { label: 'Family and motherhood', color: 'bg-pink-500/15 text-pink-400 border-pink-500/30' },
  { label: 'War and conflict', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  { label: 'Grief', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { label: 'Domestic vs military', color: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  { label: 'Nature and freedom', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  { label: 'Identity and childhood', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
]

/* ── Page component ────────────────────────────────────────────── */

export default function PoppiesStudyPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Back link ──────────────────────────────────────────── */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/revision/poetry/power-and-conflict" />}>
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Power &amp; Conflict Anthology
        </Button>
      </div>

      {/* ── Page header ───────────────────────────────────────── */}
      <header className="space-y-3">
        <h1 className="text-heading-lg text-foreground">Poppies</h1>
        <p className="text-lg text-muted-foreground">
          Jane Weir (2009) &mdash; AQA Power &amp; Conflict Anthology
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
      </header>

      {/* ── Theme tokens ──────────────────────────────────────── */}
      <section aria-labelledby="themes-heading">
        <h2 id="themes-heading" className="text-heading-sm text-foreground mb-3">
          Key Themes
        </h2>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Interactive poem viewer ───────────────────────────── */}
      <InteractivePoemViewer poem={poppiesData} />

      {/* ── Comparison poems ──────────────────────────────────── */}
      <section aria-labelledby="comparisons-heading" className="space-y-5">
        <h2 id="comparisons-heading" className="text-heading-sm text-foreground">
          Compare With
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-5 space-y-4"
            >
              <div>
                <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.poet}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                  Similarities
                </h4>
                <ul className="space-y-1">
                  {c.similarities.map((s, i) => (
                    <li key={i} className="text-sm text-card-foreground flex gap-2">
                      <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                  Differences
                </h4>
                <ul className="space-y-1">
                  {c.differences.map((d, i) => (
                    <li key={i} className="text-sm text-card-foreground flex gap-2">
                      <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/60" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" size="sm" render={<Link href={c.href} />}>
                Study {c.title}
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Back to anthology ─────────────────────────────────── */}
      <div className="border-t border-border pt-8">
        <Button variant="outline" render={<Link href="/revision/poetry/power-and-conflict" />}>
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Power &amp; Conflict Anthology
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations from Poppies by Jane Weir reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available in your AQA anthology.
      </p>
    </div>
  )
}
