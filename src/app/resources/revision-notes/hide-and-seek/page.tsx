'use client'

import { useState } from 'react'

/* 26 September 2026: brought within the fair-dealing share. Hide and Seek is in UK copyright
   and this page quoted 63 distinct words of it against a cap of 34 (15 per cent of the poem,
   measured by src/__tests__/no-poem-quoted-beyond-fair-dealing.test.ts). A first pass cut it to
   the seaside simile, the line of commands, winner, the watching garden, the bushes and the
   closing question. The measure then began counting the whole route, and the layout mounts the
   study guide (src/data/study-guides/hide-and-seek.ts) through GuideSupplement: the route has
   ONE budget, the guide's verified quotations already spend 32 words of it, and page and guide
   together quoted 54. So this page now quotes only phrases the guide also quotes (winner, the
   whispering at the door, the command about blindness, the watching garden, the bushes holding
   their breath and they who sought you), which cost nothing because a span inside a longer one
   is counted once. The seaside simile, the first three commands of line 11, the two-word
   sentence of line 25 and the whole final question are described instead. Do not quote a word
   the guide does not quote: at most two more fit, and the guide may change. The measure counts
   only words in quotation marks, so a description that repeats the poem's wording unmarked is
   still a taking it cannot see. The same day a check against the anthology text found several
   (an imperative from the emergence, a two-word image of the shed, the commands repeated in
   Voice & Speaker) and they were reworded. A second check found a run hidden by a changed
   pronoun (the cold and the coat, in the long-wait card) and the seekers' approach retold in
   the poem's own verbs in the whispering card; both were reworded too. Change a pronoun or a
   determiner and the wording is still the poem's. Keep descriptions in the site's own words. */

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

/** A paraphrased card prints no quotation marks: its words are the site's, not the poem's. */
function QuoteCard({
  quote,
  speaker,
  analysis,
  paraphrase = false,
}: {
  quote: string
  speaker?: string
  analysis: string
  paraphrase?: boolean
}) {
  return (
    <div className="rounded-lg border-s-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      {paraphrase ? (
        <p className="text-sm font-semibold text-violet-800 dark:text-violet-200">
          <span className="me-2 rounded bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            Paraphrase
          </span>
          {quote}
        </p>
      ) : (
        <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
          &ldquo;{quote}&rdquo;
        </p>
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

export default function HideAndSeekPage() {
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
          Hide and Seek: Revision Notes
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Vernon Scannell (1922-2007)</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A complete International GCSE guide to Scannell&apos;s unsettling poem about a
          children&apos;s game that turns into abandonment: the second-person voice, the single
          block of present-tense verse, themes of isolation and betrayal, key quotations with
          analysis, context and exam tips.
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
                <strong>Hide and Seek</strong> drops us into the middle of a children&apos;s game. A
                child finds a brilliant hiding place among the sacks of a garden toolshed, calls out
                the ritual challenge, announcing that he is ready and daring the others to find him,
                and settles down to outlast the seekers. We follow his tactics in real time: keep
                still, don&apos;t sneeze, ignore the cold, wait them out even when their whispers
                fade. At last, certain of victory, he bursts from his hiding place to claim his
                triumph, and finds the garden growing dark, silent and empty. The seekers stopped
                seeking long ago. The poem ends on his unanswered question about where everyone has
                gone.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On the surface this is a perfectly observed slice of childhood. Underneath, it is a
                small parable: the hider wins the game and loses everything that made the game worth
                playing. Skill, patience and cleverness are rewarded with solitude. Many readers
                take the game as a metaphor for experiences that come later in life: the discovery
                that the world has moved on without you, that triumph can be indistinguishable from
                abandonment, that hiding too well is a way of being forgotten. Scannell keeps every
                detail literal and childlike, which is exactly why the ending lands so hard.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  At a Glance
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; A single continuous block of verse, no stanza breaks</li>
                  <li>&bull; Present tense throughout: the game unfolds in real time</li>
                  <li>&bull; Second-person address (&ldquo;you&rdquo;) with imperative commands</li>
                  <li>&bull; Irregular, intermittent rhyme beneath a conversational surface</li>
                  <li>&bull; Core idea: a child&apos;s game becomes a lesson in abandonment</li>
                  {/* 26 September 2026: these notes called the child a boy as if the poem said
                      so. It never does; it only says "you". The convention is now stated. */}
                  <li>
                    &bull; The child is never named or called a boy or a girl: the poem only says
                    &ldquo;you&rdquo;. These notes use <em>he</em> for ease of reading
                  </li>
                  {/* 26 September 2026: this said English Language A as well. Hide and Seek is
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
                <h4 className="font-bold text-primary">One Unbroken Block</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem has no stanza breaks: a single paragraph of verse that mirrors the single
                  unbroken stretch of the boy&apos;s hiding. There is no white space to rest in,
                  just as there is no pause in his vigil. The continuous form also makes the ending
                  more brutal: the reader, like the boy, gets no structural warning that the game
                  has already ended somewhere outside the poem.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Real-Time Present Tense</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Everything happens in the present: shout, crouch, stop breathing, shove the sacks
                  aside. The present tense removes the safety net of retrospect (compare the
                  remembering adult narrators of Half-past Two or Piano). No one is looking back on
                  this and telling us it turned out fine; we are shut in the shed with the child as
                  time passes and the light goes. The tense is the poem&apos;s main engine of
                  suspense.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Structure of Rising Confidence, Sudden Fall
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem&apos;s shape is a slow build and a swift collapse. Confidence rises
                  through the middle: the seekers come whispering, fail to find him, and their
                  voices recede; the boy congratulates himself on his cleverness and endures cold
                  and stiffness as the price of victory. The turn comes in the final few lines, when
                  he bursts out to claim his win and the poem abruptly widens its lens: a garden
                  going dark, the sun gone, silence. The last line is a question with no one left to
                  answer it, an open ending that refuses the consolation of resolution.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Buried Rhyme</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Scannell threads irregular rhymes and half-rhymes through the conversational
                  lines. The rhymes are easy to miss on first reading, like the danger in the poem:
                  a game-like pattern is quietly operating underneath, but it never settles into a
                  reliable scheme. The instability of the sound patterning matches a game whose
                  rules will be silently broken by the other players.
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
                The poem&apos;s most distinctive choice is its second-person voice. The child is
                &ldquo;you&rdquo;, and many of the lines are commands: shout, stop breathing, keep
                still. The voice can be heard in several ways, and good answers explore more than
                one. It may be the boy&apos;s own inner voice, coaching himself through the game in
                the way children narrate their own play. It may be the voice of the game itself, the
                rule-book of hide and seek issuing its instructions. Or it may be an older, knowing
                voice, almost a fate, guiding the child step by step towards a disillusionment it
                can foresee and he cannot.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The second person also conscripts the reader. &ldquo;You&rdquo; are the one
                crouching in the dark among the sacks, the stiffening legs are the reader&apos;s
                own, and at the end the question of where everyone has gone is addressed to
                &ldquo;you&rdquo;. The grammar makes the abandonment universal: this is not one
                child&apos;s bad afternoon but an experience the poem insists we recognise as our
                own. The tone modulates from gleeful (the boast of the opening call) through tense
                practical cunning, to the flat, exposed quiet of the ending.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Discussion Point
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Did the friends ever intend to find him, or did they abandon the game casually,
                  without malice? The poem withholds the answer, and the uncertainty is the point:
                  the hurt of being forgotten rarely comes with an explanation.
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
                title="Isolation and Abandonment"
                description="The poem moves from chosen solitude (hiding is the whole point of the game) to imposed solitude (everyone has gone). The boy's isolation is at first a strategy, then an endurance test, and finally a condition. Scannell catches the precise moment self-reliance tips into loneliness. The final image of the watching garden and the unanswered question makes the abandonment feel absolute: not just that the friends left, but that the world itself has withdrawn its attention."
              />
              <ThemeCard
                title="Childhood and the Loss of Innocence"
                description="Games are how children rehearse the world, and this game teaches a bitter adult lesson: trust is conditional, and others' interest in you can quietly expire. The boy plays by the rules with total commitment; the others simply stop playing. Nothing violent happens, no one is cruel to his face, yet the poem reads as a fall from innocence. The darkening of the garden across the poem tracks the darkening of the child's world: the same place that hosted the game becomes cold, silent and indifferent."
              />
              <ThemeCard
                title="Pride Before a Fall"
                description="The boy's self-congratulation is lovingly detailed: the certainty that his hiding place is unbeatable, the resolve to outlast every search, the triumphant burst from the shed to claim victory. The structure punishes that confidence with a swiftness that feels almost cruel. Yet the poem does not mock him; his cleverness is real. The tragedy is that he wins. Hide and Seek is one of literature's neatest demonstrations that you can follow every rule, beat the game, and still lose."
              />
              <ThemeCard
                title="Appearance of a Game, Reality of a Test"
                description="Read metaphorically, the poem is about more than one afternoon. Hiding can stand for any self-protective withdrawal: from intimacy, from risk, from being known. The poem suggests that those who hide too well, who make themselves too hard to find, may emerge to discover that people stopped looking. Some readers, knowing Scannell's history as a soldier and deserter who spent years in hiding from authority, hear an autobiographical undertone, but the poem keeps its surface entirely a child's."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The poem is in copyright, so only a few short phrases are quoted here; the other key
              moments are described in paraphrase, and you should find their exact words in your
              anthology. Pair each with a method: imperative voice, sensory imagery, personification
              or the structural turn.
            </p>
            <div className="space-y-1">
              <QuoteCard
                paraphrase
                quote="The ritual cry of the game: he tells the others he is ready and dares them to find him"
                speaker="Line 1, after the two commands that open the poem"
                analysis="The poem begins at full volume, with commands and the ritual cry of the game. The confidence is total: the boy wants to be sought, because being sought is being wanted. Dramatic irony begins here too: he opens the poem inviting the others to find him, then spends most of it perfecting his own disappearance. The cry ends in exclamation marks, and they return when he bursts from his hiding place to claim his win; this time nothing answers them."
              />
              <QuoteCard
                paraphrase
                quote="The first image is a simile of smell: the sacks the child hides among have a smell that recalls the sea"
                speaker="Line 2"
                analysis="A child's simile, and a brilliant one: with the salt the next line adds, the sacks turn the dark shed into a holiday memory. The association makes the hiding place feel safe and even pleasurable at first, all adventure and familiarity. Scannell returns to the same sense late in the wait, when the smell is of damp sand and it catches in the child's throat. Tracking this one image across the poem is a ready-made paragraph on how atmosphere is transformed."
              />
              <QuoteCard
                quote="Hide in your blindness"
                speaker="Line 11, as the seekers approach"
                analysis="Line 11 is four clipped commands, hammering like a held heartbeat as the seekers come close enough to be heard. The first three ask the boy to erase himself piece by piece: no breath, no movement, no sound. The fourth, quoted here, is the most striking of all: in the dark of the shed he cannot see, and the command makes that blindness his hiding place, as if not seeing were a way of not being seen. It is also a picture of what he misses. He is so good at not being found that he cannot see what is actually happening: within a few lines the seekers have gone, and, it turns out, they never come back."
              />
              <QuoteCard
                quote="whispering at the door"
                speaker="The seekers arrive"
                analysis="The high point of the game's thrill. The seekers' hushed voices just beyond the shed door create the delicious tension hide and seek exists for: nearness without discovery. It is also the last time they are close: they edge nearer, one of them trips, and a line later they have gone. From then on the seekers exist only in the boy's guesses about where they are searching, and what remains is the shed and the body: cold, damp, stiffness and, at the end, a stillness nobody breaks. Companionship leaves the poem almost as soon as it arrives."
              />
              <QuoteCard
                paraphrase
                quote="As the wait drags on, his body pays for it: his legs stiffen, the cold gnaws at him, and a damp, sandy smell reaches his throat"
                speaker="The long wait"
                analysis="As the wait stretches, the body starts filing complaints. Scannell gives the cold a verb of attack, as if it had teeth, and that personification makes the environment an active aggressor, the first hint that the setting has turned hostile. Time is passing in the only way the hidden boy can measure it, through discomfort, and the reader grasps what he refuses to: nobody stays this cold, this long, in a game that is still being played."
              />
              <QuoteCard
                paraphrase
                quote="He decides the moment has come to show the others that he has won"
                speaker="The decision to emerge"
                analysis="The boy ends his vigil not because he doubts, but because he is sure: he has won and now wants the payoff, the faces of the defeated seekers. The line's key word, 'winner', is the poem's most ironic: he is technically correct, since no one found him, and the technicality is worthless. His jaunty confidence walks him straight into the poem's trap. Victory in the game and defeat in the world arrive in the same instant."
              />
              <QuoteCard
                quote="The darkening garden watches"
                speaker="Line 25, what he finds when he emerges"
                analysis="Line 25 is two short sentences, and they drain all the warmth from the poem. The personified garden 'watches', but with none of the playful attention of seekers; this is the blank, indifferent gaze of a world that was not waiting for him. The word 'darkening' tells us how much time has truly passed. The second sentence is only two words long and reports that there is no movement anywhere; the full stop that ends it is one of the bleakest in the anthology: the game's noisy, peopled world has been replaced by stillness."
              />
              <QuoteCard
                quote="hold their breath"
                speaker="Line 26: the bushes"
                analysis="A devastating transfer of imagery. Earlier, the boy was ordered to stop breathing so as not to be found; now it is the bushes that do so. The hiding behaviour he performed inside the shed has spread to the whole garden, as if the entire world is now hiding from him. The personification keeps the child's imaginative way of seeing intact even at the moment it turns against him, which is far more painful than a plain description of an empty garden would be."
              />
              <QuoteCard
                quote="they who sought you"
                speaker="Final line"
                analysis="The poem ends on its only question, asking where the seekers are, and nobody is left to answer it. The formal, almost archaic phrasing elevates the moment from playground to parable: this is no longer about one game but about anyone who has ever been sought, and then no longer sought. The past tense of sought tells the reader that the seeking ended before the child knew. Addressed to 'you', the question lands on the reader as much as the boy. No comfort, no adult arriving, no lesson stated: just the question, and the dark."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── LANGUAGE & IMAGERY */}
        <div id="language-imagery">
          <Section title="Language & Imagery" icon="🎨">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sensory Immersion</h4>
                {/* 26 September 2026: this said he hid with his eyes shut, and the quotation
                    card above called it closed-eyes logic. The poem says neither; the dark of
                    the shed is what blinds him. */}
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem works through the body: the salty smell of the sacks, the cold floor,
                  stiff legs, held breath, whispers through a door, sand in the throat. Because the
                  boy cannot see in the dark of the shed, smell, touch and hearing carry the
                  narrative, which is why the imagery feels so claustrophobic and immediate. When
                  sight finally returns at the end, what it delivers is emptiness.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Seaside Motif Turned Sour</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The opening simile links the sacks to the seaside: holidays, pleasure, safety. As
                  the wait lengthens, the smell comes back as damp sand and catches in the throat.
                  One image system, charted from delight to oppression, gives you the poem&apos;s
                  whole emotional arc in miniature, and examiners reward candidates who track an
                  image across a text rather than spotting it once.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Personification of the Setting</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Scannell animates the world around the boy: cold that bites, a garden that
                  watches, bushes as breathless as the boy was, sun gone from the sky. Early in the
                  poem the animated world is an accomplice in the game; by the end it is a witness,
                  silent and unhelpful. The technique keeps us inside a child&apos;s animistic
                  imagination while quietly reversing its emotional charge.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Imperatives and Short Sentences</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem&apos;s syntax is built from commands and brief declaratives. During the
                  game, the short sentences are tactical, a checklist of survival. At the end, the
                  same clipped syntax becomes desolate: stillness described in short, full-stopped
                  sentences. The grammar barely changes; the world it describes changes completely.
                  That contrast is a subtle, high-reward point for structure questions.
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
                <h4 className="font-bold text-primary">Vernon Scannell (1922-2007)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Scannell&apos;s life was as turbulent as his poems are controlled. He served as an
                  infantryman in the Second World War, fought through North Africa and was wounded
                  in Normandy, and deserted more than once, spending periods in military prison and
                  on the run under an assumed name. He was also a skilled boxer who for a time
                  earned his living in the ring. His poetry returns again and again to violence,
                  fear and their echoes in ordinary domestic life, and especially to childhood,
                  which he treats without sentimentality: his children inhabit a world where menace
                  and games share the same garden.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Poet of Aftermath and Hiding</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  It is hard not to notice that a man who spent years of his life literally in
                  hiding wrote one of the great poems about a hider. Use this carefully: the poem
                  never mentions war or desertion, and it must be analysed as the childhood
                  narrative it is. But Scannell&apos;s recurring preoccupations, the cost of
                  self-concealment, the moment the world stops looking for you, the discovery that
                  safety and abandonment can be the same condition, plainly inform the poem&apos;s
                  emotional accuracy.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Childhood Poem Tradition</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Mid-twentieth-century British poetry produced a strong line of unsentimental
                  childhood poems, in which games, schoolrooms and gardens become the settings for
                  first encounters with fear, time and loss. Within the Edexcel anthology, Hide and
                  Seek sits alongside Half-past Two and Piano as studies of childhood experience,
                  but it is the darkest of the three: its child is not rescued by a returning adult
                  or consoled by memory. The poem trusts the reader to feel the weight of an ending
                  it refuses to soften.
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
                <h4 className="font-bold text-primary">Half-past Two (U. A. Fanthorpe)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The classic pairing. Both isolate a child in a confined space after the adult or
                  peer world forgets him, and both render the experience from inside the
                  child&apos;s perception. The crucial difference is the verdict: Fanthorpe&apos;s
                  forgotten boy finds a timeless, treasured freedom; Scannell&apos;s finds a dark,
                  empty garden. Compare the role of the endings, and of tense: Fanthorpe&apos;s
                  retrospective telling guarantees survival, Scannell&apos;s present tense
                  guarantees nothing.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Piano (D. H. Lawrence)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both poems treat childhood as emotionally decisive territory, but from opposite
                  ends of life. Lawrence&apos;s adult longs to return to a childhood of warmth and
                  belonging; Scannell shows childhood already containing the loneliness adults
                  remember learning. Compare the warm interior of Piano with the cold shed and
                  garden, and the flood of nostalgia with the withholding of comfort.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Prayer Before Birth (Louis MacNeice)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Two poems about a vulnerable child facing a world that cannot be trusted.
                  MacNeice&apos;s unborn speaker fears the world&apos;s betrayals in advance;
                  Scannell&apos;s boy experiences one in miniature. Both use insistent, rhythmically
                  driven lines and end without reassurance. Compare the cosmic scale of
                  MacNeice&apos;s dread with the domestic scale of Scannell&apos;s, and which proves
                  more affecting.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>Hide and Seek</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Lead with voice and tense.</strong> Second-person imperatives plus real-time
              present tense are the poem&apos;s defining methods; explain how they create immersion,
              suspense and universality before discussing individual images.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Track one image across the poem.</strong> The seaside smell of the sacks, from
              holiday pleasure to throat-catching damp, demonstrates development rather than
              technique-spotting, which is what top bands require.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Argue an interpretation of the ending.</strong> Casual forgetfulness,
              deliberate desertion, or a parable about self-concealment: commit to a reading,
              support it, and acknowledge the poem&apos;s deliberate ambiguity.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              {/* 26 September 2026: the AO3 labels on this page named context. In 4ET1, AO3
                  is links between texts, and the anthology poetry section assesses AO2 and AO3
                  only (specification, Paper 1 Section B), so context earns no marks there. */}
              <strong>One sentence of Scannell is enough, if any.</strong> The anthology poetry
              question rewards analysis and comparison, not context. Soldier, deserter, boxer,
              unsentimental poet of childhood fear; connect it to the poem&apos;s refusal of
              comfort, not to biographical speculation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the structural turn.</strong> Whatever the question, the pivot from
              triumphant emergence to empty garden is the poem&apos;s key moment; quote the watching
              garden and the final question, and analyse the silence they create.
            </span>
          </li>
        </ul>
      </div>

      {/* Rights notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Hide and Seek</em> by Vernon Scannell (1922-2007) remains in copyright. Quotations on
          this page are short fair-dealing extracts under CDPA 1988 s.30 (criticism, review and
          quotation). For the full text, students should consult the Edexcel-licensed school
          anthology or Scannell&apos;s collected poems.
        </p>
      </footer>
    </>
  )
}
