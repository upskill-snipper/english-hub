import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Jekyll and Hyde Revision Pack — Teacher Library",
  description:
    "Full Jekyll and Hyde revision pack: quote bank, themes, characters, Victorian context, and graded essay plans.",
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/teacher-library/revision-packs/jekyll-and-hyde-pack",
  },
};

export default function JekyllAndHydePack() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/resources/teacher-library"
              className="hover:text-primary"
            >
              Teacher Library
            </Link>
            <span>/</span>
            <Link
              href="/resources/teacher-library/revision-packs"
              className="hover:text-primary"
            >
              Revision Packs
            </Link>
            <span>/</span>
            <span className="text-foreground">Jekyll and Hyde</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For Teachers
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
              Revision Pack
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
            Jekyll and Hyde Revision Pack
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A complete revision booklet for Stevenson&apos;s{" "}
            <em>The Strange Case of Dr Jekyll and Mr Hyde</em>. Hand it out
            as mock revision, set as homework, or use as a final-week
            classroom resource.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Year Group
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                Year 10–11
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Exam Board
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                AQA
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Use as
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                Mock revision
              </div>
            </div>
          </div>

          {/* TODO: wire up download-as-PDF */}
          <div className="mt-6">
            <Button variant="default" size="lg">
              Download as PDF
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              PDF export coming soon
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        {/* Key themes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Duality of Human Nature
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The central idea that every human contains both good and
                evil. Stevenson presents Jekyll and Hyde as two sides of
                one man — not a split, but the revealing of something that
                was always there.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Science vs Religion
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Victorian anxiety about unchecked science. Jekyll&apos;s
                transgressive chemistry plays God, and his downfall echoes
                warnings about tampering with nature.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Reputation &amp; Victorian Respectability
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A society obsessed with appearances. Jekyll&apos;s
                desperate need to protect his reputation drives him to
                create Hyde in the first place.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Secrecy &amp; Repression
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Locked doors, sealed letters, private rooms. The novella is
                built on Victorian repression and the violence that
                erupts when desires are denied.
              </p>
            </div>
          </div>
        </section>

        {/* Characters */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Key Characters
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Dr Henry Jekyll</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A respected scientist with a hidden double life. Stevenson
                uses him as a warning about the danger of repressing one&apos;s
                darker impulses. His arc is a slow loss of control.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Mr Edward Hyde</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The embodiment of Jekyll&apos;s evil. Described in animalistic,
                deformed terms. Represents Victorian fears of degeneration
                and the primal beneath the civilised.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Mr Utterson</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The lawyer through whose investigation we experience the
                story. Reserved, loyal, rational — a model Victorian
                gentleman. Our guide into the mystery.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Dr Lanyon</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Jekyll&apos;s scientific foil. His death after witnessing the
                transformation shows the physical cost of confronting the
                truth about human nature.
              </p>
            </div>
          </div>
        </section>

        {/* Quote bank */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Quote Bank
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ten essential quotations to learn by heart. Each is followed by
            a one-line analytical hook.
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                q: "Man is not truly one, but truly two.",
                n: "Jekyll's thesis — dual nature is universal, not exceptional.",
              },
              {
                q: "Something troglodytic.",
                n: "Hyde described in pre-human, animalistic terms — Victorian fears of degeneration.",
              },
              {
                q: "The very pink of the proprieties.",
                n: "Jekyll's public reputation — the mask of respectability.",
              },
              {
                q: "With ape-like fury.",
                n: "Hyde's violence linked to Darwinian anxieties about evolution.",
              },
              {
                q: "I was thinking of my own character.",
                n: "Utterson — reputation matters above all in Victorian London.",
              },
              {
                q: "A certain sinister block of building.",
                n: "Setting mirrors character — pathetic fallacy, the Gothic.",
              },
              {
                q: "The fog rolled over the city.",
                n: "London itself is dual — clean streets and dark alleys side by side.",
              },
              {
                q: "I had gone to bed Henry Jekyll, I had awakened Edward Hyde.",
                n: "Jekyll loses control — Hyde becomes involuntary, then permanent.",
              },
              {
                q: "A being inherently malign and villainous.",
                n: "Hyde is evil incarnate — not a man gone bad but evil made flesh.",
              },
              {
                q: "My devil had been long caged, he came out roaring.",
                n: "Repression does not destroy desire — it amplifies it.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-foreground">
                  <span className="font-semibold">{i + 1}.</span>{" "}
                  <span className="italic">&ldquo;{item.q}&rdquo;</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.n}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Context */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Victorian Context
          </h2>
          <ul className="mt-4 space-y-3 text-foreground">
            <li>
              <strong>Darwin (1859):</strong>{" "}
              <em>On the Origin of Species</em> unsettled Victorian
              certainty about human superiority. Hyde as &quot;ape-like&quot;
              taps into fears of evolution in reverse.
            </li>
            <li>
              <strong>Jack the Ripper (1888):</strong> The novella
              predates the Whitechapel murders by two years but reflects
              the same fears of unseen evil in London streets.
            </li>
            <li>
              <strong>Freud &amp; the unconscious:</strong> Though Freud
              came later, Stevenson is working the same territory —
              the self as layered, desires as hidden.
            </li>
            <li>
              <strong>Gothic tradition:</strong> Doubles, doppelgängers,
              locked doors, transformation — Stevenson draws on a
              long Gothic lineage (Frankenstein, Poe, Hogg).
            </li>
            <li>
              <strong>Victorian London:</strong> A city of sharp
              contrasts — genteel Bloomsbury next to Soho&apos;s squalor.
              The dual city mirrors the dual man.
            </li>
          </ul>
        </section>

        {/* Essay plans */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Graded Essay Plans
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Plan 1: How does Stevenson present duality?
              </h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                <li>
                  Thesis: Stevenson presents duality as universal, not
                  exceptional — a condition of being human.
                </li>
                <li>
                  Para 1: &quot;Man is not truly one, but truly two&quot; —
                  Jekyll as spokesman.
                </li>
                <li>
                  Para 2: Setting — the dual city mirrors the dual man.
                </li>
                <li>
                  Para 3: Hyde&apos;s physicality — duality visible on the body.
                </li>
                <li>
                  Conclusion: Stevenson warns that repression creates
                  monsters.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Plan 2: How is Hyde presented as evil?
              </h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                <li>
                  Thesis: Hyde is presented as pre-civilised evil —
                  primal, animalistic, and uncontrollable.
                </li>
                <li>
                  Para 1: Animal imagery (&quot;ape-like fury&quot;,
                  &quot;troglodytic&quot;).
                </li>
                <li>
                  Para 2: Reactions of others — even Enfield feels
                  instinctive revulsion.
                </li>
                <li>
                  Para 3: Violence without motive — Carew murder.
                </li>
                <li>
                  Conclusion: Hyde reflects Victorian fears of Darwinism
                  and degeneration.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Plan 3: How does Stevenson explore reputation?
              </h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                <li>
                  Thesis: Reputation drives every major character&apos;s
                  actions — and becomes a force for destruction.
                </li>
                <li>Para 1: Jekyll creates Hyde to preserve his name.</li>
                <li>
                  Para 2: Utterson suppresses information to protect
                  friends.
                </li>
                <li>Para 3: Victorian society itself is the culprit.</li>
                <li>
                  Conclusion: Stevenson critiques a culture that forces
                  people to hide their humanity.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Use in Classroom — Tips
          </h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Stagger it:</strong> Don&apos;t give the whole pack
              at once. Release a section per week leading into the mock.
            </li>
            <li>
              <strong>Test the quotes:</strong> Low-stakes quizzing beats
              silent reading. Five-a-day quote quizzes for a week.
            </li>
            <li>
              <strong>Essay plan first:</strong> Plan, don&apos;t just write.
              Students who can plan in 3 minutes beat students who dive
              in.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Differentiation Ideas
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Focus on 5 core quotes rather than all 10</li>
                <li>• Provide a pre-filled essay opening for each plan</li>
                <li>• Use the theme cards as flashcards</li>
                <li>• Work through one character at a time</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Add a conceptualised thesis to each plan</li>
                <li>• Link to another Gothic text (e.g. Frankenstein)</li>
                <li>• Learn three rarer quotes not in the bank</li>
                <li>• Write a full-length timed essay using one of the plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Public-domain notice */}
        <footer className="mt-8 text-xs text-muted-foreground">
          <p>
            <em>The Strange Case of Dr Jekyll and Mr Hyde</em> by Robert Louis
            Stevenson was first published in 1886. Stevenson died in 1894 and
            the text is in the <strong>public domain</strong>. All quotations
            on this page are reproduced from the original novella.
          </p>
        </footer>
      </article>
    </main>
  );
}
