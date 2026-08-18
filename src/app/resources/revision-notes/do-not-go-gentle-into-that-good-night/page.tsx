'use client'

import { useState } from 'react'

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function DoNotGoGentlePage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Poetry
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel IGCSE Anthology
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Villanelle
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Do Not Go Gentle Into That Good Night: Revision Notes
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Dylan Thomas, published 1951</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A complete GCSE guide to Dylan Thomas&apos;s famous villanelle: the strict 19-line form
          and its two refrains, the four types of men who face death, the turn to the poet&apos;s
          own dying father, key quotations with analysis, context, comparison ideas and exam tips.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Overview', id: 'overview' },
            { label: 'Form & Structure', id: 'form-structure' },
            { label: 'Voice & Speaker', id: 'voice-speaker' },
            { label: 'Themes', id: 'themes' },
            { label: 'Key Quotations', id: 'key-quotations' },
            { label: 'Language & Imagery', id: 'language-imagery' },
            { label: 'Context', id: 'context' },
            { label: 'Comparisons', id: 'comparisons' },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── OVERVIEW */}
        <div id="overview">
          <Section title="Overview" icon="📖" defaultOpen>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Do not go gentle into that good night</strong> is a 19-line villanelle in
                which a son urges his dying father to resist death rather than accept it quietly.
                The whole poem is built around two repeating lines (refrains): &ldquo;Do not go
                gentle into that good night&rdquo; and &ldquo;Rage, rage against the dying of the
                light.&rdquo; Thomas wrote it as his father, D. J. Thomas, a Swansea schoolmaster,
                was losing his sight and his health; it was first published in the Italian-based
                journal <em>Botteghe Oscure</em> in 1951, the year before his father died.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The argument unfolds with almost legal precision (AO1). Stanza 1 states the thesis:
                old age should &ldquo;burn and rave&rdquo; rather than fade. Stanzas 2 to 5 then
                present four kinds of men, wise men, good men, wild men and grave men, each of whom
                discovers at the end of life that something is unfinished, and each of whom
                therefore refuses to surrender meekly. Only in the final quatrain does the poem
                reveal its true addressee: &ldquo;And you, my father&rdquo;. The universal argument
                collapses into a single, intensely personal plea.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  At a Glance
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Form: villanelle (19 lines, five tercets plus a quatrain)</li>
                  <li>&bull; Two alternating refrains, both repeated four times</li>
                  <li>&bull; Metre: largely iambic pentameter</li>
                  <li>&bull; Voice: a son addressing his dying father</li>
                  <li>&bull; Core tension: acceptance of death versus furious resistance</li>
                  <li>
                    &bull; Set in the Pearson Edexcel International GCSE Anthology (English Language
                    A and Literature)
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── FORM & STRUCTURE */}
        <div id="form-structure">
          <Section title="Form & Structure" icon="🏗️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Villanelle (AO2)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A villanelle is a French fixed form: 19 lines arranged as five three-line stanzas
                  (tercets) and a closing four-line stanza (quatrain), using only two rhyme sounds
                  throughout (here, the &ldquo;night&rdquo; rhymes and the &ldquo;day&rdquo; rhymes,
                  an ABA pattern). Line 1 and line 3 of the first stanza become refrains: they take
                  turns ending the following tercets, and then appear together as the final couplet.
                  Choosing one of the strictest forms in English for a poem about rage is
                  deliberate: the discipline of the form holds enormous emotion under pressure, like
                  a fist clenched around grief.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Refrains Do the Arguing</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Because the two refrains keep returning, the poem circles rather than progresses,
                  enacting the son&apos;s refusal to let go. Each repetition lands in a new context:
                  after the wise men the refrain sounds like a conclusion drawn from evidence; after
                  &ldquo;you, my father&rdquo; it sounds like a desperate prayer. Repetition also
                  mimics incantation, as if the words themselves could hold death back. Notice that
                  grammatically the refrains alternate between command (&ldquo;Do not go
                  gentle&rdquo;) and exhortation (&ldquo;Rage, rage&rdquo;): the son both forbids
                  and begs.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Structured Argument</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The middle stanzas form a catalogue: wise men (thinkers), good men (moral doers),
                  wild men (hedonists and poets), grave men (the solemn, and those near the grave).
                  Each category is given one tercet, each discovers a regret, and each resists
                  death. The parallel grammar (&ldquo;Though wise men...&rdquo;, &ldquo;Good
                  men...&rdquo;, &ldquo;Wild men...&rdquo;, &ldquo;Grave men...&rdquo;) builds a
                  rhetorical case so that the final, personal stanza arrives with the full weight of
                  the preceding evidence behind it. The shift from third person to second person
                  (&ldquo;And you, my father&rdquo;) is the structural climax of the poem (AO2).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Metre and Sound</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The underlying metre is iambic pentameter, but Thomas roughs it up where emotion
                  demands. &ldquo;Rage, rage&rdquo; opens with two heavy stresses (a spondee), so
                  the line itself rages against its metrical frame. The long open vowels of
                  &ldquo;night&rdquo;, &ldquo;light&rdquo;, &ldquo;day&rdquo; and &ldquo;they&rdquo;
                  give the poem its tolling, elegiac music, while plosive consonants
                  (&ldquo;burn&rdquo;, &ldquo;blaze&rdquo;, &ldquo;blind&rdquo;) supply the energy
                  of protest.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── VOICE & SPEAKER */}
        <div id="voice-speaker">
          <Section title="Voice & Speaker" icon="🗣️">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The speaker is a son at his father&apos;s deathbed, and the poem is an apostrophe, a
                direct address. Yet for five stanzas the father is hidden behind generalisation: the
                speaker talks about &ldquo;wise men&rdquo;, &ldquo;good men&rdquo;, &ldquo;wild
                men&rdquo; and &ldquo;grave men&rdquo; as if delivering a lecture on how humanity
                should die. Only in line 16 does the mask slip: &ldquo;And you, my father, there on
                the sad height&rdquo;. The delay is psychologically revealing (AO1): the son hides
                his personal terror inside a universal argument, because speaking directly about his
                father&apos;s death is almost unbearable.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The voice is commanding, even bullying: imperatives (&ldquo;Do not go&rdquo;,
                &ldquo;Rage, rage&rdquo;, &ldquo;Curse, bless, me now&rdquo;) dominate. But the
                final &ldquo;I pray&rdquo; exposes the powerlessness underneath the commands. A son
                cannot order death away; he can only plead. Many readers also hear guilt and need in
                the extraordinary request that the father &ldquo;Curse, bless, me now&rdquo;: any
                response, even anger, would prove the father is still fiercely alive. The speaker
                wants the father&apos;s fire for the father&apos;s sake, but also for his own.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Discussion Point
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Is the poem selfless or selfish? It asks a dying, exhausted man to fight on
                  because his son cannot face losing him. Top answers weigh the love in the poem
                  against its refusal to allow the father a peaceful death.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Defiance in the Face of Death"
                description="The poem's central paradox is that it accepts death is coming ('dark is right') while insisting it must be fought anyway. Resistance is not about winning; it is about the manner of dying. To 'burn and rave' is to assert the value of life right up to its final second. Thomas turns dying into a last act of living, and passivity into the only real defeat. The villanelle's circling refrains enact this: the poem literally will not stop saying no."
              />
              <ThemeCard
                title="Father, Son and Grief"
                description="Beneath the public rhetoric is a private crisis: a son watching his father fade. D. J. Thomas had been a proud, fierce English master who read Shakespeare aloud to his son; his decline into blindness and illness felt to Dylan like a betrayal of the man he had been. The poem is anticipatory grief, mourning a man not yet dead, and its commands are really pleas: stay yourself, stay angry, stay alive. The reticence of five stanzas of generalisation before 'you, my father' is itself a portrait of a relationship in which love was real but hard to speak."
              />
              <ThemeCard
                title="Regret and the Unfinished Life"
                description="Each of the four types of men resists death because of something incomplete. The wise know their words 'had forked no lightning'; the good see their 'frail deeds' might have shone brighter; the wild learn 'too late' the cost of their blazing days; the grave men realise even failing eyes 'could blaze like meteors'. Death clarifies what was missed, and that clarity fuels rage. The poem suggests no life ever feels finished, which is precisely why none should be surrendered quietly."
              />
              <ThemeCard
                title="Light and Darkness, Vitality and Decay"
                description="The poem's whole symbolic system opposes light (life, energy, sight, meaning) to darkness (death, blindness, ending). 'Close of day', 'the dying of the light' and 'that good night' make death a nightfall; lightning, meteors, the sun and blazing eyes make life a brightness worth burning for. The pattern is sharpened by biography: Thomas's father was going blind, so 'blinding sight' and 'Blind eyes' carry a painful literal charge alongside the metaphor."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Learn the two refrains plus two or three supporting quotations. In the exam, always
              link the quotation to the villanelle form (AO2): repetition is the poem&apos;s main
              method.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Do not go gentle into that good night"
                speaker="Refrain 1: lines 1, 6, 12 and 18"
                analysis="The title line and first refrain. 'Gentle' is an adjective where we expect the adverb 'gently': the father is not just to avoid acting gently, he is not to BE gentle, not to become a meek thing. 'That good night' is a triple pun: nightfall, the farewell 'goodnight', and death itself. Calling the night 'good' quietly concedes that death may be natural and even kind, which makes the command to resist it more moving, not less. The gentle long vowels of the line contrast with the harsh energy of the second refrain."
              />
              <QuoteCard
                quote="Rage, rage against the dying of the light"
                speaker="Refrain 2: lines 3, 9, 15 and 19"
                analysis="The counter-refrain. The repeated monosyllable 'Rage' opens with a double stress that breaks the iambic flow: the line performs the fury it demands. 'The dying of the light' makes death a slow extinguishing rather than a sudden event, which is exactly what Thomas was watching happen to his father. Note the verb is 'rage', not 'fight' or 'win': the poem asks for passion, not victory. The two refrains finally meet as a couplet in the last stanza, command and exhortation fused."
              />
              <QuoteCard
                quote="Old age should burn and rave at close of day"
                speaker="Line 2"
                analysis="The thesis of the whole argument. 'Burn' begins the poem's fire imagery (lightning, sun, meteors all follow), making vitality a kind of combustion. 'Rave' is startling: it suggests madness, the loss of dignified self-control, and the poem embraces that. Dignified acceptance is exactly what the speaker rejects. 'Close of day' establishes the governing metaphor of life as a single day now reaching evening."
              />
              <QuoteCard
                quote="Because their words had forked no lightning"
                speaker="Line 5, the wise men"
                analysis="Why do even the wise resist a death they know is 'right'? Because their wisdom never struck home: 'forked no lightning' imagines language as a natural force that should split the sky, and theirs did not. For Thomas, a poet, this is the nightmare of words without power. The wise men's intellectual acceptance of death is overruled by the artist's sense of unfinished work (AO1: a good example of the poem's logic of regret)."
              />
              <QuoteCard
                quote="Their frail deeds might have danced in a green bay"
                speaker="Line 8, the good men"
                analysis="The good men, 'the last wave by', cry that their modest moral actions could have shone more brightly in a kinder setting. 'Frail deeds' is a poignant admission of smallness; 'danced' gives those deeds a lost gaiety; 'green bay' is one of the poem's few images of fertile, living colour. The wave metaphor matters too: a wave's whole existence is its brief breaking, so the good men are mourning the shortness of any human life."
              />
              <QuoteCard
                quote="And learn, too late, they grieved it on its way"
                speaker="Line 11, the wild men"
                analysis="The wild men 'caught and sang the sun in flight', living so intensely that they seemed to celebrate time, and only discover afterwards that their revelry was hastening the very sun they sang. 'Too late' is the bleakest phrase in the poem: some knowledge arrives only when it is useless. Yet even these men do not 'go gentle'; regret converts itself into resistance."
              />
              <QuoteCard
                quote="Blind eyes could blaze like meteors and be gay"
                speaker="Line 14, the grave men"
                analysis="'Grave men' is the poem's sharpest pun: serious men, and men at the edge of the grave. The paradox of 'blinding sight' in the previous line and blazing 'Blind eyes' here insists that loss of sight can coexist with visionary intensity. The simile 'like meteors' is exact: a meteor burns brightest precisely as it is destroyed. The line is almost unbearably personal, since D. J. Thomas was losing his sight as his son wrote."
              />
              <QuoteCard
                quote="And you, my father, there on the sad height"
                speaker="Line 16"
                analysis="The volta. After fifteen lines of generalised argument the poem turns to its real subject, and the change of pronoun ('you') lands like a confession. 'The sad height' suggests a summit at the end of life's climb, a place of lonely eminence; some readers hear an echo of a deathbed raised above the watching son, or of a Calvary-like place of suffering. The phrase's quiet sorrow contrasts with the fire imagery everywhere else: here, finally, is plain grief."
              />
              <QuoteCard
                quote="Curse, bless, me now with your fierce tears, I pray"
                speaker="Line 17"
                analysis="A line of compressed paradoxes. 'Curse, bless' asks for opposite things at once because any passionate response, fury or love, would prove the father still burns. 'Fierce tears' fuses rage and grief into a single image. The commas around 'me now' slow the line to a series of sobs. And 'I pray', after sixteen lines of commands, admits the truth: the son has no power here at all. The poem ends by repeating both refrains, a son chanting against the dark."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── LANGUAGE & IMAGERY */}
        <div id="language-imagery">
          <Section title="Language & Imagery" icon="🎨">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Light, Fire and the Dying Day</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem runs on one extended metaphor: life is light, death is darkness, and
                  dying is nightfall (&ldquo;close of day&rdquo;, &ldquo;the dying of the
                  light&rdquo;). Against the encroaching dark, Thomas sets escalating images of
                  fierce light: burning, forked lightning, the sun in flight, blazing meteors. Each
                  type of man is associated with his own form of light, so the catalogue of stanzas
                  is also a catalogue of fires. The effect (AO2) is to make resistance luminous and
                  surrender merely dim.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Paradox and Pun</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Thomas compresses contradiction into tiny spaces: &ldquo;good night&rdquo; (a
                  kindly death and a farewell), &ldquo;grave men&rdquo; (solemn and dying),
                  &ldquo;blinding sight&rdquo; (insight at the cost of sight), &ldquo;Curse,
                  bless&rdquo;. These paradoxes are the poem&apos;s honesty: it knows death is
                  natural and right, and demands fury anyway. The puns also show wit surviving in
                  the middle of grief, itself a form of rage against the dying of the light.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sound Patterning</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Only two rhyme sounds run through all nineteen lines, an echo chamber in which
                  &ldquo;night&rdquo;, &ldquo;light&rdquo;, &ldquo;right&rdquo;,
                  &ldquo;bright&rdquo;, &ldquo;sight&rdquo;, &ldquo;height&rdquo; toll like a bell.
                  Alliteration binds opposites together (&ldquo;go gentle... good night&rdquo;,
                  &ldquo;blind... blaze... be gay&rdquo;), and the heavy repetition of
                  &ldquo;rage&rdquo; turns the poem into something close to chant or spell. Thomas,
                  famous for reading his work aloud, builds the poem for the voice: it is written to
                  be performed at full pitch.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Dylan Thomas and His Father (AO3)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Dylan Thomas (1914-1953) grew up in Swansea, Wales. His father, D. J. Thomas, was
                  the senior English master at Swansea Grammar School: a formidable, frustrated man
                  who had wanted to be a poet himself and who read Shakespeare aloud to his son from
                  early childhood. By the late 1940s D. J. was in failing health and losing his
                  eyesight, and the once-fierce schoolmaster was becoming gentle and diminished. The
                  poem was first published in 1951 in the journal <em>Botteghe Oscure</em> and then
                  in the collection <em>In Country Sleep</em>; D. J. Thomas died in December 1952,
                  and Dylan himself died less than a year later, in November 1953, aged just 39.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Modern Master of an Old Form</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Thomas wrote in the mid-twentieth century, when much poetry had moved to free
                  verse, yet he chose the villanelle, a centuries-old French form. This is now the
                  most famous villanelle in English. The choice connects him to a tradition of
                  technically intricate, musical poetry, and reflects his belief in the craft and
                  sound of verse: he was celebrated for his sonorous radio broadcasts and public
                  readings. Knowing the form&apos;s rules lets you show (AO2) how meaning is made by
                  the form itself, not just decorated by it.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Attitudes to Death</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Much consolatory writing, religious and secular, encourages calm acceptance of
                  death. Thomas&apos;s poem pushes against that whole tradition: it offers no
                  afterlife, no comfort, only the demand that life be gripped to the last. Some
                  readers find this heroic and humanist; others find it a refusal of the peace a
                  dying person might need. Strong exam answers (AO3) can set the poem against more
                  accepting treatments of death elsewhere in the anthology.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── COMPARISONS */}
        <div id="comparisons">
          <Section title="Comparison Suggestions" icon="🔗">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Useful pairings with other Edexcel IGCSE anthology poems:
              </p>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Piano (D. H. Lawrence)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both are poems about a parent, written from the child&apos;s perspective, and both
                  struggle with overwhelming feeling. Lawrence is dragged backwards into memory and
                  weeps for what is already lost; Thomas fights forwards, trying to prevent a loss
                  that has not yet happened. Compare the surrender at the end of Piano with the
                  refusal to surrender in the refrains.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Remember / accepting death elsewhere</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Any poem that counsels calm acceptance of death makes a sharp contrast with
                  Thomas&apos;s rage. Where other elegies seek consolation, Thomas treats
                  consolation as defeat. Contrast tone (incantatory fury versus quiet resignation)
                  and form (the locked villanelle versus looser structures).
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Prayer Before Birth (Louis MacNeice)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Two dramatic addresses at the two ends of life: an unborn child pleading before
                  birth, a son pleading at a deathbed. Both use insistent repetition and
                  incantation, and both end in a desperate, conditional prayer. Compare how
                  repetition creates urgency in each, and how each poem treats the individual facing
                  forces too large to control.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Sonnet 116 (Shakespeare)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both poems use a strict traditional form to make a defiant universal claim, and
                  both argue against time and death. Shakespeare claims love outlasts time; Thomas
                  demands that vitality defy it. Compare how each poet uses the discipline of form
                  (sonnet, villanelle) to give an emotional argument the force of logic.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>Do Not Go Gentle Into That Good Night</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO2: lead with the villanelle.</strong> Name the form precisely (19 lines,
              five tercets and a quatrain, two refrains, two rhyme sounds) and, crucially, explain
              its effect: the circling repetition enacts refusal to let go.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO1: track the structure of the argument.</strong> Thesis, four categories of
              men, then the personal turn at &ldquo;And you, my father&rdquo;. Essays organised
              around this turn almost write themselves.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO2: zoom in on small grammatical choices.</strong> &ldquo;Gentle&rdquo; for
              &ldquo;gently&rdquo;, the spondee of &ldquo;Rage, rage&rdquo;, the paradox of
              &ldquo;Curse, bless&rdquo;. Examiners reward word-level analysis tied to effect.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO3: use the biography with care.</strong> The dying, blind father makes
              &ldquo;blind eyes&rdquo; and &ldquo;sad height&rdquo; concrete, but keep context brief
              and tied to specific lines rather than bolted on.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Hold the central paradox.</strong> The poem admits &ldquo;dark is right&rdquo;
              yet demands rage. Top answers argue that the contradiction is the meaning: love
              refuses what reason accepts.
            </span>
          </li>
        </ul>
      </div>

      {/* Rights notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Do not go gentle into that good night</em> by Dylan Thomas (1914-1953) was first
          published in 1951. Dylan Thomas&apos;s works entered the UK public domain on 1 January
          2024 (70 years after his death), though copyright may still subsist in some other
          territories. Quotations here are short extracts for the purpose of criticism and review.
          For the full text, students should consult the Edexcel-licensed school anthology or
          Thomas&apos;s <em>Collected Poems</em>.
        </p>
      </footer>
    </>
  )
}
