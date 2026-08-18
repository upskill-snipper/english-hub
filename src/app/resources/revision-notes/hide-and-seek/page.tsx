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
          A complete GCSE guide to Scannell&apos;s unsettling poem about a children&apos;s game that
          turns into abandonment: the second-person voice, the single block of present-tense verse,
          themes of isolation and betrayal, key quotations with analysis, context and exam tips.
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
                boy finds a brilliant hiding place among the sacks in a garden toolshed, calls out
                the challenge (&ldquo;I&apos;m ready! Come and find me!&rdquo;) and settles down to
                outlast the seekers. We follow his tactics in real time: keep still, don&apos;t
                sneeze, ignore the cold, wait them out even when their whispers fade. At last,
                certain of victory, he pushes out of the shed to claim his triumph, and finds the
                garden dark, cold and empty. The seekers stopped seeking long ago. The poem ends on
                his unanswered question: where are they?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On the surface this is a perfectly observed slice of childhood. Underneath, it is a
                small parable (AO1): the hider wins the game and loses everything that made the game
                worth playing. Skill, patience and cleverness are rewarded with solitude. Many
                readers take the game as a metaphor for experiences that come later in life: the
                discovery that the world has moved on without you, that triumph can be
                indistinguishable from abandonment, that hiding too well is a way of being
                forgotten. Scannell keeps every detail literal and childlike, which is exactly why
                the ending lands so hard.
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
                <h4 className="font-bold text-primary">One Unbroken Block (AO2)</h4>
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
                  Everything happens in the present: call out, crouch, hold your breath, push off
                  the sacks. The present tense removes the safety net of retrospect (compare the
                  remembering adult narrators of Half-past Two or Piano). No one is looking back on
                  this and telling us it turned out fine; we are shut in the shed with the child as
                  time passes and the light goes. The tense is the poem&apos;s main engine of
                  suspense (AO2).
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
                  he bursts out to claim his win and the poem abruptly widens its lens: a dark
                  garden, cold air, silence. The last line is a question with no one left to answer
                  it, an open ending that refuses the consolation of resolution.
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
                &ldquo;you&rdquo;, and the lines are largely commands: call out, don&apos;t breathe,
                don&apos;t move. The voice can be heard in several ways, and good answers explore
                more than one (AO1). It may be the boy&apos;s own inner voice, coaching himself
                through the game in the way children narrate their own play. It may be the voice of
                the game itself, the rule-book of hide and seek issuing its instructions. Or it may
                be an older, knowing voice, almost a fate, guiding the child step by step towards a
                disillusionment it can foresee and he cannot.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The second person also conscripts the reader. &ldquo;You&rdquo; are the one
                crouching in the salty dark, &ldquo;your&rdquo; legs stiffen, and at the end the
                question of where everyone has gone is addressed to &ldquo;you&rdquo;. The grammar
                makes the abandonment universal: this is not one boy&apos;s bad afternoon but an
                experience the poem insists we recognise as our own. The tone modulates from gleeful
                (the boast of the opening call) through tense practical cunning, to the flat,
                exposed quiet of the ending.
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
              Short phrases only are quoted here (the poem is in copyright). Pair each with a
              method: imperative voice, sensory imagery, personification or the structural turn
              (AO2).
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="I'm ready! Come and find me!"
                speaker="Opening line (after the stacked commands to call out, and loudly)"
                analysis="The poem begins at full volume with imperatives and the ritual cry of the game. The confidence is total: the boy wants to be sought, because being sought is being wanted. Dramatic irony begins here too: the only moment he makes himself easy to find is the moment the poem opens, and he will spend the rest of it perfecting his own disappearance. The exclamation marks will have no echo at the end, when his shouts meet silence."
              />
              <QuoteCard
                quote="The sacks in the toolshed smell like the seaside"
                speaker="Early lines"
                analysis="A child's simile, and a brilliant one: the sandy, salty sacks turn the dark shed into a holiday memory. The association makes the hiding place feel safe and even pleasurable at first, all adventure and familiarity. Scannell then slowly sours the same sensory channel: the seaside smell becomes a dark, damp saltiness that catches in the throat as time drags on. Tracking this one image across the poem is a ready-made AO2 paragraph on how atmosphere is transformed."
              />
              <QuoteCard
                quote="Don't breathe. Don't move. Stay dumb."
                speaker="As the seekers approach"
                analysis="Clipped imperatives, hammering like a held heartbeat as footsteps and whispers come close. The commands ask the boy to erase himself sense by sense: no breath, no motion, no voice, and then, in the line's final command, to 'hide in your blindness'. That last phrase is the most striking: his closed-eyes child logic (if I can't see them, they can't see me) becomes an image of wilful unseeing. He is so good at not being found that he cannot see what is actually happening: the seekers are about to give up."
              />
              <QuoteCard
                quote="whispering at the door"
                speaker="The seekers' closest approach"
                analysis="The high point of the game's thrill. The seekers' hushed voices just beyond the shed door create the delicious tension hide and seek exists for: nearness without discovery. It is also the last contact the boy has with other human beings in the poem. After the prowling and whispering fade, every sound that remains is environmental: wind, cold, silence. The poem lets companionship exit quietly, through a door that never opens."
              />
              <QuoteCard
                quote="The cold bites through your coat"
                speaker="The long wait"
                analysis="As the wait stretches, the body starts filing complaints: stiff legs, numb feet, cold with teeth. The personification of the biting cold makes the environment an active aggressor, the first hint that the setting has turned hostile. Time is passing in the only way the hidden boy can measure it, through discomfort, and the reader grasps what he refuses to: nobody stays this cold, this long, in a game that is still being played."
              />
              <QuoteCard
                quote="It's time to let them know that you're the winner"
                speaker="The decision to emerge"
                analysis="The boy ends his vigil not because he doubts, but because he is sure: he has won and now wants the payoff, the faces of the defeated seekers. 'Winner' is the poem's most ironic word (AO2): he is technically correct, since no one found him, and the technicality is worthless. The line's jaunty rhythm walks him straight into the poem's trap. Victory in the game and defeat in the world arrive in the same instant."
              />
              <QuoteCard
                quote="The darkening garden watches. Nothing stirs."
                speaker="The ending"
                analysis="The emergence. Two short sentences drain all the warmth from the poem. The personified garden 'watches', but with none of the playful attention of seekers; this is the blank, indifferent gaze of a world that was not waiting for him. 'Darkening' tells us how much time has truly passed. The full stop after 'Nothing stirs' is one of the bleakest in GCSE poetry: the game's noisy, peopled world has been replaced by stillness."
              />
              <QuoteCard
                quote="The bushes hold their breath"
                speaker="The ending"
                analysis="A devastating transfer of imagery. Earlier, the boy held his breath so as not to be found; now the bushes hold theirs. The hiding behaviour he performed inside the shed has spread to the whole garden, as if the entire world is now hiding from him. The personification keeps the child's imaginative way of seeing intact even at the moment it turns against him, which is far more painful than a plain description of an empty garden would be."
              />
              <QuoteCard
                quote="But where are they who sought you?"
                speaker="Final line"
                analysis="The poem ends on an unanswered, unanswerable question. The formal, almost archaic phrasing ('they who sought you') elevates the moment from playground to parable: this is no longer about one game but about anyone who has ever been sought, and then no longer sought. Addressed to 'you', the question lands on the reader as much as the boy. No comfort, no adult arriving, no lesson stated: just the question, and the dark."
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
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem works through the body: the salty smell of the sacks, the cold floor,
                  stiff legs, held breath, whispers through a door, sand in the throat. Because the
                  boy cannot use his eyes (he is hiding in the dark with them shut), smell, touch
                  and hearing carry the narrative, which is why the imagery feels so claustrophobic
                  and immediate (AO2). When sight finally returns at the end, what it delivers is
                  emptiness.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Seaside Motif Turned Sour</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The opening simile links the sacks to the seaside: holidays, pleasure, safety. As
                  the wait lengthens, the same sandy saltiness becomes uncomfortable, dark and damp,
                  moving in the throat. One image system, charted from delight to oppression, gives
                  you the poem&apos;s whole emotional arc in miniature, and examiners reward
                  candidates who track an image across a text rather than spotting it once.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Personification of the Setting</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Scannell animates the world around the boy: cold that bites, a garden that
                  watches, bushes that hold their breath, sun gone from the sky. Early in the poem
                  the animated world is an accomplice in the game; by the end it is a witness,
                  silent and unhelpful. The technique keeps us inside a child&apos;s animistic
                  imagination while quietly reversing its emotional charge.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Imperatives and Short Sentences</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem&apos;s syntax is built from commands and brief declaratives. During the
                  game, the short sentences are tactical, a checklist of survival. At the end, the
                  same clipped syntax becomes desolate: stillness described in full-stopped
                  fragments. The grammar barely changes; the world it describes changes completely.
                  That contrast is a subtle, high-reward point for structure questions (AO2).
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
                <h4 className="font-bold text-primary">Vernon Scannell (1922-2007) (AO3)</h4>
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
                  hiding wrote one of the great poems about a hider. Use this carefully (AO3): the
                  poem never mentions war or desertion, and it must be analysed as the childhood
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
              <strong>AO2: lead with voice and tense.</strong> Second-person imperatives plus
              real-time present tense are the poem&apos;s defining methods; explain how they create
              immersion, suspense and universality before discussing individual images.
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
              <strong>AO1: argue an interpretation of the ending.</strong> Casual forgetfulness,
              deliberate desertion, or a parable about self-concealment: commit to a reading,
              support it, and acknowledge the poem&apos;s deliberate ambiguity.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>AO3: one sentence of Scannell is enough.</strong> Soldier, deserter, boxer,
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
