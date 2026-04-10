'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ────────────────────────────────────────────────────── */

const ozymandias: PoemData = {
  title: 'Ozymandias',
  poet: 'Percy Bysshe Shelley',
  lines: [
    {
      text: 'I met a traveller from an antique land,',
      annotations: [
        {
          type: 'Frame narrative',
          note: 'Shelley distances himself from the story by using a second-hand account. The speaker never saw Ozymandias directly — the tale passes through multiple voices (traveller, sculptor, Ozymandias himself), undermining the permanence of the king\'s legacy.',
          color: '#3b82f6',
        },
        {
          type: 'Context',
          note: '"Antique land" refers to Egypt, evoking the ancient civilisations whose ruins fascinated Romantic-era Europeans. The word "antique" immediately signals age and decay.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Who said — "Two vast and trunkless legs of stone',
      annotations: [
        {
          type: 'Imagery',
          note: '"Vast and trunkless legs" — the statue is broken, only the legs remain standing. The body (trunk) is gone, symbolising how Ozymandias\'s power has been stripped away by time. "Vast" emphasises the original scale of his ambition.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The fragmented statue becomes a symbol of the futility of human power. Even the largest monuments cannot resist decay.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Stand in the desert. . . . Near them, on the sand,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The desert is a powerful symbol of emptiness and the erasure of civilisation. The ellipsis ("....") creates a visual pause, mirroring the vast empty space around the ruins.',
          color: '#10b981',
        },
        {
          type: 'Caesura',
          note: 'The full stops mid-line create a caesura, forcing the reader to pause — echoing the desolation and stillness of the scene.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Half sunk a shattered visage lies, whose frown,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Half sunk" and "shattered" — the face is broken and partially buried. This physical destruction mirrors the collapse of the ruler\'s reputation and authority.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The "shattered visage" lying in the sand is a potent image of fallen pride. The face that once commanded fear is now broken rubble.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And wrinkled lip, and sneer of cold command,',
      annotations: [
        {
          type: 'Characterisation',
          note: '"Sneer of cold command" reveals Ozymandias\'s cruel, authoritarian nature. Even in stone, his contempt for his subjects is visible. The sculptor captured the tyrant\'s true character.',
          color: '#ef4444',
        },
        {
          type: 'Alliteration',
          note: 'The hard "c" sounds in "cold command" create a harsh, forceful tone that mirrors the king\'s ruthless exercise of power.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Tell that its sculptor well those passions read',
      annotations: [
        {
          type: 'Irony',
          note: 'The sculptor — an artist, not a ruler — is the one whose work survives. Art outlasts political power. The sculptor "read" the king\'s passions and preserved them honestly, including his cruelty.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Which yet survive, stamped on these lifeless things,',
      annotations: [
        {
          type: 'Juxtaposition',
          note: '"Survive" vs "lifeless" — the passions (emotions) outlive the man, but only on dead stone. There is a paradox: life (emotion) is preserved in death (stone). The king is gone but his cruelty remains readable.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The hand that mocked them, and the heart that fed;',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"The hand that mocked" could refer to the sculptor\'s hand (which imitated/mocked the king\'s expressions) or the king\'s own hand (which mocked his people through tyranny). "The heart that fed" could mean the king\'s heart that nourished his cruel passions, or the heart of the people that sustained his rule.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'This densely ambiguous line connects artist and tyrant. Both "hands" shaped the statue — one through craft, one through cruelty.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And on the pedestal, these words appear:',
      annotations: [
        {
          type: 'Structure',
          note: 'The poem shifts from description to direct speech. The pedestal inscription is the only part of the monument still fully legible — ironically, it is the boastful words that survive while the works they reference have vanished.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '"My name is Ozymandias, King of Kings;',
      annotations: [
        {
          type: 'Hubris',
          note: '"King of Kings" is a superlative title claiming absolute supremacy over all other rulers. This grandiose self-declaration is made absurd by the surrounding destruction. The biblical echo (Revelation 19:16 uses the same phrase for God) suggests blasphemous arrogance.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Ozymandias\'s own words become the most powerful evidence against him. His claim to eternal greatness is permanently undercut by the ruin around the inscription.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Look on my Works, ye Mighty, and despair!"',
      annotations: [
        {
          type: 'Dramatic irony',
          note: 'Ozymandias intended "despair" to mean: despair because you can never match my achievements. But the reader now understands it differently: despair because even the mightiest achievements are destroyed by time. The imperative "Look" commands an audience that no longer exists.',
          color: '#f59e0b',
        },
        {
          type: 'Volta',
          note: 'This line marks the poem\'s turning point. After the grand declaration, the next line ("Nothing beside remains") delivers the devastating contrast.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Nothing beside remains. Round the decay',
      annotations: [
        {
          type: 'Contrast',
          note: '"Nothing beside remains" is the poem\'s most powerful moment. The short, blunt sentence directly contradicts the king\'s boastful inscription. All his "Works" are gone. The sentence is deliberately plain after the grandiosity of the previous lines.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Three words that demolish the entire premise of Ozymandias\'s power. The starkness of the statement makes it devastating.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Of that colossal Wreck, boundless and bare',
      annotations: [
        {
          type: 'Alliteration',
          note: '"Boundless and bare" — the "b" alliteration emphasises the vast emptiness. "Colossal Wreck" juxtaposes size with destruction: once enormous, now ruined.',
          color: '#10b981',
        },
        {
          type: 'Oxymoron',
          note: '"Colossal Wreck" pairs grandeur with ruin. The statue was once imposing; now its very size emphasises the completeness of its fall.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The lone and level sands stretch far away.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The final image is of endless, flat desert — nature has completely reclaimed the land. The sibilant "s" sounds ("sands stretch") create a whispering, wind-like effect, as if the desert itself is erasing the king\'s memory.',
          color: '#10b981',
        },
        {
          type: 'Alliteration',
          note: '"Lone and level" and "sands stretch" — the repeated "l" and "s" sounds create a soft, expansive quality that evokes the endless desert stretching to the horizon.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The poem ends not with Ozymandias, but with nature. The desert has the final word, reinforcing that nature and time triumph over all human power.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Percy Bysshe Shelley (1792--1822)</h3>
    <p>Shelley was one of the major English Romantic poets, alongside Keats and Byron. He was a radical political thinker who opposed tyranny, monarchy, and institutional religion. He was expelled from Oxford for publishing a pamphlet on atheism and spent much of his adult life in exile in Italy, where he drowned at the age of 29.</p>

    <h3>The Romantic Movement</h3>
    <p>The Romantics valued <strong>nature, emotion, and individual freedom</strong> over the rationalism of the Enlightenment. They were deeply suspicious of unchecked power and often wrote about the relationship between humanity and the natural world. Shelley, in particular, believed poetry could be a force for political change.</p>

    <h3>Publication and Competition (1818)</h3>
    <p>"Ozymandias" was published on 11 January 1818 in <em>The Examiner</em>, a politically liberal weekly. It was written as part of a friendly <strong>sonnet-writing competition</strong> with Shelley's friend Horace Smith, who wrote his own poem on the same subject. Shelley's version became one of the most celebrated sonnets in the English language; Smith's has been largely forgotten.</p>

    <h3>Historical Context: Ramesses II</h3>
    <p>Ozymandias is the Greek name for <strong>Ramesses II</strong> (c. 1303--1213 BC), one of ancient Egypt's most powerful pharaohs. He ruled for 66 years and commissioned vast building projects, including the temples at Abu Simbel. The British Museum had recently acquired a fragment of a colossal statue of Ramesses, which likely inspired the poem.</p>

    <h3>Political Themes</h3>
    <p>Shelley uses the ruined statue to critique the <strong>arrogance of absolute power</strong>. Writing during a period of political upheaval (the aftermath of the French Revolution, the Napoleonic Wars, and growing calls for reform in Britain), the poem carries a clear message: <strong>no tyrant's power lasts forever</strong>. This was a direct challenge to the monarchies and empires of Shelley's own time.</p>
  `,

  summary: `Lines 1--3: The octave opens with a frame narrative. The speaker recalls meeting a traveller from "an antique land" (Egypt) who describes a ruined statue in the desert — two enormous legs of stone, without a body, standing alone.

Lines 3--5: Near the legs, the traveller describes the statue's face ("visage") lying half-buried in the sand, broken ("shattered"). The face still shows a frown and a "sneer of cold command" — the sculptor captured the pharaoh's arrogant, cruel expression.

Lines 6--8: These lines praise the sculptor's skill. He "read" the king's passions accurately and carved them so well that they "survive" — outlasting both the sculptor and the king. There is an important ambiguity in "the hand that mocked them, and the heart that fed" — this could refer to the sculptor's hand (which "mocked" by imitating the king's expression) or the king's hand (which "mocked" his subjects).

Lines 9--11: The inscription on the pedestal delivers Ozymandias's boastful command: "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!" He commands other powerful rulers to look at what he has built and feel hopeless in comparison.

Lines 12--14: The sestet delivers the poem's devastating irony. "Nothing beside remains" — all the "Works" Ozymandias boasted about have vanished completely. Around the broken statue, the desert stretches endlessly. The "lone and level sands" have the final word, showing that nature and time triumph over even the most powerful human rulers.

Overall meaning: The poem is a meditation on the transience of power. Ozymandias believed his legacy would last forever, but time and nature have reduced his empire to nothing. The only thing that survives is art (the sculptor's work) and, ironically, the king's own boastful words — which now serve as evidence of his foolishness rather than his greatness.`,

  formAndStructure: `Sonnet form: "Ozymandias" is a 14-line sonnet, but Shelley deliberately breaks from both the Petrarchan (Italian) and Shakespearean (English) sonnet forms. This unconventional structure mirrors the poem's theme of breaking from established power structures.

Rhyme scheme: The rhyme scheme is highly irregular — ababacdcedefef. It does not follow any standard sonnet pattern. The looseness of the rhyme reflects the decay and fragmentation described in the poem. Rhymes are often half-rhymes or slant rhymes ("stone"/"frown", "appear"/"despair"), adding to the sense of imperfection and collapse.

Metre: The poem is broadly in iambic pentameter (ten syllables per line, with an unstressed-stressed rhythm), but Shelley frequently disrupts the metre. For example, "Nothing beside remains" breaks the regular rhythm with a heavy, emphatic stress on "Nothing," creating a moment of stark emphasis.

Volta (turn): The traditional sonnet volta appears at line 12 — "Nothing beside remains." This is the devastating turn where the reader's expectation (built by Ozymandias's grand inscription) is shattered. The contrast between the king's boast and the empty desert is the poem's central irony.

Enjambment: Shelley uses extensive enjambment (lines running into each other without punctuation), particularly in lines 2--8. This creates a flowing, continuous description that mirrors the traveller telling a story. It also means the reader cannot pause — they are pulled through the poem just as time pulls everything towards decay.

Caesura: The most important caesura is the full stop mid-line in "Nothing beside remains." (line 12). This abrupt stop after the grand inscription creates a dramatic pause before the poem reveals the empty desert. The caesura in line 3 ("Stand in the desert. . . .") uses ellipsis to evoke a visual and temporal gap.

Frame narrative: The poem uses three layers of voice — the speaker, the traveller, and Ozymandias. This distancing effect means we never hear from Ozymandias directly in the present; his words are filtered through time and retelling, emphasising how his power has been diminished.`,

  keyQuotes: [
    {
      quote: 'Two vast and trunkless legs of stone',
      analysis:
        'The statue is fragmented — only the legs remain standing. "Vast" emphasises the original ambition and scale, while "trunkless" (without a body) shows the destruction. The image of disembodied legs is both absurd and powerful: the ruler who stood tall has literally been cut down. Stone, meant to be permanent, has still crumbled.',
      themes: ['Power of nature', 'Transience of power', 'Pride'],
    },
    {
      quote: 'Half sunk a shattered visage lies',
      analysis:
        'The face of the king is broken and half-buried by sand. "Shattered" suggests violent destruction, while "half sunk" shows nature gradually swallowing the remnants. The word "lies" carries a double meaning — the face physically lies on the ground, but it also "lies" in the sense that its expression of power is now a falsehood.',
      themes: ['Power of nature', 'Decay', 'Irony'],
    },
    {
      quote: 'sneer of cold command',
      analysis:
        'Three words that perfectly characterise a tyrant. "Sneer" shows contempt for others; "cold" shows lack of empathy or compassion; "command" shows absolute authority. The sibilant "s" and hard "c" sounds create a harsh, cruel tone. Significantly, this cruelty outlives everything else — it is preserved in stone while the empire is gone.',
      themes: ['Power and control', 'Tyranny', 'Human nature'],
    },
    {
      quote: 'The hand that mocked them, and the heart that fed',
      analysis:
        'This deliberately ambiguous line can be read in two ways. "The hand that mocked" could be the sculptor\'s hand (which copied/imitated the king\'s expression) or the king\'s hand (which mocked his subjects through cruel rule). "The heart that fed" could be the king\'s heart (which fed on power) or the people\'s hearts (which sustained the regime). This duality links art and tyranny as forms of power.',
      themes: ['Art vs power', 'Ambiguity', 'Legacy'],
    },
    {
      quote: 'My name is Ozymandias, King of Kings',
      analysis:
        'The inscription is Ozymandias speaking directly — the only time we hear the tyrant\'s own voice. "King of Kings" is a superlative that claims superiority over all other rulers. The phrase echoes biblical language used for God (Revelation 19:16), suggesting blasphemous arrogance. Naming himself is an attempt to ensure his identity lasts forever — yet the name now represents failure, not glory.',
      themes: ['Pride and hubris', 'Power', 'Legacy'],
    },
    {
      quote: 'Look on my Works, ye Mighty, and despair!',
      analysis:
        'The most dramatically ironic line in the poem. Ozymandias intended this as a warning to rival kings: my achievements are so great, you should give up trying to compete. But for the reader, "despair" takes on a completely different meaning: despair because even the greatest human works are destroyed by time. The imperative "Look" commands an audience that no longer exists.',
      themes: ['Dramatic irony', 'Hubris', 'Transience of power'],
    },
    {
      quote: 'Nothing beside remains',
      analysis:
        'Three of the most powerful words in English poetry. After the grandiose inscription, this short, blunt sentence demolishes everything. "Nothing" is absolute — not a trace, not a fragment, nothing at all. The plain, monosyllabic language contrasts sharply with Ozymandias\'s elaborate boast. The caesura (full stop mid-line) creates a dramatic pause that emphasises the devastation.',
      themes: ['Transience of power', 'Irony', 'Time and decay'],
    },
    {
      quote: 'The lone and level sands stretch far away',
      analysis:
        'The poem\'s final image is of the desert — vast, flat, and empty. Nature has completely erased Ozymandias\'s empire. The alliterative "l" sounds ("lone and level") create a soft, melancholy tone, while the sibilant "s" sounds ("sands stretch") evoke the whispering of wind over sand. The desert, not the king, has the last word. "Far away" suggests infinite distance and the total insignificance of human endeavour.',
      themes: ['Power of nature', 'Insignificance of humanity', 'Time'],
    },
  ],

  languageDevices: [
    {
      device: 'Dramatic irony',
      example: 'Look on my Works, ye Mighty, and despair!',
      effect:
        'Ozymandias intended "despair" as a threat to rival kings: be overwhelmed by my greatness. The reader, however, sees the empty desert and understands the real cause for despair — that nothing survives. The king\'s own words become the strongest argument against his power.',
      lineRef: 10,
    },
    {
      device: 'Alliteration',
      example: 'boundless and bare / lone and level',
      effect:
        'The "b" alliteration in "boundless and bare" emphasises the vast emptiness surrounding the ruins. The soft "l" sounds in "lone and level" create a gentle, expansive tone that contrasts with the harsh power Ozymandias once held. Both phrases describe nature, reinforcing that the natural world outlasts human ambition.',
      lineRef: 12,
    },
    {
      device: 'Symbolism',
      example: 'the desert and the ruined statue',
      effect:
        'The desert symbolises the erasure of human achievement by time and nature. The broken statue symbolises the inevitable fall of all tyrannical power. Together, they create a visual metaphor: no matter how grand a ruler\'s ambitions, nature will reclaim everything.',
      lineRef: 2,
    },
    {
      device: 'Juxtaposition',
      example: '"King of Kings" vs "Nothing beside remains"',
      effect:
        'The poem places Ozymandias\'s grandiose self-description directly beside the reality of his total obscurity. This contrast is the poem\'s central mechanism: the bigger the boast, the more devastating the reality. The juxtaposition forces the reader to see the absurdity of claiming eternal greatness.',
      lineRef: 11,
    },
    {
      device: 'Imagery (visual)',
      example: 'Two vast and trunkless legs of stone / Stand in the desert',
      effect:
        'Shelley creates a vivid, cinematic image: two enormous stone legs standing alone in an empty desert, with a broken face half-buried nearby. The visual is deliberately strange and arresting — it forces the reader to imagine the scene and feel the desolation. The fragmented body mirrors the fragmented power.',
      lineRef: 1,
    },
    {
      device: 'Personification',
      example: 'the hand that mocked them, and the heart that fed',
      effect:
        'Human qualities ("mocked", "fed") are attributed to abstract concepts of artistry and power. The "hand" and "heart" become symbolic of the sculptor\'s craft and the ruler\'s ambition. By personifying these, Shelley suggests that both art and tyranny are driven by deeply human impulses.',
      lineRef: 7,
    },
    {
      device: 'Sibilance',
      example: 'lone and level sands stretch',
      effect:
        'The repeated "s" sounds in the final line mimic the sound of wind blowing across sand, creating an aural image of the desert. This sonic effect reinforces the poem\'s conclusion: nature — quiet, persistent, indifferent — has the last word over the loud demands of tyrants.',
      lineRef: 13,
    },
    {
      device: 'Irony (situational)',
      example: 'The sculptor\'s work survives, the king\'s does not',
      effect:
        'Ozymandias commissioned the statue to immortalise his power, but it is the sculptor\'s skill — the accurate depiction of cruelty — that actually endures. Art outlasts political power. The irony is that the king is remembered not for his achievements but for his arrogance and the sculptor\'s talent.',
      lineRef: 5,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'My Last Duchess',
    poet: 'Robert Browning',
    href: '/revision/poetry/power-and-conflict/my-last-duchess',
    reason:
      'Both poems explore the abuse of power and how rulers try to control legacy. The Duke, like Ozymandias, seeks to dominate even after death — but while Ozymandias fails to preserve his power, the Duke\'s chilling monologue reveals a tyrant who is still in control.',
    themes: ['Power and control', 'Pride', 'Legacy'],
  },
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/power-and-conflict/london',
    reason:
      'Both poems criticise those in power. Shelley attacks ancient tyranny; Blake attacks the institutions of his own time (the Church, the monarchy). Both suggest that power structures cause suffering, but while Ozymandias\'s power has crumbled, Blake\'s oppressors are still active.',
    themes: ['Abuse of power', 'Suffering', 'Political critique'],
  },
  {
    title: 'Tissue',
    poet: 'Imtiaz Dharker',
    href: '/revision/poetry/power-and-conflict/tissue',
    reason:
      'Both poems reflect on the impermanence of human structures. Tissue uses paper as a symbol for fragile human creations; Ozymandias uses a stone statue. Both argue that the things humans build — whether empires or identities — are ultimately temporary.',
    themes: ['Impermanence', 'Power of nature', 'Human ambition'],
  },
]

/* ── Page component ───────────────────────────────────────────────── */

export default function OzymandiasPage() {
  return (
    <div className="space-y-8">
      {/* ── Breadcrumb / back ─────────────────────────────────────── */}
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
              Ozymandias
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Percy Bysshe Shelley &middot; Power and Conflict anthology
            </p>
          </div>
        </div>
      </div>

      {/* ── Interactive poem viewer ───────────────────────────────── */}
      <InteractivePoemViewer poem={ozymandias} />

      {/* ── Compare with section ─────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The AQA exam often asks you to compare two poems. These are strong
          pairings with Ozymandias for the Power and Conflict cluster.
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
    </div>
  )
}
