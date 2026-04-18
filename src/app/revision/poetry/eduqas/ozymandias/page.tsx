'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

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
          note: 'Shelley distances himself from the story by using a second-hand account. The tale passes through multiple voices (traveller, sculptor, Ozymandias himself), undermining the permanence of the king\'s legacy.',
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
          note: '"Vast and trunkless legs" — only the legs remain standing. The body (trunk) is gone, symbolising how Ozymandias\'s power has been stripped away by time. "Vast" emphasises the original scale of his ambition.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Stand in the desert. . . . Near them, on the sand,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The desert is a symbol of emptiness and erasure. The ellipsis creates a visual pause, mirroring the vast empty space around the ruins.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Half sunk a shattered visage lies, whose frown,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Half sunk" and "shattered" — the face is broken and partially buried. This physical destruction mirrors the collapse of the ruler\'s authority.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And wrinkled lip, and sneer of cold command,',
      annotations: [
        {
          type: 'Characterisation',
          note: '"Sneer of cold command" reveals Ozymandias\'s cruel, authoritarian nature. Even in stone, his contempt for his subjects is visible.',
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
          note: 'The sculptor — an artist, not a ruler — is the one whose work survives. Art outlasts political power.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Which yet survive, stamped on these lifeless things,',
      annotations: [
        {
          type: 'Juxtaposition',
          note: '"Survive" vs "lifeless" — the passions outlive the man, but only on dead stone. There is a paradox: life is preserved in death.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The hand that mocked them, and the heart that fed;',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"The hand that mocked" could refer to the sculptor\'s hand (which imitated/mocked the king\'s expressions) or the king\'s own hand (which mocked his people through tyranny).',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And on the pedestal, these words appear:',
      annotations: [
        {
          type: 'Structure',
          note: 'The poem shifts from description to direct speech. Ironically, the boastful inscription is the only part fully legible while the works it references have vanished.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '"My name is Ozymandias, King of Kings;',
      annotations: [
        {
          type: 'Hubris',
          note: '"King of Kings" is a superlative claiming absolute supremacy. The biblical echo (Revelation 19:16 uses the same phrase for God) suggests blasphemous arrogance.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Look on my Works, ye Mighty, and despair!"',
      annotations: [
        {
          type: 'Dramatic irony',
          note: 'Ozymandias intended "despair" to mean: despair because you cannot match my achievements. The reader understands it differently: despair because even the mightiest are destroyed by time.',
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
          note: '"Nothing beside remains" — the poem\'s most powerful moment. The short, blunt sentence directly contradicts the king\'s boastful inscription.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Of that colossal Wreck, boundless and bare',
      annotations: [
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
          note: 'The final image is of endless, flat desert — nature has completely reclaimed the land. The sibilant "s" sounds create a whispering, wind-like effect.',
          color: '#10b981',
        },
      ],
    },
  ],

  context: `
    <h3>Percy Bysshe Shelley (1792--1822)</h3>
    <p>Shelley was one of the major English Romantic poets. He was a radical political thinker who opposed tyranny, monarchy, and institutional religion. He was expelled from Oxford for publishing a pamphlet on atheism and spent much of his adult life in exile in Italy, where he drowned at the age of 29.</p>

    <h3>The Romantic Movement</h3>
    <p>The Romantics valued <strong>nature, emotion, and individual freedom</strong> over the rationalism of the Enlightenment. They were deeply suspicious of unchecked power. Shelley believed poetry could be a force for political change.</p>

    <h3>Publication (1818)</h3>
    <p>"Ozymandias" was published on 11 January 1818 in <em>The Examiner</em>, a politically liberal weekly. It was written as part of a friendly <strong>sonnet-writing competition</strong> with Shelley's friend Horace Smith. Shelley's version became one of the most celebrated sonnets in English.</p>

    <h3>Historical Context: Ramesses II</h3>
    <p>Ozymandias is the Greek name for <strong>Ramesses II</strong> (c. 1303--1213 BC), one of ancient Egypt's most powerful pharaohs. The British Museum had recently acquired a fragment of a colossal statue of Ramesses, which likely inspired the poem.</p>

    <h3>Political Themes</h3>
    <p>Shelley uses the ruined statue to critique the <strong>arrogance of absolute power</strong>. Writing during a period of political upheaval, the poem carries a clear message: <strong>no tyrant's power lasts forever</strong>. This was a direct challenge to the monarchies and empires of Shelley's own time.</p>
  `,

  summary: `Lines 1-3: A frame narrative opens the poem. The speaker recalls meeting a traveller from "an antique land" (Egypt) who describes a ruined statue in the desert — two enormous legs of stone, without a body, standing alone.

Lines 3-5: Near the legs, the traveller describes the statue's face ("visage") lying half-buried in the sand, broken. The face still shows a frown and a "sneer of cold command" — the sculptor captured the pharaoh's arrogant expression.

Lines 6-8: These lines praise the sculptor's skill. He "read" the king's passions accurately and carved them so well that they "survive". There is an ambiguity in "the hand that mocked them, and the heart that fed".

Lines 9-11: The inscription delivers Ozymandias's boastful command: "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!"

Lines 12-14: The sestet delivers the poem's devastating irony. "Nothing beside remains" — all the "Works" have vanished completely. The "lone and level sands" have the final word, showing nature and time triumph over human power.

Overall meaning: The poem is a meditation on the transience of power. The only thing that survives is art (the sculptor's work) and, ironically, the king's own boastful words — which now serve as evidence of his foolishness rather than his greatness.`,

  formAndStructure: `Sonnet form: "Ozymandias" is a 14-line sonnet, but Shelley deliberately breaks from both the Petrarchan and Shakespearean forms. This unconventional structure mirrors the poem's theme of breaking from established power.

Rhyme scheme: Highly irregular — ababacdcedefef. The looseness of the rhyme reflects the decay and fragmentation described in the poem.

Metre: Broadly iambic pentameter, but Shelley frequently disrupts the metre. "Nothing beside remains" breaks the regular rhythm with a heavy, emphatic stress on "Nothing".

Volta: The traditional sonnet volta appears at line 12 — "Nothing beside remains." This is the devastating turn where the reader's expectation is shattered.

Enjambment: Shelley uses extensive enjambment, particularly in lines 2-8. This creates a flowing description that mirrors a traveller telling a story.

Caesura: The full stop mid-line in "Nothing beside remains." (line 12) creates a dramatic pause before the poem reveals the empty desert.

Frame narrative: The poem uses three layers of voice — the speaker, the traveller, and Ozymandias. This distancing effect emphasises how the king's power has been diminished.`,

  keyQuotes: [
    {
      quote: 'Two vast and trunkless legs of stone',
      analysis:
        'The statue is fragmented — only the legs remain standing. "Vast" emphasises the original ambition, while "trunkless" shows destruction. The image of disembodied legs is both absurd and powerful: the ruler who stood tall has literally been cut down.',
      themes: ['Power of nature', 'Transience of power', 'Pride'],
    },
    {
      quote: 'Half sunk a shattered visage lies',
      analysis:
        'The face of the king is broken and half-buried. "Shattered" suggests violent destruction, while "half sunk" shows nature gradually swallowing the remnants. "Lies" carries a double meaning — physical position and falsehood.',
      themes: ['Power of nature', 'Decay', 'Irony'],
    },
    {
      quote: 'sneer of cold command',
      analysis:
        'Three words that perfectly characterise a tyrant. "Sneer" shows contempt; "cold" shows lack of empathy; "command" shows absolute authority. Significantly, this cruelty outlives everything else — preserved in stone while the empire is gone.',
      themes: ['Power and control', 'Tyranny', 'Human nature'],
    },
    {
      quote: 'My name is Ozymandias, King of Kings',
      analysis:
        'The only time we hear the tyrant\'s own voice. "King of Kings" is a superlative that claims superiority. The phrase echoes biblical language used for God, suggesting blasphemous arrogance. The name now represents failure, not glory.',
      themes: ['Pride and hubris', 'Power', 'Legacy'],
    },
    {
      quote: 'Look on my Works, ye Mighty, and despair!',
      analysis:
        'The most dramatically ironic line in the poem. Ozymandias intended this as a warning to rival kings. But the reader understands "despair" differently: despair because even the greatest works are destroyed by time.',
      themes: ['Dramatic irony', 'Hubris', 'Transience of power'],
    },
    {
      quote: 'Nothing beside remains',
      analysis:
        'Three of the most powerful words in English poetry. After the grandiose inscription, this short, blunt sentence demolishes everything. The plain, monosyllabic language contrasts sharply with the king\'s elaborate boast.',
      themes: ['Transience of power', 'Irony', 'Time and decay'],
    },
    {
      quote: 'colossal Wreck, boundless and bare',
      analysis:
        'The oxymoron "colossal Wreck" pairs grandeur with ruin. "Boundless and bare" uses alliteration to emphasise the vast emptiness. The statue\'s very size now highlights how completely it has fallen.',
      themes: ['Decay', 'Power of nature', 'Irony'],
    },
    {
      quote: 'The lone and level sands stretch far away',
      analysis:
        'The poem\'s final image is of the desert — vast, flat, and empty. The alliterative "l" sounds create a melancholy tone, while sibilant "s" sounds evoke wind over sand. The desert has the last word, suggesting nature\'s indifference to human power.',
      themes: ['Power of nature', 'Insignificance of humanity', 'Time'],
    },
  ],

  languageDevices: [
    {
      device: 'Dramatic irony',
      example: 'Look on my Works, ye Mighty, and despair!',
      effect:
        'Ozymandias intended "despair" as a threat to rival kings. The reader, however, sees the empty desert and understands the real cause for despair — that nothing survives. The king\'s own words become the strongest argument against his power.',
      lineRef: 10,
    },
    {
      device: 'Alliteration',
      example: 'boundless and bare / lone and level',
      effect:
        'The "b" alliteration emphasises the vast emptiness. The soft "l" sounds in "lone and level" create a gentle, expansive tone that contrasts with the harsh power Ozymandias once held.',
      lineRef: 12,
    },
    {
      device: 'Symbolism',
      example: 'the desert and the ruined statue',
      effect:
        'The desert symbolises the erasure of human achievement by time and nature. The broken statue symbolises the inevitable fall of all tyrannical power.',
      lineRef: 2,
    },
    {
      device: 'Juxtaposition',
      example: '"King of Kings" vs "Nothing beside remains"',
      effect:
        'The poem places Ozymandias\'s grandiose self-description directly beside the reality of his total obscurity. The bigger the boast, the more devastating the reality.',
      lineRef: 11,
    },
    {
      device: 'Imagery (visual)',
      example: 'Two vast and trunkless legs of stone / Stand in the desert',
      effect:
        'Shelley creates a vivid, cinematic image: two enormous stone legs standing alone in an empty desert. The visual is deliberately strange and arresting, forcing the reader to imagine the desolation.',
      lineRef: 1,
    },
    {
      device: 'Sibilance',
      example: 'lone and level sands stretch',
      effect:
        'The repeated "s" sounds in the final line mimic the sound of wind blowing across sand, creating an aural image of the desert. Nature — quiet, persistent, indifferent — has the last word.',
      lineRef: 13,
    },
  ],
}

/* ── Comparison poems (Eduqas) ────────────────────────────────────── */

const comparisons = [
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/eduqas/london',
    reason:
      'Both poems criticise those in power. Shelley attacks ancient tyranny; Blake attacks the institutions of his own time (the Church, the monarchy). Both suggest that power structures cause suffering.',
    themes: ['Abuse of power', 'Suffering', 'Political critique'],
  },
  {
    title: 'The Prelude: stealing the boat',
    poet: 'William Wordsworth',
    href: '/revision/poetry/eduqas/the-prelude',
    reason:
      'Both Romantic poems present nature as more powerful than human ambition. Where Wordsworth shows nature humbling a young boy, Shelley shows it erasing an empire.',
    themes: ['Power of nature', 'Human insignificance', 'Romantic poetry'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems use bitter dramatic irony. Hardy\'s wife receives news after her husband has died, just as Ozymandias\'s boast survives after his power has crumbled. Both expose the gap between human hopes and reality.',
    themes: ['Dramatic irony', 'Loss', 'Time'],
  },
]

/* ── Page component ───────────────────────────────────────────────── */

export default function OzymandiasEduqasPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Ozymandias
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Percy Bysshe Shelley &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Ozymandias"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InteractivePoemViewer poem={ozymandias} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Eduqas exam asks you to compare two poems from the anthology.
          These are strong pairings with Ozymandias.
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
