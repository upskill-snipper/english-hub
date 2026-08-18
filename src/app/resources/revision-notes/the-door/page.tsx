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

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
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

export default function TheDoorPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Poetry
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            GCSE
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            IGCSE
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Door &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          Miroslav Holub, translated by Ian Milner
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A short free-verse poem by the Czech poet and scientist Miroslav Holub, built around a
          single repeated command: go and open the door. This guide covers the poem&apos;s
          stanza-by-stanza movement, its imagery, its form, its Cold War context, and how to write
          about it in an exam, whether it appears as a set anthology poem or as an unseen text.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Poem Overview',
            'Voices and Images',
            'Themes',
            'Form and Techniques',
            'Context',
            'Key Phrases',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── OVERVIEW */}
        <div id="poem-overview">
          <Section title="Poem Overview: Stanza by Stanza" icon="📖" defaultOpen>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because the poem is still in copyright, these notes describe and analyse it rather
                than reprinting it. You should always work from the text in your anthology or
                classroom edition. The poem is short, unrhymed, and structured around one repeated
                imperative sentence addressed directly to the reader.
              </p>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Opening stanza: the widening list of possibilities
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The poem opens with its central command, then imagines what might lie outside:
                  perhaps a tree, or a wood, or a garden, or even &ldquo;a magic city&rdquo;. Notice
                  the structure of the list: it begins with a single ordinary object (a tree),
                  expands to a larger natural space (a wood), then to a cultivated, human space (a
                  garden), and finally leaps into pure fantasy. The word &ldquo;Maybe&rdquo; governs
                  everything: nothing is promised, only possibility. The speaker is not telling you
                  what you will find; the point is that you cannot know unless you act.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Second stanza: stranger, more unsettling images
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The second stanza repeats the command and offers a new set of possibilities, but
                  they are now odder and harder to interpret: a dog searching through something, a
                  face, an eye, or &ldquo;the picture of a picture&rdquo;. The images shrink and
                  fragment: from a whole creature, to a face, to a single eye, to an image of an
                  image, copies of copies receding away from anything solid. The world beyond the
                  door is not guaranteed to be beautiful or even comprehensible. Holub is honest:
                  openness to experience includes openness to the strange and the unreadable.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Third stanza: the shortest promise
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The third stanza is only a few lines long: if there is fog outside, it will clear.
                  This is the poem&apos;s one genuine reassurance, and it is significant that it is
                  attached to the one image of obscurity. Fog stands for confusion, uncertainty, not
                  being able to see ahead. The stanza&apos;s brevity mirrors its message: confusion
                  is temporary; do not let it stop you.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Fourth stanza: even if there is nothing
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The longest stanza confronts the worst case. Even if outside there is only
                  &ldquo;the darkness ticking&rdquo;, only &ldquo;the hollow wind&rdquo;, even if
                  nothing at all is there, the command still stands: go and open the door. The
                  repeated concessive phrase (even if... even if... even if) builds like a series of
                  objections being overruled one by one. The lines thin out as the possibilities
                  empty, until single words sit alone on the line, and then the imperative returns,
                  unchanged, to close the stanza. Action is worthwhile regardless of outcome.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  The coda: the draught
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The poem ends with a tiny two-line stanza: at the very least, there will be a
                  draught. On the surface this is bathos, a deliberate anticlimax: after magic
                  cities and ticking darkness, all you are guaranteed is a current of cold air. But
                  the draught is also the poem&apos;s quiet triumph. A draught means the air has
                  moved; the sealed room has been connected to the world outside; something has
                  changed because you acted. Even the smallest result of openness is better than the
                  stillness of a closed door.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments to Track
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The repeated imperative that opens four stanzas</li>
                    <li>
                      &bull; The list that escalates from a tree to &ldquo;a magic city&rdquo;
                    </li>
                    <li>&bull; The shift from inviting images to strange, fragmented ones</li>
                    <li>&bull; The concessive build-up: even if... even if... even if</li>
                    <li>&bull; The two-line coda and its double-edged anticlimax</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── VOICES AND IMAGES */}
        <div id="voices-and-images">
          <Section title="Voice, Address, and Central Images" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="The speaker"
                description="An anonymous, insistent voice that never identifies itself and never explains its authority. It speaks entirely in imperatives and possibilities: it commands, then speculates, then commands again. The tone is not bullying but encouraging, like a friend or mentor coaxing someone out of fear or apathy. Crucially, the speaker promises nothing specific. Its honesty (admitting there may be nothing outside at all) is what makes its final insistence persuasive rather than naive."
              />
              <CharacterCard
                name="The addressee: 'you'"
                description="The poem is addressed to an unnamed 'you', which means it is addressed to the reader. The 'you' is imagined as someone on the inside of a closed door: someone settled, sealed off, perhaps fearful or simply passive. The poem never describes this person, which keeps the address universal. Every reader becomes the person being urged to act. For exam purposes, the direct address is one of the poem's most important techniques: it turns a private lyric into a challenge."
              />
              <CharacterCard
                name="The door"
                description="The poem's controlling symbol. A door is the boundary between the known and the unknown, between safety and risk, between stasis and change. Holub never says what the door is a door to, and that openness is deliberate: it can stand for any threshold, a new experience, a difficult conversation, an idea, a freedom. In the poem's Cold War context it is hard not to read it politically as well: a closed society being urged, very quietly, to open. But the symbol works at every scale, from the personal to the political."
              />
              <CharacterCard
                name="The images beyond the door"
                description="The possibilities form a deliberate sequence: natural and lovely (tree, wood, garden), fantastical (a magic city), animal and mundane (a rummaging dog), human but partial (a face, an eye), unstable and self-referential (the picture of a picture), obscure (fog), and finally empty (ticking darkness, hollow wind, nothing). The sequence matters more than any single image: it maps the full range of what openness might bring, from wonder to bafflement to emptiness, and insists the command holds across all of it."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Curiosity and openness to experience"
                description="The poem's core argument is that the act of opening, of looking, of risking, matters more than what is found. The repeated 'Maybe' refuses certainty on purpose: curiosity is only curiosity when the outcome is unknown. Holub was a working research scientist (an immunologist), and many readers hear a scientist's ethic in the poem: form the hypothesis, run the experiment, accept whatever the result is. Knowledge begins with the willingness to look."
              />
              <ThemeCard
                title="Risk, fear, and the closed life"
                description="The door is closed because someone keeps it closed. The poem implies its addressee is held back by fear of disappointment, of strangeness, of nothing being there. By listing the unsettling possibilities alongside the lovely ones, the poem takes fear seriously instead of dismissing it, and then overrules it anyway. The final stanza's logic is the answer to fear: even the worst case (nothing) still produces a draught, and a draught is change."
              />
              <ThemeCard
                title="Freedom and the political reading"
                description="Holub wrote in communist Czechoslovakia, a state that censored writers, restricted travel, and policed ideas. Read in that context, the closed door suggests a closed society and a closed mind shaped by it, and the quiet, insistent command becomes an act of intellectual resistance: keep looking outward, keep testing what you are told, do not accept the sealed room. The poem never mentions politics, which is precisely how poetry survived under censorship: the image does the work the statement could not."
              />
              <ThemeCard
                title="Hope without illusion"
                description="The poem is optimistic, but its optimism is earned rather than sentimental. It does not promise the magic city; it promises, at minimum, a draught. This is hope stripped down to its honest core: action will change something, even if only slightly. Comparing the grand first stanza with the tiny final one shows the poem deliberately lowering its own stakes, and still concluding that the door must be opened. That movement, from wonder to modest certainty, is the poem's emotional arc."
              />
              <ThemeCard
                title="The ordinary made significant"
                description="Everything in the poem is everyday: a door, a tree, a dog, fog, wind, a draught. Holub's style (plain diction, no rhyme, no decoration) matches this ordinariness. The poem's claim is that the threshold moments of ordinary life are where freedom actually lives. This is characteristic of Holub's poetry generally, which prefers laboratory plainness to romantic flourish and finds meaning in small, testable observations."
              />
              <ThemeCard
                title="Uncertainty and perception"
                description="The second stanza's images (a face, an eye, the picture of a picture) raise questions about what we can actually know. An eye might be looking at you; a picture of a picture is a copy at two removes from reality. Even when you open the door, what you see may be partial, mediated, or ambiguous. The poem accepts this: it does not claim that opening the door delivers truth, only that refusing to open it guarantees ignorance."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── FORM AND TECHNIQUES */}
        <div id="form-and-techniques">
          <Section title="Form, Structure, and Poetic Techniques" icon="🛠️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Free verse and irregular stanzas</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem has no rhyme scheme and no regular metre, and its stanzas are of
                  noticeably different lengths, ending with a stanza of just two lines. Free verse
                  suits the subject: a poem about refusing confinement does not confine itself in a
                  fixed form. The variation in stanza length also controls pace: the long fourth
                  stanza accumulates pressure, while the abrupt final couplet lands like a dry
                  punchline. (AO2: always link the form to the meaning, not just label it.)
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The imperative refrain</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The command to go and open the door begins stanza after stanza and returns at the
                  end of the longest stanza. Repetition turns the sentence from a suggestion into a
                  refrain, almost an incantation. Each return of the line resets the poem after a
                  list of possibilities, as if the speaker refuses to be distracted by speculation:
                  whatever might be out there, the instruction is the same. The imperative mood and
                  the direct second-person address make the reader the poem&apos;s target.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Anaphora and listing</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem is built from two repeated sentence-openers: the speculative
                  &ldquo;Maybe&rdquo; and the concessive &ldquo;even if&rdquo;. The
                  &ldquo;Maybe&rdquo; lists open possibility upward (toward the garden and the magic
                  city); the &ldquo;even if&rdquo; list strips possibility away (toward darkness,
                  wind, nothing). The poem&apos;s whole argument is carried by the pivot from one
                  anaphora to the other: from what you might gain to what you might not, with the
                  command unchanged on both sides.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Enjambment and the thinning line</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Holub breaks his lines so that items of the lists fall away one per line, and in
                  the fourth stanza the lines shorten until single words stand alone. On the page,
                  the stanza visibly empties out, performing the very nothingness it describes. This
                  is a strong AO2 point: the poem&apos;s layout enacts its meaning. The white space
                  around the final two-line stanza similarly isolates the draught, making the
                  smallest image in the poem the one the eye rests on last.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Bathos that turns into affirmation</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The ending is a controlled anticlimax: from a magic city to a draught. Bathos
                  usually deflates, and at first the ending seems wry, almost a joke. But the joke
                  carries the thesis: a draught is moving air, proof of connection between inside
                  and outside. Strong essays explore this double effect, the humour and the
                  seriousness together, rather than choosing one. Holub&apos;s characteristic tone
                  is exactly this: dry, understated, and quietly insistent.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A poem in translation</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Holub wrote in Czech; the version studied in English schools is Ian Milner&apos;s
                  translation. This is worth a sentence in an essay (AO3): the plain, conversational
                  English diction reflects both Holub&apos;s own anti-ornamental style and the
                  translator&apos;s choices. Holub himself approved of plainness; he said he wanted
                  poems that ordinary people, including scientists, could read without feeling
                  tricked.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Context: Holub, Science, and Cold War Czechoslovakia" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Miroslav Holub (1923-1998)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Holub was both a poet and a distinguished research scientist: he worked for
                  decades as an immunologist in Prague and published scientific papers alongside his
                  poetry. He insisted the two careers fed each other, and his poems are famous for
                  their experimental, hypothesis-testing habit of mind: set up a situation, observe
                  it precisely, accept the result. &ldquo;The Door&rdquo; follows exactly this
                  shape, testing the act of opening against every possible outcome.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Writing under communism</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Holub wrote in Czechoslovakia under a one-party communist state in which
                  publishing was censored and intellectual life was policed. The poem dates from the
                  early 1960s, a period of cautious cultural thaw that would lead to the Prague
                  Spring of 1968, when reformers tried to create &ldquo;socialism with a human
                  face&rdquo;. That movement was crushed by a Soviet-led invasion in August 1968,
                  and in the repression that followed Holub fell out of official favour and was for
                  years unable to publish freely in his own country. Read against this history, the
                  poem&apos;s quiet insistence on opening what is closed carries an unmistakable
                  political charge, though it is delivered entirely through images.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Translation and reputation in English</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Holub became one of the best-known European poets in the English-speaking world
                  after his work appeared in translation in the 1960s, notably in the Penguin Modern
                  European Poets series (translated by Ian Milner and George Theiner). British poets
                  admired him; Ted Hughes was a prominent champion of East European poetry of this
                  kind, valuing its survivor&apos;s plainness against what he saw as the comfortable
                  ornament of much Western verse. &ldquo;The Door&rdquo; became a fixture of British
                  classrooms precisely because its surface is so simple and its implications so
                  large.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">How context should be used (AO3)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Use context as a lens, not a biography dump. Two sentences are usually enough: one
                  linking the closed door to censorship and the closed society Holub worked in, and
                  one linking the poem&apos;s experimental structure to his scientific career. Then
                  return to the words on the page. Examiners reward context that illuminates
                  specific lines, not context bolted on at the end of a paragraph.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY PHRASES */}
        <div id="key-phrases">
          <Section title="Key Phrases with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The poem is in copyright, so only very short phrases are quoted here for the purpose
              of analysis. Learn the full lines from your anthology copy: the poem is short enough
              to memorise entirely.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Go and open the door."
                speaker="The refrain"
                analysis="Five plain monosyllabic-feeling words carrying the entire poem. The imperative mood gives the speaker quiet authority; the direct address makes every reader the target. 'Go' matters as much as 'open': the line demands movement first, an act of will before the act of discovery. Because the line returns unchanged while everything around it shifts, it works like a scientific constant against which the variables (the maybes) are tested."
              />
              <QuoteCard
                quote="a magic city"
                speaker="Stanza 1"
                analysis="The climax of the opening list and the poem's one leap into outright fantasy. The escalation (tree, wood, garden, magic city) moves from the natural to the cultivated to the impossible, training the reader to expand expectation. The flat, childlike simplicity of the phrase is deliberate: the speaker offers wonder in the vocabulary of a fairy tale, then immediately undercuts it in later stanzas. Aspiration is permitted, but it is not the argument."
              />
              <QuoteCard
                quote="the picture of a picture"
                speaker="Stanza 2"
                analysis="The strangest image in the poem: a representation of a representation, two removes from anything real. It unsettles the neat idea that opening the door reveals truth; what you find may be mediated, secondhand, or unreadable. Some readers link it to life under propaganda, where images of reality replace reality itself; others read it as a comment on perception generally. Its ambiguity is the point, and acknowledging that ambiguity is a high-level move (AO2)."
              />
              <QuoteCard
                quote="the darkness ticking"
                speaker="Stanza 4"
                analysis="A compressed, synaesthetic image: darkness given the sound of a clock. It fuses two fears, the dark and passing time, into three words. Even emptiness, the image implies, is not static; time runs on whether or not you act, which quietly strengthens the case for acting. The phrase shows Holub's method in miniature: no decoration, just two ordinary words placed together until they spark."
              />
              <QuoteCard
                quote="the hollow wind"
                speaker="Stanza 4"
                analysis="'Hollow' transfers emptiness from the world to the wind itself: even what moves out there may be vacant. This is the poem at its bleakest, conceding the worst case honestly. The concession is strategic: because the speaker has admitted the possibility of nothing, the final command cannot be dismissed as wishful thinking. The honesty buys the optimism."
              />
              <QuoteCard
                quote="at least there'll be a draught"
                speaker="The closing lines"
                analysis="The famous ending: bathos with a sting of affirmation. 'At least' openly admits this is the minimum result, and 'draught' is deliberately tiny, domestic, even uncomfortable (draughts are what people seal doors against). Yet a draught is empirical proof that inside and outside are now connected. The closed system has been broken open. Many essays end where the poem ends: the reward for openness may be small, but it is real, and it is guaranteed."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              The poem may appear as a set text or as an unseen. Both question styles are practised
              below. For any poetry question: argument first, then technique, then context, all
              anchored in short quotations.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does the poet present the idea of new experiences in &ldquo;The
                  Door&rdquo;?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thesis: the poem argues that the act of seeking new experience matters more
                      than what the experience turns out to be.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The imperative refrain and direct address: command repeated, reader
                      conscripted. The speculative &ldquo;Maybe&rdquo; list escalates to &ldquo;a
                      magic city&rdquo;, modelling expanding possibility.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      New experience is not sanitised: the strange second stanza (the eye, the
                      picture of a picture) and the empty fourth stanza concede risk and
                      disappointment. The &ldquo;even if&rdquo; anaphora overrules each objection.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The coda: bathos of the draught read as guaranteed minimal change. Context
                      (one or two sentences): a poem about opening what is sealed, written inside a
                      censored society; Holub&apos;s scientific habit of testing all outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does the poet use structure and form to convey his message?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thesis: the poem&apos;s free verse, refrain, and shrinking lines do not just
                      carry the message, they perform it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Free verse and uneven stanzas as formal openness: a poem against confinement
                      refuses a confining form. Contrast stanza lengths and the isolated two-line
                      coda.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The two anaphoras as the poem&apos;s hinge: &ldquo;Maybe&rdquo; building
                      possibility, &ldquo;even if&rdquo; dismantling it, refrain constant across
                      both. Lines thinning to single words enact emptiness on the page.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The structural anticlimax: largest promise first, smallest last, yet the
                      command never changes. End on the draught as structural proof of the
                      poem&apos;s honesty.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. (Unseen-style) What do you think the door represents, and how does the poet
                  make it powerful?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Offer layered readings rather than one answer: personal threshold, openness of
                      mind, political freedom. Argue the power comes from the symbol being left
                      open.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Key moves
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Note what the poem withholds: no setting, no reason the door is shut, no
                      identity for &ldquo;you&rdquo;. Withholding universalises. Track how the
                      possibilities behind the door change in character stanza by stanza. Finish
                      with the draught: the symbol&apos;s meaning is settled not by what is found
                      but by the fact of connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>The Door</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Memorise the whole poem.</strong> It is short enough that you can know every
              line, which makes precise quotation effortless under exam conditions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Write about the sequence, not just single images.</strong> The escalation of
              the first list and the emptying of the fourth stanza are stronger points than any one
              image alone (AO2).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Treat the ending as double-edged.</strong> The draught is both anticlimax and
              affirmation; top answers hold both readings at once instead of choosing one.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use context sparingly and precisely.</strong> One sentence on censorship in
              communist Czechoslovakia, one on Holub the scientist, each tied to a specific line
              (AO3).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Mention the translation once.</strong> Noting that we read Ian Milner&apos;s
              English version of a Czech poem shows awareness that the text has a history.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>For comparison questions,</strong> the poem pairs naturally with any text
              about choice, risk, confinement, or hope; its imperative voice and symbolic threshold
              give you ready-made points of contrast.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          &ldquo;The Door&rdquo; by Miroslav Holub (1923-1998), English translation by Ian Milner,
          is <strong>in copyright</strong>. In line with fair dealing for criticism and review (CDPA
          1988 s.30), this guide quotes only brief phrases for the purpose of analysis. Students
          should read the full poem in their anthology or a licensed edition such as the Penguin{' '}
          <em>Selected Poems</em>.
        </p>
      </footer>
    </>
  )
}
