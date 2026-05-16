import type { Metadata } from 'next'
import Link from 'next/link'

import { STRINGS } from './content'
import { headers } from 'next/headers'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Creative Writing Masterclass | The English Hub',
    description:
      'Complete guide to creative writing for GCSE and IGCSE English. Descriptive and narrative techniques, opening and ending strategies, structural devices, vocabulary enhancement, planning templates, and full annotated model responses.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/writing-skills/creative-writing' },
  title: 'Creative Writing Masterclass',
  description:
    'Complete guide to creative writing for GCSE and IGCSE English. Descriptive and narrative techniques, opening and ending strategies, structural devices, vocabulary enhancement, planning templates, and full annotated model responses.',
}

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-primary/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-primary/40">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-primary" />
      </span>
    </span>
  )
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-primary/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ─── Technique card ─────────────────────────────────────────── */

function TechniqueCard({
  name,
  definition,
  example,
  effect,
}: {
  name: string
  definition: string
  example: string
  effect: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-md">
      <h4 className="font-bold text-foreground">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{definition}</p>
      <div className="mt-3 rounded-lg bg-muted px-4 py-3">
        <p className="text-sm italic text-muted-foreground">{example}</p>
      </div>
      <p className="mt-2 text-sm text-primary">
        <span className="font-semibold">Effect:</span> {effect}
      </p>
    </div>
  )
}

/* ─── Mistake card ───────────────────────────────────────────── */

function MistakeCard({
  mistake,
  why,
  fix,
  exampleBad,
  exampleGood,
}: {
  mistake: string
  why: string
  fix: string
  exampleBad: string
  exampleGood: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-md">
      <h4 className="font-bold text-red-600">{mistake}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{why}</p>
      <p className="mt-2 text-sm text-foreground">
        <span className="font-semibold">Fix:</span> {fix}
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-red-500/10 px-4 py-3">
          <p className="text-xs font-semibold text-red-500 mb-1">Before</p>
          <p className="text-sm italic text-muted-foreground">{exampleBad}</p>
        </div>
        <div className="rounded-lg bg-green-500/10 px-4 py-3">
          <p className="text-xs font-semibold text-green-600 mb-1">After</p>
          <p className="text-sm italic text-muted-foreground">{exampleGood}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function CreativeWritingPage() {
  const _hdrs = await headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Writing Skills Masterclass
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Creative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to produce top-grade descriptive and narrative writing. Techniques,
            structures, vocabulary, planning templates, and full annotated model responses.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/writing-skills"
              className="hover:text-foreground transition-colors"
            >
              {tr(`Writing Skills`)}
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">{tr(`Creative Writing`)}</li>
        </ol>
      </nav>

      {/* Table of contents + content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">
                Contents
              </p>
              {[
                { id: 'descriptive', label: 'Descriptive Writing' },
                { id: 'narrative', label: 'Narrative Writing' },
                { id: 'openings', label: 'Opening Techniques' },
                { id: 'endings', label: 'Ending Techniques' },
                { id: 'structure', label: 'Structural Techniques' },
                { id: 'vocabulary', label: 'Vocabulary Enhancement' },
                { id: 'model-descriptive', label: 'Model: Descriptive' },
                { id: 'model-narrative', label: 'Model: Narrative' },
                { id: 'planning', label: 'Planning Templates' },
                { id: 'mistakes', label: 'Common Mistakes' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* ─── DESCRIPTIVE WRITING ─────────────────────────────── */}
            <Section id="descriptive" title={tr(`Descriptive Writing Techniques`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Descriptive writing creates vivid images in the reader&apos;s mind. The best
                descriptive writers do not simply list what they see -- they make the reader
                <em> experience</em> the scene through carefully chosen language that appeals to all
                five senses.
              </p>

              {/* Five Senses Framework */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`The Five Senses Framework`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Weaker writing relies almost entirely on sight. Strong descriptive writing engages
                all five senses to immerse the reader in the scene. Use this framework as a
                checklist when planning any descriptive piece.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">{tr(`Sight (Visual)`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Colour, shape, light, shadow, movement`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The amber streetlight bled through the rain-slicked glass, casting long,
                    trembling shadows across the ceiling.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">{tr(`Sound (Auditory)`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Volume, pitch, rhythm, silence`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The only sound was the slow, rhythmic drip of water from the broken
                    gutter, marking time like a metronome.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">{tr(`Touch (Tactile)`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Texture, temperature, pressure, pain`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The rough bark scraped against her palms as she climbed, each grip
                    sending a jolt of cold through her fingers.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">{tr(`Smell (Olfactory)`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Pleasant, acrid, subtle, overwhelming`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The air was thick with the cloying sweetness of overripe fruit, undercut
                    by something sharper -- decay.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">{tr(`Taste (Gustatory)`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Bitter, metallic, sweet, sour, salty`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;She bit her lip, tasting the copper tang of blood as the wind whipped the
                    dust into her face.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm">Bonus: Synaesthesia</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(`Mixing senses for striking effect`)}
                  </p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The silence tasted of dust and old stone, heavy on the tongue like a word
                    she could not quite remember.&rdquo;
                  </p>
                </div>
              </div>

              {/* Show Don't Tell -- 10 examples */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Show, Don&apos;t Tell`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                This is the single most important principle in creative writing. Instead of naming
                an emotion or state directly, you <strong>demonstrate</strong> it through actions,
                sensory detail, and body language. Here are 10 examples showing the transformation.
              </p>
              <div className="mb-8 overflow-hidden rounded-xl border border-border">
                <div className="grid grid-cols-2 text-sm font-bold bg-primary text-white">
                  <div className="px-4 py-3">{tr(`Telling (Weak)`)}</div>
                  <div className="px-4 py-3 border-l border-border">{tr(`Showing (Strong)`)}</div>
                </div>
                {[
                  {
                    tell: 'He was scared.',
                    show: 'His hands trembled. He pressed himself flat against the wall, barely breathing, eyes fixed on the handle as it began -- slowly -- to turn.',
                  },
                  {
                    tell: 'She was happy.',
                    show: 'A laugh burst from her before she could catch it. She pressed both hands to her mouth, eyes gleaming, and spun on the spot.',
                  },
                  {
                    tell: 'It was cold.',
                    show: 'Her breath hung in the air like smoke. The puddles had turned to sheets of iron, and every blade of grass wore a crust of white.',
                  },
                  {
                    tell: 'The room was old.',
                    show: 'Wallpaper curled away from the corners like dead skin. A fine layer of dust coated every surface, undisturbed for years, and the floorboards groaned under even the lightest step.',
                  },
                  {
                    tell: 'He was angry.',
                    show: 'His jaw clenched. He slammed the door so hard the frame shuddered and the glass in the window rattled in its pane.',
                  },
                  {
                    tell: 'She was nervous.',
                    show: 'She checked her phone again -- nothing. Her knee bounced under the table. She folded and unfolded the napkin until the creases wore white.',
                  },
                  {
                    tell: 'The city was busy.',
                    show: 'Horns blared in overlapping waves. Pedestrians shouldered past without apology, their faces set, their coffee cups held high above the crush.',
                  },
                  {
                    tell: 'He was exhausted.',
                    show: 'He dropped into the chair and let his head fall back, eyes closed. His shoes were caked in mud. He did not take them off.',
                  },
                  {
                    tell: 'She was lonely.',
                    show: 'She set two places at the table, then quietly removed one. The fork clinked as she placed it back in the drawer.',
                  },
                  {
                    tell: 'It was beautiful.',
                    show: 'The valley opened beneath them, green and gold, and for a moment neither of them spoke. The river glittered in the distance like a thread of silver dropped carelessly across the land.',
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-1 sm:grid-cols-2 text-sm ${i % 2 === 0 ? 'bg-card' : 'bg-muted'}`}
                  >
                    <div className="px-4 py-3 text-muted-foreground line-through decoration-red-400">
                      {row.tell}
                    </div>
                    <div className="px-4 py-3 text-muted-foreground border-t sm:border-t-0 sm:border-l border-border">
                      {row.show}
                    </div>
                  </div>
                ))}
              </div>

              {/* Figurative Language */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Figurative Language`)}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <TechniqueCard
                  name="Simile"
                  definition="A comparison using 'like' or 'as' to create a vivid image."
                  example='"The fog crept in like a thief, stealing the outlines of buildings one by one."'
                  effect="Creates a clear, relatable image by connecting the unfamiliar to the familiar."
                />
                <TechniqueCard
                  name="Metaphor"
                  definition="A direct comparison that states one thing IS another."
                  example='"The city was a furnace, its streets radiating heat that shimmered and buckled the air."'
                  effect="More powerful than a simile because it asserts the comparison as fact, making the image feel absolute."
                />
                <TechniqueCard
                  name="Personification"
                  definition="Giving human qualities to non-human things."
                  example='"The wind howled its disapproval, clawing at the shutters with angry fingers."'
                  effect="Makes the environment feel alive, often creating atmosphere or menace."
                />
                <TechniqueCard
                  name="Pathetic Fallacy"
                  definition="Using weather or nature to reflect a character's mood or the story's tone."
                  example='"Rain hammered the glass as she read the letter. Outside, the sky had turned the colour of a bruise."'
                  effect="Reinforces the emotional atmosphere without stating it directly. Markers love to see this used subtly."
                />
                <TechniqueCard
                  name="Symbolism"
                  definition="Using an object, colour, or element to represent a deeper meaning."
                  example='"She placed the dried flower between the pages of the book and closed it for the last time."'
                  effect="Adds layers of meaning. The dried flower symbolises a fading memory or a relationship that has ended."
                />
                <TechniqueCard
                  name="Oxymoron"
                  definition="Two contradictory words placed together for effect."
                  example='"A deafening silence fell over the crowd."'
                  effect="Creates tension, surprise, or highlights a paradox. Shows sophisticated vocabulary control."
                />
                <TechniqueCard
                  name="Hyperbole"
                  definition="Deliberate exaggeration for emphasis or effect."
                  example='"The suitcase weighed a thousand tonnes. She dragged it behind her, each step a battle."'
                  effect="Emphasises scale, difficulty, or emotion. Works well in both humorous and dramatic contexts."
                />
                <TechniqueCard
                  name="Extended Metaphor"
                  definition="A metaphor sustained across several sentences or an entire paragraph."
                  example={
                    '"The classroom was a zoo. In the back corner, the hyenas cackled and shoved. At the front, the owls blinked silently over their textbooks. And at the teacher\'s desk, the zookeeper surveyed the enclosure with weary resignation."'
                  }
                  effect="Creates a cohesive, layered image that demonstrates sustained control of language -- a hallmark of the top band."
                />
              </div>

              {/* Setting Description */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Setting Description`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                A well-described setting does more than paint a picture -- it establishes mood,
                hints at theme, and can even reveal character. Follow these principles.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Layer Your Senses`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `Do not describe only what you see. Begin with sight, then add sound, then smell or touch. Each new sense deepens the reader&apos;s immersion.`,
                    )}
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;The market square blazed with colour -- orange canopies, crimson
                      peppers, bolts of turquoise fabric. Beneath it all, the air hummed with the
                      chatter of vendors and the distant clang of a blacksmith&apos;s hammer,
                      threaded through with the smell of cumin and charcoal smoke.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Use the Setting to Reflect Mood`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The setting should not be neutral. A cheerful character sees the world
                    differently from a grieving one. Filter the description through the
                    character&apos;s emotional state.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;Even the sunlight felt wrong that morning -- too bright, too insistent,
                      flooding through the curtains as though it didn&apos;t know what had
                      happened.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">Select Details Carefully</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `You cannot describe everything. Choose three or four specific details that collectively create a dominant impression. Every detail should earn its place.`,
                    )}
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;The kitchen was small: a crooked shelf, a chipped mug by the sink, a
                      tea towel printed with flowers that had faded to ghosts. Everything in its
                      place. Everything worn.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Imply History Through Detail`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `The best settings suggest a past without explaining it. A scratched floor, a child&apos;s height marks on a doorframe, a faded sign -- these imply stories the reader can imagine.`,
                    )}
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;The bench bore the faded initials of lovers who had long since parted.
                      The wood was smooth where hundreds of hands had gripped, rough where the
                      weather had taken its toll.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Character Description */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Character Description`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Strong character description avoids listing physical features (&ldquo;She had blue
                eyes and brown hair&rdquo;). Instead, it reveals personality through carefully
                chosen details, habits, and actions.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">Reveal Through Action</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Show who a character is through what they do, not a physical inventory.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;She answered the phone on the first ring, the way she always did -- as
                      though she had been waiting for bad news.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Use Telling Details`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `One carefully chosen detail says more than a full description. Focus on what is unusual or revealing.`,
                    )}
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;His hands were enormous -- farmer&apos;s hands, cracked and calloused,
                      with dirt permanently ground into the creases of his knuckles. He held the
                      teacup as though it were made of eggshell.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Habits and Mannerisms`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `Repeated actions or unconscious habits reveal character more authentically than direct description.`,
                    )}
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;He had a habit of finishing other people&apos;s sentences, not to be
                      rude -- he simply could not bear the silence of someone searching for a
                      word.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">Contrast and Contradiction</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The most interesting characters contain contradictions. Show the unexpected
                    detail that complicates first impressions.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;She was six foot two and built like a rower, but when she laughed --
                      really laughed -- she covered her mouth with both hands like a child caught
                      stealing sweets.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Atmosphere */}
              <h3 className="mb-4 text-lg font-bold text-foreground">Creating Atmosphere</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Atmosphere is the overall feeling or mood of a piece. It is not created by a single
                technique but by the <strong>accumulation</strong> of many techniques working
                together: word choice, sentence rhythm, sensory detail, and pathetic fallacy. Below
                are strategies for building atmosphere.
              </p>
              <div className="space-y-4 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Word-Level: Semantic Fields`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Choose words from the same &ldquo;family&rdquo; of meaning to reinforce
                    atmosphere. For a threatening mood, use words from the semantic field of danger:
                    lurked, crept, shadow, edge, blade, sharpened. The reader absorbs the pattern
                    subconsciously.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;The path <strong>narrowed</strong>. Trees <strong>pressed</strong> in
                      from either side, their branches <strong>clawing</strong> at the fading light.
                      The air <strong>thickened</strong>. Somewhere ahead, something{' '}
                      <strong>waited</strong>.&rdquo;
                    </p>
                    <p className="mt-2 text-xs text-primary">
                      {tr(
                        `Every bolded word belongs to the semantic field of confinement and threat.`,
                      )}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Sentence-Level: Rhythm and Length`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Long, flowing sentences create calm, reflection, or beauty. Short, clipped
                    sentences create tension, urgency, or shock. Vary your sentence length
                    deliberately to shape how the reader feels.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;The garden stretched out before her, a patchwork of green and gold, the
                      kind of place where afternoons could stretch into evenings without anyone
                      noticing or caring. [Long = calm] Then the gate slammed. She froze. [Short =
                      tension]&rdquo;
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">Pathetic Fallacy in Detail</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Go beyond &ldquo;it was raining because the character was sad.&rdquo; Use
                    weather and nature to mirror, contrast, or foreshadow emotional states. The best
                    pathetic fallacy is subtle enough that the reader feels the mood without
                    consciously noticing the technique.
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-blue-500/10 px-4 py-3">
                      <p className="text-xs font-semibold text-primary mb-1">
                        {tr(`Mirroring (mood matches weather)`)}
                      </p>
                      <p className="text-sm italic text-muted-foreground">
                        &ldquo;The sky sagged, grey and heavy, pressing down on the rooftops as
                        though it, too, had given up.&rdquo;
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 px-4 py-3">
                      <p className="text-xs font-semibold text-primary mb-1">
                        {tr(`Contrasting (mood clashes with weather)`)}
                      </p>
                      <p className="text-sm italic text-muted-foreground">
                        &ldquo;Outside, the sun was obscenely bright. Birds sang. Children played.
                        None of it matched the silence inside the house.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* ─── NARRATIVE WRITING ──────────────────────────────── */}
            <Section id="narrative" title={tr(`Narrative Writing Techniques`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Narrative writing tells a story. The best narratives are not just <em>what</em>{' '}
                happens, but
                <em> how</em> it is told. The techniques below will help you control pace, create
                tension, develop character, and craft a story that feels deliberate from its first
                word to its last.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <TechniqueCard
                  name="In Medias Res"
                  definition="Starting the story in the middle of the action, then filling in context later."
                  example={
                    '"The glass shattered before she even heard the scream. Instinctively, she dropped to the floor, pressing herself against the cold tiles." -- We learn who she is and why the glass broke later.'
                  }
                  effect="Immediately creates tension and hooks the reader. No slow build-up; the reader is thrown into the story."
                />
                <TechniqueCard
                  name="Flashback"
                  definition="Interrupting the present narrative to show a scene from the past."
                  example='"She stared at the empty chair. The last time he had sat there, he had been laughing -- that full, ridiculous laugh that made everyone in the room turn. She remembered the candlelight catching his eyes. That had been December. Now it was March, and the chair was just a chair."'
                  effect="Adds emotional depth and backstory without lengthy exposition. Creates contrast between past and present."
                />
                <TechniqueCard
                  name="Foreshadowing"
                  definition="Planting subtle hints about what will happen later in the story."
                  example='"She pocketed the key without thinking. It would be hours before she understood what it opened."'
                  effect="Creates dramatic irony and builds suspense. The reader senses something is coming, which maintains tension."
                />
                <TechniqueCard
                  name="Withholding Information"
                  definition="Deliberately not revealing something to the reader to maintain mystery."
                  example='"He knew what was in the envelope. He had always known. But knowing and admitting were different things, and tonight was not the night for admitting."'
                  effect="Keeps the reader hooked. They want to know what the character knows, so they keep reading."
                />
                <TechniqueCard
                  name="Pacing: Slowing Down"
                  definition="Using long sentences, detailed description, and embedded clauses to decelerate the narrative at key moments."
                  example='"She reached for the handle -- a cold, brass thing, pitted with age, the kind of handle that had been turned ten thousand times before by ten thousand different hands, each with their own reason, their own dread."'
                  effect="Builds tension and suspense by making the reader wait. Forces the reader to slow down at the moment that matters most."
                />
                <TechniqueCard
                  name="Pacing: Speeding Up"
                  definition="Using short sentences, fragments, and minimal description to accelerate the narrative."
                  example='"She ran. Left, then right. A wall. Dead end. Footsteps behind her. Closer. She turned. Nothing."'
                  effect="Creates urgency, panic, and breathlessness. The choppy rhythm mirrors the character's state of mind."
                />
                <TechniqueCard
                  name="Shifting Perspective"
                  definition="Changing who is telling the story or whose thoughts we access."
                  example='"From her side of the door, the silence felt like relief. From his, it felt like abandonment."'
                  effect="Adds complexity and depth. Shows the same event from different emotional angles."
                />
                <TechniqueCard
                  name="Non-Linear Structure"
                  definition="Telling the story out of chronological order, using flashbacks, flash-forwards, or fragmented scenes."
                  example='"Open with a character at a funeral. Then jump back six months to show the relationship. Return to the funeral at the end with new emotional weight."'
                  effect="Adds complexity and depth. Shows the marker that you can handle sophisticated narrative structure."
                />
              </div>

              {/* Dialogue Punctuation Rules */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Dialogue: Punctuation Rules`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Dialogue is one of the most common areas where students lose marks. Learn these
                rules and apply them consistently.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  {
                    rule: 'New speaker = new line',
                    example: '"Are you coming?" she asked.\n"Not yet," he said.',
                    explanation:
                      'Every time a different character speaks, start a new paragraph. This makes it clear who is talking.',
                  },
                  {
                    rule: 'Punctuation goes INSIDE the speech marks',
                    example: '"I can\'t believe it," she whispered.',
                    explanation:
                      'The comma after "it" goes inside the closing speech marks, not outside.',
                  },
                  {
                    rule: 'Use a comma before the reporting clause',
                    example: '"We need to leave," he said.',
                    explanation:
                      'When the sentence continues after the speech (e.g., "he said"), use a comma -- not a full stop -- before the closing speech marks.',
                  },
                  {
                    rule: 'Use a full stop if no reporting clause follows',
                    example: 'She turned to the window. "I never wanted this."',
                    explanation:
                      "If the speech stands alone and nothing follows it (no 'she said'), end with a full stop inside the speech marks.",
                  },
                  {
                    rule: 'Question marks and exclamation marks replace the comma',
                    example: '"Where are you going?" she demanded.\n"Stop!" he shouted.',
                    explanation:
                      'Do not write a comma AND a question mark. The question mark or exclamation mark does the job alone.',
                  },
                  {
                    rule: 'Use speech to reveal character, not just to convey information',
                    example: '"Fine." She didn\'t look up. "Do what you want. You always do."',
                    explanation:
                      'The best dialogue carries subtext -- what the character means is not exactly what they say. The short, clipped responses here reveal frustration and resignation.',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <h4 className="font-bold text-foreground text-sm">{item.rule}</h4>
                    <div className="mt-2 rounded-lg bg-muted px-4 py-3">
                      <p className="text-sm italic text-muted-foreground whitespace-pre-line">
                        {item.example}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.explanation}</p>
                  </div>
                ))}
              </div>

              {/* Suspense Building */}
              <h3 className="mb-4 text-lg font-bold text-foreground">{tr(`Building Suspense`)}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Suspense is the art of making the reader <em>need</em> to know what happens next. It
                is not just about scary stories -- any narrative benefits from tension. Here is a
                toolkit for building suspense.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Delay the Reveal`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `When something important is about to happen, slow down. Describe the character&apos;s hand reaching for the handle. The creak of the floorboard. The way the light shifts. Make the reader wait.`,
                    )}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Use the Senses to Create Unease`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `Unexplained sounds, strange smells, sudden temperature changes. Sensory anomalies signal to the reader that something is wrong before the character consciously realises it.`,
                    )}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Short Sentences and Fragments`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    &ldquo;She listened. Nothing. Then -- there. Again.&rdquo; The fragmented rhythm
                    creates a heartbeat-like pace that mirrors the character&apos;s rising anxiety.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`Contrast Calm with Threat`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `The most effective suspense often comes from juxtaposing an ordinary, safe moment with a single disturbing detail. The normality makes the threat feel more real.`,
                    )}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">{tr(`The Rule of Three`)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `Build in three stages: first hint, second hint (stronger), then the reveal. The pattern creates expectation. &ldquo;A creak. A shadow. Then the door swung open.&rdquo;`,
                    )}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h4 className="font-bold text-foreground">
                    {tr(`Limit the Character&apos;s Knowledge`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tr(
                      `If the character does not understand what is happening, neither does the reader. Confusion, misinterpretation, and partial information all heighten tension.`,
                    )}
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── OPENING TECHNIQUES ────────────────────────────── */}
            <Section id="openings" title={tr(`Opening Techniques`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your opening is your first impression on the marker. These are 12 proven opening
                strategies that immediately signal confident, skilled writing.
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    name: 'Single-Word or Short Sentence Opening',
                    example: '"Silence."',
                    why: 'Instantly creates atmosphere. The brevity is arresting -- it forces the reader to pause and wonder.',
                  },
                  {
                    num: 2,
                    name: 'In Medias Res (Middle of Action)',
                    example: '"The glass shattered before she even heard the scream."',
                    why: 'Drops the reader straight into the story with no preamble. Creates immediate tension.',
                  },
                  {
                    num: 3,
                    name: 'Dialogue Opening',
                    example:
                      '"Don\'t open that door." His voice was barely a whisper, but she heard every word.',
                    why: 'Creates instant intrigue. The reader wonders who is speaking, why, and what is behind the door.',
                  },
                  {
                    num: 4,
                    name: 'Sensory Description',
                    example:
                      '"The air tasted of salt and rust. Somewhere below, the sea dragged itself against the rocks with a low, exhausted moan."',
                    why: 'Immerses the reader in the setting before any character or plot appears. Signals descriptive confidence.',
                  },
                  {
                    num: 5,
                    name: 'Question Opening',
                    example:
                      '"Have you ever stood at the edge of something and known -- really known -- that you were about to change?"',
                    why: 'Engages the reader directly and creates a philosophical or reflective tone.',
                  },
                  {
                    num: 6,
                    name: 'Contrast or Juxtaposition',
                    example: '"The wedding dress was white. The bruise on her wrist was not."',
                    why: 'The clash between the two images creates immediate shock and narrative tension.',
                  },
                  {
                    num: 7,
                    name: 'Pathetic Fallacy',
                    example:
                      '"The sky had been threatening all morning, dark clouds gathering like an audience waiting for a tragedy."',
                    why: 'Sets the emotional tone of the piece and foreshadows events to come.',
                  },
                  {
                    num: 8,
                    name: 'Zoom In (Cinematic Focus)',
                    example:
                      '"A single drop of rain landed on the windowsill. Then another. Then the sky opened."',
                    why: 'Mimics a camera slowly pulling back from a close-up. Builds from the tiny to the vast.',
                  },
                  {
                    num: 9,
                    name: 'Reflective / Philosophical',
                    example:
                      '"There is a particular kind of quiet that only exists in empty houses -- the kind that has weight."',
                    why: 'Establishes an introspective, mature tone. Signals to the marker that this will be a thoughtful piece.',
                  },
                  {
                    num: 10,
                    name: 'Time Marker',
                    example:
                      '"It was the summer everything changed. We didn\'t know it then, of course. We never do."',
                    why: 'Creates a retrospective frame -- the narrator is looking back, which implies significance and experience.',
                  },
                  {
                    num: 11,
                    name: 'Listing / Catalogue',
                    example:
                      '"Keys. Phone. Wallet. She checked each one twice, the way she always did. The way her mother had taught her."',
                    why: 'Creates rhythm and reveals character through habitual detail. The list format is visually distinctive.',
                  },
                  {
                    num: 12,
                    name: 'Withholding Information',
                    example:
                      '"She had made a decision. She couldn\'t take it back. She didn\'t want to."',
                    why: 'Refuses to tell the reader what happened, creating a gap that the reader desperately wants to fill.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {item.num}
                      </span>
                      <div>
                        <h4 className="font-bold text-foreground">{item.name}</h4>
                        <div className="mt-2 rounded-lg bg-muted px-4 py-3">
                          <p className="text-sm italic text-muted-foreground">{item.example}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{tr(`Why it works:`)}</span>{' '}
                          {item.why}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── ENDING TECHNIQUES ─────────────────────────────── */}
            <Section id="endings" title={tr(`Ending Techniques`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your ending is the last thing the marker reads. A strong ending elevates the entire
                piece. Here are 10 ending strategies that leave a lasting impression.
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    name: 'Circular Ending',
                    example:
                      'If the story opened with "The clock struck nine," end with "Somewhere, distantly, a clock struck nine." The repetition gives the piece a satisfying sense of completeness while suggesting that time -- or the cycle -- continues.',
                    why: 'Creates structural cohesion and shows the marker you planned the piece deliberately.',
                  },
                  {
                    num: 2,
                    name: 'Ambiguous Ending',
                    example:
                      '"She reached for the handle, paused, and let her hand fall. Whether she ever opened the door, I cannot say."',
                    why: "Leaves the reader thinking. It respects the reader's intelligence and avoids tying everything up too neatly.",
                  },
                  {
                    num: 3,
                    name: 'Single-Sentence Ending',
                    example: '"And then, just like that, it was over."',
                    why: 'The brevity is powerful after a longer, more descriptive piece. It mirrors the sudden finality of the moment.',
                  },
                  {
                    num: 4,
                    name: 'Image-Based Ending',
                    example:
                      '"The candle guttered once, twice, and went out. The smoke curled upward into nothing."',
                    why: 'Ends on a visual image rather than a statement, letting the reader draw their own conclusions.',
                  },
                  {
                    num: 5,
                    name: 'Reflection / Epiphany',
                    example:
                      '"Standing there in the half-light, she understood something she had been running from for years: she was not afraid of the dark. She was afraid of what she might see in it."',
                    why: 'Shows character development and emotional depth. The character has changed or realised something.',
                  },
                  {
                    num: 6,
                    name: 'Twist Ending',
                    example:
                      '"She smiled and slid the photograph back into the envelope. The woman in the picture smiled back -- the same smile, the same eyes. But that woman had been dead for thirty years."',
                    why: 'Surprises the reader and recontextualises everything that came before. Must be set up with subtle foreshadowing.',
                  },
                  {
                    num: 7,
                    name: 'Dialogue Ending',
                    example:
                      '"Are you coming?" he asked, already halfway down the path.\nShe looked back at the house one last time. "Yes," she said. "Yes, I think I am."',
                    why: "Feels natural and cinematic. The dialogue reveals the character's decision without narrating it.",
                  },
                  {
                    num: 8,
                    name: 'Zoom Out',
                    example:
                      '"She turned the corner and was gone. The street returned to its usual quiet. Above the rooftops, the clouds drifted on, indifferent, carrying the last of the daylight with them."',
                    why: "Like a camera pulling back, this ending places the character's story in a wider context, suggesting life goes on.",
                  },
                  {
                    num: 9,
                    name: 'Forward-Looking Ending',
                    example:
                      '"She did not know what tomorrow would bring. But for the first time in a long time, she wanted to find out."',
                    why: 'Ends with hope or anticipation without being sentimental. Implies growth and change.',
                  },
                  {
                    num: 10,
                    name: 'Symbolic Ending',
                    example:
                      '"She opened her hand and let the stone fall into the water. It sank without a ripple."',
                    why: 'The object becomes a symbol -- here, letting go. The reader understands the deeper meaning without being told.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {item.num}
                      </span>
                      <div>
                        <h4 className="font-bold text-foreground">{item.name}</h4>
                        <div className="mt-2 rounded-lg bg-muted px-4 py-3">
                          <p className="text-sm italic text-muted-foreground">{item.example}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{tr(`Why it works:`)}</span>{' '}
                          {item.why}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── STRUCTURAL TECHNIQUES ─────────────────────────── */}
            <Section id="structure" title={tr(`Structural Techniques`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Structure is not just about &ldquo;beginning, middle, end.&rdquo; It is about how
                you organise ideas, shift focus, and control the reader&apos;s experience across the
                whole piece. Markers specifically reward deliberate structural choices.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <TechniqueCard
                  name="Zoom In / Zoom Out"
                  definition="Starting with a wide view and narrowing to a tiny detail (or the reverse)."
                  example="Open with a wide shot of a city skyline. Then zoom to a single window. Then to a hand on the glass. Then to the condensation forming around the fingertips."
                  effect="Creates a cinematic, immersive quality. The zoom structure gives the piece a visual logic that readers find satisfying."
                />
                <TechniqueCard
                  name="Circular Structure"
                  definition="Ending the piece by returning to the image, phrase, or situation from the opening."
                  example={
                    'If the story opens with "The house had been empty for years," it might end with "The house was empty again" -- but now the reader understands what happened and why.'
                  }
                  effect="Creates a sense of completeness. It signals that the piece was planned and controlled, which is a top-band indicator."
                />
                <TechniqueCard
                  name="Shift in Focus"
                  definition="Moving the reader's attention from one element to another -- e.g., from setting to character, from external to internal, from present to past."
                  example="Begin by describing a busy market scene (external, sensory). Then narrow focus to a single person standing still in the crowd (internal, reflective). The contrast is powerful."
                  effect="Shows the marker that you are controlling the reader's gaze deliberately, like a film director."
                />
                <TechniqueCard
                  name="Time Manipulation"
                  definition="Stretching a single moment across a full paragraph, or compressing years into a sentence."
                  example={
                    'Stretching: "She reached for the door handle. The brass was cold. She counted her breaths. One. Two." Compressing: "Three years passed. The garden grew wild."'
                  }
                  effect="Demonstrates control over pace. Stretched moments build tension; compressed time creates a sense of inevitability or loss."
                />
                <TechniqueCard
                  name="Non-Linear / Fractured Timeline"
                  definition="Telling the story out of chronological order, using flashbacks, flash-forwards, or fragmented scenes."
                  example="Open with a character at a funeral. Then jump back six months to show the relationship. Return to the funeral at the end with new emotional weight."
                  effect="Adds complexity and depth. Shows the marker that you can handle sophisticated narrative structure."
                />
                <TechniqueCard
                  name="Contrast / Juxtaposition"
                  definition="Placing two opposing ideas, images, or sections side by side."
                  example="Alternate between paragraphs describing a beautiful garden and paragraphs describing the neglected house behind it. The contrast tells a story without narration."
                  effect="Creates meaning through comparison. The reader draws conclusions from the gap between the two images."
                />
                <TechniqueCard
                  name="Motif / Recurring Image"
                  definition="Repeating an image, object, or phrase throughout the piece with evolving significance."
                  example={
                    'A clock is mentioned three times: first ticking normally, then slowing, then stopping. Each mention carries more weight.'
                  }
                  effect="Creates thematic cohesion and shows deliberate crafting. The motif becomes a structural spine for the piece."
                />
                <TechniqueCard
                  name="Single Moment, Extended"
                  definition="Rather than covering a long period, focus on a single moment and explore it in extreme detail."
                  example="An entire descriptive piece could cover just the moment someone opens a front door and steps inside. Every sensation, memory, and thought is expanded."
                  effect="Allows for richly detailed, deeply immersive writing. Prevents the common mistake of trying to cover too much ground."
                />
                <TechniqueCard
                  name="Dual Narrative"
                  definition="Telling two stories simultaneously -- perhaps two time periods, two characters, or two locations."
                  example="Alternate between a child's experience of a place and an adult returning to the same place 20 years later. The parallels and differences create meaning."
                  effect="Shows structural ambition and maturity. The interplay between the two strands generates its own meaning."
                />
              </div>
            </Section>

            {/* ─── VOCABULARY ENHANCEMENT ────────────────────────── */}
            <Section id="vocabulary" title={tr(`Vocabulary Enhancement`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Using precise, ambitious vocabulary does not mean using long or obscure words. It
                means choosing the <em>exact</em> word for the <em>exact</em> effect you want. The
                tables below show how to replace common words with more precise alternatives.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Tier 2 &amp; Tier 3 Words`)}
              </h3>
              <div className="mb-6 rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>{tr(`Tier 1 words`)}</strong> are everyday words everyone knows (happy,
                  big, nice).
                  <strong> Tier 2 words</strong> are more precise and academic -- these are the
                  sweet spot for exams (elated, imposing, amiable).
                  <strong> Tier 3 words</strong> are subject-specific or rare -- use sparingly
                  (sibilance, anagnorisis).
                </p>
                <p className="text-sm text-primary font-semibold">
                  Aim to use Tier 2 words throughout your writing. They show precision without
                  sounding forced.
                </p>
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Alternatives to Overused Words`)}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                        {tr(`Instead of...`)}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Try...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        common: 'Said',
                        alternatives:
                          'murmured, declared, conceded, snapped, whispered, insisted, muttered, remarked, stammered, urged',
                      },
                      {
                        common: 'Walked',
                        alternatives:
                          'strode, trudged, shuffled, ambled, staggered, marched, crept, sauntered, stumbled, plodded',
                      },
                      {
                        common: 'Nice',
                        alternatives:
                          'pleasant, agreeable, charming, delightful, gracious, amiable, genial, endearing, warm, considerate',
                      },
                      {
                        common: 'Good',
                        alternatives:
                          'admirable, commendable, exemplary, accomplished, proficient, laudable, superb, exceptional, impressive, outstanding',
                      },
                      {
                        common: 'Bad',
                        alternatives:
                          'dire, appalling, wretched, deplorable, grim, abysmal, dreadful, atrocious, dismal, lamentable',
                      },
                      {
                        common: 'Happy',
                        alternatives:
                          'elated, buoyant, radiant, content, jubilant, euphoric, exhilarated, gleeful, blissful, overjoyed',
                      },
                      {
                        common: 'Sad',
                        alternatives:
                          'melancholy, forlorn, despondent, bereft, wistful, sombre, crestfallen, desolate, mournful, disconsolate',
                      },
                      {
                        common: 'Scared',
                        alternatives:
                          'apprehensive, petrified, unnerved, paralysed, stricken, rattled, horrified, panic-stricken, alarmed, dread-filled',
                      },
                      {
                        common: 'Angry',
                        alternatives:
                          'incensed, seething, livid, indignant, resentful, irate, furious, enraged, bristling, exasperated',
                      },
                      {
                        common: 'Big',
                        alternatives:
                          'imposing, vast, colossal, towering, sprawling, monumental, immense, formidable, cavernous, expansive',
                      },
                      {
                        common: 'Small',
                        alternatives:
                          'diminutive, cramped, meagre, insignificant, compact, minute, microscopic, slight, slender, modest',
                      },
                      {
                        common: 'Looked',
                        alternatives:
                          'gazed, glanced, peered, scrutinised, surveyed, glimpsed, examined, studied, squinted, stared',
                      },
                      {
                        common: 'Dark',
                        alternatives:
                          'shadowy, murky, gloomy, obsidian, ink-black, impenetrable, dim, dusky, sombre, shrouded',
                      },
                      {
                        common: 'Old',
                        alternatives:
                          'ancient, weathered, dilapidated, decrepit, timeworn, venerable, crumbling, faded, worn, aged',
                      },
                      {
                        common: 'Quiet',
                        alternatives:
                          'hushed, muted, subdued, still, soundless, deathly silent, tranquil, serene, noiseless, muffled',
                      },
                      {
                        common: 'Ran',
                        alternatives:
                          'sprinted, bolted, dashed, hurtled, scrambled, fled, charged, tore, raced, careered',
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted'}>
                        <td className="px-4 py-3 font-medium text-red-500 line-through">
                          {row.common}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{row.alternatives}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                <p className="text-sm font-bold text-foreground">
                  {tr(`Top Tip: Precision Over Complexity`)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  &ldquo;Trudged&rdquo; is better than &ldquo;walked slowly&rdquo; not because it is
                  a harder word, but because it does more work in fewer words. It tells us the
                  character is tired, reluctant, or defeated. One word replaces three and adds
                  emotional information. That is what markers mean by &ldquo;ambitious
                  vocabulary.&rdquo;
                </p>
              </div>
            </Section>

            {/* ─── MODEL DESCRIPTIVE RESPONSE ────────────────────── */}
            <Section id="model-descriptive" title={tr(`Model Response: Descriptive Writing`)}>
              <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="font-bold text-foreground">Task</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Describe a place that feels abandoned. You could write about the setting, the
                  atmosphere, or how the place makes you feel.
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                  {tr(`Hover over highlighted text for annotations`)}
                </span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md space-y-5 text-[15px] leading-[1.9] text-foreground">
                <p>
                  <Annotation note="Single-word opening: creates immediate atmosphere and arresting tone.">
                    Stillness.
                  </Annotation>{' '}
                  That was what struck me first -- not the dust, not the peeling walls, not the
                  faint smell of damp that clung to everything like a second skin. It was the{' '}
                  <Annotation note="Repetition of key word from opening reinforces the dominant mood.">
                    stillness
                  </Annotation>
                  . The kind that has weight. The kind that settles on your shoulders and presses
                  down, gently but insistently, until you find yourself{' '}
                  <Annotation note="Personification of silence -- giving it physical properties creates an unsettling, oppressive atmosphere.">
                    holding your breath just to match it
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Zoom-in technique: moves from wide room to specific detail (the chair). Mimics a camera.">
                    The room was large -- once grand, perhaps -- but the years had taken their toll.
                  </Annotation>{' '}
                  Wallpaper, once cream or gold, had darkened to the colour of old teeth. It{' '}
                  <Annotation note="Personification: the wallpaper 'curling away' suggests the house is shedding its own skin. Adds to the decay imagery.">
                    curled away from the corners in long, slow strips, as though the walls
                    themselves were trying to undress.
                  </Annotation>{' '}
                  Beneath, the plaster was mapped with cracks -- tiny tributaries that branched and
                  forked and led, inevitably,{' '}
                  <Annotation note="Extended metaphor: cracks as rivers/tributaries. The word 'nowhere' subtly reinforces the theme of abandonment.">
                    nowhere
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Shift in focus from visual to auditory senses -- engaging a different sense to deepen immersion.">
                    I listened.
                  </Annotation>{' '}
                  Somewhere, a pipe ticked -- a{' '}
                  <Annotation note="Simile: the metronome comparison makes the sound feel measured, relentless, slightly eerie.">
                    slow, metallic pulse, like a metronome counting down to something no one would
                    witness
                  </Annotation>
                  . Above me, the ceiling sagged. A watermark spread across its surface like a
                  bruise that had never healed, brown at its edges, darker at its centre, as though
                  the house were{' '}
                  <Annotation note="Personification combined with metaphor: the house 'bleeding inward' makes it feel alive but wounded.">
                    bleeding slowly inward
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Zoom in to a single object: the chair. This creates a narrative implication -- someone once sat here.">
                    A single armchair sat in the centre of the room
                  </Annotation>
                  , angled slightly towards the window as though whoever had last sat there had been
                  watching for something. Or someone.{' '}
                  <Annotation note="Short sentence fragment. The rhythm slows and the reader pauses. Creates a reflective, melancholy beat.">
                    Waiting.
                  </Annotation>{' '}
                  Its fabric was threadbare,{' '}
                  <Annotation note="Tactile (touch) sensory detail. The reader can almost feel the worn-thin fabric under their fingers.">
                    worn smooth in the places where hands had rested and shifted and rested again
                  </Annotation>
                  , and in the cushion was an indent -- a body&apos;s ghost, pressed into the foam
                  by years of sitting, thinking,{' '}
                  <Annotation note="Rule of three with a climactic final word. 'Disappearing' introduces the theme of absence and loss.">
                    disappearing
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Olfactory (smell) detail -- this is the sense students most often forget to include.">
                    The air tasted of endings.
                  </Annotation>{' '}
                  <Annotation note="Synaesthesia: 'tasted' applied to a smell/atmosphere. Unusual sensory blending shows creative control.">
                    Of cold tea left too long
                  </Annotation>
                  , of newspapers turning yellow, of the{' '}
                  <Annotation note="Abstract concept made concrete through a striking metaphorical image.">
                    particular staleness that accompanies a life folded up and put away
                  </Annotation>
                  . I wanted to open a window, but the frames had swollen shut, sealed by rain and
                  neglect and time, and when I pressed my palm against the glass,{' '}
                  <Annotation note="Sensory detail (touch + visual). The condensation is both literal and symbolic -- the narrator leaves a trace in a place that has erased all others.">
                    the cold bit through to the bone and left a cloud of condensation that faded
                    almost before I pulled my hand away
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Circular structure: returns to the concept of 'stillness' from the opening. The piece ends where it began, but the reader now understands its full weight.">
                    I stood there for a long time, listening to the stillness, letting it settle
                    around me like dust.
                  </Annotation>{' '}
                  <Annotation note="Reflective ending: the narrator draws a quiet conclusion. The final image (a held breath) echoes the opening paragraph, completing the circle.">
                    There was nothing left to see. Nothing left to hear. And yet the house felt full
                    -- full of all the things that had been taken from it, all the voices that had
                    faded, all the breaths that had been drawn and held and, finally, let go.
                  </Annotation>
                </p>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-success bg-success/5 p-5">
                <p className="font-bold text-foreground">
                  {tr(`Why This Response Works (Marker Perspective)`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>
                    {tr(
                      `Opens with a single-word sentence that immediately establishes atmosphere`,
                    )}
                  </li>
                  <li>
                    Engages all five senses: sight (wallpaper, cracks), sound (pipe ticking), touch
                    (cold glass), smell/taste (air of endings), implied sound (silence)
                  </li>
                  <li>
                    {tr(
                      `Sustained &ldquo;show, don&apos;t tell&rdquo; -- no emotions are named directly`,
                    )}
                  </li>
                  <li>
                    Figurative language is varied and purposeful: simile, metaphor, personification,
                    synaesthesia
                  </li>
                  <li>
                    {tr(
                      `Structural control: zoom-in from room to chair to hand; shift from external observation to internal reflection`,
                    )}
                  </li>
                  <li>{tr(`Circular structure: opens and closes with &ldquo;stillness&rdquo;`)}</li>
                  <li>
                    {tr(
                      `Vocabulary is precise, not showy: &ldquo;threadbare,&rdquo; &ldquo;tributaries,&rdquo; &ldquo;indent&rdquo;`,
                    )}
                  </li>
                  <li>{tr(`Varied sentence lengths create rhythm and pace`)}</li>
                </ul>
              </div>
            </Section>

            {/* ─── MODEL NARRATIVE RESPONSE ──────────────────────── */}
            <Section id="model-narrative" title={tr(`Model Response: Narrative Writing`)}>
              <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="font-bold text-foreground">Task</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Write a story about a moment that changed everything. You may wish to consider a
                  turning point, a discovery, or a decision.
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                  {tr(`Hover over highlighted text for annotations`)}
                </span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md space-y-5 text-[15px] leading-[1.9] text-foreground">
                <p>
                  <Annotation note="In medias res opening: drops straight into tension. The reader is immediately off-balance.">
                    The letter was already open when I found it.
                  </Annotation>{' '}
                  Not torn -- cut. A clean, deliberate slit along the top, as though whoever had
                  opened it had taken their time.{' '}
                  <Annotation note="Short sentence creates a pause. The detail about 'no rush' is unsettling because it implies premeditation.">
                    No rush.
                  </Annotation>{' '}
                  No urgency. Just the quiet certainty of someone who already knew what was inside.
                </p>

                <p>
                  <Annotation note="Flashback signalled clearly with a time marker. Takes the reader back to provide context.">
                    I should go back. Three days earlier
                  </Annotation>
                  , the kitchen had smelled of coffee and toast and the particular warmth that fills
                  a house on a Sunday morning when no one has anywhere to be. My mother was at the
                  table, reading the paper with her glasses pushed up onto her forehead -- a habit
                  that drove my father mad, though{' '}
                  <Annotation note="Character development through small, habitual detail. This tiny observation says more about the family dynamic than a paragraph of exposition.">
                    he had long since stopped mentioning it
                  </Annotation>
                  .
                </p>

                <p>&ldquo;Post&apos;s come,&rdquo; she said, without looking up.</p>
                <p>
                  <Annotation note="Dialogue is natural and reveals character. The mother's casual tone contrasts with the significance the narrator places on the letter.">
                    I picked up the stack from the mat. Bills. A catalogue. A white envelope with no
                    return address.
                  </Annotation>
                </p>
                <p>&ldquo;Anything interesting?&rdquo;</p>
                <p>
                  &ldquo;Just the usual.&rdquo; I put the white envelope at the bottom of the pile
                  and carried everything to the table.{' '}
                  <Annotation note="Foreshadowing: the narrator hides the envelope. This plants intrigue and signals that the letter matters.">
                    I did not mention the white envelope. I don&apos;t know why.
                  </Annotation>
                </p>

                <p>
                  <Annotation note="Time skip: 'Three days later' returns us to the present. The gap creates suspense -- what happened in between?">
                    Three days later, I found it in her drawer.
                  </Annotation>{' '}
                  Not hidden exactly, but placed with care between a stack of old photographs and a
                  book I had never seen her read. I should not have been looking. I knew that then,
                  and I know it now. But{' '}
                  <Annotation note="Withholding information: the narrator describes looking but delays telling us what the letter said. Builds tension.">
                    curiosity is its own kind of gravity, and I had been falling towards that drawer
                    since Sunday morning
                  </Annotation>
                  .
                </p>

                <p>
                  <Annotation note="Pacing: slows right down. Short sentences create a careful, deliberate rhythm -- the reader slows down too.">
                    I unfolded the letter. Read it once. Read it again.
                  </Annotation>{' '}
                  The words were simple enough -- no legal language, no formality, just a few lines
                  in a handwriting I did not recognise. But simple words can carry{' '}
                  <Annotation note="The narrator reflects on the power of language itself. This philosophical aside adds depth and maturity.">
                    impossible weight
                  </Annotation>
                  , and by the time I reached the signature at the bottom, the room had changed. The
                  light was the same. The curtains had not moved.{' '}
                  <Annotation note="Repetition of 'same' to emphasise that the change is internal, not external. Classic 'show don't tell.'">
                    Everything was the same. Except me.
                  </Annotation>
                </p>

                <p>
                  <Annotation note="Deliberately withholds the letter's content. This is a structural choice: the story is about the IMPACT, not the information.">
                    I will not tell you what the letter said.
                  </Annotation>{' '}
                  That is not the point of this story. The point is what happened next: I folded it
                  back along its creases, placed it back between the photographs and the unread
                  book, and closed the drawer.{' '}
                  <Annotation note="The character's reaction is physical and precise. We understand the emotional weight through action, not explanation.">
                    I pressed the heels of my hands against my eyes until I saw colours.
                  </Annotation>{' '}
                  Then I went downstairs and made a cup of tea.
                </p>

                <p>
                  <Annotation note="Dialogue ending: the conversation mirrors the earlier one, creating a circular structure. But the emotional weight has shifted completely.">
                    My mother was in the garden.
                  </Annotation>{' '}
                  &ldquo;Everything alright?&rdquo; she called, shielding her eyes from the sun.
                </p>
                <p>
                  <Annotation note="Ambiguous ending: the reader knows the narrator is lying. The gap between what is said and what is felt creates powerful dramatic irony.">
                    I looked at her for a long moment -- longer than usual, long enough that she
                    tilted her head and almost asked again. &ldquo;Fine,&rdquo; I said. &ldquo;Just
                    the usual.&rdquo;
                  </Annotation>
                </p>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-success bg-success/5 p-5">
                <p className="font-bold text-foreground">
                  {tr(`Why This Response Works (Marker Perspective)`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>
                    {tr(`Opens in medias res with immediate intrigue (the pre-opened letter)`)}
                  </li>
                  <li>
                    {tr(`Uses flashback structure: present &rarr; three days ago &rarr; present`)}
                  </li>
                  <li>
                    {tr(`Foreshadowing: hiding the envelope, the &ldquo;gravity&rdquo; metaphor`)}
                  </li>
                  <li>
                    {tr(
                      `Information is deliberately withheld -- the letter&apos;s content is never revealed`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Dialogue is natural and serves multiple functions (character, pace, circular structure)`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Pacing varies: slow reflective passages alternate with short, punchy sentences`,
                    )}
                  </li>
                  <li>
                    Circular ending: &ldquo;Just the usual&rdquo; echoes the earlier conversation,
                    but with entirely different meaning
                  </li>
                  <li>
                    {tr(
                      `Show, don&apos;t tell: the narrator&apos;s emotions are conveyed through actions (pressing hands against eyes, making tea) not labels`,
                    )}
                  </li>
                  <li>
                    Mature narrative voice: reflective, controlled, and deliberately ambiguous
                  </li>
                </ul>
              </div>
            </Section>

            {/* ─── PLANNING TEMPLATES ────────────────────────────── */}
            <Section id="planning" title={tr(`Planning Templates`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Five minutes of planning before you write is the difference between a rambling piece
                and a structured one. Use these templates to organise your ideas before putting pen
                to paper.
              </p>

              {/* Spider Diagram */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Spider Diagram (Descriptive Writing)`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Place the topic or image in the centre. Branch out into the five senses, then add
                specific details and language techniques for each. This ensures your description is
                varied and immersive.
              </p>
              <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex flex-col items-center">
                  {/* Centre */}
                  <div className="rounded-full bg-primary px-6 py-4 text-white font-bold text-center text-sm shadow-md">
                    TOPIC
                    <br />
                    <span className="text-xs font-normal text-muted-foreground">
                      e.g. &ldquo;An abandoned fairground&rdquo;
                    </span>
                  </div>
                  {/* Branches */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    {[
                      {
                        sense: 'Sight',
                        details: 'Rusted Ferris wheel, faded signs, peeling paint, cracked mirrors',
                        technique: 'Simile, zoom in',
                      },
                      {
                        sense: 'Sound',
                        details: 'Creaking metal, wind through gaps, silence, distant traffic',
                        technique: 'Onomatopoeia, personification',
                      },
                      {
                        sense: 'Touch',
                        details: 'Cold metal railings, rough concrete, damp wood',
                        technique: 'Tactile imagery',
                      },
                      {
                        sense: 'Smell',
                        details: 'Rust, damp, old popcorn, oil',
                        technique: 'Synaesthesia',
                      },
                      {
                        sense: 'Taste',
                        details: 'Dust on the tongue, metallic air',
                        technique: 'Metaphor',
                      },
                      {
                        sense: 'Emotion / Atmosphere',
                        details: 'Eerie, melancholy, nostalgic, haunting',
                        technique: 'Pathetic fallacy, semantic field',
                      },
                    ].map((branch, i) => (
                      <div key={i} className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <p className="font-bold text-foreground text-sm">{branch.sense}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{branch.details}</p>
                        <p className="mt-2 text-xs text-primary">
                          <span className="font-semibold">Techniques:</span> {branch.technique}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5-Part Structure */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Five-Part Structure (Narrative Writing)`)}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Use this structure to plan a narrative with clear direction, rising tension, and a
                satisfying resolution. Each section maps to roughly one or two paragraphs.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  {
                    num: 1,
                    title: 'Opening / Hook',
                    description:
                      "Grab the reader's attention. Use one of the 12 opening techniques above. Establish tone, setting, or character in a single paragraph. Do NOT start with backstory.",
                    questions:
                      'What is the first image, sound, or line of dialogue? What mood do you want to create?',
                    length: '1 paragraph',
                  },
                  {
                    num: 2,
                    title: 'Build-Up / Context',
                    description:
                      "Slow down. Introduce the character, setting, or situation. Use sensory description and 'show don't tell.' Plant any foreshadowing here.",
                    questions:
                      'Who is the character? Where are they? What is their emotional state? What details hint at what will come?',
                    length: '1-2 paragraphs',
                  },
                  {
                    num: 3,
                    title: 'Turning Point / Climax',
                    description:
                      'The moment everything shifts. This is the most important part of your story. Slow the pace right down. Use short sentences for impact, long sentences for tension. Every word counts here.',
                    questions:
                      'What happens? How does the character react physically? What changes internally?',
                    length: '1-2 paragraphs',
                  },
                  {
                    num: 4,
                    title: 'Aftermath / Falling Action',
                    description:
                      'Show the consequences. The character processes what has happened. Use reflection, internal monologue, or a shift in how they perceive the world around them.',
                    questions:
                      "How has the character changed? What do they notice now that they didn't before? What do they feel but not say?",
                    length: '1 paragraph',
                  },
                  {
                    num: 5,
                    title: 'Ending / Resolution',
                    description:
                      'Use one of the ending techniques above. Do NOT rush. Do NOT try to explain everything. Leave the reader with an image, a line of dialogue, or a thought that resonates.',
                    questions:
                      'Does it echo the opening (circular)? Is it ambiguous? Does it end on an image or a line of dialogue?',
                    length: '1 short paragraph or single sentence',
                  },
                ].map((part) => (
                  <div
                    key={part.num}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {part.num}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{part.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{part.description}</p>
                        <p className="mt-2 text-sm text-primary">
                          <span className="font-semibold">{tr(`Ask yourself:`)}</span>{' '}
                          {part.questions}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Approximate length: {part.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Planning Checklist */}
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {tr(`Quick Planning Checklist`)}
              </h3>
              <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  Before you start writing, check these boxes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Do I know my opening technique? (Write the first sentence in your plan.)',
                    'Do I know my ending? (Even a rough idea. Plan backwards from the end.)',
                    'Have I chosen at least 3 senses to include?',
                    'Have I planned at least 2 figurative language techniques?',
                    'Is my structure clear? (What comes in each paragraph?)',
                    'Am I covering a small enough time frame? (One moment is better than a whole day.)',
                    'Have I identified 3-4 Tier 2 vocabulary words I want to use?',
                    'Does my piece have a consistent mood or atmosphere?',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-primary/30 bg-card text-xs text-primary">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* ─── COMMON MISTAKES ───────────────────────────────── */}
            <Section id="mistakes" title={tr(`Common Mistakes &amp; How to Avoid Them`)}>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Even strong writers fall into these traps. Recognising these patterns in your own
                work is the fastest way to improve. Each mistake below includes a concrete fix and a
                before/after example.
              </p>

              <div className="space-y-4">
                <MistakeCard
                  mistake="1. Telling Instead of Showing"
                  why="Naming emotions directly ('She was sad') is the single most common weakness in creative writing. It tells the marker what to feel instead of making them feel it."
                  fix="Replace every named emotion with a physical action, sensory detail, or piece of body language that demonstrates the feeling."
                  exampleBad="She was really upset and started crying."
                  exampleGood="Her chin trembled. She turned to the window, pressing her forehead against the cold glass, and let the tears come without wiping them away."
                />
                <MistakeCard
                  mistake="2. Covering Too Much Ground"
                  why='Students try to tell a whole life story or describe an entire day. The result is thin, rushed writing with no depth. Markers call this "narrative sprawl."'
                  fix="Focus on a single moment, scene, or location. An entire piece could cover just the act of opening a door and stepping inside. Depth beats breadth every time."
                  exampleBad="I woke up, had breakfast, went to school, and then at lunch something happened..."
                  exampleGood="The corridor was empty. My footsteps echoed off the tiles -- too loud, too fast. I stopped outside Room 14 and listened."
                />
                <MistakeCard
                  mistake="3. Overusing Adjectives"
                  why='Piling up adjectives ("the big, dark, scary, cold, ancient house") weakens each one. The reader stops seeing any of them.'
                  fix="Choose ONE precise adjective or replace the adjective with a verb or image. 'The house loomed' is stronger than 'the big, dark house.'"
                  exampleBad="The beautiful, bright, golden, warm sun shone down on the lovely green grass."
                  exampleGood="The sun pressed down, heavy and golden, turning the grass to bronze."
                />
                <MistakeCard
                  mistake="4. Cliched Figurative Language"
                  why='"Her eyes were as blue as the ocean" and "time stood still" are so overused that they have lost all impact. Markers notice cliches immediately.'
                  fix="If you have heard the comparison before, do not use it. Push past the first idea that comes to mind. The second or third idea is usually more original."
                  exampleBad="Her heart was pounding like a drum and butterflies filled her stomach."
                  exampleGood="Something tight and electric coiled in her chest. She swallowed, but the dryness stayed."
                />
                <MistakeCard
                  mistake="5. Starting with Backstory"
                  why='"My name is Emma and I am 15 years old. I live in a small town..." This is a guaranteed way to bore the marker in the first line.'
                  fix="Start with action, sensory detail, dialogue, or atmosphere. The reader does not need context first -- they need a reason to keep reading."
                  exampleBad="My name is Sarah. I was born in London but moved to the countryside when I was young. This story is about the time I..."
                  exampleGood={
                    '"Don\'t look back." Her voice cut through the darkness, sharp and certain. I didn\'t look back.'
                  }
                />
                <MistakeCard
                  mistake="6. Rushing the Ending"
                  why='Running out of time or ideas leads to endings like "and then I woke up" or "and everything was fine." These undermine the entire piece.'
                  fix="Plan your ending BEFORE you start writing. Even a rough idea. A strong ending can elevate a mediocre piece; a weak ending can ruin a good one."
                  exampleBad="And then I woke up and realised it was all a dream. I went downstairs and had breakfast. The end."
                  exampleGood="She opened her hand and let the stone fall into the water. It sank without a ripple."
                />
                <MistakeCard
                  mistake="7. Dialogue Without Purpose"
                  why={
                    'Long stretches of "Hello, how are you? I\'m fine, thanks" dialogue slow the pace and reveal nothing about character.'
                  }
                  fix={
                    'Every line of dialogue should either reveal character, advance the plot, or create tension. If it does none of these, cut it. Use "said" bookisms sparingly.'
                  }
                  exampleBad={
                    '"Hi," she said. "How are you?" he asked. "I\'m fine," she replied. "Good," he said.'
                  }
                  exampleGood={
                    '"You\'re late." She didn\'t look up. "I know." He set the keys on the table, carefully, as though the sound might break something.'
                  }
                />
                <MistakeCard
                  mistake="8. Inconsistent Tense"
                  why="Switching between past and present tense mid-paragraph is one of the most common technical errors. It breaks the reader's immersion."
                  fix={
                    "Choose past or present tense and stick with it. If you use flashbacks, signal the shift clearly ('I remembered...') and return to your base tense afterwards."
                  }
                  exampleBad="She walked to the door and opens it. The hallway was dark and she turns on the light."
                  exampleGood="She walked to the door and opened it. The hallway was dark. She reached for the light switch."
                />
                <MistakeCard
                  mistake="9. Purple Prose (Over-Writing)"
                  why='Trying too hard to sound "literary" leads to sentences that are so elaborate they become unreadable. The meaning drowns in decoration.'
                  fix="If a sentence needs to be read twice to be understood, simplify it. Clarity is not the enemy of creativity -- it is its foundation."
                  exampleBad="The luminescent, incandescent orb of celestial magnificence descended majestically below the undulating horizon of the cerulean firmament."
                  exampleGood="The sun sank behind the hills, dragging the last of the light with it."
                />
                <MistakeCard
                  mistake="10. No Structural Control"
                  why="Writing without a plan leads to paragraphs of similar length, no shifts in focus, and a flat reading experience. The marker sees no evidence of deliberate structure."
                  fix="Vary paragraph length deliberately. Use a one-sentence paragraph for impact. Shift between external description and internal reflection. Open and close with intention."
                  exampleBad="[Five paragraphs of equal length, all describing the same thing in the same way, with no change in pace or focus.]"
                  exampleGood="[Opening paragraph (4 lines). Short paragraph (1 sentence). Detailed paragraph (6 lines). Dialogue paragraph (2 lines). Reflective closing (3 lines).]"
                />
              </div>
            </Section>

            {/* Back to hub */}
            <div className="flex justify-center pt-8">
              <Link
                href="/resources/writing-skills"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
              >
                &larr; Back to Writing Skills Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
