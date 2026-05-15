import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  openGraph: {
    title: 'PEE Paragraph Builder — Worksheet',
    description:
      'A scaffolded PEE (Point, Evidence, Explain) worksheet with sentence starters, a worked example, and differentiation.',
  },
  title: 'PEE Paragraph Builder — Worksheet',
  description:
    'A scaffolded PEE (Point, Evidence, Explain) worksheet with sentence starters, a worked example, and differentiation.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/teacher-library/worksheets/pee-paragraph-builder',
  },
}

export default function PeeParagraphBuilderWorksheet() {
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
            <span className="text-foreground">PEE Paragraph Builder</span>
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
            PEE Paragraph Builder
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A scaffolded worksheet that walks students through Point, Evidence, Explain. Students
            practise writing an analytical paragraph step by step using sentence starters and a
            worked example.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Year Group
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">KS3–KS4</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Format
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">1 side A4</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Objective
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Essay writing</div>
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
          <h2 className="text-2xl font-bold text-foreground">Instructions for Students</h2>
          <p className="mt-3 text-foreground">
            An analytical paragraph has three parts. Use this sheet to build your paragraph step by
            step. Read the extract, then follow the prompts in order. Your finished paragraph should
            flow as a single, polished response.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Step 1: Point</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            What is the main idea of your paragraph? Answer the question directly in one clear
            sentence.
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-foreground">Sentence starters</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• The writer presents [character] as...</li>
              <li>• From the opening, it is clear that...</li>
              <li>• [Writer] uses [method] to suggest that...</li>
              <li>• One way [idea] is explored is through...</li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Your point
            </p>
            <div className="mt-2 h-16 rounded-md border border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Step 2: Evidence</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a short quotation from the extract that proves your point. Keep it short — a
            phrase or single sentence is enough. Embed it inside your own sentence.
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-foreground">Embedding prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• This is shown when [character] is described as &quot;...&quot;</li>
              <li>• The writer&apos;s use of &quot;...&quot; creates...</li>
              <li>• The phrase &quot;...&quot; reveals...</li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Your evidence
            </p>
            <div className="mt-2 h-20 rounded-md border border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Step 3: Explain</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This is the most important part. Zoom in on a specific word or technique in your
            evidence. What method has the writer used? What effect does it create? Why has the
            writer made that choice?
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-foreground">Explain prompts</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>• The word &quot;...&quot; suggests that...</li>
              <li>
                • The writer&apos;s use of [metaphor / personification / verb choice] creates...
              </li>
              <li>• This makes the reader feel...</li>
              <li>• Perhaps the writer wants us to consider...</li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Your explanation
            </p>
            <div className="mt-2 h-32 rounded-md border border-border bg-background" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Worked Example</h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <p className="text-foreground">
              <strong>Question:</strong> How does Dickens present Scrooge in the opening of A
              Christmas Carol?
            </p>
            <p className="mt-4 text-foreground">
              <strong>Point:</strong> Dickens presents Scrooge as emotionally closed off from the
              world around him.
            </p>
            <p className="mt-4 text-foreground">
              <strong>Evidence:</strong> This is shown when Dickens describes him as &quot;solitary
              as an oyster&quot;.
            </p>
            <p className="mt-4 text-foreground">
              <strong>Explain:</strong> The simile suggests that Scrooge is hard on the outside and
              almost impossible to open, just like an oyster. The adjective &quot;solitary&quot;
              reinforces his isolation, making the reader feel a mix of pity and dislike. Perhaps
              Dickens wants us to question whether anyone could ever reach Scrooge — a question the
              rest of the novella sets out to answer.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Differentiation Ideas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Pre-choose the quotation for weaker students</li>
                <li>• Provide a completed Point line to build from</li>
                <li>• Pair with a more confident writer</li>
                <li>• Cap task at 3 sentences per step</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Add a second Evidence &amp; Explain to make a PEEEL</li>
                <li>• Link the quotation to context (AO3)</li>
                <li>• Challenge: use two analytical connectives</li>
                <li>• Redraft the paragraph without the scaffold</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom — Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Read the example first:</strong> Walk through the worked example together
              before students start their own.
            </li>
            <li>
              <strong>Live model:</strong> Build a fresh example on the board in real time so
              students see the thinking, not just the finished product.
            </li>
            <li>
              <strong>Keep Point short:</strong> Students often over-write the Point. One sentence
              is the target.
            </li>
            <li>
              <strong>Push Explain:</strong> Most low-grade paragraphs die in the Explain stage. Ask
              &quot;so what?&quot; twice.
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
