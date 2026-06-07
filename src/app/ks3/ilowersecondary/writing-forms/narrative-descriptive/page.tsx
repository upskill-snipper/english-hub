import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_FORMS,
  WRITING_PURPOSES,
  WAO1_GRID,
  WAO2_GRID,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

// Pull the two relevant forms / purposes from the canonical spec list so a
// single correction propagates everywhere.
const NARRATIVE_FORM = WRITING_FORMS.find((f) => f === 'narrative')!
const DESCRIPTIVE_FORM = WRITING_FORMS.find((f) => f === 'descriptive')!
const ENTERTAIN = WRITING_PURPOSES.find((p) => p === 'entertain')!
const DESCRIBE = WRITING_PURPOSES.find((p) => p === 'describe')!

export const metadata: Metadata = {
  title: 'Narrative & descriptive writing - KS3 iLowerSecondary English writing-forms guide',
  description:
    'Master Section B narrative and descriptive writing: story arc, viewpoint, show-don’t-tell, dialogue punctuation, pace and endings; sensory imagery, zooming, expanded noun phrases, controlled figurative language and atmosphere - with two original annotated models.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/narrative-descriptive',
  },
  openGraph: {
    title: 'Narrative & descriptive writing - iLowerSecondary writing-forms guide',
    description:
      'How to control story arc, viewpoint and pace, and how to describe with sensory precision and atmosphere - with two original annotated models mapped to the mark grids.',
  },
}

// ─── Narrative craft (original guidance) ──────────────────────────────

const NARRATIVE_CRAFT = [
  {
    title: 'Structure: the story arc',
    body: 'Shape, not length, scores. Open in a moment that already matters, build a complication that raises the stakes, reach a turning point, then resolve. A tiny story told fully beats a sprawling one that runs out of time.',
  },
  {
    title: 'Viewpoint',
    body: 'Choose first person ("I") for intimacy or third person ("she", "he") for control, and never drift between them. A consistent perspective is part of how the form is "established and maintained".',
  },
  {
    title: 'Show, don’t tell',
    body: 'Do not write "she was terrified." Show the symptom and let the reader name the feeling: "Her keys jittered against the lock; on the third try the door finally gave." Emotion shown is emotion the reader feels.',
  },
  {
    title: 'Dialogue, punctuated correctly',
    body: 'Speech does work telling cannot: it reveals character and accelerates pace. But it must be demarcated accurately - new speaker, new line; speech marks enclosing the spoken words; the punctuation inside them.',
  },
  {
    title: 'Pace',
    body: 'Short sentences sprint; longer, layered sentences slow time for reflection or tension. Vary deliberately. A single one-word line after a long paragraph lands like a slammed door.',
  },
  {
    title: 'A satisfying ending',
    body: 'Resolve the question the opening raised - do not simply stop, and never end with "then I woke up". A controlled close that echoes an earlier image gives the piece coherence the top band rewards.',
  },
]

const DIALOGUE_RULES = [
  'Enclose the exact spoken words in double speech marks: She said, "We should turn back."',
  'Put the punctuation that belongs to the speech inside the closing speech mark: "Run!" he shouted.',
  'When a reporting clause follows, use a comma before the closing mark: "It is late," she murmured.',
  'Start a new line for each new speaker so the reader never loses track of who is talking.',
  'Capitalise the first word inside the speech, even mid-sentence: He whispered, "Stay still."',
]

// ─── Descriptive craft (original guidance) ────────────────────────────

const DESCRIPTIVE_CRAFT = [
  {
    title: 'Sensory imagery',
    body: 'Reach past sight. Sound, smell, touch and even taste make a place real: the brine on the wind, the grit underfoot, the cold that finds the gaps in a coat. Two senses in one image is richer than five listed flatly.',
  },
  {
    title: 'Zoom in and out',
    body: 'Move like a camera. Open wide on the whole scene, then close in on one telling detail - a cracked tile, a single gull - then pull back. This deliberate movement gives a static description a structure.',
  },
  {
    title: 'Expanded noun phrases',
    body: 'Build precision before the noun: not "a boat", but "a low, salt-bleached fishing boat". Each modifier earns its place; the aim is exactness, not a pile of adjectives.',
  },
  {
    title: 'Figurative language, controlled',
    body: 'One well-judged metaphor that fits the mood beats three competing similes. Imagery should deepen atmosphere, not show off. Cut any comparison that pulls the reader away from the scene.',
  },
  {
    title: 'Atmosphere',
    body: 'Decide the dominant feeling - unease, calm, wonder - before you write, then make every detail serve it. Description without a controlling mood is just a list.',
  },
  {
    title: 'Structural movement',
    body: 'Even with no plot, give the reader a journey: through space (near to far), through time (dusk into dark), or through focus (the crowd, then one face). Movement is what makes description feel organised.',
  },
]

export default async function NarrativeDescriptivePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Writing forms',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms',
          },
          {
            name: 'Narrative & descriptive',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/narrative-descriptive',
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                {await t('ks3.page.bc.home')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                {await t('ks3.page.bc.ks3')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                {await t('ks3.page.bc.ils')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/writing-forms" className="hover:text-primary">
                {await t('ks3.page.bc.writing_forms')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-muted-foreground" aria-current="page">
              {await t('ks3.page.writing_forms.narrative_descriptive.bc')}
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Section B writing-forms guide
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-foreground">
            Narrative &amp; descriptive writing
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Two of the most rewarding Section B forms are the{' '}
            <strong className="capitalize">{NARRATIVE_FORM}</strong> (telling a story, usually to{' '}
            <em>{ENTERTAIN}</em>) and the <strong className="capitalize">{DESCRIPTIVE_FORM}</strong>{' '}
            (building a picture, usually to <em>{DESCRIBE}</em>). Both reward craft over content: it
            is <em>how</em> you write, not how much, that earns the marks. This guide covers the
            techniques that lift each form, then models them in two original pieces annotated to the
            official grids.
          </p>
        </header>

        <section aria-labelledby="narrative" className="mb-12">
          <h2 id="narrative" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Narrative: the craft
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            A story is a shape, not a string of events. These six controls turn a sequence of
            things-that-happened into a piece a reader feels.
          </p>
          <div className="space-y-4">
            {NARRATIVE_CRAFT.map((c) => (
              <div key={c.title} className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="dialogue"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="dialogue" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            Dialogue punctuation - get this exactly right
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            Accurate speech punctuation is one of the clearest signals of written control. The grid
            rewards correct demarcation; mishandled speech marks are a common reason strong stories
            slip a band.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground">
            {DIALOGUE_RULES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="openings"
          className="mb-12 rounded-lg border-l-4 border-primary/40 bg-card p-6 sm:p-8"
        >
          <h2 id="openings" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            Powerful opening techniques
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The first two sentences decide whether the reader leans in. Choose one technique
            deliberately - never warm up with the weather or waking up.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong>In medias res:</strong> open mid-action, then explain later. &ldquo;The rope
              slipped a second time, and this time my brother did not catch it.&rdquo;
            </li>
            <li>
              <strong>A single arresting detail:</strong> zoom straight onto one precise image.
              &ldquo;On the doorstep sat a shoe, just one, soaked through.&rdquo;
            </li>
            <li>
              <strong>A line of dialogue:</strong> drop the reader into a conversation already in
              progress. &ldquo;&lsquo;Don&rsquo;t look behind you,&rsquo; she said, far too
              calmly.&rdquo;
            </li>
            <li>
              <strong>A short, withholding sentence:</strong> state something that demands
              explanation. &ldquo;Afterwards, nobody mentioned the lighthouse again.&rdquo;
            </li>
            <li>
              <strong>Sensory immersion:</strong> place the reader inside the scene through more
              than one sense before any event occurs.
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="narrative-model"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="narrative-model"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Original model - narrative
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            An invented scene of roughly 230 words. Read it once for effect, then read the
            annotation that maps it to the mark grids.
          </p>

          <div className="rounded-lg bg-card p-5 border border-border/60">
            <p className="mb-3 text-base leading-relaxed text-foreground">
              The tide had already taken the lower steps by the time Nadia reached the jetty. She
              had told herself she would not come back here. She had come anyway.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Her grandfather&rsquo;s boat knocked against the post, patient and loyal, as if it had
              been waiting all year. Paint flaked from its name. She crouched, pressed two fingers
              to the cold wood, and listened to the harbour breathe.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              &ldquo;You came,&rdquo; said a voice behind her.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              She did not turn. &ldquo;You knew I would,&rdquo; she answered.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Her brother sat down beside her, leaving the careful gap they had left between each
              other since the funeral. For a while neither of them spoke. A gull tested the silence
              and gave up. The water climbed another step.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              &ldquo;He would have hated us arguing over a boat,&rdquo; she said at last.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              Her brother laughed, a small, surprised sound, and the gap between them closed by an
              inch. He untied the rope and held it out to her. She took it. Above the harbour the
              sky was letting go of the last of its light, and for the first time in a year the
              silence between them felt like something they had chosen together.
            </p>
          </div>

          <div className="mt-5 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Why this earns marks - mapped to {WAO1_GRID[3].level}/{WAO2_GRID[3].level} qualities
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong>Form &amp; structure (WAO1):</strong> a clear arc - a return, a
                confrontation withheld, a reconciliation - with a close that answers the opening
                (&ldquo;She had come anyway&rdquo; resolves into a chosen, shared silence). This is
                the &ldquo;complete control of paragraphs&rdquo; and &ldquo;coherence
                throughout&rdquo; the top band describes.
              </li>
              <li>
                <strong>Show, don&rsquo;t tell (WAO1):</strong> grief is never named; it is shown
                through &ldquo;the careful gap&rdquo; and the inch it closes - stylistic features
                that &ldquo;confidently fully support purpose&rdquo;.
              </li>
              <li>
                <strong>Pace (WAO1):</strong> short isolated lines (&ldquo;She had come
                anyway.&rdquo;) against longer reflective sentences control rhythm deliberately.
              </li>
              <li>
                <strong>Dialogue &amp; punctuation (WAO2):</strong> each new speaker starts a new
                line; speech is correctly enclosed and demarcated - &ldquo;sentences demarcated
                correctly and with sophisticated use of punctuation&rdquo;.
              </li>
              <li>
                <strong>Grammar &amp; vocabulary (WAO2):</strong> assured, varied sentences and
                precise word choice (&ldquo;patient and loyal&rdquo;, &ldquo;tested the
                silence&rdquo;) used &ldquo;effectively throughout&rdquo;.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="descriptive" className="mb-12">
          <h2 id="descriptive" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Descriptive: the craft
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Description with no plot still needs design. These six controls give a picture depth,
            atmosphere and a sense of movement.
          </p>
          <div className="space-y-4">
            {DESCRIPTIVE_CRAFT.map((c) => (
              <div key={c.title} className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="describe-warning"
          className="mb-12 rounded-lg border-l-4 border-red-500/40 bg-red-500/10 p-6 sm:p-8"
        >
          <h2
            id="describe-warning"
            className="mb-3 font-heading text-2xl font-semibold text-foreground"
          >
            Warning: describe, don&rsquo;t list
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The single most common way a description stalls is listing - naming many things quickly
            instead of inhabiting a few. Compare:
          </p>
          <div className="mb-3 rounded-lg bg-card p-4 border border-border/60">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-300">
              Listing (weak)
            </p>
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              The market had fruit, fish, bread, flowers, people, noise and colour everywhere.
            </p>
          </div>
          <div className="mb-4 rounded-lg bg-card p-4 border border-border/60">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Describing (strong)
            </p>
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              One stall held a pyramid of blood-dark cherries, and a fly worked its slow circuit
              above them while the seller dozed in the heat.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The fix: choose <em>fewer</em> things and go <em>closer</em>. One cherry stall, fully
            seen, beats a whole market named in a breath.
          </p>
        </section>

        <section
          aria-labelledby="descriptive-model"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="descriptive-model"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Original model - descriptive
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            An invented scene of roughly 235 words: a railway station at first light, with no story
            - only movement through the space.
          </p>

          <div className="rounded-lg bg-card p-5 border border-border/60">
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Before the trains, the station belongs to the cold. It pools along the empty platform
              like water that has nowhere to drain, settling under the iron benches and the unlit
              signs.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              High above, the great glass roof is still the colour of old pewter. Light arrives
              without sound. It slides down the long ribs of the roof, finds the rails, and lays a
              thin silver line all the way to the dark mouth of the tunnel.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Closer now, a single pigeon walks the platform edge with the importance of someone who
              owns it. Its head jerks; its feet make the smallest dry sound against the stone. Near
              the shuttered kiosk, yesterday&rsquo;s newspaper lifts one corner, considers flight,
              and lies back down.
            </p>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Then the air changes. Far down the line a rail begins to hum, a low note felt through
              the soles before it is heard. The pigeon freezes. The silver line trembles.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              And the station, which had belonged so completely to the cold and the quiet, draws one
              long breath and prepares, once more, to belong to everyone.
            </p>
          </div>

          <div className="mt-5 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Why this earns marks - mapped to {WAO1_GRID[3].level}/{WAO2_GRID[3].level} qualities
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong>Structural movement (WAO1):</strong> the description travels - wide on the
                cold platform, up to the roof, down the rails, in to one pigeon, then out as the
                train approaches. This deliberate organisation gives a plot-free piece
                &ldquo;coherence throughout&rdquo;.
              </li>
              <li>
                <strong>Atmosphere (WAO1):</strong> every detail serves one controlling mood -
                stillness on the edge of arrival - so stylistic features &ldquo;fully support
                purpose&rdquo;.
              </li>
              <li>
                <strong>Sensory range &amp; figurative control (WAO1):</strong> touch (the pooling
                cold), sight (pewter, silver), sound (the rail &ldquo;felt through the soles before
                it is heard&rdquo;); personification is used sparingly and with control, not piled
                up.
              </li>
              <li>
                <strong>Expanded noun phrases &amp; vocabulary (WAO2):</strong> precise, ambitious
                choices (&ldquo;the long ribs of the roof&rdquo;, &ldquo;the colour of old
                pewter&rdquo;) used confidently and accurately.
              </li>
              <li>
                <strong>Sentence range &amp; punctuation (WAO2):</strong> grammatically assured
                sentences of varied length, correctly demarcated, with controlled commas - the
                top-band accuracy descriptor.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="grids" className="mb-12">
          <h2 id="grids" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            The grids your writing is judged against
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Section B is marked on two objectives. The annotations above point back to these
            levelled descriptors. Notice how each level rewards <em>tighter</em> control - the
            journey to the top band is a journey from &ldquo;some&rdquo; to &ldquo;assured&rdquo;.
          </p>

          <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
            WAO1 - form, communication and purpose
          </h3>
          <div className="mb-8 space-y-4">
            {WAO1_GRID.map((row) => (
              <div key={row.level} className="rounded-lg bg-card p-5 border border-border/60">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-primary">{row.level}</span>
                  <span className="text-sm text-muted-foreground">{row.marks} marks</span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {row.descriptors.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
            WAO2 - grammar, punctuation and spelling
          </h3>
          <div className="space-y-4">
            {WAO2_GRID.map((row) => (
              <div key={row.level} className="rounded-lg bg-card p-5 border border-border/60">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-primary">{row.level}</span>
                  <span className="text-sm text-muted-foreground">{row.marks} marks</span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {row.descriptors.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="practice" className="mb-12">
          <h2 id="practice" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Practice prompts
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Two original prompts. Plan briefly, then write for about the recommended Section B
            window. Apply the techniques above and self-check against both grids.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-primary/40 bg-card p-5">
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                Prompt 1 - narrative
              </p>
              <p className="text-base italic leading-relaxed text-foreground">
                &ldquo;Write a story that begins the moment a long-kept secret is about to be spoken
                aloud. End it before the secret is fully told.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary/40 bg-card p-5">
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                Prompt 2 - descriptive
              </p>
              <p className="text-base italic leading-relaxed text-foreground">
                &ldquo;Describe an empty place in the few minutes before it fills with people. Move
                the reader through the space; do not tell a story.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-3">
            This writing-forms guide is provided for educational guidance (criticism and
            instruction). Both model pieces, the practice prompts and all examples are original
            works written by The English Hub and are not reproduced from any past paper or
            copyrighted source booklet. The English Hub is not affiliated with or endorsed by
            Pearson.
          </p>
        </footer>
      </article>
    </>
  )
}
