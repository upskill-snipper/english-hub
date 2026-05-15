import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  openGraph: {
    title: 'Poetry Annotation Framework — Worksheet',
    description:
      'A reusable poem annotation worksheet using the SMILE framework (Structure, Meaning, Imagery, Language, Effect).',
  },
  title: 'Poetry Annotation Framework — Worksheet',
  description:
    'A reusable poem annotation worksheet using the SMILE framework (Structure, Meaning, Imagery, Language, Effect).',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/teacher-library/worksheets/poetry-annotation-guide',
  },
}

export default function PoetryAnnotationWorksheet() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span>/</span>
            <Link href="/resources/teacher-library/worksheets" className="hover:text-primary">
              Worksheets
            </Link>
            <span>/</span>
            <span className="text-foreground">Poetry Annotation Guide</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For Teachers
            </span>
            <span className="inline-flex items-center rounded-full bg-success-50 px-3 py-1 text-xs font-semibold text-success-700 ring-1 ring-inset ring-success-200">
              Worksheet
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
            Poetry Annotation Framework (SMILE)
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A reusable annotation worksheet that teaches students to mark up any poem using the
            SMILE framework: Structure, Meaning, Imagery, Language, Effect. Pair with any anthology
            poem or unseen.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Year Group
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Year 10–11</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Format
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">2 sides A4</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Use for
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Any poem</div>
            </div>
          </div>

          {/* PDF export pending: needs server-side PDF generation route */}
          <div className="mt-6">
            <Button variant="default" size="lg">
              Download as PDF
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">PDF export coming soon</p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">How to Use This Worksheet</h2>
          <p className="mt-3 text-foreground">
            Read the poem through twice before you start annotating. The first read is for gist —
            what is the poem about? The second is for sound — read it aloud if you can. Then work
            through the five SMILE sections in order. Each section has a prompt and a space for your
            notes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">S — Structure</h2>
          <p className="mt-2 text-foreground">
            Look at the shape of the poem on the page. What do you notice?
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• How many stanzas? Are they regular or irregular?</li>
              <li>• Is there a rhyme scheme? Does it stay the same or change?</li>
              <li>• Is there a turning point (volta)?</li>
              <li>• Is the poem written in a specific form (sonnet, ballad, free verse)?</li>
              <li>• How does the poem end? Is there a sense of resolution or unease?</li>
            </ul>
            <div className="mt-4 h-24 rounded-md border border-dashed border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">M — Meaning</h2>
          <p className="mt-2 text-foreground">
            What is the poem actually about? Go beyond surface summary to the writer&apos;s main
            message.
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• Who is speaking? To whom?</li>
              <li>• What is the subject of the poem?</li>
              <li>• What is the main theme (power, love, loss, nature, identity)?</li>
              <li>• What is the writer&apos;s attitude to the subject?</li>
              <li>• What do you think the writer wants the reader to feel?</li>
            </ul>
            <div className="mt-4 h-24 rounded-md border border-dashed border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">I — Imagery</h2>
          <p className="mt-2 text-foreground">
            Pick the two or three most striking images. What do they make you picture?
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• Metaphors or similes?</li>
              <li>• Personification?</li>
              <li>• Visual, auditory, or tactile images?</li>
              <li>• Is there a recurring image (motif)?</li>
              <li>• What&apos;s the effect of each image on the reader?</li>
            </ul>
            <div className="mt-4 h-24 rounded-md border border-dashed border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">L — Language</h2>
          <p className="mt-2 text-foreground">
            Zoom in on word choices. Look at verbs, adjectives, and any unusual or repeated
            language.
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• Find two powerful verbs. Why are they chosen?</li>
              <li>• Find an unusual or striking adjective.</li>
              <li>• Is there any repetition? What is the effect?</li>
              <li>• Is the language formal, colloquial, or archaic?</li>
              <li>• Are there any sound devices (alliteration, sibilance, onomatopoeia)?</li>
            </ul>
            <div className="mt-4 h-24 rounded-md border border-dashed border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">E — Effect</h2>
          <p className="mt-2 text-foreground">
            Pull it all together. What is the overall effect of the poem on the reader?
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• How does the poem make you feel?</li>
              <li>• What ideas does it leave you thinking about?</li>
              <li>• What is the writer ultimately saying?</li>
              <li>• Write a one-sentence thesis that captures the poem&apos;s message.</li>
            </ul>
            <div className="mt-4 h-24 rounded-md border border-dashed border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Differentiation Ideas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Focus on only three letters of SMILE to start with</li>
                <li>• Provide a pre-annotated model of a similar poem</li>
                <li>• Use a glossary of poetic terms</li>
                <li>• Work in pairs to discuss before writing</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Add a sixth letter: C (Context) at the end</li>
                <li>• Link the poem to another anthology poem with a shared theme</li>
                <li>• Challenge to use three Tier 3 terms (e.g. enjambment)</li>
                <li>• Write a full analytical paragraph after annotation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom — Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Colour-code:</strong> Assign a colour to each SMILE letter so students can see
              the balance of their annotations.
            </li>
            <li>
              <strong>Gallery walk:</strong> After annotating, pin up students&apos; work and let
              them circulate to steal ideas.
            </li>
            <li>
              <strong>Re-use, re-use:</strong> Pair the worksheet with every new anthology poem to
              build fluency with the framework.
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
