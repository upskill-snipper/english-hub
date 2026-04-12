import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'

export const metadata = {
  title: 'The Emigree -- Carol Rumens -- The English Hub',
  description:
    'Interactive study guide for The Emigree by Carol Rumens. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
}

/* ── Poem data ─────────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'The Emigree',
  poet: 'Carol Rumens',
  lines: [
    // Stanza 1
    {
      text: 'There once was a country... I left it as a child',
      annotations: [
        { type: 'Opening', note: 'Fairy-tale opening ("There once was") immediately establishes a sense of nostalgia and a distant, romanticised past.', color: '#3b82f6' },
        { type: 'Ellipsis', note: 'The ellipsis creates a pause, suggesting the speaker is reaching back into fragmented memory.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'but my memory of it is sunlight-clear.',
      annotations: [
        { type: 'Light imagery', note: '"Sunlight-clear" introduces the central motif of light and sunlight. The memory is presented as vivid, pure, and untainted by time.', color: '#f59e0b' },
      ],
    },
    { text: 'It may be at war, it may be sick with tyrants,' },
    {
      text: 'but I am branded by an impression of sunlight.',
      annotations: [
        { type: 'Metaphor', note: '"Branded" suggests the memory is permanently marked onto her, like a scar or cattle brand -- painful yet indelible.', color: '#10b981' },
        { type: 'Refrain', note: 'First appearance of the "sunlight" refrain that closes every stanza, reinforcing the power of memory over reality.', color: '#f59e0b' },
      ],
    },
    { text: '' }, // stanza break

    // Stanza 2
    { text: 'The white streets of that city, the graceful slopes' },
    {
      text: 'I can\u2019t get to now. There may be a massacre',
      annotations: [
        { type: 'Contrast', note: 'The abrupt shift from beautiful imagery ("graceful slopes") to violent reality ("massacre") highlights the tension between memory and present truth.', color: '#ef4444' },
      ],
    },
    { text: 'taking place. The bulldozers go back and forth,' },
    {
      text: 'without regard. No flag is flying any more.',
      annotations: [
        { type: 'Political imagery', note: '"No flag" suggests the country has lost its identity or sovereignty. The bulldozers may represent the destruction of the old homeland.', color: '#3b82f6' },
      ],
    },
    {
      text: 'I am told I can\u2019t go back. Perhaps my city',
      annotations: [
        { type: 'Possessive language', note: '"My city" -- the speaker claims ownership of the place through memory, even though she is denied physical return.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'has been erased; frontiers rise between us.',
      annotations: [
        { type: 'Metaphor', note: '"Frontiers rise" personifies political borders as aggressive barriers. "Erased" suggests deliberate destruction of identity.', color: '#10b981' },
      ],
    },
    { text: 'But I am branded by an impression of sunlight.' },
    { text: '' }, // stanza break

    // Stanza 3
    {
      text: 'My memory is a passport. I can return',
      annotations: [
        { type: 'Metaphor', note: 'Memory as "passport" is powerful -- it grants access that politics denies. Memory becomes a document of identity and freedom.', color: '#10b981' },
      ],
    },
    { text: 'to every corner of it. I can\u2019t be stopped.' },
    {
      text: 'My city takes me dancing through the streets',
      annotations: [
        { type: 'Personification', note: 'The city is personified as a dance partner or lover, suggesting an intimate, joyful relationship between speaker and homeland.', color: '#10b981' },
      ],
    },
    { text: 'when I\u2019m asleep. In this city I have no passport,' },
    {
      text: 'no I.D. The authorities can\u2019t get past my eyes.',
      annotations: [
        { type: 'Defiance', note: 'The speaker is undocumented in the new country but defiant -- "can\'t get past my eyes" suggests her inner vision of home is impenetrable to outside control.', color: '#ef4444' },
      ],
    },
    {
      text: 'Every morning I am deporting myself to sunlight.',
      annotations: [
        { type: 'Refrain / Irony', note: '"Deporting myself" subverts the language of forced removal. The speaker chooses to return to her sunlit memory, reclaiming agency over the act of exile.', color: '#f59e0b' },
        { type: 'Final refrain', note: 'The closing "sunlight" completes the pattern across all three stanzas, but here it is active and defiant rather than passive.', color: '#f59e0b' },
      ],
    },
  ],

  context: `<p><strong>Carol Rumens</strong> (born 1944) is a British poet, novelist, and critic. Although not an emigree herself, Rumens has a deep interest in Eastern European politics and culture, particularly the experiences of those displaced by political conflict.</p>
<p><strong>Emigration and exile:</strong> The poem explores the experience of being forced to leave one's homeland -- a reality for millions displaced by war, political oppression, and regime change. The speaker's country is deliberately left unnamed, making the poem universal rather than tied to one specific conflict.</p>
<p><strong>Cold War context:</strong> Written in 1993, the poem resonates with Cold War-era displacement, the fall of the Berlin Wall (1989), and the breakup of the Soviet Union and Yugoslavia. Many people were separated from homelands that were physically transformed or politically erased.</p>
<p><strong>Nostalgia vs. reality:</strong> A central tension in the poem is between the speaker's idealised, sunlit memory of their homeland and the brutal present reality of war, tyranny, and destruction. Memory becomes a form of resistance against political erasure.</p>
<p><strong>Political oppression:</strong> References to tyrants, massacres, bulldozers, and rising frontiers evoke authoritarian regimes that destroy cities, erase cultures, and prevent citizens from returning. The poem suggests that while physical places can be destroyed, memories cannot be controlled by those in power.</p>
<p><strong>Identity and belonging:</strong> The speaker exists between two worlds -- exiled from a homeland they remember with love, and undocumented in a new country where they lack formal identity. Memory becomes the true "passport" and source of selfhood.</p>`,

  summary: `The speaker reflects on a country they left as a child, describing memories bathed in an unchanging sunlight that no amount of political violence or personal distance can extinguish.

In the first stanza, the speaker introduces their homeland through the lens of childhood memory. Despite acknowledging that the country may now be at war or under tyrannical rule, their memory remains "sunlight-clear" -- vivid, warm, and permanently imprinted.

The second stanza develops the contrast between the beautiful remembered city and its possible destruction. White streets and graceful slopes give way to massacres and bulldozers. The speaker is told they cannot return, and the city may have been erased, yet the refrain insists: the impression of sunlight endures.

The final stanza is the most defiant. Memory becomes a "passport" granting free access to every corner of the lost city. The city personified takes the speaker dancing. In the new country, the speaker has no official identity, but the authorities cannot penetrate their inner world. The poem closes with the speaker "deporting myself to sunlight" -- a powerful reclaiming of the language of exile, transforming forced removal into a daily, voluntary return to the light of memory.`,

  formAndStructure: `Form: Free verse with no regular rhyme scheme or metre, reflecting the fragmented, displaced nature of the emigree's experience.

Three stanzas: The poem is organised into three substantial stanzas of roughly equal length. Each stanza ends with a reference to "sunlight," creating a structural refrain that anchors the poem.

Refrain: The word "sunlight" closes every stanza, evolving from passive memory ("branded by an impression of sunlight") to active defiance ("deporting myself to sunlight"). This progression mirrors the speaker's growing assertion of identity.

Enjambment: Lines frequently run on without punctuation, creating a flowing, stream-of-consciousness effect that mirrors the way memory works -- unpredictable, associative, and difficult to contain.

Caesura: Mid-line pauses ("I can't get to now. There may be a massacre") create abrupt tonal shifts, jolting the reader between beauty and violence.

First person: The consistent use of "I" and "my" throughout creates an intimate, personal tone. The possessive language ("my memory," "my city") emphasises the speaker's claim over their homeland.

Contrast: The structure consistently juxtaposes the bright, idealised past against the dark, violent present, but always returns to light -- suggesting memory's triumph over political destruction.`,

  keyQuotes: [
    {
      quote: 'There once was a country... I left it as a child',
      analysis: 'The fairy-tale opening ("There once was") creates a sense of nostalgia and distance, as if the homeland exists only in story. The ellipsis represents a gap in memory or a reluctance to fully confront the past. Leaving "as a child" explains why the memory is so pure and uncomplicated.',
      themes: ['Memory', 'Loss', 'Identity'],
    },
    {
      quote: 'my memory of it is sunlight-clear',
      analysis: 'The compound adjective "sunlight-clear" fuses the poem\'s central motif of light with absolute clarity. The memory is presented as transparent and uncorrupted, contrasting with the murky political reality of the present.',
      themes: ['Memory', 'Light imagery', 'Nostalgia'],
    },
    {
      quote: 'I am branded by an impression of sunlight',
      analysis: '"Branded" carries connotations of both ownership (as in cattle branding) and permanent marking (as in a burn). The memory is not gentle -- it is seared into the speaker, suggesting both pain and permanence. This refrain anchors each stanza.',
      themes: ['Memory', 'Identity', 'Power of the past'],
    },
    {
      quote: 'it may be sick with tyrants',
      analysis: 'Personification of the country as "sick" suggests tyranny is a disease infecting the nation. The tentative "may be" shows the speaker is cut off from current information, relying on speculation rather than knowledge.',
      themes: ['Political oppression', 'Conflict', 'Displacement'],
    },
    {
      quote: 'frontiers rise between us',
      analysis: 'Personification of borders as actively "rising" presents political boundaries as aggressive, living barriers. "Between us" implies a personal, almost romantic separation between the speaker and their city.',
      themes: ['Conflict', 'Political oppression', 'Displacement'],
    },
    {
      quote: 'My memory is a passport',
      analysis: 'This metaphor is the poem\'s most powerful image. A passport is a document of identity and freedom of movement -- things the emigree has been denied. By making memory a passport, the speaker asserts that internal experience transcends political control.',
      themes: ['Memory', 'Identity', 'Power', 'Defiance'],
    },
    {
      quote: 'My city takes me dancing through the streets',
      analysis: 'Personification of the city as a dance partner creates an image of joyful intimacy. The city actively welcomes and embraces the speaker, suggesting a reciprocal relationship of love. This happens in dreams, where political restrictions have no power.',
      themes: ['Memory', 'Belonging', 'Joy', 'Personification'],
    },
    {
      quote: 'Every morning I am deporting myself to sunlight',
      analysis: 'The final line subverts the violent language of "deportation" -- normally something done to a person against their will -- into a voluntary, daily act of self-determination. The speaker chooses to return to the light of memory, transforming exile from punishment into liberation.',
      themes: ['Defiance', 'Memory', 'Identity', 'Power'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'My city takes me dancing through the streets',
      effect: 'The city is given human qualities, acting as a lover or companion who actively embraces the speaker. This creates a sense of mutual belonging and intimacy that transcends physical distance, suggesting the homeland is alive within the speaker\'s imagination.',
      lineRef: 16,
    },
    {
      device: 'Light / dark imagery',
      example: 'sunlight-clear... branded by an impression of sunlight',
      effect: 'Sunlight represents the warmth, clarity, and permanence of the speaker\'s childhood memories. It contrasts with the implied darkness of war, tyranny, and destruction in the present-day homeland. Light becomes a symbol of hope and resistance against political erasure.',
      lineRef: 1,
    },
    {
      device: 'Refrain',
      example: 'sunlight (closing each stanza)',
      effect: 'The repetition of "sunlight" at the end of every stanza creates a structural anchor and a sense of inevitability -- no matter what darkness is described, the poem always returns to light. The refrain also mirrors the cyclical nature of memory, which keeps returning to the same bright images.',
      lineRef: 3,
    },
    {
      device: 'Metaphor',
      example: 'I am branded by an impression of sunlight',
      effect: '"Branded" compares memory to a physical mark burned into the skin. This suggests the memory is both painful and permanent -- it cannot be removed or forgotten. The violence of the word "branded" contrasts with the gentle warmth of "sunlight," capturing the bittersweet nature of nostalgic exile.',
      lineRef: 3,
    },
    {
      device: 'Contrast',
      example: 'The white streets... graceful slopes / There may be a massacre',
      effect: 'The juxtaposition of beauty and violence is a key structural technique. The speaker\'s idealised memory is placed directly against the brutal present reality, highlighting the gulf between personal experience and political truth. This makes the reader feel the emotional whiplash of exile.',
      lineRef: 6,
    },
    {
      device: 'Possessive language',
      example: 'my memory... my city... my eyes',
      effect: 'The repeated possessive pronoun "my" asserts ownership and belonging. Despite being exiled and undocumented, the speaker claims the city as her own through memory. This language of possession is an act of defiance against the political forces that have separated her from her homeland.',
      lineRef: 9,
    },
    {
      device: 'Semantic field of politics / conflict',
      example: 'tyrants, massacre, bulldozers, frontiers, passport, deporting',
      effect: 'The vocabulary of political oppression runs throughout the poem, grounding the personal experience of memory in a wider context of conflict and displacement. These words remind the reader that the speaker\'s nostalgia is not mere sentimentality but a response to genuine political violence.',
      lineRef: 2,
    },
    {
      device: 'Subverted language',
      example: 'I am deporting myself to sunlight',
      effect: '"Deporting" is typically an act of state violence -- forced removal. By making it reflexive ("deporting myself"), the speaker reclaims agency over her displacement. The act of exile becomes voluntary and positive, a daily choice to return to the light of memory rather than submit to the darkness of her present situation.',
      lineRef: 19,
    },
  ],
}

/* ── Comparison poems ──────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'London',
    poet: 'William Blake',
    link: '/revision/poetry/power-and-conflict/london',
    points: [
      'Both poems present cities shaped by political power -- Blake\'s London is oppressed from within; the emigree\'s city is destroyed from without.',
      'Blake\'s speaker walks through a present-day city witnessing suffering; the emigree\'s speaker can only access her city through memory.',
      'Both use imagery of confinement -- Blake\'s "mind-forg\'d manacles" vs. the emigree\'s "frontiers rise between us."',
      'Tone differs significantly: Blake is angry and despairing, while the emigree is defiant and nostalgic.',
    ],
  },
  {
    poem: 'Checking Out Me History',
    poet: 'John Agard',
    link: '/revision/poetry/power-and-conflict/checking-out-me-history',
    points: [
      'Both poems explore identity shaped by forces beyond the speaker\'s control -- political exile vs. colonial education.',
      'Both speakers assert their identity against an oppressive system: the emigree through memory, Agard through reclaiming suppressed history.',
      'Both use language as a tool of resistance -- the emigree subverts "deporting"; Agard subverts Standard English with Caribbean dialect.',
      'Both poems end on a note of defiance and self-determination.',
    ],
  },
  {
    poem: 'Kamikaze',
    poet: 'Beatrice Garland',
    link: '/revision/poetry/power-and-conflict/kamikaze',
    points: [
      'Both poems explore the tension between personal memory and political/social pressure.',
      'In both, memory of a beautiful past (the emigree\'s sunlit city; the pilot\'s childhood fishing trips) conflicts with a harsh present reality.',
      'Both speakers are caught between two worlds -- the emigree between homeland and exile; the pilot between duty and family.',
      'Both suggest that the most powerful memories are rooted in childhood and sensory experience.',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────────── */

const THEMES = [
  'Memory',
  'Identity',
  'Political oppression',
  'Displacement & exile',
  'Nostalgia',
  'Power of the individual',
  'Defiance',
  'Belonging',
  'Loss',
  'Light vs. darkness',
]

/* ── Page component ────────────────────────────────────────────────── */

export default function TheEmigreePage() {
  return (
    <div className="space-y-8">
      {/* ── Back nav ───────────────────────────────────────────── */}
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
        <div>
          <h1 className="text-heading-lg font-heading text-foreground">
            The Emigr&eacute;e
          </h1>
          <p className="text-body-sm text-muted-foreground mt-0.5">
            Carol Rumens &middot; Power and Conflict Anthology
          </p>
          <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
        </div>
      </div>

      {/* ── Theme badges ───────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ────────────────────────────── */}
      <InteractivePoemViewer poem={POEM} />

      {/* ── Comparison poems ───────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Compare with&hellip;
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.poem}
              className="rounded-xl border border-border bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground mb-0.5">
                {c.poem}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{c.poet}</p>

              <ul className="space-y-2 flex-1">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm text-card-foreground leading-relaxed pl-3 border-l-2 border-border"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations from The Emigree by Carol Rumens reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available in your AQA anthology.
      </p>
    </div>
  )
}
