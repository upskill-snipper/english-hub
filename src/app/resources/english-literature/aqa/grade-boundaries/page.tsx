import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AQA GCSE English Literature (8702) Grade Boundaries",
  description:
    "Approximate grade boundaries for AQA GCSE English Literature (8702), what each grade looks like, and how to push your marks higher.",
};

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="rounded-xl border border-border bg-card group"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-bold text-foreground hover:bg-muted transition-colors list-none [&::-webkit-details-marker]:hidden">
        <span className="text-lg">{title}</span>
        <svg
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <div className="border-t border-border px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </details>
  );
}

export default function GradeBoundariesPage() {
  return (
    <>

      {/* Hero */}
      <section
        className="px-4 py-16 text-white sm:py-20"
        style={{ background: "linear-gradient(135deg, #1A5276, #2E86C1)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            AQA GCSE English Literature (8702)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Boundaries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Recent grade boundaries, what each grade looks like in practice,
            and how to push your marks into the next band.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-literature/aqa" className="hover:text-foreground transition-colors">
              AQA English Literature
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Grade Boundaries</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">

        {/* Important note */}
        <div className="rounded-xl border border-warn-200 bg-warn-50 p-6">
          <h2 className="font-bold text-warn-800">Important note</h2>
          <p className="mt-2 text-sm text-warn-700">
            Grade boundaries change every year based on the difficulty of the
            papers and the performance of the whole cohort. The boundaries below
            are from recent exam series and are provided as a <strong>guide</strong>{" "}
            only. Your actual grade boundary may be slightly higher or lower.
            Always check the{" "}
            <a
              href="https://www.aqa.org.uk/results/grade-boundaries"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              AQA website
            </a>{" "}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries */}
        <Section title="Overall grade boundaries (combined Paper 1 + Paper 2)" defaultOpen>
          <p>
            The total number of marks across both papers is <strong>160</strong>.
            Paper 1 (Shakespeare and the 19th-century novel) is worth 40% (64 marks)
            and Paper 2 (Modern texts, Poetry anthology, and Unseen poetry) is worth
            60% (96 marks). Your raw marks from both papers are combined to produce
            your overall grade. Below are the approximate boundaries from recent
            exam series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">Approx. mark (/160)</th>
                  <th className="py-2 pr-4">Approx. %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-success-50">
                  <td className="py-2 pr-4 font-bold text-success-700">9</td>
                  <td className="py-2 pr-4">~136</td>
                  <td className="py-2 pr-4">~85%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">8</td>
                  <td className="py-2 pr-4">~120</td>
                  <td className="py-2 pr-4">~75%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">~104</td>
                  <td className="py-2 pr-4">~65%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">6</td>
                  <td className="py-2 pr-4">~89</td>
                  <td className="py-2 pr-4">~56%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-foreground">5</td>
                  <td className="py-2 pr-4">~74</td>
                  <td className="py-2 pr-4">~46%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">~58</td>
                  <td className="py-2 pr-4">~36%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pr-4">~42</td>
                  <td className="py-2 pr-4">~26%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pr-4">~26</td>
                  <td className="py-2 pr-4">~16%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pr-4">~12</td>
                  <td className="py-2 pr-4">~8%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly
            available AQA data. The &ldquo;Approx. %&rdquo; column shows
            roughly what percentage of the total 160 marks you need.
          </p>
        </Section>

        {/* What each grade looks like */}
        <Section title="What each grade looks like in practice">
          <p>
            Understanding the grade descriptors helps you see exactly what
            examiners expect at each level. Here is what typical work looks like
            at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-l-4 border-success-500 bg-success-50/30 p-5">
              <h3 className="text-lg font-bold text-success-700">Grade 9 &mdash; Exceptional</h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>Critical, exploratory, conceptualised response to texts.</li>
                  <li>Judicious use of precise references to support interpretation.</li>
                  <li>Analysis of the writer&rsquo;s methods with subject terminology used judiciously.</li>
                  <li>Exploration of the effects of the writer&rsquo;s methods on the reader.</li>
                  <li>Exploration of ideas, perspectives, and contextual factors shown across the task.</li>
                  <li>Convincing, critical analysis and exploration in the Shakespeare extract and wider play.</li>
                  <li>Sophisticated comparison of poems from the AQA anthology with a clear personal response.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-[#2E86C1] bg-blue-50/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 7-8 &mdash; Strong</h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>Thoughtful, developed response to texts with a clear personal voice.</li>
                  <li>Apt references integrated into interpretations.</li>
                  <li>Examination of the writer&rsquo;s methods with subject terminology used effectively.</li>
                  <li>Understanding of the effects of the writer&rsquo;s methods on the reader.</li>
                  <li>Thoughtful consideration of ideas, perspectives, and contextual factors.</li>
                  <li>Detailed analysis of the Shakespeare extract linked convincingly to the wider play.</li>
                  <li>Confident analysis of unseen poetry exploring form, structure, and language choices.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50/20 p-5">
              <h3 className="text-lg font-bold text-foreground">Grades 5-6 &mdash; Secure</h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>Clear, explained response to texts with relevant ideas.</li>
                  <li>References used effectively to support explanations.</li>
                  <li>Clear explanation of writer&rsquo;s methods with appropriate use of subject terminology.</li>
                  <li>Understanding of some effects of the writer&rsquo;s methods.</li>
                  <li>Some understanding of ideas, perspectives, and contextual factors.</li>
                  <li>Clear response to the 19th-century novel with relevant textual references.</li>
                  <li>Competent response to unseen poetry with some analysis of language and structure.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">Grade 4 &mdash; Standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>Some explained response to texts, though may lack consistency.</li>
                  <li>References used to support some points, though not always well-selected.</li>
                  <li>Some awareness of the writer&rsquo;s methods; some subject terminology used.</li>
                  <li>Some comment on the effects of the writer&rsquo;s choices.</li>
                  <li>Some awareness of contextual factors, though may be superficial.</li>
                  <li>Some response to the modern text with basic understanding of themes and characters.</li>
                  <li>Some response to unseen poetry with basic identification of features.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-gray-300 bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">Grades 1-3 &mdash; Below standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple, limited comments on texts with little development.</li>
                  <li>References may be general or paraphrased rather than specific.</li>
                  <li>Limited awareness of the writer&rsquo;s methods; little or no subject terminology.</li>
                  <li>May retell the plot or describe events rather than analyse.</li>
                  <li>Little or no reference to context.</li>
                  <li>Limited engagement with the poetry anthology or unseen poetry.</li>
                  <li>Simple comments on unseen poetry with little analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* How to push your grade up */}
        <Section title="How to push your grade higher">
          <p>
            Here are targeted strategies for moving from one grade band to the
            next:
          </p>

          <div className="mt-4 space-y-5">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">Grade 4 &rarr; Grade 5</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Quotations:</strong> Move beyond retelling the story.
                  Select short, specific quotations and explain what they
                  reveal about the character, theme, or writer&rsquo;s purpose.
                </li>
                <li>
                  <strong>Terminology:</strong> Learn and use key literary
                  terms accurately &mdash; metaphor, simile, pathetic fallacy,
                  iambic pentameter, enjambment. Even basic terminology used
                  correctly lifts your analysis.
                </li>
                <li>
                  <strong>Completeness:</strong> Attempt every question in full.
                  Leaving out the unseen poetry comparison or the poetry
                  anthology question is the most common reason students miss
                  a Grade 5.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">Grade 5 &rarr; Grade 7</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Analysis depth:</strong> Move from explaining what a
                  quotation means to analysing <em>how</em> the language
                  creates its effect. Explore connotations of individual words
                  and consider why the writer chose them.
                </li>
                <li>
                  <strong>Context:</strong> Integrate contextual knowledge
                  naturally. Instead of a separate paragraph about context,
                  weave it into your analysis: &ldquo;Shakespeare uses this
                  to reflect the Jacobean belief that&hellip;&rdquo;
                </li>
                <li>
                  <strong>Poetry anthology:</strong> Know all 15 poems in your
                  chosen cluster well enough to compare any two. Practise
                  linking poems by theme, tone, and method rather than
                  memorising a fixed pairing.
                </li>
                <li>
                  <strong>Unseen poetry:</strong> Practise reading poems you
                  have never seen before. Build a toolkit for approaching
                  unfamiliar texts: start with subject, then move to tone,
                  imagery, form, and structure.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">Grade 7 &rarr; Grade 9</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Conceptualised response:</strong> Frame your essay
                  around a clear argument or interpretation. A Grade 9 response
                  has a thesis &mdash; a thread that runs through every
                  paragraph, not a series of disconnected points.
                </li>
                <li>
                  <strong>Alternative interpretations:</strong> Explore how a
                  text could be read differently: &ldquo;A feminist reading
                  might suggest&hellip;&rdquo; or &ldquo;While the surface
                  reading implies X, the imagery subtly undermines
                  this&hellip;&rdquo;
                </li>
                <li>
                  <strong>Writer&rsquo;s craft:</strong> Go beyond individual
                  techniques to consider how the whole text is constructed.
                  How does the opening relate to the ending? How does the
                  structure mirror the themes?
                </li>
                <li>
                  <strong>Wider reading:</strong> Students who achieve Grade 9
                  read widely and bring a mature critical vocabulary to their
                  analysis. Read literary criticism, reviews, and essays to
                  develop a sophisticated analytical voice.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Paper breakdown */}
        <Section title="Paper breakdown at a glance">
          <p className="mb-4">
            AQA GCSE English Literature (8702) is split into two papers.
            Paper 1 (Shakespeare and the 19th-century novel) is worth 40% and
            Paper 2 (Modern texts, Poetry anthology, and Unseen poetry) is worth 60%.
          </p>

          <h3 className="font-bold text-foreground mb-2">Paper 1 &mdash; Shakespeare and the 19th-century novel (40%)</h3>
          <p className="text-sm text-muted-foreground mb-3">1 hour 45 minutes &bull; 64 marks</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4 font-semibold">A &mdash; Shakespeare</td>
                  <td className="py-2 pr-4">Extract + essay</td>
                  <td className="py-2 pr-4">30 marks + 4 SPaG</td>
                  <td className="py-2 pr-4">Shakespeare play (extract-based essay)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">B &mdash; 19th-century novel</td>
                  <td className="py-2 pr-4">Extract + essay</td>
                  <td className="py-2 pr-4">30 marks</td>
                  <td className="py-2 pr-4">19th-century novel (extract-based essay)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4" colSpan={2}>Paper 1 Total</td>
                  <td className="py-2 pr-4">64 marks</td>
                  <td className="py-2 pr-4">40% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-foreground mt-6 mb-2">Paper 2 &mdash; Modern texts, Poetry anthology and Unseen poetry (60%)</h3>
          <p className="text-sm text-muted-foreground mb-3">2 hours 15 minutes &bull; 96 marks</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4 font-semibold">A &mdash; Modern texts</td>
                  <td className="py-2 pr-4">Essay question</td>
                  <td className="py-2 pr-4">34 marks + 4 SPaG</td>
                  <td className="py-2 pr-4">Modern prose or drama (essay from choice of two)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">B &mdash; Poetry anthology</td>
                  <td className="py-2 pr-4">Comparison</td>
                  <td className="py-2 pr-4">30 marks</td>
                  <td className="py-2 pr-4">One named poem compared with one of your choice</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold" rowSpan={2}>C &mdash; Unseen poetry</td>
                  <td className="py-2 pr-4">C1</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Analysis of one unseen poem</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">C2</td>
                  <td className="py-2 pr-4">8 marks</td>
                  <td className="py-2 pr-4">Comparison of two unseen poems</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4" colSpan={2}>Paper 2 Total</td>
                  <td className="py-2 pr-4">96 marks</td>
                  <td className="py-2 pr-4">60% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Paper 2 carries more weight and includes both the poetry anthology
            and unseen poetry sections. Knowing your anthology poems inside out
            and practising unseen poetry under timed conditions are two of the
            most effective ways to improve your overall Literature grade.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-literature/aqa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to AQA English Literature
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
