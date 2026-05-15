import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  openGraph: {
    title: 'Literary Device Speed Round — 5-Minute Starter',
    description:
      'A 5-minute quick-fire starter with 10 literary device definitions. No printing required.',
  },
  title: 'Literary Device Speed Round — 5-Minute Starter',
  description:
    'A 5-minute quick-fire starter with 10 literary device definitions. No printing required.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/teacher-library/starters/literary-device-speed-round',
  },
}

const ROUND: { number: number; clue: string; answer: string }[] = [
  {
    number: 1,
    clue: "A comparison using 'like' or 'as'.",
    answer: 'Simile',
  },
  {
    number: 2,
    clue: "Two words that contradict each other placed side by side (e.g. 'bitter sweet').",
    answer: 'Oxymoron',
  },
  {
    number: 3,
    clue: "Giving human qualities to something that isn't human.",
    answer: 'Personification',
  },
  {
    number: 4,
    clue: "A word that sounds like what it means (e.g. 'buzz').",
    answer: 'Onomatopoeia',
  },
  {
    number: 5,
    clue: 'Deliberate, dramatic exaggeration for effect.',
    answer: 'Hyperbole',
  },
  {
    number: 6,
    clue: 'A line of poetry that runs on to the next without punctuation.',
    answer: 'Enjambment',
  },
  {
    number: 7,
    clue: "Weather or setting that reflects a character's emotions.",
    answer: 'Pathetic fallacy',
  },
  {
    number: 8,
    clue: 'A hint early in a text about something that will happen later.',
    answer: 'Foreshadowing',
  },
  {
    number: 9,
    clue: 'A question asked for effect, not an answer.',
    answer: 'Rhetorical question',
  },
  {
    number: 10,
    clue: 'A recurring image, object, or idea in a text.',
    answer: 'Motif',
  },
]

export default function LiteraryDeviceSpeedRound() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span>/</span>
            <Link href="/resources/teacher-library/starters" className="hover:text-primary">
              Starters
            </Link>
            <span>/</span>
            <span className="text-foreground">Literary Device Speed Round</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For Teachers
            </span>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
              Starter
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
            Literary Device Speed Round
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A 5-minute quick-fire starter. 10 literary devices, 10 snappy clues — students shout out
            the answer or write it on a mini-whiteboard. No prep, no printing.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Duration
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">5 minutes</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Year Group
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">KS3–KS4</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Prep
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">None</div>
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
          <h2 className="text-2xl font-bold text-foreground">How to Run</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground">
            <li>
              Project the title and a short instruction: &quot;10 devices, 10 clues, 5
              minutes.&quot;
            </li>
            <li>
              Read clue 1 aloud. Give 10 seconds of thinking time. Students write on a
              mini-whiteboard or shout out.
            </li>
            <li>Reveal the answer on the board. Keep the pace brisk.</li>
            <li>Repeat for all 10 clues.</li>
            <li>
              Finish with a 30-second recap: students share one device they got right and one they
              want to remember.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">The Ten Clues</h2>
          <div className="mt-4 space-y-3">
            {ROUND.map((r) => (
              <div key={r.number} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {r.number}
                  </span>
                  <div>
                    <p className="text-foreground">
                      <span className="font-semibold">Clue:</span> {r.clue}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="font-semibold text-success-700">Answer:</span> {r.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Differentiation Ideas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Give a word bank of all 10 answers on the board</li>
                <li>• Allow pair work</li>
                <li>• Read each clue twice</li>
                <li>• Start with the five easiest devices</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• After each answer, the student who got it gives a quotation example</li>
                <li>• Swap to rarer devices (zeugma, anaphora, litotes)</li>
                <li>• Add a bonus round of trickier devices</li>
                <li>• Challenge: use three of the devices in a single sentence</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom — Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Keep the pace:</strong> The magic of a speed round is momentum. Don&apos;t
              over-explain between clues.
            </li>
            <li>
              <strong>Use mini-whiteboards:</strong> Shouting out can leave quieter students behind.
              Whiteboards keep everyone in.
            </li>
            <li>
              <strong>Celebrate:</strong> A quick cheer or a high-five for the first to get each
              answer keeps energy high.
            </li>
            <li>
              <strong>Link to the lesson:</strong> Choose your 10 devices so at least two will
              appear in the main activity.
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
