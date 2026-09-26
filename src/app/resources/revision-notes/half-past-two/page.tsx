'use client'

import { useState } from 'react'

/*
 * 26 September 2026: brought within the fair-dealing share. Half-past Two is in
 * UK copyright (Fanthorpe died in 2009), and this page quoted 74 distinct words
 * of its 199 against a cap of 29 (15 per cent, as
 * no-poem-quoted-beyond-fair-dealing.test.ts measures it). It now quotes a few
 * short phrases where the analysis leans on them hardest, each in one card; the
 * other cards describe their moment in the site's own words, and the rest of
 * the page refers back. It sits at its cap, so do not add quotations: that test
 * counts every quoted word, in any string on the page.
 *
 * A paraphrase must be the site's words, not the poem's with a word swapped. The
 * first pass left a card that was a poem line with two words changed, printed in
 * bold where the quotation used to be, and lists that spelled out the boy's
 * coinages with the spaces put back; the measure cannot see either, since
 * neither is in quotation marks. Both are now described instead. A quotation
 * also keeps the poem's case: the final-stanza card once opened sentences with
 * its phrases capitalised, which the poem prints in lower case.
 *
 * ONE BUDGET FOR THE ROUTE (26 September 2026, later the same day). layout.tsx
 * mounts GuideSupplement with src/data/study-guides/half-past-two.ts, which
 * prints its own short quotations on this route. The test once followed only
 * this file's imports, so the two were counted apart; it now follows the layout
 * too, and the route as served quoted 44 distinct words against the cap of 29.
 * The guide takes all 29 on its own: 25 in its verified quotations, and 4 from
 * the route path in its `native.keyQuotes`, a quotation field the scanner reads
 * like any other. So this page quotes only phrases the guide already quotes,
 * which cost nothing counted once: the opening line is described rather than
 * quoted, and the cards on the teacher's return and the final line quote only
 * the single words the guide quotes.
 * Before adding a quotation here, check that the guide quotes the same phrase
 * or a longer one containing it: a phrase that merely shares words with the
 * guide's is counted in full.
 */

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
        className="flex w-full items-center justify-between px-5 py-4 text-start hover:bg-muted transition-colors"
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

/** A quotation, or where the poem is not quoted, the moment described in our own words. */
function QuoteCard({
  quote,
  moment,
  speaker,
  analysis,
}: {
  quote?: string
  moment?: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-s-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      {quote ? (
        <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
          &ldquo;{quote}&rdquo;
        </p>
      ) : (
        <p className="text-sm font-semibold text-violet-800 dark:text-violet-200">{moment}</p>
      )}
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
          A complete International GCSE guide to Fanthorpe&apos;s gently subversive poem about a
          small boy kept in the schoolroom as a punishment who cannot tell the time: the
          child&apos;s-eye narration, the invented compound words, themes of time, authority and
          escape, key quotations with analysis, context and exam tips.
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
                something wrong at school, an offence the poem dignifies with capital letters but so
                trivial that the adult narrator admits it has slipped from memory, and his teacher
                keeps him behind in the classroom as a punishment until half-past two. But she has
                overlooked one thing: she has never shown him how to read a clock. Left alone,
                unable to find half-past two anywhere in his world of named times, each called after
                what happens in it (getting up, television, a kiss), the boy slips out of measured
                time altogether into a dreamy, timeless present, until the teacher rushes back,
                releases him, and normal scheduled life resumes.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The punishment accidentally becomes a gift. For a few unmeasured minutes the boy
                lives beyond the clock&apos;s ticking, fully absorbed in smells, sounds and
                stillness, an escape the adult world rarely allows. The final stanza tells us the
                memory never left him. Fanthorpe, who spent years as a teacher, writes with double
                vision: the poem is funny about adult forgetfulness and bureaucratic time, and
                quietly serious about what children know that adults have lost.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  At a Glance
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Eleven three-line stanzas (tercets) of free verse, no rhyme scheme</li>
                  <li>&bull; Third-person narration filtered through the child&apos;s mind</li>
                  <li>&bull; Fairy-tale opening line, grafted onto the school day</li>
                  <li>&bull; Invented compound words mimic how the child names his day</li>
                  <li>&bull; Core idea: clock time versus lived, timeless experience</li>
                  {/* 26 September 2026: this said English Language A as well. Half-past Two is
                      a Part 3 poem, set for English Literature (4ET1) only. */}
                  <li>
                    &bull; In Part 3 of the Pearson Edexcel International GCSE English Anthology:
                    set for English Literature (4ET1) only, not English Language A
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
                <h4 className="font-bold text-primary">Free Verse in Neat Tercets</h4>
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
                  The opening line (see Key Quotations) splices the fairy-tale formula onto the
                  school day. This does several things at once: it signals that we are entering a
                  child&apos;s way of understanding the world; it makes the teacher a fairy-tale
                  authority figure; and it hints that the event belongs to a distant, mythic past, a
                  memory the grown narrator is retelling. The narrative arc is simple and
                  satisfying: transgression, sentence, strange enchanted interlude, rescue, return,
                  and a closing moral-shaped stanza about what he has remembered all his life.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Structure of Time Itself</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem moves through three time-worlds: the schoolroom&apos;s adult clock time
                  (which the boy cannot enter), the child&apos;s home catalogue of named times (the
                  famous run of compound words), and the timeless country without clocks into which
                  he escapes. The teacher&apos;s return snaps him back with a mechanical verb (see
                  Key Quotations) that treats the boy like a component returned to its machine. The
                  final stanza steps outside the story into reflective adult retrospect, preserving
                  the escape as a permanent memory.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Parenthesis and Aside</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fanthorpe drops adult asides into brackets, such as the admission that the
                  narrator can no longer recall the boy&apos;s crime. The brackets create a second,
                  wry voice alongside the child&apos;s perspective, gently mocking the solemnity of
                  school justice: if the offence cannot even be remembered, how grave, for all its
                  capital letters, can it really have been?
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
                to the child: we get his capital letters (on the offence, on the pronoun for the
                teacher and on time itself), his coinages, his awe of the teacher and his ignorance
                of what clocks mean. This technique (sometimes called child-focalised narration)
                lets Fanthorpe be in two places at once: inside the boy&apos;s confusion and
                slightly above it, with an adult&apos;s amused, rueful hindsight.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The capitalisation is a precise piece of voice-work. To the boy, the capitalised
                pronoun makes the teacher not a person with a name but a power, almost a deity;
                time, capitalised too, is a mysterious adult subject, like a god he has not been
                introduced to; his offence is not described but labelled with the official gravity
                adults gave it. Meanwhile the teacher is fallible: she is short-tempered, she
                forgets things, and she is too hurried and busy to notice what her punishment has
                actually done. The power imbalance between child and adult is the poem&apos;s quiet
                subject, handled with comedy rather than anger.
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
                description="The poem opposes measured, adult clock time (timetables, half-past two, the school day) to lived time as a child experiences it: a sequence of events that matter to him, such as getting up, going home, television, tea and a kiss. The boy's named times are warm, bodily and relational; the clock's time is abstract and empty. When he cannot attach 'half-past two' to anything, time simply dissolves, and the poem suggests that this timeless absorption, not the clock, is the deeper reality. Adults have traded that timelessness for a timetable."
              />
              <ThemeCard
                title="Childhood Innocence and Adult Power"
                description="The boy is punished within a system whose rules he cannot fully read, by an authority he holds in religious awe. Already in disgrace and afraid of making things worse, he never mentions that she has not shown him how to read a clock, so the punishment quietly becomes absurd: a sentence the prisoner cannot measure. Fanthorpe is gentle with the teacher (she is forgetful, not cruel) but sharp about institutions: school turns a small child's day into offences, sentences and slots, and never notices what it cannot timetable."
              />
              <ThemeCard
                title="Escape and Transcendence"
                description="Left beyond the reach of the clock, the boy slips into a country without clocks (see Key Quotations), a state of pure present-tense attention to smells, faint sounds and silence. The poem treats this as a kind of accidental mysticism: the moment is out of time the way deep absorption always is. Crucially, the final stanza presents the escape as a single occasion, possible only while he could not read a clock; the adult world recaptures him and, the ending implies, he learns to read one like everyone else. But the memory persists for life, which is the poem's quiet claim about what childhood experience gives us and what schooling takes away."
              />
              <ThemeCard
                title="Language and Understanding"
                description="The poem is fascinated by how we name the world. The boy's compound coinages show him building time out of language he does own; the clock, whose face he knows but whose speech he cannot make sense of, shows meaning locked behind a code he has not been taught. Fanthorpe, a poet who loved giving voice to the overlooked, makes the child's homemade vocabulary more vivid and more truthful than the official vocabulary of school."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The poem is in copyright, so only a few short phrases are quoted here, and the rest of
              this page refers back to them. A card without quotation marks describes its moment in
              our own words: read those lines in your anthology. Learn the quotations and tie each
              to a method: coinage, capitalisation, personification or sensory imagery.
            </p>
            <div className="space-y-1">
              <QuoteCard
                moment="The poem opens with the fairy-tale formula, its last word turned into a school word"
                speaker="Opening line"
                analysis="The fairy-tale formula is hijacked and given a school uniform: the story opening every child knows keeps its shape, but school has moved into it. The blend signals immediately that we are in a child's imaginative register, where school is as strange and absolute as a kingdom in a story. It also frames the whole incident as legend: something that happened long ago and has been retold into myth by the adult remembering it."
              />
              <QuoteCard
                quote="Something Very Wrong"
                speaker="Stanzas 1-2"
                analysis="The capitals reproduce the way the adults' words landed on the child: not a description but a Title, an official category of sin. He is kept behind in the classroom for it, yet the narrator confesses in brackets to no longer remembering the offence. The gap between the huge label and the vanished offence is the poem's funniest and sharpest irony about school discipline (irony and capitalisation working together)."
              />
              <QuoteCard
                moment="In her anger the teacher has overlooked something: she never showed him how to read a clock"
                speaker="Stanza 3"
                analysis="The hinge of the plot, delivered with deadpan simplicity, and with time itself given a capital letter because, to the boy, it is a school subject and a mystery, something owned by adults. There is also a larger resonance: no one can really be taught time; the teacher herself only knows the clock-face code. Her forgetting is comic, but it exposes how much of adult authority rests on systems a child has simply not been initiated into."
              />
              <QuoteCard
                quote="Timeformykisstime"
                speaker="The catalogue of named times"
                analysis="The run-together compound words are the poem's signature device. The boy's day is told in homemade units, each named for what happens in it: getting up, going home, television, a kiss. Squashing the words together mimics how a child hears adult phrases as single magic sounds, and each names a relationship or comfort rather than a number. The bracketed aside that follows, renaming this one after his gran, is wonderfully tender: his time system is made of people who love him. Against this warm vocabulary, 'half-past two' means nothing at all."
              />
              <QuoteCard
                moment="The clock's face is familiar to him, and he sees a creature in it, but he cannot understand what it says"
                speaker="The clock, stanza 6"
                analysis="The boy personifies the clock: it has eyes and a pair of legs where an adult would see a dial and hands. He knows the creature by sight, but the verb the poem chooses for his failure to understand it, 'click', is brilliant, suggesting both the clock's ticking and the moment of comprehension that refuses to come (personification plus onomatopoeia). The image is exact child-logic, charming on the surface and pointed underneath: the clock is a living gatekeeper speaking a foreign tongue."
              />
              {/* 26 September 2026: this card quoted the line as ending "land of ever" and
                  read "ever" as a child's word; the anthology has "for ever", in the final
                  stanza. The misreading was also in the time and escape cards and an exam tip. */}
              <QuoteCard
                quote="clockless land for ever"
                speaker="Final stanza"
                analysis="The line around this phrase makes him an escapee, which recasts the detention: the prisoner gets free not from the room but from time itself. The phrase 'clockless land' makes timelessness a place, a country reachable only by those who cannot read clocks. The closing 'for ever' is quietly paradoxical: the escape lasted only until the teacher came back, yet the adult narrator calls it permanent, because the memory never left him. This is the poem's still centre: punishment transformed into the purest freedom in the poem."
              />
              <QuoteCard
                moment="Alone and outside time, he is absorbed in what he can smell and hear, starting with the teacher's chrysanthemums, which are past their best"
                speaker="The escape stanzas"
                analysis="Once outside time, the boy lives through his senses: the fading flowers on the teacher's desk, tiny sounds, whatever lies beyond the window. The sensory catalogue slows the poem's pace to match his absorption; even the slightly stale smell of flowers past their best becomes fascinating when attention is total. The poem capitalises the pronoun that marks the desk as the teacher's, which keeps her godlike even in her absence, while the boy quietly experiences something she has lost the ability to notice."
              />
              <QuoteCard
                quote="slotted"
                speaker="The teacher's return"
                analysis="The verb 'slotted' is mechanical: releasing him, the teacher files the boy away into the school day like a component returned to its place in the timetable machine. After the open timelessness of the escape, the word lands with a small clunk of confinement, and the line it sits in brings back the school word from the opening line, closing the fairy tale. The teacher means well (she comes hurrying in, flustered, exclaiming that he had slipped her mind), but the verb tells us what institutions do to children: they file them into time."
              />
              <QuoteCard
                quote="tick-less"
                speaker="Final line"
                analysis="The poem's closing image, and its most haunting. In the last line, time itself lies concealed in that clockless land, still unborn. Outside the clock's tick, time is not absent but not yet delivered: a pregnant stillness. The coinage 'tick-less' defines that state by the absence of the clock's sound, and the birth image suggests every measured moment is brought into the world out of this deeper timelessness. The same stanza says the place he found stayed with him always; the memory of escaping time outlives the learning of it. Link it to the theme of transcendence."
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
                  The fused coinages (the boy&apos;s own names for the times of getting up, going
                  home, television and a kiss, each run together without spaces) are the poem&apos;s
                  most distinctive technique. They turn the boy&apos;s schedule into a private
                  language learned by ear from adults, each unit anchored to an event or a person
                  rather than a number. When you analyse them, stress the contrast: his vocabulary
                  of time is concrete, loving and human; &ldquo;half-past two&rdquo; is abstract and
                  empty. The form of the words enacts the theme.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Capitalisation as Child&apos;s-Eye Myth</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The capitals on the offence (see Key Quotations), on the pronouns for the teacher
                  and on time itself convert ordinary school words into mythic proper names, exactly
                  reproducing the scale of things in a small child&apos;s world, where the teacher
                  is a goddess and a misdemeanour is a named Sin. The device also lets the adult
                  narrator smile over the child&apos;s head without ever mocking him.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sensory Imagery of the Timeless Moment</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the escape stanzas the imagery shifts from labels to senses: the scent of the
                  teacher&apos;s fading chrysanthemums, minute sounds magnified by stillness (even a
                  hangnail becomes audible in the famous oxymoron of its &ldquo;silent
                  noise&rdquo;), and whatever lies beyond the window. Synaesthetic and paradoxical
                  phrasing slows reading speed and immerses us in the boy&apos;s absorption:
                  language strains to record an experience that exists below or before language.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Register Contrast: Officialese vs Wonder</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The school&apos;s language is procedural (wrongdoing, instructions, the clock,
                  being filed back into the timetable); the boy&apos;s language is narrative and
                  sensuous. Fanthorpe&apos;s poetry repeatedly listens to people with little power;
                  here the contrast of registers does the arguing. The institution speaks in
                  categories, the child in experience, and the poem sides with experience while
                  staying affectionately fair to the flustered teacher.
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
                <h4 className="font-bold text-primary">U. A. Fanthorpe (1929-2009)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ursula Askham Fanthorpe taught English for sixteen years, becoming Head of English
                  at Cheltenham Ladies&apos; College, before deliberately walking away from
                  seniority to work as a clerk and receptionist in a Bristol neurological hospital.
                  There, recording other people&apos;s case histories, she began publishing poetry
                  in middle age (her first collection, <em>Side Effects</em>, appeared in 1978). Her
                  work consistently gives voice to people on the wrong side of institutional power:
                  patients, children, the overlooked.
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
                  below; exam answers can use this biographical angle in a clause to sharpen a point
                  about perspective, though the anthology poetry question does not award marks for
                  context itself.
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
                  in adult virtues, including making every second of every minute count with
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
              <strong>Name the signature techniques.</strong> Compound coinages, capitalisation,
              fairy-tale framing, personification of the clock and the oxymoronic sensory details.
              Always pair the device with its effect on perspective.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Keep the double perspective in view.</strong> Child focalisation plus adult
              retrospect. The brackets and the final stanza are where the adult voice surfaces;
              quote them when discussing tone.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Structure questions: use the three time-worlds.</strong> Clock time, named
              event-time, and the timeless country without clocks, with the teacher&apos;s return as
              the structural snap back.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              {/* 26 September 2026: the AO3 labels on this page named context. In 4ET1, AO3
                  is links between texts, and the anthology poetry section assesses AO2 and AO3
                  only (specification, Paper 1 Section B), so context earns no marks there. */}
              <strong>Keep Fanthorpe&apos;s biography to one sentence, if you use it.</strong> The
              anthology poetry question rewards analysis and comparison, not context. A former
              teacher who left to record the voices of the powerless; it explains the poem&apos;s
              fairness to the teacher and sympathy for the child.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Avoid the common misreading.</strong> The poem is not a cruelty story. The
              teacher is forgetful, not malicious, and the detention becomes a gift. Nuanced answers
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
