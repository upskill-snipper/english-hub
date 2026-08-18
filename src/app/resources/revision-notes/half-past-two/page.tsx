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

export default function HalfPastTwoPage() {
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
            Childhood
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Half-past Two: Revision Notes
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          U. A. Fanthorpe, from <em>Neck-Verse</em>, 1992
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A complete GCSE guide to Fanthorpe&apos;s gently subversive poem about a small boy kept
          behind after school who cannot tell the time: the child&apos;s-eye narration, the invented
          compound words, themes of time, authority and escape, key quotations with analysis,
          context and exam tips.
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
                <strong>Half-past Two</strong> tells a small, true-feeling story. A young boy does
                &ldquo;Something Very Wrong&rdquo; at school (so trivial that the adult narrator
                admits to having forgotten what it was) and his teacher tells him to stay in the
                schoolroom &ldquo;till half-past two&rdquo;. But she forgets one thing: she has
                never taught him how to read a clock. Left alone, unable to find half-past two
                anywhere in his world of named times (getting-up time, TV time, kiss time), the boy
                slips out of measured time altogether into a dreamy, timeless present, until the
                teacher rushes back, releases him, and normal scheduled life resumes.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The punishment accidentally becomes a gift. For a few unmeasured minutes the boy
                lives where &ldquo;time hides tick-less&rdquo;, fully absorbed in smells, sounds and
                stillness, an escape the adult world rarely allows. The final stanza tells us he
                &ldquo;never forgot&rdquo; it (AO1). Fanthorpe, who spent years as a teacher, writes
                with double vision: the poem is funny about adult forgetfulness and bureaucratic
                time, and quietly serious about what children know that adults have lost.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  At a Glance
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Eleven three-line stanzas (tercets) of free verse, no rhyme scheme</li>
                  <li>&bull; Third-person narration filtered through the child&apos;s mind</li>
                  <li>&bull; Fairy-tale opening: &ldquo;Once upon a schooltime&rdquo;</li>
                  <li>&bull; Invented compound words mimic how the child names his day</li>
                  <li>&bull; Core idea: clock time versus lived, timeless experience</li>
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
                <h4 className="font-bold text-primary">Free Verse in Neat Tercets (AO2)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem is written in regular three-line stanzas but without rhyme or fixed
                  metre. The visual regularity suggests the ordered, timetabled world of school,
                  while the unrhymed, flexible lines inside each stanza belong to the child&apos;s
                  drifting experience. Form quietly stages the poem&apos;s central conflict:
                  containers of routine holding something that will not be contained.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Story Shape: Once Upon a Time</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The opening line, &ldquo;Once upon a schooltime&rdquo;, splices the fairy-tale
                  formula onto the school day. This does several things at once: it signals that we
                  are entering a child&apos;s way of understanding the world; it makes the teacher a
                  fairy-tale authority figure; and it hints that the event belongs to a distant,
                  mythic past, a memory the grown narrator is retelling. The narrative arc is simple
                  and satisfying: transgression, sentence, strange enchanted interlude, rescue,
                  return, and a closing moral-shaped stanza about what was never forgotten.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Structure of Time Itself</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem moves through three time-worlds: the schoolroom&apos;s adult clock time
                  (which the boy cannot enter), the child&apos;s home catalogue of named times (the
                  famous run of compound words), and the timeless &ldquo;clockless land of
                  ever&rdquo; into which he escapes. The teacher&apos;s return snaps him back: she
                  &ldquo;slotted him back into schooltime&rdquo;, a mechanical verb that treats the
                  boy like a component returned to its machine (AO2). The final stanza steps outside
                  the story into reflective adult retrospect, preserving the escape as a permanent
                  memory.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Parenthesis and Aside</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fanthorpe drops adult asides into brackets, such as the admission that the
                  narrator forgets what the boy&apos;s crime actually was. The brackets create a
                  second, wry voice alongside the child&apos;s perspective, gently mocking the
                  solemnity of school justice: if the offence cannot even be remembered, how
                  &ldquo;Very Wrong&rdquo; can it really have been?
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
                The poem is told in the third person, but the point of view belongs almost entirely
                to the child: we get his capital letters (&ldquo;Something Very Wrong&rdquo;,
                &ldquo;She&rdquo;, &ldquo;Time&rdquo;), his coinages, his awe of the teacher and his
                ignorance of what clocks mean. This technique (sometimes called child-focalised
                narration) lets Fanthorpe be in two places at once: inside the boy&apos;s confusion
                and slightly above it, with an adult&apos;s amused, rueful hindsight (AO1).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The capitalisation is a precise piece of voice-work (AO2). To the boy,
                &ldquo;She&rdquo; is not a person with a name but a power, almost a deity;
                &ldquo;Time&rdquo; is a mysterious adult subject, like a god he has not been
                introduced to; his offence is not described but labelled with the official gravity
                adults gave it. Meanwhile the teacher is fallible: she is &ldquo;cross&rdquo;, she
                forgets things, and she is too &ldquo;scuttling&rdquo; and busy to notice what her
                punishment has actually done. The power imbalance between child and adult is the
                poem&apos;s quiet subject, handled with comedy rather than anger.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Discussion Point
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Who understands time better, the teacher or the boy? The teacher can read a clock;
                  the boy can live entirely inside a moment. The poem refuses to treat clock-reading
                  as the superior knowledge.
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
                title="Two Kinds of Time"
                description="The poem opposes measured, adult clock time (timetables, half-past two, schooltime) to lived time as a child experiences it: a sequence of meaningful events like getting up, tea and a goodnight kiss. The boy's named times are warm, bodily and relational; the clock's time is abstract and empty. When he cannot attach 'half-past two' to anything, time simply dissolves, and the poem suggests that this timeless absorption, not the clock, is the deeper reality. Adults have traded 'ever' for a timetable."
              />
              <ThemeCard
                title="Childhood Innocence and Adult Power"
                description="The boy is punished within a system whose rules he cannot fully read, by an authority he holds in religious awe. He is too frightened of being 'wicked' to explain that he cannot tell the time, so the punishment quietly becomes absurd: a sentence the prisoner cannot measure. Fanthorpe is gentle with the teacher (she is forgetful, not cruel) but sharp about institutions: school turns a small child's day into offences, sentences and slots, and never notices what it cannot timetable."
              />
              <ThemeCard
                title="Escape and Transcendence"
                description="Left beyond the reach of the clock, the boy slips 'into the clockless land of ever', a state of pure present-tense attention to smells, faint sounds and silence. The poem treats this as a kind of accidental mysticism: the moment is out of time the way deep absorption always is. Crucially, the escape is never repeated; the adult world recaptures him and teaches him time. But the memory persists for life, which is the poem's quiet claim about what childhood experience gives us and what schooling takes away."
              />
              <ThemeCard
                title="Language and Understanding"
                description="The poem is fascinated by how we name the world. The boy's compound coinages show him building time out of language he does own; the clock, whose face and hands he can see but whose 'language' he cannot 'click', shows meaning locked behind a code he has not been taught. Fanthorpe, a poet who loved giving voice to the overlooked, makes the child's homemade vocabulary more vivid and more truthful than the official vocabulary of school."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Short phrases only are quoted here (the poem is in copyright). Learn a handful and tie
              each to a method: coinage, capitalisation, personification or sensory imagery (AO2).
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Once upon a schooltime"
                speaker="Opening line"
                analysis="The fairy-tale formula is hijacked and given a school uniform. The blend signals immediately that we are in a child's imaginative register, where school is as strange and absolute as a kingdom in a story. It also frames the whole incident as legend: something that happened long ago and has been retold into myth by the adult remembering it."
              />
              <QuoteCard
                quote="Something Very Wrong"
                speaker="Stanzas 1-2"
                analysis="The capitals reproduce the way the adults' words landed on the child: not a description but a Title, an official category of sin. He 'must never forget' it, yet the narrator confesses in brackets to having forgotten what it was. The gap between the huge label and the vanished offence is the poem's funniest and sharpest irony about school discipline (AO2: irony and capitalisation working together)."
              />
              <QuoteCard
                quote="She hadn't taught him Time"
                speaker="Stanza 3"
                analysis="The hinge of the plot, delivered with deadpan simplicity. 'Time' is capitalised because, to the boy, it is a school subject and a mystery, something owned by adults. There is also a larger resonance: no one can really be 'taught' time; the teacher herself only knows the clock-face code. Her forgetting is comic, but it exposes how much of adult authority rests on systems a child has simply not been initiated into."
              />
              <QuoteCard
                quote="timeformykisstime (that was Grantime)"
                speaker="The catalogue of named times"
                analysis="The run-together compound words are the poem's signature device. The boy's day is told in homemade units: getting-up time, time to go home, TV time, kiss time. Squashing the words together mimics how a child hears adult phrases as single magic sounds, and each names a relationship or comfort rather than a number. The bracketed gloss about Gran is wonderfully tender: his time system is made of people who love him. Against this warm vocabulary, 'half-past two' means nothing at all."
              />
              <QuoteCard
                quote="the little eyes / And two long legs for walking"
                speaker="The clock, central stanzas"
                analysis="The boy personifies the clock-face: numbers become eyes, hands become legs. He 'knew' the creature's face 'But he couldn't click its language'. The image is exact child-logic, charming on the surface and pointed underneath: the clock is a living gatekeeper speaking a foreign tongue. 'Click' is brilliantly chosen, suggesting both the clock's ticking and the moment of comprehension that refuses to come (AO2: personification plus onomatopoeia)."
              />
              <QuoteCard
                quote="He escaped into the clockless land of ever"
                speaker="The escape stanzas"
                analysis="'Escaped' recasts the detention: the prisoner gets free not from the room but from time itself. 'Clockless land' makes timelessness a place, a country reachable only by those who cannot read clocks, and 'ever' (a child's fragment of 'forever' and of fairy-tale 'ever after') names eternity in a child's word. This is the poem's still centre: punishment transformed into the purest freedom in the poem."
              />
              <QuoteCard
                quote="into the smell of old chrysanthemums on Her desk"
                speaker="The escape stanzas"
                analysis="Once outside time, the boy lives through his senses: the fading flowers on the teacher's desk, tiny sounds, the silence beyond the window. The sensory catalogue slows the poem's pace to match his absorption; even the slightly stale smell of 'old' chrysanthemums becomes fascinating when attention is total. The capitalised 'Her' keeps the teacher godlike even in her absence, while the boy quietly experiences something she has lost the ability to notice."
              />
              <QuoteCard
                quote="slotted him back into schooltime"
                speaker="The teacher's return"
                analysis="The verb 'slotted' is mechanical: the boy is a piece returned to its slot in the timetable machine. After the open 'land of ever', the word lands with a small clunk of confinement. The teacher means well (she comes 'scuttling' back, flustered and apologetic in her busyness), but the verb tells us what institutions do to children: they file them into time."
              />
              <QuoteCard
                quote="time hides tick-less waiting to be born"
                speaker="Final stanza"
                analysis="The poem's closing image, and its most haunting. Outside the clock's tick, time is not absent but unborn: a waiting, pregnant stillness. The coinage 'tick-less' defines that state by the absence of the clock's sound, and 'waiting to be born' suggests every measured moment is hatched out of this deeper timelessness. The adult narrator confirms the boy 'never forgot' the place he found; the memory of escaping time outlives the learning of it (AO1: link to the theme of transcendence)."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── LANGUAGE & IMAGERY */}
        <div id="language-imagery">
          <Section title="Language & Imagery" icon="🎨">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Invented Compound Words</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The fused coinages (getting-up time, TV time, kiss time, run together without
                  spaces) are the poem&apos;s most distinctive technique. They turn the boy&apos;s
                  schedule into a private language learned by ear from adults, each unit anchored to
                  an event or a person rather than a number. When you analyse them (AO2), stress the
                  contrast: his vocabulary of time is concrete, loving and human; &ldquo;half-past
                  two&rdquo; is abstract and empty. The form of the words enacts the theme.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Capitalisation as Child&apos;s-Eye Myth</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;Something Very Wrong&rdquo;, &ldquo;She&rdquo;, &ldquo;Her desk&rdquo;,
                  &ldquo;Time&rdquo;: the capitals convert ordinary school nouns into mythic proper
                  names, exactly reproducing the scale of things in a small child&apos;s world,
                  where the teacher is a goddess and a misdemeanour is a named Sin. The device also
                  lets the adult narrator smile over the child&apos;s head without ever mocking him.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sensory Imagery of the Timeless Moment</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the escape stanzas the imagery shifts from labels to senses: the smell of
                  fading chrysanthemums, minute sounds magnified by stillness (even a hangnail
                  becomes audible in the famous oxymoron of its &ldquo;silent noise&rdquo;), the air
                  beyond the window. Synaesthetic and paradoxical phrasing slows reading speed and
                  immerses us in the boy&apos;s absorption: language strains to record an experience
                  that exists below or before language.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Register Contrast: Officialese vs Wonder</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The school&apos;s language is procedural (wrongdoing, instructions, the clock,
                  being slotted back); the boy&apos;s language is narrative and sensuous. Fanthorpe
                  spent much of her career, in her own phrase, listening to the voiceless; here the
                  contrast of registers does the arguing. The institution speaks in categories, the
                  child in experience, and the poem sides with experience while staying
                  affectionately fair to the flustered teacher.
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
                <h4 className="font-bold text-primary">U. A. Fanthorpe (1929-2009) (AO3)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ursula Askham Fanthorpe taught English for sixteen years, becoming Head of English
                  at Cheltenham Ladies&apos; College, before deliberately walking away from
                  seniority to work as a clerk and receptionist in a Bristol neuropsychiatric
                  hospital. There, recording other people&apos;s case histories, she began
                  publishing poetry in middle age (her first collection, <em>Side Effects</em>,
                  appeared in 1978). Her work consistently gives voice to people on the wrong side
                  of institutional power: patients, children, the overlooked.
                  <em> Half-past Two</em> comes from her 1992 collection <em>Neck-Verse</em>.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Teacher&apos;s Poem About School</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fanthorpe knew the schoolroom from the teacher&apos;s side of the desk, which is
                  why the poem&apos;s satire is so precise and so forgiving. The teacher is not a
                  tyrant but an overworked adult running on timetable logic; the harm done is
                  systemic, not personal. Several of Fanthorpe&apos;s poems revisit school scenes
                  with the same double awareness of how institutions look from above and feel from
                  below; exam answers can use this biographical angle briefly to sharpen a point
                  about perspective (AO3).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Childhood Time in Literature</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The idea that children inhabit time differently, and that adulthood means being
                  conscripted into the clock, has a long literary history, from Romantic poetry
                  about childhood vision (Wordsworth, Blake) onwards. Fanthorpe&apos;s contribution
                  is distinctive in its method, recreating that vision through the child&apos;s own
                  mangled, magical vocabulary rather than describing it from outside. The poem can
                  be read as a small, secular version of the Romantic claim that the child sees a
                  world adults have stopped seeing.
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
                <h4 className="font-bold text-primary">Hide and Seek (Vernon Scannell)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The natural partner: both recreate a child&apos;s experience from the inside, both
                  isolate the child in a confined space (schoolroom, toolshed), and in both the
                  adult-or-peer world forgets the child. But the endings diverge sharply:
                  Fanthorpe&apos;s boy gains a luminous memory; Scannell&apos;s child is left alone
                  in the cold dark. Compare how each poet uses sensory detail and ending to shape
                  opposite emotional verdicts on a similar situation.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Piano (D. H. Lawrence)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both poems treasure a childhood moment recalled from adulthood. Lawrence&apos;s
                  adult is overwhelmed and weeps for the lost past; Fanthorpe&apos;s narrator stays
                  wry and contained, but the closing stanza admits the same truth: the childhood
                  moment was never forgotten. Compare nostalgic flooding versus ironic distance as
                  ways of handling memory.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">If- (Rudyard Kipling)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A sharp contrast in direction of address: Kipling is an adult instructing a child
                  in adult virtues, including filling &ldquo;the unforgiving minute&rdquo; with
                  purposeful effort; Fanthorpe shows a child whose finest moment comes from doing
                  nothing measurable at all. Set Kipling&apos;s mastery of time against
                  Fanthorpe&apos;s escape from it.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>Half-past Two</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO2: name the signature techniques.</strong> Compound coinages,
              capitalisation, fairy-tale framing, personification of the clock and the oxymoronic
              sensory details. Always pair the device with its effect on perspective.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO1: keep the double perspective in view.</strong> Child focalisation plus
              adult retrospect. The brackets and the final stanza are where the adult voice
              surfaces; quote them when discussing tone.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Structure questions: use the three time-worlds.</strong> Clock time, named
              event-time, and the timeless &ldquo;land of ever&rdquo;, with the teacher&apos;s
              return as the structural snap back.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO3: deploy Fanthorpe&apos;s biography in one sentence.</strong> A former
              teacher who left to record the voices of the powerless; it explains the poem&apos;s
              fairness to the teacher and sympathy for the child.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Avoid the common misreading.</strong> The poem is not a cruelty story. The
              teacher is forgetful, not wicked, and the detention becomes a gift. Nuanced answers
              hold the comedy and the seriousness together.
            </span>
          </li>
        </ul>
      </div>

      {/* Rights notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Half-past Two</em> by U. A. Fanthorpe (1929-2009) was published in
          <em> Neck-Verse</em> (Peterloo Poets, 1992) and remains in copyright. Quotations on this
          page are short fair-dealing extracts under CDPA 1988 s.30 (criticism, review and
          quotation). For the full text, students should consult the Edexcel-licensed school
          anthology or Fanthorpe&apos;s <em>New and Collected Poems</em>.
        </p>
      </footer>
    </>
  )
}
